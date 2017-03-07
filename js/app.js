var stageWidth = 640;
var stageHeight = 480;
var stage;
var circle, rect, polyStar, roundRect; 

function init(){
	var canvas = document.getElementById("canvas");
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	//new stage
	stage = new createjs.Stage(canvas);
	
	//enables mouse over for this stage's display list
	stage.enableMouseOver();

	//header text
	var text = new createjs.Text("Drag & drop these shapes", "30px Arial", "#000000");
	text.x = stageWidth/2 - text.getMeasuredWidth()/2;
	text.y = 80;
	stage.addChild(text);

	//circle
	circle = new createjs.Shape();
	circle.graphics.beginFill(createjs.Graphics.getRGB(0,255,255));
	circle.graphics.drawCircle(0,0,40);
	circle.x = stageWidth/2;
	circle.y = stageHeight/2;
	circle.on("pressmove", pressHandler);
	stage.addChild(circle);

	//rectangle 
	rect = new createjs.Shape();
	rect.graphics.beginFill(createjs.Graphics.getRGB(255,255,0));
	rect.graphics.rect(0,0,100,60);
	rect.regX = 50;
	rect.regY = 30;
	rect.x = stageWidth/2 - 150;
	rect.y = stageHeight/2;
	rect.on("pressmove", pressHandler);
	stage.addChild(rect);

	//poly star
	polyStar = new createjs.Shape();
	polyStar.graphics.beginFill(createjs.Graphics.getRGB(255,0,255));
	polyStar.graphics.drawPolyStar(0, 0, 50, 5, 0.6, -90);
	polyStar.x = stageWidth/2 + 150;
	polyStar.y = stageHeight/2;
	polyStar.on("pressmove", pressHandler);
	stage.addChild(polyStar);

	//round rectangle
	roundRect = new createjs.Shape();
	roundRect.graphics.beginFill(createjs.Graphics.getRGB(0, 0, 255));
	roundRect.graphics.drawRoundRect(0, 0, 150, 80, 5);
	roundRect.x = stageWidth/2 + 260;
	roundRect.y = stageHeight/2 - 40;
	roundRect.on("pressmove", pressHandler);
	stage.addChild(roundRect);

	//draw on the canvas
	stage.update(); 
}

//event handler for the shapes
function pressHandler(e){
	e.target.x = e.stageX;
	e.target.y = e.stageY;
	stage.update(); 
}
