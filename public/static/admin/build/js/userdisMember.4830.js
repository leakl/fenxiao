webpackJsonp([23],{WOKl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("rzDx"),i=n("ydxl"),a=n("VU/8"),r=a(l.a,i.a,!1,null,null,null);t.default=r.exports},rzDx:function(e,t,n){"use strict";var l=n("RHyO");t.a={mixins:[l.default],data:function(){return{isSearch:!1,formInline:{keyword:"",user_phone:""},list:[]}},methods:{open_set:function(e){var t=this,n="您确定设该用户为分销商？",l=2;2==e.distribution_level&&(n="取消后，将不再参与分成，您确定取消分销商吗？",l=1),this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.send_handle(e,l)}).catch(function(){})},send_handle:function(e,t){var n=this,l={id:e.id,distribution_level:t};n.dalogi_loading=!0,this.apiPost("/admin/Userdismember/handle",l).then(function(e){e.code?(n.$message.success(e.msg),n.isSearch?n.onSearch(n.pages.current_page):n.get_list()):n.handleError(e),n.dalogi_loading=!1})},onReset:function(){this.formInline={keyword:"",user_phone:""},this.get_list(1),this.isSearch=!1},onSearch:function(e){this.isSearch=!0,e=e||1;var t=this.formInline;this.get_list(e,t)},get_list:function(e,t){e=e||1;var n="/admin/Userdismember/get_list?page="+e,l=this;l.loading=!0,this.apiGet(n,t).then(function(e){e.code?(l.list=e.data.list,l.pages=e.data.pages):l.handleError(e),l.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["分销","分销会员列表"])}}},ydxl:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"page_heade"},[n("el-form",{attrs:{inline:!0,model:e.formInline}},[n("el-form-item",{attrs:{label:"用户ID"}},[n("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"用户ID"},model:{value:e.formInline.keyword,callback:function(t){e.$set(e.formInline,"keyword",t)},expression:"formInline.keyword"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"手机号码"}},[n("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"手机号码"},model:{value:e.formInline.user_phone,callback:function(t){e.$set(e.formInline,"user_phone",t)},expression:"formInline.user_phone"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSearch()}}},[e._v("搜索")]),e._v(" "),e.isSearch?n("el-button",{attrs:{type:"danger"},on:{click:e.onReset}},[e._v("清空搜索")]):e._e()],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.list,border:""}},[n("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),e._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"用户昵称"}}),e._v(" "),n("el-table-column",{attrs:{prop:"phone_number",label:"手机号码"}}),e._v(" "),n("el-table-column",{attrs:{prop:"dis_scan_time",label:"分销扫码时间"}}),e._v(" "),n("el-table-column",{attrs:{prop:"pid",label:"所属分销商用户ID"}}),e._v(" "),n("el-table-column",{attrs:{prop:"distribution_level",label:"分销等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(1==t.row.distribution_level?"会员":"分销商")+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"distributor_time",label:"设为分销商时间"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.distribution_level?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.open_set(t.row)}}},[e._v("设为分销商")]):e._e(),e._v(" "),2==t.row.distribution_level?n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.open_set(t.row)}}},[e._v("退出分销商")]):e._e()]}}])})],1),e._v(" "),n("div",{staticClass:"pagination"},[parseInt(e.pages.total_page,10)>1?n("el-pagination",{attrs:{"current-page":parseInt(e.pages.current_page,10),"page-size":parseInt(e.pages.limit,10),total:e.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":e.handleCurrentChange}}):e._e()],1),e._v(" "),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{color:"#8492A6"}},[e._v("备注： 设为分销商成功后，则该用户成为所属分销商的下级分销商"),n("br"),e._v("\n               如果你搜索不到对应的用户，则表示该用户还没有扫描任何分销商的分销二维码，你可以发送任意一个分销商的分销二维码给该用户让其成为下级分销商"),n("br"),e._v("\n               退出分销商后，只是代表该会员不参与分成，并不影响他的上级分销商获取二层下级（包括退出分销商的该会员）的提成\n    ")])}],a={render:l,staticRenderFns:i};t.a=a}});