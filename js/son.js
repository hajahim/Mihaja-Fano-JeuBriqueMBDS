class Son {
  
  constructor(filename) {
    this.filename = filename;
    this.track = new Audio(filename);
  }

  play() {
    this.track.play();
  }

}