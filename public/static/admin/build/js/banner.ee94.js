webpackJsonp([19],{Ib1H:function(t,a,e){"use strict";var i=e("mvHQ"),l=e.n(i),s=e("RHyO");a.a={mixins:[s.default],data:function(){return{dialogFormVisible:!1,isSearch:!1,dialog:{img_url:"",sort:"0",status:"",goto_url:""},isEdit:!1,editId:0,list:[]}},methods:{changeStatus:function(t){var a=this,e={id:t.id,status:t.status};this.apiPost("/admin/banner/edit",e).then(function(t){a.dialogLoading=!1,t.code?a.$message.success(t.msg):a.handleError(t)})},onEdit:function(t){this.isEdit=!0,this.dialogFormVisible=!0;var a=JSON.parse(l()(this.list[t]));this.editId=a.id,this.dialog=a},open_addCat:function(t){this.isEdit=!1,this.dialogFormVisible=!0,this.dialog={img_url:"",sort:"0",status:1,goto_url:""}},handleAvatarSuccess:function(t,a){t.code&&(this.dialog.img_url=t.data.img_path)},beforeAvatarUpload:function(t){var a="image/jpeg"==t.type,e="image/png"==t.type,i=!1,l=t.size/1024/1024<2;return l||this.$message.error("上传图片大小不能超过 2MB!"),e||a?i=!0:this.$message.error("上传图片只能是 PNG 或 JPG 格式!"),l&&i},postNewCat:function(){var t=this.dialog,a=this.isEdit?"/admin/Banner/edit":"/admin/Banner/add",e=this;this.apiPost(a,t).then(function(t){t.code?(e.$message.success(t.msg),e.get_list(),e.dialogFormVisible=!1):e.handleError(t)})},get_list:function(t,a){t=t||1;var e="/admin/Banner/get_list?page="+t,i=this;i.loading=!0,this.apiGet(e,a).then(function(t){t.code?(i.list=t.data.list,i.pages=t.data.pages):i.handleError(t),i.loading=!1})},onRemove:function(t){var a=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",beforeClose:function(e,i,l){"confirm"==e?a.removeData(t,l):l()}}).then(function(){}).catch(function(){})},removeData:function(t,a){var e=this.list[t],i="/admin/banner/del?id="+e.id,l=this;l.loading=!0,this.apiGet(i).then(function(e){e.code?(l.list.splice(t,1),l.$message({type:"success",message:e.msg}),"function"==typeof a&&a()):l.handleError(e),l.loading=!1})}},created:function(){this.get_list(),this.setBreadcrumb(["前台","首页轮播图"])}}},W6W1:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"page_heade",staticStyle:{height:"50px"}},[e("el-button",{staticClass:"goods_add_btn",attrs:{type:"warning"},on:{click:function(a){t.open_addCat(!1)}}},[t._v("添加轮播图")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[e("el-table-column",{attrs:{prop:"id",label:"ID",width:"60"}}),t._v(" "),e("el-table-column",{attrs:{prop:"img_url",label:"轮播图",width:"140"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("div",{staticStyle:{padding:"10px 0"}},[e("img",{attrs:{src:t.row.img_url,width:"100",height:"43"}})])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"goto_url",label:"链接"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{attrs:{href:a.row.goto_url,target:"_blank"}},[t._v(t._s(a.row.goto_url))])]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"sort",label:"排序",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"admin_user_name",label:"添加人",width:"100"}}),t._v(" "),e("el-table-column",{attrs:{prop:"add_time",label:"添加时间",width:"140"}}),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"是否启用",width:"140"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-radio-group",{attrs:{size:"small"},on:{change:function(e){t.changeStatus(a.row)}},model:{value:a.row.status,callback:function(t){a.row.status=t},expression:"scope.row.status"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("启用")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("禁用")])],1)]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center",width:"120"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.onEdit(a.$index)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){t.onRemove(a.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),e("div",{staticClass:"pagination"},[parseInt(t.pages.total_page,10)>1?e("el-pagination",{attrs:{"current-page":parseInt(t.pages.current_page,10),"page-size":parseInt(t.pages.limit,10),total:t.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":t.handleCurrentChange}}):t._e()],1),t._v(" "),e("el-dialog",{attrs:{title:"添加轮播图",visible:t.dialogFormVisible},on:{"update:visible":function(a){t.dialogFormVisible=a}}},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"是否启用"}},[e("el-radio-group",{attrs:{size:"small"},model:{value:t.dialog.status,callback:function(a){t.dialog.status=a},expression:"dialog.status"}},[e("el-radio-button",{attrs:{label:"1"}},[t._v("启用")]),t._v(" "),e("el-radio-button",{attrs:{label:"2"}},[t._v("禁用")])],1)],1),t._v(" "),e("el-form-item",{attrs:{label:"排序"}},[e("el-input",{attrs:{placeholder:"排序 0 - 999","auto-complete":"off"},model:{value:t.dialog.sort,callback:function(a){t.dialog.sort=a},expression:"dialog.sort"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"链接"}},[e("el-input",{attrs:{placeholder:"链接地址","auto-complete":"off"},model:{value:t.dialog.goto_url,callback:function(a){t.dialog.goto_url=a},expression:"dialog.goto_url"}})],1),t._v(" "),e("el-form-item",{staticClass:"my_error",attrs:{label:"轮播图"}},[e("div",{staticClass:"red small"},[t._v("尺寸为 750 * 320 长方形")]),t._v(" "),e("el-upload",{staticClass:"avatar-uploader",attrs:{disabled:t.isEdit,action:"/admin/Asset/upload?_ajax=1",name:"image",data:{img_type:"banner_img"},accept:"image/jpeg,image/png","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.dialog.img_url?e("img",{staticClass:"avatar",staticStyle:{width:"180px"},attrs:{src:t.dialog.img_url}}):e("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),t._v(" "),e("div",{staticClass:"dialog-footer",slot:"footer"},[e("el-button",{on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.postNewCat}},[t._v("确 定")])],1)],1)],1)},l=[],s={render:i,staticRenderFns:l};a.a=s},llCE:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Ib1H"),l=e("W6W1"),s=e("VU/8"),o=s(i.a,l.a,!1,null,null,null);a.default=o.exports}});