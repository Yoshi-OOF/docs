"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9766],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),y=a,h=m["".concat(c,".").concat(y)]||m[y]||p[y]||o;return r?n.createElement(h,s(s({ref:t},l),{},{components:r})):n.createElement(h,s({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97359:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),s=r(38143),i=["components"],c={title:"\ud83d\udc69\u200d\ud83d\udcbb Joueur",description:"Les joueurs sont des entit\xe9s qui repr\xe9sente l'individu derri\xe8re son clavier et sa souris. Les joueurs apparaissent automatiquement quand ils sont connect\xe9s au serveur.",sidebar_position:0,tags:["class"]},u=void 0,l={unversionedId:"scripting-reference/classes/player",id:"scripting-reference/classes/player",title:"\ud83d\udc69\u200d\ud83d\udcbb Joueur",description:"Les joueurs sont des entit\xe9s qui repr\xe9sente l'individu derri\xe8re son clavier et sa souris. Les joueurs apparaissent automatiquement quand ils sont connect\xe9s au serveur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/player.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/player",permalink:"/fr/docs/next/scripting-reference/classes/player",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/player.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udc69\u200d\ud83d\udcbb Joueur",description:"Les joueurs sont des entit\xe9s qui repr\xe9sente l'individu derri\xe8re son clavier et sa souris. Les joueurs apparaissent automatiquement quand ils sont connect\xe9s au serveur.",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\u2728 Particle",permalink:"/fr/docs/next/scripting-reference/classes/particle"},next:{title:"\ud83d\udce6 Prop",permalink:"/fr/docs/next/scripting-reference/classes/prop"}},p={},m=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],y=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},h=y("HeaderDeclaration"),d=y("FunctionsDeclaration"),f=y("EventsDeclaration"),b={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(h,{class_data:s,mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{title:"Authority",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udfe5 You cannot spawn or Destroy Players.")),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Fait appara\xeetre un personnage et donne la possession au joueur quand il rejoint le serveur.\nPlayer.Subscribe("Spawn", function(player)\n    local new_char = Character()\n    player:Possess(new_char)\nend)\n\n-- D\xe9truit le personnage quand le joueur quitte ke serveur\nPlayer.Subscribe("Destroy", function(player)\n        local character = player:GetControlledCharacter()\n        if (character) then\n                character:Destroy()\n        end\nend)\n')),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(d,{class_data:s,mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(f,{class_data:s,mdxType:"EventsDeclaration"}))}g.isMDXComponent=!0},38143:function(e){e.exports=JSON.parse('{"name":"Player","description":"Players are Entities that represents the individual behind the mouse and keyboard. Players are spawned automatically when connected to the server.","functions":[{"authority":"server","name":"Ban","description":"Bans the player from the server","parameters":[{"name":"reason","type":"string"}]},{"authority":"server","name":"Connect","description":"Redirects the player to another server","parameters":[{"name":"IP","type":"string"},{"name":"password","type":"string","default":"","description":"Server password"}]},{"authority":"server","name":"Kick","description":"Kicks the player from the server","parameters":[{"name":"reason","type":"string"}]},{"authority":"server","name":"Possess","description":"Makes a Player to possess and control a Character","parameters":[{"name":"new_character","type":"Character"},{"name":"blend_time","type":"number","default":"0"},{"name":"exp","type":"number","default":"0"}]},{"authority":"both","name":"SetCameraLocation","description":"Sets the Player\'s Camera Location (only works if not possessing any Character)","parameters":[{"name":"location","type":"Vector"}]},{"authority":"both","name":"SetCameraRotation","description":"Sets the Player\'s Camera Rotation","parameters":[{"name":"rotation","type":"Rotator"}]},{"authority":"both","name":"TranslateCameraTo","description":"Smoothly moves the Player\'s Camera Location (only works if not possessing any Character)","parameters":[{"name":"location","type":"Vector"},{"name":"time","type":"number"},{"name":"exp","type":"number","default":"0","description":"Exponential used to smooth interp, use 0 for linear movement"}]},{"authority":"both","name":"RotateCameraTo","description":"Smoothly moves the Player\'s Camera Rotation","parameters":[{"name":"rotation","type":"Rotator"},{"name":"time","type":"number"},{"name":"exp","type":"number","default":"0","description":"Exponential used to smooth interp, use 0 for linear movement"}]},{"authority":"both","name":"SetCameraSocketOffset","description":"Sets the Player\'s Camera Socket Offset (Spring Arm Offset)","parameters":[{"name":"socket_offset","type":"Vector"}]},{"authority":"both","name":"SetCameraArmLength","description":"Sets the Player\'s Camera Arm Length (Spring Arm length)","parameters":[{"name":"length","type":"number"}]},{"authority":"both","name":"AttachCameraTo","description":"Attaches the Player`s Camera to an Actor","parameters":[{"name":"actor","type":"Base Actor"},{"name":"socket_offset","type":"Vector"},{"name":"blend_speed","type":"number"}]},{"authority":"both","name":"ResetCamera","description":"Resets the Camera to default state (Unspectate and Detaches)"},{"authority":"both","name":"Spectate","description":"Spectates other Player","parameters":[{"name":"player","type":"Player"},{"name":"blend_speed","type":"number"}]},{"authority":"server","name":"SetName","description":"Sets the player\'s name","parameters":[{"name":"new_name","type":"string"}]},{"authority":"both","name":"SetValue","description":"Sets a value in this entity, which can be accessed by any package (optionally sync on clients if called from server). Please refer to Entity Values for more information","parameters":[{"name":"key","type":"string"},{"name":"value","type":"any"},{"name":"sync_on_clients","type":"boolean","default":"false","description":"Server side parameter, if enabled will sync this value through all clients"}]},{"authority":"server","name":"SetVOIPChannel","description":"Sets the VOIP Channel of this Player (will only communicate with other players in the same channel)","parameters":[{"name":"channel","type":"number"}]},{"authority":"both","name":"SetVOIPSetting","description":"Sets the VOIP Settings of this Player","parameters":[{"name":"setting","type":"VOIPSetting"}]},{"authority":"both","name":"SetVOIPVolume","description":"Sets the VOIP Volume of this Player","parameters":[{"name":"volume","type":"number"}]},{"authority":"server","name":"UnPossess","description":"Release the Player from the Character"},{"authority":"both","name":"GetSteamID","return":[{"type":"string"}]},{"authority":"both","name":"GetAccountID","return":[{"type":"string"}]},{"authority":"both","name":"GetAccountName","return":[{"type":"string"}]},{"authority":"client","name":"GetCameraLocation","return":[{"type":"Vector"}]},{"authority":"client","name":"GetCameraRotation","return":[{"type":"Rotator"}]},{"authority":"both","name":"GetControlledCharacter","return":[{"type":"nil"}]},{"authority":"both","name":"GetID","return":[{"type":"number"}]},{"authority":"server","name":"GetIP","return":[{"type":"string"}]},{"authority":"both","name":"GetName","return":[{"type":"string"}]},{"authority":"both","name":"GetPing","return":[{"type":"number"}]},{"authority":"both","name":"GetType","return":[{"type":"string"}]},{"authority":"both","name":"GetVOIPChannel","return":[{"type":"VOIPChannel"}]},{"authority":"both","name":"GetValue","parameters":[{"name":"key","type":"string"},{"name":"fallback","type":"any"}],"return":[{"type":"any"}]},{"authority":"client","name":"IsHost","return":[{"type":"boolean"}]},{"authority":"client","name":"IsLocalPlayer","return":[{"type":"boolean"}]},{"authority":"both","name":"IsValid","return":[{"type":"boolean"}]},{"authority":"both","name":"GetVOIPSetting","return":[{"type":"VOIPSetting"}]},{"authority":"both","name":"Subscribe","parameters":[{"name":"event_name","type":"string"},{"name":"function","type":"function"}],"return":[{"type":"function"}]},{"authority":"both","name":"Unsubscribe","description":"Unsubscribes from all subscribed Events in this Entity and in this Package, optionally passing the function to unsubscribe only that callback","parameters":[{"name":"event_name","type":"string"},{"name":"function","type":"function"}]}],"events":[{"authority":"both","name":"Destroy","description":"Triggered when Player disconnects from the server","arguments":[{"name":"self","type":"Player"}]},{"authority":"both","name":"Possess","description":"Trigerred when Player starts controlling a Character","arguments":[{"name":"self","type":"Player"},{"name":"character","type":"Character"}]},{"authority":"both","name":"Spawn","description":"Triggered when Player connects to the server","arguments":[{"name":"self","type":"Player"}]},{"authority":"server","name":"Ready","description":"Triggered when Player is ready (the client fully joined, loaded the map and all entities and is ready to play)","arguments":[{"name":"self","type":"Player"}]},{"authority":"both","name":"UnPossess","description":"A Character was released from the Player","arguments":[{"name":"self","type":"Player"},{"name":"character","type":"Character"}]},{"authority":"both","name":"VOIP","description":"When a Player starts/ends using VOIP","arguments":[{"name":"self","type":"Player"},{"name":"is_talking","type":"boolean"}]}]}')}}]);