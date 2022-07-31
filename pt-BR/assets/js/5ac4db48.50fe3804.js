"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3005],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8588:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),s=(n(67294),n(3905)),o=["components"],r={title:"Static Meshes",description:"How to export and use Static Meshes from Unreal Engine",tags:["m\xeddias"],keywords:["static","mesh","prop","unreal"]},l=void 0,p={unversionedId:"assets-modding/creating-assets/static-meshes/static-meshes",id:"assets-modding/creating-assets/static-meshes/static-meshes",title:"Static Meshes",description:"How to export and use Static Meshes from Unreal Engine",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/assets-modding/creating-assets/static-meshes/static-meshes.md",sourceDirName:"assets-modding/creating-assets/static-meshes",slug:"/assets-modding/creating-assets/static-meshes/",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/static-meshes/",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/static-meshes/static-meshes.md",tags:[{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"}],version:"current",frontMatter:{title:"Static Meshes",description:"How to export and use Static Meshes from Unreal Engine",tags:["m\xeddias"],keywords:["static","mesh","prop","unreal"]},sidebar:"main",previous:{title:"Creating & Importing Assets",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets"},next:{title:"Characters Meshes",permalink:"/pt-BR/docs/next/assets-modding/creating-assets/skeletal-meshes/characters-meshes"}},d={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Importing the Textures",id:"importing-the-textures",level:2},{value:"Importing the Static Meshes",id:"importing-the-static-meshes",level:2},{value:"Setting up the Materials",id:"setting-up-the-materials",level:2},{value:"Setting up Collisions",id:"setting-up-collisions",level:2},{value:"Additional Tips",id:"additional-tips",level:2},{value:"Setting the Physical Material",id:"setting-the-physical-material",level:3},{value:"Reducing Texture Size",id:"reducing-texture-size",level:3},{value:"Setting up LODs",id:"setting-up-lods",level:3},{value:"Generating Thumbnails",id:"generating-thumbnails",level:3},{value:"Exporting the Assets",id:"exporting-the-assets",level:2},{value:"Configuring the Asset Pack",id:"configuring-the-asset-pack",level:2},{value:"Time to Test!",id:"time-to-test",level:2}],c={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"How to export and use Static Meshes from Unreal Engine into nanos world"),(0,s.kt)("p",null,"In nanos world Static Meshes are mainly used for ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/prop"},"Props")," and ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/scripting-reference/classes/static-mesh"},"StaticMesh")," entities."),(0,s.kt)("p",null,"This guide will go through all aspects of importing, configure the materials, set up the collisions and create Thumbnails for Static Meshes. Also some additional tips for further improving them."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/static-meshes/"},"Unreal Engine Static Mesh Documentation")," for more information on how to import a .FBX into Unreal, how to optimize it and so on. There are also thousands of tutorials regarding importing a .FBX from Blender (or other Modeling Tool) into Unreal Engine.")),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("admonition",{title:"Prerequisites",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Before proceeding, please make sure you read ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets"},"Creating & Importing Assets")," Guide.")),(0,s.kt)("p",null,"For this example, we are going to import this ",(0,s.kt)("a",{parentName:"p",href:"https://sketchfab.com/3d-models/money-set-afcb0e5720ad40a98797507861aa371f"},"Money Set")," meshes into nanos world. We've downloaded and extracted it, and identified the .FBXs and .PNGs to be imported."),(0,s.kt)("p",null,"The first step is creating a new folder at the root of your ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit")," Project, we will call it ",(0,s.kt)("inlineCode",{parentName:"p"},"money-pack/"),". This will be our Asset Pack folder, all files must be imported inside this folder:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(93245).Z,width:"1485",height:"382"})),(0,s.kt)("h2",{id:"importing-the-textures"},"Importing the Textures"),(0,s.kt)("p",null,"Then, let's import the textures. For that, we can just drag'n drop them inside our ",(0,s.kt)("inlineCode",{parentName:"p"},"money-pack/")," folder:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(86012).Z,width:"1916",height:"1032"})),(0,s.kt)("p",null,"It is good practice to rename the files you imported, so we renamed it to PascalCase with ",(0,s.kt)("inlineCode",{parentName:"p"},"T_")," prefix:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(82745).Z,width:"1491",height:"377"})),(0,s.kt)("h2",{id:"importing-the-static-meshes"},"Importing the Static Meshes"),(0,s.kt)("p",null,"The second step is importing the .FBXs. For that we can just drag'n drop them inside our folder as well. When we do so, a Popup will appear."),(0,s.kt)("p",null,'Pay attention to some settings in there, some meshes come in a very small or big sizes so we need to adjust it at the time of import. Also it\'s smart to select "Combine Meshes" (under ',(0,s.kt)("inlineCode",{parentName:"p"},"Mesh -> Advanced"),") to merge all meshes inside that .FBXs into an unique StaticMesh."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"In our case, the original money is small, so we multiply the scale by 10x.")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(30924).Z,width:"733",height:"836"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"After imported, we renamed it to ",(0,s.kt)("inlineCode",{parentName:"p"},"SM_MoneyStack")," as well.")),(0,s.kt)("h2",{id:"setting-up-the-materials"},"Setting up the Materials"),(0,s.kt)("p",null,"Note that some Materials have been created automatically. If you open your Static Mesh you will notice they are white."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(74436).Z,width:"1917",height:"1033"})),(0,s.kt)("p",null,"We need to configure the Materials to use the Textures we imported before!"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Some meshes when imported, can handle all Materials and Texture links automatically! It depends on how they were created and exported from the Modelling tool.")),(0,s.kt)("p",null,"For that, let's open our Material and drag the correspondent texture into it:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6827).Z,width:"1911",height:"1031"})),(0,s.kt)("p",null,"And then plug the texture into the Base Color pin:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(62637).Z,width:"1916",height:"1036"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can configure other Materials pin as well. Unreal uses ",(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/physically-based-materials-in-unreal-engine/"},"PBR")," which means we can set lots of parameters to make the Material look like as much realistic as we desire!"),(0,s.kt)("p",{parentName:"admonition"},"Also, some meshes come with other Textures besides the base color as well, for example ",(0,s.kt)("strong",{parentName:"p"},"Normal Maps"),", ",(0,s.kt)("strong",{parentName:"p"},"Metallic")," and ",(0,s.kt)("strong",{parentName:"p"},"Specular"),", which you can plug into your Material to make the PBR complete!")),(0,s.kt)("p",null,"After setting up all materials, our mesh is now fully colored!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(93503).Z,width:"1913",height:"1035"})),(0,s.kt)("h2",{id:"setting-up-collisions"},"Setting up Collisions"),(0,s.kt)("p",null,"Some meshes come without collision and we need to set it manually. As our money mesh is a cuboid it is easy to add collision to that!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(57924).Z,width:"400",height:"172"})),(0,s.kt)("p",null,'For that, we open the Collision tab and select "Add Box Collision" to automatically add a box collision wrapping the whole mesh.'),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},'You can delete all the collisions by pressing "Remove Collision". For more information please refer o ',(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/setting-up-collisions-with-static-meshes-in-unreal-engine/"},"Unreal Official Documentation"),".")),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(82766).Z,width:"1393",height:"773"})),(0,s.kt)("p",null,"And now it has collision! (If you don't see it, press ",(0,s.kt)("inlineCode",{parentName:"p"},"Show -> Simple Collision")," to display the green wireframe around it)."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(16315).Z,width:"1395",height:"773"})),(0,s.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,s.kt)("p",null,"After you have created your meshes, you can read the following steps to improve them even further with this additional tips."),(0,s.kt)("h3",{id:"setting-the-physical-material"},"Setting the Physical Material"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/physical-materials-in-unreal-engine/"},"Physical Materials"),' are used to define the response of a physical object when interacting with the world. Besides that in nanos world we use them to define the "hit sounds" of the objects, so it\'s nice and very easy to configure it.'),(0,s.kt)("p",null,"For that you just need to open your material and select one of the (included in the ADK) Physical Materials, they are the ones initiated by ",(0,s.kt)("inlineCode",{parentName:"p"},"PM_"),'. For this example we are going to use "Wood":'),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(89550).Z,width:"1399",height:"783"})),(0,s.kt)("h3",{id:"reducing-texture-size"},"Reducing Texture Size"),(0,s.kt)("p",null,"Textures are one of the assets that take the most disk space. The way Unreal compression deals with it, they have a fixed size depending on their dimensions and it is smart to configure your textures or even limit their sizes to reduce their disk sizes."),(0,s.kt)("p",null,"As you can see our money texture is really huge (2048x2048) taking up to 5MB in disk space (and RAM when playing):"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5431).Z,width:"1387",height:"766"})),(0,s.kt)("p",null,"As our object is small, we can limit this size to 512x512 and reduce it to 380 KB. It is a reduction of over 90%!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(99969).Z,width:"1393",height:"764"})),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"If you have bigger meshes, it's not recommended to reduce their size, otherwise the mesh will look like with bad quality.")),(0,s.kt)("h3",{id:"setting-up-lods"},"Setting up LODs"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/5.0/en-US/creating-and-using-lods-in-unreal-engine/"},"Level of Details (LODs)")," are the way Unreal automatically improves the performance for distant objects. Unreal provides an easy tool to generate LODs automatically for your Static Meshes."),(0,s.kt)("p",null,"For that, open your Static Mesh and in Details panel search for ",(0,s.kt)("inlineCode",{parentName:"p"},"Lod Settings -> Number of LODs"),". We recommend setting it to 3:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(48248).Z,width:"369",height:"640"})),(0,s.kt)("p",null,"This way Unreal auto generates LODs which are changed during gameplay to reduce the quality of the distant meshes and improve the performance!"),(0,s.kt)("h3",{id:"generating-thumbnails"},"Generating Thumbnails"),(0,s.kt)("p",null,"Thumbnails are conventionally used on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-sandbox/"},"Sandbox")," game-mode to display assets properly on it's Spawn Menu."),(0,s.kt)("p",null,"For that to work, you just need to take pictures of your meshes and put the ",(0,s.kt)("inlineCode",{parentName:"p"},".JPG")," with the exact asset name inside a ",(0,s.kt)("inlineCode",{parentName:"p"},"Thumbnails/")," folder at the root of your Asset Pack."),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/adk-assets-development-kit#thumbnail-generator"},"ADK Thumbnail Generator")," to generate them for you! For that open the ",(0,s.kt)("strong",{parentName:"p"},"ThumbnailGenerator")," map:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(86825).Z,width:"1491",height:"392"})),(0,s.kt)("p",null,"Press ",(0,s.kt)("strong",{parentName:"p"},"Play")," and configure the settings. In Search Folder you must set the folder of your asset pack: ",(0,s.kt)("inlineCode",{parentName:"p"},"money-pack")," and in Output Folder you set the full path of the folder you want to export it, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"D:/money-pack/Thumbnails"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7908).Z,width:"534",height:"400"})),(0,s.kt)("p",null,"And press Generate! If you go to your output folder you will find all ",(0,s.kt)("inlineCode",{parentName:"p"},".JPG")," generated for your assets:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(91321).Z,width:"423",height:"209"})),(0,s.kt)("p",null,"Now you just copy that folder inside your Asset Pack!"),(0,s.kt)("h2",{id:"exporting-the-assets"},"Exporting the Assets"),(0,s.kt)("p",null,"After you completed all steps, you can export them into nanos world! Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets#exporting--cooking-your-assets"},"Exporting & Cooking your Assets")," docs page before proceeding."),(0,s.kt)("h2",{id:"configuring-the-asset-pack"},"Configuring the Asset Pack"),(0,s.kt)("p",null,"After you cooked your assets and copied the generated folder into your ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Assets/"),". It's time to configure the Asset Pack! For that please refer to ",(0,s.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/assets-modding/creating-assets/importing-assets#configuring-your-assetstoml"},"Configuring your Assets.toml")," docs page before proceeding."),(0,s.kt)("p",null,"Now that you created your Assets.toml and configured the unreal settings, make sure you set up your Static Meshes properly in the ",(0,s.kt)("inlineCode",{parentName:"p"},"[assets.static_meshes]")," category, like that:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml"},'# static meshes\n[assets.static_meshes]\n    SM_MoneyRoll = "SM_MoneyRoll"\n    SM_MoneyStack = "SM_MoneyStack"\n')),(0,s.kt)("p",null,"This way we can reference them through scripting and also we can test it on Sandbox game-mode!"),(0,s.kt)("h2",{id:"time-to-test"},"Time to Test!"),(0,s.kt)("p",null,"After your configured your ",(0,s.kt)("inlineCode",{parentName:"p"},"Assets.toml"),", it's time to test it!"),(0,s.kt)("p",null,"Open nanos world, start a new game on Sandbox and add your new created Asset Pack to the ",(0,s.kt)("strong",{parentName:"p"},"assets")," list to be loaded:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(67846).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,"When you hop in, open the Spawn Menu, under ",(0,s.kt)("inlineCode",{parentName:"p"},"Props -> All Props")," you will find your static meshes in there!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(77800).Z,width:"1919",height:"1079"})),(0,s.kt)("p",null,"And voila! Your brand new static meshes you just imported!"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(23480).Z,width:"1919",height:"1079"})))}m.isMDXComponent=!0},82766:function(e,t,n){t.Z=n.p+"assets/images/add-box-collision-afa08dff947c5b90c2e69eebff40a5f1.webp"},93245:function(e,t,n){t.Z=n.p+"assets/images/creating-folder-f177991958df8464a65788342fd9e749.webp"},30924:function(e,t,n){t.Z=n.p+"assets/images/import-fbx-popup-877df7eeb785d0c2b31b2496088af39a.webp"},86012:function(e,t,n){t.Z=n.p+"assets/images/importing-textures-d7badd74512c4fa2fa65aae315f15fb5.webp"},23480:function(e,t,n){t.Z=n.p+"assets/images/in-game-b8e73c91bb73182bf70811f585f429e9.webp"},48248:function(e,t,n){t.Z=n.p+"assets/images/lods-5231c0634d77bb5d3a67ce2141cb8c43.webp"},6827:function(e,t,n){t.Z=n.p+"assets/images/material-drag-texture-bcb7833c909affdee5a8303e82df13f7.webp"},62637:function(e,t,n){t.Z=n.p+"assets/images/material-plug-color-a5f34219dafd8e3e59ac207db539670b.webp"},93503:function(e,t,n){t.Z=n.p+"assets/images/mesh-painted-8f19e7a3039c33a0c43022aa2ccc1cac.webp"},67846:function(e,t,n){t.Z=n.p+"assets/images/new-game-8a6d01f72ab5c48af9a9f1a2c786e97f.webp"},57924:function(e,t,n){t.Z=n.p+"assets/images/no-collision-9457ddf814b97ba2ff8bbfbe6cc02e04.webp"},89550:function(e,t,n){t.Z=n.p+"assets/images/physical-materials-9cd03a4332b66df8ef1b891d22156fd4.webp"},82745:function(e,t,n){t.Z=n.p+"assets/images/renaming-textures-813d670e9280e3ea76035ade329e1d99.webp"},77800:function(e,t,n){t.Z=n.p+"assets/images/spawn-menu-67eec823cb292786efa38fd7a34ebeb5.webp"},5431:function(e,t,n){t.Z=n.p+"assets/images/texture-big-0aad31b27091b153928e5f846f0b795d.webp"},99969:function(e,t,n){t.Z=n.p+"assets/images/texture-small-c38cc1d35c7db7b43e3c847f435087fd.webp"},7908:function(e,t,n){t.Z=n.p+"assets/images/thumbnails-configure-b500626f3dc48d982866e177f2768d05.webp"},91321:function(e,t){t.Z="data:image/webp;base64,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"},86825:function(e,t,n){t.Z=n.p+"assets/images/thumbnails-map-b6cf66a57634088bd30d48bc6582d72f.webp"},74436:function(e,t,n){t.Z=n.p+"assets/images/white-mesh-8ad05e066c0d78b619187435a87892e6.webp"},16315:function(e,t,n){t.Z=n.p+"assets/images/with-collision-d32c9b59430d5c46c0de68a9aa452ac2.webp"}}]);