"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8477],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34310:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(75938),s=["components"],c={title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},l=void 0,p={unversionedId:"scripting-reference/classes/static-mesh",id:"scripting-reference/classes/static-mesh",title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",source:"@site/docs/scripting-reference/classes/static-mesh.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/static-mesh",permalink:"/docs/next/scripting-reference/classes/static-mesh",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/static-mesh.mdx",tags:[{label:"class",permalink:"/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660129092,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:0,frontMatter:{title:"\ud83c\udfe0 StaticMesh",description:"A StaticMesh entity represents a Mesh which can be spawned in the world, can't move and is more optimized for using in decorating the world.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd0a Sound",permalink:"/docs/next/scripting-reference/classes/sound"},next:{title:"\ud83c\udd92 TextRender",permalink:"/docs/next/scripting-reference/classes/text-render"}},d={},u=[{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},h=m("HeaderDeclaration"),f=m("ConstructorDeclaration"),y=m("FunctionsDeclaration"),g=m("EventsDeclaration"),b={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(h,{class_data:o,image:"/img/docs/static-mesh.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("p",null,'Static Meshes are like Props, but with fewer interaction options. Static Meshes are aimed to offer better performance on spawning Static "objects" in the world than Props.'),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Automatically all StaticMeshActors present in the Level will be loaded as a StaticMesh entity in the client side.")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(f,{class_data:o,mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(y,{class_data:o,mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(g,{class_data:o,mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0},75938:function(e){e.exports=JSON.parse('{"name":"StaticMesh","description":"A StaticMesh entity represents a Mesh which can be spawned in the world, can\'t move and is more optimized for using in decorating the world.","authority":"both","inheritance":["Actor","Paintable"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)"},{"type":"StaticMeshPath","name":"static_mesh_asset","default":""},{"type":"CollisionType","name":"collision_type","default":"CollisionType.Normal"}],"functions":[{"name":"GetMesh","description":"Gets the Asset path mesh used","return":{"type":"StaticMeshPath","description":"asset path"},"authority":"both"},{"name":"IsFromLevel","description":"Gets if this StaticMesh is from the Level","return":{"type":"boolean","description":"if this StaticMesh is from the level"},"authority":"client"}],"events":[{"name":"TakeDamage","description":"Called when a StaticMesh takes Damage","arguments":[{"type":"StaticMesh","name":"self","description":"The entity which triggered"},{"type":"number","name":"damage","description":"Damage amount"},{"type":"string","name":"bone","description":"Damaged bone"},{"type":"DamageType","name":"type","description":"Damage Type"},{"type":"Vector","name":"from_direction","description":"Direction of the damage relative to the damaged actor"},{"type":"Player","name":"instigator","description":"The player which caused the damage"},{"type":"any","name":"causer","description":"The object which caused the damage"}]}]}')}}]);