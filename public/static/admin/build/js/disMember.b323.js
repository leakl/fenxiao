webpackJsonp([25],{"6fGc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i("Yjvj"),a=i("Fyhc"),n=i("VU/8"),r=n(l.a,a.a,!1,null,null,null);t.default=r.exports},Fyhc:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"page_heade"},[i("el-form",{attrs:{inline:!0,model:e.formInline}},[i("el-form-item",{attrs:{label:"用户ID/手机号码"}},[i("el-input",{staticStyle:{width:"140px"},attrs:{placeholder:"用户ID/手机号码"},model:{value:e.formInline.keyword,callback:function(t){e.$set(e.formInline,"keyword",t)},expression:"formInline.keyword"}})],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSearch()}}},[e._v("搜索")]),e._v(" "),e.isSearch?i("el-button",{attrs:{type:"danger"},on:{click:e.onReset}},[e._v("清空搜索")]):e._e()],1)],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.list,border:""}},[i("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),e._v(" "),i("el-table-column",{attrs:{prop:"nickname",label:"用户昵称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"phone_number",label:"手机号码"}}),e._v(" "),i("el-table-column",{attrs:{prop:"dis_scan_time",label:"分销扫码时间",width:"180"}}),e._v(" "),i("el-table-column",{attrs:{prop:"pid",label:"所属分销商用户ID"}}),e._v(" "),i("el-table-column",{attrs:{prop:"distribution_level",label:"分销等级"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(1==t.row.distribution_level?"会员":2==t.row.distribution_level?"分销商":"")+"\n            ")]}}])}),e._v(" "),i("el-table-column",{attrs:{prop:"distributor_time",label:"设为分销商时间"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==e.level&&2==t.row.distribution_level?i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){e.goto("/distributor/user_id/"+t.row.id+"/level/2")}}},[e._v("查看二级会员")]):e._e()]}}])})],1),e._v(" "),i("div",{staticClass:"pagination"},[parseInt(e.pages.total_page,10)>1?i("el-pagination",{attrs:{"current-page":parseInt(e.pages.current_page,10),"page-size":parseInt(e.pages.limit,10),total:e.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":e.handleCurrentChange}}):e._e()],1)],1)},a=[],n={render:l,staticRenderFns:a};t.a=n},Yjvj:function(e,t,i){"use strict";var l=i("RHyO");t.a={mixins:[l.default],data:function(){return{user_id:0,level:"",isSearch:!1,formInline:{keyword:""},list:[]}},methods:{onReset:function(){this.formInline={keyword:""},this.get_list(1),this.isSearch=!1},onSearch:function(e){this.isSearch=!0,e=e||1;var t=this.formInline;this.get_list(e,t)},get_list:function(e,t){e=e||1;var i="/admin/Userdis/get_member_list?id="+this.user_id+"&type="+this.level+"&page="+e,l=this;l.loading=!0,this.apiGet(i,t).then(function(e){e.code?(l.list=e.data.list,l.pages=e.data.pages):l.handleError(e),l.loading=!1})},initData:function(){this.user_id=this.$route.params.user_id,this.level=this.$route.params.level;var e="我的一级会员";2==this.level&&(e="我的二级会员"),this.get_list(),this.setBreadcrumb(["分销","分销商列表",e])}},watch:{$route:"initData"},created:function(){this.initData()}}}});