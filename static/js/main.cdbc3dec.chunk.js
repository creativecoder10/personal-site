(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(1),i=t(0),l=t(16),a=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),d=t(22),h=[{index:!0,label:"Deepesh Dang",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(5).then(t.t.bind(null,167,7))})),x=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],l=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("/personal-site","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"DEEPESH DANG"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:dang.deepesh10@gmail.com",children:"dang.deepesh10@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"Hi, I'm Deepesh. I enjoy working teachnology that could help wider public. I am a computer science engineering graduate, and have been in the industry for over 14 years.I am currently working at NSW Department of Education. Before DOE I was at N SW library, PlaceOS, Accenture, and more."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsx)("section",{id:"footer",children:Object(c.jsx)(p.a,{})})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},N=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"DD | Deepesh Dang",defaultTitle:"Deepesh Dang",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(m,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};N.defaultProps={children:null,fullPage:!1,title:null,description:"Deepesh Dang's personal website."};n.a=N},25:function(e,n,t){"use strict";var c=t(1),i=(t(0),t(29)),l=t(30),a=t(31),s=[{link:"https://github.com/creativecoder10",label:"Github",icon:l.faGithub},{link:"https://www.linkedin.com/in/deepeshdang",label:"LinkedIn",icon:a.faLinkedinIn}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t(0),l=t.n(i),a=t(15),s=t(5),r=t(3),j=t(21),o=(t(44),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,164))}))),b=Object(i.lazy)((function(){return t.e(8).then(t.bind(null,170))})),u=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,165))})),d=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,166))})),h=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,168))})),O=Object(i.lazy)((function(){return Promise.all([t.e(4),t.e(11)]).then(t.bind(null,169))})),x=function(){return Object(c.jsx)(s.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/stats",component:O}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:h}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},m=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},p=document.getElementById("root");p.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(m,{}),p):Object(a.render)(Object(c.jsx)(m,{}),p)}},[[45,1,3]]]);
//# sourceMappingURL=main.cdbc3dec.chunk.js.map