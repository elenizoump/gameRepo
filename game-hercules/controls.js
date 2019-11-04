class Controls {
  constructor(game) {
    this.game = game;
    this.player = game.player
  }
  setControls() {

    window.addEventListener('keydown', (event) => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();

      // React based on the key pressed
      switch (event.keyCode) {
        case 37:
          // this.player.moveLeft();
          this.player.movingDirection = 'left';
          // console.log(this.player.x, this.player.y);
          break;

        case 39:
          this.player.movingDirection = 'right';
          // this.player.moveRight();
          // console.log(this.player.x, this.player.y);
          break;
      }
    });

    window.addEventListener('keyup', (event) => {
      event.preventDefault();
      switch (event.keyCode) {
        case 37:
          this.player.movingDirection = null;
          break;

        case 39:
          this.player.movingDirection = null;
          break;
      }
    });
  }
}