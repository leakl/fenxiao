/**
 * http.js v0.0.1
 * (c) 2017 Nick
 * @license MIT
 */
import base64 from '@/assets/js/base64'
'use strict';
/*  */
import {
  mapActions
} from "vuex";
const apiMethods = {
  data() {
    return {
      loading: false,
      winloading: false,
      pages: {
        current_page: 1,
        total: 10,
        total_page: 1,
        limit: 20,
      },

    }
  },
  directives: {
    focus: {
      inserted: function (el, {
        value
      }) {

        if (value) {
          el.focus();
        }
      }
    }
  },
  methods: {
    //统一全局方法引用  见 "./vuex/actions.js"
    ...mapActions({
      setTitle: "setTitle",
      sethList: "setHList",
      setCart: "setCart",
      setAddress: "setAddress",
      setKeyword: "setKeyword",
      setSearchList: "setSearchList",

    }),
    //currentPage 改变时会触发
    handleCurrentChange(current_paged) {
      if (this.isSearch) {
        if (typeof this.onSearch == 'function') {
          this.onSearch(current_paged)
        }
      } else {
        if (typeof this.get_list == 'function') {
          this.get_list(current_paged)
        }
      }
    },
    //统一跳转
    goto(url) {
      this.$router.push(url)
    },
    //统一GET数据
    apiGet(url, data) {
      let that = this;
      that.loading = true;
      return new Promise((resolve, reject) => {
        this.$http.get(url, {
          params: data,
          _timeout: 5000,
          onTimeout: (request) => {
            console.log('timeout')
          }
        }).then((response) => {
          resolve(response.body);
          that.loading = false;
        }, (response) => {
          this.serverError(response);
          reject(response);
        });
      });

    },
    //统一POST数据
    apiPost(url, data) {
      let that = this;
      that.loading = true;
      return new Promise((resolve, reject) => {
        this.$http.post(url, data, {
            _timeout: 5000,
            onTimeout: (request) => {
              console.log('timeout')
            }
          })
          .then((response) => {
            resolve(response.body);
            that.loading = false;
          }, (response) => {
            this.serverError(response);
            reject(response);
          });
      });
    },
    //统一服务器出错处理
    serverError(err) {
      this.loading = false;
      this.$alert('服务器出错，错误码：' + err.status + ',\n' + 'url：' + err.url);
    },
    //统一异常处理
    handleError(res) {
      let vm = this;
      if (res.data.errcode == 1) { //未登录

        window.location.href = "http://" + window.location.host + "/mini/Index/goweixin/redirect/" + base64.encode(window.location.href);
      } else if (res.url) {;
        vm.goto(res.url);
      } else if (/数据不存在/.test(res.msg)) {

        this.$alert(res.msg, function () {
          vm.goto('/')
        });
      } else {

        this.$msg(res.msg);
      }


    }
  }
};

export default apiMethods;
