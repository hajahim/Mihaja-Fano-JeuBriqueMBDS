class Score extends ObjetGraphique {

  constructor(context, incrementParam) {
    super(5, 25, context, 'white', 0, 0);
    this.points = 0;
    this.comboCount = 0;
    this.increment = incrementParam;
  }

  incrementerCombo() {
    this.comboCount++;
    let x = Math.random() * this.context.canvas.width;
    let y = Math.floor(Math.random() * ((this.context.canvas.height - 300) + 100)  + 100)
    this.context.save();
    this.context.beginPath();
    this.context.translate(x, y);
    this.context.fillStyle = 'red';
    this.context.font = "30px Arial bold";
    this.context.fillText("COMBO "+this.comboCount, 0, 0);
    this.context.restore();
  }

  ajouterPoints() {
    this.points += this.increment;
    this.incrementerCombo();
  }

  resetPoints() {
    this.points = 0;
  }

  draw() {
    this.context.save();
    this.context.beginPath();
    this.context.translate(this.x, this.y);
    this.context.fillStyle = this.couleur;
    this.context.font = "20px Arial";
    this.context.fillText("SCORE : "+this.points, 0, 0);
    this.context.restore();
  }

}