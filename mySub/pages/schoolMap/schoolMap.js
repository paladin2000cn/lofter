Page({
    data:{
        longitude:null,
        latitude: null,
        markers:[{
            id: 0,
            // iconPath: "../../images/icon_cur_position.png",
            longitude: null,
            latitude: null,
            width: 50,
            height: 50
        }]
    },
    onLoad: function(options){
        wx.setNavigationBarTitle({
            title: options.name
        })
        this.setData({
            name:options.name,
            add:options.add,
            longitude: Number(options.lon),
            latitude: Number(options.lat),
            markers:[{
                id: 0,
                // iconPath: "../../images/icon_cur_position.png",
                longitude: options.lon,
                latitude: options.lat,
                width: 50,
                height: 50
            }]
        })


    },
    clickNav:function(){
        this.markertap()
    },
    markertap: function () {

        wx.openLocation({
            longitude: Number(this.data.longitude),
            latitude: Number(this.data.latitude),
            scale: 18,
            name: this.data.name,
            address:this.data.add
        })
    },

})