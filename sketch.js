function setup(){
 //createCanvas(400, 400);
 createCanvas(windowWidth,windowHeight);
 //background("#000000") ;
 colorMode (HSB)
}

function draw(){ //畫圖中，每秒會執行60次
 // backgnound（220）；//背景顏色，顏色為灰色，數字越大越白（最大值到255）、數字越小越黑（最小值到e）
 //%代表求餘數，mousex為滑鼠的x軸座標，當滑鼠x軸座標除以255的餘數，餘數的值一定在0~254之間
 //backgnound（60, 40, 100）；//背景顏色，顏色為黃色，使用HSB的方式定義顏色，第一個數字為色相的值
 fill (frameCount%360,50,60);
 stroke(300,50,60);
 // nostroke（）；//取消描邊
 c_width=100;//圓的寬度
 c_height=50;//圓的高度
 for(let i=0;i<width;i=i+c_width){//i=0,100,200,300..，width為畫布的寬度
   h=map(i,0,width,0,360);//將i從0～width的範圍對應到0～360的範圍，h為色相的值
   for(let j=0;j<height;j=j+c_height){ //
     s=map(j,0,height,0,100);//將j從0～height的範圍對應到0～100的範圍，s為飽和度的值
     fill(h,s,60);//填充顏色，使用HSB的方式定義顏色
     ellipse(i,j,c_width,c_height);//畫一個圓，第一個數字為圓心的x座標，第二個數字為圓心的y座標
    }
  }
}

function windowResized(){
 resizeCanvas(windowWidth,windowHeight); //畫布可以重新定義寬與高
}