"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5744],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38638:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",tags:["classe-utilitaire"]},c=void 0,u={unversionedId:"scripting-reference/utility-classes/rotator",id:"scripting-reference/utility-classes/rotator",title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/rotator.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/rotator",permalink:"/fr/docs/next/scripting-reference/utility-classes/rotator",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/rotator.mdx",tags:[{label:"classe-utilitaire",permalink:"/fr/docs/next/tags/classe-utilitaire"}],version:"current",frontMatter:{title:"Rotator",description:"Un conteneur pour les informations de rotation. Toutes les valeurs de rotation sont stock\xe9es en degr\xe9s.",tags:["classe-utilitaire"]},sidebar:"main",previous:{title:"Quat",permalink:"/fr/docs/next/scripting-reference/utility-classes/quaternion"},next:{title:"Vector",permalink:"/fr/docs/next/scripting-reference/utility-classes/vector"}},l={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\uddfd Properties",id:"-properties",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("PropertiesDeclaration"),v=d("FunctionsDeclaration"),g=d("StaticFunctionsDeclaration"),k={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{type:"Struct",name:"Rotator",is_open_source:!0,mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Les Rotator sont compress\xe9s en interne et automatiquement, ce qui r\xe9duit leur taille dans le r\xe9seau jusqu'\xe0 90 %. Leurs composants sont g\xe9n\xe9ralement compress\xe9s en 1 octets chacun (\xe0 quelques exceptions o\xf9 nous avons besoin de plus de pr\xe9cision).")),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local new_rotator = Rotator(-90, 153, 24.5)\n")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(m,{type:"Struct",name:"Rotator",mdxType:"ConstructorDeclaration"}),(0,i.kt)("h2",{id:"-properties"},"\ud83e\uddfd Properties"),(0,i.kt)(y,{type:"Struct",name:"Rotator",mdxType:"PropertiesDeclaration"}),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This structure supports ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tostring")," operations.")),(0,i.kt)(v,{type:"Struct",name:"Rotator",mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,i.kt)(g,{type:"Struct",name:"Rotator",mdxType:"StaticFunctionsDeclaration"}))}b.isMDXComponent=!0}}]);