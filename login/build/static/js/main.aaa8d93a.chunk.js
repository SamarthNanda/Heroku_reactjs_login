(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{16:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(28),r=n.n(c),o=(n(35),n(16),n(9)),i=n(13),j=n.n(i),l=n(8),b=n(0);function d(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),d=i[0],u=i[1],h=Object(s.useState)(""),O=Object(o.a)(h,2),p=O[0],x=O[1],g=Object(s.useState)(""),m=Object(o.a)(g,2),f=m[0],y=m[1];return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"Registration Page"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j.a.post("http://localhost:3001/register",{userType:a,username:d,password:p}).then((function(e){console.log(e.data.message),y(e.data.message)}))},children:[Object(b.jsxs)("select",{type:"text",id:"userType",className:"form-control",name:"userType",placeholder:"User Type (Admin || Student)",required:!0,onChange:function(e){c(e.target.value)},children:[Object(b.jsx)("option",{selected:!0,children:"Choose User Type..."}),Object(b.jsx)("option",{value:"Admin",children:"Admin"}),Object(b.jsx)("option",{value:"Student",children:"Student"})]}),Object(b.jsx)("input",{type:"text",id:"login",className:"form-control",name:"username",placeholder:"Username",required:!0,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("input",{type:"password",id:"password",className:"form-control",name:"password",placeholder:"password",required:!0,onChange:function(e){x(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Register"})]}),Object(b.jsx)("br",{}),"saved"===f?Object(b.jsx)("div",{children:Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-info",children:"Login to Continue"})})}):Object(b.jsx)("span",{children:" "}),"error"===f?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"errorText",children:"You are Already Registered!"}),Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-info",children:"Click Here To Login"})})]}):Object(b.jsx)("span",{children:" "})]})}var u=n(10),h=n.n(u),O=n(30);function p(e){var t=Object(s.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),d=i[0],u=i[1],p=Object(s.useState)(""),x=Object(o.a)(p,2),g=x[0],m=x[1];return Object(b.jsxs)("div",{className:"form",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h1",{children:"Login Page"}),Object(b.jsx)("br",{}),Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",id:"login",className:"form-control",name:"username",placeholder:"Username",required:!0,onChange:function(e){c(e.target.value)}}),Object(b.jsx)("input",{type:"password",id:"password",className:"form-control",name:"password",placeholder:"password",required:!0,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){e.preventDefault(),console.log("login is called"),j.a.post("http://localhost:3001/login",{username:a,password:d}).then((function(e){if(e.data.message)console.log(e.data.message),"wrong password"===e.data.message?alert("Try logging in with a Correct Password"):alert("Try logging in with a valid Username or Register yourself Now");else{var t=e.data.token,n=Object(O.a)(t);h.a.set("email",n.email),h.a.set("userType",n.userType),h.a.set("token",t),console.log(n),m("/loggedin")}}))},children:"Login"}),Object(b.jsx)("span",{children:"   "}),Object(b.jsx)(l.b,{to:"/register",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-info",children:"Register Now"})})]}),Object(b.jsx)("br",{}),"/loggedin"===g?Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hi ",h.a.get("email")]}),Object(b.jsx)(l.b,{to:{pathname:g,prop:{userType:h.a.get("userType"),email:h.a.get("email")}},children:Object(b.jsxs)("button",{className:"btn btn-info",children:["continue As ",h.a.get("userType")]})})]}):Object(b.jsx)("span",{children:" "})]})}var x=n(2);function g(e){return console.log(e),Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsxs)("h1",{children:["You are Logged In as ",e.location.prop.userType]}),Object(b.jsx)("br",{}),"admin"===e.location.prop.userType?Object(b.jsx)("textarea",{children:"If You are Admin You Can Change This Text and is you are a student you are only allowed to read only!!"}):Object(b.jsx)("textarea",{readOnly:"true",children:"If You are Admin You Can Change This Text and if you are a student you are allowed to read only!!"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(l.b,{to:"/",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-success",children:"Logout"})})]})}function m(e){return Object(b.jsx)("div",{children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(l.a,{children:Object(b.jsxs)(x.c,{children:[Object(b.jsx)(x.a,{path:"/register",component:d}),Object(b.jsx)(x.a,{path:"/",exact:!0,component:p}),Object(b.jsx)(x.a,{path:"/loggedin",exact:!0,component:g})]})})})})}var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(m,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),y()}},[[60,1,2]]]);
//# sourceMappingURL=main.aaa8d93a.chunk.js.map