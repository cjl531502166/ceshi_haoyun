let drawCanvas = {
  ctx: null,
  canvasWidth: null,
  canvasHeight: null,
  init(config) {
    if (config instanceof Object) {
      this.ctx = config.ctx = null;
      this.canvasWidth = config.width || 320;
      this.canvasHeight = config.height || 150;
    } else {
      console.error(`${[].slice.call(arguments)}无效参数`);
    }
  }
}