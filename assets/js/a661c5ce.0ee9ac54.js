"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[4615],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5809:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),c=["components"],i={title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",sidebar_position:0,tags:["class"]},s=void 0,l={unversionedId:"scripting-reference/classes/vehicle",id:"scripting-reference/classes/vehicle",title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",source:"@site/docs/scripting-reference/classes/vehicle.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/vehicle",permalink:"/docs/next/scripting-reference/classes/vehicle",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/vehicle.mdx",tags:[{label:"class",permalink:"/docs/next/tags/class"}],version:"current",lastUpdatedBy:"vugi99",lastUpdatedAt:1662904739,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\ude99 Vehicle",description:"Vehicles are wheeled entities which Characters can possesses and drive.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83e\udea4 Trigger",permalink:"/docs/next/scripting-reference/classes/trigger"},next:{title:"\ud83d\udd2b Weapon",permalink:"/docs/next/scripting-reference/classes/weapon"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},h=d("HeaderDeclaration"),f=d("ConstructorDeclaration"),m=d("ReferenceLink"),v=d("FunctionsDeclaration"),g=d("EventsDeclaration"),y={toc:p};function b(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(h,{type:"Class",name:"Vehicle",image:"/img/docs/vehicle.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("p",null,"Any Skeletal Mesh can be used to create a Vehicle, although only Skeletal Meshes with Wheels bones can use the built-in feature of animated Wheels."),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns a Pickup Vehicle\nlocal vehicle = Vehicle(location or Vector(), rotation or Rotator(), "nanos-world::SK_Pickup", CollisionType.Normal, true, false, true, "nanos-world::A_Vehicle_Engine_10")\n\n-- Configure it\'s Engine power and Aerodynamics\nvehicle:SetEngineSetup(700, 5000)\nvehicle:SetAerodynamicsSetup(2500)\n\n-- Configure it\'s Steering Wheel and Headlights location\nvehicle:SetSteeringWheelSetup(Vector(0, 27, 120), 24)\nvehicle:SetHeadlightsSetup(Vector(270, 0, 70))\n\n-- Configures each Wheel\nvehicle:SetWheel(0, "Wheel_Front_Left",  27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(1, "Wheel_Front_Right", 27, 18, 45, Vector(), true,  true, false, false, false, 1500, 3000, 1000, 1, 3, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(2, "Wheel_Rear_Left",   27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\nvehicle:SetWheel(3, "Wheel_Rear_Right",  27, 18,  0, Vector(), false, true,  true, false, false, 1500, 3000, 1000, 1, 4, 20, 20, 250, 50, 10, 10, 0, 0.5, 0.5)\n\n-- Adds 6 Doors/Seats\nvehicle:SetDoor(0, Vector(  50, -75, 105), Vector(   8, -32.5,  95), Rotator(0,  0,  10), 70, -150)\nvehicle:SetDoor(1, Vector(  50,  75, 105), Vector(  25,    50,  90), Rotator(0,  0,   0), 70,  150)\nvehicle:SetDoor(2, Vector( -90, -75, 130), Vector( -90,  -115, 155), Rotator(0,  90, 20), 60, -150)\nvehicle:SetDoor(3, Vector( -90,  75, 130), Vector( -90,   115, 155), Rotator(0, -90, 20), 60,  150)\nvehicle:SetDoor(4, Vector(-195, -75, 130), Vector(-195,  -115, 155), Rotator(0,  90, 20), 60, -150)\nvehicle:SetDoor(5, Vector(-195,  75, 130), Vector(-195,   115, 155), Rotator(0, -90, 20), 60,  150)\n\n-- Make it ready (so clients only create Physics once and not for each function call above)\nvehicle:RecreatePhysics()\n')),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(f,{type:"Class",name:"Vehicle",mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please take a look at our Default's Vehicle package with all built-in Vehicles already properly configured and ready to use: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-vehicles"},"https://github.com/nanos-world/nanos-world-vehicles"),".")),(0,a.kt)("p",null,"More related examples:"),(0,a.kt)(m,{href:"getting-started/tutorials-and-examples/monster-truck",mdxType:"ReferenceLink"},"Monster Truck"),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)(v,{type:"Class",name:"Vehicle",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,a.kt)(g,{type:"Class",name:"Vehicle",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);