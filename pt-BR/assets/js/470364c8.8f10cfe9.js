"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1465],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},90732:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],s={title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["m\xeddias"],keywords:["SDK","ADK","m\xeddias","kit","unreal"]},l=void 0,d={unversionedId:"assets-modding/creating-assets/adk-assets-development-kit",id:"version-latest/assets-modding/creating-assets/adk-assets-development-kit",title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",sourceDirName:"assets-modding/creating-assets",slug:"/assets-modding/creating-assets/adk-assets-development-kit",permalink:"/pt-BR/docs/assets-modding/creating-assets/adk-assets-development-kit",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/assets-modding/creating-assets/adk-assets-development-kit.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/tags/midias"}],version:"latest",sidebarPosition:2,frontMatter:{title:"Assets Development Kit",description:"nanos world Assets Development Kit - ADK",sidebar_position:2,tags:["m\xeddias"],keywords:["SDK","ADK","m\xeddias","kit","unreal"]},sidebar:"version-latest/main",previous:{title:"Importing Custom Assets",permalink:"/pt-BR/docs/assets-modding/creating-assets/importing-assets"},next:{title:"Static Meshes",permalink:"/pt-BR/docs/assets-modding/creating-assets/static-meshes/"}},p={},m=[{value:"Downloading nanos world Assets Development Kit - ADK",id:"downloading-nanos-world-assets-development-kit---adk",level:2},{value:"Opening the Assets Development Kit Project",id:"opening-the-assets-development-kit-project",level:2},{value:"Tools available in the ADK project",id:"tools-available-in-the-adk-project",level:2},{value:"Placeholder Blueprints",id:"placeholder-blueprints",level:3},{value:"<code>NanosWorld/Blueprints/Placeholders/</code>",id:"nanosworldblueprintsplaceholders",level:4},{value:"Lua Code Generator",id:"lua-code-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator</code>",id:"nanosworldblueprintsutilitywbp_luacodegenerator",level:4},{value:"Assets.toml Generator",id:"assetstoml-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator</code>",id:"nanosworldblueprintsutilitywbp_assetstomlgenerator",level:4},{value:"Sun &amp; Sky Actor",id:"sun--sky-actor",level:3},{value:"<code>NanosWorld/Blueprints/World/BP_SunSky</code>",id:"nanosworldblueprintsworldbp_sunsky",level:4},{value:"Physical Materials",id:"physical-materials",level:3},{value:"<code>NanosWorld/MaterialLibrary/PhysicalMaterials/</code>",id:"nanosworldmateriallibraryphysicalmaterials",level:4},{value:"Mannequin Skeleton",id:"mannequin-skeleton",level:3},{value:"<code>NanosWorld/Characters/Common/SKEL_Mannequin</code>",id:"nanosworldcharacterscommonskel_mannequin",level:4},{value:"Thumbnail Generator",id:"thumbnail-generator",level:3},{value:"<code>NanosWorld/Blueprints/Utility/ThumbnailGenerator</code>",id:"nanosworldblueprintsutilitythumbnailgenerator",level:4}],c={toc:m};function u(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"nanos world Assets Development Kit - ADK"),(0,i.kt)("p",null,"nanos world provides a fully configurable and ready ",(0,i.kt)("strong",{parentName:"p"},"Unreal Project")," called Assets Development Kit (ADK) to help you integrating and exporting Assets and Maps much faster. This project contains ",(0,i.kt)("strong",{parentName:"p"},"Placeholders"),", ",(0,i.kt)("strong",{parentName:"p"},"Tools")," and ",(0,i.kt)("strong",{parentName:"p"},"Correct References")," that must be used in order to create ",(0,i.kt)("strong",{parentName:"p"},"Characters")," and make proper ",(0,i.kt)("strong",{parentName:"p"},"Physical Materials"),", for example."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To be able to use the ",(0,i.kt)("strong",{parentName:"p"},"ADK"),", you will need to have ",(0,i.kt)("a",{parentName:"p",href:"#installing-unreal-engine-5"},"Unreal Engine")," installed."))),(0,i.kt)("h2",{id:"downloading-nanos-world-assets-development-kit---adk"},"Downloading nanos world Assets Development Kit - ADK"),(0,i.kt)("p",null,"Our ADK is uploaded in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/assets-development-kit/"},"GitHub"),", please download it latest version and extract it in your computer."),(0,i.kt)("h2",{id:"opening-the-assets-development-kit-project"},"Opening the Assets Development Kit Project"),(0,i.kt)("p",null,"You will find a file ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorldADK.uproject")," in there, just open it with Unreal Engine and you are set!"),(0,i.kt)("p",null,"You will notice we have two folders in the root directory: ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAssetPack/"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ADK Folders",src:a(25397).Z,width:"1516",height:"347"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can delete or rename ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAssetPack")," to anything you want to be your Asset Pack."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please do not ",(0,i.kt)("strong",{parentName:"p"},"MODIFY"),", ",(0,i.kt)("strong",{parentName:"p"},"DELETE"),", ",(0,i.kt)("strong",{parentName:"p"},"CREATE")," or ",(0,i.kt)("strong",{parentName:"p"},"COPY")," any file inside ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder, otherwise the ADK will not work properly. Also make sure you DO NOT modify them unintentionally! If asked to save any modified file in there, cancel it! All references must use ",(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," where they are."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"NanosWorld/")," folder has some Assets which you can use to reference ",(0,i.kt)("strong",{parentName:"p"},"your")," assets and make the export keep the correct references when using them in-game."))),(0,i.kt)("h2",{id:"tools-available-in-the-adk-project"},"Tools available in the ADK project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprints ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Placeholders/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#assets-toml-generator"},"Assets.toml Generator ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#sunand-sky-actor"},"Sun & Sky Actor ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/World/BP_SunSky"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#physical-materials"},"Physical Materials ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/MaterialLibrary/PhysicalMaterials/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#mannequin-skeleton"},"Mannequin Skeleton ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Characters/Common/SKEL_Mannequin"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"adk-assets-development-kit#thumbnail-generator"},"Thumbnail Generator ",(0,i.kt)("inlineCode",{parentName:"a"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")))),(0,i.kt)("h3",{id:"placeholder-blueprints"},"Placeholder Blueprints"),(0,i.kt)("h4",{id:"nanosworldblueprintsplaceholders"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Placeholders/")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Placeholder Blueprints overview",src:a(20802).Z,width:"1244",height:"287"})),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("strong",{parentName:"p"},"Placeholder Blueprints")," to set Spawn Positions of ",(0,i.kt)("strong",{parentName:"p"},"Vehicles"),", ",(0,i.kt)("strong",{parentName:"p"},"Weapons"),", ",(0,i.kt)("strong",{parentName:"p"},"Characters")," and ",(0,i.kt)("strong",{parentName:"p"},"Props"),". This works only to help you generating a Lua code with spawn positions after all. These Blueprints aren\u2019t cooked with the map. Use the ",(0,i.kt)("a",{parentName:"p",href:"adk-assets-development-kit#lua-code-generator"},"Lua Code Generator")," to generate the Lua script with all spawn locations."),(0,i.kt)("h3",{id:"lua-code-generator"},"Lua Code Generator"),(0,i.kt)("h4",{id:"nanosworldblueprintsutilitywbp_luacodegenerator"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_LuaCodeGenerator")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lua Code Generator Widget",src:a(2949).Z,width:"1002",height:"606"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lua Code Generator")," is an ",(0,i.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans the map which is currently loaded in your Unreal and generate a list of spawn code with exact Location and Rotation for every ",(0,i.kt)("a",{parentName:"p",href:"adk-assets-development-kit#placeholder-blueprints"},"Placeholder Blueprint "),"you had spawned."),(0,i.kt)("p",null,"To open it, right click on it and press ",(0,i.kt)("strong",{parentName:"p"},"Run Editor Utility Widget"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(80741).Z,width:"362",height:"611"})),(0,i.kt)("h3",{id:"assetstoml-generator"},"Assets.toml Generator"),(0,i.kt)("h4",{id:"nanosworldblueprintsutilitywbp_assetstomlgenerator"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/WBP_AssetsTomlGenerator")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(47187).Z,width:"1005",height:"604"})),(0,i.kt)("p",null,"This is an ",(0,i.kt)("strong",{parentName:"p"},"Editor Utility Widget")," which scans a folder (determined by the TextBox) and generates the configuration for an Assets.toml with all Assets in the folder ","(","which can be used in nanos world",")","."),(0,i.kt)("h3",{id:"sun--sky-actor"},"Sun & Sky Actor"),(0,i.kt)("h4",{id:"nanosworldblueprintsworldbp_sunsky"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/World/BP_SunSky")),(0,i.kt)("p",null,"This is a pre-configured ",(0,i.kt)("strong",{parentName:"p"},"Sun & Sky Blueprint")," which can be used and easily replaced by nanos world Official Sun with ",(0,i.kt)("inlineCode",{parentName:"p"},"World,SpawnDefaultSun()"),". This is useful to get an approximate result of how the light will look like in-game if you decide to Spawn the Default Sun."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Overriding the Sun through Scripting with ",(0,i.kt)("inlineCode",{parentName:"p"},"World.SpawnDefaultSun()"),", will respawn the Sun actor, which means no configuration did on the Sun & Sky actor will persist"),(0,i.kt)("p",{parentName:"div"},"Example: Light Intensity, Color, Post Process and other configuration will be lost."))),(0,i.kt)("h3",{id:"physical-materials"},"Physical Materials"),(0,i.kt)("h4",{id:"nanosworldmateriallibraryphysicalmaterials"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/MaterialLibrary/PhysicalMaterials/")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(85410).Z,width:"1507",height:"316"})),(0,i.kt)("p",null,"If you are creating a ",(0,i.kt)("strong",{parentName:"p"},"Material"),", you can ","(","and should",")"," use these ",(0,i.kt)("strong",{parentName:"p"},"Physical Materials")," do integrate better with nanos world. Using these Physical Materials will allow nanos world recognize which type of surface your Prop/Object is, giving it the proper auto-generated Hit or Footstep sound."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DO NOT ",(0,i.kt)("strong",{parentName:"p"},"modify")," or ",(0,i.kt)("strong",{parentName:"p"},"rename")," any Physical Materials, only use by referencing them in your Materials."))),(0,i.kt)("h3",{id:"mannequin-skeleton"},"Mannequin Skeleton"),(0,i.kt)("h4",{id:"nanosworldcharacterscommonskel_mannequin"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Characters/Common/SKEL_Mannequin")),(0,i.kt)("p",null,"To be able to create Skeletal ","(","Character",")"," Meshes which work with our ",(0,i.kt)("a",{parentName:"p",href:"/pt-BR/docs/scripting-reference/classes/character"},"Character")," class, you must set your Skeletal Mesh to use our ",(0,i.kt)("strong",{parentName:"p"},"Mannequin Skeleton"),". This Skeleton is the same as Unreal Engine 5 default Mannequin, so any Skeletal Mesh which uses UE4\u2019s Mannequin Skeleton will work for us!"),(0,i.kt)("p",null,"To change a Skeletal Mesh\u2019s Skeleton: right click on it ",">",">"," Skeleton ",">",">"," Assign Skeleton and change it to our ",(0,i.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(88622).Z,width:"943",height:"726"})),(0,i.kt)("h3",{id:"thumbnail-generator"},"Thumbnail Generator"),(0,i.kt)("h4",{id:"nanosworldblueprintsutilitythumbnailgenerator"},(0,i.kt)("inlineCode",{parentName:"h4"},"NanosWorld/Blueprints/Utility/ThumbnailGenerator")),(0,i.kt)("p",null,"We\u2019ve shipped a ",(0,i.kt)("strong",{parentName:"p"},"Thumbnail Generator")," tool to help you generating ",(0,i.kt)("inlineCode",{parentName:"p"},".jpg")," images of your assets. To use that, just open ",(0,i.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," level and hit Play. Then you will be able to define a folder for search the assets ","(","currently only Static and Skeletal Meshes are supported",")"," and a folder to save the images ","(",".jpg",")",". You can optionally keep the directory hierarchy in the output folder or save all images in the same folder. Once you hit ",(0,i.kt)("strong",{parentName:"p"},"Generate"),", it will start loading all assets and taking a photo from them."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Note:")," this may be a slow process depending if your assets were already compiled previously."),(0,i.kt)("p",{parentName:"div"},"It is also recommended to generate the Thumbnails twice, so you grant they will be saved in the max quality possible."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(9870).Z,width:"1487",height:"626"})))}u.isMDXComponent=!0},20802:function(e,t,a){t.Z=a.p+"assets/images/adk-01-6664a43bf743949943da69b00554bc55.jpg"},2949:function(e,t,a){t.Z=a.p+"assets/images/adk-02-cd11254c13506205ee09bd4e88531498.jpg"},80741:function(e,t,a){t.Z=a.p+"assets/images/adk-03-0ff436a1e51ca784fd1b2643207f6890.jpg"},47187:function(e,t,a){t.Z=a.p+"assets/images/adk-04-3195ee765d888ce3ad98323142edd12b.jpg"},85410:function(e,t,a){t.Z=a.p+"assets/images/adk-05-a101f7203ddd191ec9b0a25ec34f986a.jpg"},88622:function(e,t,a){t.Z=a.p+"assets/images/adk-06-18f6ce791b46ef55e82e514d2c2afbb2.jpg"},9870:function(e,t,a){t.Z=a.p+"assets/images/adk-07-6a11957e82b95344dbb2e4f35fc241fc.jpg"},25397:function(e,t,a){t.Z=a.p+"assets/images/adk-folders-770bb54719fade09742a52673a98db64.jpg"}}]);