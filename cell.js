class Cell {
    constructor(i, j, w) {
        this.mined = false;
        this.revealed = false;
        this.i = i;
        this.j = j;
        this.cellWidht = w;
        this.x = this.i * this.cellWidht;
        this.y = this.j * this.cellWidht;
        this.nearMines = 0;
    }
    // draw the cell on the screen
    Show() {
        stroke(0);
        noFill();
        rect(this.x, this.y, this.cellWidht, this.cellWidht);

        if (this.revealed) {
            if (this.mined) {
                fill(150);
                rect(this.x, this.y, this.cellWidht, this.cellWidht);
                fill(255);
                ellipse(this.x + (this.cellWidht / 2), this.y + (this.cellWidht / 2), this.cellWidht / 2, this.cellWidht / 2);
            }

            else {
                fill(200);
                rect(this.x, this.y, this.cellWidht, this.cellWidht);
                if (this.nearMines > 0) {
                    textSize(30);
                    fill(0);
                    textAlign(CENTER);
                    text(this.nearMines, this.x + this.cellWidht / 2, this.y + this.cellWidht - 12);
                }

            }
        }
    }
    // return true if the point given is contained in the cell 
    OnTheCell(x, y) {
        return (x > this.x && x < this.x + this.cellWidht && y > this.y && y < this.y + this.cellWidht);
    }
    //set the cell as mined
    MineIt() {
        this.mined = true;
    }
    // return true if the cell is mined, false if its not
    IsMined() {
        return this.mined;

    }

    // game over function

    gameOver(won) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (grid[i][j].IsMined() && !grid[i][j].revealed) {
                    grid[i][j].Reveal();
                }
            }
        }
        if (won)
            window.alert("We have a winner!");
        else {
            window.alert("BOOOOM!");
        }
    }

    // count near mines and assign to nearMines
    countNearMines() {
        let nm = 0;
        if (this.mined) {
            this.nearMines = -1;
            return;
        }
        for (let xDiff = -1; xDiff <= 1; xDiff++) {
            for (let yDiff = -1; yDiff <= 1; yDiff++) {
                let i = this.i + xDiff;
                let j = this.j + yDiff;
                if (i > -1 && i < cols && j > -1 && j < rows) {
                    if (grid[i][j].IsMined()) {
                        nm++;
                    }
                }
            }
        }
        this.nearMines = nm;
    }



    //reveal the cell and near empty cells if near mines is 0 //
    Reveal() {
        if (!this.revealed) {
            uncoveredCells--;
        }
        this.revealed = true;
        console.log(uncoveredCells);

        if (this.nearMines == 0) {
            for (let xDiff = -1; xDiff <= 1; xDiff++) {
                for (let yDiff = -1; yDiff <= 1; yDiff++) {
                    let i = this.i + xDiff;
                    let j = this.j + yDiff;
                    if (i > -1 && i < cols && j > -1 && j < rows) {
                        let nearCell = grid[i][j];
                        if (!nearCell.mined && !nearCell.revealed) {
                            nearCell.Reveal();
                        }
                    }
                }
            }
        }
    }

    Turn() {
        if (this.IsMined()) {
            this.gameOver(false);
        }
        if (uncoveredCells == numberOfMines) {
            this.gameOver(true)

        }


    }


}















