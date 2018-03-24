export default {
  postParams: null,//post参数
  publicData: null,//公用数据,
  privateData: null,//私有数据
  init: function () {
    for (let key in this) {
      if (this[key] && typeof (this[key]) != "function") {
        this[key] = null;
      }
    }
  }
}