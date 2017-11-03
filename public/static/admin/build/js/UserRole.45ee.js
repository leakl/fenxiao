webpackJsonp([8],{"5r/m":function(e,t,a){"use strict";var i=a("RHyO"),n=a("zL8q");a.n(n);t.a={mixins:[i.default],components:{"el-tree":n.Tree,"el-tag":n.Tag},data:function(){return{isSearch:!1,dialogFormVisible:!1,dialogLoading:!1,menu_list:[],dialog:{role_name:"",menu_auth:""},formInline:{keyword:""},list:[]}},methods:{onReset:function(){this.formInline={keyword:""},this.get_list(1),this.isSearch=!1},onSearch:function(e){this.isSearch=!0,e=e||1;var t=this.formInline;this.get_list(e,t)},get_list:function(e,t){e=e||1;var a="/admin/role/get_list?page="+e,i=this;i.loading=!0,this.apiGet(a,t).then(function(e){e.code?(i.list=e.data.list,i.pages=e.data.pages):i.handleError(e),i.loading=!1})},onRemove:function(e){var t=this;this.$confirm("该角色已被使用，如需删除，请把使用该角色的管理员调整为其他角色！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.removeData(e)}).catch(function(){})},removeData:function(e){var t="/admin/role/del_role/role_id/"+e.id,a=this;a.loading=!0,this.apiGet(t).then(function(e){e.code?(a.$message({type:"success",message:e.msg}),a.get_list()):a.handleError(e),a.loading=!1})},open:function(e,t){this.dialogFormVisible=!0;var a=this;setTimeout(function(){if(e){a.dialog.role_name=t.role_name,a.dialog.role_id=t.id;var i=t.menu_auth.split(",");a.$refs.tree.setCheckedKeys(i)}else a.dialog.role_id="",a.dialog.role_name="",a.$refs.tree.setCheckedKeys([])},100)},get_menu_list:function(){var e=this;this.apiGet("/admin/role/add_role").then(function(t){t.code?e.menu_list=t.data.menu:e.handleError(t)})},save_menu:function(e){var t=this.$refs.tree.getCheckedKeys(!0);console.log(t),this.dialog.menu_auth=t.join(",");var a=this;this.apiPost("/admin/role/save_role",a.dialog).then(function(e){a.dialogLoading=!1,e.code?(a.$message.success(e.msg),a.dialogFormVisible=!1,a.get_list()):a.handleError(e)})}},created:function(){this.get_list(),this.setBreadcrumb(["系统","角色管理"]),this.get_menu_list()}}},G9iE:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page_heade"},[a("el-form",{attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"角色名称"},model:{value:e.formInline.keyword,callback:function(t){e.$set(e.formInline,"keyword",t)},expression:"formInline.keyword"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSearch()}}},[e._v("搜索")]),e._v(" "),e.isSearch?a("el-button",{attrs:{type:"danger"},on:{click:e.onReset}},[e._v("清空搜索")]):e._e()],1)],1),e._v(" "),a("el-button",{staticClass:"goods_add_btn",attrs:{type:"warning"},on:{click:function(t){e.open(!1)}}},[e._v("添加角色")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.list,border:""}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"role_name",label:"角色名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"menu_auth_name",label:"菜单权限"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticStyle:{padding:"10px 0"}},e._l(t.row.menu_auth_name,function(t){return a("el-tag",{key:t,staticClass:"mytag",attrs:{type:"primary"}},[e._v(e._s(t))])}))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[1!==t.row.id?a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(a){e.open(!0,t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){e.onRemove(t.row)}}},[e._v("删除")])],1):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[parseInt(e.pages.total_page,10)>1?a("el-pagination",{attrs:{"current-page":parseInt(e.pages.current_page,10),"page-size":parseInt(e.pages.limit,10),total:e.pages.total,layout:"total, prev, pager, next,jumper"},on:{"current-change":e.handleCurrentChange}}):e._e()],1),e._v(" "),a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogFormVisible,open:e.open},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.dialog.role_name,callback:function(t){e.$set(e.dialog,"role_name",t)},expression:"dialog.role_name"}})],1),e._v(" "),a("el-form-item",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],attrs:{label:"权限"}},[a("el-tree",{ref:"tree",attrs:{data:e.menu_list,"show-checkbox":"","node-key":"id"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.save_menu}},[e._v("确 定")])],1)],1)],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},rkGO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("5r/m"),n=a("G9iE"),o=a("VU/8"),l=o(i.a,n.a,!1,null,null,null);t.default=l.exports}});