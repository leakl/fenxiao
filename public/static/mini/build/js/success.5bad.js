webpackJsonp([15],{"/DCw":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"paySuccess"},[i("i",{staticClass:"iconfont icon-xuanze"}),t._v(" "),1==t.info.pay_method?i("h1",[t._v("支付成功")]):t._e(),t._v(" "),2==t.info.pay_method?i("h1",[t._v("该商品为线下服务商品，请等待客服人员与您联系！")]):t._e(),t._v(" "),3==t.info.pay_method?i("h1",[t._v("积分兑换成功")]):t._e(),t._v(" "),i("div",{staticClass:"other"},[i("div",[t._v("订单号："+t._s(t.info.order_number))]),t._v(" "),i("div",{staticClass:"space-a"}),t._v(" "),i("button",{staticClass:"ui-btn",attrs:{type:"button"},on:{click:function(e){t.goto("/order_detail/order_id/"+t.info.id)}}},[t._v("查看订单")])])])},r=[],o={render:n,staticRenderFns:r};e.a=o},"33UB":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("SX9m"),r=i("/DCw"),o=i("VU/8"),a=o(n.a,r.a,null,null,null);e.default=a.exports},SX9m:function(t,e,i){"use strict";var n=i(2);e.a={name:"class",mixins:[n.default],data:function(){return{info:{},order_id:0}},methods:{get_order_info:function(){var t=this;this.apiGet("/mini/Order/detail",{order_id:this.order_id}).then(function(e){e.code?t.info=e.data:t.handleError(e)})}},created:function(){this.setTitle("支付成功"),this.order_id=this.$route.params.order_id,this.get_order_info()}}}});