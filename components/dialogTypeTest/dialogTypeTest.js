// components/dialogTypeTest/dialogTypeTest.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 对话数据
     */
    dialogData: {
      type: null,
      value: ''
    },
    /**
     * 计算结果数据
     */
    resultData: {
      type: null,
      value: ''
    },
    /**
     * 系统头像
     */
    npcAvatarurl: {
      type: String,
      value: ''
    },
    /**
     * 用户头像
     */
    userAvatarurl: {
      type: String,
      value: ''
    },
    /**
     * 键盘字母选项
     */
    answerOptions: {
      type: null,
      value: ''
    },
    /**
     * 是否显示按钮键盘
     */
    showBtns: {
      type: Boolean,
      value: false
    },
    /**
     * 按钮索引数组
     */
    btnIndex: {
      type: Array,
      value: []
    },
    /**
     * 按钮式否可点击
     */
    isClickable: {
      type: Boolean,
      value: true
    },
    /**
     * 是否重玩
     */
    isPlayed: {
      type: Boolean,
      value: ''
    },
    /**
     * 触底
     */
    toView: {
      type: String,
      value: ''
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    initialData: [], //初始化数据
    height: null
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
        ],
        height: `${wx.getSystemInfoSync().windowHeight}px`
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
