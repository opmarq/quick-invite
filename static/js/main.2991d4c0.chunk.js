(this["webpackJsonpquick-invite"]=this["webpackJsonpquick-invite"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(42),i=n.n(a),o=n(150),s=n(147),b=n(4),j=n(137),d=n(141),l=n(139),u=n(148),h=n(24),x=n(152),O=n(153),m=n(154),f=n(91),g=n.n(f),p=n(144),v=n(151),S=n(138),w=n(149),C=n(143),y=n(140),k=n(3),N=function(e){var t=e.text,n=e.icon,r=e.onClose;return Object(k.jsx)(j.a,{bg:"brand.bgSecondary",py:"1",px:"3",borderRadius:"lg",border:"1px",borderColor:"brand.secondary",children:Object(k.jsxs)(S.a,{align:"center",children:[n&&Object(k.jsx)(S.b,{children:n}),Object(k.jsx)(S.b,{children:Object(k.jsx)(l.a,{fontSize:"sm",color:"brand.secondary",children:t})}),Object(k.jsx)(S.b,{children:Object(k.jsx)(y.a,{onClick:r,cursor:"pointer",w:"10px",h:"10px",color:"brand.secondary"})})]})})},z=function(e){var t=e.suggestions,n=void 0===t?[]:t,c=e.value,a=e.selected,i=void 0===a?[]:a,o=e.onChange,s=e.onRemove,b=e.onSelect,u=e.isLoading,h=void 0!==u&&u,x=Object(r.useRef)(null);return Object(k.jsxs)(j.a,{w:"100%",position:"relative",children:[Object(k.jsx)(j.a,{px:"1",py:"1",bg:"brand.bgSecondary",borderRadius:"xl",border:"1px",borderColor:"#383C56",onClick:function(){var e;null===(e=x.current)||void 0===e||e.focus()},children:Object(k.jsxs)(S.a,{align:"center",children:[i.map((function(e){return Object(k.jsx)(S.b,{children:Object(k.jsx)(N,{text:e.text,icon:e.icon,onClose:function(){s(e)}})},e.id)})),Object(k.jsx)(S.b,{children:Object(k.jsx)(w.a,{p:"1",variant:"unstyled",onChange:o,value:c,ref:x,color:"white",placeholder:0===i.length?"Search names or emails...":""})})]})}),Object(k.jsx)(C.a,{in:h||n.length>0,children:Object(k.jsx)(j.a,{position:"absolute",w:"100%",shadow:"lg",mt:"1",bg:"brand.bgSecondary",children:h?Object(k.jsx)(j.a,{p:"3",children:Object(k.jsx)(d.a,{children:Object(k.jsx)(v.a,{color:"white"})})}):function(e){return e.filter((function(e){var t=e.id;return!i.some((function(e){return e.id===t}))})).map((function(e){return Object(k.jsx)(j.a,{borderBottom:"1px",p:"3",cursor:"pointer",onClick:function(){var t;b(e),null===(t=x.current)||void 0===t||t.focus()},children:Object(k.jsxs)(S.a,{align:"center",children:[Object(k.jsx)(S.b,{children:e.icon}),Object(k.jsx)(S.b,{children:Object(k.jsx)(l.a,{color:"brand.text",children:e.text})})]})},e.id)}))}(n)})})]})},E=n(45),I=n.n(E),L=n(73),M=function(e){return new Promise((function(t){return setTimeout(t,e)}))},R=/error/gi,B=[{firstName:"Tima",lastName:"tom",id:(1e3*Math.random()).toString(),email:"tima@mail.com"},{firstName:"Tata",lastName:"Toto",id:(1e3*Math.random()).toString(),email:"tata@gmail.com"},{firstName:"Jhone",lastName:"doe",id:(1e3*Math.random()).toString(),email:"joe@mail.com"},{firstName:"Omar",lastName:"Chajia",id:(1e3*Math.random()).toString(),email:"omar@gmail.com"}],D=function(e){return e.trim().toLowerCase()},P=function(){var e=Object(L.a)(I.a.mark((function e(t){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D(t),e.next=3,M(200+200*Math.random());case 3:if(!n.match(R)){e.next=5;break}throw new Error("Backend failed for some reasons.");case 5:if(n){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",B.filter((function(e){var t=e.firstName,r=e.lastName;return e.email===n||(!!D(t).startsWith(n)||!!D(r).startsWith(n))})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(L.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(200+200*Math.random());case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W={invites:[]},A=Object(r.createContext)({dispatch:function(){},state:W}),J=function(e){var t=e.children,n=Object(r.useState)(W),c=Object(b.a)(n,2),a=c[0],i=c[1];return Object(k.jsx)(A.Provider,{value:{state:a,dispatch:i},children:t})},q=function(e){var t=e.onInviteDone,n=Object(r.useState)([]),c=Object(b.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)([]),s=Object(b.a)(o,2),u=s[0],f=s[1],v=Object(r.useState)(""),S=Object(b.a)(v,2),w=S[0],C=S[1],y=Object(r.useState)(!1),N=Object(b.a)(y,2),E=N[0],I=N[1],L=Object(r.useState)(!1),M=Object(b.a)(L,2),R=M[0],B=M[1],D=Object(r.useContext)(A).dispatch,W=Object(r.useCallback)(g()((function(e){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?i([{firstName:"",lastName:"",id:e,email:e}]):(I(!0),P(e).then((function(e){i(e),I(!1)})))}),200),[]);Object(r.useEffect)((function(){w?W(w):i([])}),[w,W]);var J=a.map((function(e){var t=e.firstName,n=e.email;return{id:e.id,text:t||n,icon:t?Object(k.jsx)(x.a,{name:t,size:"xs",bg:"brand.secondary",color:"white"}):Object(k.jsx)(p.a,{w:"5",h:"5",color:"brand.secondary"})}}));return Object(k.jsxs)(j.a,{children:[Object(k.jsx)(l.a,{color:"brand.heading",fontSize:"md",mb:"4",children:"Email invite"}),Object(k.jsx)(l.a,{color:"brand.text",mb:"4",children:"Send members an email invitation to join this workspace."}),Object(k.jsxs)(O.a,{spacing:"6",children:[Object(k.jsx)(d.a,{w:"100%",children:Object(k.jsx)(z,{isLoading:E,value:w,suggestions:J,selected:u,onChange:function(e){C(e.target.value)},onRemove:function(e){var t=u.filter((function(t){return t.id!==e.id}));f(t)},onSelect:function(e){f([].concat(Object(h.a)(u),[e])),i([]),C("")}})}),Object(k.jsx)(d.a,{children:Object(k.jsx)(m.a,{disabled:0===u.length,borderRadius:"lg",onClick:function(){var e=u.map((function(e){return e.text}));B(!0),T(e).then((function(e){D({invites:e}),B(!1),t()}))},isLoading:R,children:"Invite"})})]})]})},Y=n(146),Z=n(145),F=function(e){var t=e.onInvite,n=Object(r.useContext)(A).state.invites;return Object(k.jsx)(d.a,{children:Object(k.jsxs)(j.a,{bg:"brand.bgPrimary",w:"2xl",px:"6",py:"10",borderRadius:"lg",children:[Object(k.jsx)(d.a,{children:Object(k.jsxs)(l.a,{color:"green.300",mb:"6",children:["You have successfuly created a meeting ",Object(k.jsx)(Z.a,{})]})}),Object(k.jsxs)(j.a,{children:[Object(k.jsx)(d.a,{children:n.length>0?Object(k.jsxs)(j.a,{mb:"6",children:[Object(k.jsx)(l.a,{color:"white",mb:"6",children:"With the following teammates"}),n.map((function(e){return Object(k.jsx)(Y.a,{spacing:10,children:Object(k.jsx)(Y.c,{children:Object(k.jsxs)(S.a,{align:"center",children:[Object(k.jsx)(S.b,{children:Object(k.jsx)(Y.b,{as:Z.a,color:"green.500"})}),Object(k.jsx)(S.b,{children:Object(k.jsx)(l.a,{color:"white",children:e})})]})})})}))]}):Object(k.jsx)(l.a,{color:"brand.text",mb:"6",children:"You have no teammates"})}),Object(k.jsx)(d.a,{children:Object(k.jsx)(m.a,{onClick:t,children:n.length>0?"Invite more":"Invite Teammates"})})]})]})})};var $=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(k.jsxs)(j.a,{p:"3",children:[Object(k.jsx)(F,{onInvite:function(){c(!0)}}),Object(k.jsxs)(u.a,{isOpen:n,onClose:function(){return c(!1)},size:"lg",children:[Object(k.jsx)(u.e,{}),Object(k.jsxs)(u.c,{px:"6",py:"10",bg:"brand.bgPrimary",children:[Object(k.jsx)(u.d,{children:Object(k.jsx)(d.a,{color:"brand.heading",children:Object(k.jsx)(l.a,{fontSize:"x-large",children:"Invite members"})})}),Object(k.jsx)(u.b,{children:Object(k.jsx)(q,{onInviteDone:function(){c(!1)}})})]})]})]})},_={fonts:{body:"Lato, sans-serif",heading:"Lato, serif"},fontWeights:{normal:400,semibold:400},colors:{brand:{bgPrimary:"#272D45",primary:"#2C54EA",secondary:"#EE748F",bgSecondary:"#202437",heading:"#DBE1E6",text:"#8C9DB5"}},components:{Button:{baseStyle:{fontWeight:"bold"},sizes:{md:{fontSize:"16px",padding:"16px"}},variants:{solid:{borderColor:"green.500",bg:"#2C54EA",color:"white",_hover:{bg:"#2D4392"}}},defaultProps:{size:"md",variant:"solid"}}}};i.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(J,{children:Object(k.jsx)(o.a,{resetCSS:!0,theme:Object(s.a)(_),children:Object(k.jsx)($,{})})})}),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.2991d4c0.chunk.js.map