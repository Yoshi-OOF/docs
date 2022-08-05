"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3456],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),u=s(a),m=r,c=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87469:function(t,e,a){a.d(e,{PZ:function(){return h},SM:function(){return o},Ut:function(){return g},YS:function(){return i},Yb:function(){return u},aj:function(){return f},p2:function(){return b},rt:function(){return N}});a(83117),a(80102),a(67294);var n=a(3905),r=a(80143),l=function(){return(0,r.zu)().path},i=function(t){var e=t.title,a=t.description,r=t.href,i=t.image_src;return(0,n.kt)("a",{class:"card-link",href:r.startsWith("http")?r:l()+"/"+r},(0,n.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,e),(0,n.kt)("p",null,a))},o=function(t){var e=t.children,a=t.href;return(0,n.kt)("a",{class:"reference-link",href:a.startsWith("http")?a:l()+"/"+a},e,(0,n.kt)("span",null,a))},p=function(t,e){return(0,n.kt)("a",{class:"authority-availability",href:l()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:t,title:e}))},s=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},k=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,n.kt)("a",{href:l()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},u=function(t){var e=t.children;return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},m=function(t){return(0,n.kt)("a",{href:l()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},c=function(t){return(0,n.kt)("a",{href:l()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},f={AuthorityOnly:function(){return p("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return p("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return p("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return p("/img/scripting/both.png","both-sides - this can be called on any side!")}},N={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},g={Vector:function(){return k("Vector")},Rotator:function(){return k("Rotator")},Color:function(){return k("Color")},Quat:function(){return k("Quat","quaternion")},Vector2D:function(){return k("Vector2D","vectortwod")}},h={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Billboard:function(){return d("Billboard")},Blueprint:function(){return d("Blueprint")},Canvas:function(){return d("Canvas")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},Database:function(){return d("Database")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Blueprint:function(){return m("Blueprint Asset")},Sound:function(){return c("Sound Asset or Special Path")},Image:function(){return c("Image Special Path")},HTML:function(){return c("HTML Special Path")}}},34652:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return p},metadata:function(){return k},toc:function(){return u}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(87469),o=["components"],p={title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},s=void 0,k={unversionedId:"scripting-reference/classes/file",id:"scripting-reference/classes/file",title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",source:"@site/docs/scripting-reference/classes/file.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/file",permalink:"/docs/next/scripting-reference/classes/file",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/file.mdx",tags:[{label:"class",permalink:"/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1659726889,formattedLastUpdatedAt:"Aug 5, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/docs/next/scripting-reference/classes/decal"},next:{title:"\ud83d\udca3 Grenade",permalink:"/docs/next/scripting-reference/classes/grenade"}},d={},u=[{value:"Example",id:"example",level:2},{value:"Constructor Parameters",id:"constructor-parameters",level:2},{value:"Static Functions",id:"static-functions",level:2},{value:"Functions",id:"functions",level:2},{value:"Functions Detailed",id:"functions-detailed",level:2},{value:"<code>Close</code>",id:"close",level:3},{value:"<code>Flush</code>",id:"flush",level:3},{value:"<code>IsEOF</code>",id:"iseof",level:3},{value:"<code>IsBad</code>",id:"isbad",level:3},{value:"<code>IsGood</code>",id:"isgood",level:3},{value:"<code>HasFailed</code>",id:"hasfailed",level:3},{value:"<code>Read</code>",id:"read",level:3},{value:"<code>ReadAsync</code>",id:"readasync",level:3},{value:"<code>ReadLine</code>",id:"readline",level:3},{value:"<code>Seek</code>",id:"seek",level:3},{value:"<code>Size</code>",id:"size",level:3},{value:"<code>Skip</code>",id:"skip",level:3},{value:"<code>Tell</code>",id:"tell",level:3},{value:"<code>Write</code>",id:"write",level:3},{value:"Static Functions Detailed",id:"static-functions-detailed",level:2},{value:"<code>Time</code>",id:"time",level:3},{value:"<code>CreateDirectory</code>",id:"createdirectory",level:3},{value:"<code>Remove</code>",id:"remove",level:3},{value:"<code>Exists</code>",id:"exists",level:3},{value:"<code>IsDirectory</code>",id:"isdirectory",level:3},{value:"<code>IsRegularFile</code>",id:"isregularfile",level:3}],m={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A File represents an entry to a system file."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\ud83d\udfe6 ",(0,l.kt)("strong",{parentName:"p"},"Authority:")," This class can only be spawned on ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/scripting/authority-concepts"},"Server"),".")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"It is not possible to open files from outside the server folder. All path must be relative to the Server\u2019s executable folder. All files are opened as binary file by default.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'local configuration_file = File("my_awesome_configuration.json")\n\nlocal configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))\n')),(0,l.kt)("h2",{id:"constructor-parameters"},"Constructor Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Default")),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"file_path"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path relative to server executable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"truncate"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether or not to clear the file upon opening it")))),(0,l.kt)("h2",{id:"static-functions"},"Static Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#time"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Time")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns when a file was last modified in Unix time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#createdirectory"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"CreateDirectory")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a Directory (for every folder passed)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#remove"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Remove")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Deletes a folder or file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#exists"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Exists")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Verifies if a entry exists in the file system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#isdirectory"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"IsDirectory")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if a path is a directory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#isregularfile"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"IsRegularFile")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if a path is a file")))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Returns")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Name")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Description")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#close"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Close")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Closes the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#flush"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Flush")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Flushes content to the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#iseof"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"IsEOF")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is End of File")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#isbad"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"IsBad")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is Bad")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#isgood"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"IsGood")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the file status is Good")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Boolean,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#hasfailed"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"HasFailed")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Checks if the last operation has Failed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#read"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Read")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reads characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#readasync"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"ReadAsync")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reads characters from the File asynchronously.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#readline"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"ReadLine")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Reads and returns the next file line")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#seek"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Seek")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Sets the file pointer to a specific position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#size"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Size")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns the size of the file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#skip"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Skip")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Skips n (amount) positions from the current file pointer position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#tell"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Tell")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Returns the current file pointer position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"file#write"},(0,l.kt)("strong",{parentName:"a"},(0,l.kt)("inlineCode",{parentName:"strong"},"Write")))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Writes the Data at the current position of the file")))),(0,l.kt)("h2",{id:"functions-detailed"},"Functions Detailed"),(0,l.kt)("h3",{id:"close"},(0,l.kt)("inlineCode",{parentName:"h3"},"Close")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Closes the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Close()\n")),(0,l.kt)("h3",{id:"flush"},(0,l.kt)("inlineCode",{parentName:"h3"},"Flush")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Flushes content to the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Flush()\n")),(0,l.kt)("h3",{id:"iseof"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsEOF")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is End of File"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsEOF()\n")),(0,l.kt)("h3",{id:"isbad"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsBad")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is Bad"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsBad()\n")),(0,l.kt)("h3",{id:"isgood"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsGood")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the file status is Good"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:IsGood()\n")),(0,l.kt)("h3",{id:"hasfailed"},(0,l.kt)("inlineCode",{parentName:"h3"},"HasFailed")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checks if the last operation has Failed"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:HasFailed()\n")),(0,l.kt)("h3",{id:"read"},(0,l.kt)("inlineCode",{parentName:"h3"},"Read")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads n ","(","Length",")"," characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Read(length)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"length"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"0")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Length to be read from file")))),(0,l.kt)("h3",{id:"readasync"},(0,l.kt)("inlineCode",{parentName:"h3"},"ReadAsync")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads n (Length) characters from the File asynchronously. Also moves the file pointer to the latest read position. Pass 0 to read the whole file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:ReadAsync(length, function(content)\n\nend)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"length"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Length to be read from file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Function,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"callback"))),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Callback with the file read")))),(0,l.kt)("h3",{id:"readline"},(0,l.kt)("inlineCode",{parentName:"h3"},"ReadLine")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads and returns the next file line"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.String,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:ReadLine()\n")),(0,l.kt)("h3",{id:"seek"},(0,l.kt)("inlineCode",{parentName:"h3"},"Seek")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Sets the file pointer to a specific position")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Seek(position)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"position"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Position to  offset the file pointer")))),(0,l.kt)("h3",{id:"size"},(0,l.kt)("inlineCode",{parentName:"h3"},"Size")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the size of the file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Size()\n")),(0,l.kt)("h3",{id:"skip"},(0,l.kt)("inlineCode",{parentName:"h3"},"Skip")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Skips n ","(","amount",")"," positions from the current file pointer position")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Skip(amount)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.Number,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"amount"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Amount to offset the file pointer")))),(0,l.kt)("h3",{id:"tell"},(0,l.kt)("inlineCode",{parentName:"h3"},"Tell")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns the current file pointer position"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Tell()\n")),(0,l.kt)("h3",{id:"write"},(0,l.kt)("inlineCode",{parentName:"h3"},"Write")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Writes the Data at the current position of the file")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"my_file:Write(data)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"data"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Writes the data to the file")))),(0,l.kt)("h2",{id:"static-functions-detailed"},"Static Functions Detailed"),(0,l.kt)("h3",{id:"time"},(0,l.kt)("inlineCode",{parentName:"h3"},"Time")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns when the file was last modified in Unix time"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Time(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file")))),(0,l.kt)("h3",{id:"createdirectory"},(0,l.kt)("inlineCode",{parentName:"h3"},"CreateDirectory")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creates a directory (for every folder passed)"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null)," if succeeded")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.CreateDirectory(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to folder")))),(0,l.kt)("h3",{id:"remove"},(0,l.kt)("inlineCode",{parentName:"h3"},"Remove")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Deletes a folder or a file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Number,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Remove(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file or folder")))),(0,l.kt)("h3",{id:"exists"},(0,l.kt)("inlineCode",{parentName:"h3"},"Exists")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a file or folder exists"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.Exists(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file or folder")))),(0,l.kt)("h3",{id:"isdirectory"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsDirectory")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a path is a directory"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.IsDirectory(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to folder")))),(0,l.kt)("h3",{id:"isregularfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"IsRegularFile")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets if a path is a file"),(0,l.kt)("p",{parentName:"blockquote"},"Returns ",(0,l.kt)(i.rt.Boolean,null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"File.IsRegularFile(path)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)(i.rt.String,null)),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"path"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to file")))))}c.isMDXComponent=!0}}]);