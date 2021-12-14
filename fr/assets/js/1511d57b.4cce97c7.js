"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[193],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?a.createElement(f,i(i({ref:n},c),{},{components:t})):a.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50664:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=t(83117),r=t(80102),s=(t(67294),t(3905)),i=["components"],o={description:"Types de base utilis\xe9s dans l'API.",tags:["scripting"]},l="Types de base",u={unversionedId:"scripting-reference/glossary/basic-types",id:"scripting-reference/glossary/basic-types",isDocsHomePage:!1,title:"Types de base",description:"Types de base utilis\xe9s dans l'API.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/glossary/basic-types.md",sourceDirName:"scripting-reference/glossary",slug:"/scripting-reference/glossary/basic-types",permalink:"/fr/docs/next/scripting-reference/glossary/basic-types",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/glossary/basic-types.md",tags:[{label:"scripting",permalink:"/fr/docs/next/tags/scripting"}],version:"current",frontMatter:{description:"Types de base utilis\xe9s dans l'API.",tags:["scripting"]},sidebar:"main",previous:{title:"Vector2D",permalink:"/fr/docs/next/scripting-reference/utility-classes/vectortwod"},next:{title:"Enums",permalink:"/fr/docs/next/scripting-reference/glossary/enums"}},c=[{value:"Types Lua",id:"types-lua",children:[{value:"<code>number</code>",id:"number",children:[],level:3},{value:"<code>string</code>",id:"string",children:[],level:3},{value:"<code>function</code>",id:"function",children:[],level:3},{value:"<code>boolean</code>",id:"boolean",children:[],level:3},{value:"<code>nil</code>",id:"nil",children:[],level:3},{value:"<code>table</code>",id:"table",children:[],level:3},{value:"<code>iterator</code>",id:"iterator",children:[],level:3},{value:"<code>any</code>",id:"any",children:[],level:3}],level:2},{value:"Special Types",id:"special-types",children:[{value:"<code>SpecialPath</code>",id:"specialpath",children:[{value:"R\xe9f\xe9rencer des fichiers d&#39;Asset Packs",id:"r\xe9f\xe9rencer-des-fichiers-dasset-packs",children:[],level:4},{value:"R\xe9f\xe9rencer des fichiers Packages",id:"r\xe9f\xe9rencer-des-fichiers-packages",children:[],level:4},{value:"Exemple acc\xe9der aux <em>images</em> du <code>quaternius</code> Asset Pack:",id:"exemple-acc\xe9der-aux-images-du-quaternius-asset-pack",children:[],level:4},{value:"Exemple acc\xe9der aux sons <em>.ogg</em> du package <code>sandbox</code> :",id:"exemple-acc\xe9der-aux-sons-ogg-du-package-sandbox-",children:[],level:4}],level:3}],level:2}],d={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"types-de-base"},"Types de base"),(0,s.kt)("h2",{id:"types-lua"},"Types Lua"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Pour plus d'informations et de tutoriels, veuillez regarder la ",(0,s.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/2.html"},"Documentation officielle sur Lua"),"."))),(0,s.kt)("h3",{id:"number"},(0,s.kt)("inlineCode",{parentName:"h3"},"number")),(0,s.kt)("p",null,"Le type number repr\xe9sente des nombres r\xe9els (flottants \xe0 double pr\xe9cision). Lua n'a pas de type entier, car il n'en a pas besoin. Les erreurs arithm\xe9tiques \xe0 virgule flottante font l'objet d'une id\xe9e fausse tr\xe8s r\xe9pandue et certaines personnes craignent que m\xeame un simple incr\xe9ment puisse devenir bizarre avec des nombres \xe0 virgule flottante. Le fait est que, lorsque vous utilisez un double pour repr\xe9senter un nombre entier, il n'y a aucune erreur d'arrondi (sauf si le nombre est sup\xe9rieur \xe0 100 000 000 000 000). Plus pr\xe9cis\xe9ment, un nombre Lua peut repr\xe9senter n'importe quel nombre entier long sans probl\xe8me d'arrondi. De plus, la plupart des processeurs modernes effectuent l'arithm\xe9tique en virgule flottante aussi rapidement que l'arithm\xe9tique en nombre entier (ou m\xeame plus rapidement)."),(0,s.kt)("h3",{id:"string"},(0,s.kt)("inlineCode",{parentName:"h3"},"string")),(0,s.kt)("p",null,"Le type string a une signification habituelle : une s\xe9quence de caract\xe8res. Lua est un langage \xe0 huit bits, de sorte que les cha\xeenes de caract\xe8res peuvent contenir des caract\xe8res de n'importe quelle valeur num\xe9rique, y compris des z\xe9ros int\xe9gr\xe9s. Cela signifie que vous pouvez stocker n'importe quelle donn\xe9e binaire dans une cha\xeene de caract\xe8res. Les strings en Lua ont des valeurs immuables. Vous ne pouvez pas modifier un caract\xe8re \xe0 l'int\xe9rieur d'une cha\xeene, comme c'est le cas en C. Au lieu de cela, vous cr\xe9ez une nouvelle cha\xeene avec les modifications souhait\xe9es, comme dans l'exemple suivant :"),(0,s.kt)("h3",{id:"function"},(0,s.kt)("inlineCode",{parentName:"h3"},"function")),(0,s.kt)("p",null,"Les fonctions sont des valeurs de premi\xe8re classe en Lua. Cela signifie que les fonctions peuvent \xeatre stock\xe9es dans des variables, transmises comme arguments \xe0 d'autres fonctions et retourn\xe9es comme r\xe9sultats. De telles facilit\xe9s donnent une grande flexibilit\xe9 au langage : un programme peut red\xe9finir une fonction pour ajouter une nouvelle fonctionnalit\xe9, ou simplement effacer une fonction pour cr\xe9er un environnement s\xe9curis\xe9 lors de l'ex\xe9cution d'un morceau de code non fiable (tel que du code re\xe7u via un r\xe9seau). De plus, Lua offre une bonne prise en charge de la programmation fonctionnelle, notamment des fonctions imbriqu\xe9es avec une port\xe9e lexicale appropri\xe9e ; il suffit d'attendre. Enfin, les fonctions de premi\xe8re classe jouent un r\xf4le essentiel dans les fonctions orient\xe9es objet de Lua."),(0,s.kt)("h3",{id:"boolean"},(0,s.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,s.kt)("p",null,"Le type boolean poss\xe8de deux valeurs, false et true (faux et vrai), qui repr\xe9sentent les valeurs bool\xe9ennes traditionnelles. Cependant, ils ne d\xe9tiennent pas le monopole des valeurs de condition : En Lua, toute valeur peut repr\xe9senter une condition. Les conditionnels (tels que ceux des structures de contr\xf4le) consid\xe8rent false et nil comme faux et tout le reste comme vrai. Attention, contrairement \xe0 d'autres langages de script, Lua consid\xe8re \xe0 la fois z\xe9ro et la cha\xeene vide comme vrais dans les tests conditionnels."),(0,s.kt)("h3",{id:"nil"},(0,s.kt)("inlineCode",{parentName:"h3"},"nil")),(0,s.kt)("p",null,"Nil est un type avec une seule valeur, nil, dont la principale propri\xe9t\xe9 est d'\xeatre diff\xe9rente de toute autre valeur. Comme nous l'avons vu, une variable globale a une valeur nulle par d\xe9faut, avant une premi\xe8re affectation, et vous pouvez affecter nil \xe0 une variable globale pour la supprimer. Lua utilise nil comme une sorte de non-valeur, pour repr\xe9senter l'absence d'une valeur utile."),(0,s.kt)("h3",{id:"table"},(0,s.kt)("inlineCode",{parentName:"h3"},"table")),(0,s.kt)("p",null,"Le type table met en \u0153uvre des tableaux associatifs. Un tableau associatif est un tableau qui peut \xeatre index\xe9 non seulement avec des nombres, mais aussi avec des cha\xeenes de caract\xe8res ou toute autre valeur du langage, sauf nil. En outre, les tableaux n'ont pas de taille fixe ; vous pouvez ajouter autant d'\xe9l\xe9ments que vous le souhaitez \xe0 un tableau de mani\xe8re dynamique. Les tableaux sont le principal (en fait, le seul) m\xe9canisme de structuration des donn\xe9es dans Lua, et un m\xe9canisme puissant. Nous utilisons les tableaux pour repr\xe9senter des tableaux ordinaires, des tables de symboles, des ensembles, des enregistrements, des files d'attente et d'autres structures de donn\xe9es, d'une mani\xe8re simple, uniforme et efficace. Lua utilise \xe9galement des tableaux pour repr\xe9senter les packages. Lorsque nous \xe9crivons io.read, nous voulons dire \"l'entr\xe9e de lecture du package io\". Pour Lua, cela signifie \"indexer la table io en utilisant la cha\xeene \"read\" comme cl\xe9\"."),(0,s.kt)("h3",{id:"iterator"},(0,s.kt)("inlineCode",{parentName:"h3"},"iterator")),(0,s.kt)("p",null,"Iterator permet de parcourir les \xe9l\xe9ments d'un tableau avec ",(0,s.kt)("inlineCode",{parentName:"p"},"for k, v in ipairs()"),"."),(0,s.kt)("h3",{id:"any"},(0,s.kt)("inlineCode",{parentName:"h3"},"any")),(0,s.kt)("p",null,"Nous utilisons l'expression \"n'importe quel\" dans les documentations pour indiquer que n'importe quel type peut \xeatre utilis\xe9."),(0,s.kt)("h2",{id:"special-types"},"Special Types"),(0,s.kt)("h3",{id:"specialpath"},(0,s.kt)("inlineCode",{parentName:"h3"},"SpecialPath")),(0,s.kt)("p",null,"nanos world supporte un type sp\xe9cial de chemin quand sont charg\xe9s des ",(0,s.kt)("strong",{parentName:"p"},"Textures"),", ",(0,s.kt)("strong",{parentName:"p"},"Sons (.ogg)")," ou r\xe9f\xe9renc\xe9s des ",(0,s.kt)("strong",{parentName:"p"},"WebUI"),". Il permet \xe0 n'importe quel package ou interface Web d'acc\xe9der facilement aux fichiers d'autres packages ou asset packs."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SpecialPath")," est une entr\xe9e de type string qui prend en charge les formats suivants pour acc\xe9der aux fichiers Assets ou Packages :"),(0,s.kt)("h4",{id:"r\xe9f\xe9rencer-des-fichiers-dasset-packs"},"R\xe9f\xe9rencer des fichiers d'Asset Packs"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assets///[CHEMIN_ASSET_PACK]/[CHEMIN/VERS/FICHIER.jpg]")),(0,s.kt)("h4",{id:"r\xe9f\xe9rencer-des-fichiers-packages"},"R\xe9f\xe9rencer des fichiers Packages"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"package///[CHEMIN_PACKAGE]/[CHEMIN/VERS/FICHIER.jpg]")),(0,s.kt)("h4",{id:"exemple-acc\xe9der-aux-images-du-quaternius-asset-pack"},"Exemple acc\xe9der aux ",(0,s.kt)("em",{parentName:"h4"},"images")," du ",(0,s.kt)("inlineCode",{parentName:"h4"},"quaternius")," Asset Pack:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"assets///quaternius/Thumbnails/SK_Revolver_01.jpg")),(0,s.kt)("h4",{id:"exemple-acc\xe9der-aux-sons-ogg-du-package-sandbox-"},"Exemple acc\xe9der aux sons ",(0,s.kt)("em",{parentName:"h4"},".ogg")," du package ",(0,s.kt)("inlineCode",{parentName:"h4"},"sandbox")," :"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"package///sandbox/Client/mon_super_son.ogg")),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"SpecialPath input also supports relative and traditional paths!"))))}p.isMDXComponent=!0}}]);