<template>
    <div>
        <div class="page_heade" @keyup.enter="onSearch()">
            <el-form :inline="true" :model="formInline">
                <el-form-item label="用户呢称">
                    <el-input v-model="formInline.keyword" placeholder="用户呢称" style="width:220px"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSearch()">搜索</el-button>
                    <el-button type="danger" @click="onReset" v-if="isSearch">清空搜索</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="list" border style="width: 100%" v-loading.body="loading">
            <el-table-column prop="user_id" label="用户ID" width="100"></el-table-column>
            <el-table-column prop="nickname" label="用户呢称" width="180"></el-table-column>
            <el-table-column prop="content" label="对话内容"></el-table-column>
            <el-table-column prop="read_status" label="是否已读">
                <template slot-scope="scope">
                    <span class="red" v-if="scope.row.read_status == 1">未读</span>
                    <span class="" v-else>已读</span>
                </template>
            </el-table-column>
            <el-table-column prop="add_time" label="添加时间" width="200"></el-table-column>
            <el-table-column label="操作" width="120" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="open_replyDialog(scope.row)">发送</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination v-if="parseInt(pages.total_page,10) > 1" @current-change="handleCurrentChange" :current-page="parseInt(pages.current_page,10)" :page-size="parseInt(pages.limit,10)" :total="pages.total" layout="total, prev, pager, next,jumper">
            </el-pagination>
        </div>





    </div>
</template>
<script>
import http from "@/assets/js/http";

export default {
  mixins: [http],

  data() {
    return {
      isSearch: false,

      formInline: {
        keyword: ""
      },

      list: []
    };
  },
  methods: {
    open_replyDialog(item) {
      if (item) {
        let _i = JSON.parse(JSON.stringify(item));
        let vm = this;
        this.apiGet(
          "/admin/Kefu/join_group?user_id=" + _i.user_id
        ).then(res => {
          if (res.code) {
            console.log(res.msg);
            vm.addTalkBox(_i)
            vm.readStatus(_i.user_id,_i.message_group_id)
          } else {
            vm.handleError(res);
          }
        });
        //;
      }
    },
    readStatus(user_id,message_group_id){
        this.apiPost('/admin/Kefu/update_message_status',{
            user_id:user_id,
            message_group_id:message_group_id
        }).then(res=>{
            this.get_list();
        })
    },
    //清空
    onReset() {
      this.formInline = {
        keyword: ""
      };
      this.get_list(1);
      this.isSearch = false;
    },
    //搜索
    onSearch(current_paged) {
      this.isSearch = true;
      current_paged = current_paged || 1;
      let searchData = this.formInline;
      this.get_list(current_paged, searchData);
    },

    //取数据
    get_list(page, searchData) {
      page = page || 1;
      let url = "/admin/kefu/get_list?page=" + page,
        vm = this;
      vm.loading = true;
      this.apiGet(url, searchData).then(function(res) {
        if (res.code) {
          vm.list = res.data.list;
          if (vm.isSearch == false) {
            //通知全局商品分类数据
            vm.setCatList(res.data.list);
          }
          vm.pages = res.data.pages;
        } else {
          vm.handleError(res);
        }
        vm.loading = false;
      });
    }
  },
  //组件初始化
  created() {
    this.get_list();
    this.setBreadcrumb(["前台", "在线客服"]);
  }
};
</script>
