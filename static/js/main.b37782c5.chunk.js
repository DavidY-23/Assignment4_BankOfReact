(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{41:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(33),i=n.n(c),s=(n(41),n(34)),o=n(13),u=n(19),d=n(5),b=n(6),j=n(7),l=n(8),h=n(22),p=n.n(h),O=n(4),m=n(2),x=n(0),f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(r.Component),v=f,g=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){document.title="Bank of React"}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(x.jsx)("h1",{children:"Bank of React"}),Object(x.jsx)(O.b,{to:"/userProfile",children:"User Profile"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/login",children:"Login"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/credit",children:"Credits"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/debit",children:"Debits"}),Object(x.jsx)(v,{accountBalance:this.props.accountBalance})]})}}]),n}(r.Component),y=g,C=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){document.title="User Profile"}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"User Profile"}),Object(x.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(x.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(x.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(r.Component),B=C,D=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Object(u.a)({},e.state.user),r=t.target.name,a=t.target.value;n[r]=a,e.setState({user:n})},e.handleSubmit=function(t){t.preventDefault(),e.props.mockLogIn(e.state.user),e.setState({redirect:!0})},e.state={user:{userName:"",password:""},redirect:!1},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){document.title="Login"}},{key:"render",value:function(){return this.state.redirect?Object(x.jsx)(m.a,{to:"/userProfile"}):Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(x.jsx)("input",{type:"text",name:"userName",onChange:this.handleChange,value:this.state.user.userName})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password"})]}),Object(x.jsx)("button",{children:"Log In"})]})]})}}]),n}(r.Component),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).debitView=function(){var e=r.props.debitsArray.map((function(e){return Object(x.jsxs)("li",{style:{listStylePosition:"inside"},children:[e.description,", $",e.amount,", ",e.date]},e.description)}));return Object(x.jsx)("ul",{children:e})},r.addDebit=function(e){e.preventDefault(),r.props.addingDebits(e);var t=new Date,n=t.getUTCMonth()+1,a=t.getUTCDate(),c=t.getUTCFullYear()+"-"+n+"-"+a;""!==e.target.description.value&&""!==e.target.amount.value&&r.setState((function(t){return{accountBalance:(t.accountBalance-e.target.amount.value).toFixed(2),debitsArray:[].concat(Object(o.a)(t.debitsArray),[{description:e.target.description.value,amount:e.target.amount.value,date:c}])}}))},r.state={accountBalance:0,debitsArray:[]},r}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Debits"}),this.debitView(),Object(x.jsxs)("h2",{children:["Balance: ",this.props.accountBalance]}),Object(x.jsxs)("form",{onSubmit:this.addDebit,children:[Object(x.jsxs)("label",{children:["Description:",Object(x.jsx)("input",{type:"text",name:"description"})]}),Object(x.jsxs)("label",{children:[" Amount:",Object(x.jsx)("input",{type:"number",step:"0.01",name:"amount"})]}),Object(x.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(x.jsx)(O.b,{to:"/",children:"Return to Home"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/credit",children:"Credits"})]})}}]),n}(r.Component),A=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).creditView=function(){var e=r.props.creditsArray.map((function(e){return Object(x.jsxs)("li",{style:{listStylePosition:"inside"},children:[e.description,", $",e.amount,", ",e.date]},e.description)}));return Object(x.jsx)("ul",{children:e})},r.addCredit=function(e){e.preventDefault(),r.props.addingCredits(e);var t=new Date,n=t.getUTCMonth()+1,a=t.getUTCDate(),c=t.getUTCFullYear()+"-"+n+"-"+a;""!==e.target.description.value&&""!==e.target.amount.value&&r.setState((function(t){return{accountBalance:(t.accountBalance- -e.target.amount.value).toFixed(2),creditsArray:[].concat(Object(o.a)(t.creditsArray),[{description:e.target.description.value,amount:e.target.amount.value,date:c}])}}))},r.state={accountBalance:0,creditsArray:[]},r}return Object(b.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Credit"}),this.creditView(),Object(x.jsxs)("h2",{children:["Balance: ",this.props.accountBalance]}),Object(x.jsxs)("form",{onSubmit:this.addCredit,children:[Object(x.jsxs)("label",{children:["Description:",Object(x.jsx)("input",{type:"text",name:"description"})]}),Object(x.jsxs)("label",{children:[" Amount:",Object(x.jsx)("input",{type:"number",step:"0.01",name:"amount"})]}),Object(x.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(x.jsx)(O.b,{to:"/",children:"Return to Home"}),Object(x.jsx)("br",{}),Object(x.jsx)(O.b,{to:"/debit",children:"Debits"})]})}}]),n}(r.Component),S=n(24),U=n.n(S),w=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).mockLogIn=function(t){var n=Object(u.a)({},e.state.currentUser);n.userName=t.userName,e.setState({currentUser:n})},e.addingDebits=function(t){if(""!==t.target.description.value&&""!==t.target.amount.value){var n=new Date,r=n.getUTCMonth()+1,a=n.getUTCDate(),c=n.getUTCFullYear()+"-"+r+"-"+a;e.setState((function(n){return{accountBalance:(e.state.accountBalance-t.target.amount.value).toFixed(2),debitsArray:[].concat(Object(o.a)(n.debitsArray),[{description:t.target.description.value,amount:t.target.amount.value,date:c}])}}))}},e.addingCredits=function(t){if(""!==t.target.description.value&&""!==t.target.amount.value){var n=new Date,r=n.getUTCMonth()+1,a=n.getUTCDate(),c=n.getUTCFullYear()+"-"+r+"-"+a;e.setState((function(n){return{accountBalance:(e.state.accountBalance- -t.target.amount.value).toFixed(2),creditsArray:[].concat(Object(o.a)(n.creditsArray),[{description:t.target.description.value,amount:t.target.amount.value,date:c}])}}))}},e.state={accountBalance:14568.27,currentUser:{userName:"Joe Smith",memberSince:"07/23/96"},debitsArray:[],creditsArray:[]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://moj-api.herokuapp.com/debits",t="https://moj-api.herokuapp.com/credits",e.next=4,U.a.get("https://moj-api.herokuapp.com/debits");case 4:return n=e.sent,e.next=7,U.a.get(t);case 7:r=e.sent,this.setState({debitsArray:n.data}),this.setState({creditsArray:r.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(x.jsx)(O.a,{basename:"/Assignment4_BankOfReact",children:Object(x.jsxs)("div",{children:[Object(x.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(x.jsx)(y,{accountBalance:e.state.accountBalance})}}),Object(x.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(x.jsx)(B,{userName:e.state.currentUser.userName,memberSince:e.state.currentUser.memberSince})}}),Object(x.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(x.jsx)(D,{user:e.state.currentUser,mockLogIn:e.mockLogIn})}}),Object(x.jsx)(m.b,{exact:!0,path:"/debit",render:function(){return Object(x.jsx)(k,{accountBalance:e.state.accountBalance,debitsArray:e.state.debitsArray,addingDebits:e.addingDebits})}}),Object(x.jsx)(m.b,{exact:!0,path:"/credit",render:function(){return Object(x.jsx)(A,{accountBalance:e.state.accountBalance,creditsArray:e.state.creditsArray,addingCredits:e.addingCredits})}})]})})}}]),n}(r.Component),F=w,T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),T()}},[[70,1,2]]]);
//# sourceMappingURL=main.b37782c5.chunk.js.map