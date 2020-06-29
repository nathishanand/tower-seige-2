class Block{
   constructor(x, y, width, height) {
       var options = {
          
           restitution :0.4     
       }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       World.add(world, this.body);
     }
     display(){
       if(this.body.speed<3){
       var pos= this.body.position;
       push();
       translate(pos.x, pos.y);
       rectMode(CENTER);
       rect(0,0,this.width, this.height);
       pop();
       }else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 1;
        tint(2, this.visibility);
        pop();
       }
     }
}