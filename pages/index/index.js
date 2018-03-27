//index.js
import categoryPageConfig from '../../models/catePage.config.js';
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: null,
    swiperConfig: null,
    projectCategories: null,
    currIndex: 0,
    popularTests: null
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
    let popularTests = [
      {
        category: '热门测试',//分类标题
        banner: '',//分类banner
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
          }, {
            path: '/pages/futureresume/test',
            thumbimg: '../../images/future-resume.png',//拇指图,
            projectcn: '未来履历书',//项目名称中文
            projecten: 'future-resume',//项目名称英文
            palyernum: 185,//玩家数
            desc: '快看，你最适合的工作就在这儿！',//描述
            cid: '3',//所属分类id
            appid: ''//appid
          }
        ]
      }
    ]
    this.setData({
      swiperConfig: swiperConfig,
      projectCategories: projectCategories,
      popularTests: popularTests
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
    });
  },
  // 进行测试
  goTesting(e) {
    let path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path
    });
  }
})
