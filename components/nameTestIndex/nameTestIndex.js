// components/nameTestComp/testInexComp.js
import testeeInfo from '../../models/testeeInfo.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    customInputStyle: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '未来履历'
    },
    sampleGraph: {
      type: String,
      value: '../../images/example.png'
    },
    inputTips: {
      type: String,
      value: '输入姓名作为测算结果的使用名称'
    },
    btnStyle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    customInputStyle: "",
    title: "",
    sampleGraph: "",
    inputTips: "",
    btnStyle: "",
    isNameEmpty: true
  },
  attached: function () {
    for (let x in this.properties) {
      this.properties.x && (this.data.x = this.properties.x);
      this.setData(this.data);
    };
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindNameInput(e) {
      let name = e.detail.value;
      if (name) {
        testeeInfo.name = name;
        this.setData({
          isNameEmpty: false
        });
      } else {
        this.setData({
          isNameEmpty: true
        });
      }
    },
    startTest() {
      if (!this.data.isNameEmpty) {
        wx.navigateTo({
          url: '/pages/futureresumetest/test'
        })
      }
    }
  }
})
