"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{2168:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(3433),a=n(9439),u=n(2791),c=n(7689),s=n(6474),i=n(9541),o="Reviews_list__okdpy",f="Reviews_item__DJKij",p="Reviews_subtitle__lWHkI",l=n(184),h=function(){var t=(0,c.UO)().id,e=(0,u.useState)(!1),n=(0,a.Z)(e,2),h=n[0],v=n[1],d=(0,u.useState)(null),m=(0,a.Z)(d,2),x=m[0],w=m[1],g=(0,u.useState)([]),_=(0,a.Z)(g,2),k=_[0],b=_[1];return(0,u.useEffect)((function(){v(!0),(0,i.tx)(t).then((function(t){var e=t.results;b((0,r.Z)(e))})).catch((function(t){return w(t)})).finally(v(!1))}),[t]),(0,l.jsxs)(l.Fragment,{children:[h&&(0,l.jsx)(s.a,{}),x&&(0,l.jsx)("p",{children:"Somthing wrong. Try again"}),k.length?(0,l.jsx)("ul",{className:o,children:k.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,l.jsxs)("li",{className:f,children:[(0,l.jsxs)("h4",{className:p,children:["Author: ",n]}),(0,l.jsx)("p",{children:r})]},e)}))}):(0,l.jsx)("p",{children:"No information"})]})}},9541:function(t,e,n){n.d(e,{Hg:function(){return s},TP:function(){return i},tx:function(){return f},z1:function(){return p},zv:function(){return o}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"31449444226ba6345698313fe055564a"}}),s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n="trending/movie/day",t.next=4,c.get("".concat(n,"?&page=").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/credits"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e,"/reviews"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,c.get("".concat("/search/movie","?&query=").concat(e,"&include_adult=false"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.1a0b63a4.chunk.js.map