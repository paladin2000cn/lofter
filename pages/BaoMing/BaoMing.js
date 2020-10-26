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
          
            var title = this.data.title || '男';
            var xingming = this.data.xingming;
            var nianji = this.data.nianji;
            var phone = this.data.phone;
            WXAPI.UserYuyue({
                content: '姓名:' + xingming + '---' + '手机号:' + phone + '---' + '年级:' + nianji + '---' + '性别:' + title,
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

