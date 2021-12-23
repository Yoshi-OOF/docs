"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3433],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||s;return a?n.createElement(m,i(i({ref:t},l),{},{components:a})):n.createElement(m,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79065:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var n=a(83117),r=a(80102),s=(a(67294),a(3905)),i=["components"],o={description:"Tout ce que vous devez savoir sur les Packages",sidebar_position:0,tags:["scripting"]},c="Guide sur les Packages",p={unversionedId:"core-concepts/packages/packages-guide",id:"core-concepts/packages/packages-guide",title:"Guide sur les Packages",description:"Tout ce que vous devez savoir sur les Packages",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/packages/packages-guide.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/packages-guide",permalink:"/fr/docs/next/core-concepts/packages/packages-guide",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/packages/packages-guide.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",sidebarPosition:0,frontMatter:{description:"Tout ce que vous devez savoir sur les Packages",sidebar_position:0,tags:["scripting"]},sidebar:"main",previous:{title:"Game Panels",permalink:"/fr/docs/next/core-concepts/server-manual/game-panels"},next:{title:"\xc9cran de chargement",permalink:"/fr/docs/next/core-concepts/packages/loading-screen"}},l=[{value:"Folder Structure",id:"folder-structure",children:[],level:2},{value:"Configuration des Packages",id:"configuration-des-packages",children:[{value:"Settings Detailed",id:"settings-detailed",children:[],level:3},{value:"Types de Package",id:"types-de-package",children:[],level:3}],level:2}],d={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"guide-sur-les-packages"},"Guide sur les Packages"),(0,s.kt)("p",null,"Les ",(0,s.kt)("strong",{parentName:"p"},"Packages")," sont des composants de votre serveur qui vont ex\xe9cuter des scripts Lua pour int\xe9ragir avec le jeu."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(14915).Z})),(0,s.kt)("p",null,"Chaque Package est isol\xe9 et poss\xe8de sa propre Machine Virtuelle Lua (Lua VM), cela veut dire que chaque Package a sa propre port\xe9e globale et ne peut pas acc\xe9der directement aux donn\xe9es des autres Packages."),(0,s.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,s.kt)("p",null,"Tous les Packages doivent aller dans le r\xe9pertoire ",(0,s.kt)("inlineCode",{parentName:"p"},"Server/Packages/"),", chaque Package est un dossier dans ce r\xe9pertoire."),(0,s.kt)("p",null,"Ils peuvent contenir les dossiers suivants : ",(0,s.kt)("inlineCode",{parentName:"p"},"Server"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Client")," et ",(0,s.kt)("inlineCode",{parentName:"p"},"Shared"),". Seul les dossiers ",(0,s.kt)("strong",{parentName:"p"},"Client")," and ",(0,s.kt)("strong",{parentName:"p"},"Shared")," seront envoy\xe9s et charg\xe9s par les clients quand ils se connecteront."),(0,s.kt)("p",null,"Chaque ",(0,s.kt)("strong",{parentName:"p"},"Package")," doit avoir un fichier nomm\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"Index.lua")," \xe0 l'int\xe9rieur des dossiers ",(0,s.kt)("strong",{parentName:"p"},"Server"),", ",(0,s.kt)("strong",{parentName:"p"},"Client")," ou ",(0,s.kt)("strong",{parentName:"p"},"Shared"),", il s'agit du seul fichier qui sera lu lorsque le Package sera charg\xe9, par cons\xe9quent ce fichier se doit d'inclure les autres fichiers du Package et ainsi les d\xe9marrer."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Server Folder"',title:'"Server','Folder"':!0},"NanosWorldServer.exe\nPackages/\n\u251c\u2500\u2500 My_Package_01/\n\u2502   \u251c\u2500\u2500 Server/\n\u2502   \u2502   \u251c\u2500\u2500 Index.lua\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Client/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u251c\u2500\u2500 Shared/\n\u2502   \u2502   \u2514\u2500\u2500 *.lua\n\u2502   \u2514\u2500\u2500 Package.toml\n\u251c\u2500\u2500 My_Package_02/\n\u2502   \u251c\u2500\u2500 Package.toml\n\u2502   \u2514\u2500\u2500 ...\nAssets/\nConfig.toml\n")),(0,s.kt)("h2",{id:"configuration-des-packages"},"Configuration des Packages"),(0,s.kt)("p",null,"Les Packages ont un fichier de configuration nomm\xe9 ",(0,s.kt)("inlineCode",{parentName:"p"},"Package.toml"),", dans la racine du dossier du Package. Dans ce fichier il est possible de configurer tous les param\xe8tres importants li\xe9s au Package :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Package.toml"',title:'"Package.toml"'},'# package configurations\n[package]\n    # package name\n    name =                              "testing"\n    # contributors\n    author =                            ""\n    # version\n    version =                           "0.0.1"\n    # image URL\n    image =                             ""\n    # package type: \'script\' (normal package), \'game-mode\' (unique package - can only load one at a time) or \'loading-screen\' (special package loaded in loading screen)\n    type =                              "script"\n    # whether to force the custom map Script to do not load\n    force_no_map_script =               false\n    # auto destroy all entities spawned by this package when it unloads\n    auto_cleanup =                      true\n    # packages requirements\n    packages_requirements = [\n\n    ]\n    # asset packs requirements\n    assets_requirements = [\n\n    ]\n\n')),(0,s.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"name"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Nom familier du Package")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"author"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Auteur","(","s",")"," du Package")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"version"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Version du Package - se r\xe9f\xe9rer \xe0 ",(0,s.kt)("a",{parentName:"td",href:"https://semver.org/"},"SemVer"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"image"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Vault")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"type"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Type de package - se r\xe9f\xe9rer \xe0 ",(0,s.kt)("a",{parentName:"td",href:"#package-types"},"Package Types"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"force_no_map_script"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Activer cela forcera le script de la map ","(","si pr\xe9sent",")"," \xe0 ne PAS se charger")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"auto_cleanup"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Activer cela d\xe9truira toutes les entit\xe9s cr\xe9ees par ce Package lors de sa d\xe9sactivation")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"packages_requirements"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste des Packages qui doivent \xeatre charg\xe9s avant le chargement de celui-ci")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"assets_requirements"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Liste des packs d'assets \xe0 charger avant que ce package se charge")))),(0,s.kt)("h3",{id:"types-de-package"},"Types de Package"),(0,s.kt)("p",null,"Dans nanos world, nous avons 3 types de packages : ",(0,s.kt)("strong",{parentName:"p"},"script"),", ",(0,s.kt)("strong",{parentName:"p"},"game-mode")," et ",(0,s.kt)("strong",{parentName:"p"},"loading-screen"),", chacun a une fonctionnalit\xe9 et une utilit\xe9 sp\xe9cifique."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"script"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Package classique qui va ex\xe9cuter ses scripts et d\xe9marrer une nouvelle machine virtuelle Lua (Lua VM) quand il sera lanc\xe9.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"game-mode"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Comme ",(0,s.kt)("inlineCode",{parentName:"td"},"script")," mais vous pouvez charger seulement un package ",(0,s.kt)("inlineCode",{parentName:"td"},"game-mode")," \xe0 la fois.",(0,s.kt)("br",null),"Pratique lorsque vous souhaitez cr\xe9er des jeux qui ne peuvent pas risquer d'\xeatre",(0,s.kt)("br",null),"charg\xe9s avec d'autres package de ce type.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},(0,s.kt)("inlineCode",{parentName:"strong"},"loading-screen"))),(0,s.kt)("td",{parentName:"tr",align:"left"},"Package sp\xe9cial qui sera charg\xe9 pendant l'\xe9cran de chargement d'un joueur.",(0,s.kt)("br",null),"Ces packages doivent avoir un fichier ",(0,s.kt)("inlineCode",{parentName:"td"},"Index.html")," dans le dossier racine.",(0,s.kt)("br",null),"Se r\xe9f\xe9rer \xe0 ",(0,s.kt)("a",{parentName:"td",href:"/fr/docs/next/core-concepts/packages/loading-screen"},"Loading Screen")," pour plus d'informations.")))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Si vous souhaitez cr\xe9er une ",(0,s.kt)("strong",{parentName:"p"},"Librairie"),", ou des ",(0,s.kt)("strong",{parentName:"p"},"Utilitaires"),", faites un package ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"script"))," !"),(0,s.kt)("p",{parentName:"div"},"Si vous cr\xe9ez un ",(0,s.kt)("strong",{parentName:"p"},"mode de jeu")," unique et complet avec des fonctionnalit\xe9s que vous ne voulez pas voir g\xe2ch\xe9es si quelqu'un charge deux modes de jeu, faites un package ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("inlineCode",{parentName:"strong"},"game-mode")),", un seul pourra \xeatre charg\xe9 \xe0 la fois !"))))}u.isMDXComponent=!0},14915:function(e,t,a){t.Z=a.p+"assets/images/packages-01-e5ca40b3250f77522f7e280d3a183cf9.jpg"}}]);