webpackJsonp([6],{Huwg:function(e,t,r){"use strict";var i=r("RHyO");t.a={mixins:[i.a],data:function(){return{dalogi_loading:!1,form:{},rules:{signin_credits:[{required:!0,type:"string",message:"请输入签到获得积分",trigger:"blur"}],bind_phone_credits:[{required:!0,type:"string",message:"请输入绑定手机获得积分",trigger:"blur"}],share_good_credits:[{required:!0,type:"string",message:"请输入分享商品获得积分",trigger:"blur"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.error("请填写必填项！"),!1;var r=t.form,i=t;t.apiPost("/admin/Setting/set",r).then(function(e){e.code?(i.$message.success(e.msg),setTimeout(function(){i.$router.push("/goods")},500)):i.handleError(e)})})},get_list:function(){var e=this;e.loading=!0,this.apiGet("/admin/Setting/get_set?c_type=2").then(function(t){t.code?e.form=t.data:e.handleError(t),e.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["用户","积分设置"])}}},VO5W:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=r("Huwg"),s=r("WrIa"),o=r("VU/8"),n=o(i.a,s.a,null,null,null);t.default=n.exports},WrIa:function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page_heade"},[r("el-form",{attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[r("el-form-item",{attrs:{label:"签到获得积分",prop:"signin_credits"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.signin_credits,callback:function(t){e.form.signin_credits=t},expression:"form.signin_credits"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"绑定手机获得积分",prop:"bind_phone_credits"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.bind_phone_credits,callback:function(t){e.form.bind_phone_credits=t},expression:"form.bind_phone_credits"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"分享商品获得积分",prop:"share_good_credits"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.share_good_credits,callback:function(t){e.form.share_good_credits=t},expression:"form.share_good_credits"}})],1),e._v(" "),r("div",{staticStyle:{height:"40px"}}),e._v(" "),r("el-form-item",{attrs:{"label-width":"40%"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("保存")])],1)],1)],1)])},s=[],o={render:i,staticRenderFns:s};t.a=o}});