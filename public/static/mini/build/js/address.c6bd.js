webpackJsonp([25],{"7u2d":function(s,t,i){"use strict";var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"address"},[i("ul",{staticClass:"ui-links"},s._l(s.list,function(t,e){return i("li",{key:e},[1==s.is_use?i("div",{staticStyle:{"margin-right":"10px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:s.checked,expression:"checked"}],staticClass:"ui-checkbox",attrs:{type:"radio",name:"address"},domProps:{value:e,checked:s._q(s.checked,e)},on:{__c:function(t){s.checked=e}}})]):s._e(),s._v(" "),i("div",{staticClass:"info f"},[i("div",{staticClass:"title"},[i("div",{staticClass:"flex"},[i("span",[s._v("收货人：")]),s._v(" "),i("i",[s._v(s._s(t.user_name))])]),s._v(" "),i("div",{staticClass:"flex"},[i("span",[s._v("手机号：")]),s._v(" "),i("i",[s._v(s._s(t.phone))])]),s._v(" "),i("div",{staticClass:"flex"},[i("span",[s._v("配送至：")]),s._v(" "),t.province==t.city?i("i",[s._v("\n                           "+s._s(t.city)+"市 "+s._s(t.area)+" "+s._s(t.address)+"\n                        ")]):i("i",[s._v(s._s(t.province)+"省 "+s._s(t.city)+"市 "+s._s(t.area)+" "+s._s(t.address))])])]),s._v(" "),i("div",{staticClass:"tool"},[1==t.is_default?i("span",{staticClass:"skin"},[s._v("默认地址")]):i("span",{staticClass:"ui-btn ui-btn-setDef",on:{click:function(t){s.set_default(e)}}},[s._v("设为默认")]),s._v(" "),i("span",{staticClass:"ui-btn ui-btn-edit",on:{click:function(i){s.goto("/edit_address/id/"+t.id)}}},[i("i",{staticClass:"iconfont icon-bianji"}),s._v(" 编辑")])])]),s._v(" "),i("i",{staticClass:"iconfont icon-shanchu ",on:{click:function(t){s.ondel(e)}}})])})),s._v(" "),s.list.length<1?i("div",{staticClass:"nodata"},[i("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),s._v(" "),i("div",[s._v("没有找到数据")])]):s._e(),s._v(" "),i("div",{staticClass:"add_address",on:{click:function(t){s.goto("/add_address")}}},[i("i",{staticClass:"iconfont icon-jia"}),s._v(" 添加地址\n    ")]),s._v(" "),i("div",{staticClass:"space"}),s._v(" "),1==s.is_use?i("div",{staticClass:"btn-wrap"},[i("div",{staticClass:"btn-fixed"},[i("button",{staticClass:"ui-btn ui-btn-block ui-btn-l2",attrs:{type:"button"},on:{click:function(t){s.do_use()}}},[s._v("选择并使用")])])]):s._e()])},n=[],a={render:e,staticRenderFns:n};t.a=a},FUEW:function(s,t,i){"use strict";var e=i(2);t.a={name:"class",mixins:[e.default],data:function(){return{list:[],is_use:0,checked:""}},methods:{do_use:function(){if(""===this.checked)return this.$msg("请选择地址"),!1;console.log(this.list[this.checked]),this.setAddress(this.list[this.checked]),this.goto("/confirm")},set_default:function(s){var t=this,i={id:this.list[s].id};this.apiPost("/mini/Address/setdefault",i).then(function(s){s.code?(t.$msg(s.msg),t.get_list()):t.handleError(s)})},ondel:function(s){var t=this;this.$confirm({msg:"确定删除此地址？",yes:function(){t.del(s)}})},del:function(s){var t=this,i={id:this.list[s].id};this.apiPost("/mini/Address/del",i).then(function(s){s.code?(t.$msg(s.msg),t.get_list()):t.handleError(s)})},get_list:function(s){var t=this;t.loading=!0,this.apiGet("/mini/Address/get_list",{}).then(function(s){s.code?t.list=s.data:t.handleError(s),t.loading=!1})}},created:function(){this.setTitle("收货地址"),this.get_list(),this.is_use=this.$route.params.is_use,1==this.is_use&&this.setTitle("选择地址")}}},oAQi:function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("FUEW"),n=i("7u2d"),a=i("VU/8"),c=a(e.a,n.a,null,null,null);t.default=c.exports}});
//# sourceMappingURL=address.c6bd.js.map