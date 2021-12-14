"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[2949],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87469:function(t,e,n){n.d(e,{YS:function(){return o},SM:function(){return l},Yb:function(){return p},aj:function(){return k},rt:function(){return g},Ut:function(){return h},PZ:function(){return v},p2:function(){return N}});n(83117),n(80102),n(67294);var r=n(3905),i=n(80907),a=function(){return(0,i.zu)().path},o=function(t){var e=t.title,n=t.description,i=t.href,o=t.image_src;return(0,r.kt)("a",{class:"card-link",href:i.startsWith("http")?i:a()+"/"+i},(0,r.kt)("img",{src:o||"/img/docs/nanos-world-background.jpg"}),(0,r.kt)("h4",null,e),(0,r.kt)("p",null,n))},l=function(t){var e=t.children,n=t.href;return(0,r.kt)("a",{class:"reference-link",href:n.startsWith("http")?n:a()+"/"+n},e,(0,r.kt)("span",null,n))},c=function(t,e){return(0,r.kt)("a",{class:"authority-availability",href:a()+"/core-concepts/scripting/authority-concepts#methods-and-events-availability"},(0,r.kt)("img",{src:t,title:e}))},s=function(t){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#"+t.toLowerCase()},t)},u=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/utility-classes/"+(e||t.toLowerCase())},t)},d=function(t,e){return(0,r.kt)("a",{href:a()+"/scripting-reference/classes/"+(e||t.toLowerCase())},t)},p=function(t){var e=t.children;return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/enums#"+e.toLowerCase(),title:e+" Enum (number)"},e)},f=function(t){return(0,r.kt)("a",{href:a()+"/core-concepts/assets#referencing-assets-in-scripting",title:"Asset Path (string)"},t)},m=function(t){return(0,r.kt)("a",{href:a()+"/scripting-reference/glossary/basic-types#specialpath",title:"Special Path (string)"},t)},k={AuthorityOnly:function(){return c("/img/scripting/authority-only.svg","authority-only - this can be called only on the side which spawned it!")},ServerOnly:function(){return c("/img/scripting/server-only.svg","server-only - this can be called only on server side!")},ClientOnly:function(){return c("/img/scripting/client-only.svg","client-only - this can be called only on client side!")},Both:function(){return c("/img/scripting/both.png","both-sides - this can be called on any side!")}},g={Number:function(){return s("number")},String:function(){return s("string")},Boolean:function(){return s("boolean")},Table:function(){return s("table")},Iterator:function(){return s("iterator")},Any:function(){return s("any")},Function:function(){return s("function")},Nil:function(){return s("nil")}},h={Vector:function(){return u("Vector")},Rotator:function(){return u("Rotator")},Color:function(){return u("Color")},Quat:function(){return u("Quat","quaternion")},Vector2D:function(){return u("Vector2D","vectortwod")}},v={Actor:function(){return d("Actor","base-classes/actor")},Paintable:function(){return d("Paintable","base-classes/paintable")},Pickable:function(){return d("Pickable","base-classes/pickable")},Cable:function(){return d("Cable")},Character:function(){return d("Character")},File:function(){return d("File")},Grenade:function(){return d("Grenade")},Melee:function(){return d("Melee")},Light:function(){return d("Light")},Particle:function(){return d("Particle")},Player:function(){return d("Player")},Prop:function(){return d("Prop")},Sound:function(){return d("Sound")},SceneCapture:function(){return d("SceneCapture","scene-capture")},StaticMesh:function(){return d("StaticMesh","static-mesh")},TextRender:function(){return d("TextRender","text-render")},Trigger:function(){return d("Trigger")},Vehicle:function(){return d("Vehicle")},Weapon:function(){return d("Weapon")},WebUI:function(){return d("WebUI")}},N={StaticMesh:function(){return f("StaticMesh Asset")},SkeletalMesh:function(){return f("SkeletalMesh Asset")},Animation:function(){return f("Animation Asset")},Particle:function(){return f("Particle Asset")},Material:function(){return f("Material Asset")},Map:function(){return f("Map Asset")},Sound:function(){return m("Sound Asset or Special Path")},Image:function(){return m("Image Special Path")},HTML:function(){return m("HTML Special Path")}}},16922:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=n(87469),l=["components"],c={description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},s="Vector",u={unversionedId:"scripting-reference/utility-classes/vector",id:"scripting-reference/utility-classes/vector",isDocsHomePage:!1,title:"Vector",description:"A vector composed of components (X, Y, Z) with floating point precision.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/scripting-reference/utility-classes/vector.mdx",sourceDirName:"scripting-reference/utility-classes",slug:"/scripting-reference/utility-classes/vector",permalink:"/de/docs/next/scripting-reference/utility-classes/vector",editUrl:"https://github.com/nanos-world/docs/edit/master/docs/scripting-reference/utility-classes/vector.mdx",tags:[{label:"utility-class",permalink:"/de/docs/next/tags/utility-class"}],version:"current",frontMatter:{description:"A vector composed of components (X, Y, Z) with floating point precision.",tags:["utility-class"]},sidebar:"main",previous:{title:"Rotator",permalink:"/de/docs/next/scripting-reference/utility-classes/rotator"},next:{title:"Vector2D",permalink:"/de/docs/next/scripting-reference/utility-classes/vectortwod"}},d=[{value:"\ud83d\udc4c Usage",id:"-usage",children:[],level:2},{value:"\ud83c\udf9a Properties",id:"-properties",children:[],level:2},{value:"\u23e9 Functions",id:"-functions",children:[],level:2}],p={toc:d};function f(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vector"},"Vector"),(0,a.kt)("p",null,"A vector composed of components (X, Y, Z) with floating point precision."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This structure is Open Sourced at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nanos-world/nanos-world-lua-lib"},"https://github.com/nanos-world/nanos-world-lua-lib"),". Feel free to push merge requests and suggest changes!"))),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Vectors are internally and automatically compressed, which reduces it's size in the network up to 90%. Some cool details:"),(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"Vectors parameters in Classes Methods are usually compressed with precision of 1 decimal place (with some exceptions which we need more precision)."),(0,a.kt)("li",{parentName:"ul"},"Vectors passed in Remote Events are compressed with precision of 2 decimal places. If you need more precision, we recommend passing them as raw ",(0,a.kt)(o.rt.Number,null)," instead.")))),(0,a.kt)("h2",{id:"-usage"},"\ud83d\udc4c Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local new_vector = Vector(1452.5, 512, 943.1)\n")),(0,a.kt)("h2",{id:"-properties"},"\ud83c\udf9a Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Type")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Name")),(0,a.kt)("th",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"X"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"X Coordinate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Y"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Y Coordinate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("inlineCode",{parentName:"strong"},"Z"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Z Coordinate")))),(0,a.kt)("h2",{id:"-functions"},"\u23e9 Functions"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"Note:")," This structure supports ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"^"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"=="),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tostring")," operations."))),(0,a.kt)("table",{"spaces-before":"0"},(0,a.kt)("tr",null,(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Returns")),(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Name")),(0,a.kt)("th",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},"Description"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Equals(other, tolerance)"))),(0,a.kt)("td",{align:"left"},"Check against another vector for equality, within specified error limits")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Distance(other)"))),(0,a.kt)("td",{align:"left"},"Distance between two points")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"DistanceSquared(other)"))),(0,a.kt)("td",{align:"left"},"Squared distance between two points")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Vector,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"GetUnsafeNormal()"))),(0,a.kt)("td",{align:"left"},"Calculates normalized version of vector without checking for zero length")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Vector,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"GetSafeNormal()"))),(0,a.kt)("td",{align:"left"},"Gets a normalized copy of the vector, checking it is safe to do so based on the length")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"IsNearlyZero(tolerance)"))),(0,a.kt)("td",{align:"left"},"Checks whether vector is near to zero within a specified tolerance")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"IsZero()"))),(0,a.kt)("td",{align:"left"},"Checks whether all components of the vector are exactly zero")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Boolean,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Normalize()"))),(0,a.kt)("td",{align:"left"},"Normalize this vector in-place if it is larger than a given tolerance. Leaves it unchanged if not")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Size()"))),(0,a.kt)("td",{align:"left"},"Get the length (magnitude) of this vector")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.rt.Number,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"SizeSquared()"))),(0,a.kt)("td",{align:"left"},"Get the squared length of this vector")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"left"},(0,a.kt)(o.Ut.Rotator,null)),(0,a.kt)("td",{align:"left"},(0,a.kt)("strong",{"x-id":"1"},(0,a.kt)("code",null,"Rotation()"))),(0,a.kt)("td",{align:"left"},"Returns the orientation corresponding to the direction in which the vector points"))))}f.isMDXComponent=!0}}]);