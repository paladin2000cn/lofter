// pages/school/school.js
const WXAPI = require('../../API/API')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      schoolList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSchoolList()

  },

    //获取校区数据
    getSchoolList:function(){
    var that =this

        WXAPI.GetSchoolList().then(res=>{
            that.setData({
                schoolList: res.data,
            });

        })

    },

    //拨打电话
    onClickPhone:function(e){
        wx.makePhoneCall({
            phoneNumber:e.currentTarget.dataset.phone+''
        })
    },

    //点击班型

    clickBanXing:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/BanXingGood/BanXingGood?ShopId='+e.currentTarget.dataset.id+'&name='+e.currentTarget.dataset.name
        })
    },


    //点击导航
    clickNav:function(e){
        console.log(e.currentTarget.dataset.lat,e.currentTarget.dataset.lon);
        wx.navigateTo({
            url: '/mySub/pages/schoolMap/schoolMap?lat='+e.currentTarget.dataset.lat+'&lon='+e.currentTarget.dataset.lon+'&add='+e.currentTarget.dataset.add+'&name='+e.currentTarget.dataset.name
        })
    },


  onPullDownRefresh: function () {
      this.getSchoolList()
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})