"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[3615],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,k=c["".concat(d,".").concat(g)]||c[g]||m[g]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},56464:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={description:"Tudo que voc\xea precisa saber para configurar seu servidor!",sidebar_position:2,tags:["hospedagem"]},d="Configura\xe7\xe3o Servidor",s={unversionedId:"core-concepts/server-manual/server-configuration",id:"core-concepts/server-manual/server-configuration",title:"Configura\xe7\xe3o Servidor",description:"Tudo que voc\xea precisa saber para configurar seu servidor!",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/core-concepts/server-manual/server-configuration.md",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/server-configuration",permalink:"/pt-BR/docs/next/core-concepts/server-manual/server-configuration",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/core-concepts/server-manual/server-configuration.md",tags:[{label:"hospedagem",permalink:"/pt-BR/docs/next/tags/hospedagem"}],version:"current",sidebarPosition:2,frontMatter:{description:"Tudo que voc\xea precisa saber para configurar seu servidor!",sidebar_position:2,tags:["hospedagem"]},sidebar:"main",previous:{title:"Instala\xe7\xe3o do Servidor",permalink:"/pt-BR/docs/next/core-concepts/server-manual/server-installation"},next:{title:"Interface de Linha de Comando",permalink:"/pt-BR/docs/next/core-concepts/server-manual/nanos-world-cli"}},p=[{value:"Arquivo de configura\xe7\xe3o",id:"arquivo-de-configura\xe7\xe3o",children:[{value:"Configura\xe7\xf5es Detalhadas",id:"configura\xe7\xf5es-detalhadas",children:[],level:3}],level:2},{value:"Mapa &amp; N\xedvel",id:"mapa--n\xedvel",children:[],level:2},{value:"Console do Servidor",id:"console-do-servidor",children:[{value:"Comandos Integrados",id:"comandos-integrados",children:[],level:3},{value:"Comandos personalizados",id:"comandos-personalizados",children:[],level:3}],level:2},{value:"Par\xe2metros da linha de comando",id:"par\xe2metros-da-linha-de-comando",children:[{value:"One-liner Server Configuration",id:"one-liner-server-configuration",children:[],level:3}],level:2},{value:"Common Console Messages and Errors",id:"common-console-messages-and-errors",children:[{value:"<code>Clique no servidor tamb\xe9m/extrema alta! Verifique a performance do servidor! Server got stuck for Xms...</code>",id:"clique-no-servidor-tamb\xe9mextrema-alta-verifique-a-performance-do-servidor-server-got-stuck-for-xms",children:[],level:4},{value:"<code>Assertion Failed: [...] problem (5002) We don&#39;t have cert, and self-signed certs not allowed...</code>",id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed",children:[],level:4},{value:"<code>Lua Stack Error: Should be X, is Y...</code>",id:"lua-stack-error-should-be-x-is-y",children:[],level:4}],level:2}],m={toc:p};function c(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configura\xe7\xe3o-servidor"},"Configura\xe7\xe3o Servidor"),(0,o.kt)("p",null,"Tudo que voc\xea precisa saber para configurar seu servidor!"),(0,o.kt)("h2",{id:"arquivo-de-configura\xe7\xe3o"},"Arquivo de configura\xe7\xe3o"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"nanos world Config files use ",(0,o.kt)("strong",{parentName:"p"},"TOML")," (Tom\u2019s Obvious, Minimal Language), please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/toml-lang/toml"},"https://github.com/toml-lang/toml")," for more information and syntax."))),(0,o.kt)("p",null,"O arquivo de configura\xe7\xe3o do servidor ",(0,o.kt)("inlineCode",{parentName:"p"},"Config.toml")," \xe9 gerado automaticamente quando o servidor \xe9 iniciado pela primeira vez. Este arquivo ser\xe1 sempre substitu\xeddo com o padr\xe3o adequado depois que o servidor \xe9 carregado."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:"reference",reference:!0},"https://github.com/nanos-world/nanos-world-server/blob/main/Config.toml\n")),(0,o.kt)("h3",{id:"configura\xe7\xf5es-detalhadas"},"Configura\xe7\xf5es Detalhadas"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Configura\xe7\xe3o"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Nome"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Nome do Servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Descri\xe7\xe3o"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Descri\xe7\xe3o do Servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Logotipo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL da imagem a ser exibida na lista de servidores")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"alto_jogadores"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Max amount of players allowed to join")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Senha"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Senha para conectar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ip"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"IP do servidor. Recomendamos deixar em branco")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Porta"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server main Port and HTTP Port (UDP/TCP)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"query_port"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server query Port (UDP)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"anunciar"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Se deseja anunciar ou n\xe3o na Lista de Servidores")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"\xedndice_de"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Marca\xe7\xe3o do Servidor em ms. N\xf3s recomendamos sair disso 33")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"n\xedvel_log"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Qual n\xedvel de log para a sa\xedda")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"modo_jogo"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#package-types"},"game-mode")," package to load -  you can only load one game-mode at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"carregando_tela"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/packages/loading-screen"},"loading-screen")," package to load - you can only load one loading-screen at once.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"pacotes"))),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/pt-BR/docs/next/core-concepts/packages/packages-guide#package-types"},"script")," packages to load")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"m\xeddias"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Recursos adicionais para carregar for\xe7adamente")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"Mapa"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Qual mapa carregar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"token"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Token used for authorize downloads through CLI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},(0,o.kt)("inlineCode",{parentName:"strong"},"ips"))),(0,o.kt)("td",{parentName:"tr",align:"left"},"Lista de IPs banidos")))),(0,o.kt)("h2",{id:"mapa--n\xedvel"},"Mapa & N\xedvel"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(76273).Z,width:"1811",height:"852"})),(0,o.kt)("p",null,"The Map (or Level) is defined in the Server\u2019s config file, this level will be loaded when the player joins the server and the Path is supposed for be or a built-in asset or an asset which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/")," folder."),(0,o.kt)("p",null,"nanos world counts on (for now) 2 built-in maps: ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::BlankMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nanos-world::TestingMap")," which can be used in your server without needing to download any Asset Pack."),(0,o.kt)("h2",{id:"console-do-servidor"},"Console do Servidor"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52213).Z,width:"1058",height:"393"})),(0,o.kt)("h3",{id:"comandos-integrados"},"Comandos Integrados"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Comando"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"chat [message]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Envia uma mensagem de bate-papo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"map [map_path]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Changes the Map, reloads all Packages and reconnect all Players")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"Parar")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Interrompe o servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"executar pacote [package_name] [lua_code]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Executa um c\xf3digo em um pacote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"recarregar pacote [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Recarrega um pacote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"recarregar todos os pacotes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Recarrega todos os pacotes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"descarga de pacote [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Descarrega um pacote")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"carga do pacote [package_name]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Carrega um pacote")))),(0,o.kt)("h3",{id:"comandos-personalizados"},"Comandos personalizados"),(0,o.kt)("p",null,"All (non built-in) commands will be sent into an event to the scripting/server-side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="Server/Index.lua"',title:'"Server/Index.lua"'},'Server.Subscribe("Console", function(my_input)\n    Package.Log("Comando de Console recebido: " .. meu_input)\nfim)\n')),(0,o.kt)("h2",{id:"par\xe2metros-da-linha-de-comando"},"Par\xe2metros da linha de comando"),(0,o.kt)("p",null,"\xc9 poss\xedvel substituir a configura\xe7\xe3o do servidor com par\xe2metros de linha de comando. Nota: isto n\xe3o ir\xe1 gravar no arquivo de configura\xe7\xe3o."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Tipo de Valor"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--name")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Nome do servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--descri\xe7\xe3o")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Descri\xe7\xe3o do servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--logo")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Logo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--senha")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Senha do servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--ip")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IP do Servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"-mapa")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Mapear para carregar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--Porta")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Porta do servidor")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--query_port")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server Query port")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--anunciar")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 ou 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Se anunciar na lista mestra")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--game_mode")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server game-mode")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--loading_screen")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server loading-screen")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--pacotes")),(0,o.kt)("td",{parentName:"tr",align:"left"},"lista de strings"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pacotes de servidores")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--assets")),(0,o.kt)("td",{parentName:"tr",align:"left"},"lista de strings"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server assets")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--token")),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Server authorization token")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--max_players")),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"M\xe1ximo de jogadores permitidos")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--salvar")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 ou 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Se salvar os par\xe2metros em Config.toml")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--profiling")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 ou 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Enables Performance Profiling Logs for debugging")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"--auto_download")),(0,o.kt)("td",{parentName:"tr",align:"left"},"0 ou 1"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Automatically downloads Packages and Assets from Vault if needed")))),(0,o.kt)("h3",{id:"one-liner-server-configuration"},"One-liner Server Configuration"),(0,o.kt)("p",null,"With Command Line Parameters and ",(0,o.kt)("a",{parentName:"p",href:"/pt-BR/docs/next/core-concepts/server-manual/nanos-world-cli"},"Command Line Interface (CLI)"),", it is also possible to automate the full server installation, here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Installs/Updates the server through SteamCMD\nsteamcmd +force_install_dir /home/nanos-world-server +login anonymous +app_update "1686460 -beta bleeding-edge" validate +quit\n\n# Installs all needed Packages (this will install needed Assets as well)\n./NanosWorldServer.sh --cli install package sandbox battlefield-kill-ui ts-fireworks-tools\n\n# Starts the server with all configs set\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,o.kt)("p",null,"Another shorter example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell/Linux"',title:'"Shell/Linux"'},'# Starts the server with all configs set and auto downloads the packages and assets if needed\n./NanosWorldServer.sh --name "nanos world Amazing Sandbox" --description "Awesome Sandbox Server" --map "nanos-world::TestingMap" --gamemode "sandbox" --packages "battlefield-kill-ui,ts-fireworks-tools" --port 7777 --query_port 7778 --max_players 32 --auto_download 1 --logo "https://i.imgur.com/U1rZp5v.png"\n')),(0,o.kt)("h2",{id:"common-console-messages-and-errors"},"Common Console Messages and Errors"),(0,o.kt)("h4",{id:"clique-no-servidor-tamb\xe9mextrema-alta-verifique-a-performance-do-servidor-server-got-stuck-for-xms"},(0,o.kt)("inlineCode",{parentName:"h4"},"Clique no servidor tamb\xe9m/extrema alta! Verifique a performance do servidor! Server got stuck for Xms...")),(0,o.kt)("p",null,"It means the server got ",(0,o.kt)("strong",{parentName:"p"},"stuck")," for X milliseconds. The warning (",(0,o.kt)("em",{parentName:"p"},"yellow"),") is not something to worry about, but too many messages in ",(0,o.kt)("em",{parentName:"p"},"red"),") could mean your server infrastructure is not that good or your scripting code is not that optimized."),(0,o.kt)("p",null,"Usually the server runs at 33 ticks per second (or the value configured at Config.toml), the server runs in an infinite loop in that frequency, and inside that loop all server operations are executed, such as receiving and sending network packets, triggering lua events, executing functions or callbacks, and so on."),(0,o.kt)("p",null,"If a single tick takes more than 33 milliseconds, this warning will appear up."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'In some shared VPS, this warning may appear up more frequently due how the VPS handles the scaling of it\'s machines, sometimes the provider may think your VPS is "idle" (due nanos world server using extremely low CPU) and may decrease your processing power, causing this warning show up as well.'))),(0,o.kt)("h4",{id:"assertion-failed--problem-5002-we-dont-have-cert-and-self-signed-certs-not-allowed"},(0,o.kt)("inlineCode",{parentName:"h4"},"Assertion Failed: [...] problem (5002) We don't have cert, and self-signed certs not allowed...")),(0,o.kt)("p",null,"This is an internal problem from Steam Library when you attempt to connect to a server too fast (when it has just started). The server automatically fixes it by retrying the connection, there is ",(0,o.kt)("strong",{parentName:"p"},"nothing to worry about"),"."),(0,o.kt)("h4",{id:"lua-stack-error-should-be-x-is-y"},(0,o.kt)("inlineCode",{parentName:"h4"},"Lua Stack Error: Should be X, is Y...")),(0,o.kt)("p",null,"This is an internal error and ",(0,o.kt)("strong",{parentName:"p"},"should not supposed to happen"),". Those are guards set around our Lua Scripting implementation to prevent bad things from happening. If this error appears it means a implementation bug happened. Please communicate immediately with the devs, and if possible how to reproduce that!"))}c.isMDXComponent=!0},76273:function(e,t,a){t.Z=a.p+"assets/images/server-map-0b0745e6fb974d2c18d5b386cd47070f.jpg"},52213:function(e,t,a){t.Z=a.p+"assets/images/server-326a9aac665826d697968ef362407a58.jpg"}}]);