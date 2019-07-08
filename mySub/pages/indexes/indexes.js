const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    list:[
      {
        name:'A',
        cell:[
            {id:1,title:'许昌学院第一中学',subTitle:'河南-许昌'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
            {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          ]
      },

      {
        name:'B',
        cell:[
          {id:1,title:'许昌学院第一中学',subTitle:'河南-许昌'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
        ]
      },

      {
        name:'C',
        cell:[
          {id:1,title:'许昌学院第一中学',subTitle:'河南-许昌'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
        ]
      },

      {
        name:'D',
        cell:[
          {id:1,title:'许昌学院第一中学',subTitle:'河南-许昌'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
          {id:2,title:'天剑学院第一中学',subTitle:'北京-天津'},
        ]
      },

    ],

  },
  onLoad() {
    this.setData({
     listCur: this.data.list[0].name
    })
  },

  clickSchool:function(e){
    console.log(e);
  },



  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function(res) {
      console.log(res,'rerrrrrrrrrr');
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function(res) {
      that.setData({
        barTop: res.top
      })
    }).exec()
  },
  //获取文字信息
  getCur(e) {
    console.log(e,this.data.list[e.target.id].name,'rrr');
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id].name,
    })
  },

  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },


  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num].name
      })
    };
  },

  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },

  //触发结束选择
  tEnd() {
    console.log(1,this.data.listCur);
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    })
  },
  indexSelect(e) {
    let that = this;
    let barHeight = this.data.barHeight;
    let list = this.data.list;
    let scrollY = Math.ceil(list.length * e.detail.y / barHeight);
    for (let i = 0; i < list.length; i++) {
      if (scrollY < i + 1) {
        that.setData({
          listCur: list[i],
          movableY: i * 20
        })
        return false
      }
    }
  }
});