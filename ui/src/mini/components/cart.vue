<template>
    <div class="cart" v-loading="loading">

        <ul class="thumb-list" v-if="list.length > 0 && loading == false">
            <li v-for="(item,idx) in list" :key="item.good_id">
                <input type="checkbox" class="ui-checkbox" v-model="item.selected" @change="onChange">
                <img v-lazy="item.good_img" width="70" height="70">
                <div class="info">
                    <div class="title" style="padding-right:1em">{{item.good_title}}</div>
                    <div class="tool">
                        <span class="price">￥
                            <em>{{item.price}}</em>
                        </span>
                        <span class="totle">
                            <input-num v-model="item.total"></input-num>
                        </span>
                    </div>
                </div>
                <i class="iconfont icon-shanchu " @click="ondel(idx);"></i>
            </li>
        </ul>
        <div class="nodata" v-if="list.length < 1 && loading == false">
            <i class="iconfont icon-tongyongmeiyoushuju"></i>
            <div>您的购物车是空的~</div>
        </div>
        <div class="tool-bottom" v-if="list.length > 0">
            <div><input type="checkbox" id="allcheackbox" v-model="allCheakbox" class="ui-checkbox" @change="onAllCheack"></div>
            <div>
                <label for="allcheackbox">全选</label>
            </div>
            <div class="total_label">合计:</div>
            <div class="total">
                <span>￥
                    <em>{{total.toFixed(2)}}</em>
                </span>
            </div>
            <button type="button" class="ui-jiesuan" @click="go_buy()">去结算</button>
        </div>
    </div>
</template>
<script>
import http from '@/assets/js/http'
import inputNum from './inputNum'
export default {
    name: 'cart',
    mixins: [http],
    components: {
        inputNum
    },
    data() {
        return {
            list: [],
            allCheakbox: false,
            user_phone_number: ''
        }
    },
    computed: {
        total() {
            let _d = this.list;
            let n = 0, i = 0;
            for (let item of _d) {
                if (item.selected) {
                    n = n + parseFloat(item.price) * parseInt(item.total, 10);
                    i = i + 1;
                }
            }
            if (_d.length > 0 && i == _d.length) {
                this.allCheakbox = true;
            } else {
                this.allCheakbox = false;
            }

            return n

        }
    },
    methods: {
        //结算
        go_buy() {
            if(this.user_phone_number == ''){
                this.goto('/reg');
                return false;
            }
            let _d = this.list, params = [], isSelected = false;
            for (let item of _d) {
                if (item.selected) {
                    params.push({ good_id: item.good_id, good_count: item.total });
                    isSelected = true
                }
            }
            if (isSelected) {
               this.setCart(params)
               this.goto('/confirm')
            } else {
                this.$msg('请选择商品，再提交');
            }

        },
        ondel(index) {
            let vm = this;
            this.$confirm({
                msg: '确定删除此商品？',
                yes: function() { vm.del(index) }
            })
        },
        //删除
        del(k) {
            let url = '/mini/Cart/del', vm = this, data = { good_id: this.list[k].good_id };
            this.apiPost(url, data).then(function(res) {
                if (res.code) {
                    vm.$msg(res.msg);
                    vm.list.splice(k, 1);
                } else {
                    vm.handleError(res)
                }
            })
        },
        onChange() {

        },
        onAllCheack(event) {
            let _d = this.list;
            for (let item of _d) {
                item.selected = event.target.checked;
            }
        },

        //取数据
        get_list(page) {

            page = page || 1;
            let url = '/mini/Cart/get_list?page=' + page,
                vm = this;


            this.apiGet(url, {}).then(function(res) {
                if (res.code) {
                    vm.list = res.data.list;
                    vm.pages = res.data.pages;
                    vm.user_phone_number = res.data.user_phone_number;
                } else {
                    vm.handleError(res)
                }

            })
        },

    },
    created() {
        this.setTitle('我的购物车')
        this.get_list();

    },
}

</script>
