// --- positionPause --- //
class PausePosition {
    constructor() {
    }
    draw(play) {
        ctx.clearRect(0, 0, play.width, play.height);
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = "center";
        ctx.fillText("Paused", play.width / 2, play.height / 2 - 300);
        ctx.fillStyle = '#D7DF01';
        ctx.font = "36px Comic Sans MS";
        ctx.fillText("P: back to the current game", play.width / 2, play.height / 2 - 250);
        ctx.fillText("ESC: quit the current game", play.width / 2, play.height / 2 - 210);
        ctx.font = "40px Comic Sans MS";
        ctx.fillStyle = '#ffffff';
        ctx.fillText("Game controls reminder", play.width / 2, play.height / 2 - 120);
        ctx.fillStyle = '#D7DF01';
        ctx.font = "36px Comic Sans MS";
        ctx.fillText("Left Arrow : Move Left", play.width / 2, play.height / 2 - 70);
        ctx.fillText("Right Arrow : Move Right", play.width / 2, play.height / 2 - 30);
        ctx.fillText("Space : Fire", play.width / 2, play.height / 2 + 10);
    }
    keyDown(play, keyboardCode) {
        if (keyboardCode == 'KeyP') { // Back: P
            play.popPosition();
        }
        if (keyboardCode == 'Escape') { // Quit: ESC
            play.pushPosition(new GameOverPosition());
        }
    }
}



