"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4920],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90254:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),s=["components"],i={title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/particle",id:"version-latest/scripting-reference/classes/particle",title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/particle.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/particle",permalink:"/de/docs/scripting-reference/classes/particle",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/particle.mdx",tags:[{label:"class",permalink:"/de/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\u2728 Particle",description:"Class to spawn Particle Systems used to create effects in the world.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd2a Melee",permalink:"/de/docs/scripting-reference/classes/melee"},next:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",permalink:"/de/docs/scripting-reference/classes/player"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),y=d("FunctionsDeclaration"),v=d("EventsDeclaration"),g={toc:u};function b(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{type:"Class",name:"Particle",image:"/img/docs/particle.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Both ",(0,o.kt)("strong",{parentName:"p"},"Cascade")," and ",(0,o.kt)("strong",{parentName:"p"},"Niagara")," Particle Systems are supported!")),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local my_particle = Particle(\n    Vector(-200, 100, 100),\n    Rotator(0, 0, 0),\n    "nanos-world::P_Explosion",\n    true, -- Auto Destroy?\n    true -- Auto Activate?\n)\n')),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(f,{type:"Class",name:"Particle",mdxType:"ConstructorDeclaration"}),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"auto_destroy"))," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,o.kt)("em",{parentName:"p"},"Particle System")," spawned in-game. So if the ",(0,o.kt)("em",{parentName:"p"},"Particle System")," itself loops indefinitely, it will keep playing until the Player reconnects.")),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(y,{type:"Class",name:"Particle",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(v,{type:"Class",name:"Particle",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);