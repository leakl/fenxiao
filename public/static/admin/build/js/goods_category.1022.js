webpackJsonp([3],{"+Sc3":function(t,e,n){"use strict";var a=n("//TE");e.a={mixins:[a.a],data:function(){return{isSearch:!1,formInline:{good_type:"",keyword:"",cat_id:"",status:""},list:[]}},methods:{open_addCat:function(t){var e=this,n=t?t.cat_name:"";this.$prompt("请输入分类名","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"分类名格式不正确",closeOnClickModal:!1,inputValue:n||"",beforeClose:function(n,a,i){if("confirm"==n){var o={id:t?t.id:"",cat_name:a.inputValue};e.postNewCat(o,i)}else i()}}).catch(function(){})},postNewCat:function(t,e){var n=t.id?"/admin/goodscat/edit":"/admin/goodscat/add",a=this,i={id:t.id,cat_name:t.cat_name};this.apiPost(n,i).then(function(t){t.code?(a.$message.success(t.msg),a.get_list(),"function"==typeof e&&e()):a.handleError(t)})},handleCurrentChange:function(t){this.isSearch?this.onSearch(t):this.get_list(t)},onReset:function(){this.formInline={keyword:""},this.get_list(1),this.isSearch=!1},onSearch:function(t){this.isSearch=!0,t=t||1;var e=this.formInline;this.get_list(t,e)},get_list:function(t,e){t=t||1;var n="/admin/goodscat/get_list?page="+t,a=this;a.loading=!0,this.apiGet(n,e).then(function(t){t.code?(a.list=t.data.list,0==a.isSearch&&a.setCatList(t.data.list),a.pages=t.data.pages):a.handleError(t),a.loading=!1})},onRemove:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(n,a,i){"confirm"==n?e.removeData(t,i):i()}}).then(function(){}).catch(function(){})},removeData:function(t,e){var n=this.list[t],a="/admin/goodscat/del?id="+n.id,i=this;i.loading=!0,this.apiGet(a).then(function(n){n.code?(i.list.splice(t,1),i.$message({type:"success",message:n.msg}),"function"==typeof e&&e()):i.handleError(n),i.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["商品","商品分类"]),this.setMenu("0-1")}}},H8eH:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page_heade",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.onSearch()}}},[n("el-form",{attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"商品分类"}},[n("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"商品分类"},model:{value:t.formInline.keyword,callback:function(e){t.formInline.keyword=e},expression:"formInline.keyword"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSearch()}}},[t._v("搜索")]),t._v(" "),t.isSearch?n("el-button",{attrs:{type:"danger"},on:{click:t.onReset}},[t._v("清空搜索")]):t._e()],1)],1),t._v(" "),n("el-button",{staticClass:"goods_add_btn",attrs:{type:"warning"},on:{click:function(e){t.open_addCat()}}},[t._v("添加分类")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"cat_name",label:"商品分类"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"添加人",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"add_time",label:"添加时间",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.open_addCat(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.onRemove(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination"},[parseInt(t.pages.total_page,10)>1?n("el-pagination",{attrs:{"current-page":parseInt(t.pages.current_page,10),"page-size":parseInt(t.pages.limit,10),total:t.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)},i=[],o={render:a,staticRenderFns:i};e.a=o},wafz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("+Sc3"),i=n("H8eH"),o=n("VU/8"),s=o(a.a,i.a,null,null,null);e.default=s.exports}});