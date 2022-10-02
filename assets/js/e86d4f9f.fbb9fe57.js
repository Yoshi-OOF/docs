"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6250],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=s,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(83117),s=n(80102),r=(n(67294),n(3905)),i=["components"],o={title:"Classes Guide",description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},l=void 0,c={unversionedId:"core-concepts/scripting/classes-guide",id:"version-latest/core-concepts/scripting/classes-guide",title:"Classes Guide",description:"All you need to know about Classes",source:"@site/versioned_docs/version-latest/core-concepts/scripting/classes-guide.md",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/classes-guide",permalink:"/docs/core-concepts/scripting/classes-guide",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/classes-guide.md",tags:[{label:"scripting",permalink:"/docs/tags/scripting"}],version:"latest",lastUpdatedBy:"MoskalykA",lastUpdatedAt:1664700122,formattedLastUpdatedAt:"Oct 2, 2022",sidebarPosition:0,frontMatter:{title:"Classes Guide",description:"All you need to know about Classes",sidebar_position:0,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Loading Screen",permalink:"/docs/core-concepts/packages/loading-screen"},next:{title:"Events Guide",permalink:"/docs/core-concepts/scripting/events-guide"}},p={},d=[{value:"Classes",id:"classes",level:2},{value:"Classes Inheritance",id:"classes-inheritance",level:3},{value:"Spawning Entities",id:"spawning-entities",level:3},{value:"Destroying Entities",id:"destroying-entities",level:3},{value:"Static Classes",id:"static-classes",level:2},{value:"Utility Classes",id:"utility-classes",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All you need to know about Classes"),(0,r.kt)("p",null,"All entities in nanos world are represented by a Class. In Lua, classes are represented by ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/glossary/basic-types#table"},"tables"),". That means that every interaction with entities (Players, Characters, Props, etc) are made with Classes/tables methods following an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Object-oriented_programming"},"OOP ","(","Object-oriented programming")," pattern",")",". In this page we will explain more about that."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In nanos world we have 3 types of Classes (or structures): ",(0,r.kt)("inlineCode",{parentName:"p"},"Classes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Static Classes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Utility Classes"),".")),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"If you read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/quick-start"},"Quick Start")," guide, you noticed we were spawning entities in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"-- Spawning an entity with a Constructor\nlocal my_entity = Entity()\n\n-- Interacting with the entity with it's methods\nmy_entity:MyFunction()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Access to ",(0,r.kt)("strong",{parentName:"p"},"Entities / Spawned Objects")," ",(0,r.kt)("strong",{parentName:"p"},"Methods")," are made with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},":")),".")),(0,r.kt)("p",null,"This is how ",(0,r.kt)("strong",{parentName:"p"},"OOP")," works! You create objects and call functions/catch events on that object. Unlike other scripting games which have tons of global functions and events to interact with entities, nanos world scripting is a ",(0,r.kt)("strong",{parentName:"p"},"modern approach")," to ",(0,r.kt)("strong",{parentName:"p"},"modern programming"),"."),(0,r.kt)("h3",{id:"classes-inheritance"},"Classes Inheritance"),(0,r.kt)("p",null,"Under the hood, nanos world Classes follow an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inheritance_%28object-oriented_programming%29"},"Inheritance Pattern"),", which means we have base parent classes, and it\u2019s children which inherits all functions, events and properties from them. You will notice that all Classes that can be spawned in the world are ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Actors"),", for example in Character and ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/prop"},"Prop")," ","(","which are Actors",")"," it is possible to call the function: ",(0,r.kt)("inlineCode",{parentName:"p"},":SetLocation(Vector)"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/scripting-reference/classes/base-classes/actor"},"Base Class Actor")," is a very important class in nanos world. It contains the most of methods which are shared through all Classes we have, and also ",(0,r.kt)("strong",{parentName:"p"},"Static Methods")," to get and retrieve entities directly.")),(0,r.kt)("h3",{id:"spawning-entities"},"Spawning Entities"),(0,r.kt)("p",null,"Spawning entities in nanos world is extremely easy and straightforward, let's say we want to spawn a Character:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"local my_character = Character()\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Each Class will contain it's own ",(0,r.kt)("strong",{parentName:"p"},"Constructor"),", ",(0,r.kt)("strong",{parentName:"p"},"Properties"),", ",(0,r.kt)("strong",{parentName:"p"},"Methods")," and ",(0,r.kt)("strong",{parentName:"p"},"Events"),"."),(0,r.kt)("p",{parentName:"admonition"},"Check all Classes that nanos world provides in the sidebar ",(0,r.kt)("strong",{parentName:"p"},"Scripting Reference -> Classes")," item.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that some Classes can only be spawned in the ",(0,r.kt)("strong",{parentName:"p"},"Server"),", others can only be spawned in the ",(0,r.kt)("strong",{parentName:"p"},"Client"),".")),(0,r.kt)("h3",{id:"destroying-entities"},"Destroying Entities"),(0,r.kt)("p",null,"All classes ","(","but Player",")"," allow you to destroy them with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"my_character:Destroy()\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Destroying an Entity will trigger the event ",(0,r.kt)("inlineCode",{parentName:"p"},"Destroy")," and also will automatically detach all attached entities it had attached*."),(0,r.kt)("p",{parentName:"admonition"},"*",(0,r.kt)("em",{parentName:"p"},"If you attached entities with ",(0,r.kt)("inlineCode",{parentName:"em"},"auto_destroy_when_detached")," parameter, all attached entities will be destroyed as well \ud83d\ude09"),".")),(0,r.kt)("h2",{id:"static-classes"},"Static Classes"),(0,r.kt)("p",null,"Static Classes in nanos world are Classes which you cannot Spawn. Instead you can use it's methods directly with ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("p",null,"For example, if you want to interact with World ","(","move the sun, set it raining, etc",")",", you will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"World")," Static Class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},"-- Makes it 9:25 AM\nWorld.SetTime(9, 25)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Access to ",(0,r.kt)("strong",{parentName:"p"},"Static Classes / Static Methods")," are made with ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".")),".")),(0,r.kt)("h2",{id:"utility-classes"},"Utility Classes"),(0,r.kt)("p",null,"Besides Classes and Static Classes, we have the ",(0,r.kt)("strong",{parentName:"p"},"Utility Classes"),"! Those are mostly structs used in nanos world API such as Vector, Rotator, Color, JSON and some others."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"All Utility Classes are Open Sourced at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!")))}m.isMDXComponent=!0}}]);