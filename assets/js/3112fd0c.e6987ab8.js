"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7157],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},34275:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),c=["components"],a={title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},s=void 0,l={unversionedId:"scripting-reference/utility-classes/vectortwod",id:"version-latest/scripting-reference/utility-classes/vectortwod",title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",source:"@site/versioned_docs/version-latest/scripting-reference/utility-classes/vectortwod.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vectortwod",permalink:"/docs/scripting-reference/utility-classes/vectortwod",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/vectortwod.mdx",tags:[{label:"utility-class",permalink:"/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660514562,formattedLastUpdatedAt:"Aug 14, 2022",frontMatter:{title:"Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"Vector",permalink:"/docs/scripting-reference/utility-classes/vector"},next:{title:"Basic Types",permalink:"/docs/scripting-reference/glossary/basic-types"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("PropertiesDeclaration"),v=d("FunctionsDeclaration"),g={toc:u};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{type:"Struct",name:"Vector2D",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector2D(1452.5, 512)\n")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(m,{type:"Struct",name:"Vector2D",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,i.kt)(y,{type:"Struct",name:"Vector2D",mdxType:"PropertiesDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,i.kt)(v,{type:"Struct",name:"Vector2D",mdxType:"FunctionsDeclaration"}))}b.isMDXComponent=!0}}]);