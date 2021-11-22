(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{669:function(e,t,a){"use strict";a.r(t);var s=a(38),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hub-solver-stable-baselines-stable-baselines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hub-solver-stable-baselines-stable-baselines"}},[e._v("#")]),e._v(" hub.solver.stable_baselines.stable_baselines")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#stablebaseline"}},[e._v("StableBaseline")]),a("ul",[a("li",[a("a",{attrs:{href:"#constructor-badge-text-stablebaseline-type-tip"}},[e._v("Constructor "),a("Badge",{attrs:{text:"StableBaseline",type:"tip"}})],1)]),a("li",[a("a",{attrs:{href:"#check-domain-badge-text-solver-type-warn"}},[e._v("check_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#get-domain-requirements-badge-text-solver-type-warn"}},[e._v("get_domain_requirements "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#is-policy-defined-for-badge-text-policies-type-warn"}},[e._v("is_policy_defined_for "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#load-badge-text-restorable-type-warn"}},[e._v("load "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#reset-badge-text-solver-type-warn"}},[e._v("reset "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#sample-action-badge-text-policies-type-warn"}},[e._v("sample_action "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#save-badge-text-restorable-type-warn"}},[e._v("save "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#solve-badge-text-solver-type-warn"}},[e._v("solve "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#solve-from-badge-text-solver-type-warn"}},[e._v("solve_from "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#check-domain-badge-text-solver-type-warn"}},[e._v("_check_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#check-domain-additional-badge-text-solver-type-warn"}},[e._v("_check_domain_additional "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#cleanup-badge-text-solver-type-warn"}},[e._v("_cleanup "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#get-domain-requirements-badge-text-solver-type-warn"}},[e._v("_get_domain_requirements "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#initialize-badge-text-solver-type-warn"}},[e._v("_initialize "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#is-policy-defined-for-badge-text-policies-type-warn"}},[e._v("_is_policy_defined_for "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#load-badge-text-restorable-type-warn"}},[e._v("_load "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#reset-badge-text-solver-type-warn"}},[e._v("_reset "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#sample-action-badge-text-policies-type-warn"}},[e._v("_sample_action "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#save-badge-text-restorable-type-warn"}},[e._v("_save "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#solve-badge-text-solver-type-warn"}},[e._v("_solve "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#solve-domain-badge-text-solver-type-warn"}},[e._v("_solve_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)]),a("li",[a("a",{attrs:{href:"#solve-from-badge-text-solver-type-warn"}},[e._v("_solve_from "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1)])])])])]),a("p"),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("skdecide-summary")],1),e._v(" "),a("h2",{attrs:{id:"stablebaseline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stablebaseline"}},[e._v("#")]),e._v(" StableBaseline")]),e._v(" "),a("p",[e._v("This class wraps a stable OpenAI Baselines solver (stable_baselines3) as a scikit-decide solver.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Using this class requires Stable Baselines 3 to be installed.")])]),e._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[e._v("#")]),e._v(" Constructor "),a("Badge",{attrs:{text:"StableBaseline",type:"tip"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"StableBaseline",sig:{params:[{name:"algo_class",annotation:"type"},{name:"baselines_policy",annotation:"Any"},{name:"learn_config",default:"None",annotation:"Dict"},{name:"kwargs",annotation:"Any"}],return:"None"}}}),e._v(" "),a("p",[e._v("Initialize StableBaselines.")]),e._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("algo_class")]),e._v(": The class of Baselines solver (stable_baselines3) to wrap.")]),e._v(" "),a("li",[a("strong",[e._v("baselines_policy")]),e._v(": The class of Baselines policy network (stable_baselines3.common.policies or str) to use.")])]),e._v(" "),a("h3",{attrs:{id:"check-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-domain"}},[e._v("#")]),e._v(" check_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"check_domain",sig:{params:[{name:"domain",annotation:"Domain"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Check whether a domain is compliant with this solver type.")]),e._v(" "),a("p",[e._v("By default, "),a("code",[e._v("Solver.check_domain()")]),e._v(" provides some boilerplate code and internally\ncalls "),a("code",[e._v("Solver._check_domain_additional()")]),e._v(' (which returns True by default but can be overridden  to define\nspecific checks in addition to the "domain requirements"). The boilerplate code automatically checks whether all\ndomain requirements are met.')]),e._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain")]),e._v(": The domain to check.")])]),e._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("True if the domain is compliant with the solver type (False otherwise).")]),e._v(" "),a("h3",{attrs:{id:"get-domain-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-domain-requirements"}},[e._v("#")]),e._v(" get_domain_requirements "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"get_domain_requirements",sig:{params:[],return:"List[type]"}}}),e._v(" "),a("p",[e._v("Get domain requirements for this solver class to be applicable.")]),e._v(" "),a("p",[e._v("Domain requirements are classes from the "),a("code",[e._v("skdecide.builders.domain")]),e._v(" package that the domain needs to inherit from.")]),e._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("A list of classes to inherit from.")]),e._v(" "),a("h3",{attrs:{id:"is-policy-defined-for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-policy-defined-for"}},[e._v("#")]),e._v(" is_policy_defined_for "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"is_policy_defined_for",sig:{params:[{name:"self"},{name:"observation",annotation:"D.T_agent[D.T_observation]"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Check whether the solver's current policy is defined for the given observation.")]),e._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("observation")]),e._v(": The observation to consider.")])]),e._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("True if the policy is defined for the given observation memory (False otherwise).")]),e._v(" "),a("h3",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[e._v("#")]),e._v(" load "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"load",sig:{params:[{name:"self"},{name:"path",annotation:"str"},{name:"domain_factory",annotation:"Callable[[], D]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Restore the solver state from given path.")]),e._v(" "),a("h4",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("path")]),e._v(": The path where the solver state was saved.")]),e._v(" "),a("li",[a("strong",[e._v("domain_factory")]),e._v(": A callable with no argument returning the domain to solve (useful in some implementations).")])]),e._v(" "),a("h3",{attrs:{id:"reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset"}},[e._v("#")]),e._v(" reset "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"reset",sig:{params:[{name:"self"}],return:"None"}}}),e._v(" "),a("p",[e._v("Reset whatever is needed on this solver before running a new episode.")]),e._v(" "),a("p",[e._v("This function does nothing by default but can be overridden if needed (e.g. to reset the hidden state of a LSTM\npolicy network, which carries information about past observations seen in the previous episode).")]),e._v(" "),a("h3",{attrs:{id:"sample-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-action"}},[e._v("#")]),e._v(" sample_action "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"sample_action",sig:{params:[{name:"self"},{name:"observation",annotation:"D.T_agent[D.T_observation]"}],return:"D.T_agent[D.T_concurrency[D.T_event]]"}}}),e._v(" "),a("p",[e._v("Sample an action for the given observation (from the solver's current policy).")]),e._v(" "),a("h4",{attrs:{id:"parameters-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("observation")]),e._v(": The observation for which an action must be sampled.")])]),e._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("The sampled action.")]),e._v(" "),a("h3",{attrs:{id:"save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[e._v("#")]),e._v(" save "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"save",sig:{params:[{name:"self"},{name:"path",annotation:"str"}],return:"None"}}}),e._v(" "),a("p",[e._v("Save the solver state to given path.")]),e._v(" "),a("h4",{attrs:{id:"parameters-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-6"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("path")]),e._v(": The path to store the saved state.")])]),e._v(" "),a("h3",{attrs:{id:"solve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solve"}},[e._v("#")]),e._v(" solve "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"solve",sig:{params:[{name:"self"},{name:"domain_factory",annotation:"Callable[[], Domain]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Run the solving process.")]),e._v(" "),a("p",[e._v("By default, "),a("code",[e._v("Solver.solve()")]),e._v(" provides some boilerplate code and internally calls "),a("code",[e._v("Solver._solve()")]),e._v(". The\nboilerplate code transforms the domain factory to auto-cast the new domains to the level expected by the solver.")]),e._v(" "),a("h4",{attrs:{id:"parameters-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-7"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain_factory")]),e._v(": A callable with no argument returning the domain to solve (can be just a domain class).")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The nature of the solutions produced here depends on other solver's characteristics like\n"),a("code",[e._v("policy")]),e._v(" and "),a("code",[e._v("assessibility")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"solve-from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solve-from"}},[e._v("#")]),e._v(" solve_from "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"solve_from",sig:{params:[{name:"self"},{name:"memory",annotation:"D.T_memory[D.T_state]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Run the solving process from a given state.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Create the domain first by calling the @Solver.reset() method")])]),e._v(" "),a("h4",{attrs:{id:"parameters-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-8"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("memory")]),e._v(": The source memory (state or history) of the transition.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The nature of the solutions produced here depends on other solver's characteristics like\n"),a("code",[e._v("policy")]),e._v(" and "),a("code",[e._v("assessibility")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"check-domain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-domain-2"}},[e._v("#")]),e._v(" _check_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_check_domain",sig:{params:[{name:"domain",annotation:"Domain"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Check whether a domain is compliant with this solver type.")]),e._v(" "),a("p",[e._v("By default, "),a("code",[e._v("Solver._check_domain()")]),e._v(" provides some boilerplate code and internally\ncalls "),a("code",[e._v("Solver._check_domain_additional()")]),e._v(' (which returns True by default but can be overridden to define specific\nchecks in addition to the "domain requirements"). The boilerplate code automatically checks whether all domain\nrequirements are met.')]),e._v(" "),a("h4",{attrs:{id:"parameters-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-9"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain")]),e._v(": The domain to check.")])]),e._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("True if the domain is compliant with the solver type (False otherwise).")]),e._v(" "),a("h3",{attrs:{id:"check-domain-additional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-domain-additional"}},[e._v("#")]),e._v(" _check_domain_additional "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_check_domain_additional",sig:{params:[{name:"domain",annotation:"Domain"}],return:"bool"}}}),e._v(" "),a("p",[e._v('Check whether the given domain is compliant with the specific requirements of this solver type (i.e. the\nones in addition to "domain requirements").')]),e._v(" "),a("p",[e._v("This is a helper function called by default from "),a("code",[e._v("Solver._check_domain()")]),e._v(". It focuses on specific checks, as\nopposed to taking also into account the domain requirements for the latter.")]),e._v(" "),a("h4",{attrs:{id:"parameters-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-10"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain")]),e._v(": The domain to check.")])]),e._v(" "),a("h4",{attrs:{id:"returns-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-6"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("True if the domain is compliant with the specific requirements of this solver type (False otherwise).")]),e._v(" "),a("h3",{attrs:{id:"cleanup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" _cleanup "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_cleanup",sig:{params:[{name:"self"}]}}}),e._v(" "),a("p",[e._v("Runs cleanup code here, or code to be executed at the exit of a\n'with' context statement.")]),e._v(" "),a("h3",{attrs:{id:"get-domain-requirements-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-domain-requirements-2"}},[e._v("#")]),e._v(" _get_domain_requirements "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_get_domain_requirements",sig:{params:[],return:"List[type]"}}}),e._v(" "),a("p",[e._v("Get domain requirements for this solver class to be applicable.")]),e._v(" "),a("p",[e._v("Domain requirements are classes from the "),a("code",[e._v("skdecide.builders.domain")]),e._v(" package that the domain needs to inherit from.")]),e._v(" "),a("h4",{attrs:{id:"returns-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-7"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("A list of classes to inherit from.")]),e._v(" "),a("h3",{attrs:{id:"initialize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initialize"}},[e._v("#")]),e._v(" _initialize "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_initialize",sig:{params:[{name:"self"}]}}}),e._v(" "),a("p",[e._v("Runs long-lasting initialization code here, or code to be executed at the\nentering of a 'with' context statement.")]),e._v(" "),a("h3",{attrs:{id:"is-policy-defined-for-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-policy-defined-for-2"}},[e._v("#")]),e._v(" _is_policy_defined_for "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_is_policy_defined_for",sig:{params:[{name:"self"},{name:"observation",annotation:"D.T_agent[D.T_observation]"}],return:"bool"}}}),e._v(" "),a("p",[e._v("Check whether the solver's current policy is defined for the given observation.")]),e._v(" "),a("h4",{attrs:{id:"parameters-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-11"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("observation")]),e._v(": The observation to consider.")])]),e._v(" "),a("h4",{attrs:{id:"returns-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-8"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("True if the policy is defined for the given observation memory (False otherwise).")]),e._v(" "),a("h3",{attrs:{id:"load-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-2"}},[e._v("#")]),e._v(" _load "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_load",sig:{params:[{name:"self"},{name:"path",annotation:"str"},{name:"domain_factory",annotation:"Callable[[], D]"}]}}}),e._v(" "),a("p",[e._v("Restore the solver state from given path.")]),e._v(" "),a("h4",{attrs:{id:"parameters-12"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-12"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("path")]),e._v(": The path where the solver state was saved.")]),e._v(" "),a("li",[a("strong",[e._v("domain_factory")]),e._v(": A callable with no argument returning the domain to solve (useful in some implementations).")])]),e._v(" "),a("h3",{attrs:{id:"reset-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-2"}},[e._v("#")]),e._v(" _reset "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_reset",sig:{params:[{name:"self"}],return:"None"}}}),e._v(" "),a("p",[e._v("Reset whatever is needed on this solver before running a new episode.")]),e._v(" "),a("p",[e._v("This function does nothing by default but can be overridden if needed (e.g. to reset the hidden state of a LSTM\npolicy network, which carries information about past observations seen in the previous episode).")]),e._v(" "),a("h3",{attrs:{id:"sample-action-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-action-2"}},[e._v("#")]),e._v(" _sample_action "),a("Badge",{attrs:{text:"Policies",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_sample_action",sig:{params:[{name:"self"},{name:"observation",annotation:"D.T_agent[D.T_observation]"}],return:"D.T_agent[D.T_concurrency[D.T_event]]"}}}),e._v(" "),a("p",[e._v("Sample an action for the given observation (from the solver's current policy).")]),e._v(" "),a("h4",{attrs:{id:"parameters-13"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-13"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("observation")]),e._v(": The observation for which an action must be sampled.")])]),e._v(" "),a("h4",{attrs:{id:"returns-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-9"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("The sampled action.")]),e._v(" "),a("h3",{attrs:{id:"save-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#save-2"}},[e._v("#")]),e._v(" _save "),a("Badge",{attrs:{text:"Restorable",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_save",sig:{params:[{name:"self"},{name:"path",annotation:"str"}],return:"None"}}}),e._v(" "),a("p",[e._v("Save the solver state to given path.")]),e._v(" "),a("h4",{attrs:{id:"parameters-14"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-14"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("path")]),e._v(": The path to store the saved state.")])]),e._v(" "),a("h3",{attrs:{id:"solve-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solve-2"}},[e._v("#")]),e._v(" _solve "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_solve",sig:{params:[{name:"self"},{name:"domain_factory",annotation:"Callable[[], Domain]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Run the solving process.")]),e._v(" "),a("p",[e._v("By default, "),a("code",[e._v("Solver._solve()")]),e._v(" provides some boilerplate code and internally calls "),a("code",[e._v("Solver._solve_domain()")]),e._v(". The\nboilerplate code transforms the domain factory to auto-cast the new domains to the level expected by the solver.")]),e._v(" "),a("h4",{attrs:{id:"parameters-15"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-15"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain_factory")]),e._v(": A callable with no argument returning the domain to solve (can be just a domain class).")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The nature of the solutions produced here depends on other solver's characteristics like\n"),a("code",[e._v("policy")]),e._v(" and "),a("code",[e._v("assessibility")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"solve-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solve-domain"}},[e._v("#")]),e._v(" _solve_domain "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_solve_domain",sig:{params:[{name:"self"},{name:"domain_factory",annotation:"Callable[[], D]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Run the solving process.")]),e._v(" "),a("p",[e._v("This is a helper function called by default from "),a("code",[e._v("Solver._solve()")]),e._v(", the difference being that the domain factory\nhere returns domains auto-cast to the level expected by the solver.")]),e._v(" "),a("h4",{attrs:{id:"parameters-16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-16"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("domain_factory")]),e._v(": A callable with no argument returning the domain to solve (auto-cast to expected level).")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The nature of the solutions produced here depends on other solver's characteristics like\n"),a("code",[e._v("policy")]),e._v(" and "),a("code",[e._v("assessibility")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"solve-from-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solve-from-2"}},[e._v("#")]),e._v(" _solve_from "),a("Badge",{attrs:{text:"Solver",type:"warn"}})],1),e._v(" "),a("skdecide-signature",{attrs:{name:"_solve_from",sig:{params:[{name:"self"},{name:"memory",annotation:"D.T_memory[D.T_state]"}],return:"None"}}}),e._v(" "),a("p",[e._v("Run the solving process from a given state.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Create the domain first by calling the @Solver.reset() method")])]),e._v(" "),a("h4",{attrs:{id:"parameters-17"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-17"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("memory")]),e._v(": The source memory (state or history) of the transition.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The nature of the solutions produced here depends on other solver's characteristics like\n"),a("code",[e._v("policy")]),e._v(" and "),a("code",[e._v("assessibility")]),e._v(".")])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);