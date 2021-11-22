# Examples

##  Run a Gym environment

<el-link type="primary" icon="el-icon-bottom" :underline="false" style="margin: 10px" href="../notebooks/gym_env.ipynb">Download Notebook</el-link>
<el-link type="warning" icon="el-icon-cloudy" :underline="false" style="margin: 10px" href="https://colab.research.google.com/github/airbus/scikit-decide/blob/gh-pages/notebooks/gym_env.ipynb">Run in Google Colab</el-link>

Import modules.

``` py
import gym

from skdecide.hub.domain.gym import GymDomain
from skdecide.utils import rollout
```

Select a [Gym environment](https://gym.openai.com/envs) and run 5 episodes.

``` py
ENV_NAME = "CartPole-v1"  # or any other installed environment ('MsPacman-v4'...)

gym_domain = GymDomain(gym.make(ENV_NAME))
rollout(
    gym_domain, num_episodes=5, max_steps=1000, max_framerate=30, outcome_formatter=None
)
gym_domain.close()  # optional but recommended to avoid Gym errors at the end
```

##  Solve a Gym environment with Reinforcement Learning

<el-link type="primary" icon="el-icon-bottom" :underline="false" style="margin: 10px" href="../notebooks/baselines_solver.ipynb">Download Notebook</el-link>
<el-link type="warning" icon="el-icon-cloudy" :underline="false" style="margin: 10px" href="https://colab.research.google.com/github/airbus/scikit-decide/blob/gh-pages/notebooks/baselines_solver.ipynb">Run in Google Colab</el-link>

Import modules.

``` py
import gym
from stable_baselines3 import PPO

from skdecide.hub.domain.gym import GymDomain
from skdecide.hub.solver.stable_baselines import StableBaseline
from skdecide.utils import rollout
```

Select a [Gym environment](https://gym.openai.com/envs) and solve it with a [Stable Baselines](https://stable-baselines3.readthedocs.io/en/master/index.html) solver wrapped in scikit-decide.
The solution is then saved (for later reuse) and assessed in rollout.

``` py
ENV_NAME = "CartPole-v1"

domain_factory = lambda: GymDomain(gym.make(ENV_NAME))
domain = domain_factory()
if StableBaseline.check_domain(domain):
    solver_factory = lambda: StableBaseline(
        PPO, "MlpPolicy", learn_config={"total_timesteps": 30000}, verbose=1
    )
    with solver_factory() as solver:
        GymDomain.solve_with(solver, domain_factory)
        solver.save("TEMP_Baselines")
        rollout(
            domain,
            solver,
            num_episodes=1,
            max_steps=1000,
            max_framerate=30,
            outcome_formatter=None,
        )
```

Restore saved solution and re-run rollout.

``` py
with solver_factory() as solver:
    GymDomain.solve_with(solver, domain_factory, load_path="TEMP_Baselines")
    rollout(
        domain,
        solver,
        num_episodes=1,
        max_steps=1000,
        max_framerate=30,
        outcome_formatter=None,
    )
```

##  Solve a Gym environment with Cartesian Genetic Programming

<el-link type="primary" icon="el-icon-bottom" :underline="false" style="margin: 10px" href="../notebooks/cgp_solver.ipynb">Download Notebook</el-link>
<el-link type="warning" icon="el-icon-cloudy" :underline="false" style="margin: 10px" href="https://colab.research.google.com/github/airbus/scikit-decide/blob/gh-pages/notebooks/cgp_solver.ipynb">Run in Google Colab</el-link>

Import modules.

``` py
import gym

from skdecide.hub.domain.gym import GymDomain
from skdecide.hub.solver.cgp import CGP  # Cartesian Genetic Programming
from skdecide.utils import rollout
```

Select a [Gym environment](https://gym.openai.com/envs) and solve it with Cartesian Genetic Programming in scikit-decide.
The solution is then assessed in rollout.

``` py
ENV_NAME = "MountainCarContinuous-v0"

domain_factory = lambda: GymDomain(gym.make(ENV_NAME))
domain = domain_factory()
if CGP.check_domain(domain):
    solver_factory = lambda: CGP("TEMP_CGP", n_it=25)
    with solver_factory() as solver:
        GymDomain.solve_with(solver, domain_factory)
        rollout(
            domain,
            solver,
            num_episodes=5,
            max_steps=1000,
            max_framerate=30,
            outcome_formatter=None,
        )
```

##  Create a maze domain and solve it

<el-link type="primary" icon="el-icon-bottom" :underline="false" style="margin: 10px" href="../notebooks/tutorial.ipynb">Download Notebook</el-link>
<el-link type="warning" icon="el-icon-cloudy" :underline="false" style="margin: 10px" href="https://colab.research.google.com/github/airbus/scikit-decide/blob/gh-pages/notebooks/tutorial.ipynb">Run in Google Colab</el-link>

Import modules.

``` py
from enum import Enum
from typing import *

from skdecide import *
from skdecide.builders.domain import *
from skdecide.hub.solver.lazy_astar import LazyAstar
from skdecide.hub.space.gym import EnumSpace, ListSpace
from skdecide.utils import rollout
```

Define your state space (agent positions) & action space (agent movements).

``` py
class State(NamedTuple):
    x: int
    y: int


class Action(Enum):
    up = 0
    down = 1
    left = 2
    right = 3
```

Define your domain type from a base template (DeterministicPlanningDomain here) with optional refinements (UnrestrictedActions & Renderable here).

``` py
class D(DeterministicPlanningDomain, UnrestrictedActions, Renderable):
    T_state = State  # Type of states
    T_observation = T_state  # Type of observations
    T_event = Action  # Type of events
    T_value = float  # Type of transition values (rewards or costs)
    T_predicate = bool  # Type of logical checks
    T_info = None  # Type of additional information in environment outcome
```

Implement the maze domain by filling all non-implemented methods and adding a constructor to define the maze & start/end positions.

``` py
class MyDomain(D):
    def __init__(self, start, end, maze_str):
        self.start = start
        self.end = end
        self.maze_str = maze_str.strip()
        self.maze = self.maze_str.splitlines()

    def _get_next_state(self, memory: D.T_state, action: D.T_event) -> D.T_state:
        # Move agent according to action (except if bumping into a wall)
        next_x, next_y = memory.x, memory.y
        if action == Action.up:
            next_x -= 1
        if action == Action.down:
            next_x += 1
        if action == Action.left:
            next_y -= 1
        if action == Action.right:
            next_y += 1
        return State(next_x, next_y) if self.maze[next_x][next_y] != "." else memory

    def _get_transition_value(
        self,
        memory: D.T_state,
        action: D.T_event,
        next_state: Optional[D.T_state] = None,
    ) -> Value[D.T_value]:
        # Set cost to 1 when moving (energy cost) and to 2 when bumping into a wall (damage cost)
        return Value(cost=1 if next_state != memory else 2)

    def _get_initial_state_(self) -> D.T_state:
        # Set the start position as initial state
        return self.start

    def _get_goals_(self) -> Space[D.T_observation]:
        # Set the end position as goal
        return ListSpace([self.end])

    def _is_terminal(self, state: D.T_state) -> D.T_agent[D.T_predicate]:
        # Stop an episode only when goal reached
        return self._is_goal(state)

    def _get_action_space_(self) -> Space[D.T_event]:
        # Define action space
        return EnumSpace(Action)

    def _get_observation_space_(self) -> Space[D.T_observation]:
        # Define observation space (not mandatory here)
        pass

    def _render_from(self, memory: D.T_state, **kwargs: Any) -> Any:
        # Print the maze in console with agent represented by 'o'
        cols = len(self.maze[0]) + 1
        pos = memory.x * cols + memory.y
        render = self.maze_str[:pos] + "o" + self.maze_str[pos + 1 :]
        print(render)
```

Define a maze and test a random walk inside.

``` py
# Maze example ('.' represent walls, ' ' represent free space)
maze_str = """
.....................
.   .             . .
. . . ....... ... . .
. . .   .   . . .   .
. ..... ... . . . ...
. .   .   . .   .   .
. . . . . . . ... ...
.   .   .   . .     .
............... ... .
.             .   . .
. ......... . ..... .
.   .       .       .
. . . ... ... .......
. . .   .     .     .
. ..... . ... . ... .
. .     . . . .   . .
... ... . . . ... . .
.   .   .   .   . . .
. ... ......... . . .
.   .       .     . .
.....................
"""

# Start top-left, try to reach bottom-right of this maze
domain = MyDomain(State(1, 1), State(19, 19), maze_str)

# Random walk in the maze (may sometimes reach the goal by chance)
rollout(domain, max_steps=100, render=False)
```

Pick a solver (lazy A*) and solve the maze optimally.

``` py
# Check solver compatibility with the domain
assert LazyAstar.check_domain(domain)

# Compute solution and visualize it
with LazyAstar() as solver:
    MyDomain.solve_with(solver, lambda: MyDomain(State(1, 1), State(19, 19), maze_str))
    rollout(domain, solver, max_steps=100, max_framerate=10, verbose=False)
```

