webpackJsonp([22],{"0Umf":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("wDug"),a=e("a9UJ"),n=e("VU/8"),o=n(s.a,a.a,null,null,null);t.default=o.exports},a9UJ:function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",[e("ul",{directives:[{name:"show",rawName:"v-show",value:i.list.length>0,expression:"list.length > 0"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.loadMore,expression:"loadMore"}],ref:"ss",staticClass:"thumb-list",attrs:{"infinite-scroll-disabled":i.sloading,"infinite-scroll-immediate-check":!1,"infinite-scroll-distance":10,"infinite-scroll-listen-for-event":"cheackLoadMore"}},i._l(i.list,function(t,s){return e("li",{key:s},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.good_img,expression:"item.good_img"}],attrs:{width:"70",height:"70"},on:{click:function(e){i.goto("/detail/id/"+t.good_id)}}}),i._v(" "),e("div",{staticClass:"info",staticStyle:{"margin-right":"1.5em"},on:{click:function(e){i.goto("/detail/id/"+t.good_id)}}},[e("div",{staticClass:"title"},[i._v(i._s(t.good_title))]),i._v(" "),e("div",{staticClass:"tool"},[e("span",{staticClass:"price"},[i._v("￥\n                        "),e("em",[i._v(i._s(t.price))])])])]),i._v(" "),e("i",{staticClass:"iconfont icon-shanchu ",on:{click:function(t){i.ondel(s)}}})])})),i._v(" "),i.sloading?e("div",{staticClass:"spinner"},[e("mt-spinner",{attrs:{size:18,color:"#26a2ff"}})],1):i.pages.total_page==i.pages.current_page?e("div",{staticClass:"nodata-line"},[i._v("没有更多数据了")]):i._e(),i._v(" "),i.list.length<1&&0==i.sloading?e("div",{staticClass:"nodata"},[e("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),i._v(" "),e("div",[i._v("您还没有收藏记录~")])]):i._e()])},a=[],n={render:s,staticRenderFns:a};t.a=n},wDug:function(i,t,e){"use strict";var s=e(2);t.a={name:"favorite",mixins:[s.default],data:function(){return{list:[],pages:{},sloading:!1}},methods:{loadMore:function(){if(console.log("load"),!this.sloading){var i=parseInt(this.pages.current_page,10)||1;i<this.pages.total_page&&this.get_list(i+1)}},get_list:function(i){i=i||1;var t="/mini/Collect/get_list?page="+i,e=this;e.sloading=!0,this.apiGet(t).then(function(i){if(i.code){if(e.pages=i.data.pages,0==e.list.length)e.list=i.data.list;else{var t=e.list;e.list=t.concat(i.data.list)}setTimeout(function(){e.sloading=!1,e.$emit("cheackLoadMore")},200)}else e.handleError(i)})},ondel:function(i){var t=this,e={good_id:this.list[i].good_id};t.sloading=!0,this.apiPost("/mini/Collect/del",e).then(function(e){e.code?(t.$msg(e.msg),t.list.splice(i,1),setTimeout(function(){t.sloading=!1},1e3)):t.handleError(e)})}},created:function(){this.setTitle("我的收藏"),this.get_list()}}}});