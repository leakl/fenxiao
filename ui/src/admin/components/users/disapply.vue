<template>
    <div>

        <div class="page_heade" @keyup.enter="onSearch()">
            <el-form :inline="true" :model="formInline">
                <el-form-item label="用户ID">
                    <el-input v-model="formInline.keyword" placeholder="用户ID" style="width:180px"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="formInline.user_phone" placeholder="手机号码" style="width:180px"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSearch()">搜索</el-button>
                    <el-button type="danger" @click="onReset" v-if="isSearch">清空搜索</el-button>
                </el-form-item>
            </el-form>

        </div>

        <el-table :data="list" border style="width: 100%" v-loading.body="loading">
            <el-table-column prop="user_id" label="用户ID" width="120"></el-table-column>
            <el-table-column prop="nickname" label="申请人"></el-table-column>
            <el-table-column prop="phone_number" label="申请人手机号码" width="150"></el-table-column>
            <el-table-column prop="add_time" label="申请时间"></el-table-column>
            <el-table-column prop="status" label="处理状态" width="120">
                <template slot-scope="scope">
                    {{scope.row.status == 2?'已处理' : '待处理'}}
                </template>
            </el-table-column>
            <el-table-column prop="handle_time" label="处理时间" ></el-table-column>
            <el-table-column prop="admin_user_id" label="管理员ID" width="100"></el-table-column>
            <el-table-column prop="admin_user_name" label="管理员名称" width="150"></el-table-column>
            <el-table-column label="操作" width="150" align="center">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="handle(scope.row)" v-if="scope.row.status == 1">标记处理</el-button>
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
import http from '@/assets/js/http'
export default {
    mixins: [http],
    data() {
        return {
            isSearch: false,
            dalogi_loading: false,
            formInline: {
                keyword: '',
                user_phone: '',
            },
            list: []
        }
    },
    methods: {
        //保存数据
        handle(data) {
            let url = '/admin/Disapply/handle', vm = this, save_data = {id:data.id};
            vm.dalogi_loading = true;

            this.apiPost(url, save_data).then(function(res) {
                if (res.code) {
                    vm.$message.success(res.msg);
                    if (vm.isSearch) {
                        vm.onSearch(vm.pages.current_page);
                    }else{
                        vm.get_list();
                    }
                } else {
                    vm.handleError(res);
                }
                vm.dalogi_loading = false;
            })

        },
        //清空
        onReset() {
            this.formInline = {
                keyword: '',
                user_phone: '',
            }
            this.get_list(1)
            this.isSearch = false;
        },
        //搜索
        onSearch(current_paged) {
            this.isSearch = true;
            current_paged = current_paged || 1;
            let searchData = this.formInline
            this.get_list(current_paged, searchData)
        },

        //取数据
        get_list(page, searchData) {
            page = page || 1;
            let url = '/admin/Disapply/get_list?page=' + page,
                vm = this;

            vm.loading = true;
            this.apiGet(url, searchData).then(function(res) {
                if (res.code) {
                    vm.list = res.data.list;
                    vm.pages = res.data.pages
                } else {
                    vm.handleError(res)
                }
                vm.loading = false;
            })
        },

    },
    //组件初始化
    created() {
        this.get_list();
        this.setBreadcrumb(['用户', '分销申请'])
        

    }

}
</script>
