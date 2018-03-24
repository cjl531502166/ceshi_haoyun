// components/navTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabText: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabText: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateTo(e) {
      let id = e.currentTarget.dataset.id;
      if (id == 1) {
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    }
  },
  attatched: function () {
    this.properties.tabText && (this.data.tabText = this.properties.tabText);
    this.setData({
      tabText: this.data.tabText
    });
  }
})
