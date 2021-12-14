"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[805],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return s},SM:function(){return o},Yb:function(){return d},aj:function(){return v},rt:function(){return g},Ut:function(){return h},PZ:function(){return k},p2:function(){return y}});n(83117),n(80102),n(67294);var r=n(3905),a=n(80907),i=function(){return(0,a.zu)().path},s=function(e){var t=e.title,n=e.description,a=e.href,s=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:i()+"/"+a},(0,r.kt)("img",{src:s||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},o=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},m=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},f=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},v={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},h={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},k={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},y={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Sound:function(){return f("Sound Asset or Special Path")},Image:function(){return f("Image Special Path")},HTML:function(){return f("HTML Special Path")}}},70358:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(87469),o=["components"],c={description:"Comment stocker des donn\xe9es dans des entit\xe9s accessibles depuis n'importe o\xf9",sidebar_position:4,tags:["scripting"]},u="Valeurs des entit\xe9s",l={unversionedId:"core-concepts/scripting/entity-values",id:"version-latest/core-concepts/scripting/entity-values",isDocsHomePage:!1,title:"Valeurs des entit\xe9s",description:"Comment stocker des donn\xe9es dans des entit\xe9s accessibles depuis n'importe o\xf9",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/entity-values.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/entity-values",permalink:"/fr/docs/core-concepts/scripting/entity-values",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/entity-values.mdx",tags:[{label:"scripting",permalink:"/fr/docs/tags/scripting"}],version:"latest",sidebarPosition:4,frontMatter:{description:"Comment stocker des donn\xe9es dans des entit\xe9s accessibles depuis n'importe o\xf9",sidebar_position:4,tags:["scripting"]},sidebar:"version-latest/main",previous:{title:"Packages Communication",permalink:"/fr/docs/core-concepts/scripting/communicating-between-packages"},next:{title:"User Interface",permalink:"/fr/docs/core-concepts/scripting/user-interface"}},p=[{value:"<code>SetValue</code>",id:"setvalue",children:[],level:2},{value:"<code>GetValue</code>",id:"getvalue",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"valeurs-des-entit\xe9s"},"Valeurs des entit\xe9s"),(0,i.kt)("p",null,"Comment stocker des donn\xe9es dans des entit\xe9s accessibles depuis n'importe o\xf9"),(0,i.kt)("p",null,"Dans nanos world, il est possible de stocker des donn\xe9es sur des entit\xe9s. Ces valeurs sont accessibles par n'importe quel Package et vous pouvez \xe9galement d\xe9terminer si la valeur sera automatiquement synchronis\xe9e avec les clients."),(0,i.kt)("p",null,"Dans la page ",(0,i.kt)(s.PZ.Actor,null)," on peut trouver les d\xe9finitions des m\xe9thodes ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue()")," et ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue()"),". Il est \xe9galement possible de stocker des valeurs globalement sur ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/client"},"Client")," et ",(0,i.kt)("a",{parentName:"p",href:"/fr/docs/scripting-reference/static-classes/server"},"Serveur")," des classes statiques avec les m\xeames m\xe9thodes !"),(0,i.kt)("h2",{id:"setvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"SetValue")),(0,i.kt)("p",null,"In any entity, you can use the method ",(0,i.kt)("inlineCode",{parentName:"p"},":SetValue(key, value, sync)")," to set any kind of value on that entity. Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},"-- Sets a synchronized 'my_value' value\nmy_player:SetValue(\"my_value\", 100, true)\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Il est possible de stocker des valeurs de type ",(0,i.kt)(s.rt.Any,null),", \xe0 l'exception des ",(0,i.kt)("inlineCode",{parentName:"p"},"fonctions"),"."))),(0,i.kt)("p",null,"Si vous passez ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," comme vrai, cette valeur sera automatiquement synchronis\xe9e avec tous les clients. Notez que ",(0,i.kt)("inlineCode",{parentName:"p"},"sync")," est un param\xe8tre facultatif disponible uniquement sur le cot\xe9 ",(0,i.kt)("strong",{parentName:"p"},"Serveur"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Client.SetValue()")," and ",(0,i.kt)("strong",{parentName:"p"},"Server.SetValue()")," won't have the last parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"sync"),". En effet, la valeur n'existera que sur le c\xf4t\xe9 que vous d\xe9finissez."))),(0,i.kt)("h2",{id:"getvalue"},(0,i.kt)("inlineCode",{parentName:"h2"},"GetValue")),(0,i.kt)("p",null,"After set, you can access any value from any entity using ",(0,i.kt)("inlineCode",{parentName:"p"},":GetValue(key, fallback)")," on any entity you want. Si vous d\xe9finissez la valeur \xe0 synchroniser sur les Clients, vous serez en mesure d'obtenir les valeurs du c\xf4t\xe9 Client \xe9galement. You can pass an aditional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"fallback")," which will be returned if the key doesn't exist!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Gets 'my_value' value, or returns '0' if no value is set\nlocal my_value = my_player:GetValue(\"my_value\", 0)\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Soyez conscient que le stockage des ",(0,i.kt)("strong",{parentName:"p"},"entit\xe9s")," lui-m\xeame n'annulera pas la valeur si l'entit\xe9 est d\xe9truite, c'est donc une bonne pratique de valider les valeurs if avec ",(0,i.kt)("inlineCode",{parentName:"p"},":IsValid()")," apr\xe8s les avoir r\xe9cup\xe9r\xe9es."))))}m.isMDXComponent=!0}}]);