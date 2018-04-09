// pages/likeanimals/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    npcAvatarurl: "",
    dialogData: [],
    userAvatarurl: '',
    answerOptions: null,
    showBtns: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  _init() {
    let data = {
      "npcAvatarurl": "https://image.taotaoxi.cn/wechat-app/flow/npcIcon.jpg",
      "userAvatarurl": app.globalData.userInfo.avatarUrl,
      "answerOptions": ['狗', '熊', '猴子', '狮子', '马', '松鼠', '羊', '兔子', '企鹅', '猫']
    }
    this.setData(data);
  },
  onLoad: function (options) {
    this._init();
  },
  _sendMsgHandle(e) {
    let optObj = {}
      , dataSet = e.detail;
    optObj.txt = dataSet.txt;
    this.setData({
      showBtns: true
    })
  }
})