
const WXAPI = require('../../API/API')
const CONFIG = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      info:[],
      hzqt:[],
      kfrx:[],
      ava:CONFIG.logo,
      show: false,
      actions: [],
      LOADING: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getKing()
  },


    //获取json KF
    getKing:function(){
        var that=this
        WXAPI.GetJson({
            type: 'KF',
        }).then(res=>{
            that.setData({
                info: res.data[0].jsonData.info,
                hzqt: res.data[0].jsonData.hzqt,
                kfrx: res.data[0].jsonData.kfrx,
            });

        })

    },

    clickCell:function(e){
        this.setData({ show: true });
        if(e.currentTarget.dataset.type==='hzqt'){
            this.setData({
                actions:this.data.hzqt
            })
        }else if(e.currentTarget.dataset.type==='kfrx'){
            this.setData({
                actions: this.data.kfrx
            })
        }
    },


    onClose() {
        this.setData({ show: false });
    },

    onSelect(event) {
        var that=this;
       if(event.detail.name!=='在线客服'){
           wx.setClipboardData({
               data: event.detail.subname,
               success(res) {
                   wx.getClipboardData({
                       success(res) {
                           console.log(res.data,1);
                           that.setData({ show: false });
                       }
                   })
               }
           })
       }else {
           that.setData({ show: false });
           return
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
  
})