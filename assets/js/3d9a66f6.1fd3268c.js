"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,m=g["".concat(l,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Loading Screen",description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},l=void 0,c={unversionedId:"core-concepts/packages/loading-screen",id:"core-concepts/packages/loading-screen",title:"Loading Screen",description:"Custom Loading Screen for your servers",source:"@site/docs/core-concepts/packages/loading-screen.md",sourceDirName:"core-concepts/packages",slug:"/core-concepts/packages/loading-screen",permalink:"/docs/next/core-concepts/packages/loading-screen",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/packages/loading-screen.md",tags:[{label:"scripting",permalink:"/docs/next/tags/scripting"},{label:"ui",permalink:"/docs/next/tags/ui"},{label:"webui",permalink:"/docs/next/tags/webui"},{label:"packages",permalink:"/docs/next/tags/packages"}],version:"current",lastUpdatedBy:"vugi99",lastUpdatedAt:1662904739,formattedLastUpdatedAt:"Sep 11, 2022",sidebarPosition:1,frontMatter:{title:"Loading Screen",description:"Custom Loading Screen for your servers",sidebar_position:1,tags:["scripting","ui","webui","packages"],keywords:["loading","screen","package","html","webui"]},sidebar:"main",previous:{title:"Packages Guide",permalink:"/docs/next/core-concepts/packages/packages-guide"},next:{title:"Classes Guide",permalink:"/docs/next/core-concepts/scripting/classes-guide"}},p={},d=[{value:"Creating a Loading Screen",id:"creating-a-loading-screen",level:2},{value:"Getting Load/Download Progress",id:"getting-loaddownload-progress",level:3},{value:"Event <code>UpdateScreen</code>",id:"event-updatescreen",level:4},{value:"Player Information",id:"player-information",level:3},{value:"Stop Menu Music",id:"stop-menu-music",level:3},{value:"Configuring your server to use the Loading Screen",id:"configuring-your-server-to-use-the-loading-screen",level:2}],g={toc:d};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In nanos world it is possible to add a customized and dynamic Loading Screen to your Server using ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/scripting-reference/classes/webui"},"WebUI"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64489).Z,width:"1919",height:"1079"})),(0,o.kt)("h2",{id:"creating-a-loading-screen"},"Creating a Loading Screen"),(0,o.kt)("p",null,"For that, you will need to create a new Package of type ",(0,o.kt)("a",{parentName:"p",href:"#package-types"},"loading-screen"),", and add your HTML/CSS/JS files into the Package's root folder. Your primary HTML file should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),". It will look like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Packages/\n\u2514\u2500\u2500 my-loading-screen/\n    \u251c\u2500\u2500 Package.toml\n    \u251c\u2500\u2500 index.html\n    \u251c\u2500\u2500 style.css\n    \u2514\u2500\u2500 ...\n")),(0,o.kt)("h3",{id:"getting-loaddownload-progress"},"Getting Load/Download Progress"),(0,o.kt)("p",null,"To be able to display dynamic information in the screen, you can listen to the Event ",(0,o.kt)("inlineCode",{parentName:"p"},"UpdateScreen")," ","(","which will trigger every few ms",")",":"),(0,o.kt)("h4",{id:"event-updatescreen"},"Event ",(0,o.kt)("inlineCode",{parentName:"h4"},"UpdateScreen")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"message"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display the current state ","(","loading, validating, downloading...",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"message_secondary"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Display the current asset/file being loaded or downloaded")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current small progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small_total"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max small progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Current progress")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_total"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max progress value")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"current_stage"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"The current stage of the load ","(",(0,o.kt)("inlineCode",{parentName:"td"},"loading"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"downloading"),")")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"TIP"),": You can use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress"))," and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_total"))," for filling up the main loading bar, and ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"progress_small"))," for a small/sub loading bar.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Always use ",(0,o.kt)("inlineCode",{parentName:"p"},"progress / progress_total")," for getting the current ",(0,o.kt)("inlineCode",{parentName:"p"},"%")," percentage, as progress","_","total can represent the total amount of files being downloaded for example.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Packages/my-loading-screen/index.js"',title:'"Packages/my-loading-screen/index.js"'},'Events.Subscribe("UpdateScreen", function(message, message_secondary, progress_small, progress_small_total, progress, progress_total, current_stage) {\n    // Update your HTML here\n});\n')),(0,o.kt)("h3",{id:"player-information"},"Player Information"),(0,o.kt)("p",null,"Also, it is possible to fetch Player\u2019s information by accessing a global variable called LoadingScreen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var LoadingScreen = {\n  server_ip,\n  server_name,\n  server_description,\n  server_port,\n  player_nanos_id,\n  player_nanos_username\n};\n")),(0,o.kt)("h3",{id:"stop-menu-music"},"Stop Menu Music"),(0,o.kt)("p",null,"It is possible to turn off the built-in menu music by calling an event from Loading Screen JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Events.Call("StopMenuMusic")\n')),(0,o.kt)("h2",{id:"configuring-your-server-to-use-the-loading-screen"},"Configuring your server to use the Loading Screen"),(0,o.kt)("p",null,"After creating your loading-screen package, you will need to configure your server to load it in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/core-concepts/server-manual/server-configuration#server-configuration-file"},"Config.toml"),". Just set the setting ",(0,o.kt)("inlineCode",{parentName:"p"},"loading_screen")," to your Package's folder name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'# loading-screen package to load (the loading screen will be displayed when players join your server)\nloading_screen = "my-loading-screen"\n')))}u.isMDXComponent=!0},64489:function(e,t,n){t.Z=n.p+"assets/images/loading-screen-cb28559615ffd1f2db10366c83d588a8.webp"}}]);