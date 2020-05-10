class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/me.jpg");
    this.image2 = loadImage("sprites/smoke.png");

    this.path = [];

  }
  

  display() {

    super.display();

    if(this.body.velocity.x>10 && this.body.position.x>205){

      var Pos = [this.body.position.x, this.body.position.y];
    
    this.path.push(Pos);

    }
  

        for(var i = 0; i<this.path.length; i++){

      image(this.image2,this.path[i][0],this.path[i][1])

    }
        
  }
}
