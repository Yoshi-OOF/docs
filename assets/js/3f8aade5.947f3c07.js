"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[150],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return a?n.createElement(m,c(c({ref:t},d),{},{components:a})):n.createElement(m,c({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},28807:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),c=["components"],i={title:"Basic HUD (Canvas)",description:"How to add a basic HUD using Render's Canvas features, to display the character's Health and Ammo character's Health and Ammo",tags:["tutorial-example","scripting","ui"]},s=void 0,l={unversionedId:"getting-started/tutorials-and-examples/basic-hud-canvas",id:"getting-started/tutorials-and-examples/basic-hud-canvas",title:"Basic HUD (Canvas)",description:"How to add a basic HUD using Render's Canvas features, to display the character's Health and Ammo character's Health and Ammo",source:"@site/docs/getting-started/tutorials-and-examples/basic-hud-canvas.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/basic-hud-canvas",permalink:"/docs/next/getting-started/tutorials-and-examples/basic-hud-canvas",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/getting-started/tutorials-and-examples/basic-hud-canvas.md",tags:[{label:"tutorial-example",permalink:"/docs/next/tags/tutorial-example"},{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"ui",permalink:"/docs/next/tags/ui"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1662721835,formattedLastUpdatedAt:"Sep 9, 2022",frontMatter:{title:"Basic HUD (Canvas)",description:"How to add a basic HUD using Render's Canvas features, to display the character's Health and Ammo character's Health and Ammo",tags:["tutorial-example","scripting","ui"]},sidebar:"main",previous:{title:"\ud83d\udcd1 Complete Tutorials List",permalink:"/docs/next/getting-started/tutorials-and-examples/"},next:{title:"Basic HUD (HTML)",permalink:"/docs/next/getting-started/tutorials-and-examples/basic-hud-html"}},d={},p=[],h={toc:p};function u(e){var t=e.components,i=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"How to add a basic HUD using Render's Canvas features, to display the character's Health and Ammo."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also create complete and complex UIs using HTML + JavaScript + CSS, check it out: ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/getting-started/tutorials-and-examples/basic-hud-html"},"Basic HUD (HTML)"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(97172).Z,width:"1919",height:"1079"})),(0,o.kt)("p",null,"A Canvas is a painting fabric which can be drawn to. The following code shows how to add a basic UI using Canvas:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Client/Index.lua"',title:'"Client/Index.lua"'},'-- Spawns the Canvas\nHUDCanvas = Canvas(true, Color.TRANSPARENT, 0, true)\n\n-- Subscribes for Update event, we can only draw inside this event\nHUDCanvas:Subscribe("Update", function(self, width, height)\n    -- Gets the Local Player\n    local local_player = Client.GetLocalPlayer()\n    if (not local_player) then return end\n\n    -- Gets the Local Character (possessed by the Local Player)\n    local local_character = local_player:GetControlledCharacter()\n    if (not local_character) then return end\n\n    -- Draws the Health\n    self:DrawText(tostring(local_character:GetHealth()), Vector2D(100, height - 100), FontType.PoiretOne, 25, Color.WHITE)\n\n    -- Gets the Local Weapon\n    local character_weapon = local_character:GetPicked()\n    if (character_weapon and character_weapon:GetType() == "Weapon") then\n        -- Draws the Ammo Clip\n        self:DrawText(tostring(character_weapon:GetAmmoClip()), Vector2D(width - 200, height - 100), FontType.PoiretOne, 25, Color.WHITE)\n\n        -- Draws the Ammo Bag\n        self:DrawText("/ " .. tostring(character_weapon:GetAmmoBag()), Vector2D(width - 140, height - 87), FontType.PoiretOne, 15, Color.WHITE)\n    end\nend)\n')),(0,o.kt)("p",null,"The example above re-renders and updates all health/ammo information ever tick, which could be bad for performance. Gladly we can fast improve it by limiting the auto repaint rate by changing it in the constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- Instead of 0 in the auto_repaint_rate parameter\nHUDCanvas = Canvas(true, Color.TRANSPARENT, 0, true)\n\n-- Use 0.033, so it only updates every 0.033ms (i.e. at 30 fps)\n// highlight-next-line\nHUDCanvas = Canvas(true, Color.TRANSPARENT, 0.033, true)\n")),(0,o.kt)("p",null,"Another further optimization is to only update when needed, for this case we will need to implement some additional code. In this case, we set ",(0,o.kt)("inlineCode",{parentName:"p"},"auto_repaint_rate")," to -1 to disable it from being auto repainted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- We set -1 to never auto repaint\nHUDCanvas = Canvas(true, Color.TRANSPARENT, -1, true)\n\n-- Subscribes for Update event, we can only draw inside this event (as usual)\nHUDCanvas:Subscribe("Update", function(self, width, height)\n    -- Gets the Local Player\n    local local_player = Client.GetLocalPlayer()\n    if (not local_player) then return end\n\n    -- Gets the Local Character (possessed by the Local Player)\n    local local_character = local_player:GetControlledCharacter()\n    if (not local_character) then return end\n\n    -- Draws the Health\n    self:DrawText(tostring(local_character:GetHealth()), Vector2D(100, height - 100), FontType.PoiretOne, 25, Color.WHITE)\n\n    -- Gets the Local Weapon\n    local character_weapon = local_character:GetPicked()\n    if (character_weapon and character_weapon:GetType() == "Weapon") then\n        -- Draws the Ammo Clip\n        self:DrawText(tostring(character_weapon:GetAmmoClip()), Vector2D(width - 200, height - 100), FontType.PoiretOne, 25, Color.WHITE)\n\n        -- Draws the Ammo Bag\n        self:DrawText("/ " .. tostring(character_weapon:GetAmmoBag()), Vector2D(width - 140, height - 87), FontType.PoiretOne, 15, Color.WHITE)\n    end\nend)\n\n\n-- Now we subscribe for when we want it to be updated:\n\n-- When LocalPlayer spawns, sets an event on it to trigger when we possesses a new character, to store the local controlled character locally. This event is only called once, see Package.Subscribe("Load") to load it when reloading a package\nClient.Subscribe("SpawnLocalPlayer", function(local_player)\n    local_player:Subscribe("Possess", function(player, character)\n        UpdateLocalCharacter(character)\n    end)\nend)\n\n-- When package loads, verify if LocalPlayer already exists (eg. when reloading the package), then try to get and store it\'s controlled character\nPackage.Subscribe("Load", function()\n    local local_player = Client.GetLocalPlayer()\n    if (local_player  ~= nil) then\n        UpdateLocalCharacter(local_player:GetControlledCharacter())\n    end\nend)\n\n-- Function to set all needed events on local character (to update the UI when it takes damage or dies)\nfunction UpdateLocalCharacter(character)\n    -- Verifies if character is not nil (eg. when GetControllerCharacter() doesn\'t return a character)\n    if (character == nil) then return end\n\n    -- Sets on character an event to update the health\'s UI after it takes damage\n    character:Subscribe("TakeDamage", function(charac, damage, type, bone, from_direction, instigator, causer)\n        HUDCanvas:Repaint()\n    end)\n\n    -- Sets on character an event to update the health\'s UI after it dies\n    character:Subscribe("Death", function(charac)\n        HUDCanvas:Repaint()\n    end)\n\n    -- Sets on character an event to update his grabbing weapon (to show ammo on UI)\n    character:Subscribe("PickUp", function(charac, object)\n        if (object:GetType() == "Weapon") then\n            HUDCanvas:Repaint()\n        end\n    end)\n\n    -- Sets on character an event to remove the ammo ui when he drops it\'s weapon\n    character:Subscribe("Drop", function(charac, object)\n        HUDCanvas:Repaint()\n    end)\n\n    -- Sets on character an event to update the UI when he fires\n    character:Subscribe("Fire", function(charac, weapon)\n        HUDCanvas:Repaint()\n    end)\n\n    -- Sets on character an event to update the UI when he reloads the weapon\n    character:Subscribe("Reload", function(charac, weapon, ammo_to_reload)\n        HUDCanvas:Repaint()\n    end)\n\n    -- Updates the UI immeditelly\n    HUDCanvas:Repaint()\nend\n\n-- Updates the UI positions when the Viewport (screen) is resized\nClient.Subscribe("ViewportResized", function(NewSize)\n    HUDCanvas:Repaint()\nend)\n')))}u.isMDXComponent=!0},97172:function(e,t,a){t.Z=a.p+"assets/images/canvas-72ab8bfe226c875a759395a2679c83eb.jpg"}}]);