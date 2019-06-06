(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{193:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"extension-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Extension Settings")]),e._v(" "),a("h2",{attrs:{id:"cmake-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cmake-options","aria-hidden":"true"}},[e._v("#")]),e._v(" CMake Options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("cmake.cmakePath")]),e._v(": Path to the CMake executable")]),e._v(" "),a("li",[a("code",[e._v("cmake.cmakeAPI")]),e._v(": Choose between CMake Server (depreacted) or File API")])]),e._v(" "),a("h2",{attrs:{id:"visual-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Visual Settings")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("cmake.configureOnStart")]),e._v(": Start the configuration process when opening\na source folder (eg. starting VSCode, adding workspace folder)")]),e._v(" "),a("li",[a("code",[e._v("cmake.showConsoleAutomatically")]),e._v(": Automatically show the CMake or build output")]),e._v(" "),a("li",[a("code",[e._v("cmake.reconfigureOnChange")]),e._v(": Start the (re-)configuration process when\nchanging CMake files.")])]),e._v(" "),a("h2",{attrs:{id:"configuration-defaults"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-defaults","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration Defaults")]),e._v(" "),a("p",[e._v("The following settings describe the default values for configurations, which\nwill be used if no value is presend with in the configurations files. All\nsettings behave the same as they were specified in the configurations file (e.g\nvariable substitution). The defaults can be set on a user, workspace (window) or\nfolder level. The value in brackets afterwards, show the default value for the\nsettings.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("cmake.generator")]),e._v(": The default generator (Default: Ninja)")]),e._v(" "),a("li",[a("code",[e._v("cmake.extraGenerator")]),e._v(": The default extra generator")]),e._v(" "),a("li",[a("code",[e._v("cmake.buildDirectory")]),e._v(": The default build folder\n(Default: ${workspaceFolder}/build)")]),e._v(" "),a("li",[a("code",[e._v("cmake.cacheEntries")]),e._v(": The default cache entries")])]),e._v(" "),a("h2",{attrs:{id:"build-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" Build Settings")]),e._v(" "),a("p",[e._v("The extensions allows you to extended the dependencies management\nbeyond a single source folder by specifying special workspace\nsettings.")]),e._v(" "),a("h3",{attrs:{id:"target-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-selection","aria-hidden":"true"}},[e._v("#")]),e._v(" Target Selection")]),e._v(" "),a("p",[e._v("Target for those special settings can be either a full project\nbuilding all targets of this project")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{ "project": "cmake" }\n')])])]),a("p",[e._v("or a single target from a project.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{ "project": "cmake", "target": "ctest" }\n')])])]),a("h3",{attrs:{id:"workspace-targets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#workspace-targets","aria-hidden":"true"}},[e._v("#")]),e._v(" Workspace Targets")]),e._v(" "),a("p",[e._v("With the "),a("code",[e._v("cmake.workspaceTargets")]),e._v(" setting option, the behaviour of\nthe "),a("code",[e._v("cmake.buildWorkspace")]),e._v(" command can be changed. By default, all\ntargets of each project in a workspace will be build. Alternatively,\nthe setting allows to specify an array of targets as described above,\nwhich will be build instead. This includes all dependencies specified\neither by CMake or by this extension.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"cmake.workspaceTargets": [\n  { "project": "projectA" },\n  { "project": "projectB", "target": "commandA" }\n],\n')])])]),a("h3",{attrs:{id:"target-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" Target Dependencies")]),e._v(" "),a("p",[e._v("In addition to the dependency management provided by CMake, the extension\nprovides a mechanism to specify dependencies between different CMake\nsource folder (or workspace folders). Prio to building a certain target or\nproject, all dependencies will be resolved and build. In case of building\na project (build all), all dependencies of the project and all dependencies\nof the project targets will be used.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('"cmake.targetDependencies": [\n  { \n    "project": "projectB",\n    "target": "exeB",\n    "dependencies": [\n      { "project": "projectA", "target": "libA" }\n    ]\n  }\n]\n')])])]),a("p",[e._v("The example shows, how a library in an extra CMake source folder can be build,\nbefore the executable linking to it.")])])},[],!1,null,null,null);t.default=r.exports}}]);