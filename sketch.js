var drawing = [];
var currentpath = [];
var isdrawing = false;

function setup() {
  canvas = createCanvas(800,400);
  database = firebase.database();
  canvas.mousePressed(start);
  canvas.mouseReleased(end);
  form = new Form();
  form.display();

}

function draw() {
  background("black"); 
  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentpath.push(point);
  } 
  strokeWeight(5);
  noFill();
  stroke(178,102,255);

  for(var i=0; i<drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j=0; j<path.length; j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

  form.button.mousePressed(()=>{
    saveDrawing();
  })

}

function start(){
  isdrawing = true;
  currentpath = [];
  drawing.push(currentpath);
}

function end(){
  isdrawing = false;
}

function saveDrawing(){
  var ref = database.ref('drawing');
  var data = {
    name:"Vanessa",
    drawing:drawing
  }

  var result = ref.push(data,dataSent); 

  function dataSent(status){
    console.log(status);
  }

}