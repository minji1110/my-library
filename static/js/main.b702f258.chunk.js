(this["webpackJsonpmy-library"]=this["webpackJsonpmy-library"]||[]).push([[0],{26:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),a=n.n(r),s=n(16),i=n.n(s),o=(n(26),n(7)),j=n.n(o),l=n(17),u=n(4),b=n(18),d=n.n(b),h=n(19),O=(n(5),function(e){var t=e.onSearch,n=Object(r.useState)(""),a=Object(u.a)(n,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(u.a)(o,2),l=j[0],b=j[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"form",onSubmit:function(e){t(l,s),e.preventDefault()},children:[Object(c.jsxs)("select",{onChange:function(e){b(e.target.value)},children:[Object(c.jsx)("option",{value:"",children:"\uc804\uccb4"}),Object(c.jsx)("option",{value:"title",children:"\uc81c\ubaa9"}),Object(c.jsx)("option",{value:"person",children:"\uc800\uc790"})]}),Object(c.jsx)("input",{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694.",value:s,onChange:function(e){i(e.target.value)}}),Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)(h.a,{color:"gray",size:"30"})})]})})}),x=function(e){var t=e.book,n=t.title,r=(t.authors,t.thumbnail),a=t.contents;return Object(c.jsxs)("div",{className:"BookItem",children:[Object(c.jsx)("img",{src:r,alt:"thumbnail"}),Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:a})]})},f=function(e){var t=e.list;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(x,{book:e},e.isbn)}))})},v=n(20),p=function(e){var t=e.children;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)(v.a,{size:"40",color:"brown"}),Object(c.jsx)("h1",{className:"title",children:" My Library "})]}),Object(c.jsx)("div",{className:"content",children:t})]})},m=d.a.create({baseURL:"https://dapi.kakao.com",headers:{Authorization:"KakaoAK 1345794fdd4b8c268cc7ff2b244e7dbf"}}),g=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(l.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.get("/v3/search/book?target=".concat(t),{params:{query:n}});case 3:c=e.sent,a(c.data.documents),console.log(c.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{children:Object(c.jsxs)(p,{children:[Object(c.jsx)(O,{onSearch:s}),Object(c.jsx)(f,{list:n})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),k()},5:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.b702f258.chunk.js.map