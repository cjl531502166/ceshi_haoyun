//index.js
import categoryPageConfig from '../../models/catePage.config.js';
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: null,
    swiperConfig: null,
    projectCategories: null,
    currIndex: 0
  },
  getUserInfo() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      });
    }
  },
  init() {
    let swiperConfig = {
      banner: [
        {
          url: '../../images/banner_1.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_2.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_3.jpg',
          project: 'love-type'
        }, {
          url: '../../images/banner_4.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_5.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_6.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_7.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_8.png',
          project: 'love-type'
        }, {
          url: '../../images/banner_2.png',
          project: 'love-type'
        }
      ],
      indicatorDots: false,
      autoPlay: true,
      interval: 3000,
      duration: 500,
      circular: true,
      height: wx.getSystemInfoSync().windowHeight * 0.3,
    };
    let projectCategories = [
      {
        id: 1,
        categorycn: '认识自我',
        categoryen: 'know-yourself'
      }, {
        id: 2,
        categorycn: '第二人格',
        categoryen: 'fun'
      }, {
        id: 3,
        categorycn: '预测未来',
        categoryen: 'future-plan'
      }, {
        id: 4,
        categorycn: '一起穿越',
        categoryen: 'fgo-together'
      }, {
        id: 5,
        categorycn: '情感大师',
        categoryen: 'emotional-teacher'
      }, {
        id: 6,
        categorycn: '全部测试',
        categoryen: 'total-test'
      }
    ];
    this.setData({
      swiperConfig: swiperConfig,
      projectCategories: projectCategories
    });
  },
  onLoad: function () {
    this.getUserInfo();
    this.init();
  },
  onSlideChange(e) {
    this.setData({
      currIndex: e.detail.current
    });
  },
  /**
   * 快速查找分类页面跳转函数
   */
  navToCatePage(e) {
    categoryPageConfig.postParams = {
      cid: e.currentTarget.dataset.id,
      projectType: e.currentTarget.dataset.project
    };
    categoryPageConfig.publicData = {
      title: e.currentTarget.dataset.title
    };
    wx.navigateTo({
      url: '/pages/catepage/index'
    })
  }
})
