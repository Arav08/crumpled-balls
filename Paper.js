class Paper {
    constructor(x, y, width, height) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.x = x;
		this.y = y;
		this.PaperWidth = width;
		this.PaperHeight = height;
		this.body=Bodies.rectangle(x, y, this.PaperWidth, this.PaperHeight , options);
		this.image = loadImage("paper.png");
		World.add(world, this.body)
	}
	
	
    display(){
			var PaperPos=this.body.position;
			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
			strokeWeight(4);
			fill(255)
			rotate(this.angle)
			image(this.image, 0, 0, this.width, this.height);
			pop()

    }

}