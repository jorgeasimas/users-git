(this["webpackJsonpusers-git"]=this["webpackJsonpusers-git"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(13),a=n.n(r),i=(n(20),n(15)),l=n(4),j=(n(21),n(14)),o=n.n(j),b=n(0);var u=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1];console.log(n);var r=function(e){return Object(b.jsx)("div",{children:""!==n&&Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-container",children:Object(b.jsx)("img",{alt:"avatar",style:{width:"10em"},src:e.avatar_url})}),Object(b.jsx)("div",{className:"name",children:Object(b.jsx)("p",{children:e.name})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"insideContainer",children:[Object(b.jsxs)("span",{children:[Object(b.jsx)("p",{children:"Repos"})," ",e.public_repos]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("p",{children:"Followers"})," ",e.followers]}),Object(b.jsxs)("span",{children:[Object(b.jsx)("p",{children:"Following"})," ",e.following]})]})}),Object(b.jsxs)("div",{className:"location",children:[Object(b.jsxs)("p",{children:["\ud83c\udfe0",Object(b.jsx)("strong",{children:e.location})]}),Object(b.jsxs)("a",{alt:e.html_url,href:"".concat(e.html_url),target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)("span",{children:"\ud83d\udd17 "}),e.html_url," "]})]})]})})},a=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(b.jsxs)("form",{className:"inputForm",onSubmit:function(e){e.preventDefault(),o.a.get("https://api.github.com/users/".concat(r)).then((function(e){var t=e.data;s(t),a("")}))},children:[Object(b.jsx)("input",{className:"form-input",type:"text",value:r,onChange:function(e){return a(e.target.value)},placeholder:"GitHub username",required:!0}),Object(b.jsx)("button",{className:"Bsubmit",type:"submit",children:Object(b.jsx)("strong",{children:"Search"})})]})};return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(a,{}),Object(b.jsx)(r,Object(i.a)({},n))]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),d()}},[[41,1,2]]]);
//# sourceMappingURL=main.483c59ed.chunk.js.map