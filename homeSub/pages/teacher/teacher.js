// pages/teacher/teacher.js


const WXAPI = require('../../../API/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {

      teacherList:[],
      LOADING: true,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 获取列表
      this.getTeacherList(options.id);
  },




    //获取老师LIST

    getTeacherList:function(id){
        var that=this;


        WXAPI.ShopList({
            categoryId:id
        }).then(function (res) {
            if (res.code == 0) {
                that.setData({
                    LOADING: false,
                    teacherList:res.data
                });

            }
        })



    },


    toDetailsTap:function(e){


        wx.navigateTo({
            url: '/homeSub/pages/notice/notice?id='+e.currentTarget.dataset.id+'&source='+'goods'
        })
    },



    // 点击广告

    tapBanner: function (e) {
        if(e.currentTarget.dataset.type==='H5'){
            wx.navigateTo({
                url: '/pages/web/web?url='+e.currentTarget.dataset.url
            })
        }else {
            wx.navigateTo({
                url: '/pages/notice/notice?id='+e.currentTarget.dataset.id
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
      this.getTeacherList();

  },

  /**
   * 页面上拉触底事件的处理函数
   */


  /**
   * 用户点击右上角分享
   */

})