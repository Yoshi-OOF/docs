"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[1914],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69168:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),s=a(85274),o=["components"],c={title:"Base Paintable",description:"Base class for all Paintables",tags:["base-class"]},l=void 0,p={unversionedId:"scripting-reference/classes/base-classes/paintable",id:"scripting-reference/classes/base-classes/paintable",title:"Base Paintable",description:"Base class for all Paintables",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/scripting-reference/classes/base-classes/paintable.mdx",sourceDirName:"scripting-reference/classes/base-classes",slug:"/scripting-reference/classes/base-classes/paintable",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/paintable",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/base-classes/paintable.mdx",tags:[{label:"base-class",permalink:"/pt-BR/docs/next/tags/base-class"}],version:"current",frontMatter:{title:"Base Paintable",description:"Base class for all Paintables",tags:["base-class"]},sidebar:"main",previous:{title:"Base Actor",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/actor"},next:{title:"Base Pickable",permalink:"/pt-BR/docs/next/scripting-reference/classes/base-classes/pickable"}},m={},u=[{value:"\ud83e\udda0 Functions",id:"-functions",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},f=d("HeaderDeclaration"),b=d("FunctionsDeclaration"),h={toc:u};function y(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(f,{class_data:s,mdxType:"HeaderDeclaration"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is a base class. You cannot spawn it directly.")),(0,i.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,i.kt)(b,{class_data:s,mdxType:"FunctionsDeclaration"}))}y.isMDXComponent=!0},85274:function(e){e.exports=JSON.parse('{"name":"Paintable","description":"Base class for all Paintable entities. This class provides customization for materials, exposing common functions to allow you to set custom material parameters, including loading textures from disk.","functions":[{"authority":"both","name":"SetMaterial","description":"Sets the material at the specified index of this Actor","parameters":[{"type":"MaterialPath","name":"material_path","description":"The new Material to apply"},{"type":"number","name":"index","default":"-1","description":"The index to apply<br/>-1 means all indices"}]},{"authority":"client","name":"SetMaterialFromCanvas","description":"Sets the material at the specified index of this Actor to a Canvas object","parameters":[{"type":"Canvas","name":"canvas","description":"The Canvas object to use as a materia"},{"type":"number","name":"index","default":"-1","description":"The index to apply<br/>-1 means all indices"}]},{"authority":"client","name":"SetMaterialFromSceneCapture","description":"Sets the material at the specified index of this Actor to a SceneCapture object","parameters":[{"type":"SceneCapture","name":"scene_capture","description":"The SceneCapture object to use as a material"},{"type":"number","name":"index","default":"-1","description":"The index to apply<br/>-1 means all indices"}]},{"authority":"client","name":"SetMaterialFromWebUI","description":"Sets the material at the specified index of this Actor to a WebUI object","parameters":[{"type":"WebUI","name":"webui","description":"The WebUI object to use as a material"},{"type":"number","name":"index","default":"-1","description":"The index to apply<br/>-1 means all indices"}]},{"authority":"both","name":"ResetMaterial","description":"Resets the material from the specified index to the original one","parameters":[{"type":"number","name":"index","default":"-1","description":"The index to apply<br/>-1 means all indices"}]},{"authority":"both","name":"SetMaterialColorParameter","description":"Sets a Color parameter in this Actor\'s material","parameters":[{"type":"string","name":"parameter_name","description":"The name of the material parameter"},{"type":"Color","name":"color","description":"The value to set"}]},{"authority":"both","name":"SetMaterialScalarParameter","description":"Sets a Scalar parameter in this Actor\'s material","parameters":[{"type":"string","name":"parameter_name","description":"The name of the material parameter"},{"type":"string","name":"scalar","description":"The value to set"}]},{"authority":"both","name":"SetMaterialTextureParameter","description":"Sets a texture parameter in this Actor\'s material to an image on disk","parameters":[{"type":"string","name":"parameter_name","description":"The name of the material parameter"},{"type":"ImagePath","name":"texture_path","description":"The path to the texture"}]},{"authority":"both","name":"SetMaterialVectorParameter","description":"Sets a Vector parameter in this Actor\'s material","parameters":[{"type":"string","name":"parameter_name","description":"The name of the material parameter"},{"type":"Vector","name":"vector","description":"The value to set"}]},{"authority":"both","name":"SetPhysicalMaterial","description":"Overrides this Actor\'s Physical Material with a new one","parameters":[{"type":"MaterialPath","name":"physical_material_path","description":"The Physical Material to override"}]}]}')}}]);