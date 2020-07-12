// pages/publissh/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: '点击选择，要勾选哟~',
  },
  // 点击选择地址
  chooseAddress(){ 
    wx.chooseLocation({
      success: res => {
        console.log(res);
        this.setData({
          address: res.name
        })
      }
    })
  },

  // 发布信息
  publishInfo(){
    wx.showToast({
      title: '信息已发布！',
      icon: 'success',
      duration: 2000
    })
  }
})