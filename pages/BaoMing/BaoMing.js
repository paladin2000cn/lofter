// pages/addwork/addwork.js
import Toast from "../../miniprogram_npm/vant-weapp/toast/toast";

const WXAPI = require('../../API/API')

Page({

    /**
     * 页面的初始数据
     */
    data: {
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
            name:this.data.objectArray[Number(e.detail.value)].name,
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
        if (this.data.xingming && this.data.phone) {
            var name = this.data.name || '应届';
            var title = this.data.title || '男';
            var xingming = this.data.xingming;
            var shengfen = this.data.shengfen;
            var gaozhong = this.data.gaozhong;
            var nianji = this.data.nianji;
            var phone = this.data.phone;
            WXAPI.UserYuyue({
                content: '姓名:' + xingming + '---' + '往/应届:' + name + '---' + '手机号:' + phone + '---' + '省份:' + shengfen + '---' + '高中:' + gaozhong + '---' + '年级:' + nianji + '---' + '性别:' + title,
                type:0
            }).then(function (res) {
                const msg = res.msg === 'success' ? '提交成功' : res.msg
                Toast(msg)
            })
        } else {
            Toast('姓名手机号不能为空')
        }


    }


})

