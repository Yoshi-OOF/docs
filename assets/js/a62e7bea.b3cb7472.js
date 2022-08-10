"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5485],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=r,g=l["".concat(o,".").concat(m)]||l[m]||d[m]||a;return n?i.createElement(g,s(s({ref:t},u),{},{components:n})):i.createElement(g,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=l;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},60204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),s=JSON.parse('{"name":"Input","description":"Create custom keybindings and retrieve input information.","authority":"client","static_functions":[{"authority":"client","name":"Bind","description":"Binds a function to an Input defined using <code>Register</code> or from the game","parameters":[{"type":"string","name":"binding_name","description":"The keybinding id"},{"type":"InputEvent","name":"input_event","description":"Which event to register (Released/Pressed)"},{"type":"function","name":"callback","description":"The function to trigger"}]},{"authority":"client","name":"Unbind","description":"Unbinds an Input function","description_long":"Unbinds all Input functions related to the given binding_name and input_event","parameters":[{"type":"string","name":"binding_name","description":"The keybinding id"},{"type":"InputEvent","name":"input_event","description":"Which event to register (Released/Pressed)"}]},{"authority":"client","name":"Register","description":"Registers a keybinding to a default key","parameters":[{"type":"string","name":"binding_name","description":"The keybinding id"},{"type":"string","name":"key_name"}]},{"authority":"client","name":"Unregister","description":"Unregisters a keybinding","parameters":[{"type":"string","name":"binding_name","description":"The keybinding id"},{"type":"string","name":"key_name"}]},{"authority":"client","name":"GetKeyIcon","description":"Gets the icon path of a key","parameters":[{"type":"string","name":"key_name","default":""},{"type":"boolean","name":"dark_mode","default":"false"}],"return":[{"type":"string"}]},{"authority":"client","name":"GetMappedKey","description":"Returns the key bound to a keybinding","parameters":[{"type":"string","name":"binding_name","description":"The keybinding id"}],"return":[{"type":"string"},{"type":"number"}]},{"authority":"client","name":"ResetBindings","description":"Resets all bound functions by this Package"},{"authority":"client","name":"GetScriptingKeyBindings","description":"Returns a table with all Scripting KeyBindings","return":[{"type":"table"}]}]}'),c=["components"],o={title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},p=void 0,u={unversionedId:"scripting-reference/static-classes/input",id:"scripting-reference/static-classes/input",title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",source:"@site/docs/scripting-reference/static-classes/input.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/input",permalink:"/docs/next/scripting-reference/static-classes/input",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/input.mdx",tags:[{label:"static-class",permalink:"/docs/next/tags/static-class"},{label:"client",permalink:"/docs/next/tags/client"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660140107,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{title:"\ud83d\udd79\ufe0f Input",description:"Create custom Bindings and Retrieve Input information",tags:["static-class","client"]},sidebar:"main",previous:{title:"\ud83c\udf10 HTTP",permalink:"/docs/next/scripting-reference/static-classes/http"},next:{title:"\ud83d\udce6 Package",permalink:"/docs/next/scripting-reference/static-classes/package"}},d={},l=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},g=m("HeaderDeclaration"),f=m("StaticFunctionsDeclaration"),y={toc:l};function b(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(g,{class_data:s,is_static:!0,mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Registers the binding_name \'SpawnMenu\' with default key \'Q\'\n-- This will add \'SpawnMenu\' to user KeyBinding Settings automatically\nInput.Register("SpawnMenu", "Q")\n\n-- Subscribes for Pressing the key\nInput.Bind("SpawnMenu", InputEvent.Pressed, function()\n    -- Opens the Spawn Menu\nend)\n\n-- Subscribes for Releasing the key\nInput.Bind("SpawnMenu", InputEvent.Released, function()\n    -- Closes the Spawn Menu\nend)\n')),(0,a.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,a.kt)(f,{class_data:s,mdxType:"StaticFunctionsDeclaration"}))}b.isMDXComponent=!0}}]);