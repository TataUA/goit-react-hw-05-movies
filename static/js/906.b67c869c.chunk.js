"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[906],{3906:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,a,i,o,s,c=r(5861),u=r(9439),p=r(4687),l=r.n(p),d=r(2791),f=r(7689),h=r(9128),v=r(168),x=r(5706),m=r(1087),g=(0,x.Z)(m.rU)(t||(t=(0,v.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n  padding: 4px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 400;\n  font-size: 14px;\n  border: 1px solid black;\n  &:hover {\n    color: white;\n    background-color: orangered;\n  }\n"]))),b=r(184),w=function(n){var e=n.to,r=n.children;return(0,b.jsxs)(g,{to:e,children:[(0,b.jsx)(h.jTe,{size:"14"}),r]})},j=x.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n"]))),Z=x.Z.img(i||(i=(0,v.Z)(["\n  margin-right: 20px;\n  margin-bottom: 10px;\n"]))),k=function(n){var e=n.filmDetails,r=e.original_title,t=e.release_date,a=e.overview,i=e.genres,o=e.poster_path,s=e.vote_average,c=t.split("-")[0],u=null===i||void 0===i?void 0:i.map((function(n){return n.name})).join(", "),p=Math.round(10*s);return(0,b.jsxs)(j,{children:[(0,b.jsx)(Z,{src:"https://image.tmdb.org/t/p/w500".concat(o),alt:r,width:"200"}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{children:[r," (",c,")"]}),(0,b.jsxs)("p",{children:[p," %"]}),(0,b.jsx)("h3",{children:"Overview "}),(0,b.jsx)("p",{children:a}),(0,b.jsx)("h3",{children:"Genres "}),(0,b.jsx)("p",{children:u})]})]})},y=r(1989),_=r(6611),S=x.Z.ul(o||(o=(0,v.Z)(["\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n"]))),U=(0,x.Z)(m.rU)(s||(s=(0,v.Z)(["\n  &:hover {\n    color: orangered;\n  }\n"]))),O=function(){var n,e,r=(0,f.UO)().movieId,t=(0,f.TH)(),a=(0,d.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),i=(0,d.useState)(null),o=(0,u.Z)(i,2),s=o[0],p=o[1],h=(0,d.useState)(!1),v=(0,u.Z)(h,2),x=v[0],m=v[1],g=(0,d.useState)(null),j=(0,u.Z)(g,2),Z=j[0],O=j[1];return(0,d.useEffect)((function(){function n(){return(n=(0,c.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,m(!0),n.next=4,(0,_.p_)(r);case 4:e=n.sent,p(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),O(n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))).apply(this,arguments)}r&&function(){n.apply(this,arguments)}()}),[r]),(0,b.jsxs)("main",{children:[(0,b.jsx)(w,{to:a.current,children:"Go back"}),x&&(0,b.jsx)(y.a,{}),s&&(0,b.jsx)(k,{filmDetails:s}),Z&&(0,b.jsx)("div",{children:"Something went wrong... \ud83d\ude40"}),(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)(S,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(U,{to:"cast",children:"cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(U,{to:"reviews",children:"review"})})]}),(0,b.jsx)(f.j3,{})]})}},6611:function(n,e,r){r.d(e,{JS:function(){return s},Ov:function(){return p},ae:function(){return c},kh:function(){return l},p_:function(){return u}});var t=r(5861),a=r(4687),i=r.n(a),o=r(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"b2a327199ab710c06f4180e085359e4a",language:"en"};var s=function(){var n=(0,t.Z)(i().mark((function n(){var e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={query:e},n.next=3,o.Z.get("/search/movie",{params:r});case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=906.b67c869c.chunk.js.map