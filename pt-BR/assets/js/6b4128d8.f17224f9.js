"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5745],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),b=a,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62062:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),i=(r(67294),r(3905)),o=["components"],l={title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},c=void 0,s={unversionedId:"scripting-reference/classes/billboard",id:"scripting-reference/classes/billboard",title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/billboard.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/billboard",permalink:"/pt-BR/docs/next/scripting-reference/classes/billboard",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/billboard.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"},{label:"client",permalink:"/pt-BR/docs/next/tags/client"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83e\udea7 Billboard",description:"A Billboard is a 2D Material that will be rendered always facing the camera.",image:"/img/docs/billboard.webp",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"Ciclo de Vida do Server & Client",permalink:"/pt-BR/docs/next/core-concepts/server-and-client-lifecycle"},next:{title:"\ud83d\udd23 Blueprint",permalink:"/pt-BR/docs/next/scripting-reference/classes/blueprint"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},b=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),f=d("FunctionsDeclaration"),g=d("EventsDeclaration"),y={toc:p};function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(b,{type:"Class",name:"Billboard",image:"/img/docs/billboard.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_billboard = Billboard(\n    Vector(200, 200, 200), -- location\n    "nanos-world::M_NanosMasked", -- material\n    Vector2D(32, 32), -- size\n    true\n)\n\nmy_billboard:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(m,{type:"Class",name:"Billboard",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(f,{type:"Class",name:"Billboard",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(g,{type:"Class",name:"Billboard",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);