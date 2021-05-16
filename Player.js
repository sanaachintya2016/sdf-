class Player {
constructor(x,y){
this.x = x
this.y = y
this.spt = createSprite(this.x,this.y,50,50)
this.spt.shapeColor="orange";
}
move (xdaair,ydaair){
this.spt.x +=xdaair*grid;
this.spt.y +=ydaair*grid;
}
}