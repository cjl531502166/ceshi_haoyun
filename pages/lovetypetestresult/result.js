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
        "job": "作家型",
        "character": "文字对你而言是神圣的，你喜欢通过文字表达自己。你擅于聆听，去帮助那些来向你寻求建议和指引的人。",
        "type": "爱情上，你希望你们是最好的朋友，大部分时间都在一起。有共同的爱好往往很重要。但有时候，你喜欢跟你性格截然相反的人，因为这样能带给你对于生活的不同认知。",
        "types": ['挑战者型', '挑战者型', '挑战者型'],
        "lovetypedesp": "跟作家型通常可以发展出一段没有压力的感情关系。",
        "situations": "任何需要思考与灵魂对话的地方 。",
        "situationsimg": "../../images/work4.png",
        "datingtips": "避免在约会中起冲突；保持应有的距离"
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