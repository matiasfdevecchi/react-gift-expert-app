(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=n(9),u=n(2),o=function(t){var e=t.setCategory,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(i),s("")},children:Object(a.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),f=n(8),b=function(){var t=Object(f.a)(l.a.mark((function t(e){var n,a,c,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=Yc6LaqRYr99eZMa42xcwLU5Vw7ltzRR9&q=".concat(encodeURI(e),"&limit=10&offset=0&rating=g&lang=en"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,r=c.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){r({data:t,loading:!1})}))}),[t]),a},g=function(t){t.id;var e=t.title,n=t.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:e}),Object(a.jsxs)("p",{children:[" ",e]})]})},h=function(t){var e=t.category,n=p(e),c=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:e}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-grid",children:c.map((function(t){return Object(a.jsx)(g,Object(j.a)({},t),t.id)}))})]})},O=function(){var t=Object(c.useState)(["Dragon Ball"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"GifExpertApp"}),Object(a.jsx)("hr",{}),Object(a.jsx)(o,{setCategory:function(t){n.includes(t)||t.length<=0||r((function(e){return[t].concat(Object(s.a)(e))}))}}),Object(a.jsx)("ol",{children:n.map((function(t){return Object(a.jsx)(h,{category:t},t)}))})]})},m=(n(17),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))});i.a.render(Object(a.jsx)(O,{}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.507f01e4.chunk.js.map