webpackJsonp([13],{DxeN:function(t,e,a){"use strict";var o=a(5),l=a(2);a.n(l);e.a={mixins:[o.default],components:{"el-date-picker":l.DatePicker},data:function(){return{dalogi_title:["","实物商品发货","虚拟商品服务","预约商品服务","积分商品发货","积分商品服务"],dalogi_loading:!1,dialog_temp:{},dialogForm:{consignment_user:"",deliver_method:"",consignment_time:"",tracking_number:"",good_type:"",service_user:"",service_time:"",total_amount:"",note:""},dialogFormVisible:!1,tabs:"",value8:"",isSearch:!1,formInline:{order_status:"",keyword:"",pay_status:"",start_time:"",end_time:""},list:[]}},methods:{killOrder:function(t,e){this.dialogForm={consignment_user:"",deliver_method:"",consignment_time:"",tracking_number:"",good_type:"",service_user:"",service_time:"",note:""},this.dialogFormVisible=!0,this.dialog_temp=t,this.dialogForm.order_id=t.id,this.dialogForm.good_type=t.orders_goods[0].good_type},dialog_ok:function(t){var e="/admin/order/consignment",a=this,o=this.dialogForm;2!=this.dialogForm.good_type&&5!=this.dialogForm.good_type&&3!=this.dialogForm.good_type||(e="/admin/order/service"),a.dalogi_loading=!0,this.apiPost(e,o).then(function(e){e.code?(a.$message.success(e.msg),t()):a.handleError(e),a.dalogi_loading=!1})},fromDate:function(t){if(t){var e=t.split(" - ");this.formInline.start_time=e[0],this.formInline.end_time=e[1]}},fromDate2:function(t){this.dialogForm.consignment_time=t},fromDate3:function(t){this.dialogForm.service_time=t},onSelectedTabs:function(t){var e=t.name,a={order_status:e};this.get_list(1,a)},tableRowClassName:function(t,e){return 2==t.status?"status_off":""},getType:function(t){var e=parseInt(t,10);return this.$store.getters.GOODTYPE[e-1].label},onReset:function(){this.formInline={goods_type:"",keyword:"",cat_id:"",status:""},this.get_list(1),this.isSearch=!1},onSearch:function(t){this.isSearch=!0,t=t||1;var e=this.formInline;this.get_list(t,e)},get_list:function(t,e){t=t||1;var a="/admin/order/get_list?page="+t,o=this;o.loading=!0,this.apiGet(a,e).then(function(t){t.code?(o.list=t.data.list,o.pages=t.data.pages):o.handleError(t),o.loading=!1})},OnCannelOrder:function(t){var e=this;this.$confirm("是否取消当前订单?","提示",{confirmButtonText:"确定取消",cancelButtonText:"点错了",type:"warning"}).then(function(){e.removeData(t)}).catch(function(){})},removeData:function(t){var e=this.list[t],a="/admin/order/cancel?order_id="+e.id,o=this;o.loading=!0,this.apiGet(a).then(function(e){e.code?(o.list.splice(t,1),o.$message({type:"success",message:e.msg})):o.handleError(e),o.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["订单","订单列表"])}}},OthS:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"tabs_p"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.onSelectedTabs},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("el-tab-pane",{attrs:{label:"全部订单",name:"0"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"待处理订单",name:"1"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"已服务订单",name:"2"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"已取消订单",name:"4"}}),t._v(" "),a("el-tab-pane",{attrs:{label:"已完成订单",name:"5"}})],1)],1),t._v(" "),a("div",{staticClass:"page_heade"},[a("el-form",{attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{"label-width":"1"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"订单编号/用户手机"},model:{value:t.formInline.keyword,callback:function(e){t.formInline.keyword=e},expression:"formInline.keyword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"订单状态",clearable:""},model:{value:t.formInline.order_status,callback:function(e){t.formInline.order_status=e},expression:"formInline.order_status"}},[a("el-option",{attrs:{value:1,label:"待处理"}}),t._v(" "),a("el-option",{attrs:{value:2,label:"已服务"}}),t._v(" "),a("el-option",{attrs:{value:3,label:"已发货"}}),t._v(" "),a("el-option",{attrs:{value:4,label:"已取消"}}),t._v(" "),a("el-option",{attrs:{value:5,label:"已完成"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"支付状态"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"支付状态",clearable:""},model:{value:t.formInline.pay_status,callback:function(e){t.formInline.pay_status=e},expression:"formInline.pay_status"}},[a("el-option",{attrs:{value:1,label:"未支付"}}),t._v(" "),a("el-option",{attrs:{value:2,label:"已支付"}}),t._v(" "),a("el-option",{attrs:{value:3,label:"已退费"}}),t._v(" "),a("el-option",{attrs:{value:4,label:"支付失败"}}),t._v(" "),a("el-option",{attrs:{value:5,label:"退费失败"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"下单日期"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right",placeholder:"选择日期范围","picker-options":t.pickerOptions},on:{change:t.fromDate},model:{value:t.value7,callback:function(e){t.value7=e},expression:"value7"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSearch()}}},[t._v("搜索")]),t._v(" "),t.isSearch?a("el-button",{attrs:{type:"danger"},on:{click:t.onReset}},[t._v("清空搜索")]):t._e()],1)],1)],1),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"ui-table-wrapper",staticStyle:{width:"100%"}},[t.list&&t.list.length?[t._l(t.list,function(e,o){return[a("div",{key:e.id,staticClass:"table_list"},[a("table",{class:{bg:1==e.order_status}},[t._m(0,!0),t._v(" "),t._m(1,!0),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(t._s(e.order_number))]),t._v(" "),a("td",{staticClass:"center"},[t._v(t._s(e.user_id))]),t._v(" "),a("td",[t._v(t._s(e.phone_number))]),t._v(" "),a("td",[t._v(t._s(e.add_time))]),t._v(" "),a("td",[t._v(t._s(e.total_amount))]),t._v(" "),a("td",[a("span",{class:{red:1==e.order_status}},[t._v(t._s(e.order_status_txt))])]),t._v(" "),a("td",[t._v(t._s(e.pay_status_txt))]),t._v(" "),a("td",[t._v(t._s(e.order_from_txt))]),t._v(" "),a("td",[t._v(t._s(e.pay_method_txt))]),t._v(" "),a("td",[t._v(t._s(e.finish_time))]),t._v(" "),a("td",{staticClass:"center tool_no_border"},[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.goto("/orders/order_id/"+e.id)}}},[t._v("查看详情")]),t._v(" "),1==e.order_status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.OnCannelOrder(o)}}},[t._v("取消订单")]):t._e()],1)]),t._v(" "),a("tr",[a("td",{staticClass:"nopadding",attrs:{colspan:"11"}},[a("table",[t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),a("tbody",t._l(e.orders_goods,function(l,i){return a("tr",{key:l.id},[a("td",{staticClass:"center"},[t._v(t._s(l.good_id))]),t._v(" "),a("td",{staticClass:"center"},[a("img",{attrs:{src:l.good_img,width:"40",height:"40"}})]),t._v(" "),a("td",{staticClass:"center"},[t._v(t._s(l.good_title))]),t._v(" "),a("td",{staticClass:"center"},[t._v(t._s(l.cat_name))]),t._v(" "),a("td",{staticClass:"center"},[t._v(t._s(l.price))]),t._v(" "),a("td",{staticClass:"center"},[t._v(t._s(l.buy_num))]),t._v(" "),0==i?a("td",{staticClass:"center tool_no_border",attrs:{rowspan:e.orders_goods.length}},[1==e.order_status&&2==e.pay_status||3==l.good_type&&1==e.pay_status?a("el-button",{attrs:{size:"small"},on:{click:function(a){t.killOrder(e,o)}}},[t._v("\n                                                        "+t._s(1==l.good_type||4==l.good_type?"立即发货":"立即服务"))]):a("span",{staticStyle:{color:"#ccc"}},[t._v("\n                                                        无操作\n                                                    ")])],1):t._e()])}))])])])])])])]})]:a("div",{staticClass:"table_nodata"},[t._v("\n            没有数据\n        ")])],2),t._v(" "),a("div",{staticClass:"pagination"},[parseInt(t.pages.total_page,10)>1?a("el-pagination",{attrs:{"current-page":parseInt(t.pages.current_page,10),"page-size":parseInt(t.pages.limit,10),total:t.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1),t._v(" "),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.dalogi_loading,expression:"dalogi_loading"}],attrs:{title:t.dalogi_title[t.dialogForm.good_type],visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[1==t.dialogForm.good_type||3==t.dialogForm.good_type||4==t.dialogForm.good_type?a("el-form",{attrs:{model:t.dialogForm,inline:!0}},[a("el-form-item",{attrs:{label:"发货员","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"发货员"},model:{value:t.dialogForm.consignment_user,callback:function(e){t.dialogForm.consignment_user=e},expression:"dialogForm.consignment_user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发货时间","label-width":"100px"}},[a("el-date-picker",{attrs:{type:"datetime",editable:!1,placeholder:"选择日期"},on:{change:t.fromDate2},model:{value:t.dialogForm.consignment_time,callback:function(e){t.dialogForm.consignment_time=e},expression:"dialogForm.consignment_time"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"配送方式","label-width":"100px"}},[a("el-select",{staticStyle:{width:"193px"},attrs:{placeholder:"请选择配送方式"},model:{value:t.dialogForm.deliver_method,callback:function(e){t.dialogForm.deliver_method=e},expression:"dialogForm.deliver_method"}},[a("el-option",{attrs:{label:"上门自提",value:1}}),t._v(" "),a("el-option",{attrs:{label:"快递",value:2}}),t._v(" "),a("el-option",{attrs:{label:"其他",value:3}})],1)],1),t._v(" "),2==t.dialogForm.deliver_method?a("el-form-item",{staticClass:"is-required",attrs:{label:"快递编号","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"快递编号"},model:{value:t.dialogForm.tracking_number,callback:function(e){t.dialogForm.tracking_number=e},expression:"dialogForm.tracking_number"}})],1):t._e(),t._v(" "),3==t.dialogForm.good_type?a("el-form-item",{attrs:{label:"线下收款","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"收款总额"},model:{value:t.dialogForm.total_amount,callback:function(e){t.dialogForm.total_amount=e},expression:"dialogForm.total_amount"}})],1):t._e()],1):t._e(),t._v(" "),2==t.dialogForm.good_type||5==t.dialogForm.good_type?a("el-form",{attrs:{model:t.dialogForm,inline:!0}},[a("el-form-item",{attrs:{label:"服务员","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"发货员"},model:{value:t.dialogForm.service_user,callback:function(e){t.dialogForm.service_user=e},expression:"dialogForm.service_user"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"服务时间","label-width":"100px"}},[a("el-date-picker",{attrs:{type:"datetime",editable:!1,placeholder:"选择日期"},on:{change:t.fromDate3},model:{value:t.dialogForm.service_time,callback:function(e){t.dialogForm.service_time=e},expression:"dialogForm.service_time"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"备注"},model:{value:t.dialogForm.note,callback:function(e){t.dialogForm.note=e},expression:"dialogForm.note"}})],1)],1):t._e(),t._v(" "),a("div",{staticClass:"dialog_main"},[a("h4",{staticClass:"dialog_order_title"},[t._v("订单信息")]),t._v(" "),a("div",{staticClass:"dialog_order_info"},[a("el-row",[a("el-col",{attrs:{span:12}},[t._v("\n                        订单编号：\n                        "),a("span",[t._v(t._s(t.dialog_temp.order_number))]),t._v(" "),a("br"),t._v(" 用户手机：\n                        "),a("span",[t._v(t._s(t.dialog_temp.phone_number))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v("\n                        下单用户：\n                        "),a("span",[t._v(t._s(t.dialog_temp.nickname))]),t._v(" "),a("br"),t._v(" 用户手机：\n                        "),a("span",[t._v(t._s(t.dialog_temp.add_time))])])],1)],1),t._v(" "),t.dialog_temp.consignee_name?a("h4",{staticClass:"dialog_order_title"},[t._v("收货人信息")]):t._e(),t._v(" "),t.dialog_temp.consignee_name?a("div",{staticClass:"dialog_order_info"},[a("el-row",[a("el-col",{attrs:{span:12}},[t._v("\n                        收货人：\n                        "),a("span",[t._v(t._s(t.dialog_temp.consignee_name))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v("\n                        下单用户：\n                        "),a("span",[t._v(t._s(t.dialog_temp.consignee_phone))])]),t._v(" "),a("el-col",[t._v("\n                        收货人地址：\n                        "),a("span",[t._v(t._s(t.dialog_temp.consignee_address))])])],1)],1):t._e()]),t._v(" "),a("div",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.dialog_ok}},[t._v("确 定")])],1)],1)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("colgroup",[a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"120"}}),t._v(" "),a("col",{attrs:{width:"150"}}),t._v(" "),a("col",{attrs:{width:"120"}}),t._v(" "),a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"160"}}),t._v(" "),a("col"),t._v(" "),a("col",{attrs:{width:"220"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("订单编号")]),t._v(" "),a("th",{staticClass:"center"},[t._v("下单用户ID")]),t._v(" "),a("th",[t._v("用户手机")]),t._v(" "),a("th",[t._v("下单时间")]),t._v(" "),a("th",[t._v("订单总额")]),t._v(" "),a("th",[t._v("订单状态")]),t._v(" "),a("th",[t._v("支付状态")]),t._v(" "),a("th",[t._v("订单来源")]),t._v(" "),a("th",[t._v("支付方式")]),t._v(" "),a("th",[t._v("完成时间")]),t._v(" "),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("colgroup",[a("col",{attrs:{width:"95"}}),t._v(" "),a("col",{attrs:{width:"98"}}),t._v(" "),a("col"),t._v(" "),a("col"),t._v(" "),a("col",{attrs:{width:"180"}}),t._v(" "),a("col",{attrs:{width:"100"}}),t._v(" "),a("col",{attrs:{width:"200"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{staticClass:"bg"},[a("th",[t._v("商品编号")]),t._v(" "),a("th",{staticClass:"center"},[t._v("商品图标")]),t._v(" "),a("th",{staticClass:"center"},[t._v("商品标题")]),t._v(" "),a("th",{staticClass:"center"},[t._v("商品分类")]),t._v(" "),a("th",{staticClass:"center"},[t._v("购买单价")]),t._v(" "),a("th",{staticClass:"center"},[t._v("购买数量")]),t._v(" "),a("th",{staticClass:"center",staticStyle:{"border-bottom-width":"1px"}},[t._v("操作")])])])}],i={render:o,staticRenderFns:l};e.a=i},pQLz:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("DxeN"),l=a("OthS"),i=a("VU/8"),s=i(o.a,l.a,null,null,null);e.default=s.exports}});