"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1982],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,h=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87469:function(e,t,r){r.d(t,{PZ:function(){return b},SM:function(){return s},Ut:function(){return g},YS:function(){return a},Yb:function(){return f},aj:function(){return m},p2:function(){return v},rt:function(){return y}});r(83117),r(80102),r(67294);var n=r(3905),i=r(80143),o=function(){return(0,i.zu)().path},a=function(e){var t=e.title,r=e.description,i=e.href,a=e.image_src;return(0,n.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,n.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,n.kt)("h4",null,t),(0,n.kt)("p",null,r))},s=function(e){var t=e.children,r=e.href;return(0,n.kt)("a",{class:"reference-link",href:r.startsWith("http")?r:o()+"/"+r},t,(0,n.kt)("span",null,r))},c=function(e,t){return(0,n.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,n.kt)("img",{src:e,title:t}))},u=function(e){return(0,n.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,n.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,n.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},f=function(e){var t=e.children;return(0,n.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,n.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,n.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},y={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},g={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},b={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Billboard:function(){return p("Billboard")},Blueprint:function(){return p("Blueprint")},Canvas:function(){return p("Canvas")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},Database:function(){return p("Database")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},v={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Blueprint:function(){return d("Blueprint Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},32995:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=(r(87469),JSON.parse('{"name":"File","description":"A File represents an entry to a system file.","authority":"server","constructor":[{"type":"string","name":"file_path","description":"Path relative to server executable"},{"type":"boolean","name":"truncate","default":"false","description":"Whether or not to clear the file upon opening it"}],"functions":[{"name":"Close","authority":"server","description":"Closes the file and destroys the entity"},{"name":"Flush","authority":"server","description":"Flushes content to the file"},{"return":{"type":"boolean","description":"if is EOF"},"authority":"server","name":"IsEOF","description":"Checks if the file status is End of File"},{"return":{"type":"boolean","description":"if status is Bad"},"authority":"server","name":"IsBad","description":"Checks if the file status is Bad"},{"return":{"type":"boolean","description":"if status is Good"},"authority":"server","name":"IsGood","description":"Checks if the file status is Good"},{"return":{"type":"boolean","description":"if last operation failed"},"authority":"server","name":"HasFailed","description":"Checks if the last operation has Failed"},{"return":{"type":"string","description":"file data"},"authority":"server","name":"Read","description":"Reads characters from the File and returns it. Also moves the file pointer to the latest read position. Pass 0 to read the whole file","parameters":[{"type":"number","name":"length","default":"0","description":"Length to be read from file"}]},{"authority":"server","name":"ReadAsync","description":"Reads characters from the File asynchronously.","parameters":[{"type":"number","name":"length","description":"Length to be read from file"},{"type":"function","name":"callback","description":"Callback with the file read"}]},{"return":{"type":"string","description":"file line data"},"authority":"server","name":"ReadLine","description":"Reads and returns the next file line"},{"name":"Seek","authority":"server","description":"Sets the file pointer to a specific position","parameters":[{"type":"number","name":"position","description":"Position to offset the file pointer"}]},{"return":{"type":"number","description":"file size"},"authority":"server","name":"Size","description":"Returns the size of the file"},{"name":"Skip","authority":"server","description":"Skips n (amount) positions from the current file pointer position","parameters":[{"type":"number","name":"amount","description":"Amount to offset the file pointer"}]},{"return":{"type":"number","description":"current file pointer position"},"authority":"server","name":"Tell","description":"Returns the current file pointer position"},{"name":"Write","authority":"server","description":"Writes the Data at the current position of the file","parameters":[{"type":"string","name":"data","description":"Data to write to the file"}]}],"static_functions":[{"type":"number","name":"Time","return":{"type":"number","description":"the last update time in unix time"},"description":"Returns when a file was last modified in Unix time","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to file"}]},{"type":"boolean","name":"CreateDirectory","return":{"type":"boolean","description":"if succeeded"},"description":"Creates a Directory (for every folder passed)","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to folder"}]},{"name":"Remove","return":{"type":"number","description":"amount of files deleted"},"description":"Deletes a folder or file","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to file or folder"}]},{"name":"Exists","return":{"type":"boolean","description":"if exists"},"description":"Verifies if a entry exists in the file system","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to file or folder"}]},{"name":"IsDirectory","return":{"type":"boolean","description":"if is a directory"},"description":"Checks if a path is a directory","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to folder"}]},{"name":"IsRegularFile","return":{"type":"boolean","description":"if is a regular file"},"description":"Checks if a path is a file","authority":"server","parameters":[{"type":"string","name":"path","description":"Path to filey"}]}]}')),s=["components"],c={title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},u=void 0,l={unversionedId:"scripting-reference/classes/file",id:"scripting-reference/classes/file",title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/file.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/file",permalink:"/fr/docs/next/scripting-reference/classes/file",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/file.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udcc1 File",description:"A File represents an entry to a system file.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udd8c\ufe0f Decal",permalink:"/fr/docs/next/scripting-reference/classes/decal"},next:{title:"\ud83d\udca3 Grenade",permalink:"/fr/docs/next/scripting-reference/classes/grenade"}},p={},f=[{value:"Example",id:"example",level:2},{value:"Constructor",id:"constructor",level:2},{value:"Fonctions statiques",id:"fonctions-statiques",level:2},{value:"Functions",id:"functions",level:2},{value:"Events",id:"events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=d("HeaderDeclaration"),m=d("ConstructorDeclaration"),y=d("StaticFunctionsDeclaration"),g=d("FunctionsDeclaration"),b=d("EventsDeclaration"),v={toc:f};function k(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(h,{class_data:a,mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is not possible to open files from outside the server folder. All path must be relative to the Server's executable folder. All files are opened as binary file by default.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local configuration_file = File("my_awesome_configuration.json")\n\nlocal configuration_file_json = JSON.parse(configuration_file:Read(configuration_file:Size()))\n')),(0,o.kt)("h2",{id:"constructor"},"Constructor"),(0,o.kt)(m,{class_data:a,mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"fonctions-statiques"},"Fonctions statiques"),(0,o.kt)(y,{class_data:a,mdxType:"StaticFunctionsDeclaration"}),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)(g,{class_data:a,mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)(b,{class_data:a,mdxType:"EventsDeclaration"}))}k.isMDXComponent=!0}}]);