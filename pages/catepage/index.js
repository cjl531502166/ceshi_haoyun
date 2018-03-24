// pages/catepage/index.js
import categoryPageConfig from '../../models/catePage.config.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '',
    tabText: '',
    testList: null
  },
  init() {
    let postParams = categoryPageConfig.postParams
      , title = categoryPageConfig.publicData.title;
    wx.setNavigationBarTitle({
      title: title,
    });
    this.setData({
      pageTitle: title,
      tabText: title,
    });
    // ajax 请求页面列表数据
    this.setData({
      testList: {
        category: '',//分类标题
        banner: '',//分类banner
        lists: [
          {
            thumbimg: '',//拇指图,
            projectcn: '标题1',//项目名称中文
            palyernum: 100,//玩家数
            desc: '',//描述
            cid: '',//所属分类id
            appid: '',//appid
            projecten: ''//项目名称英文
          }
        ]
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})