<template>
    <div class="address">
        <ul class="ui-links">
            <li v-for="(item, idx) in list" :key="idx">
                <div style="margin-right:10px;" v-if="is_use == 1"><input type="radio" name="address" class="ui-checkbox" :value="idx" v-model="checked"> </div>
                <div class="info f">
                    <div class="title">
                        <div class="flex">
                            <span>收货人：</span>
                            <i>{{item.user_name}}</i>
                        </div>
                        <div class="flex">
                            <span>手机号：</span>
                            <i>{{item.phone}}</i>
                        </div>
                        <div class="flex">
                            <span>配送至：</span>
                            <i v-if="item.province == item.city">
                               {{item.city}}市 {{item.area}} {{item.address}}
                            </i>
                            <i v-else>{{item.province}}省 {{item.city}}市 {{item.area}} {{item.address}}</i>
                        </div>
                    </div>
                    <div class="tool">
                        <span class="skin" v-if="item.is_default == 1">默认地址</span>
                        <span class="ui-btn ui-btn-setDef" v-else @click="set_default(idx)">设为默认</span>
                        <span class="ui-btn ui-btn-edit" @click="goto('/edit_address/id/'+item.id)">
                            <i class="iconfont icon-bianji"></i> 编辑</span>

                    </div>
                </div>
                <i class="iconfont icon-shanchu " @click="ondel(idx)"></i>
            </li>
        </ul>

        <div class="nodata" v-if="list.length < 1">
            <i class="iconfont icon-tongyongmeiyoushuju"></i>
            <div>没有找到数据</div>
        </div>
        <div class="add_address" @click="goto('/add_address')">
            <i class="iconfont icon-jia"></i> 添加地址
        </div>
        <div class="space"></div>
        <div class="btn-wrap" v-if="is_use == 1">
            <div class="btn-fixed">
                <button type="button" class="ui-btn ui-btn-block ui-btn-l2" @click="do_use()">选择并使用</button>
            </div>
        </div>

    </div>
</template>
<script>
import http from "@/assets/js/http";
export default {
  name: "class",
  mixins: [http],
  data() {
    return {
      list: [],
      is_use: 0,
      checked: ""
    };
  },
  methods: {
    //选择并使用
    do_use() {
      if (this.checked === "") {
        this.$msg("请选择地址");
        return false;
      }

      this.setAddress(this.list[this.checked]);
      this.goto("/confirm");
    },
    //设为默认
    set_default(index) {
      let url = "/mini/Address/setdefault",
        vm = this,
        data = { id: this.list[index].id };
      this.apiPost(url, data).then(function(res) {
        if (res.code) {
          vm.$msg(res.msg);
          vm.map_default(index);
        } else {
          vm.handleError(res);
        }
      });
    },
    map_default(idx) {
      let _d = this.list;
      for (let i = 0; i < _d.length; i++) {
        if (i == idx) {
          _d[i].is_default = "1";
        } else {
          _d[i].is_default = "0";
        }
      }
      this.list = _d;
    },
    ondel(index) {
      let vm = this;
      this.$confirm({
        msg: "确定删除此地址？",
        yes: function() {
          vm.del(index);
        }
      });
    },
    //删除
    del(k) {
      let url = "/mini/Address/del",
        vm = this,
        data = { id: this.list[k].id };
      this.apiPost(url, data).then(function(res) {
        if (res.code) {
          vm.$msg(res.msg);
          vm.get_list();
          vm.checkStorage(vm.list[k].id);
        } else {
          vm.handleError(res);
        }
      });
    },
    checkStorage(id) {
      let _add = window.localStorage.getItem("__Select_Address__");
      if (_add) {
        _add = JSON.parse(_add);

        if (_add.id == id) {
          window.localStorage.removeItem("__Select_Address__");
        }
      }
    },
    //取数据
    get_list(page) {
      let url = "/mini/Address/get_list",
        vm = this;

      vm.loading = true;
      this.apiGet(url, {}).then(function(res) {
        if (res.code) {
          vm.list = res.data;
        } else {
          vm.handleError(res);
        }
        vm.loading = false;
      });
    }
  },
  created() {
    this.setTitle("收货地址");
    this.get_list();

    this.is_use = this.$route.params.is_use;
    if (this.is_use == 1) {
      this.setTitle("选择地址");
    }
  }
};
</script>
