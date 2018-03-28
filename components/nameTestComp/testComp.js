// components/nameTestComp/testComp.js
import testeeInfo from '../../models/testeeInfo.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testBg: {
      type: String,
      value: 'background:url(../../images/test_bg_1.png)'
    },
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
    testBg: "",
    customInputStyle: "",
    title: "",
    sampleGraph: "",
    inputTips: "",
    btnStyle: ""
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
      testeeInfo.name = name;
    }
  }
})
