// mySub/pages/Authentication/Authentication.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    AuthList:[
      {id:1,title:'校长认证',subTitle:'适用于学校校长真实身份认证',type:'xz'},
      {id:2,title:'老师认证',subTitle:'适用于学校老师真实身份认证',type:'ls'},
      {id:1,title:'学生认证',subTitle:'适用于学校学生真实身份认证',type:'xs'},
    ],
    privilege:[
      {id:1,title:'独家标识',subTitle:'享有专属标识,彰显独特身份'},
      {id:2,title:'优先推荐',subTitle:'内容优先推荐'},
      {id:1,title:'更多特权',subTitle:'更多用户专享功能'},
    ]




  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  clickTitle:function(){
    wx.navigateTo({
      url: '/mySub/pages/indexes/indexes'
    })
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
  onShareAppMessage: function () {

  }
})