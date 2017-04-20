class Plateau extends ObjetGraphique {

  constructor(x, y, context, couleur, width, height, vx = 0, vy = 0) {
    super(x, y, context, couleur, vx, vy);
    this.width = width;
    this.height = height;
  }

  draw() {
    this.context.save();
    this.context.beginPath();
    this.context.translate(this.x, this.y);
    this.context.fillStyle = this.couleur;
    this.context.fillRect(0, 0, this.width, this.height);
    this.context.restore();
  }
  
}