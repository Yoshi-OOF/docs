"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[8160],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87469:function(e,t,n){n.d(t,{YS:function(){return i},SM:function(){return s},Yb:function(){return d},aj:function(){return g},rt:function(){return h},Ut:function(){return v},PZ:function(){return y},p2:function(){return b}});n(83117),n(80102),n(67294);var r=n(3905),a=n(80907),o=function(){return(0,a.zu)().path},i=function(e){var t=e.title,n=e.description,a=e.href,i=e.image_src;return(0,r.kt)("a",{class:"card-link",href:a.startsWith("http")?a:o()+"/"+a},(0,r.kt)("img",{src:i||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,t),(0,r.kt)("p",null,n))},s=function(e){var t=e.children,n=e.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:o()+"/"+n},t,(0,r.kt)("span",null,n))},c=function(e,t){return(0,r.kt)("a",{class:"authority-availability",href:o()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:e,title:t}))},u=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#"+e.toLowerCase()},e)},l=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/utility-classes/"+(t||e.toLowerCase())},e)},p=function(e,t){return(0,r.kt)("a",{href:o()+"/scripting-reference/classes/"+(t||e.toLowerCase())},e)},d=function(e){var t=e.children;return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/enums#"+t.toLowerCase(),title:t+" Enum (number)"},t)},m=function(e){return(0,r.kt)("a",{href:o()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},e)},f=function(e){return(0,r.kt)("a",{href:o()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},e)},g={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},h={Number:function(){return u("number")},String:function(){return u("string")},Boolean:function(){return u("boolean")},Table:function(){return u("table")},Iterator:function(){return u("iterator")},Any:function(){return u("any")},Function:function(){return u("function")},Nil:function(){return u("nil")}},v={Vector:function(){return l("Vector")},Rotator:function(){return l("Rotator")},Color:function(){return l("Color")},Quat:function(){return l("Quat","quaternion")},Vector2D:function(){return l("Vector2D","vectortwod")}},y={Actor:function(){return p("Actor","base-classes/actor")},Paintable:function(){return p("Paintable","base-classes/paintable")},Pickable:function(){return p("Pickable","base-classes/pickable")},Cable:function(){return p("Cable")},Character:function(){return p("Character")},File:function(){return p("File")},Grenade:function(){return p("Grenade")},Melee:function(){return p("Melee")},Light:function(){return p("Light")},Particle:function(){return p("Particle")},Player:function(){return p("Player")},Prop:function(){return p("Prop")},Sound:function(){return p("Sound")},SceneCapture:function(){return p("SceneCapture","scene-capture")},StaticMesh:function(){return p("StaticMesh","static-mesh")},TextRender:function(){return p("TextRender","text-render")},Trigger:function(){return p("Trigger")},Vehicle:function(){return p("Vehicle")},Weapon:function(){return p("Weapon")},WebUI:function(){return p("WebUI")}},b={StaticMesh:function(){return m("StaticMesh Asset")},SkeletalMesh:function(){return m("SkeletalMesh Asset")},Animation:function(){return m("Animation Asset")},Particle:function(){return m("Particle Asset")},Material:function(){return m("Material Asset")},Map:function(){return m("Map Asset")},Sound:function(){return f("Sound Asset or Special Path")},Image:function(){return f("Image Special Path")},HTML:function(){return f("HTML Special Path")}}},41462:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(87469),s=["components"],c={description:"Como armazenar e recuperar dados persistentes do disco usando o sistema interno",tags:["script"]},u="Dados persistentes",l={unversionedId:"core-concepts/scripting/persistent-data",id:"version-latest/core-concepts/scripting/persistent-data",isDocsHomePage:!1,title:"Dados persistentes",description:"Como armazenar e recuperar dados persistentes do disco usando o sistema interno",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-latest/core-concepts/scripting/persistent-data.mdx",sourceDirName:"core-concepts/scripting",slug:"/core-concepts/scripting/persistent-data",permalink:"/pt-BR/docs/core-concepts/scripting/persistent-data",editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/scripting/persistent-data.mdx",tags:[{label:"script",permalink:"/pt-BR/docs/tags/script"}],version:"latest",frontMatter:{description:"Como armazenar e recuperar dados persistentes do disco usando o sistema interno",tags:["script"]},sidebar:"version-latest/main",previous:{title:"Interacting with the Sun",permalink:"/pt-BR/docs/core-concepts/scripting/interacting-with-the-sun"},next:{title:"M\xeddias",permalink:"/pt-BR/docs/core-concepts/assets"}},p=[{value:"Formato do arquivo",id:"formato-do-arquivo",children:[],level:2},{value:"Armazenando e Recuperando dados",id:"armazenando-e-recuperando-dados",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dados-persistentes"},"Dados persistentes"),(0,o.kt)("p",null,"Como armazenar e recuperar dados persistentes do disco usando o sistema integrado."),(0,o.kt)("p",null,"No mundo do nanos \xe9 poss\xedvel armazenar e recuperar dados de disco com fun\xe7\xf5es simples."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\xc9 poss\xedvel armazenar dados persistentes em ambos ",(0,o.kt)("strong",{parentName:"p"},"Cliente")," e ",(0,o.kt)("strong",{parentName:"p"},"Servidor"),"!"))),(0,o.kt)("h2",{id:"formato-do-arquivo"},"Formato do arquivo"),(0,o.kt)("p",null,"Os dados persistentes s\xe3o armazenados automaticamente no formato ",(0,o.kt)("strong",{parentName:"p"},"TOML")," no arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentData.toml")," dentro da sua pasta do pacote / . Este arquivo s\xf3 \xe9 criado se voc\xea chamar ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.SetPersistentData()"),"."),(0,o.kt)("h2",{id:"armazenando-e-recuperando-dados"},"Armazenando e Recuperando dados"),(0,o.kt)("p",null,"Todos os ",(0,o.kt)("strong",{parentName:"p"},"arquivos")," Persistentes s\xe3o carregados automaticamente quando o pacote \xe9 carregado e armazenado na mem\xf3ria. Voc\xea pode facilmente acessar todo o arquivo com o m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"Package.GetPersistentData()"),"."),(0,o.kt)("p",null,"Para armazenar dados, voc\xea precisar\xe1 passar um valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"chave")," , que ir\xe1 armazenar ",(0,o.kt)(i.rt.Any,null)," valor de isca na chave."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local minha_table = {\n    meu_id = 123,\n    meu_data_02 = "dadosa"\n}\n\nPacote. etPersistentData("awesome_table", my_table)\n\n-- PersistentData.toml ser\xe1:\n-- awesome_table = {my_id = 123, meu_data_02 = "data"}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"tabela_local = Pacote.GetPersistentData().awesome_table\n\nPacote.Log(minha_table.my_id)\n\n-- Ir\xe1 imprimir:\n-- 123\n")))}m.isMDXComponent=!0}}]);