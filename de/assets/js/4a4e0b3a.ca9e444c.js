"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5244],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(g,r(r({ref:t},d),{},{components:n})):o.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54797:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=["components"],c={description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},l="Gravity Gun",s={unversionedId:"getting-started/tutorials-and-examples/gravity-gun",id:"getting-started/tutorials-and-examples/gravity-gun",isDocsHomePage:!1,title:"Gravity Gun",description:"How to create a simple Gravity Gun to move Props around",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/getting-started/tutorials-and-examples/gravity-gun.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/gravity-gun",permalink:"/de/docs/next/getting-started/tutorials-and-examples/gravity-gun",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/gravity-gun.md",tags:[{label:"tutorial-example",permalink:"/de/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/de/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"How to create a simple Gravity Gun to move Props around",tags:["tutorial-example","scripting"]},sidebar:"main",previous:{title:"Fireworks",permalink:"/de/docs/next/getting-started/tutorials-and-examples/fireworks"},next:{title:"Hosting Server 4Free - Google Cloud",permalink:"/de/docs/next/getting-started/tutorials-and-examples/hosting-server-4free-gcp"}},d=[{value:"Final result",id:"final-result",children:[],level:3},{value:"Code Snippet",id:"code-snippet",children:[],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gravity-gun"},"Gravity Gun"),(0,a.kt)("p",null,"How to create a simple Gravity Gun to move Props around."),(0,a.kt)("h3",{id:"final-result"},"Final result"),(0,a.kt)("video",{controls:"true",allowfullscreen:"true"},(0,a.kt)("source",{src:"/videos/docs/tutorials/gravity-gun.mp4",type:"video/mp4"})),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can now find a fully working Gravity Gun in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox"},"Sandbox")," game-mode!"))),(0,a.kt)("h3",{id:"code-snippet"},"Code Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawns some Props and Static Meshes\n-- (note: Static Meshes don\'t have physics so they will freeze where released automatically)\nlocal p_sphere = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Sphere")\nlocal p_cone = Prop(Vector(200, 0, 200), Rotator(), "nanos-world::SM_Cone")\nlocal sm_cube = StaticMesh(Vector(100, 0, 200), Rotator(), "nanos-world::SM_Cube")\nlocal sm_cylinder = StaticMesh(Vector(300, 0, 200), Rotator(), "nanos-world::SM_Cylinder")\n\n-- Subscribe for Client\'s custom event, for when the object is grabbed/dropped\nEvents.Subscribe("PickUp", function(player, object, is_grabbing)\n    object:SetGravityEnabled(not is_grabbing)\n    object:TranslateTo(object:GetLocation(), 0)\nend)\n\n-- Subscribe for Client\'s custom event, to update the position of the object he is grabbing\nEvents.Subscribe("UpdateObjectPosition", function(player, object, location)\n    object:TranslateTo(location, 10)\nend)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Global Variables\npicking_object = nil\ndistance_trace_object = nil\ndistance = 200\n\n-- Sets the color of Highlighing at index 1\nClient.SetHighlightColor(Color(0, 20, 20, 1.5), 1, HighlightMode.OnlyVisible)\n\n-- When Player clicks\nClient.Subscribe("MouseUp", function(key_name)\n\n    -- If mouse was left button\n    if (key_name == "LeftMouseButton") then\n\n        -- If is grabbing something, drop it\n        if (picking_object) then\n            -- Calls server to re-enable gravity (if possible) and update it\'s last position\n            Events.CallRemote("PickUp", picking_object, false)\n\n            -- Disables the highlight\n            picking_object:SetHighlightEnabled(false)\n\n            picking_object = nil\n            return\n        end\n\n        -- Get the camera location in 3D World Space\n        local viewport_2D_center = Render:GetViewportSize() / 2\n        local viewport_3D = Render:Deproject(viewport_2D_center)\n        local start_location = viewport_3D.Position\n\n        -- Gets the end location of the trace (5000 units ahead)\n        local trace_max_distance = 5000\n        local end_location = viewport_3D.Position + viewport_3D.Direction * trace_max_distance\n\n        -- Determine at which object we will be tracing for (WorldStatic - StaticMeshes - and PhysicsBody - Props)\n        local collision_trace = CollisionChannel.WorldStatic | CollisionChannel.PhysicsBody\n\n        -- Do the Trace\n        local trace_result = Client.Trace(start_location, end_location, collision_trace, false, true, false, {}, true)\n\n        -- If hit something and hit an Entity\n        if (trace_result.Success and trace_result.Entity) then\n\n            -- Sets the new picked up object\n            picking_object = trace_result.Entity\n\n            -- Calculates the offset of the hit and the center of the object\n            distance_trace_object = picking_object:GetLocation() - trace_result.Location\n\n            -- Calculates the distance of the object and the camera\n            distance = trace_result.Location:Distance(viewport_3D.Position)\n\n            -- Calls remote to disable gravity of this object (if has)\n            Events.CallRemote("PickUp", picking_object, true)\n\n            -- Enable Highlighting on index 1\n            picking_object:SetHighlightEnabled(true, 1)\n        end\n    elseif (key_name == "MouseScrollUp") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance + 25\n    elseif (key_name == "MouseScrollDown") then\n        -- If mouse scroll, updates the Distance of the object from the camera\n        distance = distance - 25\n        if (distance < 100) then distance = 100 end\n    end\nend)\n\nClient:Subscribe("Tick", function(delta_time)\n    -- On Tick, updates the Position of the object, based on it\'s distance and camera rotation\n    if (picking_object == nil) then return end\n\n    local player = Client.GetLocalPlayer()\n    if (player == nil) then return end\n\n    -- Get the camera location in 3D World Space\n    local viewport_2D_center = Render.GetViewportSize() / 2\n    local viewport_3D = Render.Deproject(viewport_2D_center)\n    local start_location = viewport_3D.Position\n\n    -- Gets the new object location\n    -- (camera direction * \'distance\' units ahead + object offset from first Hit to keep it relative)\n    local end_location = (viewport_3D.Position + viewport_3D.Direction * distance) + distance_trace_object\n\n    -- Calls remote to update it\'s location\n    Events.CallRemote("UpdateObjectPosition", picking_object, end_location)\nend)\n')))}u.isMDXComponent=!0}}]);