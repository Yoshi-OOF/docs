"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1166],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return a},SM:function(){return s},Yb:function(){return d},aj:function(){return m},rt:function(){return g},Ut:function(){return b},PZ:function(){return y},p2:function(){return v}});n(83117),n(80102),n(67294);var r=n(3905),o=n(80907),i=function(){return(0,o.zu)().path},a=function(e){var t=e.title,n=e.description,o=e.href,a=e.image_src;return(0,r.kt)("a",{class:"card-link",href:o.startsWith("http")?o:i()+"/"+o},(0,r.kt)("img",{src:a||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:i()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:i()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:i()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},f=function(e){return(0,r.kt)("a",{href:i()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},h=function(e){return(0,r.kt)("a",{href:i()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},m={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},b={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},v={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return h("Sound Asset or Special Path")},Image:function(){return h("Image Special Path")},HTML:function(){return h("HTML Special Path")}}},41950:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(87469),s=["components"],c={description:"How to become a Tester",sidebar_position:.1},u="\ud83e\uddea Sign Up for Alpha Testing",l={unversionedId:"signing-up-alpha",id:"signing-up-alpha",isDocsHomePage:!1,title:"\ud83e\uddea Sign Up for Alpha Testing",description:"How to become a Tester",source:"@site/docs/signing-up-alpha.mdx",sourceDirName:".",slug:"/signing-up-alpha",permalink:"/docs/next/signing-up-alpha",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/signing-up-alpha.mdx",tags:[],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1636405617,formattedLastUpdatedAt:"11/8/2021",sidebarPosition:.1,frontMatter:{description:"How to become a Tester",sidebar_position:.1},sidebar:"main",previous:{title:"\ud83d\udc4b Welcome",permalink:"/docs/next/"},next:{title:"\ud83d\udee3\ufe0f Roadmap",permalink:"/docs/next/roadmap"}},p=[{value:"Who can become a Tester?",id:"who-can-become-a-tester",children:[],level:2},{value:"How do I know I was selected?",id:"how-do-i-know-i-was-selected",children:[],level:2},{value:"Will I keep the game after the Testing Phase ends?",id:"will-i-keep-the-game-after-the-testing-phase-ends",children:[],level:2},{value:"Registering to become an Alpha Tester",id:"registering-to-become-an-alpha-tester",children:[],level:2}],d={toc:p};function f(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-sign-up-for-alpha-testing"},"\ud83e\uddea Sign Up for Alpha Testing"),(0,i.kt)("p",null,"How to subscribe to become a Tester."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(53958).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"We want you!")," nanos world is under heavy development since 2 years! And finally has come to an Alpha state! This means a lot is already done and it's time to test the limits!"),(0,i.kt)("p",null,"We love our testers! We consider testers as a fundamental part of nanos world. Most of our features and bug fixes is worked on based on your feedback! Therefore we choose the testers thoroughly!"),(0,i.kt)("h2",{id:"who-can-become-a-tester"},"Who can become a Tester?"),(0,i.kt)("p",null,"Everyone can register! We are looking for people who are enthusiastic about sandbox games looking to help! All opinions count! We are giving preference to people interested in creating content, scripting and testing our API! Let us know of your interest! We heavily recommend getting in touch to us in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord"),"! Active community members will much likely get the access earlier! Be sure to introduce yourself so we can get to know each other \ud83d\ude04!"),(0,i.kt)("h2",{id:"how-do-i-know-i-was-selected"},"How do I know I was selected?"),(0,i.kt)("p",null,"Once selected, you will get notified or by e-mail or through Discord (by ",(0,i.kt)("strong",{parentName:"p"},"SyedMuhammad"),")!"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We weekly review the applications to become a tester. But we are not always able to respond as quickly as possible, all subscriptions are stored and never discarded. If you are an community active member, your chances are much better of being prioritized!"))),(0,i.kt)("h2",{id:"will-i-keep-the-game-after-the-testing-phase-ends"},"Will I keep the game after the Testing Phase ends?"),(0,i.kt)("p",null,"We want to be able to give back in some way to testers who actively contributed to the nanos world. So ",(0,i.kt)("strong",{parentName:"p"},"YES"),", we desire to to give away keys to the deserving testers after the testing phase is over!"),(0,i.kt)("h2",{id:"registering-to-become-an-alpha-tester"},"Registering to become an Alpha Tester"),(0,i.kt)("p",null,"If you want to join the official testers team, please use the following forms to register to get a chance to become a tester:"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the forms to tell us why you should become a tester and how you can contribute to the development of nanos world! Feel free to express your skills in other areas you have abilities and would like to contribute in other ways too!"))),(0,i.kt)(a.SM,{href:"https://tester.nanos.world",mdxType:"ReferenceLink"},"\ud83e\uddea Tester Subscription Forms"))}f.isMDXComponent=!0},53958:function(e,t,n){t.Z=n.p+"assets/images/uncle-sam-d033425b97aa7fb6f98a9829a3748868.png"}}]);