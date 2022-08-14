"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5311],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),s=["components"],a={title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},l=void 0,c={unversionedId:"scripting-reference/classes/blueprint",id:"version-latest/scripting-reference/classes/blueprint",title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/blueprint.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/blueprint",permalink:"/de/docs/scripting-reference/classes/blueprint",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/blueprint.mdx",tags:[{label:"class",permalink:"/de/docs/tags/class"},{label:"client",permalink:"/de/docs/tags/client"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udd23 Blueprint",description:"A Blueprint Class allows spawning any Unreal Blueprint Actor in nanos world.",sidebar_position:0,tags:["class","client"]},sidebar:"version-latest/main",previous:{title:"\ud83e\udea7 Billboard",permalink:"/de/docs/scripting-reference/classes/billboard"},next:{title:"\u26d3\ufe0f Cable",permalink:"/de/docs/scripting-reference/classes/cable"}},u={},p=[{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("FunctionsDeclaration"),b=d("EventsDeclaration"),v={toc:p};function g(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{type:"Class",name:"Blueprint",image:"/img/docs/blueprint.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If your Actor Blueprint was spawned on the Server, it will be automatically synchronized with other players using the nanos world Network Authority system! It follows the same rules as all other entities!")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Currently it is only possible to communicate in one-way with the Blueprint (Scripting -> Blueprint). We didn't find a way to have the inverse communication ",(0,o.kt)("em",{parentName:"p"},"(hopefully)")," yet.")),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(m,{type:"Class",name:"Blueprint",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(y,{type:"Class",name:"Blueprint",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(b,{type:"Class",name:"Blueprint",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);