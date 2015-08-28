var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//var prompts = rl.createInterface(process.stdin, process.stdout);
//var choice = "";

function Tictactoe(name) {
  this.name = name;
  this.board = [];
  this.victory = false;
  this.wins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [2, 5, 8]];
}

Tictactoe.prototype.startGame = function() {
  for (var i = 0; i < 10 && this.victory == true; i++) {
    this.makeMove();
    this.winCheck(this.board);
  }
  console.log('Game over!');
}

Tictactoe.prototype.winCheck = function(board) {
  victory = false;
}

Tictactoe.prototype.createBoard = function() {
  for (var i = 0; i < 10; i++) {
    this.board.push('');
  }
}

Tictactoe.prototype.displayBoard = function(board){
  console.log(this.board[0] + ' | ' + this.board[1] + ' | ' + this.board[2]);
  console.log('______');
  console.log(this.board[3] + ' | ' + this.board[4] + ' | ' + this.board[5]);
  console.log('______');
  console.log(this.board[6] + ' | ' + this.board[7] + ' | ' + this.board[8]);
}

Tictactoe.prototype.sayName = function() {
  console.log(this.name);
}

Tictactoe.prototype.makeMove = function() {
  rl.question("(0-8)", function(answer) {
        var answer = Number(answer);
        this.board[answer] = 'x';
        // Call the callback function once the player is created.
        callback(player);
    });
}

var myGame = new Tictactoe('graham');
myGame.sayName();
myGame.createBoard();
myGame.displayBoard();
myGame.startGame();