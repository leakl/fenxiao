webpackJsonp([9],{"2qs+":function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Ia3z"),e=n("N9aq"),a=n("VU/8"),o=a(s.a,e.a,null,null,null);t.default=o.exports},Ia3z:function(i,t,n){"use strict";var s=n(3);t.a={name:"class",mixins:[s.default],data:function(){return{info:{}}},methods:{get_info:function(){var i=this;this.apiGet("/mini/Home/center_info",{}).then(function(t){t.code?i.info=t.data:i.handleError(t)})}},created:function(){this.setTitle("帐号"),this.get_info()}}},N9aq:function(i,t,n){"use strict";var s=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",[n("ul",{staticClass:"ui-fixd"},[n("li",{staticClass:"med"},[n("div",{},[i._v("头像")]),i._v(" "),n("img",{attrs:{src:i.info.img_url,width:"50",height:"50",alt:""}})]),i._v(" "),n("li",[n("div",{},[i._v("呢称")]),i._v(" "),n("div",{staticClass:"gery"},[i._v(i._s(i.info.nickname))])]),i._v(" "),n("li",[n("div",{},[i._v("性别")]),i._v(" "),n("div",{staticClass:"gery"},[i._v(i._s(1==i.info.sex?"男":2==i.info.sex?"女":"保密"))])]),i._v(" "),n("li",[n("div",{},[i._v("已绑手机")]),i._v(" "),i.info.phone_number?n("div",[n("span",{staticClass:"gery"},[i._v(i._s(i.info.phone_number)+" ")]),i._v(" "),n("span",{staticClass:"ui-btn ui-btn-small",on:{click:function(t){i.goto("/reg")}}},[i._v("重新绑定")])]):n("div",[n("span",{staticClass:"gery"},[i._v("未绑定 ")]),i._v(" "),n("span",{staticClass:"ui-btn ui-btn-small",on:{click:function(t){i.goto("/reg")}}},[i._v("前往绑定")])])])])])},e=[],a={render:s,staticRenderFns:e};t.a=a}});