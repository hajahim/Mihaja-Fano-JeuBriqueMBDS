class Score extends ObjetGraphique {

  constructor(context, incrementParam, taquet) {
    super(5, 25, context, 'white', 0, 0);
    this.points = 0;
    this.comboCount = 0;
    this.increment = incrementParam;
    this.level = 0;
    this.taquet = taquet;
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

  augmenterLevel() {
    this.level++;
    this.taquet.width -= (this.level * 10);
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
    this.context.translate(this.context.canvas.width - 100, 0);
    this.context.fillText("LEVEL : "+this.level, 0, 0);
    this.context.restore();
  }

}