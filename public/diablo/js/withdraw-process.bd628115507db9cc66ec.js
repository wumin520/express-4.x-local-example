webpackJsonp([6],{397:function(t,n,e){e(678);var a=e(0)(e(528),e(793),null,null);t.exports=a.exports},523:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(55);e.n(a);n.default={props:{infinite:Function,list:Array},filters:{objectTypeFilter:function(t){switch(t){case 2001:return"手机充值";case 2002:return"支付宝提现";case 2003:return"微信提现";case 2004:return"夺宝币充值";default:return"集分宝兑换"}},unitFilter:function(t){return t?"元":"个"}},methods:{popupWithdrawFailBox:function(t){if("审核失败"===t.process_status){$popup.fromTemplate(a.popup_withdraw_fail.template(t.error_string),a.popup_withdraw_fail.options).show()}}}}},524:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{links:Array,numbered:{type:Boolean,default:!1},barWidth:{type:Number,required:!0},bgColor:{type:String,default:"#f5f5f5"},onInit:Function,onTabClick:Function,useContentSlot:{type:String,default:"false"}},methods:{onClick:function(t){this.onTabClick&&this.onTabClick(t)}}}},528:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),i=e.n(a),r=e(20),o=e.n(r),s=e(1),A=e(723),l=e.n(A),b=e(724),c=e.n(b);n.default={components:{AnimateHeader:o.a,TabLayout:c.a,ProcessList:l.a},data:function(){return{kabiList:[],jfbList:[],noMoreKabi:!1,noMoreJfb:!1,kabiOffset:0,jfbOffset:0,barWidth:375,activeIndex:0,tabLinks:[{to:{path:"/withdraw/process/kabi"},text:"咖币"},{to:{path:"/withdraw/process/jifenbao"},text:"集分宝"}]}},mounted:function(){this.fetch(),this.activeIndex=_.indexOf(["kabi","jifenbao"],this.$route.params.type)||0},methods:i()({},e.i(s.c)("withdraw",["WithdrawApplyListAll","withdrawApplyList"]),{fetch:function(){var t=this;this.WithdrawApplyListAll().then(function(t){return t.data&&t.data.payload}).then(function(n){var e=n.kabi_list,a=n.jfb_list;t.kabiList=t.kabiList.concat(e),t.kabiOffset=e.length>0&&e[e.length-1].id,t.noMoreKabi=t._numberList(e)<10,t.jfbList=t.jfbList.concat(a),t.jfbOffset=a.length>0&&a[a.length-1].id,t.noMoreJfb=t._numberList(a)<10})},onTabClick:function(t){this.activeIndex=t},infiniteKabi:function(t){if(this.noMoreKabi)return void t();this._withdrawApplyList({type:1,offset:this.kabiOffset,limit:10}).then(function(n){setTimeout(function(){t()},100)})},infiniteJfb:function(t){if(this.noMoreJfb)return void t();this._withdrawApplyList({type:2,offset:this.jfbOffset,limit:10}).then(function(n){setTimeout(function(){t()},100)})},_withdrawApplyList:function(t){var n=this;return this.withdrawApplyList(t).then(function(t){return t.data&&t.data.payload}).then(function(e){1===t.type?(n.kabiList=n.kabiList.concat(e),n.kabiOffset=e.length>0&&e[e.length-1].id,n.noMoreKabi=n._numberList(e)<10):(n.jfbList=n.jfbList.concat(e),n.jfbOffset=e.length>0&&e[e.length-1].id,n.noMoreJfb=n._numberList(e)<10)})},_numberList:function(t){return t.length},back:function(){$router.back("/user")}})}},598:function(t,n,e){n=t.exports=e(346)(),n.push([t.i,'/* thin border */\n.img-wrap[data-v-93f7b6b8] {\n  width: 360px;\n  height: 277px;\n  position: absolute;\n  margin-top: 30px;\n  left: 50%;\n  margin-left: -180px;\n}\n.img-wrap .no-data-img[data-v-93f7b6b8] {\n    width: 100%;\n    height: auto;\n}\n.scroller[data-v-93f7b6b8] {\n  margin-top: 136px;\n}\n.scroller .f-l[data-v-93f7b6b8] {\n    float: left;\n}\n.scroller .f-r[data-v-93f7b6b8] {\n    float: right;\n}\n.scroller .clearfix[data-v-93f7b6b8]::before,\n  .scroller .clearfix[data-v-93f7b6b8]::after {\n    display: table;\n    content: \'\';\n}\n.scroller .clearfix[data-v-93f7b6b8]::after {\n    clear: both;\n}\n.scroller .ceb[data-v-93f7b6b8] {\n    color: #ef502b;\n}\n.scroller .withdraw-items[data-v-93f7b6b8] {\n    padding: 0 20px;\n    margin-bottom: 40px;\n}\n.scroller .withdraw-items .l-wrap .type-img[data-v-93f7b6b8] {\n      width: 32px;\n      height: 34px;\n      margin-top: 4px;\n}\n.scroller .withdraw-items .m-wrap[data-v-93f7b6b8] {\n      text-align: left;\n}\n.scroller .withdraw-items .m-wrap .desc[data-v-93f7b6b8] {\n        font-size: 14px;\n        color: #484746;\n        margin-bottom: 5px;\n}\n.scroller .withdraw-items .m-wrap .date[data-v-93f7b6b8] {\n        font-family: "PingFangSC-Light", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n        font-size: 12px;\n        color: #B5B5B5;\n        letter-spacing: 0;\n        line-height: 17px;\n}\n.scroller .withdraw-items .r-wrap[data-v-93f7b6b8] {\n      font-size: 13px;\n      color: #EF4F2A;\n      letter-spacing: 0;\n      line-height: 42px;\n      font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.scroller .withdraw-items .c0[data-v-93f7b6b8] {\n      color: #ef502b;\n}\n.scroller .withdraw-items .c0.btn[data-v-93f7b6b8] {\n      height: 30px;\n      border-radius: 2px;\n      text-decoration: underline;\n      line-height: 30px;\n      margin-top: 6px;\n      font-size: 12px;\n}\n.scroller .withdraw-items .c42[data-v-93f7b6b8] {\n      color: #4A90E2;\n}\n.scroller .withdraw-items .c49[data-v-93f7b6b8] {\n      color: #3A3A3A;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/withdraw/ProcessList.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,iBAAiB;EACjB,UAAU;EACV,oBAAoB;CACrB;AACD;IACI,YAAY;IACZ,aAAa;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;IACI,YAAY;CACf;AACD;IACI,aAAa;CAChB;AACD;;IAEI,eAAe;IACf,YAAY;CACf;AACD;IACI,YAAY;CACf;AACD;IACI,eAAe;CAClB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;MACM,YAAY;MACZ,aAAa;MACb,gBAAgB;CACrB;AACD;MACM,iBAAiB;CACtB;AACD;QACQ,gBAAgB;QAChB,eAAe;QACf,mBAAmB;CAC1B;AACD;QACQ,qGAAqG;QACrG,gBAAgB;QAChB,eAAe;QACf,kBAAkB;QAClB,kBAAkB;CACzB;AACD;MACM,gBAAgB;MAChB,eAAe;MACf,kBAAkB;MAClB,kBAAkB;MAClB,wGAAwG;CAC7G;AACD;MACM,eAAe;CACpB;AACD;MACM,aAAa;MACb,mBAAmB;MACnB,2BAA2B;MAC3B,kBAAkB;MAClB,gBAAgB;MAChB,gBAAgB;CACrB;AACD;MACM,eAAe;CACpB;AACD;MACM,eAAe;CACpB",file:"ProcessList.vue",sourcesContent:['/* thin border */\n.img-wrap[data-v-93f7b6b8] {\n  width: 360px;\n  height: 277px;\n  position: absolute;\n  margin-top: 30px;\n  left: 50%;\n  margin-left: -180px;\n}\n.img-wrap .no-data-img[data-v-93f7b6b8] {\n    width: 100%;\n    height: auto;\n}\n.scroller[data-v-93f7b6b8] {\n  margin-top: 136px;\n}\n.scroller .f-l[data-v-93f7b6b8] {\n    float: left;\n}\n.scroller .f-r[data-v-93f7b6b8] {\n    float: right;\n}\n.scroller .clearfix[data-v-93f7b6b8]::before,\n  .scroller .clearfix[data-v-93f7b6b8]::after {\n    display: table;\n    content: \'\';\n}\n.scroller .clearfix[data-v-93f7b6b8]::after {\n    clear: both;\n}\n.scroller .ceb[data-v-93f7b6b8] {\n    color: #ef502b;\n}\n.scroller .withdraw-items[data-v-93f7b6b8] {\n    padding: 0 20px;\n    margin-bottom: 40px;\n}\n.scroller .withdraw-items .l-wrap .type-img[data-v-93f7b6b8] {\n      width: 32px;\n      height: 34px;\n      margin-top: 4px;\n}\n.scroller .withdraw-items .m-wrap[data-v-93f7b6b8] {\n      text-align: left;\n}\n.scroller .withdraw-items .m-wrap .desc[data-v-93f7b6b8] {\n        font-size: 14px;\n        color: #484746;\n        margin-bottom: 5px;\n}\n.scroller .withdraw-items .m-wrap .date[data-v-93f7b6b8] {\n        font-family: "PingFangSC-Light", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n        font-size: 12px;\n        color: #B5B5B5;\n        letter-spacing: 0;\n        line-height: 17px;\n}\n.scroller .withdraw-items .r-wrap[data-v-93f7b6b8] {\n      font-size: 13px;\n      color: #EF4F2A;\n      letter-spacing: 0;\n      line-height: 42px;\n      font-family: "PingFangSC-Semibold", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n}\n.scroller .withdraw-items .c0[data-v-93f7b6b8] {\n      color: #ef502b;\n}\n.scroller .withdraw-items .c0.btn[data-v-93f7b6b8] {\n      height: 30px;\n      border-radius: 2px;\n      text-decoration: underline;\n      line-height: 30px;\n      margin-top: 6px;\n      font-size: 12px;\n}\n.scroller .withdraw-items .c42[data-v-93f7b6b8] {\n      color: #4A90E2;\n}\n.scroller .withdraw-items .c49[data-v-93f7b6b8] {\n      color: #3A3A3A;\n}\n'],sourceRoot:""}])},599:function(t,n,e){n=t.exports=e(346)(),n.push([t.i,"\n.button-bar > .button[data-v-9ed99254]:first-child {\n  border-radius: 0;\n}\n.button-bar > .button[data-v-9ed99254]:last-child {\n  border-radius: 0;\n}\n.layout .unfreeze-bar[data-v-9ed99254] {\n  width: 100%;\n}\n.layout .unfreeze-bar .button-bar[data-v-9ed99254] {\n    margin: 0 auto;\n    min-width: 270px;\n    border-radius: 0 0 0 0;\n    -webkit-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    -webkit-box-flex: 0;\n}\n.layout .unfreeze-bar .button-bar .label-container[data-v-9ed99254] {\n      position: relative;\n}\n.layout .unfreeze-bar .button-bar .label-container.numbered[data-v-9ed99254] {\n        left: 15px;\n}\n.layout .unfreeze-bar .button-bar .label-container.numbered .number[data-v-9ed99254] {\n          display: block;\n}\n.layout .unfreeze-bar .button-bar .label-container .number[data-v-9ed99254] {\n        display: none;\n        border-radius: 15px;\n        position: absolute;\n        padding: 0;\n        width: 15px;\n        vertical-align: bottom;\n        height: 15px;\n        top: 2px;\n        right: 100%;\n        margin-right: 5px;\n        border: 1px solid;\n}\n.layout .unfreeze-bar .button-bar .label-container .number span[data-v-9ed99254] {\n          position: absolute;\n          top: -14px;\n          width: 100%;\n          left: 0;\n          text-align: center;\n}\n.layout .unfreeze-bar .button-bar .button[data-v-9ed99254] {\n      height: 46px;\n      min-height: 46px;\n      line-height: 46px;\n      font-size: 13px;\n      color: #888888;\n      position: relative;\n      background-color: #f0f0f0;\n}\n.layout .unfreeze-bar .button-bar .button.router-link-active[data-v-9ed99254] {\n        background-color: #FFF;\n        color: #3A3A3A;\n}\n","",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/withdraw/TabLayout.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;QACZ,YAAY;YACR,QAAQ;IAChB,oBAAoB;CACvB;AACD;MACM,mBAAmB;CACxB;AACD;QACQ,WAAW;CAClB;AACD;UACU,eAAe;CACxB;AACD;QACQ,cAAc;QACd,oBAAoB;QACpB,mBAAmB;QACnB,WAAW;QACX,YAAY;QACZ,uBAAuB;QACvB,aAAa;QACb,SAAS;QACT,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;CACzB;AACD;UACU,mBAAmB;UACnB,WAAW;UACX,YAAY;UACZ,QAAQ;UACR,mBAAmB;CAC5B;AACD;MACM,aAAa;MACb,iBAAiB;MACjB,kBAAkB;MAClB,gBAAgB;MAChB,eAAe;MACf,mBAAmB;MACnB,0BAA0B;CAC/B;AACD;QACQ,uBAAuB;QACvB,eAAe;CACtB",file:"TabLayout.vue",sourcesContent:["\n.button-bar > .button[data-v-9ed99254]:first-child {\n  border-radius: 0;\n}\n.button-bar > .button[data-v-9ed99254]:last-child {\n  border-radius: 0;\n}\n.layout .unfreeze-bar[data-v-9ed99254] {\n  width: 100%;\n}\n.layout .unfreeze-bar .button-bar[data-v-9ed99254] {\n    margin: 0 auto;\n    min-width: 270px;\n    border-radius: 0 0 0 0;\n    -webkit-flex: 0;\n        -ms-flex: 0;\n            flex: 0;\n    -webkit-box-flex: 0;\n}\n.layout .unfreeze-bar .button-bar .label-container[data-v-9ed99254] {\n      position: relative;\n}\n.layout .unfreeze-bar .button-bar .label-container.numbered[data-v-9ed99254] {\n        left: 15px;\n}\n.layout .unfreeze-bar .button-bar .label-container.numbered .number[data-v-9ed99254] {\n          display: block;\n}\n.layout .unfreeze-bar .button-bar .label-container .number[data-v-9ed99254] {\n        display: none;\n        border-radius: 15px;\n        position: absolute;\n        padding: 0;\n        width: 15px;\n        vertical-align: bottom;\n        height: 15px;\n        top: 2px;\n        right: 100%;\n        margin-right: 5px;\n        border: 1px solid;\n}\n.layout .unfreeze-bar .button-bar .label-container .number span[data-v-9ed99254] {\n          position: absolute;\n          top: -14px;\n          width: 100%;\n          left: 0;\n          text-align: center;\n}\n.layout .unfreeze-bar .button-bar .button[data-v-9ed99254] {\n      height: 46px;\n      min-height: 46px;\n      line-height: 46px;\n      font-size: 13px;\n      color: #888888;\n      position: relative;\n      background-color: #f0f0f0;\n}\n.layout .unfreeze-bar .button-bar .button.router-link-active[data-v-9ed99254] {\n        background-color: #FFF;\n        color: #3A3A3A;\n}\n"],sourceRoot:""}])},600:function(t,n,e){n=t.exports=e(346)(),n.push([t.i,'/* thin border */\n.page-withdraw-process {\n  background: #fff;\n}\n.page-withdraw-process .withdraw-progress {\n    background: #FFFFFF !important;\n    margin-top: 50px;\n    text-align: center;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-withdraw-process .withdraw-progress .list-wrap {\n      position: relative;\n      height: 100%;\n}\n.page-withdraw-process .withdraw-progress .list-wrap .time-note {\n        background: #FFF8EE;\n        font-size: 12px;\n        color: #3A3A3A;\n        line-height: 40px;\n        margin: 20px 40px 30px;\n        height: 40px;\n}\n.page-withdraw-process .withdraw-progress .list-wrap .time-note .ceb {\n          color: #ef502b;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/withdraw/WithdrawProcess.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,iBAAiB;CAClB;AACD;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,mBAAmB;IACnB,uGAAuG;IACvG,iBAAiB;CACpB;AACD;MACM,mBAAmB;MACnB,aAAa;CAClB;AACD;QACQ,oBAAoB;QACpB,gBAAgB;QAChB,eAAe;QACf,kBAAkB;QAClB,uBAAuB;QACvB,aAAa;CACpB;AACD;UACU,eAAe;CACxB",file:"WithdrawProcess.vue",sourcesContent:['/* thin border */\n.page-withdraw-process {\n  background: #fff;\n}\n.page-withdraw-process .withdraw-progress {\n    background: #FFFFFF !important;\n    margin-top: 50px;\n    text-align: center;\n    font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n    font-weight: 400;\n}\n.page-withdraw-process .withdraw-progress .list-wrap {\n      position: relative;\n      height: 100%;\n}\n.page-withdraw-process .withdraw-progress .list-wrap .time-note {\n        background: #FFF8EE;\n        font-size: 12px;\n        color: #3A3A3A;\n        line-height: 40px;\n        margin: 20px 40px 30px;\n        height: 40px;\n}\n.page-withdraw-process .withdraw-progress .list-wrap .time-note .ceb {\n          color: #ef502b;\n}\n'],sourceRoot:""}])},676:function(t,n,e){var a=e(598);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(347)("0fc17f14",a,!0)},677:function(t,n,e){var a=e(599);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(347)("b0bfeb70",a,!0)},678:function(t,n,e){var a=e(600);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e(347)("451e4b2b",a,!0)},723:function(t,n,e){e(676);var a=e(0)(e(523),e(791),"data-v-93f7b6b8",null);t.exports=a.exports},724:function(t,n,e){e(677);var a=e(0)(e(524),e(792),"data-v-9ed99254",null);t.exports=a.exports},791:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[0==t.list.length?e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"no-data-img",attrs:{src:"//assets.qkcdn.com/images/cdf0ba05cfda6278dfe4e059d5256bed.png"}})]):t._e(),t._v(" "),t.list.length>0?e("scroller",{ref:"withdrawApplyScroller",staticClass:"scroller",attrs:{onInfinite:t.infinite,noDataText:""}},[t._l(t.list,function(n){return e("div",{staticClass:"clearfix withdraw-items"},[e("div",{staticClass:"f-l l-wrap",staticStyle:{display:"none"}},[e("img",{staticClass:"type-img",attrs:{src:"//qianka.b0.upaiyun.com/images/54ce3a54388b0453828b9d550b0e4908.png"}})]),t._v(" "),e("div",{staticClass:"f-l m-wrap"},[e("div",{staticClass:"desc"},[e("span",[t._v(t._s(t._f("objectTypeFilter")(n.object_type)))]),e("span",{staticClass:"c0",domProps:{textContent:t._s(n.price)}}),t._v(t._s(t._f("unitFilter")(n.object_type)))]),t._v(" "),e("div",{staticClass:"date",domProps:{textContent:t._s(n.create_time)}})]),t._v(" "),e("div",{staticClass:"f-r r-wrap",class:{"c0 btn":"审核失败"==n.process_status,c49:"已打款"==n.process_status,c42:"审核中"==n.process_status},domProps:{textContent:t._s(n.process_status)},on:{click:function(e){t.popupWithdrawFailBox(n)}}})])}),t._v(" "),e("div",{staticStyle:{height:"70px"}})],2):t._e()],1)},staticRenderFns:[]}},792:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout",style:{backgroundColor:t.bgColor}},[e("div",{staticClass:"unfreeze-bar bar-subheade"},[e("div",{staticClass:"button-bar",style:{minWidth:t.barWidth+"px"}},t._l(t.links,function(n,a){return e("router-link",{key:a,staticClass:"button font-regular",attrs:{to:n.to},nativeOn:{click:function(n){t.onClick(a)}}},[e("span",{staticClass:"label-container",class:{numbered:t.numbered}},[e("span",{staticClass:"number"},[e("span",{domProps:{textContent:t._s(a+1)}})]),t._v(" "),e("span",{domProps:{textContent:t._s(n.text)}})])])}))]),t._v(" "),"false"==t.useContentSlot?e("router-view"):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},793:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page page-withdraw-process"},[e("AnimateHeader",{attrs:{"bg-color":"#F5F5F5 ","menu-bg-color":"#F0F0F0",color:"#3A3A3A",fill:"#3A3A3A",stroke:"#3A3A3A",title:"提现进度","on-back-button-click":t.back,expanded:!1,animate:!1}}),t._v(" "),e("div",{staticClass:"page-content withdraw-progress"},[e("div",{staticClass:"list-wrap"},[e("tab-layout",{attrs:{links:t.tabLinks,"bar-width":t.barWidth,"bg-color":"#FFF","use-content-slot":"true","on-tab-click":t.onTabClick}}),t._v(" "),e("div",{staticClass:"time-note"},[t._v("最慢48小时内完成审核 "),e("router-link",{staticClass:"ceb",attrs:{to:"/withdraw/arrived-example"}},[t._v("到账示例")])],1),t._v(" "),0==t.activeIndex?e("ProcessList",{attrs:{list:t.kabiList,infinite:t.infiniteKabi}}):t._e(),t._v(" "),1==t.activeIndex?e("ProcessList",{attrs:{list:t.jfbList,infinite:t.infiniteJfb}}):t._e()],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=withdraw-process.bd628115507db9cc66ec.js.map