"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7847],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},76160:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),l=["components"],i={title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},s=void 0,d={unversionedId:"core-concepts/server-manual/server-installation",id:"version-latest/core-concepts/server-manual/server-installation",title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/server-installation.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-installation",permalink:"/docs/core-concepts/server-manual/server-installation",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/server-installation.md",tags:[{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1661532426,formattedLastUpdatedAt:"Aug 26, 2022",sidebarPosition:1,frontMatter:{title:"Server Installation",description:"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!",sidebar_position:1,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Game-Modes & Packages",permalink:"/docs/getting-started/game-modes-and-packages"},next:{title:"Server Configuration",permalink:"/docs/core-concepts/server-manual/server-configuration"}},u={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:2},{value:"Linux",id:"linux",level:2},{value:"Downloading using SteamCMD",id:"downloading-using-steamcmd",level:2},{value:"1. After downloaded, run <code>steamcmd</code> executable, once loaded you will get into it&#39;s console:",id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console",level:4},{value:"2. You can optionally define an installation folder to install nanos world server:",id:"2-you-can-optionally-define-an-installation-folder-to-install-nanos-world-server",level:4},{value:"3. The next step is to login on SteamCMD, you can login anonymously with:",id:"3-the-next-step-is-to-login-on-steamcmd-you-can-login-anonymously-with",level:4},{value:"4. You can then install or update nanos world server using it&#39;s app id: <code>1936830</code>:",id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830",level:4},{value:"And you are done! You can quit the console:",id:"and-you-are-done-you-can-quit-the-console",level:4},{value:"Installing bleeding-edge version",id:"installing-bleeding-edge-version",level:2},{value:"Automated Installation",id:"automated-installation",level:2}],p={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Creating servers in nanos world is very simple and straightforward, just a few steps and you have your server up and ready!"),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Windows or Linux"),(0,r.kt)("li",{parentName:"ul"},"Processor: ",(0,r.kt)("inlineCode",{parentName:"li"},"1.0 GHz")," (faster core is better than multiple cores)"),(0,r.kt)("li",{parentName:"ul"},"Memory: ",(0,r.kt)("inlineCode",{parentName:"li"},"50 MB")," (grows if having too many Players or spawned Entities)"),(0,r.kt)("li",{parentName:"ul"},"Storage: ",(0,r.kt)("inlineCode",{parentName:"li"},"10 MB")," (+ Assets & Packages size)"),(0,r.kt)("li",{parentName:"ul"},"Network: Recommended at least ",(0,r.kt)("inlineCode",{parentName:"li"},"1 MB/s")," (grows if having too many Players or spawned Entities)"),(0,r.kt)("li",{parentName:"ul"},"Network Forwarded Ports: ",(0,r.kt)("inlineCode",{parentName:"li"},"7777 TCP/UDP")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"7778 UDP")," (you can change that in the Config)")),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("p",null,"On Windows, you have ",(0,r.kt)("strong",{parentName:"p"},"three")," options for downloading nanos world server:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use the executable (",(0,r.kt)("em",{parentName:"li"},".exe"),") already located at ",(0,r.kt)("inlineCode",{parentName:"li"},"nanos-world/Server/NanosWorldServer.exe")," (if you downloaded the base game)."),(0,r.kt)("li",{parentName:"ol"},"Or download ",(0,r.kt)("strong",{parentName:"li"},"nanos world\u2122 Dedicated Server")," tool from Steam Client."),(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("a",{parentName:"li",href:"#steamcmd"},"SteamCMD"),".")),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("p",null,"On Linux, the only way to download the server is through SteamCMD. If you are on Ubuntu/Debian, you can easily install it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")),(0,r.kt)("p",null,"Note: on Linux, you must start the server using the Shell Script ",(0,r.kt)("inlineCode",{parentName:"p"},"./NanosWorldServer.sh"),", which will configure proper paths and needed dynamic libraries which need to be loaded!"),(0,r.kt)("h2",{id:"downloading-using-steamcmd"},"Downloading using SteamCMD"),(0,r.kt)("p",null,"To download the server through SteamCMD (a command line version of Steam) please ",(0,r.kt)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/SteamCMD#Downloading_SteamCMD"},"download it")," before proceeding."),(0,r.kt)("h4",{id:"1-after-downloaded-run-steamcmd-executable-once-loaded-you-will-get-into-its-console"},"1. After downloaded, run ",(0,r.kt)("inlineCode",{parentName:"h4"},"steamcmd")," executable, once loaded you will get into it's console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam>\n")),(0,r.kt)("h4",{id:"2-you-can-optionally-define-an-installation-folder-to-install-nanos-world-server"},"2. You can optionally define an installation folder to install nanos world server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir c:/nanos-world-server/\n")),(0,r.kt)("h4",{id:"3-the-next-step-is-to-login-on-steamcmd-you-can-login-anonymously-with"},"3. The next step is to login on SteamCMD, you can login anonymously with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,r.kt)("h4",{id:"4-you-can-then-install-or-update-nanos-world-server-using-its-app-id-1936830"},"4. You can then install or update nanos world server using it's app id: ",(0,r.kt)("inlineCode",{parentName:"h4"},"1936830"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,r.kt)("h4",{id:"and-you-are-done-you-can-quit-the-console"},"And you are done! You can quit the console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> quit\n")),(0,r.kt)("h2",{id:"installing-bleeding-edge-version"},"Installing bleeding-edge version"),(0,r.kt)("p",null,"To install the ",(0,r.kt)("inlineCode",{parentName:"p"},"bleeding-edge")," version of the server, you will need to specify it's branch when installing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830 -beta bleeding-edge\n")),(0,r.kt)("h2",{id:"automated-installation"},"Automated Installation"),(0,r.kt)("p",null,"An easier way to install or update nanos world server is using an one-liner command to run SteamCMD:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"steamcmd.exe +login anonymous +app_update 1936830 validate +quit\n")),(0,r.kt)("p",null,"or on bleeding-edge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'steamcmd.exe +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}m.isMDXComponent=!0}}]);