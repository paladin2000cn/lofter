const app = getApp();
const WxParse = require('../../../wxParse/wxParse.js');
const WXAPI = require('../../../API/API')
const CONFIG = require('../../../config.js')
import Toast from '../../../miniprogram_npm/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      show: false, //分享pop
      yuYueshow: false, //分享pop
      objectArray: [
          {id:1,name:'应届',type:1},
          {id:2,name:'往届',type:2}
      ],
      objectArraySex: [
          {id:1,title:'男',type:3},
          {id:2,title:'女',type:4}
      ],
      index: 0,
      indexSex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      that.setData({
          id:options.id,
          goods:options.source||'',
          weChatShare:options.WeChatShare||''
      })
      //金刚位单页
      if(options.source==='DANYE'){
          WXAPI.CmsArticleDanYeDetail({
              key:options.id
          }).then(function (res) {
              if (res.code == 0) {
                  that.setData({
                      notice: res.data
                  });
                  WxParse.wxParse('article', 'html', res.data.content, that, 5);
              }
          })
          //商品列表
      } else if(options.source==='goods'){
          WXAPI.ShopDetail({
              id:options.id
          }).then(function (res) {
              if (res.code == 0) {
                  WxParse.wxParse('article', 'html', res.data.content, that, 5);
                  that.setData({
                      tel:res.data.extJson.T||CONFIG.tel,
                      name:res.data.basicInfo.name,
                      nameGiveHou:res.data.basicInfo.name,
                      pic:res.data.basicInfo.pic,
                      Goodid:res.data.basicInfo.id,
                  })
              }
          })
          //公告
      }else if(options.source==='gg'){
          WXAPI.NoticeDetail({
              id:options.id
          }).then(function (res) {
              if (res.code == 0) {
                  WxParse.wxParse('article', 'html', res.data.content, that, 5);
              }
          })
          //正常新闻列表
      }else {
          WXAPI.CmsArticleDetail({
              id:options.id
          }).then(function (res) {
              if (res.code == 0) {
                  that.setData({
                      notice: res.data
                  });
                  WxParse.wxParse('article', 'html', res.data.content, that, 5);
              }
          })
      }


  },






    onClickButton:function(){

      // if(wx.getStorageSync('token')){
      //     WXAPI.GoodsYuYue({
      //         goodsJsonStr:"[{'goodsId':"+this.data.Goodid+",'number':1}]",
      //         token:wx.getStorageSync('token')
      //     }).then(function (res) {
      //         const msg = res.msg ==='success'?'预约成功':res.msg
      //         Toast(msg)
      //     })
      // }else {
      //     wx.navigateTo({
      //         url: '/mySub/pages/login/login'
      //     })
      // }

        this.setData({ yuYueshow: true });

    },

    onClickPhone:function(){
        wx.makePhoneCall({
            phoneNumber: this.data.tel||'13080198847' //仅为示例，并非真实的电话号码
        })
    },


    onClickFav:function(){
        WXAPI.MyFav({
            goodsId:this.data.Goodid,
            token:wx.getStorageSync('token')
        }).then(function (res) {
            const msg = res.msg ==='success'?'收藏成功':res.msg
            Toast(msg)
        })
    },

    onClickHome:function(){
        //返回首页
        wx.switchTab({
            url: '/pages/home/home'
        })
    },



    onClickShare:function(){
        this.setData({ show: true });
    },


    //好友
    buttonShare:function(){
        this.setData({ show: false });
    },
    //朋友圈
    shareFriend:function(){
        this.setData({
            show:false
        })
    },

    //关闭pop
    onClose() {
        this.setData({ show: false });
    },

    //关闭pop
    onCloseYuYue() {
        this.setData({ yuYueshow: false });
    },



    //姓名
    onChangexingming(event) {
        // event.detail 为当前输入的值
        this.setData({
            xingming:event.detail
        })
    },

    //省份
    onChangeshengfen(event) {
        // event.detail 为当前输入的值
        this.setData({
            shengfen:event.detail
        })
    },

    //高中
    onChangegaozhong(event) {
        // event.detail 为当前输入的值
        this.setData({
            gaozhong:event.detail
        })
    },

    //年级
    onChangenianji(event) {
        // event.detail 为当前输入的值
        this.setData({
            nianji:event.detail
        })
    },

    //手机号
    onChangephone(event) {
        // event.detail 为当前输入的值
        this.setData({
            phone:event.detail
        })
    },




    //应届

    bindPickerChange: function (e) {
        this.setData({
            index: e.detail.value,
            picNum:this.data.objectArray[Number(e.detail.value)].type,
            typeID:this.data.objectArray[Number(e.detail.value)].id,
            nameYingjie:this.data.objectArray[Number(e.detail.value)].name,
        })
    },

    //性别
    bindPickerChangeSex: function (e) {
        this.setData({
            indexSex: e.detail.value,
            picNum:this.data.objectArraySex[Number(e.detail.value)].type,
            typeID:this.data.objectArraySex[Number(e.detail.value)].id,
            title:this.data.objectArraySex[Number(e.detail.value)].title,
        })
    },



    clickSubmit:function () {
         var that=this
        if (this.data.xingming && this.data.phone) {
            var name = this.data.nameYingjie || '应届';
            var title = this.data.title || '男';
            var xingming = this.data.xingming;
            var shengfen = this.data.shengfen;
            var gaozhong = this.data.gaozhong;
            var nianji = this.data.nianji;
            var phone = this.data.phone;
            var nameGiveHou = this.data.nameGiveHou;
            WXAPI.UserYuyue({
                content: '姓名:' + xingming + '---' + '往/应届:' + name + '---' + '手机号:' + phone + '---' + '省份:' + shengfen + '---' + '高中:' + gaozhong + '---' + '年级:' + nianji + '---' + '性别:' + title+'班型:'+'---'+nameGiveHou,
                type:0
            }).then(function (res) {
                that.setData({ yuYueshow: false });
                const msg = res.msg === 'success' ? '提交成功' : res.msg
                Toast(msg)

            })
        } else {
            Toast('姓名手机号不能为空')
        }


    },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
          title: this.data.name,
          path: '/homeSub/pages/notice/notice?id='+this.data.id+'&source='+'goods'+'&WeChatShare='+'WeChat',
          imageUrl:this.data.pic,
          success: function (res) {
              // 转发成功
          },
          fail: function (res) {
              // 转发失败
          }
      }

  },
})