"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1664],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<s;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),c=["components"],o={title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},i=void 0,l={unversionedId:"scripting-reference/static-classes/http",id:"version-latest/scripting-reference/static-classes/http",title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",source:"@site/versioned_docs/version-latest/scripting-reference/static-classes/http.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/http",permalink:"/docs/scripting-reference/static-classes/http",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/static-classes/http.mdx",tags:[{label:"static-class",permalink:"/docs/tags/static-class"},{label:"server",permalink:"/docs/tags/server"}],version:"latest",lastUpdatedBy:"MoskalykA",lastUpdatedAt:1664700122,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udea9 Events",permalink:"/docs/scripting-reference/static-classes/events"},next:{title:"\ud83d\udd79\ufe0f Input",permalink:"/docs/scripting-reference/static-classes/input"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("StaticFunctionsDeclaration"),v=d("EventsDeclaration"),g={toc:p};function y(e){var t=e.components,n=(0,a.Z)(e,c);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(f,{type:"StaticClass",name:"HTTP",is_static:!0,mdxType:"HeaderDeclaration"}),(0,s.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes an asynchronous HTTP Request\nHTTP.Request("localhost:7777", "/", "GET", "", "application/json", false, {}, function(status, data)\n    Package.Log(status) -- 200\n    Package.Log(data) -- nanos world server\n\n    -- TIP: You can parse it if it\'s a json return as well\n    local json_ret = JSON.parse(data)\nend)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes a synchronous HTTP Request\nlocal ret = HTTP.RequestSync("localhost:7777", "/", "GET", "", "application/json", false, {})\n\nPackage.Log(ret.Status) -- 200\nPackage.Log(ret.Data) -- nanos world server\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"All requests are thread safe! \ud83e\udd73")),(0,s.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,s.kt)(m,{type:"StaticClass",name:"HTTP",mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(v,{type:"StaticClass",name:"HTTP",mdxType:"EventsDeclaration"}))}y.isMDXComponent=!0}}]);