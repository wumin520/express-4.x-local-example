webpackJsonp([45],{398:function(e,n,t){t(710);var o=t(0)(t(529),t(827),null,null);e.exports=o.exports},529:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(20),i=t.n(o);n.default={components:{AnimateHeader:i.a},methods:{back:function(){$router.back({path:"/help"})},taskAppeal:function(){$router.push("/help/complainSubtask")},hiTaskAppeal:function(){$router.forward({path:"/help/complainHitask"})},rebateAppeal:function(){$router.forward({path:"/help/complainRebate"})},unfreezeAppeal:function(){$router.forward({path:"/help/complainUnfreeze"})}}}},630:function(e,n,t){n=e.exports=t(360)(),n.push([e.i,'/* thin border */\n.self-help {\n  padding-top: 50px;\n  background: #fff !important;\n  font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n  font-weight: 400;\n}\n.self-help .item-choice {\n    height: 22px;\n    line-height: 22px;\n    margin: 30px 0 0 20px;\n    font-size: 16px;\n    color: #484746;\n}\n',"",{version:3,sources:["/Users/wumin/diablo/src/components/user_center/help/SelfHelp.vue"],names:[],mappings:"AAAA,iBAAiB;AACjB;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,uGAAuG;EACvG,iBAAiB;CAClB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,eAAe;CAClB",file:"SelfHelp.vue",sourcesContent:['/* thin border */\n.self-help {\n  padding-top: 50px;\n  background: #fff !important;\n  font-family: "PingFangSC-Regular", "-apple-system", "Helvetica Neue", "Roboto", "Segoe UI", sans-serif;\n  font-weight: 400;\n}\n.self-help .item-choice {\n    height: 22px;\n    line-height: 22px;\n    margin: 30px 0 0 20px;\n    font-size: 16px;\n    color: #484746;\n}\n'],sourceRoot:""}])},710:function(e,n,t){var o=t(630);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(361)("ef732474",o,!0)},827:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page"},[t("AnimateHeader",{attrs:{"bg-color":"#F5F5F5 ","menu-bg-color":"#F0F0F0",color:"#3A3A3A",fill:"#3A3A3A",stroke:"#3A3A3A",title:"自助服务","on-back-button-click":e.back,expanded:!1,animate:!1}}),e._v(" "),t("div",{staticClass:"page-content self-help"},[t("div",{staticClass:"item-choice",on:{click:function(n){e.taskAppeal()}}},[t("span",[e._v("试玩赚钱（付费） - 奖励未到账")])]),e._v(" "),t("div",{staticClass:"item-choice",on:{click:function(n){e.hiTaskAppeal()}}},[t("span",[e._v("注册赚钱 - 奖励未到账")])]),e._v(" "),t("div",{staticClass:"item-choice",on:{click:function(n){e.unfreezeAppeal()}}},[t("span",[e._v("账号冻结申诉")])])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=selfhelp.d6d9bc4205a062bb495e.js.map