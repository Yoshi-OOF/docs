"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4830],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(g,s(s({ref:t},u),{},{components:n})):a.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95341:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),s=["components"],o={title:"Basic Types",description:"Basic Types used in the API.",tags:["scripting"]},l=void 0,c={unversionedId:"scripting-reference/glossary/basic-types",id:"scripting-reference/glossary/basic-types",title:"Basic Types",description:"Basic Types used in the API.",source:"@site/docs/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/docs/next/scripting-reference/glossary/basic-types",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/glossary/basic-types.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"}],version:"current",lastUpdatedBy:"MoskalykA",lastUpdatedAt:1664700122,formattedLastUpdatedAt:"Oct 2, 2022",frontMatter:{title:"Basic Types",description:"Basic Types used in the API.",tags:["scripting"]},sidebar:"main",previous:{title:"NanosUtils",permalink:"/docs/next/scripting-reference/utility-classes/nanosutils"},next:{title:"Enums",permalink:"/docs/next/scripting-reference/glossary/enums"}},u={},p=[{value:"Lua Types",id:"lua-types",level:2},{value:"<code>number</code>",id:"number",level:3},{value:"<code>string</code>",id:"string",level:3},{value:"<code>function</code>",id:"function",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"<code>nil</code>",id:"nil",level:3},{value:"<code>table</code>",id:"table",level:3},{value:"<code>iterator</code>",id:"iterator",level:3},{value:"<code>any</code>",id:"any",level:3},{value:"Special Types",id:"special-types",level:2},{value:"<code>SpecialPath</code>",id:"specialpath",level:3},{value:"Referencing Asset Packs files",id:"referencing-asset-packs-files",level:4},{value:"Referencing Packages files",id:"referencing-packages-files",level:4},{value:"Example accessing <em>images</em> from <code>quaternius</code> Asset Pack:",id:"example-accessing-images-from-quaternius-asset-pack",level:4},{value:"Example accessing a <em>.ogg sound</em> from <code>sandbox</code> Package:",id:"example-accessing-a-ogg-sound-from-sandbox-package",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"lua-types"},"Lua Types"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information and tutorials, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/2.html"},"Official Lua Documentation"),".")),(0,i.kt)("h3",{id:"number"},(0,i.kt)("inlineCode",{parentName:"h3"},"number")),(0,i.kt)("p",null,"The number type represents real ","(","double-precision floating-point",")"," numbers. Lua has no integer type, as it does not need it. There is a widespread misconception about floating-point arithmetic errors and some people fear that even a simple increment can go weird with floating-point numbers. The fact is that, when you use a double to represent an integer, there is no rounding error at all ","(","unless the number is greater than 100,000,000,000,000",")",". Specifically, a Lua number can represent any long integer without rounding problems. Moreover, most modern CPUs do floating-point arithmetic as fast as ","(","or even faster than",")"," integer arithmetic."),(0,i.kt)("h3",{id:"string"},(0,i.kt)("inlineCode",{parentName:"h3"},"string")),(0,i.kt)("p",null,"Strings have the usual meaning: a sequence of characters. Lua is eight-bit clean and so strings may contain characters with any numeric value, including embedded zeros. That means that you can store any binary data into a string. Strings in Lua are immutable values. You cannot change a character inside a string, as you may in C; instead, you create a new string with the desired modifications, as in the next example:"),(0,i.kt)("h3",{id:"function"},(0,i.kt)("inlineCode",{parentName:"h3"},"function")),(0,i.kt)("p",null,"Functions are first-class values in Lua. That means that functions can be stored in variables, passed as arguments to other functions, and returned as results. Such facilities give great flexibility to the language: A program may redefine a function to add new functionality, or simply erase a function to create a secure environment when running a piece of untrusted code ","(","such as code received through a network",")",". Moreover, Lua offers good support for functional programming, including nested functions with proper lexical scoping; just wait. Finally, first-class functions play a key role in Lua\u2019s object-oriented facilities."),(0,i.kt)("h3",{id:"boolean"},(0,i.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,i.kt)("p",null,"The boolean type has two values, false and true, which represent the traditional boolean values. However, they do not hold a monopoly of condition values: In Lua, any value may represent a condition. Conditionals ","(","such as the ones in control structures",")"," consider false and nil as false and anything else as true. Beware that, unlike some other scripting languages, Lua considers both zero and the empty string as true in conditional tests."),(0,i.kt)("h3",{id:"nil"},(0,i.kt)("inlineCode",{parentName:"h3"},"nil")),(0,i.kt)("p",null,"Nil is a type with a single value, nil, whose main property is to be different from any other value. As we have seen, a global variable has a nil value by default, before a first assignment, and you can assign nil to a global variable to delete it. Lua uses nil as a kind of non-value, to represent the absence of a useful value."),(0,i.kt)("h3",{id:"table"},(0,i.kt)("inlineCode",{parentName:"h3"},"table")),(0,i.kt)("p",null,"The table type implements associative arrays. An associative array is an array that can be indexed not only with numbers, but also with strings or any other value of the language, except nil. Moreover, tables have no fixed size; you can add as many elements as you want to a table dynamically. Tables are the main ","(","in fact, the only",")"," data structuring mechanism in Lua, and a powerful one. We use tables to represent ordinary arrays, symbol tables, sets, records, queues, and other data structures, in a simple, uniform, and efficient way. Lua uses tables to represent packages as well. When we write io.read, we mean \u201cthe read entry from the io package\u201d. For Lua, that means \u201cindex the table io using the string \u201cread\u201d as the key\u201d."),(0,i.kt)("h3",{id:"iterator"},(0,i.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,i.kt)("p",null,"Iterator allows you to traverse elements of a table with ",(0,i.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,i.kt)("h3",{id:"any"},(0,i.kt)("inlineCode",{parentName:"h3"},"any")),(0,i.kt)("p",null,"We use any here in the Docs to represent that any Type can be used."),(0,i.kt)("h2",{id:"special-types"},"Special Types"),(0,i.kt)("h3",{id:"specialpath"},(0,i.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,i.kt)("p",null,"nanos world supports a special type of Path when loading ",(0,i.kt)("strong",{parentName:"p"},"Textures (.jpg, .png)"),", ",(0,i.kt)("strong",{parentName:"p"},"Sounds (.ogg)")," or referencing files from ",(0,i.kt)("strong",{parentName:"p"},"WebUI"),". It allows any Package or WebUI to access files from other Packages or Asset Packs easily."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SpecialPath")," is a string input which supports the following formats for accessing Assets or Packages files:"),(0,i.kt)("h4",{id:"referencing-asset-packs-files"},"Referencing Asset Packs files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets://[ASSET_PACK_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"referencing-packages-files"},"Referencing Packages files"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package://[PACKAGE_PATH]/[PATH/TO/FILE.jpg]")),(0,i.kt)("h4",{id:"example-accessing-images-from-quaternius-asset-pack"},"Example accessing ",(0,i.kt)("em",{parentName:"h4"},"images")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"assets://quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,i.kt)("h4",{id:"example-accessing-a-ogg-sound-from-sandbox-package"},"Example accessing a ",(0,i.kt)("em",{parentName:"h4"},".ogg sound")," from ",(0,i.kt)("inlineCode",{parentName:"h4"},"sandbox")," Package:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package://sandbox/Client/my_awesome_audio.ogg")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"SpecialPath input also supports relative and traditional paths!")))}m.isMDXComponent=!0}}]);