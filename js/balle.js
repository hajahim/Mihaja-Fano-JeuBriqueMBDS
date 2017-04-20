class Balle extends ObjetGraphique {
  constructor(x, y, rayon, context, couleur, vx, vy) {
    super(x, y, context, couleur, vx, vy);
    this.rayon = rayon;
    this.audio = {};
    this.audio['falling'] = new Son('audio/ball-falling.mp3');
    this.collision = false;
    this.briqueTouchee = 0;
  }
  
  draw() {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.beginPath();
    this.context.arc(0, 0, this.rayon, 0, 2 * Math.PI);
    this.context.fillStyle = this.couleur;
    this.context.fill();
    this.context.closePath();
    this.context.restore();
  }
}