(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{569:function(t,e,a){"use strict";a.r(e);var r=a(38),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"discrete-optimization-generic-tools-cp-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discrete-optimization-generic-tools-cp-tools"}},[t._v("#")]),t._v(" discrete_optimization.generic_tools.cp_tools")]),t._v(" "),a("p",[t._v("Constraint programming common utilities and class that should be used by any solver using CP")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#cpsolvername"}},[t._v("CPSolverName")])]),a("li",[a("a",{attrs:{href:"#parameterscp"}},[t._v("ParametersCP")]),a("ul",[a("li",[a("a",{attrs:{href:"#constructor-badge-text-parameterscp-type-tip"}},[t._v("Constructor "),a("Badge",{attrs:{text:"ParametersCP",type:"tip"}})],1)])])]),a("li",[a("a",{attrs:{href:"#cpsolver"}},[t._v("CPSolver")]),a("ul",[a("li",[a("a",{attrs:{href:"#init-model-badge-text-cpsolver-type-tip"}},[t._v("init_model "),a("Badge",{attrs:{text:"CPSolver",type:"tip"}})],1)]),a("li",[a("a",{attrs:{href:"#retrieve-solutions-badge-text-cpsolver-type-tip"}},[t._v("retrieve_solutions "),a("Badge",{attrs:{text:"CPSolver",type:"tip"}})],1)])])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("skdecide-summary")],1),t._v(" "),a("h2",{attrs:{id:"cpsolvername"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpsolvername"}},[t._v("#")]),t._v(" CPSolverName")]),t._v(" "),a("p",[t._v("Enum choice of underlying CP solver used by Minizinc typically")]),t._v(" "),a("h2",{attrs:{id:"parameterscp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameterscp"}},[t._v("#")]),t._v(" ParametersCP")]),t._v(" "),a("p",[t._v("Parameters that can be used by any cp - solver")]),t._v(" "),a("h3",{attrs:{id:"constructor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor "),a("Badge",{attrs:{text:"ParametersCP",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"ParametersCP",sig:{params:[{name:"time_limit"},{name:"pool_solutions"},{name:"intermediate_solution",annotation:"bool"},{name:"all_solutions",annotation:"bool"},{name:"nr_solutions",annotation:"int"}]}}}),t._v(" "),a("p",[t._v(":param time_limit: in seconds, the time limit of solving the cp model\n:param pool_solutions: TODO remove it it's not used\n:param intermediate_solution: retrieve intermediate solutions\n:param all_solutions: returns all solutions found by the cp solver\n:param nr_solutions: the requested number of solutions")]),t._v(" "),a("h2",{attrs:{id:"cpsolver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cpsolver"}},[t._v("#")]),t._v(" CPSolver")]),t._v(" "),a("p",[t._v("Additional function to be implemented by a CP Solver.")]),t._v(" "),a("h3",{attrs:{id:"init-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-model"}},[t._v("#")]),t._v(" init_model "),a("Badge",{attrs:{text:"CPSolver",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"init_model",sig:{params:[{name:"self"},{name:"args"}]}}}),t._v(" "),a("p",[t._v("Instantiate a CP model instance")]),t._v(" "),a("h3",{attrs:{id:"retrieve-solutions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-solutions"}},[t._v("#")]),t._v(" retrieve_solutions "),a("Badge",{attrs:{text:"CPSolver",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"retrieve_solutions",sig:{params:[{name:"self"},{name:"result"},{name:"parameters_cp",annotation:"ParametersCP"}],return:"ResultStorage"}}}),t._v(" "),a("p",[t._v("Returns a storage solution coherent with the given parameters.\n:param result: Result storage returned by the cp solver\n:param parameters_cp: parameters of the CP solver.\n:return:")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);