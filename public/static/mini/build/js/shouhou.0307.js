webpackJsonp([11],{"4gCn":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("P3wk"),a=i("Bijm"),n=i("VU/8"),l=n(e.a,a.a,null,null,null);s.default=l.exports},Bijm:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[i("div",{staticClass:"ui-tags"},[i("span",{class:{active:1==t.tagsIdx},on:{click:function(s){t.tagsIdx=1}}},[t._v("退款记录")]),t._v(" "),i("span",{class:{active:2==t.tagsIdx},on:{click:function(s){t.tagsIdx=2}}},[t._v("换货记录")])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.list.length>0,expression:"list.length > 0"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"order-list",attrs:{"infinite-scroll-disabled":t.sloading,"infinite-scroll-immediate-check":!1,"infinite-scroll-distance":10}},t._l(t.list,function(s){return i("li",{key:s.id},[i("div",{staticClass:"h"},[t._v("订单号："+t._s(s.order_number))]),t._v(" "),t._l(s.orders_goods,function(e){return i("div",{key:e.id,staticClass:"m"},[i("img",{attrs:{src:e.good_img,width:"50",height:"50"}}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(e.good_title))])]),t._v(" "),i("div",{staticClass:"tool"},[3==s.pay_method?i("div",[t._v("积分 "+t._s(e.credits))]):i("div",[t._v("￥"+t._s(e.price))]),t._v(" "),i("div",[t._v("x "+t._s(e.buy_num))])])])}),t._v(" "),i("div",{staticClass:"b"},[i("div",[t._v("\n                    售后进度：\n                    "),i("span",{staticClass:"status"},[t._v(t._s(t.status(s.status)))])])])],2)})),t._v(" "),t.list.length<1&&0==t.loading?i("div",{staticClass:"nodata"},[i("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),t._v(" "),i("div",[t._v("您还没有售后记录~")])]):t._e()])},a=[],n={render:e,staticRenderFns:a};s.a=n},P3wk:function(t,s,i){"use strict";var e=i(3);s.a={name:"shouhou",mixins:[e.default],data:function(){return{refund_list:[],exchange_list:[],tagsIdx:1,sloading:!1,r_pages:{},e_pages:{}}},computed:{list:function(){return 1==this.tagsIdx?this.refund_list:this.exchange_list}},methods:{loadMore:function(){if(!this.sloading)if(1==this.tagsIdx){var t=parseInt(this.r_pages.current_page,10)||1;t<this.r_pages.total_page&&this.get_list(t+1)}else{var s=parseInt(this.e_pages.current_page,10)||1;s<this.e_pages.total_page&&this.get_list(s+1)}},status:function(t){return["未处理","已同意","已拒绝"][parseInt(t,10)-1]},exchange:function(t){var s="/mini/Exchange/get_list?page="+(t||1),i=this;i.apiGet(s).then(function(t){t.code?(i.exchange_list=t.data.list,i.e_pages=t.data.pages):i.handleError(t)})},refund:function(t){var s="/mini/Refund/get_list?page="+(t||1),i=this;i.apiGet(s).then(function(t){t.code?(i.refund_list=t.data.list,i.r_pages=t.data.pages):i.handleError(t)})},get_list:function(t){1==this.tagsIdx?this.refund(t):this.exchange(t)}},created:function(){this.setTitle("售后记录"),this.refund(),this.exchange()}}}});