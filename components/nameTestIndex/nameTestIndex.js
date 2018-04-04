// components/nameTestComp/testInexComp.js
import testeeInfo from '../../models/testeeInfo.js';
Component({
  /**
   * 组件外部样式
   */
  externalClasses: ['content-bg', 'input-class', 'title-class', 'btn-class'],
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
  },
  attached: function () {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    _bindNameInput(e) {
      let name = e.detail.value;
      testeeInfo.name = name ? name : null;
    },
    _startTest() {
      this.triggerEvent('_startTest', testeeInfo.name);
    }
  }
})
