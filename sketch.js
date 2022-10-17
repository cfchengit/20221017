function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER)     //設定方塊座標點以中心點為座標
  background(0); //背景顏色要為黑色???應該為??? 
  noFill() //不充滿顏色 
  stroke(255); //框線為白色 
  var w= mouseX/10 
  for(var j=0;j<height/50;j++)
  {
    for(var i=0;i<width/50;i++)  //i++就是為i=i+1
    {
      stroke(255,255,0)
      ellipse(25+50*i,25+50*j,mouseX/10 )  //座標(??,??)產生一個50直徑的圓
      stroke(255)
      rect(25+50*i,25+50*j,mouseY/4)
      stroke("#023047")
      ellipse(50+50*i,50+50*j,mouseY/10) //右下角的小圓
    }
  }
}
