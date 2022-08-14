"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4147],{3905:function(e,r,t){t.d(r,{Zo:function(){return g},kt:function(){return d}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},g=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),p=l(t),d=i,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?n.createElement(f,s(s({ref:r},g),{},{components:t})):n.createElement(f,s({ref:r},g))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=p;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89549:function(e,r,t){t.r(r),t.d(r,{assets:function(){return g},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=t(83117),i=t(80102),o=(t(67294),t(3905)),s=["components"],a={title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/trigger",id:"version-latest/scripting-reference/classes/trigger",title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/trigger.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/trigger",permalink:"/fr/docs/scripting-reference/classes/trigger",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/trigger.mdx",tags:[{label:"class",permalink:"/fr/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83e\udea4 Trigger",description:"A Trigger class is a utility class to trigger events when any Entity enters an Area",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udd92 TextRender",permalink:"/fr/docs/scripting-reference/classes/text-render"},next:{title:"\ud83d\ude99 Vehicle",permalink:"/fr/docs/scripting-reference/classes/vehicle"}},g={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],p=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",r)}},d=p("HeaderDeclaration"),f=p("ConstructorDeclaration"),m=p("FunctionsDeclaration"),y=p("EventsDeclaration"),v={toc:u};function b(e){var r=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(d,{type:"Class",name:"Trigger",image:"/img/docs/trigger.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local sphere_trigger = Trigger(Vector(-200, 100, 500), Rotator(), Vector(100), TriggerType.Sphere, true, Color(1, 0, 0))\n\nsphere_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Package.Log("Something entered my Sphere Trigger")\nend)\n\nlocal box_trigger = Trigger(Vector(300, 200, 500), Rotator(0, 45, 0), Vector(150, 150, 150), TriggerType.Box, true, Color(0, 1, 0))\n\nbox_trigger:Subscribe("BeginOverlap", function(trigger, actor_triggering)\n    Package.Log("Something entered my Box Trigger")\nend)\n\nbox_trigger:Subscribe("EndOverlap", function(trigger, actor_triggering)\n    Package.Log("Something left my Box Trigger")\nend)\n')),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(f,{type:"Class",name:"Trigger",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(m,{type:"Class",name:"Trigger",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(y,{type:"Class",name:"Trigger",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);