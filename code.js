var counter = 0;


function addHeart()
{
  counter++;
  var spaceToMove = 100

  const triangle = document.createElement("div");
  
  triangle.style.width = "100px";
  triangle.style.height = "100px";
  triangle.style.rotate = "45deg";

  triangle.style.backgroundColor = "red";
  triangle.style.position = "absolute";
  triangle.style.top = spaceToMove+"px";
  triangle.style.left =  spaceToMove +"px";

  const currentTriangle= document.getElementById("div");
  document.body.insertBefore(triangle, currentTriangle);

  const circle1 = document.createElement("div");
  
  
  circle1.style.width = "100px";
  circle1.style.height = "100px";
  circle1.style.borderRadius = "50%";

  circle1.style.backgroundColor = "red";
  circle1.style.position = "absolute";
  circle1.style.top = spaceToMove-30+"px";
  circle1.style.left =  spaceToMove-30+"px";

  const currentcircle1 = document.getElementById("div");
  document.body.insertBefore(circle1, currentcircle1);


  const circle2 = document.createElement("div");
  
  circle2.style.width = "100px";
  circle2.style.height = "100px";
  circle2.style.borderRadius = "50%";

  circle2.style.backgroundColor = "red";
  circle2.style.position = "absolute";
  circle2.style.top = spaceToMove-30+"px";
  circle2.style.left =  spaceToMove+30+"px";

  const currentcircle2 = document.getElementById("div");
  document.body.insertBefore(circle2, currentcircle2);




}