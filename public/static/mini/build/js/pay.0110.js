webpackJsonp([16],{"5qDw":function(t,s,i){"use strict";var e=i(2);s.a={name:"class",mixins:[e.default],data:function(){return{list:[],order_id:0,jsApiParameters:{}}},methods:{get_order_info:function(){var t=this;this.apiGet("/mini/Order/detail",{order_id:this.order_id}).then(function(s){s.code?(t.list=s.data,1==t.list.pay_method&&t.get_pay_info()):t.handleError(s)})},get_pay_info:function(){var t=this;this.apiGet("/mini/Payment/index",{order_id:this.order_id}).then(function(s){s.code?t.jsApiParameters=s.data.jsApiParameters:t.handleError(s)})},do_pay:function(){var t=this;t.$msg("微信支付"),"undefined"==typeof WeixinJSBridge?(t.$msg("1"),document.addEventListener?document.addEventListener("WeixinJSBridgeReady",t.jsApiCall,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",t.jsApiCall),document.attachEvent("onWeixinJSBridgeReady",t.jsApiCall))):(t.$msg("2"),jsApiCall())},jsApiCall:function(){var t=this;t.$msg("3"),t.$msg(t.jsApiParameters),WeixinJSBridge.invoke("getBrandWCPayRequest",t.jsApiParameters,function(s){"get_brand_wcpay_request:ok"==s.err_msg?(t.$msg("4"),t.goto("/paySuccess/order_id/"+t.order_id)):"get_brand_wcpay_request:fail"==s.err_msg?t.$msg("5"):"get_brand_wcpay_request:cancel"==s.err_msg&&t.$msg("6")})},credits:function(){var t=this,s={order_id:this.order_id};this.apiPost("/mini/Order/credits_exchange",s).then(function(s){s.code?t.goto("/success/order_id/"+t.order_id):t.handleError(s)})}},created:function(){this.setTitle("支付订单"),this.order_id=this.$route.params.order_id,this.get_order_info()}}},ZnG1:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"order"},[t.list.consignee_name?i("ul",{staticClass:"ui-links"},[i("li",[i("div",{staticClass:"title add_info"},[i("div",{staticClass:"flex"},[i("span",[t._v("收货人：")]),t._v(" "),i("i",[t._v(t._s(t.list.consignee_name))])]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v("手机号：")]),t._v(" "),i("i",[t._v(t._s(t.list.consignee_phone))])]),t._v(" "),i("div",{staticClass:"flex"},[i("span",[t._v("配送至：")]),t._v(" "),i("i",[t._v("\n                        "+t._s(t.list.consignee_address)+"\n                    ")])])])])]):t._e(),t._v(" "),t.list.consignee_name?i("div",{staticStyle:{height:"10px"}}):t._e(),t._v(" "),i("ul",{staticClass:"thumb-list l-t"},t._l(t.list.orders_goods,function(s,e){return i("li",{key:s.id},[i("img",{attrs:{src:s.good_img,width:"70",height:"70"}}),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t._v(t._s(s.good_title))]),t._v(" "),i("div",{staticClass:"tool"},[i("span",{staticClass:"grey"},[t._v("x "+t._s(s.buy_num))]),t._v(" "),4==s.good_type||5==s.good_type?i("span",{staticClass:"red"},[t._v("积分 "),i("em",[t._v(t._s(s.credits))])]):i("span",{staticClass:"red"},[t._v("￥"),i("em",[t._v(t._s(s.price))])])])])])})),t._v(" "),i("ul",{staticClass:"ui-fixd"},[i("li",[i("div",{staticClass:"m"},[t._v("商品总计")]),t._v(" "),4==t.list.orders_goods[0].good_type||5==t.list.orders_goods[0].good_type?i("div",{staticClass:"r"},[t._v("积分 "+t._s(t.list.minus_credits))]):i("div",{staticClass:"r"},[t._v("￥"+t._s(t.list.total_amount))])]),t._v(" "),i("li",[i("div",{staticClass:"m"},[t._v("应付总额")]),t._v(" "),4==t.list.orders_goods[0].good_type||5==t.list.orders_goods[0].good_type?i("div",{staticClass:"r"},[i("span",{staticClass:"price"},[t._v("积分 "),i("em",[t._v(t._s(t.list.minus_credits))])])]):i("div",{staticClass:"r"},[i("span",{staticClass:"price"},[t._v("￥"),i("em",[t._v(t._s(t.list.total_amount))])])])])]),t._v(" "),i("div",{staticClass:"btn-wrap"},[i("div",{staticClass:"btn-fixed"},[1==t.list.pay_method?i("button",{staticClass:"ui-btn ui-btn-block ui-btn-l2",attrs:{type:"button"},on:{click:function(s){t.do_pay()}}},[t._v("确定支付")]):t._e(),t._v(" "),3==t.list.pay_method?i("button",{staticClass:"ui-btn ui-btn-block ui-btn-l2",attrs:{type:"button"},on:{click:function(s){t.credits()}}},[t._v("确定兑换")]):t._e()])])])},a=[],n={render:e,staticRenderFns:a};s.a=n},qLDf:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("5qDw"),a=i("ZnG1"),n=i("VU/8"),r=n(e.a,a.a,null,null,null);s.default=r.exports}});