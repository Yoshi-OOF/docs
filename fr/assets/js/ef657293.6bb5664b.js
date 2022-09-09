"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8603],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,l(l({ref:n},u),{},{components:t})):r.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62914:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=t(83117),i=t(80102),a=(t(67294),t(3905)),l=["components"],o={title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},s=void 0,c={unversionedId:"scripting-reference/classes/blueprint",id:"scripting-reference/classes/blueprint",title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/blueprint.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/blueprint",permalink:"/fr/docs/next/scripting-reference/classes/blueprint",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/blueprint.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"},{label:"client",permalink:"/fr/docs/next/tags/client"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"\ud83e\udea7 Billboard",permalink:"/fr/docs/next/scripting-reference/classes/billboard"},next:{title:"\u26d3\ufe0f Cable",permalink:"/fr/docs/next/scripting-reference/classes/cable"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"Calling Blueprint Events from lua",id:"calling-blueprint-events-from-lua",level:3},{value:"Binding Blueprint Event Dispatchers",id:"binding-blueprint-event-dispatchers",level:3},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),g=d("FunctionsDeclaration"),b=d("EventsDeclaration"),v={toc:p};function y(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(f,{type:"Class",name:"Blueprint",image:"/img/docs/blueprint.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your Actor Blueprint was spawned on the Server, it will be automatically synchronized with other players using the nanos world Network Authority system! It follows the same rules as all other entities!")),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("h3",{id:"calling-blueprint-events-from-lua"},"Calling Blueprint Events from lua"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint("my-asset-pack::BP_MyBlueprint", Vector(), Rotator())\n\nlocal param1 = 123\nlocal param2 = "hello there!"\n\n-- Calls the event, passing any parameters\nblueprint:CallBlueprintEvent("MyBlueprintCustomEvent", param1, param2)\n')),(0,a.kt)("h3",{id:"binding-blueprint-event-dispatchers"},"Binding Blueprint Event Dispatchers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"Client/index.lua","Client/index.lua":!0},'-- Spawns the Blueprint\nlocal blueprint = Blueprint("my-asset-pack::BP_MyBlueprint", Vector(), Rotator())\n\n-- Subscribes to a Blueprint Event Dispatcher\nblueprint:BindBlueprintEventDispatcher("MyBlueprintDispatcher", function(arg1, arg2)\n    Package.Log("Called from Blueprint!", arg1, arg2)\nend)\n')),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(m,{type:"Class",name:"Blueprint",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)(g,{type:"Class",name:"Blueprint",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,a.kt)(b,{type:"Class",name:"Blueprint",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);