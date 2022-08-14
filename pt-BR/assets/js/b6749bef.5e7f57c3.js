"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1579],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/cable",id:"version-latest/scripting-reference/classes/cable",title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/cable.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/cable",permalink:"/pt-BR/docs/scripting-reference/classes/cable",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/cable.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\u26d3\ufe0f Cable",description:"A Cable represents a Physics Constraint which joins two Actors with a rope-like visual representation between them",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83d\udd23 Blueprint",permalink:"/pt-BR/docs/scripting-reference/classes/blueprint"},next:{title:"\ud83d\uddbc\ufe0f Canvas",permalink:"/pt-BR/docs/scripting-reference/classes/canvas"}},p={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),b=d("FunctionsDeclaration"),h=d("EventsDeclaration"),y={toc:u};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{type:"Class",name:"Cable",image:"/img/docs/cable.jpg",mdxType:"HeaderDeclaration"}),(0,o.kt)("p",null,"nanos world ",(0,o.kt)("strong",{parentName:"p"},"Cables")," are composed primarily of two Unreal Engine components: a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/API/Plugins/CableComponent/UCableComponent/index.html"},"Cable")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/en-US/InteractiveExperiences/Physics/Constraints/ConstraintsBlueprints/index.html"},"PhysicsConstraint"),". The first is used for visual purposes only and the second one gives the effective physical effects that are applied to each end of the Cable."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Cable ",(0,o.kt)("strong",{parentName:"p"},"visuals")," can be tweaked with ",(0,o.kt)("inlineCode",{parentName:"p"},":SetForces()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},":SetCableSettings()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},":SetRenderingSettings()")," methods. Those methods don\u2019t have effect on the physics being applied and only have effects on the visual representation."),(0,o.kt)("p",{parentName:"admonition"},"Cable ",(0,o.kt)("strong",{parentName:"p"},"physics")," can be tweaked with ",(0,o.kt)("inlineCode",{parentName:"p"},":SetAngularLimits()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},":SetLinearLimits()"),".")),(0,o.kt)("p",null,"After attaching the two sides of your cable, the physics can be tweaked to affect how the constraint will affect the objects."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Cables are automatically ",(0,o.kt)("strong",{parentName:"p"},"destroyed")," when one of the sides are detached")),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'local my_cable: = Cable()\nlocal cube_01 = Prop(Vector(100, 100, 100), Rotator(), "nanos-world::SM_Cube")\nlocal cube_02 = Prop(Vector(200, 0, 100), Rotator(), "nanos-world::SM_Cube")\n\nmy_cable::AttachStartTo(cube_01)\nmy_cable::AttachEndTo(cube_02)\n')),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(f,{type:"Class",name:"Cable",mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(b,{type:"Class",name:"Cable",mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(h,{type:"Class",name:"Cable",mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0}}]);