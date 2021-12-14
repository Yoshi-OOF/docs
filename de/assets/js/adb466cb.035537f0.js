"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7962],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return a},SM:function(){return c},Yb:function(){return f},aj:function(){return g},rt:function(){return h},Ut:function(){return v},PZ:function(){return k},p2:function(){return y}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80907),o=function(){return(0,i.zu)().path},a=function(e){var t=e.title,n=e.description,i=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:o()+"/"+i},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},c=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},t,(0,r.kt)("span",null,n))},s=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},f=function(e){var t=e.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},d=function(e){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},m=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return s("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return s("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return s("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return s("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},v={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},k={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},y={StaticMesh:function(){return d("StaticMesh Asset")},SkeletalMesh:function(){return d("SkeletalMesh Asset")},Animation:function(){return d("Animation Asset")},Particle:function(){return d("Particle Asset")},Material:function(){return d("Material Asset")},Map:function(){return d("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},28566:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(87469),c=["components"],s={id:"welcome",description:"Welcome to the new nanos world Official Documentation!",sidebar_position:0,slug:"/"},u="\ud83d\udc4b Welcome",l={unversionedId:"welcome",id:"version-latest/welcome",isDocsHomePage:!1,title:"\ud83d\udc4b Welcome",description:"Welcome to the new nanos world Official Documentation!",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-latest/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/de/docs/",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/welcome.mdx",tags:[],version:"latest",sidebarPosition:0,frontMatter:{id:"welcome",description:"Welcome to the new nanos world Official Documentation!",sidebar_position:0,slug:"/"},sidebar:"version-latest/main",next:{title:"\ud83e\uddea Sign Up for Alpha Testing",permalink:"/de/docs/signing-up-alpha"}},p=[{value:"Starting Out",id:"starting-out",children:[],level:2}],f={toc:p};function d(e){var t=e.components,s=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-welcome"},"\ud83d\udc4b Welcome"),(0,o.kt)("p",null,"Welcome to the new nanos world Official Documentation!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51371).Z})),(0,o.kt)("p",null,"Welcome to the ",(0,o.kt)("strong",{parentName:"p"},"nanos world Official Documentation"),"! A compilation of technical documentation written by nanos and you! Get started by reading through the introductory pages, or navigate to a specific page by using the search box. ",(0,o.kt)("iframe",{class:"steam-widget",src:"https://store.steampowered.com/widget/1686450/",frameborder:"0",width:"620",height:"190",loading:"lazy",mark:"crwd-mark"})),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\ud83d\udcb9 This docs is constantly improving and growing. We count on your help giving us feedback and even adding new pages or information on it \ud83d\ude01!"),(0,o.kt)("p",{parentName:"div"},"\ud83d\udc91 You are allowed and encouraged to edit this and the other pages of this docs, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/de/docs/contributing-to-the-docs"},"Contributing to the Docs")," for more information on how to collaborate!"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\ud83d\udca1 We have a centralized space for reporting ",(0,o.kt)("strong",{parentName:"p"},"BUGs")," and ",(0,o.kt)("strong",{parentName:"p"},"Suggest")," new Ideas in ",(0,o.kt)("a",{parentName:"p",href:"https://issues.nanos.world"},"https://issues.nanos.world"),". nanos world is a feedback-driven game, all your suggestions are listened and deeply internally discussed!"))),(0,o.kt)("p",null,"If you desire to become a Closed Tester, please check the following page:"),(0,o.kt)(a.SM,{href:"signing-up-alpha",mdxType:"ReferenceLink"},"\ud83e\uddea Sign Up for Alpha Testing"),(0,o.kt)("h2",{id:"starting-out"},"Starting Out"),(0,o.kt)("p",null,"Start now creating content for nanos world!"),(0,o.kt)(a.SM,{href:"getting-started/quick-start",mdxType:"ReferenceLink"},"\ud83d\udccc Quick Start"),(0,o.kt)(a.SM,{href:"getting-started/tutorials-and-examples/tutorials",mdxType:"ReferenceLink"},"\ud83d\udcd1 Tutorials & Examples"),(0,o.kt)(a.SM,{href:"core-concepts/server-manual/server-installation",mdxType:"ReferenceLink"},"\ud83d\udcbb Server Installation"),(0,o.kt)(a.SM,{href:"core-concepts/packages/packages",mdxType:"ReferenceLink"},"\ud83d\udce6 Packages Guide"),(0,o.kt)(a.SM,{href:"core-concepts/scripting/classes-guide",mdxType:"ReferenceLink"},"\ud83d\udcda Classes Guide"))}d.isMDXComponent=!0},51371:function(e,t,n){t.Z=n.p+"assets/images/new-docs-899f7fa511a6b734c8b3153ea914dd86.png"}}]);