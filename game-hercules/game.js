class Game {
  constructor($canvas) {
    this.canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(this);
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.obstacles = [];
    this.speed = 200;
    this.obstacleTimer = 0;
    this.gameOver = new GameOver(this);
  }

  start() {
    this.animation();
    this.controls.setControls();
  }

  drawEverything() {
    this.clearAll();
    this.background.draw();
    this.player.draw();
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
    }

  };

  animation(timestamp) {
    if (this.player.life >= 0) {
      this.drawEverything();
      this.updateEverything(timestamp);
      window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    } else {
      this.gameOver.draw();
    }
  };

  gameOver(timestamp) {
    this.context.fillStyle = 'white';
    this.context.fillRect(this.x, this.y, this.width, 20);
  };

  updateEverything(timestamp) {
    this.player.update();

    if (this.obstacleTimer < timestamp - this.speed) {
      this.obstacles.push(new Goodies(this));
      this.obstacles.push(new Badies(this));
      this.obstacleTimer = timestamp
    };

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].update();
      if (this.obstacles[i].y > this.canvas.height) {
        this.obstacles.splice(i, 1);
      }
    };

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      const collided = this.player.checkCollision(this.player, obstacle);
      if (collided) {
        if (obstacle.context.fillStyle === "green") {
          this.obstacles.splice(i, 1);
          this.player.score += 100;
          console.log(this.player.score);
        } else {
          // this.player.image.translate(this.player.x, this.player.y)
          // this.player.image.rotate((Math.PI / 180) * 90)
          if (this.player.life >= 0) {
            this.player.life--;
          }
          console.log(this.player.life);
        }
      }
    }
  }
  clearAll() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };
}