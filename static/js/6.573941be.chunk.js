(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{168:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),a=n(5),i=n(21),c=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var j=n(53),v=n(52),O=function(e){var t=e.handleClick,n=e.active,o=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[o]?"skillbutton-active":""),type:"button",onClick:function(){return t(o)},children:o})},x=function(e){var t=e.data,n=e.categories,o=t.category,a=t.competency,i=t.title,c={background:n.filter((function(e){return o.includes(e.name)})).map((function(e){return e.color}))[0]},s=Object(v.a)(Object(v.a)({},c),{},{width:"".concat(String(Math.min(100,Math.max(a/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:c,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:s}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[a," / 5"]})]})};x.defaultProps={categories:[]};var k=x,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,o,a=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=a.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(j.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(j.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),o&&b(t,o),i}(o.Component);w.defaultProps={skills:[],categories:[]};var S=w,A=function(){return Object(r.jsxs)("div",{className:"references",children:[Object(r.jsx)("div",{className:"link-to",id:"references"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)(a.b,{to:"/contact",children:Object(r.jsx)("h3",{children:"References are available upon request"})})})]})},N=[{school:"Kumaon University, Dwarahat, Almora - Uttrakhand - India",degree:"Bachelors in Computer science and engineering",year:2006},{school:"Great Lakes Institute of Management",degree:"Post Graduate Diploma in Management",year:2011}],P=[{company:"Department of Education",position:"Senior software engineer",daterange:"July 2019 - Present",points:["Leading the assessments vertical for Digital Innovation team. Building a reusable platform to build on-demand assessments by Teachers","Recently launched Phonological and Phonics application for NSW (compulsory for all Year 1 students)  and the applications also received good media coverage - https://www.speldnsw.org.au/phonics-screening-check-trial-in-new-south-wales/","Build the entire platform from scratch using Monorepository architecture , RxJs (and now NgRx) for state management and highly modularized, component based on frontend architecture","Used AAA standards for accessibility along with periodic assessment from third party vendor Intopia","Application of Google analytics to assess the app utilization and feature to improve"]},{company:"NSW State Library",position:"Front End Developer",daterange:"March 2019 - July 2019",points:["Building a component based Search and discovery portal based on React library and Redux","The architecture is based on using server side rendering  (Next.js) and consuming Apigee based APIs ","Strong focus on FE architecture using loosely coupled, reusable components ","Code refactoring and high code quality using airbnb coding standards","Application state management using React context ","Working closely with UX designers to optimize the user flow and rationalising decisions on UI elements and overall user flow ","Building Test driven development approach by writing Test cases in Jest against the various elements of acceptance criteria and identifying the scope boundaries"]},{company:"PlaceOS",position:"Front End Developer",link:"http://placeos.com",daterange:"July 2018- March 2019",points:["Front end development and optimization of smart-building platform, developed by ACA projects. This platform can connect all devices, building systems and third-party software into a single work-place, building or precinct solution","Strong focus on using key features of Angular 7 framework (modules, components, services, templates, and dependency injection) to create fast SPA","Code refactoring to build highly modularized and customizable components","Building reactive application features using Rx-JS library (observables) ","Using features of Material.io library to build UI experience","Details of public github repository \u2013 https://github.com/acaprojects/ngx-widgets"]},{company:"The Smith Family",position:"Front End Applications analyst",link:"https://thesmithfamily.com",daterange:"Oct 2017 - March 2018",points:["Optimized front end for public facing portal  in liaison with third party vendors/ agencies","Implemented CMS to host marketing landing pages ","Integration the web application with web APIs like Google API and Facebook API for people to login to the portal for donators"]},{company:"Altisource Business solutions ",position:"Product Development Analyst",link:"https://hubzu.com",daterange:"May 2014 - May 2017",points:["Responsible for development and enhancement of front end optimizations for the public facing portal (B2B and B2C) - www.hubzu.com (similar to www.realestate.com.au , www.domain.com.au) ","Lead 2 senior developers and 2 testers in a scrum team to build front end experience using REST, Web API, JSON, AJAX, SASS","Helped building unit test cases and A/B tests for frontend optimization","Implemented application front end architecture transition to MVC Framework Angular 2"]},{company:"Accenture Technology Consulting, India ",position:"System Analyst",link:"https://accenture.com",daterange:"May 2011 - May 2014",points:["Implemented front end development and optimization projects along with the tech team using Angular 1","Building technical requirements based on business requirements shared by product manager","Adopting Agile Methodology to plan, develop and implement front end development strategy"]},{company:"Tata Consultancy services",position:"Senior Software engineer",link:"http://tcs.com",daterange:"Oct 2009 - Apr 2010",points:["Implementation of IT Service management solution for the client and customization of front end experience"]},{company:"Infosys Technologies limited",position:"Intern to Senior software engineer",link:"https://infosys.com",daterange:"Sep 2006 - Oct 2009",points:["Implementation of IT Service management solution for the client and customization of front end experience at Client locations in UK and India"]}],D=n(17);var I=n(24);var C,R=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:2.5,category:["Web Development","Javascript"]},{title:"React",competency:3.8,category:["Web Development","Javascript"]},{title:"Angular 2+ (Till Angular 11)",competency:4,category:["Web Development","Javascript"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Typescript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),M=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(C=new Set(R.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(D.a)(e)}(C)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(C)||Object(I.a)(C)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:M[t]}})),J=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Deepesh Dang's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(a.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:N}),Object(r.jsx)(p,{data:P}),Object(r.jsx)(S,{skills:R,categories:T}),Object(r.jsx)(A,{})]})})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(53);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},53:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.573941be.chunk.js.map