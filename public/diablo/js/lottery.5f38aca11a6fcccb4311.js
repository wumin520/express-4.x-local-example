webpackJsonp([47],{369:function(t,n,e){e(683);var a=e(0)(e(495),e(798),"data-v-c4de9c86",null);t.exports=a.exports},495:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(37),o=e.n(a);n.default={components:{CountDown:o.a},data:function(){return{data:{},openLotteryList:[],numbersLotteryList:[],fetchingData:!1,noMoreData:!1,gotData:!1,offset:"",end_time:0,lotteryIcons:["//qianka.b0.upaiyun.com/images/dd25ce1de98fb43669e3f7fed9587c74.jpeg","//qianka.b0.upaiyun.com/images/f33109b3cfb04b7c5918fc8f80c6c69f.jpeg","//qianka.b0.upaiyun.com/images/ed150ebf159cf744fbd344d26a970f29.jpeg","//qianka.b0.upaiyun.com/images/b9c1d3d1ed1d4bb7a95d856ad84d8e7f.jpeg","//qianka.b0.upaiyun.com/images/e3323978ae8d156abe4b8ae8d8a29d05.jpeg","//qianka.b0.upaiyun.com/images/56902d33c7a67c13d42dbf444abe3db3.jpeg"]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.loadingTimer&&(clearTimeout(this.loadingTimer),$loading.hide()),this.loadingTimer=setTimeout(function(t){$loading.show("拼命加载中..")},300),$api.lotteryDashboard().then(function(t){return t.data&&t.data.payload}).then(function(n){t.gotData=!0,t.loadingTimer&&(clearTimeout(t.loadingTimer),setTimeout(function(t){$loading.hide()},500)),t.data=n,t.end_time=moment(t.data.end_time,"YYYY-MM-DD hh:mm:ss").valueOf(),t.processHistory(n.history,!1)},function(){t.gotData=!0})},infinite:function(t){if(!this.offset||this.noMoreData||this.fetchingData)return void t();this.fetchingData=!0,this.getHistory(t)},getHistory:function(t){var n=this;$api.lotteryDashboardHistory(this.offset).then(function(e){var a=e.data?e.data.payload:void 0;setTimeout(function(e){t(),n.processHistory(a,!0)},1e3)},function(){t()})},processHistory:function(t,n){if(n&&t.length<10&&(this.noMoreData=!0),!(t.length<=0)){this.fetchingData=!1,this.offset=t[t.length-1].lottery_id;var e=_.filter(t,{lottery_status:1}),a=_.filter(t,{lottery_status:2});this.openLotteryList=this.openLotteryList.concat(e),this.numbersLotteryList=this.numbersLotteryList.concat(a),_.each(a,function(t,n){t.totalLotteryNumbers=_.sum([t.lottery_number[0],t.lottery_number[1],t.lottery_number[2]])})}},countdownComplete:function(){window.location.reload()}}}},605:function(t,n,e){n=t.exports=e(346)(),n.push([t.i,'/* thin border */\n.nav[data-v-c4de9c86] {\n  position: fixed;\n  display: table;\n  width: 100%;\n  height: auto;\n  top: 10px;\n  padding-left: 8px;\n  padding-right: 8px;\n  z-index: 100;\n}\n.nav .go-back[data-v-c4de9c86] {\n    float: left;\n    width: 38px;\n    height: 34px;\n    background: rgba(37, 37, 46, 0.9);\n    border-radius: 20px;\n}\n.nav .go-back .go-back-icon[data-v-c4de9c86] {\n      display: block;\n      width: 8px;\n      height: 15px;\n      margin: 10px auto 0;\n      background: url("//qianka.b0.upaiyun.com/images/d43eddcca1630d2637e05b61086991f8.png") no-repeat;\n      background-size: 100% 100%;\n}\n.nav .rules[data-v-c4de9c86] {\n    float: right;\n    color: #FFF;\n    width: 46px;\n    height: 34px;\n    line-height: 34px;\n    font-size: 13px;\n    text-align: center;\n    border-radius: 20px;\n    background: rgba(37, 37, 46, 0.9);\n}\n.lottery-page-content[data-v-c4de9c86] {\n  background: #261A40;\n  padding-bottom: 40px;\n}\n.lottery-page-content .lottery-index-header[data-v-c4de9c86] {\n    width: 100%;\n    height: 346px;\n    background: linear-gradient(-1deg, #23193A 8%, #4E3A76 100%);\n}\n.lottery-page-content .lottery-index-header .daily-lottery[data-v-c4de9c86] {\n      display: block;\n      width: 100%;\n      height: 88px;\n}\n.lottery-page-content .lottery-index-header .my-chips[data-v-c4de9c86] {\n      height: 40px;\n      line-height: 37px;\n      width: 303px;\n      margin: 10px auto 14px;\n      background: #873C96;\n      box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.1);\n      border-radius: 4px;\n      color: white;\n      font-size: 14px;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount[data-v-c4de9c86],\n      .lottery-page-content .lottery-index-header .my-chips .get-chips[data-v-c4de9c86],\n      .lottery-page-content .lottery-index-header .my-chips .chips-image[data-v-c4de9c86] {\n        display: inline-block;\n        vertical-align: middle;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount[data-v-c4de9c86] {\n        display: inline-block;\n        height: 40px;\n        line-height: 40px;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount span[data-v-c4de9c86] {\n          margin: 0 2px;\n}\n.lottery-page-content .lottery-index-header .my-chips .get-chips[data-v-c4de9c86] {\n        float: right;\n        margin-right: 15px;\n        opacity: 0.5;\n        height: 40px;\n        line-height: 40px;\n}\n.lottery-page-content .lottery-index-header .my-chips .get-chips img.arrow-left[data-v-c4de9c86] {\n          height: 12px;\n          width: 6px;\n          margin-left: 10px;\n}\n.lottery-page-content .lottery-index-header .my-chips .chips-image[data-v-c4de9c86] {\n        position: static;\n        margin-left: 14px;\n        margin-top: -2px;\n}\n.lottery-page-content .lottery-index-header .my-chips .chips-image.multiple-chips[data-v-c4de9c86] {\n          width: 30px;\n}\n.lottery-page-content .lottery-index-header .jackpot[data-v-c4de9c86] {\n      color: #106ACC;\n      width: 325px;\n      height: 193px;\n      margin: 0 auto 0;\n      text-align: center;\n      overflow: hidden;\n      background: url("//qianka.b0.upaiyun.com/images/d459b7e542347b34e6af3849f346b31f.png") center no-repeat;\n      background-size: 100% 100%;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper[data-v-c4de9c86] {\n        position: relative;\n        display: inline-block;\n        height: 21px;\n        line-height: 22px;\n        margin: 20px auto 0;\n        padding: 0 10px;\n        border-radius: 50px;\n        font-size: 12px;\n        opacity: 0.7;\n        background: rgba(255, 255, 255, 0.3);\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper .w52[data-v-c4de9c86] {\n          display: inline-block;\n          width: 50px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper .time-deadline[data-v-c4de9c86] {\n          position: absolute;\n          margin-left: -50px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-title[data-v-c4de9c86] {\n        font-size: 13px;\n        margin-top: 20px;\n        margin-bottom: 6px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-number[data-v-c4de9c86] {\n        height: 32px;\n        line-height: 32px;\n        color: #106ACC;\n        font-size: 32px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info[data-v-c4de9c86] {\n        margin-top: 20px;\n        font-size: 12px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info .text-opacity[data-v-c4de9c86] {\n          opacity: 0.7;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info .segment[data-v-c4de9c86] {\n          display: inline-block;\n          width: 0;\n          height: 11px;\n          margin: -1.5px 10px 0;\n          vertical-align: middle;\n          border: 0.5px solid #44AEF2;\n          -webkit-transform: scaleX(0.5);\n              -ms-transform: scaleX(0.5);\n                  transform: scaleX(0.5);\n}\n.lottery-page-content .lottery-list[data-v-c4de9c86] {\n    width: 355px;\n    height: 100%;\n    position: relative;\n    padding-bottom: 16px;\n    margin: 10px auto 0;\n}\n.lottery-page-content .lottery-list .no-history[data-v-c4de9c86] {\n      background-color: #342854;\n      height: 52px;\n      line-height: 52px;\n      font-size: 14px;\n      color: white;\n}\n.lottery-page-content .lottery-list .lottery-list-box[data-v-c4de9c86] {\n      position: relative;\n      color: #FFF;\n      height: 78px;\n      background: #342755;\n      border-radius: 4px;\n      margin-bottom: 10px;\n      overflow: hidden;\n}\n.lottery-page-content .lottery-list .lottery-list-box .segment[data-v-c4de9c86] {\n        float: left;\n        width: 1px;\n        height: 62px;\n        margin: 8px 16px 0;\n        vertical-align: middle;\n        background: rgba(255, 255, 255, 0.1);\n        -webkit-transform: scaleX(0.5);\n            -ms-transform: scaleX(0.5);\n                transform: scaleX(0.5);\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md[data-v-c4de9c86] {\n        float: left;\n}\n.lottery-page-content .lottery-list .lottery-list-box .w86[data-v-c4de9c86] {\n        width: 86px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1[data-v-c4de9c86] {\n        width: 76px;\n        margin-left: 16px;\n        text-align: center;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .lottery-number[data-v-c4de9c86] {\n          position: relative;\n          display: table;\n          width: 100%;\n          padding-top: 16px;\n          padding-bottom: 6px;\n          text-align: left;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .lottery-number .lottery-digital[data-v-c4de9c86] {\n            float: right;\n            color: #44AEF2;\n            width: 18px;\n            margin-left: 0px;\n            text-align: center;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice[data-v-c4de9c86] {\n          display: table;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice .dice-icon[data-v-c4de9c86] {\n            width: 20px;\n            height: 20px;\n            margin-right: 8px;\n            border-radius: 2px;\n            background: #fff;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice .dice-icon[data-v-c4de9c86]:last-child {\n              margin-right: 0;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-2[data-v-c4de9c86], .lottery-page-content .lottery-list .lottery-list-box .list-md-3[data-v-c4de9c86] {\n        font-size: 12px;\n        margin-right: 23px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-2 .letter-spacing[data-v-c4de9c86], .lottery-page-content .lottery-list .lottery-list-box .list-md-3 .letter-spacing[data-v-c4de9c86] {\n          padding-top: 19px;\n          padding-bottom: 6px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-3 .winning[data-v-c4de9c86] {\n        font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.lottery-page-content .lottery-list .lottery-list-box .text-opacity[data-v-c4de9c86] {\n        opacity: 0.5;\n}\n.lottery-page-content .lottery-list .lotteryIcon[data-v-c4de9c86] {\n      background: linear-gradient(-135deg, #873C96 24px, #342755 0);\n}\n.lottery-page-content .lottery-list .lotteryIcon .lotteryIconText[data-v-c4de9c86] {\n        position: absolute;\n        top: 2.5px;\n        right: 1px;\n        font-size: 10px;\n        -webkit-transform: rotate(-315deg);\n            -ms-transform: rotate(-315deg);\n                transform: rotate(-315deg);\n}\n.lottery-page-content .lottery-list .h52[data-v-c4de9c86] {\n      height: 52px;\n      line-height: 52px;\n}\n.lottery-page-content .lottery-list .h52 .segment[data-v-c4de9c86] {\n        height: 36px;\n}\n.scroll[data-v-c4de9c86] {\n  top: -1px;\n  bottom: 55px;\n}\n.scroll.no-loading .infinite-layer[data-v-c4de9c86] {\n    display: none !important;\n}\n.lottery-index-footer[data-v-c4de9c86] {\n  position: absolute;\n  width: 100%;\n  height: 56px;\n  bottom: 0;\n  background: #342755;\n  z-index: 100;\n}\n.lottery-index-footer .lottery-index-btn[data-v-c4de9c86] {\n    float: left;\n    color: #FFF;\n    width: 164px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border-radius: 2px;\n    margin-top: 8px;\n    margin-left: 16px;\n}\n.lottery-index-footer .obtain-chip[data-v-c4de9c86] {\n    background: #873C96;\n}\n.lottery-index-footer .immediately-bet[data-v-c4de9c86] {\n    background: #FFAA1E;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/lottery/Lottery.vue"],names:[],mappings:"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",file:"Lottery.vue",sourcesContent:['/* thin border */\n.nav[data-v-c4de9c86] {\n  position: fixed;\n  display: table;\n  width: 100%;\n  height: auto;\n  top: 10px;\n  padding-left: 8px;\n  padding-right: 8px;\n  z-index: 100;\n}\n.nav .go-back[data-v-c4de9c86] {\n    float: left;\n    width: 38px;\n    height: 34px;\n    background: rgba(37, 37, 46, 0.9);\n    border-radius: 20px;\n}\n.nav .go-back .go-back-icon[data-v-c4de9c86] {\n      display: block;\n      width: 8px;\n      height: 15px;\n      margin: 10px auto 0;\n      background: url("//qianka.b0.upaiyun.com/images/d43eddcca1630d2637e05b61086991f8.png") no-repeat;\n      background-size: 100% 100%;\n}\n.nav .rules[data-v-c4de9c86] {\n    float: right;\n    color: #FFF;\n    width: 46px;\n    height: 34px;\n    line-height: 34px;\n    font-size: 13px;\n    text-align: center;\n    border-radius: 20px;\n    background: rgba(37, 37, 46, 0.9);\n}\n.lottery-page-content[data-v-c4de9c86] {\n  background: #261A40;\n  padding-bottom: 40px;\n}\n.lottery-page-content .lottery-index-header[data-v-c4de9c86] {\n    width: 100%;\n    height: 346px;\n    background: linear-gradient(-1deg, #23193A 8%, #4E3A76 100%);\n}\n.lottery-page-content .lottery-index-header .daily-lottery[data-v-c4de9c86] {\n      display: block;\n      width: 100%;\n      height: 88px;\n}\n.lottery-page-content .lottery-index-header .my-chips[data-v-c4de9c86] {\n      height: 40px;\n      line-height: 37px;\n      width: 303px;\n      margin: 10px auto 14px;\n      background: #873C96;\n      box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.1);\n      border-radius: 4px;\n      color: white;\n      font-size: 14px;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount[data-v-c4de9c86],\n      .lottery-page-content .lottery-index-header .my-chips .get-chips[data-v-c4de9c86],\n      .lottery-page-content .lottery-index-header .my-chips .chips-image[data-v-c4de9c86] {\n        display: inline-block;\n        vertical-align: middle;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount[data-v-c4de9c86] {\n        display: inline-block;\n        height: 40px;\n        line-height: 40px;\n}\n.lottery-page-content .lottery-index-header .my-chips .amount span[data-v-c4de9c86] {\n          margin: 0 2px;\n}\n.lottery-page-content .lottery-index-header .my-chips .get-chips[data-v-c4de9c86] {\n        float: right;\n        margin-right: 15px;\n        opacity: 0.5;\n        height: 40px;\n        line-height: 40px;\n}\n.lottery-page-content .lottery-index-header .my-chips .get-chips img.arrow-left[data-v-c4de9c86] {\n          height: 12px;\n          width: 6px;\n          margin-left: 10px;\n}\n.lottery-page-content .lottery-index-header .my-chips .chips-image[data-v-c4de9c86] {\n        position: static;\n        margin-left: 14px;\n        margin-top: -2px;\n}\n.lottery-page-content .lottery-index-header .my-chips .chips-image.multiple-chips[data-v-c4de9c86] {\n          width: 30px;\n}\n.lottery-page-content .lottery-index-header .jackpot[data-v-c4de9c86] {\n      color: #106ACC;\n      width: 325px;\n      height: 193px;\n      margin: 0 auto 0;\n      text-align: center;\n      overflow: hidden;\n      background: url("//qianka.b0.upaiyun.com/images/d459b7e542347b34e6af3849f346b31f.png") center no-repeat;\n      background-size: 100% 100%;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper[data-v-c4de9c86] {\n        position: relative;\n        display: inline-block;\n        height: 21px;\n        line-height: 22px;\n        margin: 20px auto 0;\n        padding: 0 10px;\n        border-radius: 50px;\n        font-size: 12px;\n        opacity: 0.7;\n        background: rgba(255, 255, 255, 0.3);\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper .w52[data-v-c4de9c86] {\n          display: inline-block;\n          width: 50px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-nper .time-deadline[data-v-c4de9c86] {\n          position: absolute;\n          margin-left: -50px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-title[data-v-c4de9c86] {\n        font-size: 13px;\n        margin-top: 20px;\n        margin-bottom: 6px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-number[data-v-c4de9c86] {\n        height: 32px;\n        line-height: 32px;\n        color: #106ACC;\n        font-size: 32px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info[data-v-c4de9c86] {\n        margin-top: 20px;\n        font-size: 12px;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info .text-opacity[data-v-c4de9c86] {\n          opacity: 0.7;\n}\n.lottery-page-content .lottery-index-header .jackpot .jackpot-info .segment[data-v-c4de9c86] {\n          display: inline-block;\n          width: 0;\n          height: 11px;\n          margin: -1.5px 10px 0;\n          vertical-align: middle;\n          border: 0.5px solid #44AEF2;\n          -webkit-transform: scaleX(0.5);\n              -ms-transform: scaleX(0.5);\n                  transform: scaleX(0.5);\n}\n.lottery-page-content .lottery-list[data-v-c4de9c86] {\n    width: 355px;\n    height: 100%;\n    position: relative;\n    padding-bottom: 16px;\n    margin: 10px auto 0;\n}\n.lottery-page-content .lottery-list .no-history[data-v-c4de9c86] {\n      background-color: #342854;\n      height: 52px;\n      line-height: 52px;\n      font-size: 14px;\n      color: white;\n}\n.lottery-page-content .lottery-list .lottery-list-box[data-v-c4de9c86] {\n      position: relative;\n      color: #FFF;\n      height: 78px;\n      background: #342755;\n      border-radius: 4px;\n      margin-bottom: 10px;\n      overflow: hidden;\n}\n.lottery-page-content .lottery-list .lottery-list-box .segment[data-v-c4de9c86] {\n        float: left;\n        width: 1px;\n        height: 62px;\n        margin: 8px 16px 0;\n        vertical-align: middle;\n        background: rgba(255, 255, 255, 0.1);\n        -webkit-transform: scaleX(0.5);\n            -ms-transform: scaleX(0.5);\n                transform: scaleX(0.5);\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md[data-v-c4de9c86] {\n        float: left;\n}\n.lottery-page-content .lottery-list .lottery-list-box .w86[data-v-c4de9c86] {\n        width: 86px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1[data-v-c4de9c86] {\n        width: 76px;\n        margin-left: 16px;\n        text-align: center;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .lottery-number[data-v-c4de9c86] {\n          position: relative;\n          display: table;\n          width: 100%;\n          padding-top: 16px;\n          padding-bottom: 6px;\n          text-align: left;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .lottery-number .lottery-digital[data-v-c4de9c86] {\n            float: right;\n            color: #44AEF2;\n            width: 18px;\n            margin-left: 0px;\n            text-align: center;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice[data-v-c4de9c86] {\n          display: table;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice .dice-icon[data-v-c4de9c86] {\n            width: 20px;\n            height: 20px;\n            margin-right: 8px;\n            border-radius: 2px;\n            background: #fff;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-1 .dice .dice-icon[data-v-c4de9c86]:last-child {\n              margin-right: 0;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-2[data-v-c4de9c86], .lottery-page-content .lottery-list .lottery-list-box .list-md-3[data-v-c4de9c86] {\n        font-size: 12px;\n        margin-right: 23px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-2 .letter-spacing[data-v-c4de9c86], .lottery-page-content .lottery-list .lottery-list-box .list-md-3 .letter-spacing[data-v-c4de9c86] {\n          padding-top: 19px;\n          padding-bottom: 6px;\n}\n.lottery-page-content .lottery-list .lottery-list-box .list-md-3 .winning[data-v-c4de9c86] {\n        font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.lottery-page-content .lottery-list .lottery-list-box .text-opacity[data-v-c4de9c86] {\n        opacity: 0.5;\n}\n.lottery-page-content .lottery-list .lotteryIcon[data-v-c4de9c86] {\n      background: linear-gradient(-135deg, #873C96 24px, #342755 0);\n}\n.lottery-page-content .lottery-list .lotteryIcon .lotteryIconText[data-v-c4de9c86] {\n        position: absolute;\n        top: 2.5px;\n        right: 1px;\n        font-size: 10px;\n        -webkit-transform: rotate(-315deg);\n            -ms-transform: rotate(-315deg);\n                transform: rotate(-315deg);\n}\n.lottery-page-content .lottery-list .h52[data-v-c4de9c86] {\n      height: 52px;\n      line-height: 52px;\n}\n.lottery-page-content .lottery-list .h52 .segment[data-v-c4de9c86] {\n        height: 36px;\n}\n.scroll[data-v-c4de9c86] {\n  top: -1px;\n  bottom: 55px;\n}\n.scroll.no-loading .infinite-layer[data-v-c4de9c86] {\n    display: none !important;\n}\n.lottery-index-footer[data-v-c4de9c86] {\n  position: absolute;\n  width: 100%;\n  height: 56px;\n  bottom: 0;\n  background: #342755;\n  z-index: 100;\n}\n.lottery-index-footer .lottery-index-btn[data-v-c4de9c86] {\n    float: left;\n    color: #FFF;\n    width: 164px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border-radius: 2px;\n    margin-top: 8px;\n    margin-left: 16px;\n}\n.lottery-index-footer .obtain-chip[data-v-c4de9c86] {\n    background: #873C96;\n}\n.lottery-index-footer .immediately-bet[data-v-c4de9c86] {\n    background: #FFAA1E;\n}\n'],sourceRoot:""}])},683:function(t,n,e){var a=e(605);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(347)("cb421dea",a,!0)},798:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"nav",rawName:"v-nav",value:{hideNavbar:!0},expression:"{hideNavbar: true}"}],staticClass:"page"},[e("section",{staticClass:"nav"},[e("span",{staticClass:"go-back",on:{click:function(n){t.$router.back("/dashboard")}}},[e("i",{staticClass:"go-back-icon"})]),t._v(" "),e("span",{staticClass:"rules font-regular",on:{click:function(n){t.$router.forward("/lottery/rule")}}},[t._v("规则")])]),t._v(" "),e("div",{staticClass:"page-content lottery-page-content"},[e("scroll",{attrs:{"on-infinite":t.infinite}},[e("header",{staticClass:"lottery-index-header"},[e("img",{staticClass:"daily-lottery",attrs:{src:"//qianka.b0.upaiyun.com/images/4f224e27ae963996644ce434df0f1afc.png"}}),t._v(" "),e("div",{staticClass:"my-chips",on:{click:function(n){t.$router.forward("/lottery/getChips")}}},[e("img",{staticClass:"multiple-chips chips-image",attrs:{src:"//qianka.b0.upaiyun.com/images/ad5932487216be512a689d565d239a17.png",alt:"筹码"}}),t._v(" "),e("span",{staticClass:"amount"},[t._v("您有 "),e("span",{domProps:{textContent:t._s(t.data.available_chips)}}),t._v(" 个筹码")]),t._v(" "),e("div",{staticClass:"get-chips"},[e("span",[t._v("获取筹码")]),t._v(" "),e("img",{staticClass:"arrow-left",attrs:{src:"//qianka.b0.upaiyun.com/images/0a6507fefa944de03fe165f421cfbc77.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"jackpot",on:{click:function(n){t.$router.forward("/lottery/betting")}}},[e("div",{staticClass:"jackpot-nper"},[t.data.lottery_id?e("span",[e("span",{domProps:{textContent:t._s(t.data.lottery_id+"期")}}),t._v(" "),e("span",{staticClass:"w52"}),e("count-down",{staticClass:"time-deadline",attrs:{deadline:t.end_time,endcallback:t.countdownComplete}}),t._v(" "),e("span",{staticStyle:{"margin-left":"2px"}},[t._v("后截止")])],1):t._e()]),t._v(" "),e("div",{staticClass:"jackpot-title"},[t._v("本期奖池(元)")]),t._v(" "),e("div",{staticClass:"jackpot-number font-medium",domProps:{textContent:t._s(t.data.current_jackpot)}}),t._v(" "),e("div",{staticClass:"jackpot-info"},[e("span",{staticClass:"have-bet"},[e("span",{staticClass:"text-opacity"},[t._v("已下注数")]),t._v(" "),e("span",{staticClass:"font-regular",domProps:{textContent:t._s(t.data.bets)}})]),t._v(" "),e("i",{staticClass:"segment"}),t._v(" "),e("span",[e("span",{staticClass:"text-opacity"},[t._v("下期奖池")]),t._v(" "),e("span",{staticClass:"font-regular",domProps:{textContent:t._s(t.data.next_jackpot)}})])])])]),t._v(" "),e("section",{staticClass:"lottery-list"},[t.openLotteryList.length||t.numbersLotteryList.length?t._e():e("div",{staticClass:"no-history text-center"},[t._v("\n          暂无开奖信息\n        ")]),t._v(" "),t._l(t.openLotteryList,function(n,a){return e("div",{key:a,staticClass:"lottery-list-box h52"},[e("div",{staticClass:"list-md list-md-1"},[t._v("开奖中...")]),t._v(" "),e("i",{staticClass:"segment"}),t._v(" "),e("div",{staticClass:"list-md list-md-2 w86"},[e("span",{staticClass:"text-opacity"},[t._v("期号")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.lottery_id)}})]),t._v(" "),e("div",{staticClass:"list-md list-md-3 w86"},[e("span",{staticClass:"text-opacity"},[t._v("奖池")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.jackpot)}}),t._v("元")])])}),t._v(" "),e("ul",t._l(t.numbersLotteryList,function(n,a){return e("li",{key:a,staticClass:"lottery-list-box",class:{lotteryIcon:n.win}},[e("div",{staticClass:"list-md list-md-1"},[e("div",{staticClass:"lottery-number"},[t._v("开奖号码"),e("span",{staticClass:"lottery-digital font-medium",domProps:{textContent:t._s(n.totalLotteryNumbers)}})]),t._v(" "),e("div",{staticClass:"dice"},[e("img",{staticClass:"dice-icon",attrs:{src:t.lotteryIcons[n.lottery_number[0]-1]}}),t._v(" "),e("img",{staticClass:"dice-icon",attrs:{src:t.lotteryIcons[n.lottery_number[1]-1]}}),t._v(" "),e("img",{staticClass:"dice-icon",attrs:{src:t.lotteryIcons[n.lottery_number[2]-1]}})])]),t._v(" "),e("i",{staticClass:"segment"}),t._v(" "),e("div",{staticClass:"list-md list-md-2"},[e("div",{staticClass:"letter-spacing w86"},[e("span",{staticClass:"text-opacity"},[t._v("期号")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.lottery_id)}})]),t._v(" "),e("div",{staticClass:"w86"},[e("span",{staticClass:"text-opacity"},[t._v("中奖")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.reward_bets)}}),t._v("注")])]),t._v(" "),e("div",{staticClass:"list-md list-md-3"},[e("div",{staticClass:"letter-spacing w86"},[e("span",{staticClass:"text-opacity"},[t._v("奖池")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.jackpot)}}),t._v("元")]),t._v(" "),n.win?e("div",{staticClass:"winning w86"},[e("span",[t._v("中奖")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.my_reward)}}),t._v("元")]):e("div",{staticClass:"w86"},[e("span",{staticClass:"text-opacity"},[t._v("单注")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.average_reward)}}),t._v("元")])]),t._v(" "),e("span",{staticClass:"lotteryIconText font-regular",class:{hide:!n.win}},[t._v("中奖")])])}))],2),t._v(" "),t.gotData?e("div",{staticClass:"text-center",domProps:{textContent:t._s("")},slot:"infinite"}):t._e(),t._v(" "),t.noMoreData?e("div",{staticClass:"text-center",domProps:{textContent:t._s("没有更多数据")},slot:"infinite"}):t._e()])],1),t._v(" "),e("footer",{staticClass:"lottery-index-footer"},[e("a",{staticClass:"lottery-index-btn obtain-chip font-regular",on:{click:function(n){t.$router.forward("/lottery/getChips")}}},[t._v("获取筹码")]),t._v(" "),e("a",{staticClass:"lottery-index-btn immediately-bet font-regular",on:{click:function(n){t.$router.forward("/lottery/betting")}}},[t._v("立即下注")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=lottery.5f38aca11a6fcccb4311.js.map