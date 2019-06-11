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
    }
}
        
