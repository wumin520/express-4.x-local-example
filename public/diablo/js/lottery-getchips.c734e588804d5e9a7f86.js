webpackJsonp([48],{368:function(t,i,e){e(619);var n=e(0)(e(494),e(727),"data-v-0be0852d",null);t.exports=n.exports},494:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=[4,5,6];i.default={data:function(){return{today_chips:0,available_chips:0,is_old:1,create_day:20170731,hide_withdraw_flag:!1,completed:[],chipsData:[{iconOn:"//qianka.b0.upaiyun.com/images/c2a93bb6f129bcb21eaa6d155968477c.png",iconOff:"//qianka.b0.upaiyun.com/images/b8ea33bbc850b39051b0184b5fc0b8e5.png",title:["完成4个试玩任务"],offNum:8,chips:["1"],subtitle:"新用户专享",linkTo:"/tasks",footerText:"4个试玩任务均需在加入钱咖的当日完成"},{iconOn:"//qianka.b0.upaiyun.com/images/b779bb6bdd3e6e4583752ec8831ee34b.png",iconOff:"//qianka.b0.upaiyun.com/images/b779bb6bdd3e6e4583752ec8831ee34b.png",title:["完成一个办卡任务"],offNum:9,chips:["1"],subtitle:"单日可申请多种卡片",linkTo:"/credit/list",footerText:"奖励将在比对完成后发放"},{iconOn:"//qianka.b0.upaiyun.com/images/2cea4c22fca5e33886046fe6ddadf4c4.png",iconOff:"//qianka.b0.upaiyun.com/images/da07e79bb2aeb78229630fbcecb83222.png",title:["完成一个注册任务"],offNum:1,chips:["1"],subtitle:"单日可重复",linkTo:"/gaoe",footerText:"奖励将在比对完成或申诉成功后发放"},{iconOn:"//qianka.b0.upaiyun.com/images/de0f89d8908e4e73026cdf418fd66e75.png",iconOff:"//qianka.b0.upaiyun.com/images/92db0d3c22fe734ebaa1f028ff5a448e.png",title:["当日收徒1人"],offNum:2,chips:["1"],subtitle:"每日0点重置",linkTo:"/apprentice",footerText:"每个iOS徒弟需在加入钱咖当日完成2个试玩任务"},{iconOn:"//qianka.b0.upaiyun.com/images/766e4dec25b72904f3aabb841bf564e7.png",iconOff:"//qianka.b0.upaiyun.com/images/afa6bfa4fe97d568d3f01906b247611b.png",title:["当日收徒3人"],offNum:3,chips:["3"],subtitle:"每日0点重置",linkTo:"/apprentice",footerText:"每个iOS徒弟需在加入钱咖当日完成2个试玩任务"},{iconOn:"//qianka.b0.upaiyun.com/images/7002381c931ce2383ec64d0f70681c18.png",iconOff:"//qianka.b0.upaiyun.com/images/ef4116675dd7fe808723912cb3d9cb3e.png",title:["提现 30元","提现 50元","提现 100元"],offNum:n[0],chips:["1","2","5"],subtitle:"每日审核通过的首笔提现",linkTo:"/withdraw",footerText:"奖励将在提现审核通过后发放"}]}},mounted:function(){var t=this;$api.lotteryGetChips().then(function(t){return t.data&&t.data.payload}).then(function(i){t.today_chips=i.today,t.is_old=i.is_old,t.create_day=i.create_day,t.available_chips=i.available_chips,t.completed=t.processArray(i.completed_obtain)})},methods:{back:function(){var t=_.get(this.$route.query,"backroute","/lottery");$router.back({path:t})},processArray:function(t){_.pull(t,1),_.pull(t,9),this.is_old&&_.pull(t,8);var i=_.filter(t,function(t){return t<n[0]}),e=[];return t.indexOf(7)>-1?this.hide_withdraw_flag=!0:(t.indexOf(n[0])>-1?e.push(t.indexOf(n[0])):t.indexOf(n[1])>-1?e.push(t.indexOf(n[1])):t.indexOf(n[2])>-1&&e.push(t.indexOf(n[2])),e.length&&i.splice(_.min(e),0,n[0])),t.indexOf(8)>-1&&i.push(8),i},goToDetail:function(){$router.forward("/lottery/chipsDetail/canUse")},showItem:function(t){return(t!==n[0]||!this.hide_withdraw_flag)&&((!this.is_old||8!==t)&&this.completed.indexOf(t)<=-1)},getOffItem:function(t){return _.find(this.chipsData,{offNum:t})},goTo:function(t){$router.forward({path:t,query:{backroute:"/lottery/getChips"}})}}}},541:function(t,i,e){i=t.exports=e(346)(),i.push([t.i,'/* thin border */\n.get-chips-page[data-v-0be0852d] {\n  padding-top: 44px;\n}\n.get-chips-page .divider[data-v-0be0852d] {\n    height: 10px;\n}\n.get-chips-page .heading-banner[data-v-0be0852d] {\n    color: white;\n    height: 100px;\n    overflow: hidden;\n    background: linear-gradient(-90deg, #6831B7 0%, #8D55D2 100%);\n}\n.get-chips-page .heading-banner div[data-v-0be0852d] {\n      width: 50%;\n      float: left;\n      margin-top: 26px;\n      text-align: center;\n}\n.get-chips-page .heading-banner div span[data-v-0be0852d] {\n        display: block;\n}\n.get-chips-page .heading-banner div span.text[data-v-0be0852d] {\n          font-size: 12px;\n          line-height: 17px;\n}\n.get-chips-page .heading-banner div span.amount[data-v-0be0852d] {\n          font-size: 18px;\n          line-height: 19px;\n          margin-top: 6px;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.get-chips-page .get-chips-list .list[data-v-0be0852d] {\n    margin-bottom: 10px;\n}\n.get-chips-page .get-chips-list .list-item[data-v-0be0852d] {\n    padding: 0;\n    position: relative;\n}\n.get-chips-page .get-chips-list .list-item .list-item-inner[data-v-0be0852d] {\n      padding: 16px 0 0;\n      overflow: hidden;\n      padding-right: 16px;\n}\n.get-chips-page .get-chips-list .list-item .list-item-extra-content[data-v-0be0852d] {\n      padding: 10px 0;\n}\n.get-chips-page .get-chips-list .list-item .assertive[data-v-0be0852d] {\n      color: #EC4949 !important;\n}\n.get-chips-page .get-chips-list .list-item .list-item-extra-content[data-v-0be0852d] {\n      font-size: 12px;\n      line-height: 22px;\n      color: #888888;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container[data-v-0be0852d],\n    .get-chips-page .get-chips-list .list-item .right-container[data-v-0be0852d] {\n      float: left;\n}\n.get-chips-page .get-chips-list .list-item .right-container[data-v-0be0852d] {\n      width: 291px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box[data-v-0be0852d] {\n        overflow: hidden;\n        padding-bottom: 14px;\n        padding-left: 10px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num[data-v-0be0852d],\n        .get-chips-page .get-chips-list .list-item .right-container .info-box .main-content[data-v-0be0852d],\n        .get-chips-page .get-chips-list .list-item .right-container .info-box .vertical-separator[data-v-0be0852d] {\n          float: left;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .vertical-separator[data-v-0be0852d] {\n          margin: 0 20px;\n          height: 42px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .chip[data-v-0be0852d] {\n          display: block;\n          margin-top: 5px;\n          font-size: 12px;\n          line-height: 17px;\n          color: #AAAAAA;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount-and-plus[data-v-0be0852d] {\n          overflow: hidden;\n          margin-top: 2px;\n          color: #EA5A49;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .plus[data-v-0be0852d], .get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount[data-v-0be0852d] {\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n          display: block;\n          float: right !important;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .plus[data-v-0be0852d] {\n          font-size: 11px;\n          line-height: 14px;\n          width: 11px;\n          text-align: center;\n          margin-top: 4px;\n          margin-right: 2px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount[data-v-0be0852d] {\n          font-size: 20px;\n          line-height: 20px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content[data-v-0be0852d] {\n          margin-top: 2px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content .title[data-v-0be0852d] {\n            font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n            font-weight: 400;\n            font-size: 14px;\n            color: #484746;\n            line-height: 20px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content div[data-v-0be0852d]:first-child {\n            margin-bottom: 5px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content .sub-title[data-v-0be0852d] {\n            font-size: 12px;\n            line-height: 17px;\n            color: #B5B5B5;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content[data-v-0be0852d] {\n          float: right;\n          display: none;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content .go-btn[data-v-0be0852d] {\n            color: #EA5A49;\n            border: 1px solid #EA5A49;\n            border-radius: 2px;\n            background-color: white;\n            width: 55px;\n            height: 26px;\n            padding: 4px 8px;\n            font-size: 12px;\n            line-height: 17px;\n            margin-top: 8px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content .stamp-image[data-v-0be0852d] {\n            position: absolute;\n            top: 7px;\n            right: 16px;\n            background: url(//qianka.b0.upaiyun.com/images/03b41c338d30136fd6d872e5c4157c19.png) center center no-repeat;\n            width: 65px;\n            height: 65px;\n            background-size: 100% 100%;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .hairline-stand-alone.half[data-v-0be0852d] {\n          width: 50%;\n          margin: 10px 0;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box:first-child .hairline-stand-alone.half[data-v-0be0852d] {\n          display: none;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box:first-child .side-content[data-v-0be0852d] {\n          display: block;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container[data-v-0be0852d] {\n      width: 52px;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container .list-image[data-v-0be0852d] {\n        width: 42px;\n        height: 42px;\n        margin-right: 12px;\n        display: block;\n}\n.get-chips-page .get-chips-list .list-item .list-item-footer[data-v-0be0852d] {\n      padding: 10px 0;\n      padding-right: 16px;\n      font-size: 12px;\n      line-height: 17px;\n      height: 40px;\n      color: #B5B5B5;\n}\n.get-chips-page .get-chips-list .list-item .list-item-footer .exclamation-mark[data-v-0be0852d] {\n        margin-left: 10px;\n        width: 11px;\n        height: 11px;\n        display: inline-block;\n        border: 1px solid #C5C4C3;\n        font-size: 8px;\n        line-height: 10px;\n        border-radius: 100px;\n        vertical-align: middle;\n        text-align: center;\n}\n.get-chips-page .get-chips-list .done-list .list-item *[data-v-0be0852d] {\n    color: #C5C4C3 !important;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/lottery/GetChips.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,kBAAkB;CACnB;AACD;IACI,aAAa;CAChB;AACD;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;IACjB,8DAA8D;CACjE;AACD;MACM,WAAW;MACX,YAAY;MACZ,iBAAiB;MACjB,mBAAmB;CACxB;AACD;QACQ,eAAe;CACtB;AACD;UACU,gBAAgB;UAChB,kBAAkB;CAC3B;AACD;UACU,gBAAgB;UAChB,kBAAkB;UAClB,gBAAgB;UAChB,uGAAuG;UACvG,iBAAiB;CAC1B;AACD;IACI,oBAAoB;CACvB;AACD;IACI,WAAW;IACX,mBAAmB;CACtB;AACD;MACM,kBAAkB;MAClB,iBAAiB;MACjB,oBAAoB;CACzB;AACD;MACM,gBAAgB;CACrB;AACD;MACM,0BAA0B;CAC/B;AACD;MACM,gBAAgB;MAChB,kBAAkB;MAClB,eAAe;CACpB;AACD;;MAEM,YAAY;CACjB;AACD;MACM,aAAa;CAClB;AACD;QACQ,iBAAiB;QACjB,qBAAqB;QACrB,mBAAmB;CAC1B;AACD;;;UAGU,YAAY;CACrB;AACD;UACU,eAAe;UACf,aAAa;CACtB;AACD;UACU,eAAe;UACf,gBAAgB;UAChB,gBAAgB;UAChB,kBAAkB;UAClB,eAAe;CACxB;AACD;UACU,iBAAiB;UACjB,gBAAgB;UAChB,eAAe;CACxB;AACD;UACU,uGAAuG;UACvG,iBAAiB;UACjB,eAAe;UACf,wBAAwB;CACjC;AACD;UACU,gBAAgB;UAChB,kBAAkB;UAClB,YAAY;UACZ,mBAAmB;UACnB,gBAAgB;UAChB,kBAAkB;CAC3B;AACD;UACU,gBAAgB;UAChB,kBAAkB;CAC3B;AACD;UACU,gBAAgB;CACzB;AACD;YACY,uGAAuG;YACvG,iBAAiB;YACjB,gBAAgB;YAChB,eAAe;YACf,kBAAkB;CAC7B;AACD;YACY,mBAAmB;CAC9B;AACD;YACY,gBAAgB;YAChB,kBAAkB;YAClB,eAAe;CAC1B;AACD;UACU,aAAa;UACb,cAAc;CACvB;AACD;YACY,eAAe;YACf,0BAA0B;YAC1B,mBAAmB;YACnB,wBAAwB;YACxB,YAAY;YACZ,aAAa;YACb,iBAAiB;YACjB,gBAAgB;YAChB,kBAAkB;YAClB,gBAAgB;CAC3B;AACD;YACY,mBAAmB;YACnB,SAAS;YACT,YAAY;YACZ,6GAA6G;YAC7G,YAAY;YACZ,aAAa;YACb,2BAA2B;CACtC;AACD;UACU,WAAW;UACX,eAAe;CACxB;AACD;UACU,cAAc;CACvB;AACD;UACU,eAAe;CACxB;AACD;MACM,YAAY;CACjB;AACD;QACQ,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,eAAe;CACtB;AACD;MACM,gBAAgB;MAChB,oBAAoB;MACpB,gBAAgB;MAChB,kBAAkB;MAClB,aAAa;MACb,eAAe;CACpB;AACD;QACQ,kBAAkB;QAClB,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,0BAA0B;QAC1B,eAAe;QACf,kBAAkB;QAClB,qBAAqB;QACrB,uBAAuB;QACvB,mBAAmB;CAC1B;AACD;IACI,0BAA0B;CAC7B",file:"GetChips.vue",sourcesContent:['/* thin border */\n.get-chips-page[data-v-0be0852d] {\n  padding-top: 44px;\n}\n.get-chips-page .divider[data-v-0be0852d] {\n    height: 10px;\n}\n.get-chips-page .heading-banner[data-v-0be0852d] {\n    color: white;\n    height: 100px;\n    overflow: hidden;\n    background: linear-gradient(-90deg, #6831B7 0%, #8D55D2 100%);\n}\n.get-chips-page .heading-banner div[data-v-0be0852d] {\n      width: 50%;\n      float: left;\n      margin-top: 26px;\n      text-align: center;\n}\n.get-chips-page .heading-banner div span[data-v-0be0852d] {\n        display: block;\n}\n.get-chips-page .heading-banner div span.text[data-v-0be0852d] {\n          font-size: 12px;\n          line-height: 17px;\n}\n.get-chips-page .heading-banner div span.amount[data-v-0be0852d] {\n          font-size: 18px;\n          line-height: 19px;\n          margin-top: 6px;\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n}\n.get-chips-page .get-chips-list .list[data-v-0be0852d] {\n    margin-bottom: 10px;\n}\n.get-chips-page .get-chips-list .list-item[data-v-0be0852d] {\n    padding: 0;\n    position: relative;\n}\n.get-chips-page .get-chips-list .list-item .list-item-inner[data-v-0be0852d] {\n      padding: 16px 0 0;\n      overflow: hidden;\n      padding-right: 16px;\n}\n.get-chips-page .get-chips-list .list-item .list-item-extra-content[data-v-0be0852d] {\n      padding: 10px 0;\n}\n.get-chips-page .get-chips-list .list-item .assertive[data-v-0be0852d] {\n      color: #EC4949 !important;\n}\n.get-chips-page .get-chips-list .list-item .list-item-extra-content[data-v-0be0852d] {\n      font-size: 12px;\n      line-height: 22px;\n      color: #888888;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container[data-v-0be0852d],\n    .get-chips-page .get-chips-list .list-item .right-container[data-v-0be0852d] {\n      float: left;\n}\n.get-chips-page .get-chips-list .list-item .right-container[data-v-0be0852d] {\n      width: 291px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box[data-v-0be0852d] {\n        overflow: hidden;\n        padding-bottom: 14px;\n        padding-left: 10px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num[data-v-0be0852d],\n        .get-chips-page .get-chips-list .list-item .right-container .info-box .main-content[data-v-0be0852d],\n        .get-chips-page .get-chips-list .list-item .right-container .info-box .vertical-separator[data-v-0be0852d] {\n          float: left;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .vertical-separator[data-v-0be0852d] {\n          margin: 0 20px;\n          height: 42px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .chip[data-v-0be0852d] {\n          display: block;\n          margin-top: 5px;\n          font-size: 12px;\n          line-height: 17px;\n          color: #AAAAAA;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount-and-plus[data-v-0be0852d] {\n          overflow: hidden;\n          margin-top: 2px;\n          color: #EA5A49;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .plus[data-v-0be0852d], .get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount[data-v-0be0852d] {\n          font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n          font-weight: 400;\n          display: block;\n          float: right !important;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .plus[data-v-0be0852d] {\n          font-size: 11px;\n          line-height: 14px;\n          width: 11px;\n          text-align: center;\n          margin-top: 4px;\n          margin-right: 2px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .num .amount[data-v-0be0852d] {\n          font-size: 20px;\n          line-height: 20px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content[data-v-0be0852d] {\n          margin-top: 2px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content .title[data-v-0be0852d] {\n            font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n            font-weight: 400;\n            font-size: 14px;\n            color: #484746;\n            line-height: 20px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content div[data-v-0be0852d]:first-child {\n            margin-bottom: 5px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .main-content .sub-title[data-v-0be0852d] {\n            font-size: 12px;\n            line-height: 17px;\n            color: #B5B5B5;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content[data-v-0be0852d] {\n          float: right;\n          display: none;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content .go-btn[data-v-0be0852d] {\n            color: #EA5A49;\n            border: 1px solid #EA5A49;\n            border-radius: 2px;\n            background-color: white;\n            width: 55px;\n            height: 26px;\n            padding: 4px 8px;\n            font-size: 12px;\n            line-height: 17px;\n            margin-top: 8px;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .side-content .stamp-image[data-v-0be0852d] {\n            position: absolute;\n            top: 7px;\n            right: 16px;\n            background: url(//qianka.b0.upaiyun.com/images/03b41c338d30136fd6d872e5c4157c19.png) center center no-repeat;\n            width: 65px;\n            height: 65px;\n            background-size: 100% 100%;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box .hairline-stand-alone.half[data-v-0be0852d] {\n          width: 50%;\n          margin: 10px 0;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box:first-child .hairline-stand-alone.half[data-v-0be0852d] {\n          display: none;\n}\n.get-chips-page .get-chips-list .list-item .right-container .info-box:first-child .side-content[data-v-0be0852d] {\n          display: block;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container[data-v-0be0852d] {\n      width: 52px;\n}\n.get-chips-page .get-chips-list .list-item .list-image-container .list-image[data-v-0be0852d] {\n        width: 42px;\n        height: 42px;\n        margin-right: 12px;\n        display: block;\n}\n.get-chips-page .get-chips-list .list-item .list-item-footer[data-v-0be0852d] {\n      padding: 10px 0;\n      padding-right: 16px;\n      font-size: 12px;\n      line-height: 17px;\n      height: 40px;\n      color: #B5B5B5;\n}\n.get-chips-page .get-chips-list .list-item .list-item-footer .exclamation-mark[data-v-0be0852d] {\n        margin-left: 10px;\n        width: 11px;\n        height: 11px;\n        display: inline-block;\n        border: 1px solid #C5C4C3;\n        font-size: 8px;\n        line-height: 10px;\n        border-radius: 100px;\n        vertical-align: middle;\n        text-align: center;\n}\n.get-chips-page .get-chips-list .done-list .list-item *[data-v-0be0852d] {\n    color: #C5C4C3 !important;\n}\n'],sourceRoot:""}])},619:function(t,i,e){var n=e(541);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(347)("18c0e47d",n,!0)},727:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"nav",rawName:"v-nav",value:{title:"每日筹码获取",showBackButton:!0,showMenuButton:!0,menuButtonText:"明细",onBackButtonClick:t.back,onMenuButtonClick:t.goToDetail},expression:"{title: '每日筹码获取', showBackButton: true, showMenuButton: true, menuButtonText: '明细', onBackButtonClick: back, onMenuButtonClick: goToDetail}"}],staticClass:"page"},[e("div",{staticClass:"page-content get-chips-page"},[e("div",{staticClass:"heading-banner"},[e("div",[e("span",{staticClass:"text"},[t._v("今日获取(个)")]),t._v(" "),e("span",{staticClass:"amount",domProps:{textContent:t._s(t.today_chips)}})]),t._v(" "),e("div",[e("span",{staticClass:"text"},[t._v("当前可用(个)")]),t._v(" "),e("span",{staticClass:"amount",domProps:{textContent:t._s(t.available_chips)}})])]),t._v(" "),e("div",{staticClass:"get-chips-list"},[e("div",{staticClass:"divider"}),t._v(" "),t._l(t.chipsData,function(i,n){return t.showItem(i.offNum)?e("list",{key:n,staticClass:"list list-ios getchips-list"},[e("item",{staticClass:"list-item hl-item-borderless",attrs:{thin:""}},[e("div",{staticClass:"list-item-inner"},[e("div",{staticClass:"list-image-container"},[e("img",{staticClass:"list-image",attrs:{src:i.iconOn,alt:""}})]),t._v(" "),e("div",{staticClass:"right-container"},[t._l(i.title,function(n,a){return e("div",{key:a,staticClass:"info-box"},[e("div",{staticClass:"hairline-stand-alone half"}),t._v(" "),e("div",{staticClass:"num"},[e("div",{staticClass:"amount-and-plus"},[e("span",{staticClass:"amount",domProps:{textContent:t._s(i.chips[a])}}),t._v(" "),e("span",{staticClass:"plus"},[t._v("+")])]),t._v(" "),e("div",{staticClass:"chip"},[e("span",[t._v("筹码")])])]),t._v(" "),e("div",{staticClass:"vertical-separator"},[e("div",{staticClass:"hairline-stand-alone vertical"})]),t._v(" "),e("div",{staticClass:"main-content"},[e("div",[e("span",{staticClass:"title",domProps:{textContent:t._s(n)}})]),t._v(" "),e("div",[e("span",{staticClass:"sub-title",class:{assertive:t.failed},domProps:{textContent:t._s(i.subtitle)}})])]),t._v(" "),e("div",{staticClass:"side-content"},[e("button",{staticClass:"go-btn",attrs:{type:"button",name:"button"},on:{click:function(e){t.goTo(i.linkTo)}}},[t._v("前往")])])])}),t._v(" "),e("div",{staticClass:"hairline-stand-alone shift-right"}),t._v(" "),e("div",{staticClass:"list-item-footer"},[e("span",{staticClass:"exclamation-mark"},[t._v("!")]),t._v(" "),e("span",{domProps:{textContent:t._s(i.footerText)}})])],2)])])],1):t._e()}),t._v(" "),t._l(t.completed,function(i){return e("list",{key:i+1,staticClass:"list list-ios getchips-list done-list"},[e("item",{staticClass:"list-item hl-item-borderless",attrs:{thin:""}},[e("div",{staticClass:"list-item-inner"},[e("div",{staticClass:"list-image-container"},[e("img",{staticClass:"list-image",attrs:{src:t.getOffItem(i).iconOff,alt:""}})]),t._v(" "),e("div",{staticClass:"right-container"},[t._l(t.getOffItem(i).title,function(n,a){return e("div",{key:a,staticClass:"info-box"},[e("div",{staticClass:"hairline-stand-alone half"}),t._v(" "),e("div",{staticClass:"num"},[e("div",{staticClass:"amount-and-plus"},[e("span",{staticClass:"amount",domProps:{textContent:t._s(t.getOffItem(i).chips[a])}}),t._v(" "),e("span",{staticClass:"plus"},[t._v("+")])]),t._v(" "),e("div",{staticClass:"chip"},[e("span",[t._v("筹码")])])]),t._v(" "),e("div",{staticClass:"vertical-separator"},[e("div",{staticClass:"hairline-stand-alone vertical"})]),t._v(" "),e("div",{staticClass:"main-content"},[e("div",[e("span",{staticClass:"title",domProps:{textContent:t._s(n)}})]),t._v(" "),e("div",[e("span",{staticClass:"sub-title",class:{assertive:t.failed},domProps:{textContent:t._s(t.getOffItem(i).subtitle)}})])]),t._v(" "),e("div",{staticClass:"side-content"},[e("div",{staticClass:"stamp-image"})])])}),t._v(" "),e("div",{staticClass:"hairline-stand-alone shift-right"}),t._v(" "),e("div",{staticClass:"list-item-footer"},[e("span",{staticClass:"exclamation-mark"},[t._v("!")]),t._v(" "),e("span",{domProps:{textContent:t._s(t.getOffItem(i).footerText)}})])],2)])])],1)}),t._v(" "),e("div",{staticClass:"divider"})],2)])])},staticRenderFns:[]}}});
//# sourceMappingURL=lottery-getchips.c734e588804d5e9a7f86.js.map