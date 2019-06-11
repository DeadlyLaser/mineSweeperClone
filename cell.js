class Cell 
{
    constructor(x,y,w)
    {
    this.mined = true;
    this.reveled = true;
    this.x = x;
    this.y = y;
    this.w = w
    }
    
    Show() 
    {
     rect(this.x,this.y,this.w,this.w);
     if (this.mined)
     {
         ellipse(this.x + (this.w/2),this.y + (this.w/2),this.w/2,this.w/2);

     }
    }
}
        
