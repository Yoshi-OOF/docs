"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5733],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),g=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=g(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=g(t),d=i,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var g=2;g<o;g++)a[g]=t[g];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},518:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),a=t(12553),s=["components"],c={title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},g=void 0,l={unversionedId:"scripting-reference/classes/trigger",id:"scripting-reference/classes/trigger",title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/trigger.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/trigger",permalink:"/fr/docs/next/scripting-reference/classes/trigger",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/trigger.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83c\udd92 TextRender",permalink:"/fr/docs/next/scripting-reference/classes/text-render"},next:{title:"\ud83d\ude99 Vehicle",permalink:"/fr/docs/next/scripting-reference/classes/vehicle"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",r)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("FunctionsDeclaration"),v=d("EventsDeclaration"),h={toc:u};function b(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(f,{class_data:a,image:"/img/docs/trigger.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))\n\nsphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Package.Log("Something entered my Sphere Trigger")\nend)\n\nlocal box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))\n\nbox_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Package.Log("Something entered my Box Trigger")\nend)\n\nbox_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    Package.Log("Something left my Box Trigger")\nend)\n')),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(m,{class_data:a,mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(y,{class_data:a,mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(v,{class_data:a,mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0},12553:function(e){e.exports=JSON.parse('{"name":"Trigger","description":"A Trigger class is a utility class to trigger events when any Entity enters an Area.","authority":"server","inheritance":["Actor"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)"},{"type":"Vector","name":"extent","default":"Vector(0, 0, 0)","description":"Size of the Trigger. If using Sphere, only the X is used"},{"type":"TriggerType","name":"trigger_type","default":"TriggerType.Sphere"},{"type":"boolean","name":"is_visible","default":"false","description":"Useful for debugging"},{"type":"Color","name":"color","default":"Color.RED","description":"Color to paint the Trigger bounds - if Visible"}],"functions":[{"name":"ForceOverlapChecking","description":"Forces a Overlap checking to occur, will immediately trigger overlaps","authority":"server"},{"name":"SetExtent","description":"Sets the extent size of this trigger (sphere triggers will use only the .X component for radius)","authority":"server","parameters":[{"type":"Vector","name":"extent"}]}],"events":[{"name":"BeginOverlap","description":"Triggered when something overlaps this Trigger","arguments":[{"type":"Trigger","name":"self","description":"The Trigger entity"},{"type":"Actor","name":"entity","description":"Any Actor which overlaps"}]},{"name":"EndOverlap","description":"Triggered when something leaves this Trigger","arguments":[{"type":"Trigger","name":"self","description":"The Trigger entity"},{"type":"Actor","name":"entity","description":"Any Actor which left the Trigger"}]}]}')}}]);