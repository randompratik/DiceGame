var x=Math.random();
x=Math.floor(x*6+1);

var image1Locaton="images/dice"+x+".png";
    document.querySelector(".img1").setAttribute("src",image1Locaton);

    var y=Math.random();
y=Math.floor(y*6+1);

var image2Locaton="images/dice"+y+".png";
    document.querySelector(".img2").setAttribute("src",image2Locaton);
   
    if(x>y)
    document.querySelector("h1").textContent="Player 1 wins";
    else if(y>x)
    document.querySelector("h1").textContent="Player 2 wins";
    else 
    document.querySelector("h1").textContent="Draw";