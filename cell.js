class Cell {
    constructor(i, j, w) {
        this.mined = false;
        this.revealed = false;
        this.i = i;
        this.j = j;
        this.cellWidht = w;
        this.x = this.i * this.cellWidht;
        this.y = this.j * this.cellWidht;
        this.mineNear = 1;
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
                if (this.mineNear > 0) {
                    textSize(30);
                    fill(0);
                    textAlign(CENTER);
                    text(this.mineNear, this.x + this.cellWidht / 2, this.y + this.cellWidht - 12);
                }

            }
        }
    }
    // return true if the point given is contained in the cell 
    OnTheCell(x, y) {
        return (x > this.x && x < this.x + this.cellWidht && y > this.y && y < this.y + this.cellWidht);
    }

    //reveal the cell
    Reveal() {
        this.revealed = true;
    }

    //set the cell as mined
    MineIt() {
        this.mined = true;
    }
    // return true if the cell is mined, false if its not
    IsMined() {
        return this.mined;
    }
}










