webpackJsonp([12],{"95K2":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-page"},[e("div",{staticClass:"search-history"},[t.$store.state.hList.length>0?e("div",{staticClass:"header"},[e("span",{staticClass:"title"},[t._v("最近搜索：")]),t._v(" "),e("a",{attrs:{herf:"javascript:;"},on:{click:t.clear}},[t._v("清空历史")])]):t._e(),t._v(" "),t.$store.state.hList.length>0?e("div",{staticClass:"h-list"},t._l(t.$store.state.hList,function(s){return e("span",{key:s,staticClass:"label",on:{click:function(e){t.getSearch(s)}}},[t._v(t._s(s))])})):t._e()]),t._v(" "),1==t.showCat?e("div",{staticClass:"header-sort-mask",on:{click:t.closeDialog}}):t._e(),t._v(" "),e("div",{staticClass:"header-sort"},[e("div",{staticClass:"item",class:{active:t.showCat||t.$store.state.search.cat_idx},on:{click:function(s){t.showCat=!t.showCat}}},[e("i",{staticClass:"iconfont icon-fenlei"}),t._v(" "),t.cat_list.length>1?e("span",[t._v(t._s(t.$store.state.search.cat_idx?t.cat_list[t.$store.state.search.cat_idx].cat_name:"分类"))]):t._e()]),t._v(" "),e("div",{staticClass:"item sort",class:{active:t.$store.state.sort,skin:t.sort},on:{click:t.onSort}},[e("i",{staticClass:"iconfont icon-paixu"}),t._v(" 价格")]),t._v(" "),e("transition",{attrs:{name:"cat"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCat,expression:"showCat"}],staticClass:"class-dialog"},[t.cat_list.length>0?e("div",{staticClass:"scroll"},[e("scroller",t._l(t.cat_list,function(s,a){return e("span",{key:s.id,class:{active:a==t.$store.state.search.cat_idx},on:{click:function(s){t.selectCat(a)}}},[t._v(t._s(s.cat_name)+"\n                            "),a==t.$store.state.search.cat_idx?e("i",{staticClass:"iconfont icon-dagou"}):t._e()])}))],1):t._e()])])],1),t._v(" "),t.$store.state.list.length>0&&0==t.$store.state.search.loading?e("div",[e("ul",{staticClass:"thumb-box"},t._l(t.$store.state.list,function(s){return e("li",{key:s.id},[e("div",{staticClass:"thumb",on:{click:function(e){t.goto("/detail/id/"+s.id)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.good_img,expression:"item.good_img"}]})]),t._v(" "),e("div",{staticClass:"title",on:{click:function(e){t.goto("/detail/id/"+s.id)}}},[t._v("\n                    "+t._s(s.good_title)+"\n                ")]),t._v(" "),e("div",{staticClass:"info"},[4==s.good_type||5==s.good_type?e("span",{staticClass:"price"},[t._v("积分\n                        "),e("em",[t._v(t._s(s.credits))])]):e("span",{staticClass:"price"},[t._v("￥\n                        "),e("em",[t._v(t._s(s.price))])]),t._v(" "),1==s.good_type?e("i",{staticClass:"iconfont icon-gouwuche1",on:{click:function(e){t.add_cart(s.id)}}}):t._e()])])}))]):t._e(),t._v(" "),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.$store.state.search.loading,expression:"$store.state.search.loading"}],staticStyle:{padding:"1em 0"}}),t._v(" "),t.$store.state.list.length<1&&0==t.$store.state.search.loading?e("div",{staticClass:"nodata"},[e("i",{staticClass:"iconfont icon-tongyongmeiyoushuju"}),t._v(" "),e("div",[t._v("没有找到数据")])]):t._e()])},i=[],o={render:a,staticRenderFns:i};s.a=o},"lvj/":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("o9Qd"),i=e("95K2"),o=e("VU/8"),c=o(a.a,i.a,null,null,null);s.default=c.exports},o9Qd:function(t,s,e){"use strict";var a=e(3);s.a={name:"search",mixins:[a.default],watch:{$route:function(t,s){this.init()}},beforeRouteEnter:function(t,s,e){console.log(s),e(function(t){"home"==s.name&&(t.$store.state.list=[],t.$store.state.search.keyword="")})},data:function(){return{showCat:!1,list:[],sort:!1,cat_list:[{cat_name:"全部",id:0}]}},methods:{add_cart:function(t){var s=this,e={good_id:t};this.apiPost("/mini/Cart/add",e).then(function(t){t.code?s.$msg(t.msg):s.handleError(t)})},onSort:function(){this.sort=!0,this.$store.state.sort=!this.$store.state.sort,this.getSearch()},closeDialog:function(){this.showCat=!1,this.getSearch()},selectCat:function(t){this.$store.state.search.cat_idx=t;var s=this;setTimeout(function(){s.closeDialog()},300)},clear:function(){window.localStorage.removeItem("__SearchHistory__"),this.sethList([])},init:function(){this.getList(),setTimeout(function(){document.body.scrollTop=0},500)},getList:function(){var t=window.localStorage.getItem("__SearchHistory__");t&&(t=JSON.parse(t),this.sethList(t))},get_cat:function(){var t=this;this.apiGet("/mini/Home/get_cat_list?page=1",{limit:7}).then(function(s){if(s.code){if(t.cat_list=t.cat_list.concat(s.data),"search2"==t.$route.name){var e=t.$route.params.cat_id;t.$store.state.search.keyword="";for(var a=0,i=0;i<s.data.length;i++)if(e==s.data[i].id){a=i+1;break}t.selectCat(a),t.getSearch()}}else t.handleError(s)})},getSearch:function(t){var s=this,e={keyword:t||this.$store.state.search.keyword};t&&(this.$store.state.search.keyword=t),this.$store.state.search.cat_idx&&(e.cat_id=this.cat_list[this.$store.state.search.cat_idx].id),this.sort&&(0==this.$store.state.sort?e.price_order="desc":e.price_order="asc"),s.$store.state.search.loading=!0,this.apiGet("/mini/Good/get_list?page=1",e).then(function(t){t.code?s.setSearchList(t.data.list):s.handleError(t),setTimeout(function(){s.$store.state.search.loading=!1},400)})}},created:function(){this.init(),this.setTitle("搜索"),this.get_cat()}}}});