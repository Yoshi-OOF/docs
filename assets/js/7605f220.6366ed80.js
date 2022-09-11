"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2923],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var A=n.createContext({}),f=function(t){var e=n.useContext(A),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=f(t.components);return n.createElement(A.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,A=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=f(a),d=i,c=m["".concat(A,".").concat(d)]||m[d]||l[d]||o;return a?n.createElement(c,r(r({ref:e},p),{},{components:a})):n.createElement(c,r({ref:e},p))}));function d(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var A in e)hasOwnProperty.call(e,A)&&(s[A]=e[A]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var f=2;f<o;f++)r[f]=a[f];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63830:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return A},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return l}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),r=["components"],s={title:"Importing Mixamo Animations",description:"How to import Mixamo animations into nanos world",tags:["assets","animations"],keywords:["mixamo","animation","mannequin","unreal"],sidebar_position:3},A=void 0,f={unversionedId:"assets-modding/creating-assets/animations/characters/mixamo-animations",id:"assets-modding/creating-assets/animations/characters/mixamo-animations",title:"Importing Mixamo Animations",description:"How to import Mixamo animations into nanos world",source:"@site/docs/assets-modding/creating-assets/animations/characters/mixamo-animations.md",sourceDirName:"assets-modding/creating-assets/animations/characters",slug:"/assets-modding/creating-assets/animations/characters/mixamo-animations",permalink:"/docs/next/assets-modding/creating-assets/animations/characters/mixamo-animations",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/animations/characters/mixamo-animations.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"},{label:"animations",permalink:"/docs/next/tags/animations"}],version:"current",lastUpdatedBy:"vugi99",lastUpdatedAt:1662904739,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:3,frontMatter:{title:"Importing Mixamo Animations",description:"How to import Mixamo animations into nanos world",tags:["assets","animations"],keywords:["mixamo","animation","mannequin","unreal"],sidebar_position:3},sidebar:"main",previous:{title:"Retargeting Animations",permalink:"/docs/next/assets-modding/creating-assets/animations/characters/retargeting-animations"},next:{title:"Weapon Reload Animations",permalink:"/docs/next/assets-modding/creating-assets/animations/weapon-reload-animations"}},p={},l=[{value:"Step 1: Download Mixamo Converter",id:"step-1-download-mixamo-converter",level:2},{value:"Step 2: Create an Account in Mixamo website",id:"step-2-create-an-account-in-mixamo-website",level:2},{value:"Step 3: Upload the Mannequin to Mixamo",id:"step-3-upload-the-mannequin-to-mixamo",level:2},{value:"Step 4: Choose your animation!",id:"step-4-choose-your-animation",level:2},{value:"Step 5: Download it!",id:"step-5-download-it",level:2},{value:"Step 6: Run Mixamo Converter Tool",id:"step-6-run-mixamo-converter-tool",level:2},{value:"Step 7: Import the Converted Animation into Unreal Engine",id:"step-7-import-the-converted-animation-into-unreal-engine",level:2},{value:"Create a new Asset Pack folder",id:"create-a-new-asset-pack-folder",level:3},{value:"Drag the Animation file into Unreal",id:"drag-the-animation-file-into-unreal",level:3},{value:"Step 8: Exporting the animation from Unreal",id:"step-8-exporting-the-animation-from-unreal",level:2},{value:"Step 9: Creating your nanos world Asset Pack",id:"step-9-creating-your-nanos-world-asset-pack",level:2},{value:"Step 10: Using your animations!",id:"step-10-using-your-animations",level:2}],m={toc:l};function d(t){var e=t.components,s=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mixamo is a library of thousands of animations captured from professional motion actors."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(25001).Z,width:"820",height:"266"})),(0,o.kt)("p",null,"For this guide we are going to use a Tool for exporting Mixamo animations directly into Unreal Engine, 100% compatible with nanos world Characters."),(0,o.kt)("h2",{id:"step-1-download-mixamo-converter"},"Step 1: Download Mixamo Converter"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://terribilisstudio.fr/?section=MC"},"Mixamo Converter")," page and download the Tool. Unzip it (password is ",(0,o.kt)("inlineCode",{parentName:"p"},"terribilis"),") and you will have a folder like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(89895).Z,width:"665",height:"207"})),(0,o.kt)("h2",{id:"step-2-create-an-account-in-mixamo-website"},"Step 2: Create an Account in Mixamo website"),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("a",{parentName:"p",href:"https://mixamo.com"},"Mixamo Website")," and create an account. Adobe will require you to have an account to be able to download it's animations."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(54063).Z,width:"1918",height:"966"})),(0,o.kt)("h2",{id:"step-3-upload-the-mannequin-to-mixamo"},"Step 3: Upload the Mannequin to Mixamo"),(0,o.kt)("p",null,"Upload the file ",(0,o.kt)("inlineCode",{parentName:"p"},"SK_Mannequin_For_Mixamo.fbx")," from Mixamo Converter root folder into Mixamo website:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(11339).Z,width:"954",height:"882"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(971).Z,width:"940",height:"556"})),(0,o.kt)("p",null,"Now you will be able to see Unreal Mannequin in there!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28662).Z,width:"1918",height:"926"})),(0,o.kt)("h2",{id:"step-4-choose-your-animation"},"Step 4: Choose your animation!"),(0,o.kt)("p",null,"Now you can choose any animation you want from Mixamo website, once you select it you will be able to see the Mannequin playing that. Also you can tweak some settings in the right side."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77799).Z,width:"1918",height:"926"})),(0,o.kt)("h2",{id:"step-5-download-it"},"Step 5: Download it!"),(0,o.kt)("p",null,"Once you are satisfied with the animation, download it."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You must select ",(0,o.kt)("strong",{parentName:"p"},"Without Skin")," and ",(0,o.kt)("strong",{parentName:"p"},"uniform")," in the Download Settings.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(90395).Z,width:"724",height:"309"})),(0,o.kt)("p",null,"After downloading it, copy the file into ",(0,o.kt)("inlineCode",{parentName:"p"},"mixamo_converter/Initial")," folder. In our case, we copied ",(0,o.kt)("inlineCode",{parentName:"p"},"Hip Hop Dancing.fbx"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(19089).Z,width:"678",height:"167"})),(0,o.kt)("h2",{id:"step-6-run-mixamo-converter-tool"},"Step 6: Run Mixamo Converter Tool"),(0,o.kt)("p",null,"Now, double click ",(0,o.kt)("inlineCode",{parentName:"p"},"Mixamo_Converter.exe")," tool you downloaded in Step 1 to open it:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52038).Z,width:"1204",height:"750"})),(0,o.kt)("p",null,"Once you press ",(0,o.kt)("strong",{parentName:"p"},"Mixamo -> Unreal"),", it will convert all animations from ",(0,o.kt)("inlineCode",{parentName:"p"},"/Initial")," folder into ",(0,o.kt)("inlineCode",{parentName:"p"},"/Complete")," folder."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can optionally select the option to delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"/Initial")," animations once is converted.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(50564).Z,width:"348",height:"134"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(90484).Z,width:"673",height:"125"})),(0,o.kt)("h2",{id:"step-7-import-the-converted-animation-into-unreal-engine"},"Step 7: Import the Converted Animation into Unreal Engine"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Please before proceeding, make sure you read and downloaded our ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit"),".")),(0,o.kt)("p",null,"Now you just need to import it into your UE4 Project! We are going to import it into our ADK to create a new Asset Pack with the animations we imported!"),(0,o.kt)("h3",{id:"create-a-new-asset-pack-folder"},"Create a new Asset Pack folder"),(0,o.kt)("p",null,"We are calling it ",(0,o.kt)("inlineCode",{parentName:"p"},"AwesomeMixamoAnimations"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(92977).Z,width:"1917",height:"1037"})),(0,o.kt)("h3",{id:"drag-the-animation-file-into-unreal"},"Drag the Animation file into Unreal"),(0,o.kt)("p",null,"Open the Folder you created and drag the animation exported by Mixamo Converter into that."),(0,o.kt)("p",null,"A FBX Import Options screen will show up."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please set all options as the following image. To expand the advanced options, click in the arrow in ",(0,o.kt)("strong",{parentName:"p"},"Animation")," category!")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3027).Z,width:"1218",height:"883"})),(0,o.kt)("p",null,"And voil\xe1! You imported it!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(77264).Z,width:"320",height:"206"})),(0,o.kt)("p",null,"If you double click it you will be able to see it working!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(21099).Z,width:"1909",height:"944"})),(0,o.kt)("h2",{id:"step-8-exporting-the-animation-from-unreal"},"Step 8: Exporting the animation from Unreal"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information on how to use ",(0,o.kt)("strong",{parentName:"p"},"ADK")," or Export Content in a faster way, please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/adk-assets-development-kit"},"Assets Development Kit")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Assets"),"!")),(0,o.kt)("p",null,"Go to File -> Package Export -> Windows 64 Bits and select a folder in your computer. It will start compiling your assets."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(78703).Z,width:"751",height:"650"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(65448).Z,width:"534",height:"71"})),(0,o.kt)("h2",{id:"step-9-creating-your-nanos-world-asset-pack"},"Step 9: Creating your nanos world Asset Pack"),(0,o.kt)("p",null,"Wait the Packaging to finish!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(39180).Z,width:"306",height:"73"})),(0,o.kt)("p",null,"Now that we have the compiled assets, we already can use it in nanos world! For that we will need to create an Asset Pack!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(718).Z,width:"818",height:"162"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please take a look into ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets#exporting--cooking-your-assets"},"Importing Assets")," for how to create an Asset Pack."),(0,o.kt)("p",{parentName:"admonition"},"We are not going to cover all aspects of creating Asset Packs here for avoiding redundant information in the docs!")),(0,o.kt)("h2",{id:"step-10-using-your-animations"},"Step 10: Using your animations!"),(0,o.kt)("p",null,"After exported and created your Asset Pack, you will be able to use them in code like that!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local my_character = Character()\nmy_character:PlayAnimation("awesome-mixamo-animations::HipHopDancing4UE4")\n')))}d.isMDXComponent=!0},25001:function(t,e,a){e.Z=a.p+"assets/images/mixamo-7f3ffab7d02c2eb920331d0af65f8709.jpg"},54063:function(t,e,a){e.Z=a.p+"assets/images/mixamo-01-17c64a49d1c6dfb76eaa91cd1b6a5da8.jpg"},89895:function(t,e,a){e.Z=a.p+"assets/images/mixamo-02-f2b48e66bb7df016b419b326ad60267c.jpg"},11339:function(t,e,a){e.Z=a.p+"assets/images/mixamo-03-335aaa9f961bc41f558eee068aeb1eb8.jpg"},971:function(t,e,a){e.Z=a.p+"assets/images/mixamo-04-c4e852714dab354a087588dfcfb68939.jpg"},28662:function(t,e,a){e.Z=a.p+"assets/images/mixamo-05-e49d6dd1da05d42635974d16f4d19b15.jpg"},77799:function(t,e,a){e.Z=a.p+"assets/images/mixamo-06-5db6741fd4a8448441146b0a67754e18.jpg"},90395:function(t,e,a){e.Z=a.p+"assets/images/mixamo-07-bec9c7903c763ac0e0a000080914f908.jpg"},19089:function(t,e,a){e.Z=a.p+"assets/images/mixamo-08-bf75510e3e79f1d36433dd9aaa84190d.jpg"},52038:function(t,e,a){e.Z=a.p+"assets/images/mixamo-09-391ed3675d0bc84373ce09b21129b44e.jpg"},50564:function(t,e,a){e.Z=a.p+"assets/images/mixamo-10-57d8617bc0b745c707702f772aff70cb.jpg"},90484:function(t,e,a){e.Z=a.p+"assets/images/mixamo-11-e7b77ff3c312e20e62e2b7d5cbc6798b.jpg"},92977:function(t,e,a){e.Z=a.p+"assets/images/mixamo-12-28f95fb920a32d7b817e1f9190fc2256.jpg"},3027:function(t,e,a){e.Z=a.p+"assets/images/mixamo-13-ffe24526ecdcf903dd1aa0c2ea541bf4.jpg"},77264:function(t,e,a){e.Z=a.p+"assets/images/mixamo-14-1124dd2958f4d3ad685f40235b805b0a.jpg"},21099:function(t,e,a){e.Z=a.p+"assets/images/mixamo-15-d6464571bc6396a6493840e08b2aa790.jpg"},78703:function(t,e,a){e.Z=a.p+"assets/images/mixamo-16-b7a5baa451d2758f89f370a6b4d80baa.jpg"},65448:function(t,e,a){e.Z=a.p+"assets/images/mixamo-17-4c16962e552ef28c72371825ed6c4519.jpg"},39180:function(t,e){e.Z="data:image/jpeg;base64,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"},718:function(t,e,a){e.Z=a.p+"assets/images/mixamo-19-e1447e0d346f37898a16116c2fed1eeb.jpg"}}]);