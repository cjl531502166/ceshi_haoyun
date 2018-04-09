// components/dialogTypeTest/dialogTypeTest.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dialogData: {
      type: null,
      value: ''
    },
    npcAvatarurl: {
      type: String,
      value: ''
    },
    userAvatarurl: {
      type: String,
      value: ''
    },
    answerOptions: {
      type: null,
      value: ''
    },
    showBtns: {
      type: Boolean,
      value: false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    initialData: [], //初始化数据
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 初始化方法
    _init() {
      let initData = {
        initialData: [
          {
            showImg: 'https://image.taotaoxi.cn/wechat-app/like-animals/like-animalsBanner.png',
            txt: ''
          }, {
            showImg: '',
            txt: '这个测试小桃分享给了五个朋友测，每个人都说爆准。一定要凭直觉选，不能思考太久，思考太久会变得不那么准确喔。'
          }, {
            showImg: '',
            txt: '请点击开始测算'
          }
        ]
      }
      this.setData(initData);
    },
    _sendMsg(e) {
      let data = {
        "index": e.currentTarget.dataset.index,
        "txt": e.currentTarget.dataset.text
      }
      this.triggerEvent('_sendMsg', data);
    }
  },
  /**
   * 组件挂载之后
   */
  attached: function () {
    this._init();
  }
})
