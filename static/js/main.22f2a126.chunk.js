(this["webpackJsonplms-task"]=this["webpackJsonplms-task"]||[]).push([[0],{33:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c.n(n),s=c(34),r=c.n(s),i=c(8),o=(c(41),c(30)),l=(c(45),o.a.initializeApp({apiKey:"AIzaSyBKIZjp4w3dTNjcHPBArhjb-eISwXHS1dM",authDomain:"task-70f6d.firebaseapp.com",projectId:"task-70f6d",storageBucket:"task-70f6d.appspot.com",messagingSenderId:"262141299085",appId:"1:262141299085:web:e6ff5fbd3f6d1c28f195c4"})),j=(o.a.firestore(),l),u=c(3);var d=function(e){var t=e.email,c=e.setEmail,n=e.password,a=e.setPassword,s=e.handleLogin,r=e.handleSignup,i=e.hasAccount,o=e.setHasAccount,l=e.emailError,j=e.passwordError;return Object(u.jsx)("section",{className:"login",children:Object(u.jsxs)("div",{className:"loginContainer",children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:l}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",autoFocus:!0,required:!0,value:n,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:j}),Object(u.jsx)("div",{className:"btnContainer",children:i?Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{onClick:s,children:"Sign in"}),Object(u.jsxs)("p",{children:["Don't have an account ?",Object(u.jsx)("span",{onClick:function(){return o(!i)},children:"Sign up"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{onClick:r,children:"Sign up"}),Object(u.jsxs)("p",{children:["Have an account ?",Object(u.jsx)("span",{onClick:function(){return o(!i)},children:"Sign in"})]})]})})]})})},b=c(19),h=c.n(b),O=c(23),m=j.firestore().collection("/newUser"),x=function(){return m},f=c(16),p=c(10);c(48);var g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),b=d[0],h=d[1],O=Object(n.useState)(0),x=Object(i.a)(O,2),p=x[0],g=x[1],v=Object(n.useState)(!1),N=Object(i.a)(v,2),S=N[0],w=N[1];return Object(u.jsx)("section",{className:"addUser",children:Object(u.jsx)("div",{className:"addUserContainer",children:S?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"You submitted successfully!"}),Object(u.jsx)("br",{}),Object(u.jsx)(f.b,{to:"/add",className:"glow-on-hover",onClick:function(){return w(!S)},style:{marginTop:"60px",paddingTop:"10px",width:"200px",textAlign:"center"},children:"Add New User"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{children:"First Name"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},autoFocus:!0,required:!0}),Object(u.jsx)("label",{children:"Last Name"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return l(e.target.value)},autoFocus:!0,required:!0}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)},autoFocus:!0,required:!0}),Object(u.jsx)("label",{children:"Score"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},autoFocus:!0,required:!0}),Object(u.jsx)("div",{className:"btnContainer",children:Object(u.jsx)("span",{children:Object(u.jsx)("button",{className:"glow-on-hover",onClick:function(){var e;e={fName:c,lName:o,email:b,score:p},m.add(e),w(!0)},children:"Add User"})})})]})})})},v=(c(33),c(36)),N=c(21),S=[{title:"Home",path:"/",icon:Object(u.jsx)(N.b,{}),cName:"nav-text"},{title:"Add User",path:"/add",icon:Object(u.jsx)(N.a,{}),cName:"nav-text"}],w=c(0);var k=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],s=function(){return a(!c)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(w.b.Provider,{value:{color:"#52085d"},children:[Object(u.jsx)("div",{className:"navbar",children:Object(u.jsx)(f.b,{to:"#",className:"menu-bars",children:Object(u.jsx)(v.a,{onClick:s})})}),Object(u.jsx)("nav",{className:c?"nav-menu active":"nav-menu",children:Object(u.jsxs)("ul",{className:"nav-menu-items",onClick:s,children:[Object(u.jsx)("li",{className:"navbar-toggle",children:Object(u.jsx)(f.b,{to:"#",className:"menu-bars",children:Object(u.jsx)(N.c,{})})}),S.map((function(e,t){return Object(u.jsx)("li",{className:e.cName,children:Object(u.jsxs)(f.b,{to:e.path,children:[e.icon,Object(u.jsx)("span",{children:e.title})]})},t)}))]})})]})})},C=c(24),y=c(29);var U=function(e){var t=e.currentUser,c=e.refreshList,a=Object(n.useState)(),s=Object(i.a)(a,2),r=s[0],o=s[1],l=Object(n.useState)(""),j=Object(i.a)(l,2),d=j[0],b=j[1];Object(n.useEffect)((function(){o(t.data),b("")}),[t]);var h=function(e){var t=e.target.name,c=e.target.value;o((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(C.a)({},t,c))}))};return Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h3",{children:" Update User Details"}),r?Object(u.jsxs)("div",{className:"edit-form",children:[Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"fName",children:"First Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",name:"fName",value:r.fName,onChange:function(e){return h(e)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"lName",children:"Last Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",name:"lName",value:r.lName,readOnly:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{type:"text",className:"form-control",name:"email",value:r.email,onChange:function(e){return h(e)}})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"score",children:"Score"}),Object(u.jsx)("input",{type:"text",className:"form-control",name:"score",value:r.score,onChange:function(e){return h(e)}})]})]}),Object(u.jsxs)("div",{className:"userBtn",children:[Object(u.jsx)("button",{onClick:function(){var e;(e=t.id,m.doc(e).delete()).then((function(){c(),b("User deleted!!!")})).catch((function(e){console.log(e)}))},children:"Delete"}),Object(u.jsx)("button",{type:"submit",onClick:function(){var e,c;(e=t.id,c=r,m.doc(e).update(c)).then((function(){b("User updated!!!")})).catch((function(e){console.log(e)}))},children:"Update"})]}),Object(u.jsx)("p",{children:d})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("p",{children:"Please click on a User..."})]})]})};c(56);var F=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),r=Object(i.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(-1),d=Object(i.a)(j,2),b=d[0],m=d[1],f=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x().get().then((function(e){e.docs.map((function(e){t.push({id:e.id,data:e.data()})}))}));case 3:console.log(t),a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[b]),Object(u.jsx)("section",{className:"addUser",children:Object(u.jsxs)("div",{className:"addUserContainer",style:{paddingTop:"0px",marginTop:"0px",color:"#fff"},children:[Object(u.jsx)("h1",{style:{fontSize:"2rem",textAlign:"center",marginTop:"0px"},children:" User List"}),Object(u.jsx)("ul",{className:"list-group",children:c&&c.map((function(e,t){return Object(u.jsx)("li",{style:{marginTop:"10px",fontSize:"1.5rem",cursor:"pointer"},onClick:function(){return function(e,t){l(e),m(t)}(e,t)},children:e.data.fName},e.id)}))}),o?Object(u.jsx)("div",{className:" user",children:Object(u.jsx)(U,{currentUser:o,refreshList:function(){l({}),m(-1)}})}):Object(u.jsx)("div",{children:Object(u.jsx)("h3",{style:{marginTop:"30px",color:"#fff"},children:"Please click on a User..."})})]})})};var E=function(e){var t=e.handleLogout,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=(a[0],a[1]),r=Object(n.useState)(-1),o=Object(i.a)(r,2),l=o[0],j=(o[1],function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,x().get().then((function(e){e.docs.map((function(e){t.push({id:e.id,data:e.data()})}))}));case 3:console.log(t),s(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){j()}),[l]),Object(u.jsx)("div",{className:"mainpage",children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(k,{}),Object(u.jsx)("button",{className:"l-out-btn glow-on-hover",onClick:t,children:"Logout"}),Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{path:"/add",component:g}),Object(u.jsx)(p.a,{path:"/",component:F})]})]})})};var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],l=r[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1],x=Object(n.useState)(""),f=Object(i.a)(x,2),p=f[0],g=f[1],v=Object(n.useState)(""),N=Object(i.a)(v,2),S=N[0],w=N[1],k=Object(n.useState)(!1),C=Object(i.a)(k,2),y=C[0],U=C[1],F=function(){g(""),w("")},A=function(){j.auth().onAuthStateChanged((function(e){e?(l(""),m(""),a(e)):a("")}))};return Object(n.useEffect)((function(){A()})),Object(u.jsx)(u.Fragment,{children:c?Object(u.jsx)(E,{handleLogout:function(){j.auth().signOut()}}):Object(u.jsx)(d,{email:o,setEmail:l,password:O,setPassword:m,handleLogin:function(){F(),j.auth().signInWithEmailAndPassword(o,O).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":g(e.message);break;case"auth/wrong-password":w(e.message)}}))},handleSignup:function(){F(),j.auth().createUserWithEmailAndPassword(o,O).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":g(e.message);break;case"auth/weak-password":w(e.message)}}))},hasAccount:y,setHasAccount:U,emailError:p,passwordError:S})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.22f2a126.chunk.js.map