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
            path: '',
            thumbimg: '',//拇指图,
            projectcn: '标题1',//项目名称中文
            projecten: '',//项目名称英文
            palyernum: 100,//玩家数
            desc: '',//描述
            cid: '',//所属分类id
            appid: ''//appid
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
  }
})