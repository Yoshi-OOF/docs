"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[5084],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17279:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],l={slug:"january-2022",title:"January: Store & Vault!",authors:"gtnardy",tags:["updates"]},s=void 0,c={permalink:"/blog/january-2022",editUrl:"https://github.com/nanos-world/docs/edit/master/blog/2022-02-09-january.md",source:"@site/blog/2022-02-09-january.md",title:"January: Store & Vault!",description:"Introducing Store, New Classes and all Retroactive Updates!",date:"2022-02-09T00:00:00.000Z",formattedDate:"February 9, 2022",tags:[{label:"updates",permalink:"/blog/tags/updates"}],readingTime:9.07,hasTruncateMarker:!1,authors:[{name:"Gabriel T. Nardy",title:"nanos world developer (SyedMuhammad)",url:"https://twitter.com/gtnardy",imageURL:"/img/blog/gtnardy.jpg",key:"gtnardy"}],frontMatter:{slug:"january-2022",title:"January: Store & Vault!",authors:"gtnardy",tags:["updates"]},prevItem:{title:"February: Unreal 5 & Network Authority!",permalink:"/blog/february-2022"},nextItem:{title:"November: Unreal Engine 5?",permalink:"/blog/november-2021"}},u={authorsImageUrls:[void 0]},p=[{value:"Introducing: Store &amp; Vault!",id:"introducing-store--vault",level:2},{value:"Features Highlights",id:"features-highlights",level:3},{value:"Server Token",id:"server-token",level:3},{value:"New Class: Canvas",id:"new-class-canvas",level:2},{value:"Steam Input + Controller",id:"steam-input--controller",level:2},{value:"New built-in Key Glyphs",id:"new-built-in-key-glyphs",level:2},{value:"Bullet Trails Improvement",id:"bullet-trails-improvement",level:2},{value:"New Map Configurations",id:"new-map-configurations",level:2},{value:"Interactive CLI",id:"interactive-cli",level:2},{value:"Actor Tags",id:"actor-tags",level:2},{value:"New Class: SceneCapture",id:"new-class-scenecapture",level:2},{value:"Assets Caching",id:"assets-caching",level:2},{value:"Light Profiles",id:"light-profiles",level:2},{value:"Vehicle Improvements",id:"vehicle-improvements",level:2},{value:"Parachute Customization",id:"parachute-customization",level:2},{value:"Community Spotlight",id:"community-spotlight",level:2},{value:"T-Drones",id:"t-drones",level:3},{value:"KOTOR RP",id:"kotor-rp",level:3},{value:"T-Bomber",id:"t-bomber",level:3},{value:"VZombies",id:"vzombies",level:3},{value:"nanos BattleField 2043",id:"nanos-battlefield-2043",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Introducing Store, New Classes and all Retroactive Updates!")),(0,i.kt)("p",null,"This blog will also summary up the highlights of everything that has been developed since the last blog in November! Detailed Changelog is available in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord"),"! Stay tuned!"),(0,i.kt)("h2",{id:"introducing-store--vault"},"Introducing: Store & Vault!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(10711).Z,width:"1306",height:"656"})),(0,i.kt)("p",null,"It is with great joy that we finally announce the long-awaited ",(0,i.kt)("strong",{parentName:"p"},"Store"),"! The Store is a marketplace where everyone will be able to upload their Assets, Packages, release new versions, create Teams and much more! 100% integrated with the Vault and the CLI!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The store development is being headed by ",(0,i.kt)("strong",{parentName:"p"},"@MegaThorx"),"! This is the initial version and several updates will come! All feedback is appreciated!")),(0,i.kt)("h3",{id:"features-highlights"},"Features Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creation of ",(0,i.kt)("strong",{parentName:"li"},"Asset Packs")," & ",(0,i.kt)("strong",{parentName:"li"},"Packages")," pages, including images and description.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(61338).Z,width:"1292",height:"511"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upload of new ",(0,i.kt)("strong",{parentName:"li"},"Versions"),", with ability to tag as Draft, Beta and Stable.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32044).Z,width:"1296",height:"664"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"Team")," and add Team members.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(77439).Z,width:"1272",height:"239"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tag & Category")," system.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(41152).Z,width:"860",height:"466"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out the complete documentation ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/vault-and-store/store"},"here"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"nanos world Store available now on ",(0,i.kt)("a",{parentName:"strong",href:"https://store.nanos.world/"},"https://store.nanos.world/"))),(0,i.kt)("h3",{id:"server-token"},"Server Token"),(0,i.kt)("p",null,"With the addition of the Store, we've got a new feature: ",(0,i.kt)("strong",{parentName:"p"},"Server Token"),"."),(0,i.kt)("p",null,"This token is required when downloading any content from the Store using the CLI (and soon\u2122 when using other integration features), you must set it in your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml")," file as ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," setting."),(0,i.kt)("p",null,"To generate a token please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://store.nanos.world/settings/tokens/"},"https://store.nanos.world/settings/tokens/"),"."),(0,i.kt)("h2",{id:"new-class-canvas"},"New Class: ",(0,i.kt)("a",{parentName:"h2",href:"/docs/next/scripting-reference/classes/canvas"},"Canvas")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(52671).Z,width:"1916",height:"580"})),(0,i.kt)("p",null,"We've added a new class to completely replace our old ",(0,i.kt)("strong",{parentName:"p"},"Render")," Static Class: ",(0,i.kt)("strong",{parentName:"p"},"Canvas"),"! Canvas is like a painting frame, you can draw anything onto it, from Lines, Squares to Materials and Textures!"),(0,i.kt)("p",null,"You can also use it as UI or paint any object with a Canvas using ",(0,i.kt)("inlineCode",{parentName:"p"},":SetMaterialFromCanvas()"),"!"),(0,i.kt)("p",null,"Now it's way easier to create a basic UI!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawns a Canvas\nlocal canvas = Canvas(true, Color.TRANSPARENT, 0, true)\n\n-- Subscribes for Update, we can only Draw inside this event\ncanvas:Subscribe("Update", function(self, width, height)\n  -- Draws a Text in the middle of the screen\n  self:DrawText("Hello World!", Vector2D(width / 2, height / 2))\n\n  -- Draws a red line Horizontally\n  self:DrawLine(Vector2D(0, height / 2), Vector2D(width, height / 2), 10, Color.RED)\nend)\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/getting-started/tutorials-and-examples/basic-hud-canvas"},"Basic HUD (Canvas) Tutorial")," has been updated as well!"),(0,i.kt)("h2",{id:"steam-input--controller"},"Steam Input + Controller"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(38926).Z,width:"1918",height:"786"})),(0,i.kt)("p",null,"We've managed to integrate Steam Input. If you are not familiar with that, Steam Input allows you to set up and play with any Controller, and also configure it through Steam Interface."),(0,i.kt)("p",null,"It is a nice integration because it's a relatively simple implementation that allows nanos world to be played with controllers, and it gives users the possibility to customize bindings and share with the community."),(0,i.kt)("p",null,"An initial version has been released in the latest update, more bindings and configurations will come next."),(0,i.kt)("h2",{id:"new-built-in-key-glyphs"},"New built-in Key Glyphs"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(66229).Z,width:"640",height:"361"})),(0,i.kt)("p",null,"We've added a utility method to retrieve a Glyph/Image from a given Key. Just use ",(0,i.kt)("inlineCode",{parentName:"p"},"Input.GetKeyIcon(key_name)")," and it will return the path of the image which can be used as Texture or as an usual image ",(0,i.kt)("inlineCode",{parentName:"p"},"<img>")," in the HTML!"),(0,i.kt)("p",null,"You can use it combined with ",(0,i.kt)("inlineCode",{parentName:"p"},"Input.GetMappedKey()")," to dynamically get the Key Glyph based on the user's key binding configuration."),(0,i.kt)("h2",{id:"bullet-trails-improvement"},"Bullet Trails Improvement"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/bullet-trail.webm"})),(0,i.kt)("p",null,"We have reworked our default Bullet Trail particles. Before, depending on the point of view you could see a big sphere passing through and also several glitches in the sky. Now it was reworked to be more realistic and without any artifact!"),(0,i.kt)("h2",{id:"new-map-configurations"},"New Map Configurations"),(0,i.kt)("p",null,"Now it is possible to create individual Configuration files for each Map, in which you can define all compatible game-modes, spawn locations and add custom data as well!"),(0,i.kt)("p",null,"Also, it is possible to set up a complete Package which will automatically load when this map is loaded."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Map.toml"',title:'"Map.toml"'},'# map configurations\n[map]\n    # compatible game-modes\n    compatible_game_modes = [\n        "sandbox",\n        "deathmatch"\n    ]\n\n    # list of spawn points\n    spawn_points = [\n        { location = "Vector(100, 200, 100)", rotation = "Rotator(0, 90, 0)" },\n        { location = "Vector(200, 300, 100)", rotation = "Rotator(0, 90, 0)" },\n    ]\n\n[custom_data]\n    whatever = "anything"\n\n')),(0,i.kt)("p",null,"Check the complete documentation at ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/assets-modding/creating-assets/maps-and-levels/map-script-and-data"},"Map Script & Data"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The following changes were added back in ",(0,i.kt)("strong",{parentName:"p"},"1.1.0-1.3.0")," update, we gonna highlight the best ones here!")),(0,i.kt)("h2",{id:"interactive-cli"},"Interactive CLI"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(70350).Z,width:"846",height:"366"})),(0,i.kt)("p",null,"An amazing and extremely useful functionality that has been added to the CLI is the creation of Asset Packs & Packages interactively."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"add [package|assets] NAME")," and it will create the Asset Pack or Package interactively, it will create the Configuration and Default files as well!"),(0,i.kt)("h2",{id:"actor-tags"},"Actor Tags"),(0,i.kt)("p",null,"At the request of our testers, we implemented a interface to access Unreal's Actor Tags, with ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.SetActorTag()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.GetActorTag()")," you can set/get unreal Actor Tags directly from Scripting (client side)."),(0,i.kt)("p",null,"Actor Tags are just an array of strings which can be accessed from anywhere, including from Unreal Blueprint. This small addition increases the range of possibilities for integration with blueprints and external implementations."),(0,i.kt)("h2",{id:"new-class-scenecapture"},"New Class: ",(0,i.kt)("a",{parentName:"h2",href:"/docs/next/scripting-reference/classes/scene-capture"},"SceneCapture")),(0,i.kt)("p",null,"This is a very cool feature released back in ",(0,i.kt)("strong",{parentName:"p"},"1.1.0")," update."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SceneCapture")," is a Camera Actor which captures the environment in real time, and we can get the outputted result with ",(0,i.kt)("inlineCode",{parentName:"p"},":SetMaterialFromSceneCapture()")," into any other Actor!"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/scene-capture.mp4"})),(0,i.kt)("p",null,"It has several configurable performance tweaks which makes it more efficient if you are not looking at the actors and also reduces the capture rate if you are too far!"),(0,i.kt)("h2",{id:"assets-caching"},"Assets Caching"),(0,i.kt)("p",null,"We've implemented a great feature which improves the performance and reduce stuttering when (re)loading Assets in runtime. Stuttering usually happen when using HDD and when loading something from Disk. Now every loaded asset (including files from disk - ",(0,i.kt)("strong",{parentName:"p"},".ogg")," and ",(0,i.kt)("strong",{parentName:"p"},".jpg"),") is cached and reused when loading again automatically. We still intend to add some options to auto load all assets from all loaded Asset Packs when entering a server and also a scriptable option to async load an Asset prior the use to further improve the stuttering and add more freedom to the scripters."),(0,i.kt)("h2",{id:"light-profiles"},"Light Profiles"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(93434).Z,width:"1918",height:"476"})),(0,i.kt)("p",null,"We've added a new cool setting for Lights: ",(0,i.kt)("strong",{parentName:"p"},"Light Profile"),", which allows changing the Light Profile Texture of a Light with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/classes/light#settexturelightprofile"},"Light:SetTextureLightProfile()"),"."),(0,i.kt)("p",null,"It is possible to set to one of our built-in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nanos.world/docs/next/scripting-reference/glossary/enums#lightprofile"},"Light Profiles"),". All built-in Light Profiles were imported from ",(0,i.kt)("a",{parentName:"p",href:"https://www.unrealengine.com/marketplace/en-US/product/ies-light-profile-pack"},"IES Light Profile Pack"),"."),(0,i.kt)("p",null,"This can add a realistic Flashlight effect to your Lights for example."),(0,i.kt)("h2",{id:"vehicle-improvements"},"Vehicle Improvements"),(0,i.kt)("p",null,"Now it is possible to manually control if the Vehicle Engine is started or not, also if it auto starts when a driver gets in with ",(0,i.kt)("inlineCode",{parentName:"p"},"Vehicle:SetAutoStartEngine()"),"."),(0,i.kt)("p",null,"Also we added a small detail: ",(0,i.kt)("strong",{parentName:"p"},"Taillights"),", it gets Red when braking and White when going backwards, it is customizable with ",(0,i.kt)("inlineCode",{parentName:"p"},"Vehicle:SetTaillightsSetup()"),":"),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/vehicle-taillight.webm"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Vehicle Mesh colors are still not in sync with the Headlights neither the Taillights, this will be improved in the next updates!")),(0,i.kt)("h2",{id:"parachute-customization"},"Parachute Customization"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5157).Z,width:"1920",height:"404"})),(0,i.kt)("p",null,"We've added an useful customization to the built-in parachute, now it's possible to change it's texture with ",(0,i.kt)("inlineCode",{parentName:"p"},"Character:SetParachuteTexture(texture)"),". Also, all built-in Textures can be found at ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world/NanosWorld/Content/NanosWorld/Textures/Parachute/")," and used like ",(0,i.kt)("inlineCode",{parentName:"p"},"assets://nanos-world/Textures/Parachute"),"."),(0,i.kt)("h2",{id:"community-spotlight"},"Community Spotlight"),(0,i.kt)("p",null,"Our community has been working hard on several amazing stuff, we would like to share it with you!"),(0,i.kt)("h3",{id:"t-drones"},"T-Drones"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"by Timmy")),(0,i.kt)("p",null,'Timmy worked on very cool fully functional Drone package, check it out! Fully integrated with the new SceneCapture for a "3D Camera System". Also the Drone has a function to back to home! Amazing!'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"T-Drones is a script designed to emulate the behavior of hobby drones, and thought to run on the vast majority of game-modes."),(0,i.kt)("p",{parentName:"blockquote"},"It has been conceived to be as modular as possible and to adapt to the needs of anyone who wants to make modifications or additions easily.")),(0,i.kt)("iframe",{width:"620",height:"347",src:"https://www.youtube-nocookie.com/embed/TEzEKiGgDo0?vq=hd1080",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h3",{id:"kotor-rp"},"KOTOR RP"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"by ERO Team (NegativeName, Mougel, False & Tark)")),(0,i.kt)("p",null,"The ERO Team is working hard on a blasting Star Wars RP game-mode (KOTOR RP), this gonna be dope! Here's some screenshots of the worlds and the Combo system of the Light Saber!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Star Wars KOTOR RP is a french role-play game-mode in the Star Wars universe."),(0,i.kt)("p",{parentName:"blockquote"},"You will play a character in this distant galaxy. Your role will depend on you. Will you join the Sith Empire to enslave the galaxy, protect it by joining the Galactic Republic, or take no side."),(0,i.kt)("p",{parentName:"blockquote"},"The choice is yours! Become a Jedi, a Sith, a soldier, a mercenary, or a simple merchant. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(84833).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(62944).Z,width:"1915",height:"1080"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(66029).Z,width:"1920",height:"1032"})),(0,i.kt)("h3",{id:"t-bomber"},"T-Bomber"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"by Timmy")),(0,i.kt)("p",null,"Also Timmy is creating a Bomberman game-mode! Excellent work, I can't wait to play it!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"T-Bomber is a Bomberman-like game-mode Heavily inspired by the famous maze game."),(0,i.kt)("p",{parentName:"blockquote"},"It aims to replicate the original Bomberman experience with some extra spice, and to show off some of the scripting possibilities of nanos world."),(0,i.kt)("p",{parentName:"blockquote"},"The rules are very simple, the last one alive wins!")),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/timmy-bomberman-01.webm"})),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/timmy-bomberman-03.webm"})),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/timmy-bomberman-02.webm"})),(0,i.kt)("h3",{id:"vzombies"},"VZombies"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"by Voltaism")),(0,i.kt)("p",null,"Voltaism is working on his Zombies game-mode based on COD's one. It's incredibly fun and horrifying!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Nearly finished game-mode that is basically a clone of the classic Call Of Duty: Zombies mode where you have to survive against zombies the longer as you can!"),(0,i.kt)("p",{parentName:"blockquote"},"This game-mode also has bots that can play with you. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(33990).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(19143).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"nanos-battlefield-2043"},"nanos BattleField 2043"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"by LighterChu, Trevor & MemeFrug")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Battlefield 2042 came out, we expected the best. Why did we make nanos battlefield 2043, well it is not just Battlefield 2042 it's all battlefields mixed in the future of combine titles are here.")),(0,i.kt)("video",{controls:"true",allowfullscreen:"true"},(0,i.kt)("source",{src:"/videos/blog/january/battlefield-01.webm"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(12942).Z,width:"1920",height:"1080"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Thank you again for your feedback and support, every suggestion and bug found makes the nanos world wheel spin faster and faster!"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This blog contained several highlights of our progress in the last month. Note that countless improvements, bug fixes and some other new features are available in the changelog on our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.nanos.world"},"Discord")," and also in-game.")),(0,i.kt)("p",null,"We are aware of your biggest requests and we want to implement them as soon as possible to make the nanos world API more and more complete. We still have a long roadmap to go through, and we have big pillars of goals to bring new types of vehicles (including air and sea), customizable characters (any skeleton), direct Blueprint support and more!"),(0,i.kt)("p",null,"Right away we desire to rework our Steam Store Page, it was left behind due to some technical issues and we want to revive it, with that we desire to do a rebranding of the nanos world, we know that logos and great capsule images that relate to the game theme are of great importance for Steam self-marketing to attract new players!"),(0,i.kt)("p",null,"See you in the next! Thank you!"))}h.isMDXComponent=!0},12942:function(e,t,a){t.Z=a.p+"assets/images/battlefield-01-9327e7dc7c0630b7f5a185d22de4c032.jpg"},52671:function(e,t,a){t.Z=a.p+"assets/images/canvas-daff8ade5791637d0c13cc215b66d849.jpg"},38926:function(e,t,a){t.Z=a.p+"assets/images/controller-8ebf8f15c3a1ab2063639182d4e57f8c.jpg"},66229:function(e,t,a){t.Z=a.p+"assets/images/glyphs-0a2328767bafb1c637bd5ffbdb4fa1a9.jpg"},70350:function(e,t,a){t.Z=a.p+"assets/images/interactive-cli-206a390a82d87b093fd1fee2907dc1e3.jpg"},93434:function(e,t,a){t.Z=a.p+"assets/images/light-profile-ccaec92fb79cfa533dd076acab66f3c6.jpg"},5157:function(e,t,a){t.Z=a.p+"assets/images/parachute-c58eae971b5cf5701bd6728e10bc8b17.jpg"},84833:function(e,t,a){t.Z=a.p+"assets/images/star-wars-01-47edb10bdbafd513c671228b61dc9429.jpg"},62944:function(e,t,a){t.Z=a.p+"assets/images/star-wars-02-0148da0d6ad0a60fef8c0904d7eba2f8.jpg"},66029:function(e,t,a){t.Z=a.p+"assets/images/star-wars-03-e56750b8f6172d56081ab46fcdfcd5f1.jpg"},10711:function(e,t,a){t.Z=a.p+"assets/images/store-01-ac7b82b1c352ecc11e4acc86a5cb7b79.jpg"},32044:function(e,t,a){t.Z=a.p+"assets/images/store-02-ef7f88d65138cac0c903686ffddce724.jpg"},61338:function(e,t,a){t.Z=a.p+"assets/images/store-03-48f130e2ae0ac0a656cf7f56bea3e1d4.jpg"},41152:function(e,t,a){t.Z=a.p+"assets/images/store-04-8b82b25ccc161b26460f9ef97d88ab15.jpg"},77439:function(e,t,a){t.Z=a.p+"assets/images/store-05-c0f0a5ae7ae950e5f6857a2e723a7993.jpg"},33990:function(e,t,a){t.Z=a.p+"assets/images/vzombies-01-c0e6c221ef989ceb87050a274c820122.jpg"},19143:function(e,t,a){t.Z=a.p+"assets/images/vzombies-02-cafe7c9d2c0527a6b910332d085ab266.jpg"}}]);