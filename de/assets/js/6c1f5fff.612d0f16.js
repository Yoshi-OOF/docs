"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2681],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=s(n),k=r,u=g["".concat(d,".").concat(k)]||g[k]||m[k]||i;return n?a.createElement(u,l(l({ref:t},p),{},{components:n})):a.createElement(u,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51216:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={title:"Serverkonfiguration",description:"Alles was du wissen musst, um deinen Server zu konfigurieren!",sidebar_position:2,tags:["hosting"]},d=void 0,s={unversionedId:"core-concepts/server-manual/server-configuration",id:"core-concepts/server-manual/server-configuration",title:"Serverkonfiguration",description:"Alles was du wissen musst, um deinen Server zu konfigurieren!",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/de/docs/next/core-concepts/server-manual/server-configuration",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-configuration.md",tags:[{label:"hosting",permalink:"/de/docs/next/tags/hosting"}],version:"current",sidebarPosition:2,frontMatter:{title:"Serverkonfiguration",description:"Alles was du wissen musst, um deinen Server zu konfigurieren!",sidebar_position:2,tags:["hosting"]},sidebar:"main",previous:{title:"Serverinstallation",permalink:"/de/docs/next/core-concepts/server-manual/server-installation"},next:{title:"Command Line Interface - CLI",permalink:"/de/docs/next/core-concepts/server-manual/nanos-world-cli"}},p={},m=[{value:"Server-Konfigurationsdatei",id:"server-konfigurationsdatei",level:2},{value:"Einstellungen detailliert",id:"einstellungen-detailliert",level:3},{value:"Karte &amp; Level",id:"karte--level",level:2},{value:"Server-Konsole",id:"server-konsole",level:2},{value:"Integrierte Befehle",id:"integrierte-befehle",level:3},{value:"Eigene Befehle",id:"eigene-befehle",level:3},{value:"Parameter der Kommandozeile",id:"parameter-der-kommandozeile",level:2},{value:"One-liner Server Configuration",id:"one-liner-server-configuration",level:3},{value:"Common Console Messages and Errors",id:"common-console-messages-and-errors",level:2},{value:"<code>Server zu stark/extrem hoch! \xdcberpr\xfcfen Sie die Leistung des Servers! Server got stuck for Xms...</code>",id:"server-zu-starkextrem-hoch-\xfcberpr\xfcfen-sie-die-leistung-des-servers-server-got-stuck-for-xms",level:4},{value:"<code>Assertion Failed: [...] problem (5002) We don&#39;t have cert, and self-signed certs not allowed...</code>",id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed",level:4},{value:"<code>Lua Stack Error: Should be X, is Y...</code>",id:"lua-stack-error-should-be-x-is-y",level:4}],g={toc:m};function k(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alles was du wissen musst, um deinen Server zu konfigurieren!"),(0,i.kt)("h2",{id:"server-konfigurationsdatei"},"Server-Konfigurationsdatei"),(0,i.kt)("p",null,"Die Server-Konfigurationsdatei ",(0,i.kt)("inlineCode",{parentName:"p"},"Config.toml")," wird automatisch erzeugt, wenn der Server zum ersten Mal gestartet wird. Diese Datei wird immer mit dem korrekten Muster \xfcberschrieben, nachdem der Server geladen wurde."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"nanos world Config files use ",(0,i.kt)("strong",{parentName:"p"},"TOML")," (Tom\u2019s Obvious, Minimal Language), please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," for more information and syntax.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml\n")),(0,i.kt)("h3",{id:"einstellungen-detailliert"},"Einstellungen detailliert"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Einstellung"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name des Servers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"beschreibung"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Beschreibung des Servers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"logo"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL des Bildes in der Serverliste anzeigen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"max. Spieler"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Max amount of players allowed to join")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"passwort"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Passwort zum Verbinden")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server-IP. Wir empfehlen das leer zu lassen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"port"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server main Port and HTTP Port (UDP/TCP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"query_port"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server query Port (UDP)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"ank\xfcndigen"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Ob in der Server-Liste angek\xfcndigt werden soll oder nicht")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"tick_rate"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Tick in ms. Wir empfehlen es 33 zu belassen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"log_level"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Auszugebendes Log Level")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"game_mode"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/core-concepts/packages/packages-guide#package-types"},"game-mode")," package to load -  you can only load one game-mode at once.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"lade_screen"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/core-concepts/packages/loading-screen"},"loading-screen")," package to load - you can only load one loading-screen at once.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"pakete"))),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/de/docs/next/core-concepts/packages/packages-guide#package-types"},"script")," packages to load")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"verm\xf6gen"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Zus\xe4tzliche zu ladende Assets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"kartographie"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Welche Karte zu laden")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"token"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Token used for authorize downloads through CLI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"banned_ids"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of banned nanos account IDs")))),(0,i.kt)("h2",{id:"karte--level"},"Karte & Level"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(76155).Z,width:"1811",height:"852"})),(0,i.kt)("p",null,"The Map (or Level) is defined in the Server\u2019s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets/")," folder."),(0,i.kt)("p",null,"nanos world counts on (for now) 4 built-in maps: ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::EmptyMap"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::OceanMap")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," which can be used in your server without needing to download any Asset Pack."),(0,i.kt)("h2",{id:"server-konsole"},"Server-Konsole"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(12177).Z,width:"1058",height:"393"})),(0,i.kt)("h3",{id:"integrierte-befehle"},"Integrierte Befehle"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Befehl"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"chat [message]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sendet eine Chat-Nachricht")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"map [map_path]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Changes the Map, reloads all Packages and reconnect all Players")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"stoppen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Stoppt den Server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"package run [package_name] [lua_code]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"F\xfchrt einen Code in einem Paket aus")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Paket neu laden [package_name]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Lade ein Paket neu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"alle neu laden")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Alle Pakete neu laden")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entlade Paket [package_name]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Entlade ein Paket")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Paket laden [package_name]")),(0,i.kt)("td",{parentName:"tr",align:"left"},"L\xe4dt ein Paket")))),(0,i.kt)("h3",{id:"eigene-befehle"},"Eigene Befehle"),(0,i.kt)("p",null,"All (non built-in) commands will be sent into an event to the scripting/server-side:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Package.Log("Console command received: " .. my_input)\nEnde)\n')),(0,i.kt)("h2",{id:"parameter-der-kommandozeile"},"Parameter der Kommandozeile"),(0,i.kt)("p",null,"Die Server-Konfiguration kann mit Befehlszeilenparametern \xfcberschrieben werden. Hinweis: Dies wird nicht in die Config-Datei schreiben."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Werttyp"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--Name")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Servername")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--Beschreibung")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serverbeschreibung")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--logo")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Logo")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--passwort")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serverpasswort")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--ip")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server IP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--Karte")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Karte zum Laden")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--Port")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serverport")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--query_port")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server Query port")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--k\xfcndigen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wenn Ank\xfcndigungen in der Hauptliste")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--game_mode")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server game-mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--loading_screen")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server loading-screen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--packages")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string-Liste"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Serverpakete")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--assets")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string-Liste"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server assets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--token")),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Server authorization token")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--Maximale Spieler")),(0,i.kt)("td",{parentName:"tr",align:"left"},"number"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximal erlaubte Spieler")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--speichern")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wenn die Parameter in Config.toml gespeichert werden sollen")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--profiling")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enables Performance Profiling Logs for debugging")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--auto_download")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Automatically downloads Packages and Assets from Vault if needed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--dedicated_server")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If to start as a Dedicated Server or P2P")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--async_log")),(0,i.kt)("td",{parentName:"tr",align:"left"},"0 oder 1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"If to use async or sync logs (async provides better performance) - default is 1")))),(0,i.kt)("h3",{id:"one-liner-server-configuration"},"One-liner Server Configuration"),(0,i.kt)("p",null,"With Command Line Parameters and ",(0,i.kt)("a",{parentName:"p",href:"/de/docs/next/core-concepts/server-manual/nanos-world-cli"},"Command Line Interface (CLI)"),", it is also possible to automate the full server installation, here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Installs/Updates the server through SteamCMD\nsteamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1936830 -beta bleeding-edge" validate +quit\n\n# Installs all needed Packages (this will install needed Assets as well)\n./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools\n\n# Starts the server with all configs set\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,i.kt)("p",null,"Another shorter example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Starts the server with all configs set and auto downloads the packages and assets if needed\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,i.kt)("h2",{id:"common-console-messages-and-errors"},"Common Console Messages and Errors"),(0,i.kt)("h4",{id:"server-zu-starkextrem-hoch-\xfcberpr\xfcfen-sie-die-leistung-des-servers-server-got-stuck-for-xms"},(0,i.kt)("inlineCode",{parentName:"h4"},"Server zu stark/extrem hoch! \xdcberpr\xfcfen Sie die Leistung des Servers! Server got stuck for Xms...")),(0,i.kt)("p",null,"It means the server got ",(0,i.kt)("strong",{parentName:"p"},"stuck")," for X milliseconds. The warning (",(0,i.kt)("em",{parentName:"p"},"yellow"),") is not something to worry about, but too many messages in ",(0,i.kt)("em",{parentName:"p"},"red"),") could mean your server infrastructure is not that good or your scripting code is not that optimized."),(0,i.kt)("p",null,"Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on."),(0,i.kt)("p",null,"If a single tick takes more than 33 milliseconds, this warning will appear up."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it\'s machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.')),(0,i.kt)("h4",{id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed"},(0,i.kt)("inlineCode",{parentName:"h4"},"Assertion Failed: [...] problem (5002) We don't have cert, and self-signed certs not allowed...")),(0,i.kt)("p",null,"This is an internal problem from Steam Library when you attempt to connect to a server too fast (when it has just started). The server automatically fixes it by retrying the connection, there is ",(0,i.kt)("strong",{parentName:"p"},"nothing to worry about"),"."),(0,i.kt)("h4",{id:"lua-stack-error-should-be-x-is-y"},(0,i.kt)("inlineCode",{parentName:"h4"},"Lua Stack Error: Should be X, is Y...")),(0,i.kt)("p",null,"This is an internal error and ",(0,i.kt)("strong",{parentName:"p"},"should not supposed to happen"),". Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!"))}k.isMDXComponent=!0},76155:function(e,t,n){t.Z=n.p+"assets/images/server-map-0b0745e6fb974d2c18d5b386cd47070f.jpg"},12177:function(e,t,n){t.Z=n.p+"assets/images/server-326a9aac665826d697968ef362407a58.jpg"}}]);