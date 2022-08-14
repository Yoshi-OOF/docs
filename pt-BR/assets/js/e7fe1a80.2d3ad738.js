"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5485],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29901:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(83117),a=r(80102),s=(r(67294),r(3905)),o=["components"],i={title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/player",id:"scripting-reference/classes/player",title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/player.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/player",permalink:"/pt-BR/docs/next/scripting-reference/classes/player",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/player.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udc69\u200d\ud83d\udcbb Player",description:"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\u2728 Particle",permalink:"/pt-BR/docs/next/scripting-reference/classes/particle"},next:{title:"\ud83d\udce6 Prop",permalink:"/pt-BR/docs/next/scripting-reference/classes/prop"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},y=d("HeaderDeclaration"),f=d("FunctionsDeclaration"),m=d("EventsDeclaration"),h={toc:u};function v(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(y,{type:"Class",name:"Player",mdxType:"HeaderDeclaration"}),(0,s.kt)("admonition",{title:"Authority",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\ud83d\udfe5 You cannot spawn or Destroy Players.")),(0,s.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns and possess a Character when a Player joins the server\nPlayer.Subscribe("Spawn", function(player)\n    local new_char = Character()\n    player:Possess(new_char)\nend)\n\n-- Destroys the Character when the Player leaves the server\nPlayer.Subscribe("Destroy", function(player)\n        local character = player:GetControlledCharacter()\n        if (character) then\n                character:Destroy()\n        end\nend)\n')),(0,s.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,s.kt)(f,{type:"Class",name:"Player",mdxType:"FunctionsDeclaration"}),(0,s.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,s.kt)(m,{type:"Class",name:"Player",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);