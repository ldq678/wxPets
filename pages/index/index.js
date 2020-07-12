// pages/cart/cart.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */  
  data: {
    longitude: '', //经度
    latitude: '',   //维度 
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: app.globalData.windowWidth / 2 - 15,
        top: (app.globalData.windowHeight - 40) /2 - 40,
        width: 30,
        height: 40,
      }
    },
    {
      id: 2,
      iconPath: '/resources/center.png',
      position: {
        left: 20,
        top: app.globalData.windowHeight - 100,
        width: 40,
        height: 40,
      },
      clickable: true
    }]
  },  

  onShow: function () {
    this.getLocation();
  },
  //第1种方法
  getLocation(){
    wx.getLocation({
      type: 'gcj02',
      success: this.handleGetLocationSucc.bind(this), 
    })
  },

  handleGetLocationSucc(res){
      this.setData({
        longitude: res.longitude,
        latitude: res.latitude
      }); 
      console.log(res.longitude + " : " + res.latitude);
  },

  //第2种方法
  // getLocation(){
  //   var that = this;
  //   wx.getLocation({
  //     type: 'gcj02',
  //     success: function(res) {
  //       that.setData({
  //         longitude: res.longitude,
  //         latitude: res.latitude,
  //       })
  //     },
  //   })
  // },

  //第3种方法
  // getLocation() {
  //   wx.getLocation({
  //     type: 'gcj02',
  //     success: (res) => {
  //       // const long = res.longitude;
  //       // const lati = res.latitude;
  //       this.setData({
  //         longitude: res.longitude,
  //         latitude: res.latitude,
  //         // longitude : long,
  //         // latitude: lati,
  //       })
  //     },
  //   })
  // },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '东哥的电竞达人app',
      path: '/pages/cart/cart'
    }
  },

  centerTap(e){
    // console.log(e);
    if(e.controlId == 2){ //点击的是center.png图标
      this.mapCtx.moveToLocation();
    }
  },

  onReady(){
    this.mapCtx = wx.createMapContext('map')
  },

  //跳转到发布页面
  goToPublish(){
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  }
})