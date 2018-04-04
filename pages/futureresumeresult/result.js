// pages/futureresumeresult/result.js
import testeeInfo from '../../models/testeeInfo.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    resultData: '',
    canvasSize: '',
    canvasId: ''
  },
  /**初始化 */
  _init() {
    this.setData({
      name: testeeInfo.name ? testeeInfo.name : '',
      resultData: {
        "charactordesp": "自信友好",
        "job": "翻译外交家",
        "character": "你擅于社交，有三寸不烂之舌，对于怎样说话和与人交流，你有你的理解和策略，你的愿望是要用智慧和口才征服世界。",
        "work": "工作会很累，事情很多，有时候忙到脑袋缺氧。不止需要有口才，更需要智慧，需要洞察人心，又得有足够的耐心和忍耐力。",
        "jobtitles": "../../images/work4.png",
      },
      canvasSize: {
        "width": wx.getSystemInfoSync().screenWidth * 0.9 + 'px',
        "height": "390rpx"
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._init();
    this._drawPostcard();
  },
  /**
   * 生成明信片
   */
  _drawPostcard() {
    let ctx = wx.createCanvasContext('futureCanvas', this)
      , cardBg = '../../images/example.png'
      , sw = parseInt(this.data.canvasSize.width)
      , sh = parseInt(this.data.canvasSize.height) * 0.5;
      console.log(sw,sh);
    ctx.drawImage(cardBg, 0, 0, sw, sh);
    ctx.draw();
  },
  /**
   * 返回首页
   */
  _returnIndex() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  }
})