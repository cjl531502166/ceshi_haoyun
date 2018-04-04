// pages/lovetype/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '恋爱类型书',
    sampleGraph: '../../images/love_type_example.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  _startTest(e) {
    if (e.detail) {
      wx.navigateTo({
        url: '/pages/lovetype/test'
      });
    }
  }
})