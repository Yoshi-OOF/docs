"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7571],{3905:function(t,e,s){s.d(e,{Zo:function(){return l},kt:function(){return m}});var r=s(67294);function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e){if(null==t)return{};var s,r,a=function(t,e){if(null==t)return{};var s,r,a={},n=Object.keys(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||(a[s]=t[s]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)s=n[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),s=e;return t&&(s="function"==typeof t?t(e):i(i({},e),t)),s},l=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var s=t.components,a=t.mdxType,n=t.originalType,o=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=p(s),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||n;return s?r.createElement(f,i(i({ref:e},l),{},{components:s})):r.createElement(f,i({ref:e},l))}));function m(t,e){var s=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=s.length,i=new Array(n);i[0]=d;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var p=2;p<n;p++)i[p]=s[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},94460:function(t,e,s){s.r(e),s.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=s(83117),a=s(80102),n=(s(67294),s(3905)),i=JSON.parse('{"name":"Assets","description":"Retrieve Assets Data from Asset Packs.","authority":"both","static_functions":[{"return":{"type":"table[]","description":"in the format <code>[{Name, Path, Author, Version}, ...]</code>"},"name":"GetAssetPacks","description":"Gets a list containing information about all loaded Asset Packs","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetAnimations","description":"Gets a list containing all Animation Assets Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetMaps","description":"Gets a list containing all Map Asset Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetMaterials","description":"Gets a list containing all Materials Asset Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetParticles","description":"Gets a list containing all Particle Assets Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetSounds","description":"Gets a list containing all Sound Assets Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetSkeletalMeshes","description":"Gets a list containing all Skeletal Mesh Asset Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetStaticMeshes","description":"Gets a list containing all Static Mesh Assets Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]},{"return":{"type":"string[]","description":"array of strings"},"name":"GetOthers","description":"Gets a list containing all Other Assets Keys from an AssetPack","authority":"both","parameters":[{"type":"string","name":"asset_pack_path","description":"The Asset Pack path to get the assets"}]}]}'),c=["components"],o={title:"\ud83c\udf40 Assets",description:"Retrieve Assets Data from Asset Packs",tags:["static-class","m\xeddias"]},p=void 0,l={unversionedId:"scripting-reference/static-classes/assets",id:"scripting-reference/static-classes/assets",title:"\ud83c\udf40 Assets",description:"Retrieve Assets Data from Asset Packs",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/static-classes/assets.mdx",sourceDirName:"scripting-reference/static-classes",slug:"/scripting-reference/static-classes/assets",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/assets",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/static-classes/assets.mdx",tags:[{label:"static-class",permalink:"/pt-BR/docs/next/tags/static-class"},{label:"m\xeddias",permalink:"/pt-BR/docs/next/tags/midias"}],version:"current",frontMatter:{title:"\ud83c\udf40 Assets",description:"Retrieve Assets Data from Asset Packs",tags:["static-class","m\xeddias"]},sidebar:"main",previous:{title:"Base Pickable",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/pickable"},next:{title:"\u2328\ufe0f Client",permalink:"/pt-BR/docs/next/scripting-reference/static-classes/client"}},u={},d=[{value:"\ud83d\uddff Static Functions",id:"-static-functions",level:2}],m=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)}},f=m("HeaderDeclaration"),y=m("StaticFunctionsDeclaration"),h={toc:d};function g(t){var e=t.components,s=(0,a.Z)(t,c);return(0,n.kt)("wrapper",(0,r.Z)({},h,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(f,{class_data:i,is_static:!0,mdxType:"HeaderDeclaration"}),(0,n.kt)("h2",{id:"-static-functions"},"\ud83d\uddff Static Functions"),(0,n.kt)(y,{class_data:i,mdxType:"StaticFunctionsDeclaration"}))}g.isMDXComponent=!0}}]);