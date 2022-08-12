"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1737],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98550:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(19093),s=["components"],u={title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},l=void 0,c={unversionedId:"scripting-reference/classes/sound",id:"scripting-reference/classes/sound",title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/sound.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/sound",permalink:"/pt-BR/docs/next/scripting-reference/classes/sound",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/sound.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udd0a Sound",description:"Class for playing in-game 2D and 3D sounds",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udcfd\ufe0f SceneCapture",permalink:"/pt-BR/docs/next/scripting-reference/classes/scene-capture"},next:{title:"\ud83c\udfe0 StaticMesh",permalink:"/pt-BR/docs/next/scripting-reference/classes/static-mesh"}},d={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2},{value:"\ud83d\udd0a Sound Attenuation",id:"-sound-attenuation",level:2},{value:"\ud83d\udd08 Linear",id:"-linear",level:3},{value:"\ud83d\udd08 Logarithmic",id:"-logarithmic",level:3},{value:"\ud83d\udd08 Inverse",id:"-inverse",level:3},{value:"\ud83d\udd08 Log Reverse",id:"-log-reverse",level:3},{value:"\ud83d\udd08 Natural Sound",id:"-natural-sound",level:3}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=m("HeaderDeclaration"),h=m("ConstructorDeclaration"),y=m("FunctionsDeclaration"),g=m("EventsDeclaration"),b={toc:p};function v(e){var t=e.components,u=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{class_data:i,image:"/img/docs/sound.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also load raw ",(0,o.kt)("inlineCode",{parentName:"p"},".ogg")," files from disk! Please check ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/glossary/basic-types#specialpath"},"SpecialPath"),".")),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local my_sound = Sound(\n    Vector(-510, 145, 63), -- Location (if a 3D sound)\n    "nanos-world::A_VR_Confirm", -- Asset Path\n    false, -- Is 2D Sound\n    true, -- Auto Destroy (if to destroy after finished playing)\n    SoundType.SFX,\n    1, -- Volume\n    1 -- Pitch\n)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- Spawning a ogg sound located in a Package\nlocal ogg_sound = Sound(Vector(), "package://my-package/Client/awesome_beep.ogg", true)\n')),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(h,{class_data:i,mdxType:"ConstructorDeclaration"}),(0,o.kt)("admonition",{title:"Note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"auto_destroy"))," means the Entity will be immediately destroyed after spawned, losing references to the ",(0,o.kt)("em",{parentName:"p"},"Particle System")," spawned in-game. So if the ",(0,o.kt)("em",{parentName:"p"},"Particle System")," itself loops indefinitely, it will keep playing until the Player reconnects.")),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(y,{class_data:i,mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(g,{class_data:i,mdxType:"EventsDeclaration"}),(0,o.kt)("h2",{id:"-sound-attenuation"},"\ud83d\udd0a Sound Attenuation"),(0,o.kt)("p",null,"This property defines the function that determines the rate of attenuation over distance. There are a number of different functions to choose from:"),(0,o.kt)("h3",{id:"-linear"},"\ud83d\udd08 Linear"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77226).Z,width:"2500",height:"1476"})),(0,o.kt)("p",null,"This is the default function. When using this function the volume will attenuate linearly and so the changes in volume are constant as the listener moves towards and away from the source. This function is good for crossfading between large background-type sounds that don't need tightly focussed 3D spatial falloff settings."),(0,o.kt)("h3",{id:"-logarithmic"},"\ud83d\udd08 Logarithmic"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51614).Z,width:"2500",height:"1476"})),(0,o.kt)("p",null,"When using this function the volume attenuates such that the changes in volume are greater at close distances, and lesser at far distances. This function is good for spot sounds that need good 3D positioning, while still being audible at reasonable distances."),(0,o.kt)("h3",{id:"-inverse"},"\ud83d\udd08 Inverse"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(57074).Z,width:"2500",height:"1476"})),(0,o.kt)("p",null,"When using this function, the changes in volume are similar to that of the logarithmic curve, but are more exaggerated. This function is good for sounds that only need to be just audible at far distances, but that gets significantly louder as the listener gets quite close to the source."),(0,o.kt)("h3",{id:"-log-reverse"},"\ud83d\udd08 Log Reverse"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11343).Z,width:"2500",height:"1476"})),(0,o.kt)("p",null,"When using this function, the changes in volume are lesser at close distances, with more dramatic differences at far distances. This function is good for sounds that need to be loud across larger distances."),(0,o.kt)("h3",{id:"-natural-sound"},"\ud83d\udd08 Natural Sound"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21246).Z,width:"2500",height:"1476"})),(0,o.kt)("p",null,"This function attempts to model a more 'naturalistic' falloff behavior to produce behaviors that closer match reality. This function is a kind of 'middle ground' between the Logarithmic and Inverse functions."))}v.isMDXComponent=!0},57074:function(e,t,n){t.Z=n.p+"assets/images/sounds-inverse-c55f6d8674c960bb226ae568025a3ca4.webp"},77226:function(e,t,n){t.Z=n.p+"assets/images/sounds-linear-a848c9dc2b62d5e8a046ba8616b21288.webp"},11343:function(e,t,n){t.Z=n.p+"assets/images/sounds-log-reverse-509f2660e62991973bb34d93a253dee4.webp"},51614:function(e,t,n){t.Z=n.p+"assets/images/sounds-log-406cd75301c542ed16592ba40e2d747e.webp"},21246:function(e,t,n){t.Z=n.p+"assets/images/sounds-natural-8795f6b14ee91ebdd6f1c38b6afbec36.webp"},19093:function(e){e.exports=JSON.parse('{"name":"Sound","description":"Class for playing in-game 2D and 3D sounds.","authority":"client","inheritance":["Actor"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)","description":"Only used if 3D sound"},{"type":"SoundPath","name":"asset","description":"The Sound Asset to load"},{"type":"boolean","name":"is_2D_sound","default":"false","description":"Whether to spawn it as 2D or 3D"},{"type":"boolean","name":"auto_destroy","default":"true","description":"Whether to destroy after finished playing"},{"type":"SoundType","name":"sound_type","default":"SoundType.SFX","description":"Used to apply user\'s volume settings"},{"type":"number","name":"volume","default":"1"},{"type":"number","name":"pitch","default":"1"},{"type":"number","name":"inner_radius","default":"400","description":"Only used if 3D sound"},{"type":"number","name":"falloff_distance","default":"3600","description":"Only used if 3D sound"},{"type":"AttenuationFunction","name":"attenuation_function","default":"Linear","description":"Only used if 3D sound"},{"type":"boolean","name":"keep_playig_when_silent","default":"false","description":"Only used if 3D sound - Use with caution, it may cause performance issues!"},{"type":"SoundLoopMode","name":"loop_mode","default":"Default","description":"Whether should force sound to loop"}],"functions":[{"name":"FadeIn","authority":"client","description":"Plays the sound with a fade effect","parameters":[{"type":"number","name":"fade_in_duration"},{"type":"number","name":"fade_volume_level","default":"1"},{"type":"number","name":"start_time","default":"0"}]},{"name":"FadeOut","authority":"client","description":"Stops the sound with a fade effect","parameters":[{"type":"number","name":"fade_out_duration"},{"type":"number","name":"fade_volume_level","default":"0"},{"type":"boolean","name":"destroy_after_fadeout","default":"false"}]},{"name":"Play","authority":"client","description":"Starts the sound","parameters":[{"type":"number","name":"start_time","default":"0"}]},{"name":"SetFalloffDistance","authority":"client","description":"If a 3D Sound, sets the distance which the sound is inaudible","parameters":[{"type":"number","name":"falloff_distance"}]},{"name":"SetInnerRadius","authority":"client","description":"If a 3D Sound, sets the distance within the volume is 100%","parameters":[{"type":"number","name":"inner_radius"}]},{"name":"SetLowPassFilter","authority":"client","description":"Sets lowpass filter frequency. Sets 0 to disable it.","parameters":[{"type":"number","name":"frequency"}]},{"name":"SetPaused","authority":"client","description":"Pauses the sound","parameters":[{"type":"boolean","name":"pause","default":"true"}]},{"name":"SetPitch","authority":"client","description":"Sets the Sound\'s pitch","parameters":[{"type":"number","name":"new_pitch"}]},{"name":"SetVolume","authority":"client","description":"Sets the Sound\'s volume","parameters":[{"type":"number","name":"new_volume","description":"0-1"}]},{"name":"Stop","authority":"client","description":"Stops the sound"},{"name":"StopDelayed","authority":"client","description":"Stops the sound after the provided delay","parameters":[{"type":"number","name":"delay"}]},{"return":[{"type":"boolean"}],"name":"Is2D","authority":"client","description":"Gets if the sound is 2D"},{"return":[{"type":"boolean"}],"name":"IsPlaying","authority":"client","description":"Gets if the sound is playing"},{"return":[{"type":"number"}],"name":"GetDuration","authority":"client","description":"Gets the duration of the Sound"},{"return":[{"type":"number"}],"name":"GetPitch","authority":"client"},{"return":[{"type":"number"}],"name":"GetVolume","authority":"client"},{"return":[{"type":"number"}],"name":"GetLowPassFilter","authority":"client"},{"return":[{"type":"number"}],"name":"GetInnerRadius","authority":"client"},{"return":[{"type":"number"}],"name":"GetFalloffDistance","authority":"client"},{"return":[{"type":"number"}],"name":"GetSoundType","authority":"client"}]}')}}]);