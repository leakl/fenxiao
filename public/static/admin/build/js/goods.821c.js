webpackJsonp([16],{lXhW:function(t,e,a){"use strict";var l=a("RHyO");e.a={mixins:[l.default],data:function(){return{isSearch:!1,formInline:{good_type:"",keyword:"",cat_id:"",status:""},list:[]}},methods:{tableRowClassName:function(t,e){return 2==t.status?"status_off":""},getType:function(t){var e=parseInt(t,10);return this.$store.getters.GOODTYPE[e-1].label},onReset:function(){this.formInline={goods_type:"",keyword:"",cat_id:"",status:""},this.get_list(1),this.isSearch=!1},onSearch:function(t){this.isSearch=!0,t=t||1;var e=this.formInline;this.get_list(t,e)},get_list:function(t,e){t=t||1;var a="/admin/goodsall/get_list?page="+t,l=this;l.loading=!0,this.apiGet(a,e).then(function(t){t.code?(l.list=t.data.list,l.pages=t.data.pages):l.handleError(t),l.loading=!1})},onRemove:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.removeData(t)}).catch(function(){})},removeData:function(t){var e=this.list[t],a="/admin/goodsall/del/good_id/"+e.id,l=this;l.loading=!0,this.apiGet(a).then(function(e){e.code?(l.list.splice(t,1),l.$message({type:"success",message:e.msg})):l.handleError(e),l.loading=!1})},get_cat:function(){if(console.log(this.$store.state.cat_list.length),this.$store.state.cat_list.length<1){var t=this;this.apiGet("/admin/goodscat/get_list").then(function(e){e.code?t.setCatList(e.data.list):t.handleError(e)})}}},created:function(){this.get_list(),this.get_cat(),this.setBreadcrumb(["商品","商品列表"])}}},qRTp:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page_heade"},[a("el-form",{attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"商品标题/编号"}},[a("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"商品标题/编号"},model:{value:t.formInline.keyword,callback:function(e){t.formInline.keyword=e},expression:"formInline.keyword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品分类"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"商品分类",clearable:""},model:{value:t.formInline.cat_id,callback:function(e){t.formInline.cat_id=e},expression:"formInline.cat_id"}},t._l(t.$store.state.cat_list,function(t){return a("el-option",{key:t.id,attrs:{value:t.id,label:t.cat_name}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"商品类型"}},[a("el-select",{staticStyle:{width:"120px"},attrs:{placeholder:"商品类型",clearable:""},model:{value:t.formInline.good_type,callback:function(e){t.formInline.good_type=e},expression:"formInline.good_type"}},t._l(t.$store.state.GOODTYPE,function(t){return a("el-option",{key:t.id,attrs:{value:t.id,label:t.label}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"商品状态"}},[a("el-select",{staticStyle:{width:"90px"},attrs:{placeholder:"商品状态",clearable:""},model:{value:t.formInline.status,callback:function(e){t.formInline.status=e},expression:"formInline.status"}},[a("el-option",{attrs:{label:"上架",value:1}}),t._v(" "),a("el-option",{attrs:{label:"下架",value:2}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSearch()}}},[t._v("搜索")]),t._v(" "),t.isSearch?a("el-button",{attrs:{type:"danger"},on:{click:t.onReset}},[t._v("清空搜索")]):t._e()],1)],1),t._v(" "),a("el-button",{staticClass:"goods_add_btn",attrs:{type:"warning"},on:{click:function(e){t.goto("/goods/goods_add")}}},[t._v("添加商品")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:"","row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{prop:"id",label:"商品编号",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{prop:"good_title",label:"商品标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cat_name",label:"商品分类",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specification",label:"商品规格",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brand",label:"品牌",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"销售价格",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"credits",label:"积分兑换",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"presenter_credits",label:"赠送积分",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"good_type",label:"商品类型",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.getType(e.row.good_type)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"distribution",label:"参与分销",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(1==e.row.distribution?"参与":"不参与")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",align:"center",label:"是否上架",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(1==e.row.status?"上架":"下架")+"\n            ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"add_time",label:"添加时间",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.goto("/goods/goods_edit/id/"+e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.onRemove(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[parseInt(t.pages.total_page,10)>1?a("el-pagination",{attrs:{"current-page":parseInt(t.pages.current_page,10),"page-size":parseInt(t.pages.limit,10),total:t.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)},n=[],o={render:l,staticRenderFns:n};e.a=o},wwx4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("lXhW"),n=a("qRTp"),o=a("VU/8"),i=o(l.a,n.a,!1,null,null,null);e.default=i.exports}});