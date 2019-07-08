const CONFIG = require('../config.js')
const API_BASE_URL = 'https://api.it120.cc/'+CONFIG.subDomain
const request = (url, method, data) => {
   return new Promise((resolve, reject) => {
        wx.request({
            url: API_BASE_URL + url,
            method: method,
            data: data,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success(request) {
              console.log('---------start----------');
              console.log('请求的url: ', API_BASE_URL+url);
              console.log('请求类型: ',method);
              console.log('请求参数: ',data);
              console.log('返回数据: ',request.data);
              console.log('---------end----------');
              resolve(request.data)
            },
            fail(error) {
              reject(error)
            },
            complete(aaa) {
                // 加载完成
            }
        })
    })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
    var Promise = this.constructor;
    return this.then(
        function (value) {
            Promise.resolve(callback()).then(
                function () {
                    return value;
                }
            );
        },
        function (reason) {
            Promise.resolve(callback()).then(
                function () {
                    throw reason;
                }
            );
        }
    );
}

module.exports = {
    request,
    Login: (code) => {
        return request('/user/wxapp/login', 'POST',{
            code:code,
            type:'2'
        })
    },

    checkToken: (token) => {
        return request('/user/check-token', 'get', {
            token
        })
    },
    //获取文章分类
    CmsCateGory: () => {
        return request('/cms/category/list', 'GET')
    },
    //根据cms分类id 获取文章列表
    CmsArticleList: (data) => {
        return request('/cms/news/list', 'POST',data)
    },

    //根据cms分类id 获取文章详情
    CmsArticleDetail: (data) => {
        return request('/cms/news/detail', 'GET',data)
    },

    //获取单页详情
    CmsArticleDanYeDetail: (data) => {
        return request('/cms/page/info', 'GET',data)
    },

    //获取商品分类
    ShopCateGory: () => {
        return request('/shop/goods/category/all', 'GET')
    },
    //获取商品列表
    ShopList: (data) => {
        return request('/shop/goods/list', 'POST',data)
    },
    //获取商品详情
    ShopDetail: (data) => {
        return request('/shop/goods/detail', 'POST',data)
    },

    //banner 首页
    HomeBanner: () => {
        return request('/banner/list', 'GET')
    },

    //微信登录
    register: (data) => {
        return request('/user/wxapp/register/complex', 'POST',data)
    },

    //商品预约
    GoodsYuYue: (data) => {
        return request('/order/create', 'POST',data)
    },

    //我的预约
    MyYuYue: (data) => {
        return request('/order/list', 'POST',data)
    },

    //我的good收藏
    MyFav: (data) => {
        return request('/shop/goods/fav/add', 'POST',data)
    },

    //我的good收藏列表
    MyFavList: (data) => {
        return request('/shop/goods/fav/list', 'POST',data)
    },

    //b获取公告
    NoticeList: () => {
        return request('/notice/list', 'GET')
    },

    //b获取公告详情
    NoticeDetail: (data) => {
        return request('/notice/detail', 'GET',data)
    },


    //b获取公告详情
    GetJson: (data) => {
        return request('/json/list', 'POST',data)
    },

    //b获取校区列表
    GetSchoolList: () => {
        return request('/shop/subshop/list', 'POST')
    },

    //提交报名信息
    UserYuyue: (data) => {
        return request('/comment/add', 'POST',data)
    },

    //手机号绑定
    bindWechatPhone: (data) => {
        return request('/user/wxapp/bindMobile', 'POST',data)
    },

    //优惠券列表
    getFreeCardList: (data) => {
        return request('/discounts/coupons', 'GET',data)
    },

    //领取优惠券
    getFreeCard: (data) => {
        return request('/discounts/fetch', 'POST',data)
    },

    //我的已经领取优惠券
    getMyFreeCard: (data) => {
        return request('/discounts/my', 'GET',data)
    },

}