webpackJsonp([22],{agqf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("e23r"),n=a("bc+v"),r=a("VU/8"),s=r(i.a,n.a,!1,null,null,null);t.default=s.exports},"bc+v":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{padding:"5% 10% 0 0"}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{"label-width":"230px"}},[e._l(e.ruleForm,function(t,i){return a("el-form-item",{key:t.id,attrs:{label:t.show_name,prop:t.c_name}},["user_center_sale_total_show"==t.c_name?a("el-radio-group",{attrs:{size:"small"},model:{value:t.c_value,callback:function(e){t.c_value=e},expression:"item.c_value"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("显示")]),e._v(" "),a("el-radio-button",{attrs:{label:"2"}},[e._v("不显示")])],1):a("el-input",{attrs:{disabled:0==i&&1==e.c_type},model:{value:t.c_value,callback:function(e){t.c_value=e},expression:"item.c_value"}})],1)}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存设置")])],1)],2)],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},e23r:function(e,t,a){"use strict";var i=a("mvHQ"),n=a.n(i),r=a("RHyO");t.a={mixins:[r.default],data:function(){return{ruleForm:[],c_type:""}},methods:{submitForm:function(){this.save_set(this.ruleForm)},save_set:function(e){var t={data:n()(e)},a=this;a.loading=!0,this.apiPost("/admin/setting/set",t).then(function(e){e.code?(console.log(e),a.$message({type:"success",message:e.msg})):a.handleError(e),a.loading=!1})},get_set:function(e,t){e=e||"";var a="/admin/setting/get_set?c_type="+e,i=this;i.loading=!0,this.apiGet(a,t).then(function(e){e.code?i.ruleForm=e.data:i.handleError(e),i.loading=!1})},initData:function(){this.c_type=this.$route.params.c_type;var e=["分销","分销设置"];2==this.c_type&&(e=["用户","积分设置"]),this.get_set(this.c_type),this.setBreadcrumb(e)}},watch:{$route:"initData"},created:function(){this.initData()}}}});