webpackJsonp([10],{"9e2p":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s("ailP"),e=s("WxEi"),n=s("VU/8"),l=n(a.a,e.a,null,null,null);i.default=l.exports},WxEi:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{directives:[{name:"loading",rawName:"v-loading.win",value:t.loading,expression:"loading",modifiers:{win:!0}}]},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length>0,expression:"list.length > 0"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],ref:"ss",attrs:{"infinite-scroll-disabled":t.sloading,"infinite-scroll-immediate-check":!1,"infinite-scroll-distance":10,"infinite-scroll-listen-for-event":"cheackLoadMore"}},[s("ul",{staticClass:"ui-fixd"},t._l(t.list,function(i,a){return s("li",{key:a,staticClass:"med"},[s("div",{staticClass:"f"},[s("div",[s("span",{staticClass:"grey"},[t._v("提现人：")]),t._v(t._s(i.user_name))]),t._v(" "),s("div",[s("span",{staticClass:"grey"},[t._v("提现申请金额：")]),t._v("￥"+t._s(i.amount))]),t._v(" "),s("div",[s("span",{staticClass:"grey"},[t._v("提现申请时间：")]),t._v(t._s(i.add_time))])]),t._v(" "),s("div",[s("span",{staticClass:"ui-label",class:{active:2==i.status}},[t._v(t._s(i.status_txt))])])])}))]),t._v(" "),t.sloading?s("div",{staticClass:"spinner"},[s("mt-spinner",{attrs:{size:18,color:"#26a2ff"}})],1):t.pages.total_page==t.pages.current_page?s("div",{staticClass:"nodata-line"},[t._v("没有更多数据了")]):t._e(),t._v(" "),t.list.length<1&&0==t.sloading?s("div",{staticClass:"nodata"},[s("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),t._v(" "),s("div",[t._v("您还没有提现记录~")])]):t._e(),t._v(" "),s("div",{staticClass:"space"}),t._v(" "),s("div",{staticClass:"btn-wrap"},[s("div",{staticClass:"btn-fixed"},[s("button",{staticClass:"ui-btn ui-btn-block ui-btn-l2",attrs:{type:"button"},on:{click:t.onTixian}},[t._v("申请提现")])])]),t._v(" "),t.dialog?s("div",{staticClass:"dialog"},[s("div",{staticClass:"mint-msgbox-wrapper",staticStyle:{position:"absolute","z-index":"2099"}},[s("div",{staticClass:"mint-msgbox"},[s("div",{staticClass:"mint-msgbox-header"},[s("div",{staticClass:"mint-msgbox-title"},[t._v(t._s(t.d.title))])]),t._v(" "),s("div",{staticClass:"mint-msgbox-content"},[s("div",{staticClass:"mint-msgbox-message"},[t._v("可提现金额：￥"+t._s(t.d.account))]),t._v(" "),s("div",{staticClass:"mint-msgbox-input"},[s("input",{directives:[{name:"focusd",rawName:"v-focusd"},{name:"model",rawName:"v-model",value:t.d.inputValue,expression:"d.inputValue"}],staticClass:"needsclick",attrs:{placeholder:t.d.inputPlaceholder,type:"number"},domProps:{value:t.d.inputValue},on:{input:function(i){i.target.composing||(t.d.inputValue=i.target.value)}}})]),t._v(" "),s("div",{staticClass:"space"})]),t._v(" "),s("div",{staticClass:"mint-msgbox-btns"},[s("button",{staticClass:"mint-msgbox-btn mint-msgbox-cancel ",on:{click:function(i){t.dialog=!1}}},[t._v("取消")]),t._v(" "),s("button",{staticClass:"mint-msgbox-btn mint-msgbox-confirm ",on:{click:t.onSubmit}},[t._v("确定")])])])]),t._v(" "),s("div",{staticClass:"v-modal",staticStyle:{"z-index":"2000"}})]):t._e()])},e=[],n={render:a,staticRenderFns:e};i.a=n},ailP:function(t,i,s){"use strict";var a=s(2);i.a={name:"tixian",mixins:[a.default],data:function(){return{list:[],pages:{},sloading:!1,dialog:!1,d:{account:0,title:"提现",inputValue:"500",inputPlaceholder:"请输入金额"}}},methods:{get_account:function(){var t=this;this.apiGet("/mini/Home/center_info",{}).then(function(i){i.code?t.d.account=t.d.inputValue=i.data.account_balance:t.handleError(i)})},loadMore:function(){if(!this.sloading){var t=parseInt(this.pages.current_page,10)||1;t<this.pages.total_page&&this.get_list(t+1)}},get_list:function(t){t=t||1;var i="/mini/Withdraw/get_list?page="+t,s=this;s.sloading=!0,this.apiGet(i,{}).then(function(t){if(t.code){if(s.pages=t.data.pages,0==s.list.length)s.list=t.data.list;else{var i=s.list;s.list=i.concat(t.data.list)}setTimeout(function(){s.sloading=!1,s.$emit("cheackLoadMore")},200)}else s.handleError(t)})},onTixian:function(){this.dialog=!0},onSubmit:function(){var t=this;this.loading=!0,this.apiGet("/mini/Withdraw/add_apply",{withdraw_amount:this.d.inputValue}).then(function(i){t.loading=!1,i.code?(t.$msg(i.msg),t.dialog=!1,t.list.unshift(i.data)):(t.dialog=!1,t.handleError(i))})}},created:function(){this.setTitle("佣金提现"),this.get_list(),this.get_account()}}}});
//# sourceMappingURL=tixian.96b5.js.map