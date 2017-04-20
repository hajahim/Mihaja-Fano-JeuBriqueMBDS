class Collision {

  constructor(jeu) {
    this.jeu = jeu;
  }

  circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
    let testX = cx;
    let testY = cy;
    if (testX < x0) testX = x0;
    if (testX > (x0 + w0)) testX = (x0 + w0);
    if (testY < y0) testY = y0;
    if (testY > (y0 + h0)) testY = (y0 + h0);
    return (((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY)) < r*r);
  }

  testerCollisionTaquetAvecBalles(balle, taquet) {
    if(this.circRectsOverlap(taquet.x, taquet.y, taquet.width, taquet.height, balle.x, balle.y, balle.rayon)) {
      return true;
    }
    return false;
  }

  testerCollisionPlateauAvecBalles(balle, plateau, taquet) {
    let collisonAvecTaquet = this.testerCollisionTaquetAvecBalles(balle, taquet);
    if(!balle.collision && collisonAvecTaquet) {
      balle.collision = true;
      this.jeu.score.ajouterPoints();
    }
    if(this.circRectsOverlap(plateau.x, plateau.y, plateau.width, plateau.height, balle.x, balle.y, balle.rayon) && !collisonAvecTaquet) {
      balle.vy = -balle.vy;
      let R = Math.round(255 * Math.random());
      let G = Math.round(255 * Math.random());
      let B = Math.round(255 * Math.random());
      let couleur = "rgb(" + R + "," + G + "," + B +")";
      balle.couleur = couleur;
      this.jeu.score.comboCount = 0;
    }
  }

  testerCollisionBriqueAvecBalles(balles, index2, balle, briques) {
    briques.forEach((brique, index) => {
      if(this.circRectsOverlap(brique.x, brique.y, brique.width, brique.height, balle.x, balle.y, balle.rayon)) {
        balle.vy = -balle.vy;
        briques.splice(index, 1);
        balle.briqueTouchee++;
        brique.audio.casser.play();
      }
    });
    if(balle.briqueTouchee > 1) {
      console.log(index2);
      balles.splice(index2, 1);
    }
  }

  testeCollisionBalleAvecMurs(balle, index, tableaux) {
    if(((balle.x + balle.rayon) > this.jeu.context.canvas.width) || ((balle.x - balle.rayon) < 0)) {
      balle.vx = -balle.vx;
    }
    if(((balle.y + balle.rayon) > this.jeu.context.canvas.height) || ((balle.y - balle.rayon) < 0)) {
      balle.vy = -balle.vy;
    }
    if( (balle.y + balle.rayon) > this.jeu.context.canvas.height ) {
      tableaux.splice(index, 1);
      balle.audio.falling.play();
    }
  }

  testeCollisionTaquetAvecMurs(taquet) {
    if((taquet.x + taquet.width) > this.jeu.context.canvas.width) {
      taquet.x = this.jeu.context.canvas.width - taquet.width;
      taquet.v = -taquet.v;
    } else if(taquet.x < 0) {
      taquet.x = 0;
      taquet.v = -taquet.v;
    }
  }
}