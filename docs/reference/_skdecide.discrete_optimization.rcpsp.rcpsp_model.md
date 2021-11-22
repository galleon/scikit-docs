# discrete_optimization.rcpsp.rcpsp_model

[[toc]]

::: tip
<skdecide-summary></skdecide-summary>
:::

## ScheduleGenerationScheme

An enumeration.

## RCPSPSolution

rcpsp_permutation: Union[List[int], np.array]
rcpsp_schedule: Dict[int, Dict]  # {task_id: {'start': start_time, 'end': end_time, 'resources': list_of_resource_ids}}
rcpsp_modes: List[int]  # {task_id: mode_id}
standardised_permutation: Union[List[int], np.array]

### Constructor <Badge text="RCPSPSolution" type="tip"/>

<skdecide-signature name= "RCPSPSolution" :sig="{'params': [{'name': 'problem'}, {'name': 'rcpsp_permutation', 'default': 'None'}, {'name': 'rcpsp_schedule', 'default': 'None'}, {'name': 'rcpsp_modes', 'default': 'None'}, {'name': 'rcpsp_schedule_feasible', 'default': 'None'}, {'name': 'standardised_permutation', 'default': 'None'}]}"></skdecide-signature>

Initialize self.  See help(type(self)) for accurate signature.

## MethodBaseRobustification

An enumeration.

