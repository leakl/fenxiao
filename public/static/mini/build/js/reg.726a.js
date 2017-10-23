webpackJsonp([12],{W572:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("w9M0"),s=i("cAA7"),a=i("VU/8"),r=a(o.a,s.a,null,null,null);t.default=r.exports},cAA7:function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reg"},[e._m(0),e._v(" "),i("div",{staticClass:"form-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.tel,expression:"form.tel"},{name:"focus",rawName:"v-focus"}],staticClass:"needsclick",attrs:{type:"tel",placeholder:"请输入您的手机号码",maxlength:"11"},domProps:{value:e.form.tel},on:{input:function(t){t.target.composing||(e.form.tel=t.target.value)}}}),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:e.form.tel.length&&1==e.getCodeDisabled,expression:"form.tel.length && getCodeDisabled == 1"}],staticClass:"form-err-tips"},[e._v("手机号不正确")])]),e._v(" "),i("div",{staticClass:"form-item"},[i("div",{staticClass:"f-l"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.c,expression:"form.c"}],staticClass:"needsclick",attrs:{type:"text",maxlength:"4",placeholder:"请输入验证码"},domProps:{value:e.form.c},on:{input:function(t){t.target.composing||(e.form.c=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"f-r"},[i("img",{attrs:{src:e.verify_url,alt:"",width:"92",height:"42"},on:{click:function(t){e.change_verify()}}})])]),e._v(" "),i("div",{staticClass:"form-item"},[i("div",{staticClass:"f-l"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.code,expression:"form.code"}],staticClass:"needsclick",attrs:{type:"tel",maxlength:"4",disabled:1==e.getCodeDisabled,placeholder:"请输入您的验证码"},domProps:{value:e.form.code},on:{input:function(t){t.target.composing||(e.form.code=t.target.value)}}})]),e._v(" "),i("div",{staticClass:"f-r"},[i("button",{staticClass:"ui-btn ui-btn-getCode",attrs:{type:"button",disabled:1==e.getCodeDisabled||1==e.codeDisabled},on:{click:e.getCode}},[e._v(e._s(e.codeText))])])]),e._v(" "),i("div",{staticClass:"form-item"},[i("button",{staticClass:"ui-btn ui-btn-block ui-btn-l2",attrs:{type:"button",disabled:1==e.form_disabled},on:{click:function(t){e.bind_phone()}}},[e._v(e._s(e.sub_text))])]),e._v(" "),i("div",{staticClass:"form-item"},[i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.form.agree,expression:"form.agree"}],staticClass:"ui-checkbox",attrs:{type:"checkbox",id:"agree"},domProps:{checked:Array.isArray(e.form.agree)?e._i(e.form.agree,null)>-1:e.form.agree},on:{__c:function(t){var i=e.form.agree,o=t.target,s=!!o.checked;if(Array.isArray(i)){var a=e._i(i,null);o.checked?a<0&&(e.form.agree=i.concat(null)):a>-1&&(e.form.agree=i.slice(0,a).concat(i.slice(a+1)))}else e.form.agree=s}}}),e._v(" "),i("label",{attrs:{for:"agree"}},[e._v("已阅读并同意")]),e._v(" "),i("a",{staticClass:"skin",attrs:{href:"#"}},[e._v("《爱悦妍服务协议》")])])])])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"top_tips"},[i("i",{staticClass:"iconfont icon-tanhao"}),e._v(" 请您绑定手机号码，以便更好的为您服务")])}],a={render:o,staticRenderFns:s};t.a=a},w9M0:function(e,t,i){"use strict";var o=i(2);t.a={mixins:[o.default],mounted:function(){this.setTitle("绑定手机"),document.body.style.background="#fff"},data:function(){return{sub_text:"立即绑定",codeDisabled:!1,form:{tel:"",code:"",agree:"",c:""},codeText:"获取验证码",t:"",verify_url:"/mini/Home/get_verify"}},computed:{getCodeDisabled:function(){return/^1[3-9]\d{9}$/.test(this.form.tel)?0:1},form_disabled:function(){return/^1[3-9]\d{9}$/.test(this.form.tel)&&4==this.form.code.length?this.form.agree?(this.sub_text="立即绑定",0):(this.sub_text="请同意服务协议",1):1}},methods:{bind_phone:function(){var e=this;this.apiPost("/mini/Home/bind",{phone:this.form.tel,phone_code:this.form.code,agree:this.form.agree}).then(function(t){t.code?(e.$msg(t.msg),setTimeout(function(){history.go(-1)},1e3)):e.handleError(t)})},change_verify:function(){this.verify_url=this.verify_url+"?r="+Math.random()},getCode:function(){var e=this,t=function(){e.codeDisabled=!0;var t=59;clearInterval(e.t);e.t=setInterval(function(){t>0?(t=parseInt(t)-1,e.codeText=t+"s重试"):(clearInterval(e.t),t=59,e.codeText="获取验证码",e.codeDisabled=!1)},1e3)};this.getCodeAjax(t)},getCodeAjax:function(e){var t=this;this.apiPost("/mini/Home/send_phone_code",{phone:this.form.tel,verify:this.form.c}).then(function(i){i.code?"function"==typeof e&&e():t.handleError(i)})}}}}});
//# sourceMappingURL=reg.726a.js.map