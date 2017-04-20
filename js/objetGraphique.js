
class ObjetGraphique {
  constructor(x, y, context, couleur, vx, vy) {
    this.x = x;
    this.y = y;
    this.context = context;
    this.couleur = couleur;
    this.vx = vx;
    this.vy = vy;
  }
  
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  draw() { }
}