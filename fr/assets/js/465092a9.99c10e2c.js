"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1989],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),r=a(86010),l="tabItem_Ymn6";function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(83117),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),c=a(12466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,o=e.lazy,p=e.block,m=e.defaultValue,v=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=v?v:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.l)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==N&&!h.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,x=(0,r.useState)(N),T=x[0],E=x[1],I=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=w[f];null!=P&&P!==T&&h.some((function(e){return e.value===P}))&&E(P)}var A=function(e){var t=e.currentTarget,a=I.indexOf(t),n=h[a].value;n!==T&&(O(t),E(n),null!=f&&C(f,String(n)))},L=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=I.indexOf(e.currentTarget)+1;a=null!=(n=I[r])?n:I[0];break;case"ArrowLeft":var l,o=I.indexOf(e.currentTarget)-1;a=null!=(l=I[o])?l:I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},k)},h.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:L,onFocus:A,onClick:A},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},83685:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(65488),i=a(85162),s=["components"],c={title:"Command Line Interface",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},u=void 0,d={unversionedId:"core-concepts/server-manual/nanos-world-cli",id:"version-latest/core-concepts/server-manual/nanos-world-cli",title:"Command Line Interface",description:"How to use nanos world CLI to install packages and update the server.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",sourceDirName:"core-concepts/server-manual",slug:"/core-concepts/server-manual/nanos-world-cli",permalink:"/fr/docs/core-concepts/server-manual/nanos-world-cli",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/core-concepts/server-manual/nanos-world-cli.mdx",tags:[{label:"hosting",permalink:"/fr/docs/tags/hosting"}],version:"latest",sidebarPosition:3,frontMatter:{title:"Command Line Interface",description:"How to use nanos world CLI to install packages and update the server.",sidebar_position:3,tags:["hosting"]},sidebar:"version-latest/main",previous:{title:"Configuration du serveur",permalink:"/fr/docs/core-concepts/server-manual/server-configuration"},next:{title:"Game Panels",permalink:"/fr/docs/core-concepts/server-manual/game-panels"}},p={},m=[{value:"Starting the CLI",id:"starting-the-cli",level:2},{value:"CLI Commands",id:"cli-commands",level:2},{value:"One-Liner CLI",id:"one-liner-cli",level:2}],v={toc:m};function f(e){var t=e.components,c=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},v,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"How to use nanos world CLI to install packages and update the server."),(0,l.kt)("p",null,"nanos world provides a CLI ","(","Command Line Interface",")"," to help updating the server, packages and assets and also downloading them!"),(0,l.kt)("h2",{id:"starting-the-cli"},"Starting the CLI"),(0,l.kt)("p",null,"To run the cli, start the server with ",(0,l.kt)("inlineCode",{parentName:"p"},"--cli")," argument:"),(0,l.kt)(o.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cmd",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli\n")))),(0,l.kt)("p",null," After started, if you type ",(0,l.kt)("inlineCode",{parentName:"p"},"help")," you can see all the available commands:"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(96999).Z,width:"890",height:"171"})),(0,l.kt)("h2",{id:"cli-commands"},"CLI Commands"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Commands"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"install package [PACKAGE_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"update package [PACKAGE_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update Packages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"install assets [ASSET_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Install Asset Packs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"update assets [ASSET_NAMES...]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update Asset Packs")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"add package [PACKAGE_PATH]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a new Package in a interactive way")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"add assets [ASSET_PATH]")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a new Asset Pack in a interactive way")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"check")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Check for Updates")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"help")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display all Commands")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"stop")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Stops the CLI")))),(0,l.kt)("h2",{id:"one-liner-cli"},"One-Liner CLI"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is also possible to run the CLI in a non-interactive mode, just run the command together after the ",(0,l.kt)("inlineCode",{parentName:"p"},"--cli"),"."))),(0,l.kt)(o.Z,{defaultValue:"cmd",values:[{label:"Windows",value:"cmd"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"cmd",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer.exe --cli update package sandbox\n"))),(0,l.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./NanosWorldServer --cli update package sandbox\n")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You can also install/update several Packages/Assets in a single command, separating them by spaces:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"install package sandbox battlefield-kill-ui\n")))))}f.isMDXComponent=!0},96999:function(e,t,a){t.Z=a.p+"assets/images/cli-01-9d9f96b3e580babfbfa6cf6ed4416040.jpg"}}]);