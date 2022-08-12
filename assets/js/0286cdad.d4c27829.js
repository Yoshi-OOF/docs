"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2403],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13763:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=n(7832),s=["components"],l={title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},c=void 0,p={unversionedId:"scripting-reference/classes/light",id:"scripting-reference/classes/light",title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",source:"@site/docs/scripting-reference/classes/light.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/light",permalink:"/docs/next/scripting-reference/classes/light",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/light.mdx",tags:[{label:"class",permalink:"/docs/next/tags/class"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1660302783,formattedLastUpdatedAt:"Aug 12, 2022",sidebarPosition:0,frontMatter:{title:"\ud83d\udca1 Light",description:"A Light represents a Lighting source",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\udca3 Grenade",permalink:"/docs/next/scripting-reference/classes/grenade"},next:{title:"\ud83d\udd2a Melee",permalink:"/docs/next/scripting-reference/classes/melee"}},u={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2},{value:"\ud83d\udca1 Light Profiles",id:"-light-profiles",level:2}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},m=h("HeaderDeclaration"),f=h("ConstructorDeclaration"),g=h("FunctionsDeclaration"),y=h("EventsDeclaration"),b=h("Enums"),v={toc:d};function k(e){var t=e.components,l=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{class_data:i,image:"/img/docs/light.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local my_light = Light(\n    Vector(-152, 245, 115),\n    Rotator(0, 90, 90), -- Relevant only for Rect and Spot light types\n    Color(1, 0, 0), -- Red Tint\n    LightType.Point, -- Point Light type\n    100, -- Intensity\n    250, -- Attenuation Radius\n    44, -- Cone Angle (Relevant only for Spot light type)\n    0, -- Inner Cone Angle Percent (Relevant only for Spot light type)\n    5000, -- Max Draw Distance (Good for performance - 0 for infinite)\n    true, -- Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light's contribution. (Spot and Point types only)\n    true, -- Cast Shadows?\n    true -- Enabled?\n)\n")),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(f,{class_data:i,mdxType:"ConstructorDeclaration"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"nanos world provides 3 types of lights: ",(0,a.kt)("strong",{parentName:"p"},"Spot"),", ",(0,a.kt)("strong",{parentName:"p"},"Point")," and ",(0,a.kt)("strong",{parentName:"p"},"Rect"),". All lights are Dynamic and because of that, very expensive! Keep that in mind before spawning 1000 lights \ud83d\ude09.")),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)(g,{class_data:i,mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,a.kt)(y,{class_data:i,mdxType:"EventsDeclaration"}),(0,a.kt)("h2",{id:"-light-profiles"},"\ud83d\udca1 Light Profiles"),(0,a.kt)("p",null,"Light Profiles are texture files which describes a light's distribution from a light source using real world measured data."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/LightingAndShadows/IESLightProfiles/"},"Unreal Engine Light Profile documentation")," for more information about Light Profiles!")),(0,a.kt)("p",null,"nanos world provides ",(0,a.kt)("strong",{parentName:"p"},"50")," Light Profiles included in the base game which you can use to enhance your Lights. You can set them using ",(0,a.kt)("inlineCode",{parentName:"p"},":SetTextureLightProfile()")," with the enum ",(0,a.kt)(b,{mdxType:"Enums"},"LightProfile"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43031).Z,width:"1144",height:"744"})))}k.isMDXComponent=!0},43031:function(e,t,n){t.Z=n.p+"assets/images/ies-pack-c7aeec8a6976c58530d04c2168420e6f.webp"},7832:function(e){e.exports=JSON.parse('{"name":"Light","description":"A Light represents a Lighting source.","authority":"both","inheritance":["Actor"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)","description":"Relevant only for Rect and Spot LightTypes"},{"type":"Color","name":"color","default":"Color(1, 1, 1)"},{"type":"LightType","name":"light_type","default":"LightType.Point"},{"type":"number","name":"intensity","default":"30"},{"type":"number","name":"attenuation_radius","default":"250"},{"type":"number","name":"cone_angle","default":"44","description":"Relevant only for Spot LightType"},{"type":"number","name":"inner_cone_angle_percent","default":"0","description":"Inner Cone Angle Percent (Relevant only for Spot LightType) (0-1)"},{"type":"number","name":"max_daw_distance","default":"5000","description":"Max Draw Distance (Good for performance) - 0 for infinite"},{"type":"boolean","name":"use_inverse_squared_falloff","default":"true","description":"Whether to use physically based inverse squared distance falloff, where Attenuation Radius is only clamping the light\'s contribution. (Spot and Point types only)"},{"type":"boolean","name":"cast_shadows","default":"true"},{"type":"boolean","name":"visible","default":"true"}],"functions":[{"name":"SetColor","description":"Sets the light color","authority":"both","parameters":[{"type":"Color","name":"color","description":"The light color"}]},{"name":"SetTextureLightProfile","description":"Sets the light Texture Profile","authority":"both","parameters":[{"type":"LightProfile","name":"light_profile","description":"The Light Profile to use"}]},{"name":"SetEnabled","authority":"both","parameters":[{"type":"boolean","name":"is_enabled"}]},{"name":"SetCastShadows","authority":"both","parameters":[{"type":"boolean","name":"is_shadows_enabled"}]},{"name":"SetIntensity","authority":"both","parameters":[{"type":"number","name":"intensity"}]},{"name":"SetAttenuationRadius","authority":"both","parameters":[{"type":"number","name":"attenuation_radius"}]},{"name":"IsEnabled","authority":"both","return":[{"type":"boolean"}]},{"name":"GetCastShadows","authority":"both","return":[{"type":"boolean"}]},{"name":"GetIntensity","authority":"both","return":[{"type":"number"}]},{"name":"GetAttenuationRadius","authority":"both","return":[{"type":"number"}]},{"name":"GetColor","authority":"both","return":[{"type":"Color"}]}]}')}}]);