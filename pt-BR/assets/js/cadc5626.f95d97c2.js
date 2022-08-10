"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[752],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),s=(n(67294),n(3905)),o=JSON.parse('{"name":"HTTP","description":"HTTP Requests Interface.","authority":"server","static_functions":[{"name":"Request","description":"Makes an asynchronous HTTP Request","description_long":"Makes an asynchronous HTTP Request.<br/><br/>The request will be made asynchronously and returned safetly in the same thread in the callback provided when it\'s done.<br/><br/><b>Note:</b> If a request is still running when unloading packages, the server will freeze until it\'s finished, then the package will unload.","authority":"server","parameters":[{"type":"string","name":"uri","description":"The main URI"},{"type":"string","name":"endpoint","default":"/","description":"The endpoint"},{"type":"string","name":"method","default":"GET","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods\'>HTTP Method</a> to be used"},{"type":"string","name":"data","default":"","description":"Payload"},{"type":"string","name":"content_type","default":"application/json","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types\'>Content Type</a> to be used"},{"type":"boolean","name":"compress","default":"false","description":"Whether or not to compress the content with gzip"},{"type":"table","name":"headers","default":"{}","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers\'>Headers</a> to be used"},{"type":"function","name":"callback","default":"nil","description":"The result will be called in the format `function(status, data)`"}]},{"name":"RequestSync","return":{"type":"table","description":"the data in the format <code>{ Status, Data }</code>"},"description":"Makes a synchronous HTTP Request.<br/><br/>The request will be made synchronously and will freeze the server until it\'s done.","authority":"server","parameters":[{"type":"string","name":"uri","description":"The main URI"},{"type":"string","name":"endpoint","default":"/","description":"The endpoint"},{"type":"string","name":"method","default":"GET","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods\'>HTTP Method</a> to be used"},{"type":"string","name":"data","default":"","description":"Payload"},{"type":"string","name":"content_type","default":"application/json","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types\'>Content Type</a> to be used"},{"type":"boolean","name":"compress","default":"false","description":"Whether or not to compress the content with gzip"},{"type":"table","name":"headers","default":"{}","description":"The <a href=\'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers\'>Headers</a> to be used"}]}]}'),i=["components"],c={title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},l=void 0,p={unversionedId:"scripting-reference/static-classes/http",id:"scripting-reference/static-classes/http",title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/http.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/http",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/http",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/http.mdx",tags:[{label:"static-class",permalink:"/pt-BR/docs/next/tags/static-class"},{label:"server",permalink:"/pt-BR/docs/next/tags/server"}],version:"current",frontMatter:{title:"\ud83c\udf10 HTTP",description:"HTTP Requests Interface",tags:["static-class","server"]},sidebar:"main",previous:{title:"\ud83d\udea9 Events",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/events"},next:{title:"\ud83d\udd79\ufe0f Input",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/input"}},u={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],f=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},m=f("HeaderDeclaration"),h=f("StaticFunctionsDeclaration"),y=f("EventsDeclaration"),T={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(m,{class_data:o,is_static:!0,mdxType:"HeaderDeclaration"}),(0,s.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes an asynchronous HTTP Request\nHTTP.Request("localhost:7777", "/", "GET", "", "application/json", false, {}, function(status, data)\n    Package.Log(status) -- 200\n    Package.Log(data) -- nanos world server\n\n    -- TIP: You can parse it if it\'s a json return as well\n    local json_ret = JSON.parse(data)\nend)\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Makes a synchronous HTTP Request\nlocal ret = HTTP.RequestSync("localhost:7777", "/", "GET", "", "application/json", false, {})\n\nPackage.Log(ret.Status) -- 200\nPackage.Log(ret.Data) -- nanos world server\n')),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"All requests are thread safe! \ud83e\udd73")),(0,s.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,s.kt)(h,{class_data:o,mdxType:"StaticFunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(y,{class_data:o,mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);