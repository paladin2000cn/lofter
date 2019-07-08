// pages/jingyan/jingyan.js

import create from '../../../utils/omi/create'
import store from '../../../store/store'
const WXAPI = require('../../../API/API')
const CONFIG = require('../../../config.js')
create(store,{
  /**
   * 页面的初始数据
   */
  data: {
      page: 1, //分页
      pageSize: 10, //每页显示的个数
      articleList:[],
      author:CONFIG.author,
      logo:CONFIG.logo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
          title: options.name
      })
      this.getData(false,options.id);
      this.setData({
          id:options.id
      })
  },

    //获取新闻列表
    getData: function ( append,id) {
        var that = this;
        wx.showLoading({
            "mask": true,
            "title":'加载中'
        })

        WXAPI.CmsArticleList({
            categoryId:id,
            page: this.data.page,
            pageSize: this.data.pageSize
        }).then(res=>{

            wx.hideLoading()
            //判断是否存在data 是否显示底部加载更多
            if (res.code===700) {
                let newData = { loadingMoreHidden: false }
                if (!append) {
                    newData.articleList = []
                }
                that.setData(newData);
                return
            }

            //上拉加载触发
            if (append) {
                that.setData({
                    loadingMoreHidden: true,
                    articleList: [...that.data.articleList,...res.data],
                });
            }else {
                that.setData({
                    loadingMoreHidden: true,
                    articleList: res.data,
                });
            }
            // 停止下拉动作
            wx.stopPullDownRefresh();

        })


    },


  //  新闻点击
    clickNews:function(e){
        if(e.currentTarget.dataset.url){
            wx.navigateTo({
                url: '/homeSub/pages/web/web?url='+encodeURIComponent(e.currentTarget.dataset.url)
            })
        }else {
            wx.navigateTo({
                url: '/homeSub/pages/notice/notice?id='+e.currentTarget.dataset.id
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
      this.setData({
          page: 0
      });
      this.getData(false,this.data.id)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      this.setData({
          page: this.data.page + 1
      });
      this.getData(true,this.data.id)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})