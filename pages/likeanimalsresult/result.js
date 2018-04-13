// pages/likeanimalsresult/result.js
import { drawCanvas } from '../../utils/canvasToImage.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasSize: {
      width: wx.getSystemInfoSync().windowWidth * 0.9,
      height: "870rpx"
    },
    canvasid: 'canvas'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    drawCanvas.init({ canvasId: this.data.canvasid });
    drawCanvas.darwCanvasBg(0, 0, this.data.canvasSize.width, this.data.canvasSize.height)
  },

  onReady: function () {

  },
  onShow: function () {

  }
})