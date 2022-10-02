"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2174],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3712:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return D},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),i=["components"],a={title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},s=void 0,p={unversionedId:"scripting-reference/structs/vector2d",id:"scripting-reference/structs/vector2d",title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",source:"@site/docs/scripting-reference/structs/vector2d.mdx",sourceDirName:"scripting-reference/structs",slug:"/scripting-reference/structs/vector2d",permalink:"/docs/next/scripting-reference/structs/vector2d",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/structs/vector2d.mdx",tags:[{label:"utility-class",permalink:"/docs/next/tags/utility-class"}],version:"current",lastUpdatedBy:"MoskalykA",lastUpdatedAt:1664700122,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{title:"\ud83d\udccf Vector2D",description:"A Vector2D composed of components (X, Y) with floating point precision. Used mainly for HUD and Drawing on screen",tags:["utility-class"]},sidebar:"main",previous:{title:"\ud83d\udcd0 Vector",permalink:"/docs/next/scripting-reference/structs/vector"},next:{title:"JSON",permalink:"/docs/next/scripting-reference/utility-classes/json"}},l={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("PropertiesDeclaration"),v=d("FunctionsDeclaration"),g={toc:u};function D(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(f,{type:"Struct",name:"Vector2D",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,c.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector2D(1452.5, 512)\n")),(0,c.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,c.kt)(m,{type:"Struct",name:"Vector2D",mdxType:"ConstructorDeclaration"}),(0,c.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,c.kt)(y,{type:"Struct",name:"Vector2D",mdxType:"PropertiesDeclaration"}),(0,c.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,c.kt)("admonition",{type:"info"},(0,c.kt)("p",{parentName:"admonition"},"This structure supports ",(0,c.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,c.kt)("inlineCode",{parentName:"p"},"==")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,c.kt)(v,{type:"Struct",name:"Vector2D",mdxType:"FunctionsDeclaration"}))}D.isMDXComponent=!0}}]);