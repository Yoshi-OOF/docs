"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8603],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22541:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return w},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=JSON.parse('{"name":"Blueprint","description":"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.","authority":"both","inheritance":["Actor","Paintable"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)"},{"type":"BlueprintPath","name":"blueprint_asset","default":""}],"functions":[{"name":"CallBlueprintEvent","description":"Calls a Blueprint Event or Function","authority":"both","parameters":[{"type":"string","name":"event_name","description":"Event or Function name"},{"type":"any","name":"arguments...","default":"nil","description":"Sequence of arguments to pass to the event"}]}]}'),s=["components"],c={title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},l=void 0,u={unversionedId:"scripting-reference/classes/blueprint",id:"scripting-reference/classes/blueprint",title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/blueprint.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/blueprint",permalink:"/fr/docs/next/scripting-reference/classes/blueprint",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/blueprint.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"},{label:"client",permalink:"/fr/docs/next/tags/client"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"\ud83e\udea7 Billboard",permalink:"/fr/docs/next/scripting-reference/classes/billboard"},next:{title:"\u26d3\ufe0f Cable",permalink:"/fr/docs/next/scripting-reference/classes/cable"}},p={},d=[{value:"Constructor",id:"constructor",level:2},{value:"Functions",id:"functions",level:2},{value:"Events",id:"events",level:2}],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=f("HeaderDeclaration"),y=f("ConstructorDeclaration"),b=f("FunctionsDeclaration"),v=f("EventsDeclaration"),g={toc:d};function w(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{class_data:a,image:"/img/docs/blueprint.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If your Actor Blueprint was spawned on the Server, it will be automatically synchronized with other players using the nanos world Network Authority system! It follows the same rules as all other entities!")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently it is only possible to communicate in one-way with the Blueprint (Scripting -> Blueprint). We didn't find a way to have the inverse communication ",(0,i.kt)("em",{parentName:"p"},"(hopefully)")," yet.")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)(y,{class_data:a,mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)(b,{class_data:a,mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)(v,{class_data:a,mdxType:"EventsDeclaration"}))}w.isMDXComponent=!0}}]);