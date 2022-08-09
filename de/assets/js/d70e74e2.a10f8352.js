"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2949],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16922:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=r(45001),c=["components"],s={title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},p=void 0,l={unversionedId:"scripting-reference/utility-classes/vector",id:"scripting-reference/utility-classes/vector",title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/vector.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vector",permalink:"/de/docs/next/scripting-reference/utility-classes/vector",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/vector.mdx",tags:[{label:"utility-class",permalink:"/de/docs/next/tags/utility-class"}],version:"current",frontMatter:{title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"main",previous:{title:"Rotator",permalink:"/de/docs/next/scripting-reference/utility-classes/rotator"},next:{title:"Vector2D",permalink:"/de/docs/next/scripting-reference/utility-classes/vectortwod"}},d={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=m("HeaderDeclaration"),h=m("ConstructorDeclaration"),y=m("PropertiesDeclaration"),v=m("FunctionsDeclaration"),g={toc:u};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{class_data:a,mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This structure is Open Sourced on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"GitHub"),". Feel free to make pull requests and suggest changes!")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision)."),(0,i.kt)("li",{parentName:"ul"},"Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw number instead."))),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(h,{class_data:a,mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,i.kt)(y,{class_data:a,mdxType:"PropertiesDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,i.kt)(v,{class_data:a,mdxType:"FunctionsDeclaration"}))}b.isMDXComponent=!0},45001:function(e){e.exports=JSON.parse('{"name":"Vector","description":"A Vector composed of components (X, Y, Z) with floating point precision. Used mainly for entity position.","constructor":[{"name":"X","type":"number","default":"0","description":"X Coordinate"},{"name":"Y","type":"number","default":"0","description":"Y Coordinate"},{"name":"Z","type":"number","default":"0","description":"Z Coordinate"}],"properties":[{"name":"X","type":"number","description":"X Coordinate"},{"name":"Y","type":"number","description":"Y Coordinate"},{"name":"Z","type":"number","description":"Z Coordinate"}],"functions":[{"name":"Equals","description":"Check against another vector for equality, within specified error limits","description_long":"Check if the vector is equal to another vector, within specified error limits","return":{"type":"boolean","description":"Are the vectors equal or not"},"parameters":[{"type":"Vector","name":"other","description":"The vector to compare to"},{"type":"number","name":"tolerance","default":"0.000001","description":"The error limits"}]},{"name":"Distance","description":"Distance between two points","description_long":"Returns the distance of 2 vectors","return":{"type":"number","description":"The distance betweem the vectors"},"parameters":[{"type":"Vector","name":"other","description":"The vector to get the distance to"}]},{"name":"DistanceSquared","description":"Squared distance between two points","description_long":"Return the squared distance of 2 vectors","return":{"type":"number","description":"The squared distance betweem the vectors"},"parameters":[{"type":"Vector","name":"other","description":"The vector to get the squared distance to"}]},{"name":"GetUnsafeNormal","description":"Calculates normalized version of vector without checking for zero length","description_long":"Returns the normalized version of vector without checking for zero length","return":{"type":"Vector","description":"The unsafe normal"},"parameters":[]},{"name":"GetSafeNormal","description":"Gets a normalized copy of the vector, checking it is safe to do so based on the length","description_long":"Returns a normalized copy of the vector, checking it is safe to do so based on the length","return":{"type":"Vector","description":"The safe normal"},"parameters":[]},{"name":"IsNearlyZero","description":"Checks whether vector is near to zero within a specified tolerance","return":{"type":"boolean","description":"If the bool is near to zero"},"parameters":[{"type":"number","name":"tolerance","default":"0.000001","description":"The error limits"}]},{"name":"IsZero","description":"Checks whether all components of the vector are exactly zero","return":{"type":"boolean","description":"If all components of the vector are exactly zero"}},{"name":"Normalize","description":"Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not","return":{"type":"boolean","description":"If the vector has been modified"}},{"name":"Size","description":"Get the length (magnitude) of this vector","return":{"type":"number","description":"The lenght of the vector"}},{"name":"SizeSquared","description":"Get the squared length of this vector","return":{"type":"number","description":"The squared length of the vector"}},{"name":"Rotation","description":"Returns the orientation corresponding to the direction in which the vector points","return":{"type":"Rotator","description":"The orientation of the vector"}}]}')}}]);