class Ecouteur {

  constructor(jeu) {
    this.jeu = jeu;
  }

  ecouter() {
    window.addEventListener('keydown', (event) => this.toucheEnfoncee(event));
    window.addEventListener('keyup', (event) => this.toucheRelachee(event));
    this.jeu.canvas.addEventListener('mouseup', (event) => this.boutonSourisRelache(event)); 
    this.jeu.canvas.addEventListener('mousedown', (event) => this.boutonSourisEnfonce(event)); 
    this.jeu.canvas.addEventListener('mousemove', (event) => this.sourisDeplacee(event)); 
  }

  boutonSourisEnfonce(evt) {
    this.jeu.taquet.v = this.jeu.taquet.v * 5;
  }

  boutonSourisRelache(evt) {
    this.jeu.taquet.v = Math.sign(this.jeu.taquet.v);
  }

  sourisDeplacee(evt) {
    let rect = this.jeu.canvas.getBoundingClientRect();
    let mx = evt.clientX - rect.left;
    let my = evt.clientY - rect.top;
    this.jeu.taquet.x = mx;
    this.jeu.taquet.move();
  }

  toucheEnfoncee(evt) {
    switch(evt.key) {
      case 'ArrowRight' :
        this.jeu.taquet.v = 1;
        break;
      case 'ArrowLeft' :
        this.jeu.taquet.v = -1;
        break;
    }
  }

  toucheRelachee(evt) {
    this.jeu.taquet.vx = 0;
  }

}