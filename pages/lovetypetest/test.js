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
  /**
  * 生命周期函数--监听页面加载
  */
  /** 初始化 */
  _init() {
    let questions = [
      {
        qid: 1,
        question: '聚会中你更愿意成为怎样的角色',
        answer: {
          A: '旁观者，喜欢关注别人的语言行为',
          B: '组织者和演讲者，喜欢成为别人的焦点'
        }
      }, {
        qid: 2,
        question: '看电影更关注以下哪方面？',
        answer: {
          A: '剧情策划',
          B: '色彩，服饰等'
        }
      }, {
        qid: 3,
        question: '你会因为什么去健身',
        answer: {
          A: '为了好的身材习惯性健身',
          B: '为了在异性面前展示更好的线条'
        }
      }, {
        qid: 4,
        question: '做什么会让我觉得更有成就感？',
        answer: {
          A: '用我独创的方法做好一件事情',
          B: '带领一群人完成我既定的目标'
        }
      }, {
        qid: 5,
        question: '路上遇到乞讨的人你会怎么做？',
        answer: {
          A: '基本不能拒绝帮助那些需要帮助的人',
          B: '除非我觉得他真的需要帮助，不会帮助他们'
        }
      }, {
        qid: 6,
        question: '我更擅长',
        answer: {
          A: '文艺方面的天赋',
          B: '研究分析'
        }
      }, {
        qid: 7,
        question: '如果我穿越回了唐朝，我希望在那里我会_____,',
        answer: {
          A: '改写古代历史，成为火药的发明家，改进火药的应用',
          B: '成为唐太宗时期的一代名臣，积极参与有效沟通，推行社会改革'
        }
      }, {
        qid: 8,
        question: '如果生命中突然多了一年空闲的时间，我更乐意用这一年去：',
        answer: {
          A: '去认识不同的朋友，努力拓宽自己的社交圈',
          B: '在贫困的地区／国家做一年的志愿者'
        }
      }, {
        qid: 9,
        question: '男／女朋友送了我一台微单，我会怎样做?',
        answer: {
          A: '先阅读使用说明书',
          B: '直接尝试怎么拍照；“哦，这玩意儿也未免太复杂了吧'
        }
      }, {
        qid: 10,
        question: '在工作中，我觉得：',
        answer: {
          A: '做好自己能做的工作最重要；做领导太累，不现实 (当然，薪水除外考虑)',
          B: '成为公司或项目的领头负责人更有意思'
        }
      }, {
        qid: 11,
        question: '哪种工作方式更适合你?',
        answer: {
          A: '安稳的工作环境',
          B: '不稳定但丰富多彩的工作环境'
        }
      }
    ]
      , currQuestion = questions[0];
    this.setData({
      testQuestions: questions,
      currQuestion: currQuestion
    });
  },
  /**视图更新 */
  _updateView(currQuestion, id) {
    let that = this;
    that.setData({
      currQuestion: currQuestion ? currQuestion : '',
      currentQid: id
    });
    let timer = setTimeout(() => {
      that.setData({
        targetId: null
      });
      clearTimeout(timer);
    }, 100);

  },
  onLoad: function (options) {
    this._init();
  },
  bindSelect(e) {
    let targetId = e.currentTarget.dataset.aa
      , id = this.data.currentQid
      , questions = this.data.testQuestions
      , currQuestion = {};
    id++;
    this.setData({
      targetId: targetId
    });
    currQuestion = questions[id];
    this._updateView(currQuestion, id);
    if (id >= questions.length) {
      wx.navigateTo({
        url: '/pages/lovetypetestresult/result'
      });
    }
  }
})