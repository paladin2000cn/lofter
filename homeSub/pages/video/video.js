

Page({
    data:{
        initialTime:wx.getStorageSync('initialTime')||0.1,
        condition:true,
        isshowBtn:false,
        tryFive:'试看5分钟',
        srcVideo:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        posterVideo:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/ad/photo/banner1.jpg@!original',
        videoName:'01:andy讲绘本',
        markMessage:[
            {id:1,time:'2019-02-27 11:13',name:'赵福文',avaPic:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/player/photo/e47b37b7f31b9be1513327aba3f912a7.jpg@!350x350',content:'哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦'},
            {id:2,time:'2019-02-27 11:13',name:'赵福文',avaPic:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/player/photo/e47b37b7f31b9be1513327aba3f912a7.jpg@!350x350',content:'哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦'},
            {id:3,time:'2019-02-27 11:13',name:'赵福文',avaPic:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/player/photo/e47b37b7f31b9be1513327aba3f912a7.jpg@!350x350',content:'哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦'},
            {id:4,time:'2019-02-27 11:13',name:'赵福文',avaPic:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/player/photo/e47b37b7f31b9be1513327aba3f912a7.jpg@!350x350',content:'哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦哈哈哈哈哈哈哈哈 这个不错哦'},
    ],
        toView: 'white',
        videoList:[
            {id:1,isIng:false,color:'white',num:1},
            {id:2,isIng:false,color:'black',num:2},
            {id:3,isIng:false,color:'black',num:3},
            {id:4,isIng:false,color:'black',num:4},

        ]
    },
    onReady(res) {
        this.videoContext = wx.createVideoContext('myVideo');
    },

    onLoad: function (options) {
    },
    play:function() {
        this.setData({
            condition:false,
            isshowBtn:true,
        })
        this.videoContext.play()
    },
    pause:function() {
        this.setData({
            condition:false,
            isshowBtn:true,
        })
        wx.navigateTo({
            url: '/package/pages/vip/vip'
        })

    },
    endPress:function(){
        this.setData({
            condition:true,
            isshowBtn:false,
            tryFive:'重新试看'
        })
    },
    play1:function(e){
        this.setData({
            srcVideo:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
            posterVideo:'https://pbook-musemore.oss-cn-beijing.aliyuncs.com/player/photo/9eea5ebd0dc818296aa14aaed98bd506.png@!350x350',
            videoName:'02:绘本是什么?',
            videoList:[
                {id:1,isIng:false,color:'black',num:1},
                {id:2,isIng:false,color:'black',num:2},
                {id:3,isIng:false,color:'black',num:3},
                {id:4,isIng:false,color:'black',num:4},
            ]
        })


    },
    pressPause:function(e){
      console.log(e.detail.currentTime);
        wx.setStorage({
            key: 'initialTime',
            data: e.detail.currentTime
        })
    },


    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log(wx.getStorageSync('initialTime'),'time');
        this.videoContext&&this.videoContext.pause();
    },
/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function () {
    console.log(wx.getStorageSync('initialTime'),'time');
    this.videoContext&&this.videoContext.pause();
},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function () {
    console.log(wx.getStorageSync('initialTime'),'time');
    this.videoContext&&this.videoContext.pause();
},

})