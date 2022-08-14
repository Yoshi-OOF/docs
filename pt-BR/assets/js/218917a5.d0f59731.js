"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8616],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20470:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),c=["components"],o={title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},i=void 0,l={unversionedId:"scripting-reference/classes/decal",id:"version-latest/scripting-reference/classes/decal",title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/decal.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/decal",permalink:"/pt-BR/docs/scripting-reference/classes/decal",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/decal.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"},{label:"client",permalink:"/pt-BR/docs/tags/client"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udcbe Database",permalink:"/pt-BR/docs/scripting-reference/classes/database"},next:{title:"\ud83d\udcc1 File",permalink:"/pt-BR/docs/scripting-reference/classes/file"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),v=d("FunctionsDeclaration"),y=d("EventsDeclaration"),g={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(f,{type:"Class",name:"Decal",image:"/img/docs/decals.webp",mdxType:"HeaderDeclaration"}),(0,s.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_decal = Decal(\n    Vector(100, 200, 0), -- location\n    Rotator(0, 90, 90), -- rotation\n    "nanos-world::M_NanosDecal", -- material\n    Vector(128, 256, 256), -- size\n    60, -- lifespan\n    0.01 -- fade screen size\n)\n\nmy_decal:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,s.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,s.kt)(m,{type:"Class",name:"Decal",mdxType:"ConstructorDeclaration"}),(0,s.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,s.kt)(v,{type:"Class",name:"Decal",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(y,{type:"Class",name:"Decal",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);