"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[7402],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50851:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(18259),s=["components"],l={title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},c=void 0,p={unversionedId:"scripting-reference/classes/text-render",id:"scripting-reference/classes/text-render",title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/scripting-reference/classes/text-render.mdx",sourceDirName:"scripting-reference/classes",slug:"/scripting-reference/classes/text-render",permalink:"/fr/docs/next/scripting-reference/classes/text-render",draft:!1,editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/classes/text-render.mdx",tags:[{label:"class",permalink:"/fr/docs/next/tags/class"}],version:"current",sidebarPosition:0,frontMatter:{title:"\ud83c\udd92 TextRender",description:"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities",sidebar_position:0,tags:["class"]},sidebar:"main",previous:{title:"\ud83c\udfe0 StaticMesh",permalink:"/fr/docs/next/scripting-reference/classes/static-mesh"},next:{title:"\ud83e\udea4 Trigger",permalink:"/fr/docs/next/scripting-reference/classes/trigger"}},u={},d=[{value:"\ud83c\udf92 Examples",id:"-examples",level:2},{value:"\ud83c\udfd7\ufe0f Constructor",id:"\ufe0f-constructor",level:2},{value:"\ud83e\udda0 Functions",id:"-functions",level:2},{value:"\ud83d\ude80 Events",id:"-events",level:2}],m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},f=m("HeaderDeclaration"),y=m("ReferenceLink"),g=m("ConstructorDeclaration"),h=m("FunctionsDeclaration"),x=m("EventsDeclaration"),b={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(f,{class_data:i,image:"/img/docs/text-render.webp",mdxType:"HeaderDeclaration"}),(0,o.kt)("h2",{id:"-examples"},"\ud83c\udf92 Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local my_text_render = TextRender(\n    Vector(-100, 200, 300),\n    Rotator(),\n    "My Awesome Text",\n    Vector(1, 1, 1), -- Scale\n    Color(1, 0, 0), -- Red Color\n    FontType.OpenSans,\n    TextRenderAlignCamera.FaceCamera\n)\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you desire your ",(0,o.kt)("strong",{parentName:"p"},"TextRender")," to be visible through walls, replace it's material with the nanos Default TranslucentDepth one!"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},'SetMaterial("nanos-world::M_NanosTranslucent_Depth")'),"."),(0,o.kt)("p",{parentName:"admonition"},"You can also tweak it's color and other properties using the Material methods.")),(0,o.kt)(y,{href:"getting-started/tutorials-and-examples/name-tags",mdxType:"ReferenceLink"},"Nametags"),(0,o.kt)("h2",{id:"\ufe0f-constructor"},"\ud83c\udfd7\ufe0f Constructor"),(0,o.kt)(g,{class_data:i,mdxType:"ConstructorDeclaration"}),(0,o.kt)("h2",{id:"-functions"},"\ud83e\udda0 Functions"),(0,o.kt)(h,{class_data:i,mdxType:"FunctionsDeclaration"}),(0,o.kt)("h2",{id:"-events"},"\ud83d\ude80 Events"),(0,o.kt)(x,{class_data:i,mdxType:"EventsDeclaration"}))}v.isMDXComponent=!0},18259:function(e){e.exports=JSON.parse('{"name":"TextRender","description":"A Text Render class is useful for spawning Texts in 3D world, you can even attach it to other entities.","authority":"both","inheritance":["Actor","Paintable"],"constructor":[{"type":"Vector","name":"location","default":"Vector(0, 0, 0)"},{"type":"Rotator","name":"rotation","default":"Rotator(0, 0, 0)"},{"type":"string","name":"text","default":""},{"type":"Vector","name":"scale","default":"Vector(1, 1, 1)"},{"type":"Color","name":"color","default":"Color(1, 1, 1, 1)"},{"type":"FontType","name":"font_type","default":"FontType.Roboto"},{"type":"TextRenderAlignCamera","name":"align_camera","default":"TextRenderAlignCamera.Unaligned"}],"functions":[{"name":"SetColor","authority":"both","description":"Sets the Color","description_long":"Sets the Color (Internally this will call the <code>SetMaterialColorParameter(\\"Tint\\", color)</code> method)","parameters":[{"name":"color","type":"Color"}]},{"name":"SetFont","authority":"both","description":"Sets the Font","parameters":[{"name":"font_type","type":"FontType"}]},{"name":"SetFreeze","authority":"both","description":"Freeze mesh rebuild, to avoid unnecessary mesh rebuilds when setting a few properties together","parameters":[{"name":"freeze","type":"boolean"}]},{"name":"SetGlyphSettings","authority":"both","description":"Sets the Glyph representation settings to generate the 3D Mesh for this text render","parameters":[{"type":"number","name":"extrude","default":"0"},{"type":"number","name":"level","default":"0"},{"type":"TextRenderBevelType","name":"bevel_type","default":"TextRenderBevelType.Convex"},{"type":"number","name":"bevel_segments","default":"8"},{"type":"boolean","name":"outline","default":"false"}]},{"name":"SetMaxSize","authority":"both","description":"Sets the Max Size of the TextRender, optionally scaling it proportionally","parameters":[{"type":"number","name":"max_width","default":"0"},{"type":"number","name":"max_height","default":"0"},{"type":"boolean","name":"scale_proportionally","default":"true"}]},{"name":"SetText","authority":"both","description":"Sets the Text","parameters":[{"name":"text","type":"string"}]},{"name":"SetTextSettings","authority":"both","description":"Sets the Text & Font settings for this text render","parameters":[{"type":"number","name":"kerning","default":"0"},{"type":"number","name":"line_spacing","default":"0"},{"type":"number","name":"word_spacing","default":"0"},{"type":"TextRenderHorizontalAlignment","name":"horizontal_alignment","default":"TextRenderHorizontalAlignment.Center"},{"type":"TextRenderVerticalAlignment","name":"vertical_alignment","default":"0TextRenderVerticalAlignment.Center"}]}]}')}}]);