class Fps {

  constructor() {
    this.fpsContainer;
  }

  initFPS() {
    this.fpsContainer = document.createElement('div');
    document.body.appendChild(this.fpsContainer);
  }

  measureFPS(newTime) {
    if(this.lastTime === undefined) {
      this.lastTime = newTime;
      return;
    }
    let diffTime = newTime - this.lastTime;
    if (diffTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastTime = newTime;
    }
    this.fpsContainer.innerHTML = 'FPS: ' + this.fps;
    this.frameCount++;
  }

}