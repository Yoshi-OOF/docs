"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1660],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},c=void 0,u={unversionedId:"scripting-reference/utility-classes/quaternion",id:"version-latest/scripting-reference/utility-classes/quaternion",title:"Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",source:"@site/versioned_docs/version-latest/scripting-reference/utility-classes/quaternion.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/quaternion",permalink:"/docs/scripting-reference/utility-classes/quaternion",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/utility-classes/quaternion.mdx",tags:[{label:"utility-class",permalink:"/docs/tags/utility-class"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660514562,formattedLastUpdatedAt:"Aug 14, 2022",frontMatter:{title:"Quat",description:"Floating point Quaternion that can represent a rotation about an axis in 3-D space",tags:["utility-class"]},sidebar:"version-latest/main",previous:{title:"NanosUtils",permalink:"/docs/scripting-reference/utility-classes/nanosutils"},next:{title:"Rotator",permalink:"/docs/scripting-reference/utility-classes/rotator"}},l={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("PropertiesDeclaration"),v=d("FunctionsDeclaration"),g={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(f,{type:"Struct",name:"Quat",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local new_quaternion = Quat(0.5, 0.5, 1, -1)\nlocal rotation = new_quaterion:Rotator()\n")),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(m,{type:"Struct",name:"Quat",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,a.kt)(y,{type:"Struct",name:"Quat",mdxType:"PropertiesDeclaration"}),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This structure supports ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,a.kt)(v,{type:"Struct",name:"Quat",mdxType:"FunctionsDeclaration"}))}b.isMDXComponent=!0}}]);