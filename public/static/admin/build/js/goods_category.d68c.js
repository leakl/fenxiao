webpackJsonp([17],{"1o6D":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("N19K"),o=a("NUCJ"),l=a("VU/8"),n=l(i.a,o.a,!1,null,null,null);e.default=n.exports},N19K:function(t,e,a){"use strict";var i=a("RHyO"),o=a("zL8q");a.n(o);e.a={mixins:[i.default],components:{"el-upload":o.Upload},data:function(){return{dialogFormVisible:!1,isSearch:!1,formInline:{good_type:"",keyword:"",cat_id:"",status:""},dialog:{cat_name:"",id:"",sort:"0",cat_img:""},list:[]}},methods:{open_addCat:function(t,e){this.dialogFormVisible=!0,this.dialog=t?e:{cat_name:"",id:"",sort:"0",cat_img:""}},handleAvatarSuccess:function(t,e){t.code&&(this.dialog.cat_img=t.data.img_path)},beforeAvatarUpload:function(t){var e="image/jpeg"==t.type,a="image/png"==t.type,i=!1,o=t.size/1024/1024<2;return o||this.$message.error("上传图片大小不能超过 2MB!"),a||e?i=!0:this.$message.error("上传图片只能是 PNG 或 JPG 格式!"),o&&i},postNewCat:function(){var t=this.dialog,e=t.id?"/admin/goodscat/edit":"/admin/goodscat/add",a=this;this.apiPost(e,t).then(function(t){t.code?(a.$message.success(t.msg),a.get_list(),a.dialogFormVisible=!1):a.handleError(t)})},onReset:function(){this.formInline={keyword:""},this.get_list(1),this.isSearch=!1},onSearch:function(t){this.isSearch=!0,t=t||1;var e=this.formInline;this.get_list(t,e)},get_list:function(t,e){t=t||1;var a="/admin/goodscat/get_list?page="+t,i=this;i.loading=!0,this.apiGet(a,e).then(function(t){t.code?(i.list=t.data.list,0==i.isSearch&&i.setCatList(t.data.list),i.pages=t.data.pages):i.handleError(t),i.loading=!1})},onRemove:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(a,i,o){"confirm"==a?e.removeData(t,o):o()}}).then(function(){}).catch(function(){})},removeData:function(t,e){var a=this.list[t],i="/admin/goodscat/del?id="+a.id,o=this;o.loading=!0,this.apiGet(i).then(function(a){a.code?(o.list.splice(t,1),o.$message({type:"success",message:a.msg}),"function"==typeof e&&e()):o.handleError(a),o.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["商品","商品分类"])}}},NUCJ:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"page_heade",on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.onSearch()}}},[a("el-form",{attrs:{inline:!0,model:t.formInline}},[a("el-form-item",{attrs:{label:"商品分类"}},[a("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"商品分类"},model:{value:t.formInline.keyword,callback:function(e){t.$set(t.formInline,"keyword",e)},expression:"formInline.keyword"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onSearch()}}},[t._v("搜索")]),t._v(" "),t.isSearch?a("el-button",{attrs:{type:"danger"},on:{click:t.onReset}},[t._v("清空搜索")]):t._e()],1)],1),t._v(" "),a("el-button",{staticClass:"goods_add_btn",attrs:{type:"warning"},on:{click:function(e){t.open_addCat(!1)}}},[t._v("添加分类")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cat_img",label:"分类小图",width:"100"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.cat_img,width:"40",height:"40",alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"cat_name",label:"商品分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"添加人",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{prop:"add_time",label:"添加时间",width:"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.open_addCat(!0,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.onRemove(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination"},[parseInt(t.pages.total_page,10)>1?a("el-pagination",{attrs:{"current-page":parseInt(t.pages.current_page,10),"page-size":parseInt(t.pages.limit,10),total:t.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"添加分类",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"分类名"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.dialog.cat_name,callback:function(e){t.$set(t.dialog,"cat_name",e)},expression:"dialog.cat_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{attrs:{placeholder:"排序 0 - 999","auto-complete":"off"},model:{value:t.dialog.sort,callback:function(e){t.$set(t.dialog,"sort",e)},expression:"dialog.sort"}})],1),t._v(" "),a("el-form-item",{staticClass:"my_error",attrs:{label:"分类小图"}},[a("div",{staticClass:"red small"},[t._v("尺寸为 120 * 120 正方形")]),t._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/admin/Asset/upload?_ajax=1",name:"image",data:{img_type:"good_cat_img"},accept:"image/jpeg,image/png","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.dialog.cat_img?a("img",{staticClass:"avatar",attrs:{src:t.dialog.cat_img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.postNewCat}},[t._v("确 定")])],1)],1)],1)},o=[],l={render:i,staticRenderFns:o};e.a=l}});