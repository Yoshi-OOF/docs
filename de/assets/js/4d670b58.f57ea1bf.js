"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[486],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return w},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(39526),c=["components"],s={title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},u=void 0,p={unversionedId:"scripting-reference/classes/scene-capture",id:"scripting-reference/classes/scene-capture",title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/classes/scene-capture.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/scene-capture",permalink:"/de/docs/next/scripting-reference/classes/scene-capture",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/scene-capture.mdx",tags:[{label:"class",permalink:"/de/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udcfd\ufe0f SceneCapture",description:"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udce6 Prop",permalink:"/de/docs/next/scripting-reference/classes/prop"},next:{title:"\ud83d\udd0a Sound",permalink:"/de/docs/next/scripting-reference/classes/sound"}},l={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=m("HeaderDeclaration"),h=m("ConstructorDeclaration"),y=m("FunctionsDeclaration"),g=m("EventsDeclaration"),v={toc:d};function w(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{class_data:o,image:"/img/docs/scenecapture.webp",mdxType:"HeaderDeclaration"}),(0,i.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- Client Side\nlocal scene_capture = SceneCapture(\n  Vector(-900, 185, 215),\n  Rotator(0, 90, 90),\n  256,\n  256,\n  0.033,\n  5000,\n  100\n)\n\nmy_prop:SetMaterialFromSceneCapture(scene_capture)\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can use the output Texture from a SceneCapture with ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/scripting-reference/classes/base-classes/paintable#setmaterialfromscenecapture"},":SetMaterialFromSceneCapture()")," method!")),(0,i.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,i.kt)(h,{class_data:o,mdxType:"ConstructorDeclaration"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scene Captures capture a scene in real time, this means every tick it will re-render the scene from scratch. Please consider reducing the ",(0,i.kt)("inlineCode",{parentName:"p"},"width"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"height")," and even the ",(0,i.kt)("inlineCode",{parentName:"p"},"render_rate")," to improve it's performance."),(0,i.kt)("p",{parentName:"admonition"},"We've worked hard to make SceneCapture as performatic as possible! Some techniques were applied for optimization and reducing the ",(0,i.kt)("inlineCode",{parentName:"p"},"render_rate")," automatically when you are far and when the generated texture is out of the screen.")),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(y,{class_data:o,mdxType:"FunctionsDeclaration"}),(0,i.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,i.kt)(g,{class_data:o,mdxType:"EventsDeclaration"}))}w.isMDXComponent=!0},39526:function(e){e.exports=JSON.parse('{"name":"SceneCapture","description":"Scene Capture is an Actor which captures a fully dynamic image of the scene into a Texture. It captures the scene from its view frustum, stores that view as an image, which is then used within a Material.","authority":"client","inheritance":["Actor"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)","description":"Location"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)","description":"Rotation"},{"type":"number","name":"width","default":"128","description":"Width of the generated Texture"},{"type":"number","name":"height","default":"128","description":"Height of the generated Texture"},{"type":"number","name":"render_rate","default":"0.033","description":"Render Rate (how frequent is the capture)"},{"type":"number","name":"view_distance","default":"5000","description":"Maximum distance of capturing"},{"type":"number","name":"fov_angle","default":"90","description":"FOV"}],"functions":[{"name":"SetFreeze","description":"Stops or Restore Capturing","authority":"client","parameters":[{"type":"boolean","name":"freeze"}]},{"name":"SetFOVAngle","description":"Sets the FOV","authority":"client","parameters":[{"type":"number","name":"angle"}]},{"name":"Resize","description":"Change the output Texture size\\nNote: too high texture will make the capture slower and will affect game performance","authority":"client","parameters":[{"type":"number","name":"width"},{"type":"number","name":"height"}]},{"name":"SetRenderRate","description":"Set how frequent is the capture\\nNote: Setting to 0 will make it capture every frame","authority":"client","parameters":[{"type":"number","name":"render_rate"}]}]}')}}]);