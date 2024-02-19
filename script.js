//created by Tolga Olcay 2024
//References courtesy of W3schools.com




//gallery 1

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("red", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "red";
}


//gallery 2

var slideIndexTwo = 1;
showDivsTwo(slideIndexTwo);

function plusDivsTwo(n) {
  showDivsTwo(slideIndexTwo += n);
}

function currentDivTwo(n) {
  showDivsTwo(slideIndexTwo = n);
}


function showDivsTwo(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo2");
  if (n > x.length) {slideIndexTwo = 1}    
  if (n < 1) {slideIndexTwo = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("red", "");
  }
  x[slideIndexTwo-1].style.display = "block";  
  dots[slideIndexTwo-1].className += "red";
}







//gallery 3

var slideIndexThree = 1;
showDivsThree(slideIndexThree);

function plusDivsThree(n) {
  showDivsThree(slideIndexThree += n);
}

function currentDivThree(n) {
  showDivsThree(slideIndexThree = n);
}


function showDivsThree(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("demo3");
  if (n > x.length) {slideIndexThree = 1}    
  if (n < 1) {slideIndexThree = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("red", "");
  }
  x[slideIndexThree-1].style.display = "block";  
  dots[slideIndexThree-1].className += "red";
}






//gallery 4

var slideIndexFour = 1;
showDivsFour(slideIndexFour);

function plusDivsFour(n) {
  showDivsFour(slideIndexFour += n);
}

function currentDivFour(n) {
  showDivsFour(slideIndexFour = n);
}



function showDivsFour(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("demo4");
  if (n > x.length) {slideIndexFour = 1}    
  if (n < 1) {slideIndexFour = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("red", "");
  }
  x[slideIndexFour-1].style.display = "block";  
  dots[slideIndexFour-1].className += "red";
}


//gallery 5

var slideIndexFive = 1;
showDivsFive(slideIndexFive);

function plusDivsFive(n) {
  showDivsFive(slideIndexFive += n);
}

function currentDivFive(n) {
  showDivsFive(slideIndexFive = n);
}


function showDivsFive(n) {
  var i;
  var x = document.getElementsByClassName("mySlides5");
  var dots = document.getElementsByClassName("demo5");
  if (n > x.length) {slideIndexFive = 1}    
  if (n < 1) {slideIndexFive = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("red", "");
  }
  x[slideIndexFive-1].style.display = "block";  
  dots[slideIndexFive-1].className += "red";
}




