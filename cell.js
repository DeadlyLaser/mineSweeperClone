class Cell {
    constructor(x, y, w) {
        this.mined = true;
        this.revealed = false;
        this.x = x;
        this.y = y;
        this.w = w;
    }
    // draw the cell on the screen
    Show() {
        stroke(0);
        noFill();
        rect(this.x, this.y, this.w, this.w);

        if (this.revealed) {
            if (this.mined) {
                fill(150);
                rect(this.x, this.y, this.w, this.w);
                fill(255);
                ellipse(this.x + (this.w / 2), this.y + (this.w / 2), this.w / 2, this.w / 2);
            }

            else {
                fill(200);
                rect(this.x, this.y, this.w, this.w);
            }
        }
    }
    // return true if the point given is contained in the cell 
    OnTheCell(x, y) {
        return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
    }

    //reveal the cell
    Reveal(){
        this.revealed = true;
    }
}










