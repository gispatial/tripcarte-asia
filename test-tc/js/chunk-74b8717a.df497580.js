(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b8717a"],{"0af2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",t._g({staticClass:"list-view-item overflow-hidden"},t.$listeners),[s("template",{slot:"no-body"},[s("div",{staticClass:"vx-row item-details no-gutter"},[s("div",{staticClass:"vx-col sm:w-1/4 w-full item-img-container bg-white flex items-center justify-center cursor-pointer",on:{click:t.navigate_to_detail_view}},[s("img",{staticClass:"grid-view-img p-4",attrs:{src:t.item.image,alt:t.item.name}})]),s("div",{staticClass:"vx-col sm:w-1/2"},[s("div",{staticClass:"p-4 pt-6"},[t._t("item-meta",[s("h6",{staticClass:"item-name font-semibold mb-1 hover:text-primary cursor-pointer",on:{click:t.navigate_to_detail_view}},[t._v(t._s(t.item.name))]),s("p",{staticClass:"text-sm mb-4"},[t._v("By "),s("span",{staticClass:"font-semibold cursor-pointer"},[t._v(t._s(t.item.brand))])]),s("p",{staticClass:"item-description text-sm"},[t._v(t._s(t.item.description))])])],2)]),s("div",{staticClass:"vx-col sm:w-1/4 w-full flex items-center sm:border border-0 border-solid d-theme-border-grey-light border-r-0 border-t-0 border-b-0"},[s("div",{staticClass:"p-4 flex flex-col w-full"},[s("div",{staticClass:"text-warning flex self-end border border-solid border-warning py-1 px-2 rounded"},[s("span",{staticClass:"text-sm mr-1"},[t._v(t._s(t.item.rating))]),s("feather-icon",{attrs:{icon:"StarIcon",svgClasses:"h-4 w-4"}})],1),s("div",{staticClass:"my-6"},[s("h5",{staticClass:"font-bold text-center"},[t._v("$"+t._s(t.item.price))]),t.item.free_shipping?s("span",{staticClass:"text-grey flex items-start justify-center mt-1"},[s("feather-icon",{attrs:{icon:"ShoppingCartIcon",svgClasses:"w-4 h-4"}}),s("span",{staticClass:"text-sm ml-2"},[t._v("Free Shipping")])],1):t._e()]),t._t("action-buttons")],2)])])])],2)},r=[],a={props:{item:{type:Object,required:!0}},computed:{isInCart:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInCart"](e)}},isInWishList:function(){var t=this;return function(e){return t.$store.getters["eCommerce/isInWishList"](e)}}},methods:{toggleItemInWishList:function(t){this.$store.dispatch("eCommerce/toggleItemInWishList",t)},additemInCart:function(t){this.$store.dispatch("eCommerce/additemInCart",t)},cartButtonClicked:function(t){this.isInCart(t.objectID)?this.$router.push("/apps/eCommerce/checkout").catch((function(){})):this.additemInCart(t)},navigate_to_detail_view:function(){this.$router.push({name:"ecommerce-item-detail-view",params:{item_id:this.item.objectID}}).catch((function(){}))}}},n=a,o=(s("b980"),s("2877")),c=Object(o["a"])(n,i,r,!1,null,"5117966e",null);e["default"]=c.exports},"9e4e":function(t,e,s){},b980:function(t,e,s){"use strict";var i=s("9e4e"),r=s.n(i);r.a}}]);
//# sourceMappingURL=chunk-74b8717a.df497580.js.map