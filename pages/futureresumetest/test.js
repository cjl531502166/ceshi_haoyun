// pages/futureresumetest/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testQuestions: null,
    currentQid: 0,
    currQuestion: {},
    questionAnsweredClass: 'bgDeep',
    answerSelectClass: 'nav_click',
    targetId: null
  },
  _init() {
    let questions = [{
      qid: 1,
      question: '聚会中你更愿意成为怎样的角色',
      answer: {
        A: '旁观者，喜欢关注别人的语言行为',
        B: '组织者和演讲者，喜欢成为别人的焦点'
      }
    }, {
      qid: 2,
      question: '聚会中你更愿',
      answer: {
        A: '旁观者，喜为',
        B: '组织者和演讲者，喜欢焦点'
      }
    }]
      , currQuestion = questions[0];
    this.setData({
      testQuestions: questions,
      currQuestion: currQuestion
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._init();
  },
  bindSelect(e) {
    let targetId = e.currentTarget.dataset.aa
      , id = this.data.currentQid
      , questions = this.data.testQuestions
      , currQuestion = {};
    id++;
    if (id < questions.length - 1) {
      currQuestion = questions[id];
    } else {
      currQuestion = questions[questions.length - 1];
    }
    this.setData({
      targetId: targetId
    });
    this.updateView(currQuestion, id);
  },
  updateView(currQuestion, id) {
    let that = this;
    that.setData({
      currQuestion: currQuestion,
      currentQid: id
    });
    let timer = setTimeout(() => {
      that.setData({
        targetId: null
      });
      clearTimeout(timer);
    }, 300);
  }
})