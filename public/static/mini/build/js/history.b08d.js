webpackJsonp([21],{dHOr:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("iY9T"),n=e("rn5R"),a=e("VU/8"),o=a(s.a,n.a,null,null,null);t.default=o.exports},iY9T:function(i,t,e){"use strict";var s=e(2);t.a={name:"favorite",mixins:[s.default],data:function(){return{list:[],pages:{},sloading:!1}},methods:{ondel:function(i){var t=this,e={id:this.list[i].id};this.$confirm({msg:"确定删除此足迹？",yes:function(){t.apiPost("/mini/Footmark/del",e).then(function(e){e.code?(t.$msg(e.msg),t.list.splice(i,1)):t.handleError(e)})}})},loadMore:function(){if(!this.sloading){var i=parseInt(this.pages.current_page,10)||1;i<this.pages.total_page&&this.get_list(i+1)}},get_list:function(i){this.sloading=!0,i=i||1;var t="/mini/Footmark/get_list?page="+i,e=this;this.apiGet(t,{}).then(function(t){if(t.code)if(e.pages=t.data.pages,i<2)e.list=t.data.list;else{var s=e.list;s=s.concat(t.data.list),e.list=s}else e.handleError(t);setTimeout(function(){e.sloading=!1,e.$emit("checkLoadMore")},200)})}},created:function(){this.setTitle("我的足迹"),this.get_list()}}},rn5R:function(i,t,e){"use strict";var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:i.loading,expression:"loading"}]},[e("ul",{directives:[{name:"show",rawName:"v-show",value:i.list.length>0,expression:"list.length > 0"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:i.loadMore,expression:"loadMore"}],staticClass:"thumb-list",attrs:{"infinite-scroll-disabled":i.sloading,"infinite-scroll-immediate-check":!1,"infinite-scroll-distance":10,"infinite-scroll-listen-for-event":"cheackLoadMore"}},i._l(i.list,function(t,s){return e("li",{key:t.id},[e("img",{attrs:{src:t.good_img,width:"70",height:"70"},on:{click:function(e){i.goto("/detail/id/"+t.good_id)}}}),i._v(" "),e("div",{staticClass:"info",staticStyle:{"margin-right":"1.5em"},on:{click:function(e){i.goto("/detail/id/"+t.good_id)}}},[e("div",{staticClass:"title"},[i._v(i._s(t.good_title))]),i._v(" "),e("div",{staticClass:"tool"},[e("span",{staticClass:"price"},[i._v("￥\n                        "),e("em",[i._v(i._s(t.price))])])])]),i._v(" "),e("i",{staticClass:"iconfont icon-shanchu ",on:{click:function(t){i.ondel(s)}}})])})),i._v(" "),i.sloading?e("div",{staticClass:"spinner"},[e("mt-spinner",{attrs:{size:18,color:"#26a2ff"}})],1):i.pages.total_page==i.pages.current_page?e("div",{staticClass:"nodata-line"},[i._v("没有更多数据了")]):i._e(),i._v(" "),i.list.length<1&&0==i.loading?e("div",{staticClass:"nodata"},[e("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),i._v(" "),e("div",[i._v("您还没有访问记录~")])]):i._e()])},n=[],a={render:s,staticRenderFns:n};t.a=a}});