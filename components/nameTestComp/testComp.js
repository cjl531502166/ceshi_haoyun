// components/nameTestComp/testComp.js
import testeeInfo from '../../models/testeeInfo.js';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    customStyle: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
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
