"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[9164],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Linux Debian 10 & ARM",description:"Special cases for Debian 10 & ARM",sidebar_position:5,tags:["hosting"]},l=void 0,p={unversionedId:"core-concepts/server-manual/linux-debian-arm",id:"version-latest/core-concepts/server-manual/linux-debian-arm",title:"Linux Debian 10 & ARM",description:"Special cases for Debian 10 & ARM",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/linux-debian-arm.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/linux-debian-arm",permalink:"/docs/core-concepts/server-manual/linux-debian-arm",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/linux-debian-arm.md",tags:[{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"vugi99",lastUpdatedAt:1662904739,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:5,frontMatter:{title:"Linux Debian 10 & ARM",description:"Special cases for Debian 10 & ARM",sidebar_position:5,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Game Panels",permalink:"/docs/core-concepts/server-manual/game-panels"},next:{title:"Packages Guide",permalink:"/docs/core-concepts/packages/packages-guide"}},u={},c=[{value:"Linux Debian 10 Installation",id:"linux-debian-10-installation",level:2},{value:"Linux ARM (raspberry &amp; more)",id:"linux-arm-raspberry--more",level:2},{value:"Box86",id:"box86",level:3},{value:"Box64",id:"box64",level:3},{value:"Steam &amp; Server",id:"steam--server",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Special cases for Debian 10 & ARM server installation."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The installation on Debian 10 or ARM systems is not officially supported and currently maintained by the community! The following steps are WIP and may change at any time!")),(0,o.kt)("h2",{id:"linux-debian-10-installation"},"Linux Debian 10 Installation"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Follow this part if you have this kind of problem: ",(0,o.kt)("inlineCode",{parentName:"p"},"version GLIBCXX 3.4.26 not found"))),(0,o.kt)("p",null,"For this distribution, some extra steps are required. Since nanos world use ",(0,o.kt)("inlineCode",{parentName:"p"},"gcc 9"),", we will need to upgrade one of our package to the testing repository."),(0,o.kt)("p",null,"First, update your ",(0,o.kt)("inlineCode",{parentName:"p"},"sources.list")," file (located in: ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/sources.list"),"), you will need to add the testing repo source, you can add theses lines below to your sources:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"deb http://ftp.fr.debian.org/debian/ testing main contrib non-free\ndeb-src http://ftp.fr.debian.org/debian/ testing main contrib non-free\n")),(0,o.kt)("p",null,"After that, we will need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"preferences")," file that will tell our system to not prefer installing testing package over stable unless specified. In ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/preferences")," (create if it doesn\u2019t exists), add theses lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Package: *\nPin: release a=stable\nPin-Priority: 700\n\nPackage: *\nPin: release a=testing\nPin-Priority: 650\n")),(0,o.kt)("p",null,"Now, update your server to make sure that your system can find testing repositories with this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,o.kt)("p",null,"We will install ",(0,o.kt)("inlineCode",{parentName:"p"},"libstdc++6")," testing package to the server, it will allow the server to start correctly. You can type the command below to install it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get --target-release testing install libstdc++6\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")),(0,o.kt)("h2",{id:"linux-arm-raspberry--more"},"Linux ARM (raspberry & more)"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"EXPERIMENTAL: Use at your own risk!")),(0,o.kt)("p",null,"Nanos world server is not officially supported on Arm, but if you really really really want your server to be running on arm platform such as a raspberry, rockpro64, ... then you can!"),(0,o.kt)("p",null,"We will need 2 emulators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"box64 for Nanos World server : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box64"},"https://github.com/ptitSeb/box64")),(0,o.kt)("li",{parentName:"ul"},"box86 for steam : ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/ptitSeb/box86"},"https://github.com/ptitSeb/box86"))),(0,o.kt)("p",null,"You must build & install these emulators on your board.\nbox86 is optional if you don't want to use steamcmd to download & update the server"),(0,o.kt)("p",null,"Follow CAREFULLY the instructions on the emulators repository, commands are different in function of the board."),(0,o.kt)("p",null,"Example :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RK3399 is for Pine64, RockPro64, Orange Pi, ...")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These steps have been tested on Armbian Bullseye 64bits (aarch64) on a rockpro64. Some extra steps might be required for other boards & distros")),(0,o.kt)("h3",{id:"box86"},"Box86"),(0,o.kt)("p",null,"To install it, simply follow the instructions here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md"},"https://github.com/ptitSeb/box86/blob/master/docs/COMPILE.md")),(0,o.kt)("p",null,"If for some reason, your system cannot find Box86 and you are on a 64bits os, run theses commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo dpkg --add-architecture armhf\nsudo apt update\nsudo apt install libc6:armhf libncurses5:armhf libstdc++6:armhf\n")),(0,o.kt)("h3",{id:"box64"},"Box64"),(0,o.kt)("p",null,"Clone the repository, then we will need to replace the file ",(0,o.kt)("inlineCode",{parentName:"p"},"libstdc++.so.6")," inside the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"x64lib"),".\nYou will need a newer version of this file with at least ",(0,o.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),".\nYou can grab it inside an updated Linux distro such as Ubuntu 20.04, Debian 11.\nTo check if the file has at least ",(0,o.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", use this command :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strings libstdc++.so.6 | grep LIBCXX\n")),(0,o.kt)("p",null,"If it shows ",(0,o.kt)("inlineCode",{parentName:"p"},"GLIBCXX v3.4.26"),", you can put this file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"x64lib")," folder."),(0,o.kt)("p",null,"You can now follow the rest of the instructions here (starting from ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir")," steps since you already cloned the repo): ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md"},"https://github.com/ptitSeb/box64/blob/main/docs/COMPILE.md")),(0,o.kt)("h3",{id:"steam--server"},"Steam & Server"),(0,o.kt)("p",null,"You have now installed the emulators, they should be able to auto-detect if a program needs a x86_64/x86 emulation or not."),(0,o.kt)("p",null,"Get steamcmd manually on a folder with this command :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz" | tar zxvf -\n')),(0,o.kt)("p",null,"You can now follow the basic instructions of nanos world Linux installation starting from steamcmd (run steamcmd with this command: ",(0,o.kt)("inlineCode",{parentName:"p"},"./steamcmd.sh"),")."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Finished! You can now proceed to the next steps to configure your nanos world server.")))}m.isMDXComponent=!0}}]);