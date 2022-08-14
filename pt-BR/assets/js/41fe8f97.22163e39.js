"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6842],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return w}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(t),w=o,m=d["".concat(l,".").concat(w)]||d[w]||u[w]||r;return t?a.createElement(m,s(s({ref:n},c),{},{components:t})):a.createElement(m,s({ref:n},c))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86228:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),s=["components"],i={title:"\ud83d\udd2b Weapon",sidebar_position:0,tags:["class"]},l=void 0,p={unversionedId:"scripting-reference/classes/weapon",id:"scripting-reference/classes/weapon",title:"\ud83d\udd2b Weapon",description:"Please take a look at our Default's Weapon package with all built-in Weapons already properly configured and ready to use//github.com/nanos-world/nanos-world-weapons.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/weapon.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/weapon",permalink:"/pt-BR/docs/next/scripting-reference/classes/weapon",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/weapon.mdx",tags:[{label:"class",permalink:"/pt-BR/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83d\udd2b Weapon",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83d\ude99 Vehicle",permalink:"/pt-BR/docs/next/scripting-reference/classes/vehicle"},next:{title:"\ud83d\udda5\ufe0f WebUI",permalink:"/pt-BR/docs/next/scripting-reference/classes/webui"}},c={},u=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}},w=d("HeaderDeclaration"),m=d("ReferenceLink"),f=d("ConstructorDeclaration"),g=d("FunctionsDeclaration"),h=d("EventsDeclaration"),y={toc:u};function _(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(w,{type:"Class",name:"Weapon",image:"/img/docs/weapon.webp",mdxType:"HeaderDeclaration"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please take a look at our Default's Weapon package with all built-in Weapons already properly configured and ready to use: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-weapons"},"https://github.com/nanos-world/nanos-world-weapons"),"."),(0,r.kt)("p",{parentName:"admonition"},"This Package is already included in the base game, you just need to ",(0,r.kt)("inlineCode",{parentName:"p"},'Package.Require("nanos-world-weapons")')," and use it!")),(0,r.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Spawning a Weapon with an AK47 model\nlocal new_weapon = Weapon(\n    Vector(-900, 185, 215),\n    Rotator(0, 0, 0),\n    "nanos-world::SK_AK47"\n)\n\n-- Configures Weapon Base Settings\nnew_weapon:SetAmmoSettings(30, 1000)\nnew_weapon:SetDamage(30)\nnew_weapon:SetSpread(30)\nnew_weapon:SetRecoil(0.25)\nnew_weapon:SetBulletSettings(1, 20000, 20000, Color(100, 58, 0))\nnew_weapon:SetCadence(0.1)\nnew_weapon:SetWallbangSettings(50, 0.75)\n\n-- Configures how the Character Grabs and Aims the Weapon\nnew_weapon:SetHandlingMode(HandlingMode.DoubleHandedWeapon)\nnew_weapon:SetSightTransform(Vector(0, 0, -1), Rotator(-1.5, 0, 0))\nnew_weapon:SetLeftHandTransform(Vector(22, 0, 9), Rotator(0, 60, 90))\nnew_weapon:SetRightHandOffset(Vector(-10, 0, 0))\n\n-- Configures Weapon Particles\nnew_weapon:SetParticlesBulletTrail("nanos-world::P_Bullet_Trail")\nnew_weapon:SetParticlesBarrel("nanos-world::P_Weapon_BarrelSmoke")\nnew_weapon:SetParticlesShells("nanos-world::P_Weapon_Shells_762x39")\n\n-- Configures Weapon Sounds\nnew_weapon:SetSoundDry("nanos-world::A_Rifle_Dry")\nnew_weapon:SetSoundLoad("nanos-world::A_Rifle_Load")\nnew_weapon:SetSoundUnload("nanos-world::A_Rifle_Unload")\nnew_weapon:SetSoundZooming("nanos-world::A_AimZoom")\nnew_weapon:SetSoundAim("nanos-world::A_Rattle")\nnew_weapon:SetSoundFire("nanos-world::A_AK47_Shot")\n\n-- Configures Weapon Animations\nnew_weapon:SetAnimationFire("nanos-world::A_AK47_Fire")\nnew_weapon:SetAnimationCharacterFire("nanos-world::AM_Mannequin_Sight_Fire")\nnew_weapon:SetAnimationReload("nanos-world::AM_Mannequin_Reload_Rifle")\n\n-- Configures the Mesh to drop when reloading\nnew_weapon:SetMagazineMesh("nanos-world::SM_AK47_Mag_Empty")\n\n-- Configures the Crosshair Material\nnew_weapon:SetCrosshairMaterial("nanos-world::MI_Crosshair_Regular")\n')),(0,r.kt)("p",null,"Using our Default Weapons Package ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-weapons"},"https://github.com/nanos-world/nanos-world-weapons")," to spawn an AK47:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'-- Includes the nanos world Default Weapons Package in your Package\n-- (you don\'t need to download it, just include it!)\nPackage.RequirePackage("nanos-world-weapons")\n\n-- Spawning the AK47\nlocal my_ak47 = NanosWorldWeapons.AK47(Vector(1035, 154, 300), Rotator())\n\n-- Giving the Weapon to a Character\nmy_character:PickUp(my_ak47)\n')),(0,r.kt)("p",null,"More related examples:"),(0,r.kt)(m,{href:"getting-started/tutorials-and-examples/prop-shooter",mdxType:"ReferenceLink"},"Prop Shooter"),(0,r.kt)(m,{href:"getting-started/tutorials-and-examples/weapon-scope",mdxType:"ReferenceLink"},"Mira para Armas"),(0,r.kt)(m,{href:"getting-started/tutorials-and-examples/weapon-flashlight",mdxType:"ReferenceLink"},"Lanterna para Arma"),(0,r.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,r.kt)(f,{type:"Class",name:"Weapon",mdxType:"ConstructorDeclaration"}),(0,r.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,r.kt)(g,{type:"Class",name:"Weapon",mdxType:"FunctionsDeclaration"}),(0,r.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,r.kt)(h,{type:"Class",name:"Weapon",mdxType:"EventsDeclaration"}))}_.isMDXComponent=!0}}]);