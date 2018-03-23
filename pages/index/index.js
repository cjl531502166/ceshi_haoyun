//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    swiperConfig: {
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
    },
    currIndex: 0
  },
  onLoad: function () {
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
  onSlideChange(e) {
    this.setData({
      currIndex: e.detail.current
    });
  }
})
