// pages/home/home.js
import create from '../../utils/omi/create'
import store from '../../store/store'
const WXAPI = require('../../API/API')
const CONFIG = require('../../config.js')
create(store,{

  /**
   * 页面的初始数据
   */
  data: {
      JieBaoList:[],
      newTitle:CONFIG.JieBaoTitle,
      KingList:[],
      banners:[],
      HomeGood:[],
      articleList:[], //简章
      logo:CONFIG.logo,
      author: CONFIG.author

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getBanner();
        this.getHomeGoods(CONFIG.ShopId);
        this.getJieBao(CONFIG.JieBaoId);
        this.getJianZhangList(CONFIG.JianZhangId)
        this.getKing();
  },



    //获取新闻列表
    getJianZhangList: function (id) {
        var that = this;
        WXAPI.CmsArticleList({
            categoryId:id,
            page: 1,
            pageSize: 3
        }).then(res=>{
            that.setData({
                articleList:res.data,
            });
        })
    },

    clickMoreJianZhang:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/news/news?id='+CONFIG.JianZhangId+'&name='+'招生简章'
        })
    },

    //获取json king
    getKing:function(){
        var that=this

        WXAPI.GetJson({
            type: 'King',
        }).then(res=>{
            that.setData({
                KingList: res.data[0].jsonData.KING,
            });

        })

    },


    //获取首页捷报新闻信息
    getJieBao:function(id){
      var that=this
        WXAPI.CmsArticleList({
            categoryId:id,
            page: 1,
            pageSize: 5
        }).then(res=>{
            that.setData({
                JieBaoList: res.data,
            });
        })
    },


    getHomeGoods:function(ShopId){
      var that=this
        WXAPI.ShopList({
            shopId:ShopId,
            page:1,
            pageSize:5,
            recommendStatus:1
        }).then(function (res) {
            if (res.code == 0) {
                that.setData({
                    LOADING: false,
                    HomeGood:res.data
                });

            }
        })
    },

    toDetailsTap:function(e){
        wx.navigateTo({
            url: '/homeSub/pages/notice/notice?id='+e.currentTarget.dataset.id+'&source='+'goods'
        })
    },

    //更多班型设置
    clickMoreBan:function(){
        console.log(CONFIG.ShopId);
        wx.navigateTo({
            url: '/homeSub/pages/BanXingGood/BanXingGood?ShopId='+CONFIG.ShopId
        })
    },
    //分类
    getBanner:function(){
        WXAPI.HomeBanner().then((res)=>{

            this.setData({
                banners:res.data
            })
        })

    },


  //  点击分类king
    clickKing:function(e){
        console.log(e.currentTarget.dataset.type);
        wx.navigateTo({
            url: '/homeSub/pages/news/news?id='+e.currentTarget.dataset.id+'&name='+e.currentTarget.dataset.name
        })
    },

    //点击捷报列表
    clickJB:function(e){

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

  //  more捷报
    clickMore:function(){


        wx.navigateTo({
            url: '/homeSub/pages/news/news?id='+CONFIG.JieBaoId+'&name='+'捷报'
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
      this.getBanner();
      this.getHomeGoods(CONFIG.ShopId);
      this.getJieBao(CONFIG.JieBaoId);
      this.getJianZhangList(CONFIG.JianZhangId)
      this.getKing();
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
          title: CONFIG.ShareTitle,
          path: '/pages/home/home',
          success: function (res) {
              // 转发成功

          },
          fail: function (res) {
              // 转发失败
          }
      }

  },
})