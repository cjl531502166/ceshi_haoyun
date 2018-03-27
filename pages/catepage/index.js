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
      testList: [{
        category: '认识自我',//分类标题
        banner: '../../images/banner_5.png',//分类banner
        lists: [
          {
            path: '/pages/lovetype/test',
            thumbimg: '../../images/love-type.png',//拇指图,
            projectcn: '恋爱类型书',//项目名称中文
            projecten: 'love-type',//项目名称英文
            palyernum: 100,//玩家数
            desc: '谈恋爱先做这个测试，保证爱情一路顺到底',//描述
            cid: '1',//所属分类id
            appid: ''//appid
          }, {
            path: '/pages/likeanimals/test',
            thumbimg: '../../images/like-animals.png',//拇指图,
            projectcn: '朋友眼中的你',//项目名称中文
            projecten: 'like-animals',//项目名称英文
            palyernum: 37,//玩家数
            desc: '选你最爱的动物看穿朋友对你的看法！',//描述
            cid: '2',//所属分类id
            appid: ''//appid
          }
        ]
      }]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },
  // 进行测试
  goTesting(e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path
    });
  }
})