class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.dot =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){

    
    var position =[this.body.position.x,this.body.position.y];
    this.dot.push(position)}
    for(var i =0 ; i < this.dot.length; i++){
      image (this.smoke , this.dot[i][0],this.dot[i][1])
    }
  }
}
