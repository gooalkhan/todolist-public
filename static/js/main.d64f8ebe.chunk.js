(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{54:function(e,t,n){e.exports=n(67)},59:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(12),l=n.n(i),r=(n(59),n(15)),c=n(72),d=n(70),s=n(78),u=n(13),f=n(7),b=n(21),m=n(74),O=n(75),g=function(e,t){return{type:"DND_TODO",dragId:e,dropId:t}},h=function(e){var t=Object(o.useState)({title:"",body:""}),n=Object(r.a)(t,2),i=n[0],l=n[1],c=Object(u.b)(),d=Object(u.c)((function(e){return e.todos}));Object(o.useEffect)((function(){if(e.modId){var t=d.filter((function(t){return t.id===e.modId}));l.apply(void 0,Object(b.a)(t))}return function(){}}),[e.modId,d]);return a.a.createElement(m.a,{show:e.show,onHide:e.handleClose},a.a.createElement(m.a.Header,{closeButton:!0},a.a.createElement(m.a.Title,null,"\ud560 \uc77c \uc785\ub825")),a.a.createElement(m.a.Body,null,a.a.createElement(O.a,null,a.a.createElement(O.a.Group,null,a.a.createElement(O.a.Label,null,"\uc81c\ubaa9"),a.a.createElement(O.a.Control,{placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(e){l(Object(f.a)(Object(f.a)({},i),{},{title:e.target.value}))},value:i.title})),a.a.createElement(O.a.Group,null,a.a.createElement(O.a.Label,null,"\ud560 \uc77c"),a.a.createElement(O.a.Control,{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",onChange:function(e){l(Object(f.a)(Object(f.a)({},i),{},{body:e.target.value}))},value:i.body})))),a.a.createElement(m.a.Footer,null,a.a.createElement(s.a,{variant:"secondary",onClick:function(){l({title:"",body:""}),e.handleClose()}},"\ub2eb\uae30"),a.a.createElement(s.a,{variant:"primary",onClick:function(){!function(t){e.modId?(c(function(e,t){return{type:"MODIFY_TODO",id:e,todo:t}}(e.modId,Object(f.a)({},t))),e.setModId(null)):c(function(e){return{type:"ADD_TODO",todo:e}}(Object(f.a)({},t))),l({title:"",body:""}),e.handleClose()}(i)}},"\uc800\uc7a5")))},v=n(50),p=n(79),j=n(71),E=n(76),y=n(77),w=function(e){var t=Object(o.useRef)(null),n=Object(u.b)(),i=Object(E.a)({item:{type:"TODO",id:e.id},collect:function(e){return{isDragging:e.isDragging()}}}),l=Object(r.a)(i,2),c=l[0].isDragging,f=l[1],b=Object(y.a)({accept:"TODO",hover:function(o,a){var i;if(null!==t){var l=o.id,r=e.id;if(l!==r){var c=null===(i=t.current)||void 0===i?void 0:i.getBoundingClientRect(),d=a.getInitialSourceClientOffset(),s=(c.bottom-c.top)/2,u=(c.right-c.left)/2,f=a.getClientOffset(),b=f.y-c.top,m=f.x-c.left;if(d.x===c.left){if(l<r&&b<s)return;if(l>r&&b>s)return;n(g(l,r))}else if(d.x!==c.left){if(l<r&&m<u)return;if(l>r&&m>u)return;n(g(l,r))}}}}});return f((0,Object(r.a)(b,2)[1])(t)),a.a.createElement(v.a,{xl:4,lg:6,md:6,sm:12,xs:12,className:"p-1",ref:t},a.a.createElement(p.a,{className:c?"invisible":"visible"},a.a.createElement(p.a.Header,{className:"container-fluid font-weight-bold"},a.a.createElement(d.a,null,a.a.createElement(v.a,{xs:9,className:"pt-1"},e.title),a.a.createElement(j.a,{size:"sm",style:{maxHeight:"2rem"},className:"col-xs-3 ml-auto"},a.a.createElement(s.a,{variant:"outline-secondary",className:"small font-weight-bold",onClick:function(){e.handleShow(),e.setModId(e.id)}},"\uc218\uc815"),a.a.createElement(s.a,{variant:"secondary",className:"font-weight-bold",onClick:function(){n({type:"DELETE_TODO",id:e.id})}},"\xd7")))),a.a.createElement(p.a.Body,null,e.body)))},D=n(73),I=n(51),C=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),i=n[0],l=n[1],f=function(){return l(!0)},b=Object(o.useState)(null),m=Object(r.a)(b,2),O=m[0],g=m[1],v=Object(u.c)((function(e){return e.todos}));return a.a.createElement(c.a,{fluid:!0,className:"mt-3 clearfix"},a.a.createElement(h,{show:i,modId:O,setModId:g,handleClose:function(){return l(!1)}}),a.a.createElement(d.a,{className:"no-gutters"},0!==v.length?v.map((function(e){return a.a.createElement(w,{title:e.title,body:e.body,key:e.id,id:e.id,setModId:g,handleShow:f})})):null),a.a.createElement(s.a,{style:{right:50,bottom:50},className:"position-fixed rounded-circle font-weight-bold",onClick:function(){g(null),f()},show:i,size:"lg"},"+"))},k=function(e){return a.a.createElement(D.a,{backend:I.a},a.a.createElement(C,null))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(65);var N=n(18),S=n(27),W={todos:[{title:"1.\uc6b0\uc720\uc0ac\uae30",body:"\uc11c\uc6b8\uc6b0\uc720",id:1},{title:"2.\ube68\ub798\ud558\uae30",body:"\uac74\uc870\uae30 \uc0ac\uc6a9",id:2},{title:"3.\uac8c\uc784\ud558\uae30",body:"\ub9c8\uc778\ud06c\ub798\ud504\ud2b8",id:3},{title:"4.\uacf5\ubd80\ud558\uae30",body:"\uc601\uc5b4\uacf5\ubd80",id:4}]},_=Object(N.b)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_TODO":var o;return o=0===t.todos.length?0:Object(S.maxBy)(t.todos,"id").id,(e=Object(b.a)(t.todos)).push(Object(f.a)(Object(f.a)({},n.todo),{},{id:o+1})),console.log("add",e),Object(f.a)(Object(f.a)({},t),{},{todos:e});case"MODIFY_TODO":e=Object(b.a)(t.todos);var a=Object(S.findIndex)(t.todos,["id",n.id]);return e.splice(a,1,Object(f.a)(Object(f.a)({},n.todo),{},{id:n.id})),console.log("modify",e),Object(f.a)(Object(f.a)({},t),{},{todos:e});case"DND_TODO":var i=Object(S.findIndex)(t.todos,["id",n.dragId]),l=Object(S.findIndex)(t.todos,["id",n.dropId]),r=t.todos.filter((function(e){return e.id===n.dragId}))[0];if(e=Object(b.a)(t.todos),i>l){var c=[e[i],e[l]];e[l]=c[0],e[i]=c[1]}else if(i<l){var d=[e[l],e[i]];e[i]=d[0],e[l]=d[1]}return console.log(n.dragId,r,"to be pushed"),console.log(n.dropId,l,"to be inserted"),console.log(e),Object(f.a)(Object(f.a)({},t),{},{todos:e});case"DELETE_TODO":return e=t.todos.filter((function(e){return e.id!==n.id})),console.log("delete",e),Object(f.a)(Object(f.a)({},t),{},{todos:e});default:return t}}));l.a.render(a.a.createElement(u.a,{store:_},a.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todolist-public",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/todolist-public","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[54,1,2]]]);
//# sourceMappingURL=main.d64f8ebe.chunk.js.map