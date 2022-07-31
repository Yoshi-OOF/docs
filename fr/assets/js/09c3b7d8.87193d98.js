"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1231],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=["components"],i={title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},l=void 0,u={unversionedId:"core-concepts/server-manual/server-installation",id:"core-concepts/server-manual/server-installation",title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-installation.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/fr/docs/next/core-concepts/server-manual/server-installation",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-installation.md",tags:[{label:"hosting",permalink:"/fr/docs/next/tags/hosting"}],version:"current",sidebarPosition:1,frontMatter:{title:"Installation du serveur",description:"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !",sidebar_position:1,tags:["hosting"]},sidebar:"main",previous:{title:"Modes de jeu & Packages",permalink:"/fr/docs/next/getting-started/game-modes-and-packages"},next:{title:"Configuration du serveur",permalink:"/fr/docs/next/core-concepts/server-manual/server-configuration"}},d={},c=[{value:"Caract\xe9ristiques syst\xe8mes requises",id:"caract\xe9ristiques-syst\xe8mes-requises",level:2},{value:"Windows",id:"windows",level:2},{value:"Linux",id:"linux",level:2},{value:"Downloading using SteamCMD",id:"downloading-using-steamcmd",level:2},{value:"1. After downloaded, run <code>steamcmd</code> executable, once loaded you will get into it&#39;s console:",id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console",level:4},{value:"2. Vous pouvez \xe9ventuellement d\xe9finir un dossier d&#39;installation pour installer votre serveur nanos world :",id:"2-vous-pouvez-\xe9ventuellement-d\xe9finir-un-dossier-dinstallation-pour-installer-votre-serveur-nanos-world-",level:4},{value:"3. L&#39;\xe9tape suivante consiste \xe0 se connecter sur SteamCMD, vous pouvez vous connecter de mani\xe8re anonyme avec :",id:"3-l\xe9tape-suivante-consiste-\xe0-se-connecter-sur-steamcmd-vous-pouvez-vous-connecter-de-mani\xe8re-anonyme-avec-",level:4},{value:"4. You can then install or update nanos world server using it&#39;s app id: <code>1936830</code>:",id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830",level:4},{value:"Vous avez termin\xe9 ! Vous pouvez quitter la console :",id:"vous-avez-termin\xe9--vous-pouvez-quitter-la-console-",level:4},{value:"Installation de la version bleeding-edge",id:"installation-de-la-version-bleeding-edge",level:2},{value:"Installation automatis\xe9e",id:"installation-automatis\xe9e",level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Cr\xe9er des serveurs sur nanos world est tr\xe8s simple, suivez juste quelques \xe9tapes et vous aurez un serveur pr\xeat \xe0 \xeatre utilis\xe9 !"),(0,o.kt)("h2",{id:"caract\xe9ristiques-syst\xe8mes-requises"},"Caract\xe9ristiques syst\xe8mes requises"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"OS: Windows ou Linux"),(0,o.kt)("li",{parentName:"ul"},"Processor: ",(0,o.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," (faster core is better than multiple cores)"),(0,o.kt)("li",{parentName:"ul"},"M\xe9moire : ",(0,o.kt)("inlineCode",{parentName:"li"},"50 MB")," (augmente si vous avez trop de joueurs ou d'entit\xe9s)"),(0,o.kt)("li",{parentName:"ul"},"Stockage : ",(0,o.kt)("inlineCode",{parentName:"li"},"10 MB")," (+ taille des Assets & Packages)"),(0,o.kt)("li",{parentName:"ul"},"R\xe9seau : Recommand\xe9 au moins ",(0,o.kt)("inlineCode",{parentName:"li"},"1 Mo/s")," (augmente si on trop de joueurs ou d'entit\xe9s)"),(0,o.kt)("li",{parentName:"ul"},"Ports de transfert r\xe9seau: ",(0,o.kt)("inlineCode",{parentName:"li"},"7777 TCP/UDP")," et ",(0,o.kt)("inlineCode",{parentName:"li"},"7778 UDP")," (vous pouvez le modifier dans la configuration)")),(0,o.kt)("h2",{id:"windows"},"Windows"),(0,o.kt)("p",null,"On Windows, you have ",(0,o.kt)("strong",{parentName:"p"},"three")," options for downloading nanos world server:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Utilisez l'executable (",(0,o.kt)("em",{parentName:"li"},".exe"),") d\xe9j\xe0 situ\xe9 \xe0 ",(0,o.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (si vous avez t\xe9l\xe9charg\xe9 le jeu de base)."),(0,o.kt)("li",{parentName:"ol"},"Or download ",(0,o.kt)("strong",{parentName:"li"},"nanos world\u2122 Dedicated Server")," tool from Steam Client."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("a",{parentName:"li",href:"#steamcmd"},"SteamCMD"),".")),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("p",null,"On Linux, the only way to download the server is through SteamCMD. If you are on Ubuntu/Debian, you can easily install it like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")),(0,o.kt)("p",null,"Note: on Linux, you must start the server using the Shell Script ",(0,o.kt)("inlineCode",{parentName:"p"},"./NanosWorldServer.sh"),", which will configure proper paths and needed dynamic libraries which need to be loaded!"),(0,o.kt)("h2",{id:"downloading-using-steamcmd"},"Downloading using SteamCMD"),(0,o.kt)("p",null,"To download the server through SteamCMD (a command line version of Steam) please ",(0,o.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD"},"download it")," before proceeding."),(0,o.kt)("h4",{id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console"},"1. After downloaded, run ",(0,o.kt)("inlineCode",{parentName:"h4"},"steamcmd")," executable, once loaded you will get into it's console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam>\n")),(0,o.kt)("h4",{id:"2-vous-pouvez-\xe9ventuellement-d\xe9finir-un-dossier-dinstallation-pour-installer-votre-serveur-nanos-world-"},"2. Vous pouvez \xe9ventuellement d\xe9finir un dossier d'installation pour installer votre serveur nanos world :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir c:/nanos-world-server/\n")),(0,o.kt)("h4",{id:"3-l\xe9tape-suivante-consiste-\xe0-se-connecter-sur-steamcmd-vous-pouvez-vous-connecter-de-mani\xe8re-anonyme-avec-"},"3. L'\xe9tape suivante consiste \xe0 se connecter sur SteamCMD, vous pouvez vous connecter de mani\xe8re anonyme avec :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,o.kt)("h4",{id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830"},"4. You can then install or update nanos world server using it's app id: ",(0,o.kt)("inlineCode",{parentName:"h4"},"1936830"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,o.kt)("h4",{id:"vous-avez-termin\xe9--vous-pouvez-quitter-la-console-"},"Vous avez termin\xe9 ! Vous pouvez quitter la console :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> quit\n")),(0,o.kt)("h2",{id:"installation-de-la-version-bleeding-edge"},"Installation de la version bleeding-edge"),(0,o.kt)("p",null,"Pour installer la version ",(0,o.kt)("inlineCode",{parentName:"p"},"bleeding-edge")," du serveur, vous devrez sp\xe9cifier sa branche lors de l'installation :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830 -beta bleeding-edge\n")),(0,o.kt)("h2",{id:"installation-automatis\xe9e"},"Installation automatis\xe9e"),(0,o.kt)("p",null,"An easier way to install or update nanos world server is using an one-liner command to run SteamCMD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"steamcmd.exe +login anonymous +app_update 1936830 validate +quit\n")),(0,o.kt)("p",null,"or on bleeding-edge:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'steamcmd.exe +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}m.isMDXComponent=!0}}]);