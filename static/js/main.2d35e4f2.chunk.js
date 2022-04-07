(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(34),s=n.n(c),i=(n(41),n(16)),o=n(22),u=n(4),d=n(5),j=n(6),b=n(7),l=n(13),p=n.n(l),h=n(8),m=n(2),O=n(0),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(r.Component),f=x,v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.title="Bank of React"}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(O.jsx)("h1",{children:"Bank of React"}),Object(O.jsx)(h.b,{to:"/userProfile",children:"User Profile"}),Object(O.jsx)("br",{}),Object(O.jsx)(h.b,{to:"/login",children:"Login"}),Object(O.jsx)("br",{}),Object(O.jsx)(h.b,{to:"/credit",children:"Credits"}),Object(O.jsx)("br",{}),Object(O.jsx)(h.b,{to:"/debit",children:"Debits"}),Object(O.jsx)(f,{accountBalance:this.props.accountBalance})]})}}]),n}(r.Component),y=v,g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.title="User Profile"}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"User Profile"}),Object(O.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(O.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(O.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),k=g,B=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(o.a)({},e.state.user),r=t.target.name,a=t.target.value;n[r]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){document.title="Login"}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(m.a,{to:"/userProfile"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(O.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",name:"password"})]}),Object(O.jsx)("button",{children:"Log In"})]})]})}}]),n}(r.Component),A=n(21),C=n(14),S=n.n(C),D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).debitView=function(){var e=r.state.debitsArray.map((function(e){return Object(O.jsxs)("li",{style:{listStylePosition:"inside"},children:[e.description,", $",e.amount,", ",e.date]},e.description)}));return Object(O.jsx)("ul",{children:e})},r.addDebit=function(e){e.preventDefault();var t=new Date,n=t.getUTCMonth()+1,a=t.getUTCDate(),c=t.getUTCFullYear()+"-"+n+"-"+a;""!==e.target.description.value&&""!==e.target.amount.value&&r.setState((function(t){return{accountBalance:(t.accountBalance-e.target.amount.value).toFixed(2),debitsArray:[].concat(Object(A.a)(t.debitsArray),[{description:e.target.description.value,amount:e.target.amount.value,date:c}])}}))},r.state={accountBalance:r.props.accountBalance,debitsArray:r.props.debitsArray},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Debits","https://moj-api.herokuapp.com/debits",e.next=4,S.a.get("https://moj-api.herokuapp.com/debits");case 4:t=e.sent,this.setState({debitsArray:t.data});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Debits"}),this.debitView(),Object(O.jsxs)("h2",{children:["Balance: ",this.state.accountBalance]}),Object(O.jsxs)("form",{onSubmit:this.addDebit,children:[Object(O.jsxs)("label",{children:["Description:",Object(O.jsx)("input",{type:"text",name:"description"})]}),Object(O.jsxs)("label",{children:[" Amount:",Object(O.jsx)("input",{type:"number",step:"0.01",name:"amount"})]}),Object(O.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(O.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),w=D,U=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).creditView=function(){var e=r.state.creditsArray.map((function(e){return Object(O.jsxs)("li",{style:{listStylePosition:"inside"},children:[e.description,", $",e.amount,", ",e.date]},e.description)}));return Object(O.jsx)("ul",{children:e})},r.addCredit=function(e){e.preventDefault();var t=new Date,n=t.getUTCMonth()+1,a=t.getUTCDate(),c=t.getUTCFullYear()+"-"+n+"-"+a;""!==e.target.description.value&&""!==e.target.amount.value&&r.setState((function(t){return{accountBalance:(t.accountBalance- -Math.abs(e.target.amount.value)).toFixed(2),creditsArray:[].concat(Object(A.a)(t.creditsArray),[{description:e.target.description.value,amount:e.target.amount.value,date:c}])}}))},r.state={accountBalance:r.props.accountBalance,creditsArray:r.props.creditsArray},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Credits","https://moj-api.herokuapp.com/credits",e.next=4,S.a.get("https://moj-api.herokuapp.com/credits");case 4:t=e.sent,this.setState({creditsArray:t.data});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Credit"}),this.creditView(),Object(O.jsxs)("h2",{children:["Balance: ",this.state.accountBalance]}),Object(O.jsxs)("form",{onSubmit:this.addCredit,children:[Object(O.jsxs)("label",{children:["Description:",Object(O.jsx)("input",{type:"text",name:"description"})]}),Object(O.jsxs)("label",{children:[" Amount:",Object(O.jsx)("input",{type:"number",step:"0.01",name:"amount"})]}),Object(O.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(O.jsx)(h.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),M=U,N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(o.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.state={accountBalance:14568.27,currentUser:{userName:"Joe Smith",memberSince:"07/23/96"},debitsArray:[],creditsArray:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/debits",t="https://moj-api.herokuapp.com/credits",e.next=4,S.a.get("https://moj-api.herokuapp.com/debits");case 4:return n=e.sent,e.next=7,S.a.get(t);case 7:r=e.sent,this.setState({debitsArray:n.data}),this.setState({creditsArray:r.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(O.jsx)(h.a,{basename:"/Assignment4_BankOfReact",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(O.jsx)(y,{accountBalance:e.state.accountBalance})}}),Object(O.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(O.jsx)(k,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(O.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(O.jsx)(B,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(O.jsx)(m.b,{exact:!0,path:"/debit",render:function(){return Object(O.jsx)(w,{accountBalance:e.state.accountBalance,debitsArray:e.state.debitsArray})}}),Object(O.jsx)(m.b,{exact:!0,path:"/credit",render:function(){return Object(O.jsx)(M,{accountBalance:e.state.accountBalance,creditsArray:e.state.creditsArray})}})]})})}}]),n}(r.Component),P=N,F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),F()}},[[70,1,2]]]);
//# sourceMappingURL=main.2d35e4f2.chunk.js.map