const WXAPI = require('../../../API/API')

import create from '../../../utils/omi/create'
import store from '../../../store/store'
var app = getApp();
create(store,{

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    bindGetUserInfo: function(e) {
        this.store.data.myInfo=e.detail.userInfo
        wx.setStorage({
            key:"myInfo",
            data:e.detail.userInfo
        })
        this.login(e);
    },
    login: function(e) {
        const that = this;
        const token = wx.getStorageSync('token');
        if (token) {
            WXAPI.checkToken(token).then(function(res) {
                if (res.code != 0) {
                    wx.removeStorageSync('token')
                    that.login(e);
                } else {
                    // 回到原来的地方放
                    app.navigateToLogin = false
                    wx.navigateBack();
                }
            })
            return;
        }

        wx.login({
            success: function(res) {
                WXAPI.Login(res.code).then(function(res) {
                    if (res.code == 10000) {
                        // 去注册
                        that.registerUser(e);
                        return;
                    }
                    if (res.code != 0) {
                        // 登录错误
                        wx.hideLoading();
                        wx.showModal({
                            title: '提示',
                            content: '无法登录，请重试',
                            showCancel: false
                        })
                        return;
                    }
                    wx.setStorageSync('token', res.data.token)
                    // 回到原来的地方放
                    wx.navigateBack();
                })
            }
        })
    },


    registerUser: function(e) {
        let that = this;
        wx.login({
            success: function(res) {
                // 下面开始调用注册接口
                WXAPI.register( {
                    code: res.code,
                    encryptedData: e.detail.encryptedData,
                    iv: e.detail.iv,
                }).then(function(res) {
                    wx.hideLoading();
                    that.login();
                })
            }
        })
    }

})