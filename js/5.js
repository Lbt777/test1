(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/paymentLoading/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    showLoading: {
      type: Boolean,
      default: true,
      required: true
    },
    countDown: {
      type: Number,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/view/demandDetails/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/_core-js@3.23.5@core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.12.48@vant/es/index.js");
/* harmony import */ var _components_paymentLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/paymentLoading */ "./src/components/paymentLoading/index.vue");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/request */ "./src/api/request.js");
/* harmony import */ var _util_BNUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/BNUtils.js */ "./src/util/BNUtils.js");
/* harmony import */ var _util_BNUtils_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_util_BNUtils_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/casinoContract.js */ "./src/util/casinoContract.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    paymentLoading: _components_paymentLoading__WEBPACK_IMPORTED_MODULE_2__["default"]
  },

  data() {
    return {
      canyuPage: '',
      MAXORDERSTATUS: 30,
      showLoading: false,
      countDown: 300,
      bgColor: '#1F75D9',
      DateNow: new Date(new Date().toLocaleDateString()).getTime(),
      current0: 0,
      current1: 0,
      personnelActive: 1,
      dynamicNum: 2,
      task_id: '',
      taskData: '',
      userId: Number(localStorage.getItem('userId')),
      screenList: [{
        name: '全部',
        value: 0
      }, {
        name: '备选',
        value: 0
      }, {
        name: '淘汰',
        value: 0
      }],
      partakeList: [],
      logList: [],
      zhongbiao: [],
      nowOrder: [{
        end_time: 0,
        status: 0
      }, {
        end_time: 0,
        status: 0
      }]
    };
  },

  computed: {
    WEB3() {
      return this.$store.state.WEB3;
    },

    CurrentIdentity() {
      return this.$store.state.CurrentIdentity;
    },

    SRSbalance() {
      return this.$store.state.SRSbalance;
    },

    USDTbalance() {
      return this.$store.state.USDTbalance;
    },

    SRScontract() {
      return this.$store.state.SRScontract;
    },

    USDTcontract() {
      return this.$store.state.USDTcontract;
    },

    transfer() {
      return this.$store.state.transfer;
    },

    address() {
      return this.$store.state.address;
    }

  },

  async mounted() {
    this.task_id = this.$route.query.id;
    await this.getData(this.task_id);
    await this.getTaskBiddersList(this.task_id, 0);
    this.seeOrderStatus();
  },

  methods: {
    // 缴纳保证金
    Deposit() {
      console.log(this.nowOrder);

      if (this.nowOrder[0].status === 0) {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('请等待需求方缴纳完项目款后重试');
      } else {
        this.payment({
          task_id: this.task_id,
          user_id: this.userId
        });
      }
    },

    TalentScreening(i) {
      if (this.current0 === i) return;
      this.current0 = i;

      if (i === 0) {
        this.getTaskBiddersList(this.task_id, 0);
      } else if (i === 1) {
        // 备选
        this.getTaskBiddersList(this.task_id, 1);
      } else if (i === 2) {
        // 淘汰
        this.getTaskBiddersList(this.task_id, 2);
      }
    },

    DialogConfirm(parms, callback) {
      vant__WEBPACK_IMPORTED_MODULE_1__["Dialog"].confirm({
        title: parms.DialogTitle,
        message: parms.message,
        showCancelButton: true,
        confirmButtonText: parms.confirmButtonText,
        confirmButtonColor: '#1F75D9',
        cancelButtonText: parms.cancelButtonText
      }).then(() => {
        callback();
      }).catch(() => {// on cancel
      });
    },

    // 更新任务状态
    async chengeTaskStatus(status, task_id) {
      // 0 =>匹配中, 1 =>服务中, 2 => 已完成，3=>暂停需求，4=> 关闭需求
      let that = this;
      if (this.taskData.status === status) return;
      let parms = {
        DialogTitle: '',
        message: '',
        confirmButtonText: '',
        cancelButtonText: ''
      };

      switch (status) {
        case 0:
          parms.DialogTitle = '公开需求';
          parms.message = '是否公开需求让人才参与';
          parms.confirmButtonText = '确认公开';
          parms.cancelButtonText = '取消';
          break;

        case 2:
          parms.DialogTitle = '提示';
          parms.message = '请确认项目已完成';
          parms.confirmButtonText = '确认完成';
          parms.cancelButtonText = '取消';
          break;

        case 3:
          parms.DialogTitle = '暂停需求';
          parms.message = '暂停后将无法公开招募人才参与你的需求，暂停后可以再次公开需求。是否确认暂停需求';
          parms.confirmButtonText = '确认暂停';
          parms.cancelButtonText = '取消';
          break;

        case 4:
          parms.DialogTitle = '关闭需求';
          parms.message = '关闭后将无法公开招募人才参与你的需求，关闭后不能再次公开需求是否确认关闭需求';
          parms.confirmButtonText = '确认关闭';
          parms.cancelButtonText = '取消';
          break;

        default:
          parms.DialogTitle = '提示';
          parms.message = '请确认';
          parms.confirmButtonText = '确认';
          parms.cancelButtonText = '取消';
          break;
      }

      this.DialogConfirm(parms, () => sendChangeStatus(status, task_id));

      async function sendChangeStatus(status, task_id) {
        await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskStatus"])({
          status: status,
          task_id: task_id
        });
        await that.getData(that.task_id);
      }
    },

    // 支付项目款
    async payment(item) {
      let AuthorizedAmount = 0;
      let contract = null;
      this.showLoading = true;
      let timer = setInterval(() => {
        if (this.countDown > 0) {
          this.countDown--;

          if (this.countDown == 0) {
            clearInterval(timer);
            this.showLoading = false;
          }
        } else {
          clearInterval(timer);
        }
      }, 1000);

      if (this.taskData.amount_type === 1) {
        // srs
        AuthorizedAmount = this.SRSbalance;
        contract = this.SRScontract;
      } else if (this.taskData.amount_type === 2) {
        // utransfersdt
        AuthorizedAmount = this.USDTbalance;
        contract = this.USDTcontract;
      }

      if (AuthorizedAmount === 0 || AuthorizedAmount < this.taskData.bail) {
        // 授权1亿
        this.obtainAuthorization(contract, timer, item);
      } else {
        this.transferPayment(timer, item);
      }
    },

    // 获取金额授权
    async obtainAuthorization(val, timer, item) {
      this.btnLoading = true;
      let mount = _util_BNUtils_js__WEBPACK_IMPORTED_MODULE_4___default.a.pow(100000000, 18);
      await val.methods.approve(_util_casinoContract_js__WEBPACK_IMPORTED_MODULE_5__["transferAddress"], mount).send({
        from: this.address
      }).then(res => {
        console.log('res', res);

        if (this.taskData.amount_type === 1) {
          // srs
          this.$store.dispatch('ActionsSetSRSbalance', 100000000);
        } else if (this.taskData.amount_type === 2) {
          // utransfersdt
          this.$store.dispatch('ActionsSetUSDTbalance', 100000000);
        }

        this.transferPayment(timer, item);
      }).catch(err => {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('取消授权');
        clearInterval(timer);
        this.showLoading = false;
      });
    },

    // 调用转账支付合约
    async transferPayment(timer, item) {
      let res = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskOrder"])({
        task_id: item.id ? item.id : item.task_id,
        user_id: item.user_id
      }); // 1 需求方 2服务方

      let block = await this.WEB3.eth.getBlockNumber();
      let parms = res.data[this.CurrentIdentity === 'serve' ? 1 : 0];
      let sendNum = 0;
      let sendTimer = null;
      let mount = _util_BNUtils_js__WEBPACK_IMPORTED_MODULE_4___default.a.pow(parms.amount, 18).toString();
      this.transfer.methods.transferToken(parms.token_address, this.address, _util_casinoContract_js__WEBPACK_IMPORTED_MODULE_5__["transferAddress"], mount, parms.id.toString()).send({
        from: this.address
      }).then(async res => {
        console.log('交易信息', res);
        await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskOrderStatus"])({
          block_num: block,
          hx_hash: res.transactionHash,
          order_id: parms.id
        });
        sendTimer = setInterval(async () => {
          if (sendNum > this.MAXORDERSTATUS) {
            clearInterval(sendTimer);
            clearInterval(timer);
            this.showLoading = false;
            Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('支付失败');
            return;
          } else {
            sendNum++; // 查询订单状态

            let queryOrderStatus = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskOrder"])({
              task_id: item.id ? item.id : item.task_id,
              user_id: item.user_id
            });

            if (queryOrderStatus.data[this.CurrentIdentity === 'serve' ? 1 : 0].status === 1) {
              clearInterval(sendTimer);
              clearInterval(timer);
              this.showLoading = false;
              Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('支付成功');
              await this.getData(this.task_id);
              await this.getTaskBiddersList(this.task_id, 0);
              this.seeOrderStatus();
            }
          }
        }, 3000);
      }).catch(err => {
        console.log(err);
        clearInterval(timer);
        this.showLoading = false;
      });
    },

    // 参与、合作切换
    async personnelTabChange(val) {
      await this.getTaskBiddersList(this.task_id, val == 0 ? 0 : 5);
    },

    // 获取动态
    async dynamicLog(id) {
      let res = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskLogs"])({
        task_id: id
      });
      this.logList = res.data;
      console.log('获取动态', res);
    },

    // 修改状态
    async modifyStatus(bid_status, item) {
      //  1 => 备选，2 => 淘汰， 5=> 中标
      let that = this;

      if (item.bid_status === 5) {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('用户已中标');
        return;
      }

      if (item.bid_status === bid_status) return;
      let parms = {
        DialogTitle: '',
        message: '',
        confirmButtonText: '',
        cancelButtonText: ''
      };

      switch (bid_status) {
        case 1:
          parms.DialogTitle = '提示';
          parms.message = '是否备选该用户';
          parms.confirmButtonText = '确认';
          parms.cancelButtonText = '取消';
          break;

        case 2:
          parms.DialogTitle = '提示';
          parms.message = '您点击确认淘汰，服务方会收到系统通知的淘汰消息，该服务方会从您的参与列表中删除';
          parms.confirmButtonText = '确认淘汰';
          parms.cancelButtonText = '先不淘汰';
          break;

        case 5:
          parms.DialogTitle = '确认合作';
          parms.message = '需要缴纳项目款到平台，直至您点击验收完成，该项目款再由平台扣除服务费（项目款的30%）之后支付给服务方，本次支付不可撤回，确认支付吗？';
          parms.confirmButtonText = '确认合作';
          parms.cancelButtonText = '取消';
          break;

        default:
          parms.DialogTitle = '提示';
          parms.message = '请确认';
          parms.confirmButtonText = '确认';
          parms.cancelButtonText = '取消';
          break;
      }

      this.DialogConfirm(parms, () => sendChangeStatus(bid_status, item));

      async function sendChangeStatus(bid_status, item) {
        await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskBidderStatus"])({
          bid_status: bid_status,
          id: item.id,
          task_id: item.task_id,
          user_id: item.user_id
        });
        that.getTaskBiddersList(that.task_id, 0);
        that.getTaskBiddersList(that.task_id, 5);
        await that.getData(that.task_id);
        that.seeOrderStatus();
      }
    },

    // 参与列表
    async getTaskBiddersList(id, bid_status) {
      // 加分页
      let res = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskBidders"])({
        task_id: id,
        bid_status: bid_status,
        cursor: this.canyuPage
      });

      if (res.data.length < 10) {
        this.partakeList = this.zhongbiao = [];
        this.canyuPage = '';
      } else {
        this.canyuPage = res.data[res.data.length - 1].create_ts;
      }

      if (bid_status === 0) {
        this.partakeList = this.partakeList.concat(res.data);
      } else {
        this.zhongbiao = this.zhongbiao.concat(res.data);
      }

      console.log('列表', this.partakeList, this.zhongbiao);
    },

    // 修改需求
    edit(id) {
      localStorage.removeItem('form');
      this.$router.push({
        path: 'information',
        query: {
          id: id,
          status: 'edit'
        }
      });
    },

    async seeOrderStatus() {
      let parms = {
        task_id: this.task_id,
        user_id: this.userId
      };
      let res = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskOrder"])(parms);

      if (res.data.length) {
        this.nowOrder = res.data;
        console.log('当前订单状态', res.data);
      } else {
        console.error('当前订单支付状态异常v1/task/order' + JSON.stringify(parms));
      }
    },

    async getData(id) {
      let res = await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskDetails"])({
        task_id: id
      });

      if (res.data.begin_time + 86400000 < this.DateNow) {
        res.data.my_status = 3;
        res.data.status = 3;
      } else {
        // res.data.countDownTime = (this.DateNow + 86400000) - (res.data.begin_time) - Date.now()
        if (this.DateNow === res.data.begin_time) {
          res.data.countDownTime = this.DateNow + 86400000 - Date.now();
        } else {
          res.data.countDownTime = res.data.begin_time - Date.now();
        }
      }

      if ([3, 4].includes(res.data.status)) {
        this.bgColor = '#909CBA';
      } else {
        this.bgColor = '#1F75D9';
      }

      this.taskData = res.data;
      await this.dynamicLog(id);
      console.log(res.data);
    },

    errTips() {
      let tips = '';

      switch (this.taskData.status) {
        case 3:
          tips = '需求暂未公开，暂时没有人才参与'; // 暂停需求

          break;

        default:
          tips = '暂时没有人才'; // 暂停需求

          break;
      }

      return tips;
    },

    btnTips() {
      let tips = '';

      switch (this.taskData.status) {
        case 2:
          tips = '再次发布';
          break;

        case 3:
          tips = '公开需求';
          break;
      }

      return tips;
    },

    // 参与需求
    participate(task_id) {
      this.$router.push({
        path: 'improveInformation',
        query: {
          task_id: task_id
        }
      });
    },

    // 取消参与
    async CancelParticipation(bid_id, task_id) {
      let that = this;
      let parms = {
        DialogTitle: '取消参与',
        message: '是否取消参与',
        confirmButtonText: '确认取消',
        cancelButtonText: '取消'
      };
      this.DialogConfirm(parms, () => sendChangeStatus(bid_id, task_id));

      async function sendChangeStatus(bid_id, task_id) {
        await Object(_api_request__WEBPACK_IMPORTED_MODULE_3__["taskBidderDel"])({
          bid_id: bid_id,
          task_id: task_id
        });
        await that.getData(that.task_id);
      }
    },

    // 筛选
    screen(name, title) {
      console.log(name, title);
    },

    seeMore() {
      this.dynamicNum = this.dynamicNum === 9999 ? 2 : 9999;
    }

  }
});

/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.showLoading ? _c("div", {
    staticClass: "loadingStyle"
  }, [_c("van-overlay", {
    staticClass: "overlay",
    attrs: {
      show: true
    }
  }, [_c("div", {
    staticClass: "load"
  }, [_c("div", {
    staticClass: "ing"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/loading.png */ "./src/assets/loading.png"),
      alt: ""
    }
  }), _c("div", {
    staticClass: "time"
  }, [_c("div", {
    staticClass: "num"
  }, [_vm._v(_vm._s(_vm.countDown))]), _c("div", {
    staticClass: "unit"
  }, [_vm._v("s")])])]), _c("div", {
    staticClass: "text1"
  }, [_vm._v("正在返回支付结果")]), _c("div", {
    staticClass: "text2"
  }, [_vm._v("结果返回前，请不要重复提交")])])])], 1) : _vm._e();
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!./node_modules/_babel-loader@8.2.5@babel-loader/lib!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/_core-js@3.23.5@core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);


var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "main"
  }, [_c("heads", {
    attrs: {
      bgColor: _vm.bgColor
    }
  }), _c("div", {
    staticClass: "headBox",
    style: {
      background: [3, 4].includes(_vm.taskData.status) ? "#909CBA" : "#1F75D9"
    }
  }, [_vm.taskData ? _c("div", {
    staticClass: "statusInfo"
  }, [_c("div", {
    staticClass: "status"
  }, [_vm._v(_vm._s(_vm.$util.taskStatusTips(_vm.CurrentIdentity, _vm.taskData.my_status, _vm.taskData.status)))]), _c("div", {
    staticClass: "countDown"
  }, [[0, 1].includes(_vm.taskData.status) ? [_c("div", {
    staticClass: "times"
  }, [_vm._v(_vm._s(_vm.nowOrder[0].status === 1 ? "工期" : "报名") + " 还剩")]), _c("van-count-down", {
    attrs: {
      time: _vm.taskData.countDownTime,
      format: "DD天HH小时mm分ss秒"
    }
  })] : [_c("div", {
    staticClass: "times"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm:ss", _vm.taskData.update_ts)))])]], 2)]) : _vm._e(), _c("div", {
    staticClass: "projectInfo"
  }, [[0, 1].includes(_vm.taskData.my_status) && _vm.taskData.my_status !== 2 ? _c("div", {
    staticClass: "status",
    class: _vm.taskData.my_bid_status === 2 ? "alternativeStatus" : "WinningStatus"
  }, [_vm._v(_vm._s(_vm.$util.CurrentUserStatus(_vm.taskData.my_bid_status)) + " ")]) : _vm._e(), _c("div", {
    staticClass: "callMe"
  }, [_c("div", {
    staticClass: "InfoName"
  }, [_c("div", {
    staticClass: "p_title"
  }, [_vm.taskData.type ? _c("div", {
    staticClass: "p_type"
  }, [_vm._v(_vm._s(_vm.$util.taskType(_vm.taskData.type)))]) : _vm._e(), _c("div", {
    staticClass: "p_name"
  }, [_vm._v(_vm._s(_vm.taskData.title))])]), _c("div", {
    staticClass: "number"
  }, [_vm._v("可报名人数" + _vm._s(_vm.taskData.allows === -1 ? "不限" : `${_vm.taskData.allows || 0}人`) + " · 在线联系")])]), _vm.CurrentIdentity !== "serve" && _vm.taskData.user_id !== _vm.userId ? _c("div", {
    staticClass: "contact"
  }, [_vm._m(0), _c("div", {
    staticClass: "contactNmae"
  }, [_vm._v("联系TA")])]) : _vm._e(), _vm.CurrentIdentity === "serve" && _vm.taskData.my_bid_status === 5 && _vm.nowOrder[1] && _vm.nowOrder[1].status === 0 && _vm.nowOrder[1].end_time * 1000 - Date.now() > 0 ? _c("div", {
    staticClass: "Deposit",
    on: {
      click: _vm.Deposit
    }
  }, [_vm._v("缴纳保证金 ")]) : _vm._e()]), _c("div", {
    staticClass: "price",
    style: {
      paddingBottom: _vm.taskData.status === 0 ? "15px" : "20px"
    }
  }, [_c("div", {
    staticClass: "p"
  }, [_vm._v(_vm._s(_vm.taskData.amount || 0))]), _c("div", {
    staticClass: "unit"
  }, [_vm._v(_vm._s(_vm.taskData.amount_type === 1 ? "SRS" : "USDT"))])]), _vm.taskData.user_id === _vm.userId ? _c("div", {
    staticClass: "setting"
  }, [_vm.taskData.status === 0 ? [_c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.edit(_vm.taskData.id);
      }
    }
  }, [_vm._m(1), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("完善需求")])]), _c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.chengeTaskStatus(3, _vm.taskData.id);
      }
    }
  }, [_vm._m(2), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("暂停需求")])]), _c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.chengeTaskStatus(4, _vm.taskData.id);
      }
    }
  }, [_vm._m(3), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("关闭需求")])]), _vm.nowOrder[0] ? _c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.payment(_vm.taskData);
      }
    }
  }, [_vm._m(4), _c("div", {
    staticClass: "s_name"
  }, [_vm._v(_vm._s(_vm.nowOrder[0].tx_hash ? "已支付项目款" : "支付项目款"))]), _vm.nowOrder[0] ? _c("div", {
    staticClass: "s_name s_top s_samll"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm", _vm.nowOrder[0].pay_time)) + " ")]) : _vm._e()]) : _vm._e()] : _vm.taskData.status === 1 ? [_c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.chengeTaskStatus(4, _vm.taskData.id);
      }
    }
  }, [_vm._m(5), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("关闭需求")])]), _vm.nowOrder[1] && _vm.nowOrder[1].status === 1 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(6), _c("div", {
    staticClass: "s_name s_samll"
  }, [_vm._v("服务方已缴纳保证金")]), _vm.nowOrder[1] ? _c("div", {
    staticClass: "s_name s_top"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm", _vm.nowOrder[1].pay_time)) + " ")]) : _vm._e()]) : _vm._e(), _c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.chengeTaskStatus(2, _vm.taskData.id);
      }
    }
  }, [_vm._m(7), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("验收完成")])])] : _vm.taskData.status === 2 ? [_vm._m(8)] : _vm.taskData.status === 3 ? [_c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.chengeTaskStatus(0, _vm.taskData.id);
      }
    }
  }, [_vm._m(9), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("公开需求")])]), _c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.edit(_vm.taskData.id);
      }
    }
  }, [_vm._m(10), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("完善需求")])]), _vm._m(11)] : _vm.taskData.status === 4 ? void 0 : void 0], 2) : _vm._e(), _vm.CurrentIdentity === "serve" ? _c("div", {
    staticClass: "setting"
  }, [_vm.taskData.my_status === 0 ? [_c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.CancelParticipation(_vm.taskData.bid_id, _vm.taskData.id);
      }
    }
  }, [_vm._m(12), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("取消参与")])]), _vm.taskData.my_bid_status === 5 && _vm.nowOrder[1].status === 0 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(13), _vm.nowOrder[1].end_time * 1000 - Date.now() < 0 ? _c("div", {
    staticClass: "s_name"
  }, [_vm._v("保证金缴纳过期")]) : _c("div", {
    staticClass: "s_name",
    on: {
      click: _vm.Deposit
    }
  }, [_vm._v("缴纳保证金")]), _vm.nowOrder[1].end_time * 1000 - Date.now() > 0 && _vm.nowOrder[0].status === 1 ? _c("div", {
    staticClass: "s_name s_top s_samll"
  }, [_c("van-count-down", {
    attrs: {
      time: _vm.nowOrder[1].end_time * 1000 - Date.now()
    }
  })], 1) : _vm._e()]) : _vm._e(), _vm.taskData.my_bid_status === 5 && _vm.nowOrder[0].status === 1 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(14), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("已支付项目款")]), _vm.nowOrder[0] ? _c("div", {
    staticClass: "s_name s_top s_samll"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm", _vm.nowOrder[0].pay_time)) + " ")]) : _vm._e()]) : _vm._e(), _vm._m(15)] : _vm.taskData.my_status === 1 ? [_c("div", {
    staticClass: "item",
    on: {
      click: function ($event) {
        return _vm.CancelParticipation(_vm.taskData.bid_id, _vm.taskData.id);
      }
    }
  }, [_vm._m(16), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("取消参与")])]), _vm.taskData.my_bid_status === 5 && _vm.nowOrder[1] && _vm.nowOrder[1].status === 0 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(17), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("交保证金，开始服务")]), _vm.nowOrder[1] ? _c("div", {
    staticClass: "s_name s_top s_samll"
  }, [_c("van-count-down", {
    attrs: {
      time: _vm.nowOrder[1].end_time * 1000 - Date.now()
    }
  })], 1) : _vm._e()]) : _vm.taskData.my_bid_status === 6 && _vm.nowOrder[1] && _vm.nowOrder[1].status === 1 ? _c("div", {
    staticClass: "item"
  }, [_vm._m(18), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("已缴纳保证金")]), _vm.nowOrder[1] ? _c("div", {
    staticClass: "s_name s_top s_samll"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm", _vm.nowOrder[1].pay_time)) + " ")]) : _vm._e()]) : _vm._e(), _vm._m(19)] : _vm.taskData.my_status === 2 ? [_vm._m(20), _vm._m(21)] : _vm._e()], 2) : _vm._e()])]), _c("div", {
    staticClass: "projectDetails"
  }, [_vm.CurrentIdentity !== "serve" ? _c("van-tabs", {
    staticClass: "tabs",
    attrs: {
      animated: "",
      swipeable: "",
      "title-active-color": "#1F75D9",
      "title-inactive-color": "#333"
    },
    on: {
      change: _vm.personnelTabChange
    },
    model: {
      value: _vm.personnelActive,
      callback: function ($$v) {
        _vm.personnelActive = $$v;
      },
      expression: "personnelActive"
    }
  }, [_c("van-tab", {
    attrs: {
      title: `参与(${_vm.taskData.count || 0})`,
      name: "0"
    },
    on: {
      click: function ($event) {}
    }
  }, [_c("div", {
    staticClass: "screen"
  }, [_c("div", {
    staticClass: "screen_t"
  }, [_vm._v("已参与人才")]), _c("div", {
    staticClass: "change"
  }, _vm._l(_vm.screenList, function (el, i) {
    return _c("div", {
      key: i,
      staticClass: "items",
      class: _vm.current0 === i ? "active" : "",
      on: {
        click: function ($event) {
          return _vm.TalentScreening(i);
        }
      }
    }, [_vm._v(_vm._s(el.name))]);
  }), 0)]), _vm.partakeList.length === 0 ? _c("div", {
    staticClass: "empty"
  }, [_c("div", {
    staticClass: "e_img"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/emptyUser.png */ "./src/assets/emptyUser.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "e_tips"
  }, [_vm._v(_vm._s(_vm.errTips()))]), _vm.CurrentIdentity !== "serve" && [2, 3].includes(_vm.taskData.status) ? _c("div", {
    staticClass: "e_btn"
  }, [_c("van-button", {
    attrs: {
      type: "primary",
      round: "",
      size: "small",
      block: "",
      color: "#1F75D9"
    }
  }, [_vm._v(" " + _vm._s(_vm.btnTips()) + " ")])], 1) : _vm._e()]) : _vm._e(), _vm._l(_vm.partakeList, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "mains"
    }, [item.bid_status === 2 ? _c("div", {
      staticClass: "personnelStatus alternativeStatus"
    }, [_vm._v("淘汰")]) : item.bid_status === 1 ? _c("div", {
      staticClass: "personnelStatus eliminateStatus"
    }, [_vm._v("备选")]) : item.bid_status === 5 ? _c("div", {
      staticClass: "personnelStatus WinningStatus"
    }, [_vm._v("中标")]) : _vm._e(), _c("div", {
      staticClass: "userInfo"
    }, [_c("div", {
      staticClass: "userHead"
    }, [_c("img", {
      attrs: {
        src: "https://picsum.photos/200/300",
        alt: ""
      }
    })]), _c("div", {
      staticClass: "userBox"
    }, [_c("div", {
      staticClass: "user"
    }, [_c("div", {
      staticClass: "username"
    }, [_vm._v(_vm._s(item.user_nickname))]), _c("div", {
      staticClass: "userType"
    }, [_vm._v("个人")])]), _c("div", {
      staticClass: "userIntroduction"
    }, [_vm._v("自荐理由 " + _vm._s(item.reason))])])]), _vm.taskData.user_id === _vm.userId && item.bid_status !== 5 ? _c("div", {
      staticClass: "operation"
    }, [_c("van-goods-action", [_c("div", {
      staticClass: "iconItem"
    }, [_c("van-goods-action-icon", {
      attrs: {
        text: "淘汰"
      },
      on: {
        click: function ($event) {
          return _vm.modifyStatus(2, item);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_c("div", {
            staticClass: "acionIcon1"
          }, [_c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/taotai.png */ "./src/assets/taotai.png"),
              alt: ""
            }
          })])];
        },
        proxy: true
      }], null, true)
    }), _c("van-goods-action-icon", {
      attrs: {
        icon: "cart-o",
        text: "备选"
      },
      on: {
        click: function ($event) {
          return _vm.modifyStatus(1, item);
        }
      },
      scopedSlots: _vm._u([{
        key: "icon",
        fn: function () {
          return [_c("div", {
            staticClass: "acionIcon2"
          }, [_c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/beixuan.png */ "./src/assets/beixuan.png"),
              alt: ""
            }
          })])];
        },
        proxy: true
      }], null, true)
    })], 1), _c("div", [_vm.zhongbiao.length === 0 ? _c("van-goods-action-button", {
      attrs: {
        type: "danger",
        text: "选TA中标",
        color: "#68AEFF",
        disabled: _vm.taskData.win_user_id > 0 ? true : false
      },
      on: {
        click: function ($event) {
          return _vm.modifyStatus(5, item);
        }
      }
    }) : _vm._e(), _c("van-goods-action-button", {
      attrs: {
        type: "warning",
        text: "联系TA",
        color: "#1F75D9"
      }
    })], 1)])], 1) : _vm._e()]);
  })], 2), _c("van-tab", {
    attrs: {
      title: `合作(${_vm.taskData.win_count || 0})`,
      name: "1"
    },
    on: {
      click: function ($event) {
        return _vm.getTaskBiddersList(_vm.task_id, 5);
      }
    }
  }, [_vm.zhongbiao.length === 0 ? _c("div", {
    staticClass: "empty"
  }, [_c("div", {
    staticClass: "e_img"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/emptyUser.png */ "./src/assets/emptyUser.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "e_tips"
  }, [_vm._v(_vm._s(_vm.errTips()))]), _vm.CurrentIdentity !== "serve" && [2, 3].includes(_vm.taskData.status) ? _c("div", {
    staticClass: "e_btn"
  }, [_c("van-button", {
    attrs: {
      type: "primary",
      round: "",
      size: "small",
      block: "",
      color: "#1F75D9"
    }
  }, [_vm._v(_vm._s(_vm.btnTips()))])], 1) : _vm._e()]) : _vm._e(), _vm._l(_vm.zhongbiao, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "mains mainsTop"
    }, [_c("div", {
      staticClass: "userInfo"
    }, [_c("div", {
      staticClass: "userHead"
    }, [_c("img", {
      attrs: {
        src: "https://picsum.photos/200/300",
        alt: ""
      }
    })]), _c("div", {
      staticClass: "userBox"
    }, [_c("div", {
      staticClass: "user"
    }, [_c("div", {
      staticClass: "username"
    }, [_vm._v(_vm._s(item.user_nickname))]), _c("div", {
      staticClass: "userType"
    }, [_vm._v("个人")])]), _c("div", {
      staticClass: "userIntroduction"
    }, [_vm._v("自荐理由 " + _vm._s(item.reason))])])]), _c("div", {
      staticClass: "callMe",
      class: item.user_id !== _vm.userId && _vm.taskData.user_id !== _vm.userId ? "btnStyle" : ""
    }, [_vm.CurrentIdentity === "serve" && item.user_id === _vm.userId ? _c("van-button", {
      attrs: {
        type: "primary",
        round: "",
        size: "small",
        plain: "",
        color: "#1F75D9"
      },
      on: {
        click: function ($event) {
          return _vm.payment(item);
        }
      }
    }, [_vm._v("支付保证金 ")]) : _vm._e(), _vm.CurrentIdentity === "employer" && _vm.taskData.user_id === _vm.userId && _vm.nowOrder[0].status === 0 ? _c("van-button", {
      attrs: {
        type: "primary",
        round: "",
        size: "small",
        plain: "",
        color: "#1F75D9"
      },
      on: {
        click: function ($event) {
          return _vm.payment(item);
        }
      }
    }, [_vm._v("支付项目款 ")]) : _vm._e(), _vm.CurrentIdentity === "employer" && _vm.taskData.user_id === _vm.userId ? _c("van-button", {
      attrs: {
        type: "primary",
        round: "",
        size: "small",
        color: "#1F75D9"
      }
    }, [_vm._v("联系TA ")]) : _vm._e()], 1)]);
  })], 2)], 1) : _vm._e(), _c("div", {
    staticClass: "projectContent"
  }, [_c("div", {
    staticClass: "pd_title"
  }, [_c("div", [_vm._v("需求基本要求")]), _vm.userId == _vm.taskData.user_id && [0, 3].includes(_vm.taskData.status) ? _c("div", {
    staticClass: "edit",
    on: {
      click: function ($event) {
        return _vm.edit(_vm.taskData.id);
      }
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/edit.png */ "./src/assets/edit.png"),
      alt: ""
    }
  })]) : _vm._e()]), _c("div", {
    staticClass: "cntent"
  }, [_c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("需求标题")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.taskData.title))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("需求描述")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.taskData.description))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("需求类型")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.$util.taskType(_vm.taskData.type)))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("项目保证金")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.taskData.bail || 0) + " " + _vm._s(_vm.taskData.bail_type === 1 ? "SRS" : "USDT"))])]), _vm._m(22), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("项目款")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.taskData.amount || 0) + " " + _vm._s(_vm.taskData.bail_type === 1 ? "SRS" : "USDT"))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("允许报名名额")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.taskData.allows === -1 ? "人数不限" : _vm.taskData.allows || 0 + "人"))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("报名时间")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd", _vm.taskData.begin_time)))])]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("交付时间")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd", _vm.taskData.delivery_time)))])])])]), _c("div", {
    staticClass: "projectContent"
  }, [_c("div", {
    staticClass: "pd_title"
  }, [_vm._v("需求动态")]), _c("div", {
    staticClass: "dynamic cntent"
  }, [_c("van-steps", {
    attrs: {
      direction: "vertical",
      active: 0,
      "active-color": "#909CBA"
    }
  }, _vm._l(_vm.logList, function (item, index) {
    return index < _vm.dynamicNum ? _c("van-step", {
      key: index,
      scopedSlots: _vm._u([{
        key: "active-icon",
        fn: function () {
          return [_c("div", {
            staticClass: "s0"
          }, [_c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/s0.png */ "./src/assets/s0.png"),
              alt: ""
            }
          })])];
        },
        proxy: true
      }, {
        key: "inactive-icon",
        fn: function () {
          return [_c("div", {
            staticClass: "s1"
          }, [_c("img", {
            attrs: {
              src: __webpack_require__(/*! @/assets/s1.png */ "./src/assets/s1.png"),
              alt: ""
            }
          })])];
        },
        proxy: true
      }], null, true)
    }, [_c("div", {
      staticClass: "stepName"
    }, [_vm._v(_vm._s(_vm.$util.bidStatus(item.type)))]), _c("div", {
      staticClass: "stepTime"
    }, [_vm._v(_vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm:ss", item.create_ts)))])]) : _vm._e();
  }), 1), _vm.logList.length > 2 ? _c("div", {
    staticClass: "more"
  }, [_c("div", {
    staticClass: "moreTips",
    on: {
      click: _vm.seeMore
    }
  }, [_vm._v("查看更多记录")]), _c("div", {
    staticClass: "moreIcon",
    style: {
      transform: `rotate(${_vm.dynamicNum == 2 ? 0 : "180deg"})`
    }
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/moreIcon.png */ "./src/assets/moreIcon.png"),
      alt: ""
    }
  })])]) : _vm._e(), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("需求编号")]), _vm.taskData.serial_id ? _c("div", {
    staticClass: "pd_tips"
  }, [_c("div", [_vm._v(_vm._s(_vm.taskData.serial_id))]), _c("div", {
    staticClass: "box",
    on: {
      click: function ($event) {
        return _vm.$util.copy(_vm.taskData.serial_id);
      }
    }
  }, [_vm._m(23), _c("div", {
    staticClass: "copyTips"
  }, [_vm._v("复制")])])]) : _vm._e()]), _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("创建时间")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v(" " + _vm._s(_vm.$util.getUnixToDate("yyyy-mm-dd hh:mm:ss", _vm.taskData.create_ts)))])])], 1)]), _vm.CurrentIdentity === "serve" && _vm.taskData.user_id !== _vm.userId && [-1, 3].includes(_vm.taskData.my_status) && _vm.taskData.status === 0 ? _c("div", {
    staticClass: "btns"
  }, [_c("van-button", {
    attrs: {
      type: "warning",
      color: "#909CBA",
      plain: "",
      round: "",
      size: "small"
    },
    on: {
      click: function ($event) {
        return _vm.$router.go(-1);
      }
    }
  }, [_vm._v("不感兴趣")]), _vm.taskData.begin_time > _vm.DateNow ? _c("van-button", {
    attrs: {
      type: "danger",
      color: "#1F75D9",
      round: "",
      size: "small",
      disabled: ""
    }
  }, [_vm._v(" 未到报名时间 ")]) : _c("van-button", {
    attrs: {
      type: "danger",
      color: "#1F75D9",
      round: "",
      size: "small"
    },
    on: {
      click: function ($event) {
        return _vm.participate(_vm.taskData.id);
      }
    }
  }, [_vm._v("参与需求 ")])], 1) : _vm._e()], 1), _c("paymentLoading", {
    attrs: {
      showLoading: _vm.showLoading,
      countDown: _vm.countDown
    }
  })], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "contactImg"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/contact.png */ "./src/assets/contact.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/edit.png */ "./src/assets/edit.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/pause.png */ "./src/assets/pause.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/close.png */ "./src/assets/close.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/close.png */ "./src/assets/close.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/complete.png */ "./src/assets/complete.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("已支付尾款")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/open.png */ "./src/assets/open.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/perfect.png */ "./src/assets/perfect.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/delete.png */ "./src/assets/delete.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("删除需求")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/close.png */ "./src/assets/close.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/giveUp.png */ "./src/assets/giveUp.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/contact.png */ "./src/assets/contact.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("联系他")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/close.png */ "./src/assets/close.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/time.png */ "./src/assets/time.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/contact.png */ "./src/assets/contact.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("联系他")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/metaphase.png */ "./src/assets/metaphase.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("已收到尾款")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "icon"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/contact.png */ "./src/assets/contact.png"),
      alt: ""
    }
  })]), _c("div", {
    staticClass: "s_name"
  }, [_vm._v("联系他")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pd_item"
  }, [_c("div", {
    staticClass: "pd_label"
  }, [_vm._v("项目付款方式")]), _c("div", {
    staticClass: "pd_tips"
  }, [_vm._v("一次性付清")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "copy"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! @/assets/copy.png */ "./src/assets/copy.png"),
      alt: ""
    }
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/internals/add-to-unscopables.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/internals/add-to-unscopables.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.23.5@core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/_core-js@3.23.5@core-js/internals/object-create.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.23.5@core-js/internals/object-define-property.js").f;

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/internals/html.js":
/*!****************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/internals/html.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.23.5@core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/internals/object-create.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/internals/object-create.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.23.5@core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/_core-js@3.23.5@core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/_core-js@3.23.5@core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.23.5@core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/_core-js@3.23.5@core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/_core-js@3.23.5@core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.23.5@core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/internals/object-define-properties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/internals/object-define-properties.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.23.5@core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/_core-js@3.23.5@core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.23.5@core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.23.5@core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.23.5@core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/_core-js@3.23.5@core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/internals/object-keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/internals/object-keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/_core-js@3.23.5@core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/_core-js@3.23.5@core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@3.23.5@core-js/modules/es.array.includes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.23.5@core-js/modules/es.array.includes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.23.5@core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/_core-js@3.23.5@core-js/internals/array-includes.js").includes;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.23.5@core-js/internals/fails.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/_core-js@3.23.5@core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".loadingStyle[data-v-24efad69] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  text-align: center;\n  display: flex;\n}\n.loadingStyle .overlay[data-v-24efad69] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loadingStyle .load .time[data-v-24efad69] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n}\n.loadingStyle .load .time .num[data-v-24efad69] {\n  font-size: 27px;\n  line-height: 1;\n  font-weight: 500;\n  color: #63ABFF;\n}\n.loadingStyle .load .time .unit[data-v-24efad69] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #63ABFF;\n  line-height: 1px;\n  margin-left: 6px;\n}\n.loadingStyle .load .ing[data-v-24efad69] {\n  width: 135px;\n  height: 135px;\n  position: relative;\n  margin: auto;\n}\n.loadingStyle .load .ing img[data-v-24efad69] {\n  -webkit-animation: van-rotates-24efad69 linear infinite;\n          animation: van-rotates-24efad69 linear infinite;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n}\n@-webkit-keyframes van-rotates-24efad69 {\n0% {\n    transform: rotate(360deg);\n}\n100% {\n    transform: rotate(0);\n}\n}\n@keyframes van-rotates-24efad69 {\n0% {\n    transform: rotate(360deg);\n}\n100% {\n    transform: rotate(0);\n}\n}\n.loadingStyle .icon[data-v-24efad69] {\n  margin: auto;\n}\n.loadingStyle .text1[data-v-24efad69],\n.loadingStyle .text2[data-v-24efad69] {\n  margin-top: 15px;\n  font-size: 12px;\n  line-height: 1;\n  font-weight: 400;\n  color: #63ABFF;\n  line-height: 11px;\n}\n.loadingStyle .text2[data-v-24efad69] {\n  margin-top: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[v-cloak][data-v-a6fc82ae] {\n  display: none;\n}\n.eliminateStatus[data-v-a6fc82ae] {\n  background: #FFB22C;\n}\n.alternativeStatus[data-v-a6fc82ae] {\n  background: #909CBA;\n}\n.WinningStatus[data-v-a6fc82ae] {\n  background: #00B78C;\n}\n.projectDetails[data-v-a6fc82ae] {\n  padding: 10px;\n}\n.projectDetails .tab[data-v-a6fc82ae] {\n  padding-top: 20px;\n}\n.projectDetails .dynamic[data-v-a6fc82ae] .van-step__title {\n  margin-left: 20px;\n}\n.projectDetails .dynamic[data-v-a6fc82ae] .van-step__line {\n  height: 22px;\n  bottom: 0;\n  top: initial;\n  margin: auto;\n}\n.projectDetails .dynamic[data-v-a6fc82ae] .van-steps__items .van-step:first-child .van-step__line {\n  height: 18px;\n  bottom: 0;\n  margin: auto;\n  top: 48px;\n}\n.projectDetails .dynamic .pd_tips[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n}\n.projectDetails .dynamic .stepName[data-v-a6fc82ae] {\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 400;\n  color: #333333;\n}\n.projectDetails .dynamic .stepTime[data-v-a6fc82ae] {\n  font-size: 12px;\n  line-height: 1;\n  margin-top: 12px;\n  font-weight: 400;\n  color: #909CBA;\n}\n.projectDetails .dynamic .s0[data-v-a6fc82ae] {\n  width: 36px;\n  height: 36p;\n}\n.projectDetails .dynamic .s1[data-v-a6fc82ae] {\n  width: 15px;\n  height: 15p;\n}\n.projectDetails .dynamic .box[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  margin-left: 21px;\n}\n.projectDetails .dynamic .box .copy[data-v-a6fc82ae] {\n  height: 13px;\n  width: 13px;\n}\n.projectDetails .dynamic .box .copyTips[data-v-a6fc82ae] {\n  margin-left: 6px;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 400;\n  color: #1F75D9;\n}\n.projectDetails .projectContent[data-v-a6fc82ae] {\n  display: flex;\n  flex-direction: column;\n}\n.projectDetails .projectContent .more[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 35px;\n  margin-top: 15px;\n}\n.projectDetails .projectContent .more .moreTips[data-v-a6fc82ae] {\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 400;\n  color: #909CBA;\n}\n.projectDetails .projectContent .more .moreIcon[data-v-a6fc82ae] {\n  margin-left: 7px;\n  width: 13px;\n  height: 7px;\n  transition: transform 0.3s;\n}\n.projectDetails .projectContent .pd_title[data-v-a6fc82ae] {\n  padding: 0 10px;\n  font-size: 15px;\n  line-height: 1;\n  font-weight: 500;\n  color: #1F75D9;\n  position: relative;\n  padding-top: 25px;\n  display: inline;\n  padding-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.projectDetails .projectContent .pd_title .edit[data-v-a6fc82ae] {\n  width: 21px;\n  height: 19px;\n}\n.projectDetails .projectContent .pd_title[data-v-a6fc82ae]::after {\n  position: absolute;\n  content: '';\n  bottom: 5px;\n  width: 18px;\n  height: 2px;\n  left: 10px;\n  background-color: #1F75D9;\n}\n.projectDetails .projectContent .cntent[data-v-a6fc82ae] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  padding: 30px 10px;\n  padding-bottom: 0;\n}\n.projectDetails .projectContent .cntent .pd_item[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.projectDetails .projectContent .cntent .pd_item .pd_label[data-v-a6fc82ae] {\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 400;\n  color: #333333;\n  width: 100px;\n  flex-shrink: 0;\n}\n.projectDetails .projectContent .cntent .pd_item .pd_tips[data-v-a6fc82ae] {\n  font-size: 14px;\n  font-weight: 400;\n  color: #909CBA;\n}\n.projectDetails .projectContent .cntent .pd_item[data-v-a6fc82ae]:last-child {\n  margin-bottom: 30px;\n}\n.projectDetails .btns[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n  margin-bottom: 31px;\n  justify-content: flex-end;\n}\n.projectDetails .btns[data-v-a6fc82ae] button {\n  margin-left: 30px;\n}\n.projectDetails .mainsTop[data-v-a6fc82ae] {\n  margin-top: 10px;\n}\n.projectDetails .mains[data-v-a6fc82ae] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  padding: 21px 10px 15px 10px;\n  margin-bottom: 5px;\n  position: relative;\n}\n.projectDetails .mains .callMe[data-v-a6fc82ae] {\n  margin-top: 17px;\n  display: flex;\n  position: relative;\n  padding-top: 21px;\n  margin-left: auto;\n}\n.projectDetails .mains .callMe .van-button[data-v-a6fc82ae] {\n  width: 106px;\n}\n.projectDetails .mains .callMe .van-button[data-v-a6fc82ae]:last-child {\n  margin-left: 20px;\n}\n.projectDetails .mains .callMe[data-v-a6fc82ae]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #F6F7FB;\n}\n.projectDetails .mains .personnelStatus[data-v-a6fc82ae] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 18px;\n  font-size: 11px;\n  transform: scale(0.917);\n  font-weight: 500;\n  color: #FFFFFF;\n  line-height: 18px;\n  padding: 0 20px;\n  border-bottom-left-radius: 20px;\n  border-top-right-radius: 10px;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] {\n  margin-top: 16px;\n  padding-top: 21px;\n  position: relative;\n}\n.projectDetails .mains .operation .acionIcon1[data-v-a6fc82ae] {\n  height: 19px;\n  width: 18px;\n}\n.projectDetails .mains .operation .acionIcon2[data-v-a6fc82ae] {\n  width: 23px;\n  height: 20px;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action {\n  position: relative;\n  height: 40px;\n  justify-content: space-between;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action .iconItem {\n  display: flex;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action .van-goods-action-icon:active {\n  background-color: transparent;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action .van-goods-action-button {\n  height: 34px;\n  width: 96px;\n  flex: inherit;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action .van-goods-action-button--last {\n  margin-right: 0;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae] .van-goods-action .van-goods-action-icon {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n}\n.projectDetails .mains .operation[data-v-a6fc82ae]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #F6F7FB;\n}\n.projectDetails .mains .userInfo[data-v-a6fc82ae] {\n  display: flex;\n  position: relative;\n}\n.projectDetails .mains .userInfo .userHead[data-v-a6fc82ae] {\n  height: 48px;\n  width: 48px;\n  flex-shrink: 0;\n  margin-right: 15px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n.projectDetails .mains .userInfo .userBox[data-v-a6fc82ae] {\n  display: flex;\n  flex-direction: column;\n}\n.projectDetails .mains .userInfo .userBox .userIntroduction[data-v-a6fc82ae] {\n  margin-top: auto;\n  font-size: 12px;\n  font-weight: 400;\n  color: #909CBA;\n}\n.projectDetails .mains .userInfo .userBox .user[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 17px;\n}\n.projectDetails .mains .userInfo .userBox .user .username[data-v-a6fc82ae] {\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 500;\n  color: #333333;\n  margin-right: 9px;\n}\n.projectDetails .mains .userInfo .userBox .user .userType[data-v-a6fc82ae] {\n  height: 16px;\n  background: #FFFFFF;\n  border: 1px solid #1F75D9;\n  border-radius: 8px;\n  font-size: 10px;\n  line-height: 16px;\n  padding: 0 11px;\n  font-weight: 500;\n  color: #1F75D9;\n}\n.projectDetails .empty[data-v-a6fc82ae] {\n  height: 239px;\n  background: #FFFFFF;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.projectDetails .empty .e_img[data-v-a6fc82ae] {\n  width: 118px;\n  height: 104px;\n  margin-bottom: 20px;\n  margin-top: 26px;\n}\n.projectDetails .empty .e_tips[data-v-a6fc82ae] {\n  font-size: 14px;\n  line-height: 1;\n  margin-bottom: 25px;\n  font-weight: 400;\n  color: #909CBA;\n}\n.projectDetails .empty .e_btn[data-v-a6fc82ae] {\n  width: 161px;\n  height: 34px;\n  background: #1F75D9;\n  border-radius: 17px;\n}\n.projectDetails .screen[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.projectDetails .screen .screen_t[data-v-a6fc82ae] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #333333;\n}\n.projectDetails .screen .change[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  height: 22px;\n  background: rgba(144, 156, 186, 0.2);\n  border-radius: 11px;\n}\n.projectDetails .screen .change .items[data-v-a6fc82ae] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #909CBA;\n  padding: 0 15px;\n}\n.projectDetails .screen .change .active[data-v-a6fc82ae] {\n  height: 100%;\n  line-height: 22px;\n  background: #FFFFFF;\n  border-radius: 11px;\n  color: #1F75D9;\n}\n.projectDetails .tabs[data-v-a6fc82ae] .van-tabs__wrap {\n  height: 49px;\n}\n.projectDetails .tabs[data-v-a6fc82ae] .van-tabs__wrap .van-tabs__nav {\n  border-radius: 10px;\n  padding-bottom: 6px;\n  box-sizing: border-box;\n}\n.projectDetails .tabs[data-v-a6fc82ae] .van-tabs__wrap .van-tabs__nav .van-tabs__line {\n  width: 18px;\n  height: 2px;\n  background-color: #1F75D9;\n}\n.projectDetails .tabs[data-v-a6fc82ae] .van-tabs__wrap .van-tabs__nav .van-tab__text {\n  font-size: 15px;\n}\n.headBox[data-v-a6fc82ae] {\n  padding: 20px 10px;\n}\n.headBox .projectInfo[data-v-a6fc82ae] {\n  background: #FFFFFF;\n  border-radius: 10px;\n  padding: 20px 10px 0 10px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.headBox .projectInfo .matching[data-v-a6fc82ae] {\n  background: #1F75D9;\n}\n.headBox .projectInfo .status[data-v-a6fc82ae] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 18px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 20px;\n  text-align: center;\n  line-height: 18px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #FFFFFF;\n  padding-left: 18px;\n  padding-right: 13px;\n}\n.headBox .projectInfo .callMe[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n}\n.headBox .projectInfo .callMe .contact[data-v-a6fc82ae] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.headBox .projectInfo .callMe .contact .contactImg[data-v-a6fc82ae] {\n  width: 22px;\n  height: 23px;\n}\n.headBox .projectInfo .callMe .contact .contactNmae[data-v-a6fc82ae] {\n  font-size: 12px;\n  margin-top: 9px;\n  font-weight: 500;\n  color: #333333;\n}\n.headBox .projectInfo .callMe .Deposit[data-v-a6fc82ae] {\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  height: 30px;\n  background: #FFFFFF;\n  border: 1px solid #1F75D9;\n  border-radius: 15px;\n  line-height: 30px;\n  font-size: 14px;\n  padding: 0 11px;\n  font-weight: 500;\n  color: #1F75D9;\n  margin-top: auto;\n}\n.headBox .projectInfo .p_title[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n}\n.headBox .projectInfo .p_title .p_type[data-v-a6fc82ae] {\n  height: 20px;\n  background: rgba(31, 117, 217, 0.2);\n  border-radius: 10px;\n  font-size: 12px;\n  line-height: 20px;\n  font-weight: 500;\n  color: #1F75D9;\n  padding: 0 10px;\n  margin-right: 13px;\n}\n.headBox .projectInfo .p_title .p_name[data-v-a6fc82ae] {\n  font-weight: 500;\n  color: #333333;\n}\n.headBox .projectInfo .number[data-v-a6fc82ae] {\n  margin-top: 15px;\n  margin-bottom: 16px;\n  font-size: 12px;\n  line-height: 1;\n  font-weight: 500;\n  color: #333333;\n}\n.headBox .projectInfo .price[data-v-a6fc82ae] {\n  display: flex;\n  align-items: baseline;\n  line-height: 1;\n  font-weight: 500;\n  color: #1F75D9;\n  position: relative;\n  padding-bottom: 20px;\n}\n.headBox .projectInfo .price .p[data-v-a6fc82ae] {\n  font-size: 19px;\n  margin-right: 4px;\n}\n.headBox .projectInfo .price .unit[data-v-a6fc82ae] {\n  font-size: 14px;\n}\n.headBox .projectInfo .errTips[data-v-a6fc82ae] {\n  font-size: 12px;\n  line-height: 1;\n  font-weight: 400;\n  color: #FF765A;\n  margin-bottom: 20px;\n}\n.headBox .setting[data-v-a6fc82ae] {\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n}\n.headBox .setting .item[data-v-a6fc82ae] {\n  padding-top: 18px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.headBox .setting .item .icon[data-v-a6fc82ae] {\n  height: 22px;\n  width: 22px;\n  margin-bottom: 12px;\n}\n.headBox .setting .item .s_name[data-v-a6fc82ae] {\n  font-size: 14px;\n  text-align: center;\n  font-weight: 400;\n  color: #333333;\n}\n.headBox .setting .item .s_samll[data-v-a6fc82ae] {\n  font-size: 11px !important;\n}\n.headBox .setting .item .s_samll[data-v-a6fc82ae] .van-count-down {\n  font-size: inherit;\n  line-height: 1;\n}\n.headBox .setting .item .s_top[data-v-a6fc82ae] {\n  margin-top: 9px;\n}\n.headBox .item[data-v-a6fc82ae]::after {\n  position: absolute;\n  content: '';\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background-color: #F6F7FB;\n}\n.headBox .statusInfo[data-v-a6fc82ae] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-left: 12px;\n  padding-right: 10px;\n  margin-bottom: 18px;\n}\n.headBox .statusInfo .status[data-v-a6fc82ae] {\n  font-size: 22px;\n  line-height: 1;\n  font-weight: 500;\n  color: #FFFFFF;\n}\n.headBox .statusInfo .countDown[data-v-a6fc82ae] {\n  display: flex;\n  align-items: center;\n}\n.headBox .statusInfo .countDown .times[data-v-a6fc82ae],\n.headBox .statusInfo .countDown[data-v-a6fc82ae] .van-count-down {\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 500;\n  color: #FFFFFF;\n}\n.btnStyle[data-v-a6fc82ae] {\n  margin-top: 0 !important;\n  padding-top: 0 !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js").default
var update = add("69e486c0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!./node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& */ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/lib/addStylesClient.js").default
var update = add("4ac6cc59", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/paymentLoading/index.vue":
/*!*************************************************!*\
  !*** ./src/components/paymentLoading/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=24efad69&scoped=true& */ "./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/paymentLoading/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& */ "./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24efad69",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/paymentLoading/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/paymentLoading/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/paymentLoading/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less& */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=style&index=0&id=24efad69&scoped=true&lang=less&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_24efad69_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=24efad69&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/components/paymentLoading/index.vue?vue&type=template&id=24efad69&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_24efad69_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/util/BNUtils.js":
/*!*****************************!*\
  !*** ./src/util/BNUtils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * @Author: your name
 * @Date: 2021-10-21 11:50:16
 * @LastEditTime: 2021-12-07 15:52:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \A_chain_bridge\chain_bridge\js\BNUtils.js
 */
const Big = __webpack_require__(/*! ./big.js */ "./src/util/big.js");

Big.PE = 50; //const Big1 = require('bignumber.js')

function parseNumber(number, power) {
  //console.log(new Big(String(number)).div(new Big(10).pow(power)), 'ddddddd')
  return roundFun(new Big(String(number)).div(new Big(10).pow(power)).toNumber(), 4);
}

function pow(number, power) {
  //console.log(new Big(number).times(new Big(10).pow(power)).toString())
  return new Big(number).times(new Big(10).pow(power)).toString();
}

function roundFun(value, n) {
  return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}

function chufa(value, n) {
  return new Big(value).div(new Big(Math.pow(10, n)));
}

module.exports = {
  parseNumber,
  pow,
  roundFun,
  chufa
};

/***/ }),

/***/ "./src/util/big.js":
/*!*************************!*\
  !*** ./src/util/big.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/_core-js@3.23.5@core-js/modules/es.error.cause.js");

/*
 *  big.js v6.1.1
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2021 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */
;

(function (GLOBAL) {
  'use strict';

  var Big,

  /************************************** EDITABLE DEFAULTS *****************************************/
  // The default values below must be integers within the stated ranges.

  /*
   * The maximum number of decimal places (DP) of the results of operations involving division:
   * div and sqrt, and pow with negative exponents.
   */
  DP = 20,
      // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,
      // 0, 1, 2 or 3
  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,
      // 0 to 1000000
  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,
      // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,
      // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,
      // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,
      // true or false

  /**************************************************************************************************/
  // Error messages.
  NAME = '[big.js] ',
      INVALID = NAME + 'Invalid ',
      INVALID_DP = INVALID + 'decimal places',
      INVALID_RM = INVALID + 'rounding mode',
      DIV_BY_ZERO = NAME + 'Division by zero',
      // The shared prototype object.
  P = {},
      UNDEFINED = void 0,
      NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  /*
   * Create and return a Big constructor.
   */

  function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this; // Enable constructor usage without new.

      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n); // Duplicate.

      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        if (typeof n !== 'string') {
          if (Big.strict === true) {
            throw TypeError(INVALID + 'number');
          } // Minus zero?


          n = n === 0 && 1 / n < 0 ? '-0' : String(n);
        }

        parse(x, n);
      } // Retain a reference to this Big constructor.
      // Shadow Big.prototype.constructor which points to Object.


      x.constructor = Big;
    }

    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.strict = STRICT;
    Big.roundDown = 0;
    Big.roundHalfUp = 1;
    Big.roundHalfEven = 2;
    Big.roundUp = 3;
    return Big;
  }
  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */


  function parse(x, n) {
    var e, i, nl;

    if (!NUMERIC.test(n)) {
      throw Error(INVALID + 'number');
    } // Determine sign.


    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1; // Decimal point?

    if ((e = n.indexOf('.')) > -1) n = n.replace('.', ''); // Exponential form?

    if ((i = n.search(/e/i)) > 0) {
      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {
      // Integer.
      e = n.length;
    }

    nl = n.length; // Determine leading zeros.

    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;

    if (i == nl) {
      // Zero.
      x.c = [x.e = 0];
    } else {
      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);

      x.e = e - i - 1;
      x.c = []; // Convert string to array of digits without leading/trailing zeros.

      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }

    return x;
  }
  /*
   * Round Big x to a maximum of sd significant digits using rounding mode rm.
   *
   * x {Big} The Big to round.
   * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
   * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   * [more] {boolean} Whether the result of division was truncated.
   */


  function round(x, sd, rm, more) {
    var xc = x.c;
    if (rm === UNDEFINED) rm = x.constructor.RM;

    if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
      throw Error(INVALID_RM);
    }

    if (sd < 1) {
      more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
      xc.length = 1;

      if (more) {
        // 1, 0.1, 0.01, 0.001, 0.0001 etc.
        x.e = x.e - sd + 1;
        xc[0] = 1;
      } else {
        // Zero.
        xc[0] = x.e = 0;
      }
    } else if (sd < xc.length) {
      // xc[sd] is the digit after the digit that may be rounded up.
      more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]); // Remove any digits after the required precision.

      xc.length = sd--; // Round up?

      if (more) {
        // Rounding up may mean the previous digit has to be rounded up.
        for (; ++xc[sd] > 9;) {
          xc[sd] = 0;

          if (!sd--) {
            ++x.e;
            xc.unshift(1);
          }
        }
      } // Remove trailing zeros.


      for (sd = xc.length; !xc[--sd];) xc.pop();
    }

    return x;
  }
  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   */


  function stringify(x, doExponential, isNonzero) {
    var e = x.e,
        s = x.c.join(''),
        n = s.length; // Exponential notation?

    if (doExponential) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e; // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;

      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) {
        for (e -= n; e--;) s += '0';
      } else if (e < n) {
        s = s.slice(0, e) + '.' + s.slice(e);
      }
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }

    return x.s < 0 && isNonzero ? '-' + s : s;
  } // Prototype/instance methods

  /*
   * Return a new Big whose value is the absolute value of this Big.
   */


  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };
  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
   */


  P.cmp = function (y) {
    var isneg,
        x = this,
        xc = x.c,
        yc = (y = new x.constructor(y)).c,
        i = x.s,
        j = y.s,
        k = x.e,
        l = y.e; // Either zero?

    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i; // Signs differ?

    if (i != j) return i;
    isneg = i < 0; // Compare exponents.

    if (k != l) return k > l ^ isneg ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l; // Compare digit by digit.

    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    } // Compare lengths.


    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };
  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */


  P.div = function (y) {
    var x = this,
        Big = x.constructor,
        a = x.c,
        // dividend
    b = (y = new Big(y)).c,
        // divisor
    k = x.s == y.s ? 1 : -1,
        dp = Big.DP;

    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    } // Divisor is zero?


    if (!b[0]) {
      throw Error(DIV_BY_ZERO);
    } // Dividend is 0? Return +-0.


    if (!a[0]) {
      y.s = k;
      y.c = [y.e = 0];
      return y;
    }

    var bl,
        bt,
        n,
        cmp,
        ri,
        bz = b.slice(),
        ai = bl = b.length,
        al = a.length,
        r = a.slice(0, bl),
        // remainder
    rl = r.length,
        q = y,
        // quotient
    qc = q.c = [],
        qi = 0,
        p = dp + (q.e = x.e - y.e) + 1; // precision of the result

    q.s = k;
    k = p < 0 ? 0 : p; // Create version of divisor with leading zero.

    bz.unshift(0); // Add zeros to make remainder as long as divisor.

    for (; rl++ < bl;) r.push(0);

    do {
      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {
        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        } // If divisor < remainder, subtract divisor from remainder.


        if (cmp < 0) {
          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;

              for (; ri && !r[--ri];) r[ri] = 9;

              --r[ri];
              r[rl] += 10;
            }

            r[rl] -= bt[rl];
          }

          for (; !r[0];) r.shift();
        } else {
          break;
        }
      } // Add the digit n to the result array.


      qc[qi++] = cmp ? n : ++n; // Update the remainder.

      if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--); // Leading zero? Do not remove if result is simply zero (qi == 1).


    if (!qc[0] && qi != 1) {
      // There can't be more than one zero.
      qc.shift();
      q.e--;
      p--;
    } // Round?


    if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
    return q;
  };
  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */


  P.eq = function (y) {
    return this.cmp(y) === 0;
  };
  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */


  P.gt = function (y) {
    return this.cmp(y) > 0;
  };
  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */


  P.gte = function (y) {
    return this.cmp(y) > -1;
  };
  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */


  P.lt = function (y) {
    return this.cmp(y) < 0;
  };
  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */


  P.lte = function (y) {
    return this.cmp(y) < 1;
  };
  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */


  P.minus = P.sub = function (y) {
    var i,
        j,
        t,
        xlty,
        x = this,
        Big = x.constructor,
        a = x.s,
        b = (y = new Big(y)).s; // Signs differ?

    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }

    var xc = x.c.slice(),
        xe = x.e,
        yc = y.c,
        ye = y.e; // Either zero?

    if (!xc[0] || !yc[0]) {
      if (yc[0]) {
        y.s = -b;
      } else if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = 1;
      }

      return y;
    } // Determine which is the bigger number. Prepend zeros to equalise exponents.


    if (a = xe - ye) {
      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }

      t.reverse();

      for (b = a; b--;) t.push(0);

      t.reverse();
    } else {
      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;

      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    } // x < y? Point xc to the array of the bigger number.


    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */


    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0; // Subtract yc from xc.

    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;

        --xc[i];
        xc[j] += 10;
      }

      xc[j] -= yc[j];
    } // Remove trailing zeros.


    for (; xc[--b] === 0;) xc.pop(); // Remove leading zeros and adjust exponent accordingly.


    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }

    if (!xc[0]) {
      // n - n = +0
      y.s = 1; // Result must be zero.

      xc = [ye = 0];
    }

    y.c = xc;
    y.e = ye;
    return y;
  };
  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */


  P.mod = function (y) {
    var ygtx,
        x = this,
        Big = x.constructor,
        a = x.s,
        b = (y = new Big(y)).s;

    if (!y.c[0]) {
      throw Error(DIV_BY_ZERO);
    }

    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
  };
  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */


  P.plus = P.add = function (y) {
    var e,
        k,
        t,
        x = this,
        Big = x.constructor;
    y = new Big(y); // Signs differ?

    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }

    var xe = x.e,
        xc = x.c,
        ye = y.e,
        yc = y.c; // Either zero?

    if (!xc[0] || !yc[0]) {
      if (!yc[0]) {
        if (xc[0]) {
          y = new Big(x);
        } else {
          y.s = x.s;
        }
      }

      return y;
    }

    xc = xc.slice(); // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.

    if (e = xe - ye) {
      if (e > 0) {
        ye = xe;
        t = yc;
      } else {
        e = -e;
        t = xc;
      }

      t.reverse();

      for (; e--;) t.push(0);

      t.reverse();
    } // Point xc to the longer array.


    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }

    e = yc.length; // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.

    for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0; // No need to check for zero, as +x + +y != 0 && -x + -y != 0


    if (k) {
      xc.unshift(k);
      ++ye;
    } // Remove trailing zeros.


    for (e = xc.length; xc[--e] === 0;) xc.pop();

    y.c = xc;
    y.e = ye;
    return y;
  };
  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */


  P.pow = function (n) {
    var x = this,
        one = new x.constructor('1'),
        y = one,
        isneg = n < 0;

    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
      throw Error(INVALID + 'exponent');
    }

    if (isneg) n = -n;

    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }

    return isneg ? one.div(y) : y;
  };
  /*
   * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
   * significant digits using rounding mode rm, or Big.RM if rm is not specified.
   *
   * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
   * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   */


  P.prec = function (sd, rm) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }

    return round(new this.constructor(this), sd, rm);
  };
  /*
   * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
   * using rounding mode rm, or Big.RM if rm is not specified.
   * If dp is negative, round to an integer which is a multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   */


  P.round = function (dp, rm) {
    if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    return round(new this.constructor(this), dp + this.e + 1, rm);
  };
  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */


  P.sqrt = function () {
    var r,
        c,
        t,
        x = this,
        Big = x.constructor,
        s = x.s,
        e = x.e,
        half = new Big('0.5'); // Zero?

    if (!x.c[0]) return new Big(x); // Negative?

    if (s < 0) {
      throw Error(NAME + 'No square root');
    } // Estimate.


    s = Math.sqrt(x + ''); // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.

    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s + '');
    }

    e = r.e + (Big.DP += 4); // Newton-Raphson iteration.

    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));

    return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
  };
  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */


  P.times = P.mul = function (y) {
    var c,
        x = this,
        Big = x.constructor,
        xc = x.c,
        yc = (y = new Big(y)).c,
        a = xc.length,
        b = yc.length,
        i = x.e,
        j = y.e; // Determine sign of result.

    y.s = x.s == y.s ? 1 : -1; // Return signed 0 if either 0.

    if (!xc[0] || !yc[0]) {
      y.c = [y.e = 0];
      return y;
    } // Initialise exponent of result as x.e + y.e.


    y.e = i + j; // If array xc has fewer digits than yc, swap xc and yc, and lengths.

    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    } // Initialise coefficient array of result with zeros.


    for (c = new Array(j = a + b); j--;) c[j] = 0; // Multiply.
    // i is initially xc.length.


    for (i = b; i--;) {
      b = 0; // a is yc.length.

      for (j = a + i; j > i;) {
        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10; // carry

        b = b / 10 | 0;
      }

      c[j] = b;
    } // Increment result exponent if there is a final carry, otherwise remove leading zero.


    if (b) ++y.e;else c.shift(); // Remove trailing zeros.

    for (i = c.length; !c[--i];) c.pop();

    y.c = c;
    return y;
  };
  /*
   * Return a string representing the value of this Big in exponential notation rounded to dp fixed
   * decimal places using rounding mode rm, or Big.RM if rm is not specified.
   *
   * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
   * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   */


  P.toExponential = function (dp, rm) {
    var x = this,
        n = x.c[0];

    if (dp !== UNDEFINED) {
      if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
        throw Error(INVALID_DP);
      }

      x = round(new x.constructor(x), ++dp, rm);

      for (; x.c.length < dp;) x.c.push(0);
    }

    return stringify(x, true, !!n);
  };
  /*
   * Return a string representing the value of this Big in normal notation rounded to dp fixed
   * decimal places using rounding mode rm, or Big.RM if rm is not specified.
   *
   * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
   * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */


  P.toFixed = function (dp, rm) {
    var x = this,
        n = x.c[0];

    if (dp !== UNDEFINED) {
      if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
        throw Error(INVALID_DP);
      }

      x = round(new x.constructor(x), dp + x.e + 1, rm); // x.e may have changed if the value is rounded up.

      for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
    }

    return stringify(x, false, !!n);
  };
  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */


  P.toJSON = P.toString = function () {
    var x = this,
        Big = x.constructor;
    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
  };
  /*
   * Return the value of this Big as a primitve number.
   */


  P.toNumber = function () {
    var n = Number(stringify(this, true, true));

    if (this.constructor.strict === true && !this.eq(n.toString())) {
      throw Error(NAME + 'Imprecise conversion');
    }

    return n;
  };
  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * rounding mode rm, or Big.RM if rm is not specified.
   * Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
   * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
   */


  P.toPrecision = function (sd, rm) {
    var x = this,
        Big = x.constructor,
        n = x.c[0];

    if (sd !== UNDEFINED) {
      if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
        throw Error(INVALID + 'precision');
      }

      x = round(new Big(x), sd, rm);

      for (; x.c.length < sd;) x.c.push(0);
    }

    return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
  };
  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */


  P.valueOf = function () {
    var x = this,
        Big = x.constructor;

    if (Big.strict === true) {
      throw Error(NAME + 'valueOf disallowed');
    }

    return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
  }; // Export


  Big = _Big_();
  Big['default'] = Big.Big = Big; //AMD.

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Big;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);

/***/ }),

/***/ "./src/view/demandDetails/index.vue":
/*!******************************************!*\
  !*** ./src/view/demandDetails/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a6fc82ae&scoped=true& */ "./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/view/demandDetails/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& */ "./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.10.0@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_10_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a6fc82ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/view/demandDetails/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/view/demandDetails/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/view/demandDetails/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-style-loader@4.1.3@vue-style-loader??ref--11-oneOf-1-0!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--11-oneOf-1-2!../../../node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js??ref--11-oneOf-1-3!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true& */ "./node_modules/_vue-style-loader@4.1.3@vue-style-loader/index.js?!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_less-loader@7.3.0@less-loader/dist/cjs.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=style&index=0&id=a6fc82ae&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_3_vue_style_loader_index_js_ref_11_oneOf_1_0_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_7_3_0_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a6fc82ae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"14510dbf-vue-loader-template"}!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/_babel-loader@8.2.5@babel-loader/lib!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/_vue-loader@15.10.0@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a6fc82ae&scoped=true& */ "./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"14510dbf-vue-loader-template\"}!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.2.5@babel-loader/lib/index.js!./node_modules/_vue-loader@15.10.0@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@4.1.0@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.10.0@vue-loader/lib/index.js?!./src/view/demandDetails/index.vue?vue&type=template&id=a6fc82ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_14510dbf_vue_loader_template_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_8_2_5_babel_loader_lib_index_js_node_modules_vue_loader_15_10_0_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_4_1_0_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_15_10_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a6fc82ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=5.js.map