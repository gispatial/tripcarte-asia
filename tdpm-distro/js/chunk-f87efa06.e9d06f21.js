(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f87efa06"],{1880:function(e,t,s){e.exports=s.p+"img/register.cfd9ef09.jpg"},"3bae":function(e,t,s){"use strict";s.r(t);var a,i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"},[a("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"},[a("vx-card",[a("div",{staticClass:"full-page-bg-color",attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row no-gutter"},[a("div",{staticClass:"vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center"},[a("img",{staticClass:"mx-auto",attrs:{src:s("1880"),alt:"register"}})]),a("div",{staticClass:"vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg"},[a("div",{staticClass:"px-8 pt-8 register-tabs-container"},[a("div",{staticClass:"vx-card__title mb-4"},[a("h4",{staticClass:"mb-4"},[e._v("Create Account")]),a("p",[e._v("Fill the below form to create a new account.")])]),a("vs-tabs",[a("vs-tab",{attrs:{label:"JWT"}},[a("register-jwt")],1),a("vs-tab",{attrs:{label:"Firebase"}},[a("register-firebase")],1),a("vs-tab",{attrs:{label:"Auth0"}},[a("register-auth0")],1)],1)],1)])])])])],1)])},l=[],o=s("2877"),n={},c=Object(o["a"])(n,a,i,!1,null,null,null),d=c.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"clearfix"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_dash|min:3",expression:"'required|alpha_dash|min:3'"}],staticClass:"w-full",attrs:{"data-vv-validate-on":"blur","label-placeholder":"Name",name:"displayName",placeholder:"Name"},model:{value:e.displayName,callback:function(t){e.displayName=t},expression:"displayName"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("displayName")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-6",attrs:{"data-vv-validate-on":"blur",name:"email",type:"email","label-placeholder":"Email",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("email")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:6|max:10",expression:"'required|min:6|max:10'"}],ref:"password",staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur",name:"password","label-placeholder":"Password",placeholder:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("password")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"min:6|max:10|confirmed:password",expression:"'min:6|max:10|confirmed:password'"}],staticClass:"w-full mt-6",attrs:{type:"password","data-vv-validate-on":"blur","data-vv-as":"password",name:"confirm_password","label-placeholder":"Confirm Password",placeholder:"Confirm Password"},model:{value:e.confirm_password,callback:function(t){e.confirm_password=t},expression:"confirm_password"}}),s("span",{staticClass:"text-danger text-sm"},[e._v(e._s(e.errors.first("confirm_password")))]),s("vs-checkbox",{staticClass:"mt-6",model:{value:e.isTermsConditionAccepted,callback:function(t){e.isTermsConditionAccepted=t},expression:"isTermsConditionAccepted"}},[e._v("I accept the terms & conditions.")]),s("vs-button",{staticClass:"mt-6",attrs:{type:"border",to:"/pages/login"}},[e._v("Login")]),s("vs-button",{staticClass:"float-right mt-6",attrs:{disabled:!e.validateForm},on:{click:e.registerUser}},[e._v("Register")])],1)},u=[],p={data:function(){return{displayName:"",email:"",password:"",confirm_password:"",isTermsConditionAccepted:!0}},computed:{validateForm:function(){return!this.errors.any()&&""!=this.displayName&&""!=this.email&&""!=this.password&&""!=this.confirm_password&&!0===this.isTermsConditionAccepted}},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerUser:function(){if(this.validateForm&&this.checkLogin()){var e={userDetails:{displayName:this.displayName,email:this.email,password:this.password,confirmPassword:this.confirm_password},notify:this.$vs.notify};this.$store.dispatch("auth/registerUser",e)}}}},v=p,f=Object(o["a"])(v,m,u,!1,null,null,null),h=f.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("vs-button",{staticClass:"mb-3 mt-4 ml-2",attrs:{color:"#eb5424"},on:{click:e.registerAuth0}},[e._v("Auth0")])},g=[],b={methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"Login Attempt",text:"You are already logged in!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},registerAuth0:function(){this.checkLogin()&&this.$auth.login({target:this.$route.query.to})}}},x=b,_=Object(o["a"])(x,w,g,!1,null,null,null),C=_.exports,y={components:{RegisterJwt:d,RegisterFirebase:h,RegisterAuth0:C}},k=y,N=(s("f153"),Object(o["a"])(k,r,l,!1,null,null,null));t["default"]=N.exports},e3d8:function(e,t,s){},f153:function(e,t,s){"use strict";var a=s("e3d8"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-f87efa06.e9d06f21.js.map