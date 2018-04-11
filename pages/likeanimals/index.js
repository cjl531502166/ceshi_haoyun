// pages/likeanimals/btnIndex.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    npcAvatarurl: "",//系统头像
    dialogData: [],//对话数据
    userAvatarurl: '',//用户头像
    answerOptions: null,//按钮键值
    showBtns: false,//是否显示键盘按钮
    questions: [],//系统问题
    btnIndex: [],//按钮索引数组
    currentQid: 0,//当前问题
    answerRecord: [],//记录回答
    resultData: [],//测试结果预览
    isPlayed: false,//是否已经玩过一次
    toView: '',//页面跟随
    isClickable: true//答案是否可以点击
  },

  /**
   * 生命周期函数--监听页面加载
   */
  _init() {
    let data = {
      "npcAvatarurl": "https://image.taotaoxi.cn/wechat-app/flow/npcIcon.jpg",
      "userAvatarurl": app.globalData.userInfo.avatarUrl,
      "answerOptions": ['狗', '熊', '猴子', '狮子', '马', '松鼠', '羊', '兔子', '企鹅', '猫'],
      "questions": [
        {
          qid: 1,
          qcontent: '以下你最喜欢的动物是什么？'
        }, {
          qid: 2,
          qcontent: '接下来选出你第二喜欢的动物？'
        }, {
          qid: 3,
          qcontent: '最后选出你第三喜欢的动物是什么？'
        }
      ]
    }
    this.data.btnIndex.length = data.answerOptions.length;
    this.setData({
      npcAvatarurl: data.npcAvatarurl,
      userAvatarurl: data.userAvatarurl,
      answerOptions: data.answerOptions,
      dialogData: [],
      questions: data.questions,
      currentQid: 0,
      btnIndex: [],
      resultData: [],
      isPlayed: false,
      isClickable: true
    });
  },
  onShow:function(){
    this._toBottom();
  },
  onLoad: function (options) {
    this._init();
  },
  _sendMsgHandle(e) {
    let btnIndex = e.detail.index //按钮索引
      , txt = e.detail.txt //按钮文本
      , obj_1 = null
      , obj_2 = null
      , btnIndexRecordArr = this.data.btnIndex //记录已经点过过的按钮索引
      , optsDataArr = this.data.dialogData //问答数据
      , timer = null;
    this._toBottom();
    if (timer) clearTimeout(timer);
    if (btnIndexRecordArr.indexOf(btnIndex) != -1) return false;
    obj_1 = { "id": 1, "txt": txt };
    optsDataArr.push(obj_1);
    this.setData({
      dialogData: optsDataArr
    });
    if (btnIndex == 'start') {
      this.setData({
        showBtns: true
      });
    } else if (btnIndex == 'again') {
      this._init();
      return false;
    } else {
      this.data.answerRecord.push({ "aid": this.data.currentQid, "as": txt });
      btnIndexRecordArr[btnIndex] = btnIndex;
      this.setData({
        btnIndex: btnIndexRecordArr,
        isClickable: false
      });
    };
    // 是否全部回答完毕
    if (this.data.currentQid < this.data.questions.length) {
      obj_2 = { "id": 0, "txt": this.data.questions[this.data.currentQid].qcontent };
      optsDataArr.push(obj_2);
      this.data.currentQid++;
      timer = setTimeout(() => {
        this.setData({
          dialogData: optsDataArr,
          isClickable: true
        });
        this._toBottom();
      }, 1000);
    } else {
      console.log(this.data.answerRecord);
      // 出结果
      let timer_2 = null
        , resData = null;
      clearTimeout(timer);
      wx.showLoading({
        mask: true,
        title: '计算结果中'
      });
      // 模拟ajax返回结果
      timer_2 = setTimeout(() => {
        resData = [
          {
            showImg: 'https://image.taotaoxi.cn/wechat-app/like-animals/like-animalsBanner.png',
            txt: ''
          }, {
            showImg: '',
            txt: '点击放大查看你的结果页面'
          }
        ];
        this.setData({
          resultData: resData,
          showBtns: false,
          isPlayed: true
        });
        this._toBottom();
        wx.hideLoading();
      }, 1500)
    }
  },
  _toBottom() {
    this.setData({
      toView: 'bottom_1'
    });
  }
})