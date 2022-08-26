"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1727],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var a=n(83117),s=n(80102),o=(n(67294),n(3905)),i=["components"],r={title:"Weapons Meshes",description:"How to create your own Weapons",tags:["assets","weapons","skeletal-meshes"],keywords:["weapon","skeleton","unreal"]},l=void 0,p={unversionedId:"assets-modding/creating-assets/skeletal-meshes/weapons-meshes",id:"assets-modding/creating-assets/skeletal-meshes/weapons-meshes",title:"Weapons Meshes",description:"How to create your own Weapons",source:"@site/docs/assets-modding/creating-assets/skeletal-meshes/weapons-meshes.md",sourceDirName:"assets-modding/creating-assets/skeletal-meshes",slug:"/assets-modding/creating-assets/skeletal-meshes/weapons-meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/weapons-meshes",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/assets-modding/creating-assets/skeletal-meshes/weapons-meshes.md",tags:[{label:"assets",permalink:"/docs/next/tags/assets"},{label:"weapons",permalink:"/docs/next/tags/weapons"},{label:"skeletal-meshes",permalink:"/docs/next/tags/skeletal-meshes"}],version:"current",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1661532426,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"Weapons Meshes",description:"How to create your own Weapons",tags:["assets","weapons","skeletal-meshes"],keywords:["weapon","skeleton","unreal"]},sidebar:"main",previous:{title:"Vehicles Meshes",permalink:"/docs/next/assets-modding/creating-assets/skeletal-meshes/vehicles-meshes"},next:{title:"Importing Mixamo Animations",permalink:"/docs/next/assets-modding/creating-assets/animations/mixamo-animations"}},c={},m=[{value:"Root Bone",id:"root-bone",level:2},{value:"Fixing Offsets, Scale &amp; Rotation",id:"fixing-offsets-scale--rotation",level:3},{value:"Custom Bone Sockets",id:"custom-bone-sockets",level:2},{value:"<code>muzzle</code>",id:"muzzle",level:3},{value:"<code>shell_eject</code>",id:"shell_eject",level:3},{value:"Fire Animation",id:"fire-animation",level:2},{value:"Exporting the Weapon",id:"exporting-the-weapon",level:2}],d={toc:m};function h(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In nanos world, a Weapon is an entity which can be Picked Up by Characters and can have several settings tweaked to customize it. In this guide you will learn how to import custom Skeletal Meshes to create your own Weapon."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(49101).Z,width:"1536",height:"891"})),(0,o.kt)("p",null,"Weapons use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.unrealengine.com/4.26/en-US/WorkingWithContent/Types/SkeletalMeshes/"},"Skeletal Meshes"),". The Skeletal Mesh must point towards the Red Axis (X) to be properly rotated."),(0,o.kt)("h2",{id:"root-bone"},"Root Bone"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(82204).Z,width:"1918",height:"924"})),(0,o.kt)("p",null,"The root bone is used to attach the Weapon to the Character's right hand Bone. The weapon is attached to the Bone Socket ",(0,o.kt)("inlineCode",{parentName:"p"},"hand_r_socket"),"."),(0,o.kt)("p",null,"You can open ",(0,o.kt)("inlineCode",{parentName:"p"},"SKEL_Mannequin")," and add your weapon as Preview Asset in the ",(0,o.kt)("inlineCode",{parentName:"p"},"hand_r_socket")," so you can visualize it attached, and do some adjustments if needed:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90322).Z,width:"1918",height:"997"})),(0,o.kt)("h3",{id:"fixing-offsets-scale--rotation"},"Fixing Offsets, Scale & Rotation"),(0,o.kt)("p",null,"Sometimes when you import a Mesh, it is imported with wrong locations, scales or even pointing towards other direction (usually Y). Luckily there's a hack we can do inside Unreal to fix them!"),(0,o.kt)("p",null,"Just open your Skeletal Mesh Asset, under ",(0,o.kt)("strong",{parentName:"p"},"Assets Details")," window, look for ",(0,o.kt)("strong",{parentName:"p"},"Import Settings")," then ",(0,o.kt)("strong",{parentName:"p"},"Transform"),". Here you can tweak the Transform (Translation, Rotation and Scale) of the Weapon (will change the Root Bone transform)."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31041).Z,width:"1918",height:"1039"})),(0,o.kt)("p",null,"So if your Weapon is not positioned correctly in the Character hand location, or has wrong Scale, or is pointing to wrong location, you can tweak those settings and then press ",(0,o.kt)("strong",{parentName:"p"},"Reimport Base Mesh"),". It will reimport the Asset with the Transform you supplied:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(90327).Z,width:"982",height:"208"})),(0,o.kt)("h2",{id:"custom-bone-sockets"},"Custom Bone Sockets"),(0,o.kt)("p",null,"In order to make your Weapon as better integrated as possible, internally we use ",(0,o.kt)("strong",{parentName:"p"},"two")," custom Bone Sockets for spawning Particles such as Shells and Muzzle Flash."),(0,o.kt)("p",null,"To add a Bone Socket, just open your ",(0,o.kt)("strong",{parentName:"p"},"Skeleton")," asset:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43054).Z,width:"583",height:"148"})),(0,o.kt)("p",null,"And right click on any bone and select ",(0,o.kt)("inlineCode",{parentName:"p"},"AddSocket"),", this will create a ",(0,o.kt)("strong",{parentName:"p"},"Socket")," at the same position and relative to the parent Bone:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89570).Z,width:"343",height:"394"})),(0,o.kt)("h3",{id:"muzzle"},(0,o.kt)("inlineCode",{parentName:"h3"},"muzzle")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"muzzle")," Socket is where the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/weapon#setparticlesbarrel"},"Particle Barrel")," will be attached. So create a socket and place it in the muzzle of the weapon:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pointing Red Axis (X) towards.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(28193).Z,width:"1917",height:"931"})),(0,o.kt)("h3",{id:"shell_eject"},(0,o.kt)("inlineCode",{parentName:"h3"},"shell_eject")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"shell_eject")," Socket is where the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/weapon#setparticlesshells"},"Particle Shells")," will be attached. So create a socket and place it in shells eject of the weapon:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pointing Red Axis (X) outwards where the shell will be eject to."),(0,o.kt)("li",{parentName:"ul"},"And Pointing Green Axis (Y) the shell direction.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(25419).Z,width:"1918",height:"933"})),(0,o.kt)("h2",{id:"fire-animation"},"Fire Animation"),(0,o.kt)("p",null,"It is possible to have a custom Fire Animation for your Weapon. Usually animating weapons is easy as it's movements are straight and stiff, you can do it through Unreal!\nFor that, just open your Skeletal Mesh, then ",(0,o.kt)("strong",{parentName:"p"},"Create Asset")," and ",(0,o.kt)("strong",{parentName:"p"},"Create Animation")," and finally ",(0,o.kt)("strong",{parentName:"p"},"Current Pose"),". It will create an Animation Asset from the Weapon, empty."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85045).Z,width:"1916",height:"1009"})),(0,o.kt)("p",null,"This will open the Animation Editor like that:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(91304).Z,width:"1919",height:"995"})),(0,o.kt)("p",null,"To start, Stop the animation from playing clicking in To Front (1), Right Click on the darker bar (2) and Select Append to the End (3), and input ",(0,o.kt)("inlineCode",{parentName:"p"},"3"),", this will add 3 frames to the animation:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18870).Z,width:"1919",height:"1018"})),(0,o.kt)("p",null,"In this case of an AK-47, let's animate the ",(0,o.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," bone! For that, select it from ",(0,o.kt)("strong",{parentName:"p"},"Skeleton Tree")," window, and with the animation stopped at the beginning, click on ",(0,o.kt)("strong",{parentName:"p"},"+ Key"),", this will add the selected bone as Animation key to the beginning of the animation:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10574).Z,width:"1918",height:"1011"})),(0,o.kt)("p",null,"Now do the same, but with the animation in the end, this will make sure the first and last frame have ",(0,o.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," in the initial position:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36743).Z,width:"1920",height:"1014"})),(0,o.kt)("p",null,"Now move the Animation Timeline to the middle of the animation and move ",(0,o.kt)("inlineCode",{parentName:"p"},"b_gun_shelleject")," a little bit, and finally press ",(0,o.kt)("strong",{parentName:"p"},"+ Key"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47600).Z,width:"1920",height:"1014"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85741).Z,width:"1920",height:"1014"})),(0,o.kt)("p",null,"And voila! If you press Play, you will notice it will loop playing your animation!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(46340).Z,width:"1920",height:"1016"})),(0,o.kt)("h2",{id:"exporting-the-weapon"},"Exporting the Weapon"),(0,o.kt)("p",null,"The Exporting process follows the usual process of exporting assets to nanos world. Please follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/assets-modding/creating-assets/importing-assets"},"Importing Custom Assets")," Guide."))}h.isMDXComponent=!0},49101:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-01-d28cd1e91879b35c97fc38d245caa20e.jpg"},89570:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-add-socket-a4a0ba04fb5c6d532a43c84b288cd431.jpg"},85045:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-01-763196f44b4cef1b0dfb19d9fb597e67.jpg"},91304:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-02-e955846561701ee56736886b72b758c7.jpg"},18870:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-03-87f4dd1e35ea0a05c8834fef9c76996a.jpg"},10574:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-04-e6102440e423c06d4a1d0c0db9ebbf83.jpg"},36743:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-05-44ecb90de3aec0e38e29cf451338c7c2.jpg"},47600:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-06-44ecb90de3aec0e38e29cf451338c7c2.jpg"},85741:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-07-1672c15bcac79aaa856d9b3d2462f184.jpg"},46340:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-fire-animation-08-9a796e88b29a06cbb4db7ec306587539.jpg"},31041:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-import-transform-8bb981d67b7db0c924f278f341b8f9d9.jpg"},90322:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-mannequin-hand-ef0f1b866033c33a2b774f59ac5ac505.jpg"},28193:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-muzzle-fef7f883bfdc9baea3c4cfdcd5114f1b.jpg"},90327:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-reimport-9eb926be5b7ce7ef5f3150055e70a6f7.jpg"},82204:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-root-bone-51fbff04cd030550b94f68b695a29391.jpg"},25419:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-shell-eject-33e20c0e02a8f67acba037d9d384ca01.jpg"},43054:function(e,t,n){t.Z=n.p+"assets/images/import-weapons-skeleton-da2e159be692f6ac68c2b00874df30ee.jpg"}}]);