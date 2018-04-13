let drawCanvas = {
  canvasId: null,
  canvasWidth: null,
  canvasHeight: null,
  init: function (config) {
    if (config instanceof Object) {
      this.canvasId = config.canvasId;
      if (!this.canvasId) return false;
      this.canvasWidth = config.width || 320;
      this.canvasHeight = config.height || 150;
    } else {
      console.warn(`${[].slice.call(arguments)}无效参数`);
      return
    }
  },
  darwCanvasBg() {
    let ctx = wx.createCanvasContext(this.canvasId);
    let arg = [].slice.call(arguments);
    let x = arg[0] ? arg[0] : 0;
    let y = arg[1] ? arg[1] : 0;
    let width = arg[2] ? arg[2] : this.canvasWidth;
    let height = arg[3] ? arg[3] : this.canvasHeight;
    let color = arg[4] ? arg[4] : '#000000';
    ctx.fillRect(x, y, width, height);
    ctx.setFillStyle('#000000');
    ctx.fill();
    ctx.draw();
  },
  drawImage() {

  }
}
export { drawCanvas }