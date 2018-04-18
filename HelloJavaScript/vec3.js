Vec3 = function(x,y,z)
{
    this.x=x;
    this.y=y;
    this.z=z;
    return this;
}


Vec3.prototype.sum=function()
{
    return this.x + this.y+this.z;
}

Vec3.prototype.min=function()
{
    return Math.min(this.x,this.y,this.z);
}

Vec3.prototype.max=function()
{
    return Math.max(this.x,this.y,this.z);
}

Vec3.protype.mid=function()
{
    return Math.mid(this.x,this.y,this.z);
}
