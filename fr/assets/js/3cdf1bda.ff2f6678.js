"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9139],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||c;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return l}});var r=n(83117),a=n(80102),c=(n(67294),n(3905)),i=["components"],o={title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},s=void 0,u={unversionedId:"scripting-reference/classes/scene-capture",id:"scripting-reference/classes/scene-capture",title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/scene-capture.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/scene-capture",permalink:"/fr/docs/next/scripting-reference/classes/scene-capture",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/scene-capture.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udce6 Prop",permalink:"/fr/docs/next/scripting-reference/classes/prop"},next:{title:"\ud83d\udd0a Sound",permalink:"/fr/docs/next/scripting-reference/classes/sound"}},p={},l=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,c.kt)("div",t)}},m=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),h=d("FunctionsDeclaration"),y=d("EventsDeclaration"),v={toc:l};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(m,{type:"Class",name:"SceneCapture",image:"/img/docs/scenecapture.webp",mdxType:"HeaderDeclaration"}),(0,c.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-lua"},"-- Client Side\nlocal scene_capture = SceneCapture(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  256,\n  256,\n  0.033,\n  5000,\n  100\n)\n\nmy_prop:SetMaterialFromSceneCapture(scene_capture)\n")),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"You can use the output Texture from a SceneCapture with ",(0,c.kt)("a",{parentName:"p",href:"/fr/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromscenecapture"},":SetMaterialFromSceneCapture()")," method!")),(0,c.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,c.kt)(f,{type:"Class",name:"SceneCapture",mdxType:"ConstructorDeclaration"}),(0,c.kt)("admonition",{type:"note"},(0,c.kt)("p",{parentName:"admonition"},"Scene Captures capture a scene in real time, this means every tick it will re-render the scene from scratch. Please consider reducing the ",(0,c.kt)("inlineCode",{parentName:"p"},"width"),"/",(0,c.kt)("inlineCode",{parentName:"p"},"height")," and even the ",(0,c.kt)("inlineCode",{parentName:"p"},"render_rate")," to improve it's performance."),(0,c.kt)("p",{parentName:"admonition"},"We've worked hard to make SceneCapture as performatic as possible! Some techniques were applied for optimization and reducing the ",(0,c.kt)("inlineCode",{parentName:"p"},"render_rate")," automatically when you are far and when the generated texture is out of the screen.")),(0,c.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,c.kt)(h,{type:"Class",name:"SceneCapture",mdxType:"FunctionsDeclaration"}),(0,c.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,c.kt)(y,{type:"Class",name:"SceneCapture",mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0}}]);