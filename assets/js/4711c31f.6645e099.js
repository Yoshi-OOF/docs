"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8405],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=d(a),k=r,c=g["".concat(s,".").concat(k)]||g[k]||m[k]||o;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88365:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return m}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},s=void 0,d={unversionedId:"core-concepts/server-manual/server-configuration",id:"version-latest/core-concepts/server-manual/server-configuration",title:"Server Configuration",description:"All you need to know to Configure your server!",source:"@site/versioned_docs/version-latest/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/docs/core-concepts/server-manual/server-configuration",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/server-configuration.md",tags:[{label:"hosting",permalink:"/docs/tags/hosting"}],version:"latest",lastUpdatedBy:"Falaxir",lastUpdatedAt:1661249461,formattedLastUpdatedAt:"Aug 23, 2022",sidebarPosition:2,frontMatter:{title:"Server Configuration",description:"All you need to know to Configure your server!",sidebar_position:2,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Server Installation",permalink:"/docs/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface - CLI",permalink:"/docs/core-concepts/server-manual/nanos-world-cli"}},p={},m=[{value:"Server Configuration File",id:"server-configuration-file",level:2},{value:"Settings Detailed",id:"settings-detailed",level:3},{value:"Map &amp; Level",id:"map--level",level:2},{value:"Server Console",id:"server-console",level:2},{value:"Built-in Commands",id:"built-in-commands",level:3},{value:"Custom Commands",id:"custom-commands",level:3},{value:"Command Line Parameters",id:"command-line-parameters",level:2},{value:"One-liner Server Configuration",id:"one-liner-server-configuration",level:3},{value:"Common Console Messages and Errors",id:"common-console-messages-and-errors",level:2},{value:"<code>Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...</code>",id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms",level:4},{value:"<code>Assertion Failed: [...] problem (5002) We don&#39;t have cert, and self-signed certs not allowed...</code>",id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed",level:4},{value:"<code>Lua Stack Error: Should be X, is Y...</code>",id:"lua-stack-error-should-be-x-is-y",level:4}],g={toc:m};function k(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All you need to know to Configure your server!"),(0,o.kt)("h2",{id:"server-configuration-file"},"Server Configuration File"),(0,o.kt)("p",null,"The server Configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," is generated automatically when the server is launched for the first time. This file will always be overridden with the proper pattern after the server is loaded."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"nanos world Config files use ",(0,o.kt)("strong",{parentName:"p"},"TOML")," (Tom\u2019s Obvious, Minimal Language), please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," for more information and syntax.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml\n")),(0,o.kt)("h3",{id:"settings-detailed"},"Settings Detailed"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Setting"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"name"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"description"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Description of the Server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"logo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Image URL to be displayed in the Server List")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"max_players"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max amount of players allowed to join")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"password"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Password to be able to connect")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server IP. We recommend leaving it blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"port"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server main Port and HTTP Port (UDP/TCP)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"query_port"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server query Port (UDP)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"announce"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to announce or not in the Server List")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"tick_rate"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Tick in ms. We recommend leaving it 33")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"log_level"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Which Log level to output")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"game_mode"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/packages-guide#package-types"},"game-mode")," package to load -  you can only load one game-mode at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"loading_screen"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/loading-screen"},"loading-screen")," package to load - you can only load one loading-screen at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"packages"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/core-concepts/packages/packages-guide#package-types"},"script")," packages to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"assets"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional assets to force to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"map"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Which map to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"token"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Token used for authorize downloads through CLI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"banned_ids"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"List of banned nanos account IDs")))),(0,o.kt)("h2",{id:"map--level"},"Map & Level"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(83831).Z,width:"1811",height:"852"})),(0,o.kt)("p",null,"The Map (or Level) is defined in the Server\u2019s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder."),(0,o.kt)("p",null,"nanos world counts on (for now) 4 built-in maps: ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::EmptyMap"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::OceanMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," which can be used in your server without needing to download any Asset Pack."),(0,o.kt)("h2",{id:"server-console"},"Server Console"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(28046).Z,width:"1058",height:"391"})),(0,o.kt)("h3",{id:"built-in-commands"},"Built-in Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"chat [message]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Sends a chat message")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"map [map_path]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the Map, reloads all Packages and reconnect all Players")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"stop")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Stops the server")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package run [package_name] [lua_code]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Runs a code in a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package reload [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reloads a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package reload all")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reloads all packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package unload [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unloads a package")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"package load [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Loads a package")))),(0,o.kt)("h3",{id:"custom-commands"},"Custom Commands"),(0,o.kt)("p",null,"All (non built-in) commands will be sent into an event to the scripting/server-side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Package.Log("Console command received: " .. my_input)\nend)\n')),(0,o.kt)("h2",{id:"command-line-parameters"},"Command Line Parameters"),(0,o.kt)("p",null,"It is possible to override the Server Configuration with Command Line Parameters. Note: this will not write to the Config file."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--description")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server description")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--logo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Logo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--password")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--ip")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--map")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Map to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--port")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--query_port")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Query port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--announce")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If announce in master list")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--game_mode")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server game-mode")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--loading_screen")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server loading-screen")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--packages")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server packages")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--assets")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string list"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server assets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--max_players")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max allowed players")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--save")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If to save the parameters in Config.toml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--profiling")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enables Performance Profiling Logs for debugging")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--auto_download")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Automatically downloads Packages and Assets from Vault if needed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--dedicated_server")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If to start as a Dedicated Server or P2P")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--async_log")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 or 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If to use async or sync logs (async provides better performance) - default is 1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--log_level")),(0,o.kt)("td",{parentName:"tr",align:"left"},"1, 2 or 3"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If to use Normal, Debug or Verbose logs")))),(0,o.kt)("h3",{id:"one-liner-server-configuration"},"One-liner Server Configuration"),(0,o.kt)("p",null,"With Command Line Parameters and ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/server-manual/nanos-world-cli"},"Command Line Interface (CLI)"),", it is also possible to automate the full server installation, here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Installs/Updates the server through SteamCMD\nsteamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n\n# Installs all needed Packages (this will install needed Assets as well)\n./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools\n\n# Starts the server with all configs set\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,o.kt)("p",null,"Another shorter example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Starts the server with all configs set and auto downloads the packages and assets if needed\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,o.kt)("h2",{id:"common-console-messages-and-errors"},"Common Console Messages and Errors"),(0,o.kt)("h4",{id:"server-tick-tooextreme-high-verify-the-server-performance-server-got-stuck-for-xms"},(0,o.kt)("inlineCode",{parentName:"h4"},"Server Tick too/extreme high! Verify the server performance! Server got stuck for Xms...")),(0,o.kt)("p",null,"It means the server got ",(0,o.kt)("strong",{parentName:"p"},"stuck")," for X milliseconds. The warning (",(0,o.kt)("em",{parentName:"p"},"yellow"),") is not something to worry about, but too many messages in ",(0,o.kt)("em",{parentName:"p"},"red"),") could mean your server infrastructure is not that good or your scripting code is not that optimized."),(0,o.kt)("p",null,"Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on."),(0,o.kt)("p",null,"If a single tick takes more than 33 milliseconds, this warning will appear up."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it\'s machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.')),(0,o.kt)("h4",{id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed"},(0,o.kt)("inlineCode",{parentName:"h4"},"Assertion Failed: [...] problem (5002) We don't have cert, and self-signed certs not allowed...")),(0,o.kt)("p",null,"This is an internal problem from Steam Library when you attempt to connect to a server too fast (when it has just started). The server automatically fixes it by retrying the connection, there is ",(0,o.kt)("strong",{parentName:"p"},"nothing to worry about"),"."),(0,o.kt)("h4",{id:"lua-stack-error-should-be-x-is-y"},(0,o.kt)("inlineCode",{parentName:"h4"},"Lua Stack Error: Should be X, is Y...")),(0,o.kt)("p",null,"This is an internal error and ",(0,o.kt)("strong",{parentName:"p"},"should not supposed to happen"),". Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!"))}k.isMDXComponent=!0},83831:function(e,t,a){t.Z=a.p+"assets/images/server-map-bb4747ea1a9ac9805f83bebcc6933cf2.webp"},28046:function(e,t,a){t.Z=a.p+"assets/images/server-069c323cadab182b5b0b9b75d8315bea.webp"}}]);