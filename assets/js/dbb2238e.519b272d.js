"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3035],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=s,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var r=n(83117),s=n(80102),i=(n(67294),n(3905)),o=["components"],a={title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/static-mesh",id:"version-latest/scripting-reference/classes/static-mesh",title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",source:"@site/versioned_docs/version-latest/scripting-reference/classes/static-mesh.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/static-mesh",permalink:"/docs/scripting-reference/classes/static-mesh",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/static-mesh.mdx",tags:[{label:"class",permalink:"/docs/tags/class"}],version:"latest",lastUpdatedBy:"MoskalykA",lastUpdatedAt:1664700122,formattedLastUpdatedAt:"Oct 2, 2022",sidebarPosition:0,frontMatter:{title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd0a Sound",permalink:"/docs/scripting-reference/classes/sound"},next:{title:"\ud83c\udd92 TextRender",permalink:"/docs/scripting-reference/classes/text-render"}},p={},d=[{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=u("HeaderDeclaration"),m=u("ConstructorDeclaration"),h=u("FunctionsDeclaration"),y=u("EventsDeclaration"),v={toc:d};function g(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{type:"Class",name:"StaticMesh",image:"/img/docs/static-mesh.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("p",null,'Static Meshes are like Props, but with fewer interaction options. Static Meshes are aimed to offer better performance on spawning Static "objects" in the world than Props.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Automatically all StaticMeshActors present in the Level will be loaded as a StaticMesh entity in the client side.")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(m,{type:"Class",name:"StaticMesh",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(h,{type:"Class",name:"StaticMesh",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(y,{type:"Class",name:"StaticMesh",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);