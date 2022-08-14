"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6382],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||c;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95056:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),c=(n(67294),n(3905)),s=["components"],o={title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},i=void 0,l={unversionedId:"scripting-reference/classes/decal",id:"scripting-reference/classes/decal",title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/decal.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/decal",permalink:"/fr/docs/next/scripting-reference/classes/decal",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/decal.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"},{label:"client",permalink:"/fr/docs/next/tags/client"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udd8c\ufe0f Decal",description:"Decals are Materials that are projected onto meshes in your level, including Static Meshes and Skeletal Meshes.",sidebar_position:0,tags:["class","client"]},sidebar:"main",previous:{title:"\ud83d\udcbe Database",permalink:"/fr/docs/next/scripting-reference/classes/database"},next:{title:"\ud83d\udcc1 File",permalink:"/fr/docs/next/scripting-reference/classes/file"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("FunctionsDeclaration"),g=d("EventsDeclaration"),v={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(f,{type:"Class",name:"Decal",image:"/img/docs/decals.webp",mdxType:"HeaderDeclaration"}),(0,c.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=Client/Index.lua",title:"Client/Index.lua"},'local my_decal = Decal(\n    Vector(100, 200, 0), -- location\n    Rotator(0, 90, 90), -- rotation\n    "nanos-world::M_NanosDecal", -- material\n    Vector(128, 256, 256), -- size\n    60, -- lifespan\n    0.01 -- fade screen size\n)\n\nmy_decal:SetMaterialTextureParameter("Texture", "package://my_package/Client/image.jpg")\n')),(0,c.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,c.kt)(m,{type:"Class",name:"Decal",mdxType:"ConstructorDeclaration"}),(0,c.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,c.kt)(y,{type:"Class",name:"Decal",mdxType:"FunctionsDeclaration"}),(0,c.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,c.kt)(g,{type:"Class",name:"Decal",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);