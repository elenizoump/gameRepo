class Background {
  constructor(game) {
    this.height = game.height
    this.width = game.width
    this.context = game.context

    //this.x = original position - initial point of reference
    this.x = 0;
    this.velocityX = -2;
    this.img = new Image();
    this.img.src = "images/background - hercules.png";
  }
  draw() {
    //this.context makes background move
    this.context.drawImage(this.img, this.x, 0, this.width, this.height);
    this.context.drawImage(this.img, this.x + this.width, 0, this.width, this.height);
  }
  update() {
    this.x += this.velocityX;
    if (this.x < -this.width) this.x = 0;
  }
}