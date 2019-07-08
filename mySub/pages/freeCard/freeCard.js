// mySub/pages/freeCard/freeCard.js
const WXAPI = require('../../../API/API')
import Toast from '../../../miniprogram_npm/vant-weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      active: 0,
      show: false, //分享pop
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    //获取优惠券列表

    getfreeCard:function(){
        var that=this
        WXAPI.getFreeCardList({
            type:'open'
        }).then(res=>{
            that.setData({
                cardList: res.data,
            });

        })

    },

    //领取优惠券

    clickGetCard:function(e){
        WXAPI.getFreeCard({
            token:wx.getStorageSync('token'),
            id:e.currentTarget.dataset.id
        }).then(res=>{

            if(res.code===0){
                console.log(res,'11222');
                var msg='领取成功'+res.data.money
                Toast(msg)
            }else {
                Toast(res.msg)
            }

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





    onChange(event) {
        if(event.detail.index===1){
            this.getMyFreeCard()
        }else if(event.detail.index===2){
            this.getMyFreeCardNouse()
        }

    },

    //获取已领取列表

    getMyFreeCard:function(){

        var that=this


        if(wx.getStorageSync('token')){
            WXAPI.getMyFreeCard({
                token:wx.getStorageSync('token'),
                status:0
            }).then(res=>{
                if(res.data){
                    that.setData({
                        myCardList: res.data,
                    });
                }else {
                    Toast(res.msg)
                }

            })
        }else {
            wx.navigateTo({
                url: '/mySub/pages/login/login'
            })
        }




    },

    //获取失效列表
    getMyFreeCardNouse:function(){

        var that=this

        if(wx.getStorageSync('token')){
            WXAPI.getMyFreeCard({
                token:wx.getStorageSync('token'),
                status:1
            }).then(res=>{
                if(res.data){
                    that.setData({
                        myCardListNO: res.data,
                    });
                }else {
                    Toast(res.msg)
                }

            })
        }else {
            wx.navigateTo({
                url: '/mySub/pages/login/login'
            })
        }




    },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      if(wx.getStorageSync('token')){
          this.getfreeCard();
      }else {
          wx.navigateTo({
              url: '/mySub/pages/login/login'
          })
      }
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
          path: '/pages/my/my',
          imageUrl:this.data.pic,
          success: function (res) {
              // 转发成功
          },
          fail: function (res) {
              // 转发失败
          }
      }

  }
})