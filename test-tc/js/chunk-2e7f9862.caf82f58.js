(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e7f9862"],{"13c7":function(t,a,s){"use strict";var e=s("e169"),i=s.n(e);i.a},"1ce0":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"dashboard-analytics"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base"}),e("div",{staticClass:"vx-col w-full sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base"},[e("vx-card",{staticClass:"text-center bg-success-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[e("img",{staticClass:"decore-left",attrs:{src:s("8ee6"),alt:"Decore Left",width:"200"}}),e("img",{staticClass:"decore-right",attrs:{src:s("ee15"),alt:"Decore Right",width:"175"}}),e("feather-icon",{staticClass:"p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",attrs:{icon:"AwardIcon",svgClasses:"h-8 w-8"}}),e("h1",{staticClass:"mb-6 text-white"},[t._v("WELCOME TO TRIPCARTE DASHBOARD MANAGEMENT PORTAL")]),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[e("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",href:"/apps/reviews/all"}},[t._v("Details")]),e("statistics-card-line",{attrs:{icon:"FeatherIcon",statisticTitle:"Total Reviews Collected - 1.4k"}})],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[e("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":"",href:"/syst/ag-grid-table"}},[t._v("Details")]),e("statistics-card-line",{attrs:{icon:"LayersIcon",statisticTitle:"Total Redemption this week - 350 tickets .+1"}})],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[e("h5",{staticClass:"mb-6 text-white"},[t._v(" ")]),e("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statisticTitle:"Total Redemption this year - 14k"}})],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4"},[e("h5",{staticClass:"mb-6 text-white"},[t._v(" ")]),e("statistics-card-line",{attrs:{icon:"DollarSignIcon",statisticTitle:"Total Pending Payout - RM 2300"}})],1)]),e("p",{staticClass:"xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"},[t._v("This is default home.")])],1)],1),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("div",[e("vx-card")],1)]),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("div",[e("vx-card")],1)])])]),e("div",[t._v("-- Tripcarte.Asia Merchants Dashboard Prototype Version-0.0.1 --")])])},i=[],c=s("1321"),l=s.n(c),n=s("43ca"),o=s("da24"),r=s("5f88"),d=s("4489"),u={data:function(){return{checkpointReward:{},subscribersGained:{},ordersRecevied:{},salesBarSession:{},supportTracker:{},productsOrder:{},salesRadar:{},timelineData:[{color:"primary",icon:"PlusIcon",title:"Client Meeting",desc:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",time:"25 mins Ago"},{color:"warning",icon:"MailIcon",title:"Email Newsletter",desc:"Cupcake gummi bears soufflé caramels candy",time:"15 Days Ago"},{color:"danger",icon:"UsersIcon",title:"Plan Webinar",desc:"Candy ice cream cake. Halvah gummi bears",time:"20 days ago"},{color:"success",icon:"LayoutIcon",title:"Launch Website",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",time:"25 days ago"},{color:"primary",icon:"TvIcon",title:"Marketing",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",time:"28 days ago"}],analyticsData:o["a"],dispatchedOrders:[]}},components:{VueApexCharts:l.a,StatisticsCardLine:n["a"],ChangeTimeDurationDropdown:r["a"],VxTimeline:d["a"]},created:function(){var t=this;this.$http.get("/api/user/checkpoint-reward").then((function(a){t.checkpointReward=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/subscribers").then((function(a){t.subscribersGained=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(a){t.ordersRecevied=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(a){t.salesBarSession=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/support-tracker").then((function(a){t.supportTracker=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/products-orders").then((function(a){t.productsOrder=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/radar").then((function(a){t.salesRadar=a.data})).catch((function(t){console.log(t)})),this.$http.get("/api/table/dispatched-orders").then((function(a){t.dispatchedOrders=a.data})).catch((function(t){console.log(t)}))}},h=u,m=(s("e142"),s("2877")),w=Object(m["a"])(h,e,i,!1,null,null,null);a["default"]=w.exports},4489:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"vx-timeline"},t._l(t.data,(function(a){return s("li",{key:a.title},[s("div",{staticClass:"timeline-icon",class:"bg-"+a.color},[s("feather-icon",{attrs:{icon:a.icon,svgClasses:"text-white stroke-current w-5 h-5"}})],1),s("div",{staticClass:"timeline-info"},[s("p",{staticClass:"font-semibold"},[t._v(t._s(a.title))]),s("span",{staticClass:"activity-desc"},[t._v(t._s(a.desc))])]),s("small",{staticClass:"text-grey activity-e-time"},[t._v(t._s(a.time))])])})),0)},i=[],c={name:"vx-timeline",props:{data:{type:Array,required:!0}}},l=c,n=(s("13c7"),s("2877")),o=Object(n["a"])(l,e,i,!1,null,null,null);a["a"]=o.exports},"8ee6":function(t,a,s){t.exports=s.p+"img/decore-left.2d9d23e0.png"},"99d6":function(t,a,s){},e142:function(t,a,s){"use strict";var e=s("99d6"),i=s.n(e);i.a},e169:function(t,a,s){},ee15:function(t,a,s){t.exports=s.p+"img/decore-right.da0ab5cd.png"}}]);
//# sourceMappingURL=chunk-2e7f9862.caf82f58.js.map