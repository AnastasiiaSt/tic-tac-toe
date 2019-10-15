class TicTacToe {
  constructor() {
    this.playerHistory = ['x'];
    this.index = 0;
    this.playField = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];
  }

  getCurrentPlayerSymbol() {
    return this.playerHistory[this.index];
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.playField[rowIndex][columnIndex] === null) {
      this.playField[rowIndex][columnIndex] = this.playerHistory[this.index];
      if (this.playerHistory[this.index] === 'x') {
      this.index++;
      this.playerHistory[this.index] = 'o';
    } else {
      this.index++;
      this.playerHistory[this.index] = 'x';
    }
  }
  }

  isFinished() {
    return this.noMoreTurns() || (this.getWinner() !== null);
  }

  getWinner() {
    let hor = 0;
    let ver = 0;
    let diag1 = 0;
    let diag2 = 0;
    for (let i = 0; i < this.playField.length; i++) {
      for (let j = 0; j < this.playField.length; j++) {
        if (this.playField[i][j] === this.playerHistory[this.index - 1]) {
          hor++;
        }
        if (i === j && this.playField[i][j] === this.playerHistory[this.index - 1]) {
          diag1++;
        }
        if (i + j === 2 && this.playField[i][j] === this.playerHistory[this.index - 1]) {
          diag2++;
        }
        if (this.playField[j][i] === this.playerHistory[this.index - 1]) {
          ver++;
        }
      }
      if (hor === 3 || diag1 === 3 || diag2 === 3 || ver == 3) {return this.playerHistory[this.index - 1]};
      hor = 0;
      ver = 0;
    }
    return null;
    }

  noMoreTurns() {
    return this.index === 9;
  }

  isDraw() {
    return (this.index === 9) && (this.getWinner() === null);
  }

  getFieldValue(rowIndex, colIndex) {
    return this.playField[rowIndex][colIndex];
  }
} 

module.exports = TicTacToe;
