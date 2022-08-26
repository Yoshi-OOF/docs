"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6527],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return g}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),g=r,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return o?n.createElement(h,i(i({ref:t},c),{},{components:o})):n.createElement(h,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},13791:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=o(83117),r=o(80102),a=(o(67294),o(3905)),i=["components"],s={title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",tags:["tutorial-example","hosting"]},l=void 0,u={unversionedId:"getting-started/tutorials-and-examples/hosting-server-4free-gcp",id:"version-latest/getting-started/tutorials-and-examples/hosting-server-4free-gcp",title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",source:"@site/versioned_docs/version-latest/getting-started/tutorials-and-examples/hosting-server-4free-gcp.md",sourceDirName:"getting-started/tutorials-and-examples",slug:"/getting-started/tutorials-and-examples/hosting-server-4free-gcp",permalink:"/docs/getting-started/tutorials-and-examples/hosting-server-4free-gcp",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/getting-started/tutorials-and-examples/hosting-server-4free-gcp.md",tags:[{label:"tutorial-example",permalink:"/docs/tags/tutorial-example"},{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Gabriel T. Nardy",lastUpdatedAt:1661532426,formattedLastUpdatedAt:"Aug 26, 2022",frontMatter:{title:"Hosting Server 4Free - Google Cloud",description:"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier.",tags:["tutorial-example","hosting"]},sidebar:"version-latest/main",previous:{title:"Gravity Gun",permalink:"/docs/getting-started/tutorials-and-examples/gravity-gun"},next:{title:"Monster Truck",permalink:"/docs/getting-started/tutorials-and-examples/monster-truck"}},c={},p=[{value:"What Is Google Cloud?",id:"what-is-google-cloud",level:2},{value:"Setting Up a Google Cloud Server from Scratch for nanos world",id:"setting-up-a-google-cloud-server-from-scratch-for-nanos-world",level:2},{value:"Step 1: Sign In to Google Cloud",id:"step-1-sign-in-to-google-cloud",level:3},{value:"Step 2: Create a New Google Cloud Server",id:"step-2-create-a-new-google-cloud-server",level:3},{value:"Step 3: Use your Google Cloud Server",id:"step-3-use-your-google-cloud-server",level:3},{value:"Step 4: Installing nanos world server",id:"step-4-installing-nanos-world-server",level:3},{value:"Step 5: Forwarding Ports in the Google Cloud",id:"step-5-forwarding-ports-in-the-google-cloud",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"How to create a Linux virtual machine instance on Compute Engine using the Google Cloud Console within the Free Tier."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We are not responsible for charges or improper configurations in your Google Cloud platform, this guide is only intended to give a hint of an opportunity and possibility of hosting.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The following guide was based and had several excerpts taken from ",(0,a.kt)("a",{parentName:"p",href:"https://linuxhint.com/setup_google_cloud_server"},"https://linuxhint.com/setup","_","google","_","cloud","_","server"),".")),(0,a.kt)("h2",{id:"what-is-google-cloud"},"What Is Google Cloud?"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(34301).Z,width:"758",height:"427"})),(0,a.kt)("p",null,"Launched in 2008, Google Cloud is a comprehensive cloud computing suite running on the same powerful global infrastructure Google uses for its central products, including Google Search and YouTube."),(0,a.kt)("p",null,"Google Cloud provides secure storage, powerful compute, and integrated data analytics products that can satisfy the needs of everyone from individual home users to larger enterprises."),(0,a.kt)("p",null,"Some of the most noteworthy use cases of Google Cloud include web hosting, deployment of globally available apps, fully managed cloud data warehouse, machine learning, shared gaming experiences, and automation of repetitive tasks, just to give a few examples."),(0,a.kt)("p",null,"With Google Cloud, anyone can easily spin up a virtual machine in seconds and use it as a worry-free alternative to a physical server. Because all resources are virtualized, it\u2019s possible to effortlessly add more processing power or storage on demand, so you always pay only for what you use."),(0,a.kt)("p",null,"Best of all, all new Google Cloud users receive a $300 credit that can be used with any Google Cloud service. To be eligible for the bonus credit, you have to be a new Google Cloud customer and set up a billing account by providing your credit card information, which is required to verify that you\u2019re not a bot."),(0,a.kt)("h2",{id:"setting-up-a-google-cloud-server-from-scratch-for-nanos-world"},"Setting Up a Google Cloud Server from Scratch for nanos world"),(0,a.kt)("p",null,"Google has made it very easy to set a new Google Cloud server from scratch, and the whole process shouldn\u2019t take you more than 15 minutes from start to finish."),(0,a.kt)("h3",{id:"step-1-sign-in-to-google-cloud"},"Step 1: Sign In to Google Cloud"),(0,a.kt)("p",null,"At ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com"},"https://console.cloud.google.com"),", click on ",(0,a.kt)("strong",{parentName:"p"},"Get started for free")," located in the upper-right of the screen: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(55148).Z,width:"1904",height:"677"})),(0,a.kt)("p",null,"If you haven\u2019t provided your credit card details to Google before, you will be asked to do so now. Don\u2019t worry: Google won\u2019t start charging you until you spend the $300 bonus, which you can do within a year. Furthermore, you have to manually upgrade to a paid account for Google to start charging you. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(88748).Z,width:"1919",height:"939"})),(0,a.kt)("h3",{id:"step-2-create-a-new-google-cloud-server"},"Step 2: Create a New Google Cloud Server"),(0,a.kt)("p",null,"To create a new VM, select \u2018Compute Engine\u2019 and then \u2018VM Instances\u2019 "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(23310).Z,width:"576",height:"923"})),(0,a.kt)("p",null,"If it is not enabled yet, enable it and wait about 1-2 minutes to finish: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(12495).Z,width:"591",height:"453"})),(0,a.kt)("p",null,"After that, you will be able to create a new Instance: "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(22073).Z,width:"1226",height:"734"})),(0,a.kt)("p",null,"Give it a ",(0,a.kt)("strong",{parentName:"p"},"Name")," and select under Machine Configuration the Series ",(0,a.kt)("strong",{parentName:"p"},"N1")," and Machine Type ",(0,a.kt)("em",{parentName:"p"},"f1-micro")," - this part is important as only f1-micro is under Free Tier. Also it is required that you select one of the following regions to be eligible for Free Tier: ",(0,a.kt)("strong",{parentName:"p"},"Oregon: us-west1"),", ",(0,a.kt)("strong",{parentName:"p"},"Iowa: us-central1")," or ",(0,a.kt)("strong",{parentName:"p"},"South Carolina: us-east1"),". "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(54489).Z,width:"1309",height:"791"})),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Boot Disk"),", for this guide we recommend selecting ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu 20.04 LTS"),": "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(36003).Z,width:"598",height:"373"})),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Firewall")," select to allow ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," and ",(0,a.kt)("strong",{parentName:"p"},"HTTPS")," traffic, as well in ",(0,a.kt)("strong",{parentName:"p"},"Security")," tab add your public ",(0,a.kt)("strong",{parentName:"p"},"SSH Key")," to it, if you don\u2019t have a key yet please ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"create one"),". Only with a ",(0,a.kt)("strong",{parentName:"p"},"SSH Key")," you will be able to connect to your instance from your computer. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(94419).Z,width:"475",height:"528"})),(0,a.kt)("p",null,"Once you have everything configured to your liking, click the \u2018Create\u2019 button on the bottom of the page."),(0,a.kt)("h3",{id:"step-3-use-your-google-cloud-server"},"Step 3: Use your Google Cloud Server"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(4220).Z,width:"1906",height:"945"})),(0,a.kt)("p",null,"The next step is to connect into your Virtual Machine, for that launch your prompt ","(","shell or cmd",")"," and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh [YOUR_VM_EXTERNAL_IP]\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(79789).Z,width:"670",height:"97"})),(0,a.kt)("p",null,"Type ",(0,a.kt)("strong",{parentName:"p"},"yes")," if asked, and you will be in! "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(30783).Z,width:"673",height:"621"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If your system doesn't have a built-in SSH client, you may use third-party clients like PuTTY.")),(0,a.kt)("h3",{id:"step-4-installing-nanos-world-server"},"Step 4: Installing nanos world server"),(0,a.kt)("p",null,"Now you must download nanos world server in your VM."),(0,a.kt)("p",null,"For that, you should use SteamCMD. Install it by doing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository multiverse\nsudo dpkg --add-architecture i386\nsudo apt update\nsudo apt install lib32gcc1 steamcmd \n")),(0,a.kt)("p",null,"Then, launch SteamCMD by running ",(0,a.kt)("inlineCode",{parentName:"p"},"steamcmd"),"."),(0,a.kt)("p",null,"Select a directory for your server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> force_install_dir ./nanos-world-server\n")),(0,a.kt)("p",null,"Then login anonymously:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> login anonymous\n")),(0,a.kt)("p",null,"Install nanos world server by using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Steam> app_update 1936830\n")),(0,a.kt)("p",null,"This will download the server. After downloading, navigate to your server folder and start your server like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x ./NanosWorldServer.sh\n./NanosWorldServer.sh\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(22698).Z,width:"1479",height:"131"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"tmux")," if you want to run the server even if you're not logged in via SSH. In case it isn't installed in your instance, do ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install tmux"),".")),(0,a.kt)("p",null,"Note that your server failed to communicate with the ",(0,a.kt)("strong",{parentName:"p"},"Master Server"),", this is because we didn\u2019t forward the correct ports yet in your VM, let\u2019s do that in the next step!"),(0,a.kt)("h3",{id:"step-5-forwarding-ports-in-the-google-cloud"},"Step 5: Forwarding Ports in the Google Cloud"),(0,a.kt)("p",null,"To be able to communicate with Master Server or for other players to be able to connect to your server, you must forward your server ports. By default nanos world use ports 7777 (UDP and TCP) and 7778 (UDP)."),(0,a.kt)("p",null,"First go to the left menu bar and select ",(0,a.kt)("strong",{parentName:"p"},"VPC network")," and ",(0,a.kt)("strong",{parentName:"p"},"Firewall"),": "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(63534).Z,width:"428",height:"862"})),(0,a.kt)("p",null,"In that, you will be able to create a new ",(0,a.kt)("strong",{parentName:"p"},"Firewall Rule"),", add the name you want to it, set it to ",(0,a.kt)("strong",{parentName:"p"},"Ingress"),", set source IP: ",(0,a.kt)("strong",{parentName:"p"},"0.0.0.0/0")," and select ",(0,a.kt)("strong",{parentName:"p"},"Specified protocol and ports"),": ",(0,a.kt)("strong",{parentName:"p"},"tcp: 7777")," and ",(0,a.kt)("strong",{parentName:"p"},"udp: 7777-7778"),", and create it.  "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(30754).Z,width:"843",height:"810"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(69881).Z,width:"824",height:"656"})),(0,a.kt)("p",null,"Now you can restart your server and you will see it will communicate properly with Master Server ","(","no warnings anymore",")",": "),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(24934).Z,width:"1048",height:"118"})),(0,a.kt)("admonition",{title:"success!",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"And now you can find it in the ",(0,a.kt)("strong",{parentName:"p"},"Find Servers")," menu!")),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(49334).Z,width:"1627",height:"211"})),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this guide you learnt how easy it is to create a free server for nanos world using Google Cloud! Remember that Google Cloud is a paid service that offers small free tasting services, as nanos world doesn\u2019t need that much processing the Free Tier is enough for basic game modes and to play with friends! Pay attention to the Google Cloud contracts and try to learn out more about it so as not to be caught off guard!"))}g.isMDXComponent=!0},34301:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-01-cacdae0416904ca8516bfb1c73028583.jpg"},55148:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-02-22964444188cef4abc1e065e572e66c9.jpg"},88748:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-03-c913ccf09be95c7afc83f2fba3138c89.jpg"},23310:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-04-ef6fd3a139f6fdcaf0b0c048ba937466.jpg"},12495:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-05-8769279e0793a5f1ff9b7cf3a139fdb0.jpg"},22073:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-06-18fdf2dc7b85c6dc30607a5ccd2ecb89.jpg"},54489:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-07-ea2e5ab36fc3031492e43b727c6cdd7d.jpg"},36003:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-08-904bc8cc170fdf608713c370a68af777.jpg"},94419:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-09-829b77091af81b07c74993bdff23fe60.jpg"},4220:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-10-a4a3a817f567eaedfc02f1c6a47fa78c.jpg"},79789:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-11-df093c38dd3eae78e60b34129d933e62.jpg"},30783:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-12-da19b615609e87a0cb5af86c4a554938.jpg"},22698:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-13-fc5281468bf3521073c3df52ff189885.jpg"},63534:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-14-96e73e8953bc92a27dbf8a072b467b48.jpg"},30754:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-15-651627f9d784eee3c744df233ccc6b6a.jpg"},69881:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-16-84eccca195f632417db1e2b019386815.jpg"},24934:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-17-cd8056811ed179d8b602b099b02a9505.jpg"},49334:function(e,t,o){t.Z=o.p+"assets/images/hosting-4free-18-97a43902f0c176821533cc749024979f.jpg"}}]);