(this["webpackJsonpspotify-app"]=this["webpackJsonpspotify-app"]||[]).push([[0],{41:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),o=n.n(c),s=(n(40),n(41),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),i=n(19),u=n(20),l=n(7),p="SPOTIFY_TOKEN",d="URL_CODE",f="CREATE_USER",h=n(31),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,b=Object(u.c)({spotify:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:null,refresh_token:null,code:null},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p:return Object(l.a)(Object(l.a)({},e),{},{token:r.token,refresh_token:r.refresh_token});case d:return Object(l.a)(Object(l.a)({},e),{},{code:r});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userList:[]},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(l.a)(Object(l.a)({},e),{},{userList:e.userList.concat(r)});default:return e}}}),O=Object(u.e)(b,j(Object(u.a)(h.a))),g=n(5),m=n.n(g),v=n(12),x=n(13),y=n(14),k=n(16),w=n(15),S=n(25),C=n(4),_=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?"".concat("https://server-strivify.herokuapp.com","/strivify/user?").concat(t):"".concat("https://server-strivify.herokuapp.com","/strivify/user"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,console.log(a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){return{type:f,payload:{username:e.username,password:e.password}}},L=function(e){return{type:p,payload:e}},P="6cee7a5f42ec413c8af5c31b8038445e",I="Basic "+btoa("".concat(P,":").concat("4f9d04fc510e49c5b228e904da1adfd1")),E="https://accounts.spotify.com/api/token",N="http://localhost:3000/",U="".concat("https://accounts.spotify.com/authorize","?client_id=").concat(P,"&response_type=code&redirect_uri=").concat(encodeURIComponent(N),"&scope=").concat("user-read-private%20user-read-email%20user-top-read","&state=34fFs29kd09"),R=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:I},body:"grant_type=refresh_token&refresh_token=".concat(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.access_token);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:I},body:"grant_type=authorization_code&code=".concat(t,"&redirect_uri=").concat(encodeURIComponent(N))});case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href=U;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){return new URLSearchParams(document.location.search.substring(1)).get("code")},M=(n(47),n(2)),z=function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e={username:localStorage.getItem("username"),password:localStorage.getItem("password")};0===this.props.user.userList.filter((function(t){return t.username===e.username})).length&&null!==e.username&&this.props.createUser(e)}},{key:"render",value:function(){var e=this;return Object(M.jsx)("div",{id:"home-page",children:Object(M.jsx)("button",{onClick:function(){return R(e.props.spotify.token)},children:"get refresh token"})})}}]),n}(r.PureComponent),B=Object(i.b)((function(e){return e}),(function(e){return{createUser:function(t){return e(T(t))},setToken:function(t){return e(L(t))}}}))(z),J=n(55),X=(n(49),n(56)),H=(n(50),function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.toastState,n=e.close;return Object(M.jsxs)(X.a,{style:{opacity:t?"1":"0"},children:[Object(M.jsxs)(X.a.Header,{children:[Object(M.jsx)("img",{src:"./assets/spotify.png",className:"rounded mr-2",alt:"",width:"20px",height:"20px"}),Object(M.jsx)("strong",{className:"mr-auto",children:"Strivify"}),Object(M.jsx)("button",{onClick:n,children:"x"})]}),Object(M.jsx)(X.a.Body,{children:this.props.children})]})}}]),n}(r.PureComponent)),K=function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.toggleState,n=e.toggleAction;return Object(M.jsx)("div",{className:"toggle-btn",style:{backgroundColor:t?"white":"#0d0d0d"},children:Object(M.jsx)("div",{className:"toggle",onClick:n,style:t?{backgroundColor:"#0d0d0d",marginLeft:"50%"}:{backgroundColor:"white",marginLeft:""}})})}}]),n}(a.a.PureComponent),V=function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(M.jsx)("div",{className:"logo",children:Object(M.jsx)("img",{src:"./assets/spotify.png",alt:""})})}}]),n}(a.a.PureComponent),Y=function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:{username:null,password:null},toggle:!1,toastState:!1,start:!0,redirect:!1},e.toggle=function(){var t=!e.state.toggle;e.setState({toggle:!e.state.toggle}),t&&(e.remember(),console.log(localStorage.getItem("username")))},e.fillLogin=function(t){var n=Object(l.a)({},e.state.user);n[t.currentTarget.id]=t.currentTarget.value,e.setState({user:n}),e.state.user.password?e.toastShow():e.closeToast()},e.login=Object(v.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.props.spotify.code);case 2:return n=t.sent,t.next=5,{token:n.access_token,refresh_token:n.refresh_token};case 5:return n=t.sent,e.props.setToken(n),t.next=9,e.setState({redirect:!0});case 9:case"end":return t.stop()}}),t)}))),e.getRefreshToken=function(){R()},e.remember=function(){localStorage.setItem("username",e.state.user.username),localStorage.setItem("password",e.state.user.password)},e.toastShow=function(){e.setState({toastState:!0})},e.closeToast=function(){e.setState({toastState:!1})},e.componentDidMount=function(){var t=F();e.props.setCode(t),t?(e.setState({start:!1}),console.log(e.props)):setTimeout((function(){e.setState({start:!1}),D()}),1800)},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this;return this.state.redirect?Object(M.jsx)(C.a,{to:"/home"}):Object(M.jsx)("div",{id:"login-page",children:this.state.start?Object(M.jsx)(V,{}):Object(M.jsxs)(J.a,{children:[Object(M.jsxs)("header",{children:[Object(M.jsx)("img",{src:"./assets/spotify.png",alt:""}),Object(M.jsx)("span",{children:"Strivify"})]}),Object(M.jsx)("button",{id:"login-fb",children:"Log in with Facebook"}),Object(M.jsx)("div",{className:"separator",children:"Or"}),Object(M.jsx)("input",{type:"text",id:"username",placeholder:"Username",onChange:this.fillLogin}),Object(M.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:this.fillLogin}),Object(M.jsxs)("div",{className:"remember",children:[Object(M.jsx)("span",{children:"Remember me"}),Object(M.jsx)(H,{toastState:this.state.toastState,close:this.closeToast,children:"Click here to create an account on our database"}),Object(M.jsx)(K,{toggleState:this.state.toggle,toggleAction:this.toggle})]}),Object(M.jsx)("button",{id:"login",onClick:function(){return e.login()},children:"Log In"})]})})}}]),n}(r.PureComponent),q=Object(i.b)((function(e){return e}),(function(e){return{createUser:function(t){return e((function(e,n){e(T(t))}))},setToken:function(t){return e((function(e,n){e(L(t))}))},setCode:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(Y),G=(n(52),function(e){Object(k.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).componentDidMount=Object(v.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_();case 1:case"end":return e.stop()}}),e)}))),e}return Object(y.a)(n,[{key:"render",value:function(){return Object(M.jsx)(S.a,{id:"router-web",children:Object(M.jsxs)(C.d,{children:[Object(M.jsx)(C.b,{path:"/home",exact:!0,render:function(e){return Object(M.jsx)(B,Object(l.a)({},e))}}),Object(M.jsx)(C.b,{path:"/",exact:!0,render:function(e){return Object(M.jsx)(q,Object(l.a)({},e))}})]})})}}]),n}(r.PureComponent)),Q=Object(i.b)((function(e){return e}))(G);o.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(i.a,{store:O,children:Object(M.jsx)(Q,{})})}),document.getElementById("root")),s()}},[[53,1,2]]]);
//# sourceMappingURL=main.7464ce2f.chunk.js.map