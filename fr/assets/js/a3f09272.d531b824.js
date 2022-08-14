"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[6721],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],i={title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},c=void 0,l={unversionedId:"scripting-reference/classes/text-render",id:"version-latest/scripting-reference/classes/text-render",title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-latest/scripting-reference/classes/text-render.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/text-render",permalink:"/fr/docs/scripting-reference/classes/text-render",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/versioned_docs/version-latest/scripting-reference/classes/text-render.mdx",tags:[{label:"class",permalink:"/fr/docs/tags/class"}],version:"latest",sidebarPosition:0,frontMatter:{title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},sidebar:"version-latest/main",previous:{title:"\ud83c\udfe0 StaticMesh",permalink:"/fr/docs/scripting-reference/classes/static-mesh"},next:{title:"\ud83e\udea4 Trigger",permalink:"/fr/docs/scripting-reference/classes/trigger"}},u={},p=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},f=d("HeaderDeclaration"),m=d("ReferenceLink"),g=d("ConstructorDeclaration"),y=d("FunctionsDeclaration"),v=d("EventsDeclaration"),x={toc:p};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(f,{type:"Class",name:"TextRender",image:"/img/docs/text-render.webp",mdxType:"HeaderDeclaration"}),(0,a.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local my_text_render = TextRender(\n    Vector(-100, 200, 300),\n    Rotator(),\n    "My Awesome Text",\n    Vector(1, 1, 1), -- Scale\n    Color(1, 0, 0), -- Red Color\n    FontType.OpenSans,\n    TextRenderAlignCamera.FaceCamera\n)\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you desire your ",(0,a.kt)("strong",{parentName:"p"},"TextRender")," to be visible through walls, replace it's material with the nanos Default TranslucentDepth one!"),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},'SetMaterial("nanos-world::M_NanosTranslucent_Depth")'),"."),(0,a.kt)("p",{parentName:"admonition"},"You can also tweak it's color and other properties using the Material methods.")),(0,a.kt)(m,{href:"getting-started/tutorials-and-examples/name-tags",mdxType:"ReferenceLink"},"Nametags"),(0,a.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,a.kt)(g,{type:"Class",name:"TextRender",mdxType:"ConstructorDeclaration"}),(0,a.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,a.kt)(y,{type:"Class",name:"TextRender",mdxType:"FunctionsDeclaration"}),(0,a.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,a.kt)(v,{type:"Class",name:"TextRender",mdxType:"EventsDeclaration"}))}b.isMDXComponent=!0}}]);