

import create from '../../utils/omi/create'
import store from '../../store/store'
const WXAPI = require('../../API/API')
import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
create(store,{
    data: {
        MyList:[
          [
            {id:1,title:"我的收藏",isShowRed:false,subTitle:"",type:"FAV"},
            {id:2,title:"消息",isShowRed:false,subTitle:"",type:"msg"},
            {id:2,title:"绑定手机号",isShowRed:false,subTitle:"",type:"phone"},
            {id:2,title:"优惠券",isShowRed:false,subTitle:"抵扣学费",type:"freeCard"},
            // {id:3,title:"小程序",isShowRed:false,subTitle:"3个",type:"ad"},
            // {id:3,title:"私信",isShowRed:true,subTitle:"认证",type:"ad"},
          ],
          // [
          //   {id:1,title:"作品管理",isShowRed:false,subTitle:"",type:"ad"},
          //   {id:2,title:"我的书架",isShowRed:false,subTitle:"",type:"ad"},
          //   {id:3,title:"扫一扫",isShowRed:true,subTitle:"618",type:"ad"},
          //   {id:3,title:"广告投放",isShowRed:false,subTitle:"广告",type:"ad"},
          // ],
          // [
          //   {id:1,title:"我的交易",isShowRed:false,subTitle:"",type:"ad"},
          //   {id:2,title:"我的订单",isShowRed:false,subTitle:"",type:"ad"}
          // ]
        ],
        MyDataInfo:[
          {id:1,title:'积分',num:620,type:'jf'},
          {id:2,title:'关注',num:420,type:'jf'},
          {id:3,title:'粉丝',num:240,type:'jf'},
          {id:4,title:'获赞',num:360,type:'jf'},
        ]




    },
    onLoad: function () {

    },

    onShow:function(){
        this.store.data.myInfo = wx.getStorageSync('myInfo')
    },

//  点击登录
  clickLogin:function (e) {

    // this.store.data.userInfo.name='赵文'
      wx.navigateTo({
          url: '/mySub/pages/login/login'
      })
  },

//  点击认证

  clickAuthentication:function (e) {
      console.log(1);
      // wx.navigateTo({
    //   url: '/mySub/pages/Authentication/Authentication'
    // })
  },


    clickCell:function (e) {
        console.log(e.currentTarget.dataset.type);
        if(e.currentTarget.dataset.type==='FAV'){
            wx.navigateTo({
                url: '/mySub/pages/FAV/FAV'
            })
        }else if(e.currentTarget.dataset.type==='msg'){
            wx.navigateTo({
                url: '/mySub/pages/gongGao/gongGao'
            })
        }else if(e.currentTarget.dataset.type==='phone'){
            wx.navigateTo({
                url: '/mySub/pages/bindmobile/bindmobile'
            })
        }else if(e.currentTarget.dataset.type==='freeCard'){
            wx.navigateTo({
                url: '/mySub/pages/freeCard/freeCard'
            })
        }

    }



})
