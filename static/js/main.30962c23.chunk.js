(this["webpackJsonpmarkdown-viewer"]=this["webpackJsonpmarkdown-viewer"]||[]).push([[0],{106:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){var a={"./README.md":111,"./create-cra-app.md":112,"./how-to-install-nodejs.md":113,"./markdown.md":114};function c(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=110},111:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/README.05172325.md"},112:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/create-cra-app.7314228c.md"},113:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/how-to-install-nodejs.9766613b.md"},114:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/markdown.4def4645.md"},385:function(e,t,n){},387:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(39),o=n.n(r),i=n(420),s=n(421),d=n(92),j=Object(d.a)({palette:{primary:{light:"#EDF1FA",main:"#31376D",dark:"#31376D",contrastText:"#FFFFFF"},secondary:{light:"#999999",main:"#009688",dark:"#009688",contrastText:"#FFFFFF"},text:{secondary:"#999999"},background:{appBar:"rgba(248, 249, 253, 0.35)"}}}),l=(n(106),n(12)),u=n(89),h=n(10),m=n(424),b=n(417),p=n(416),f=n(418),O=n(415),x=Object(O.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(3)}}})),g=n(423),v=n(7);var w=function(){var e=x();return Object(v.jsx)(p.a,{maxWidth:"md",children:Object(v.jsx)(m.a,{className:e.root,children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(f.a,{variant:"h4",children:"Markdown Testing Site"}),Object(v.jsx)(g.a,{href:"/",children:Object(v.jsx)(f.a,{variant:"subtitle1",component:"span",children:"Home"})})," \xa0| \xa0",Object(v.jsx)(g.a,{href:"/markdown",children:Object(v.jsx)(f.a,{variant:"subtitle1",component:"span",children:"Markdown"})})," \xa0| \xa0",Object(v.jsx)(g.a,{href:"/create-cra-app",children:Object(v.jsx)(f.a,{variant:"subtitle1",component:"span",children:"Create a React App"})})," \xa0| \xa0",Object(v.jsx)(g.a,{href:"/how-to-install-nodejs",children:Object(v.jsx)(f.a,{variant:"subtitle1",component:"span",children:"How to Install NodeJS"})})]})})})},F=n(93),k=n(94),y=n(90),E=n(91),D=n(422),N=n(419),P=(n(109),["node","inline","className","children"]);var T=function(e){var t=Object(a.useState)("Loading..."),c=Object(k.a)(t,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){try{var t=e.match.params.id?e.match.params.id:"markdown",a=n(110)("./".concat(t,".md"));fetch(a.default).then((function(e){return e.text()})).then((function(e){o(e)}))}catch(c){console.log(c.message),console.log("not found"),o("Not found")}}),[e.history,e.match.params.id]),Object(v.jsx)(p.a,{maxWidth:"md",children:Object(v.jsx)(y.a,{children:r,remarkPlugins:[E.a],components:{code:function(e){e.node;var t=e.inline,n=e.className,a=e.children,c=Object(F.a)(e,P),r=/language-(\w+)/.exec(n||"");return!t&&r?Object(v.jsx)(D.a,Object(l.a)({children:String(a).replace(/\n$/,""),style:N.a,language:r[1],PreTag:"div"},c)):Object(v.jsx)("code",Object(l.a)(Object(l.a)({className:n},c),{},{children:a}))}}})})},M=[{path:"/home",isProtected:!1,component:T},{path:"/:id",isProtected:!1,component:T},{path:"/",isProtected:!1,component:T}];n(385);var S=function(e){return Object(v.jsxs)(u.a,{basename:"/markdown-viewer",children:[Object(v.jsx)(w,{}),Object(v.jsx)(h.c,{children:M.map((function(e,t){return Object(v.jsx)(h.a,{exact:!0,path:e.path,render:function(t){return Object(v.jsx)(e.component,Object(l.a)(Object(l.a)({},t),{},{title:"Props through render"}))}},t)}))})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,425)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsxs)(i.a,{theme:j,children:[Object(v.jsx)(s.a,{}),Object(v.jsx)(S,{})]})}),document.getElementById("root")),C()}},[[387,1,2]]]);
//# sourceMappingURL=main.30962c23.chunk.js.map