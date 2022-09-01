
var elem1 = document.getElementById("myBar1");
var elem2 = document.getElementById("myBar2");
var elem3 = document.getElementById("myBar3");
var elem4 = document.getElementById("myBar4");
var elem5 = document.getElementById("myBar5"); 
var elem6 = document.getElementById("myBar6");
var elem7 = document.getElementById("myBar7");
var elem8 = document.getElementById("myBar8");

 function move() {
    
  var width1 = 1;
  var width2 = 1;
  var width3 = 1;
  var width4 = 1;
  var width5 = 1;
  var width6 = 1;
  var width7 = 1;
  var width8 = 1;
  var id1 = setInterval(frame1, 20);
  var id2 = setInterval(frame2, 20);
  var id3 = setInterval(frame3, 20);
  var id4 = setInterval(frame4, 20);
  var id5 = setInterval(frame5, 20);
  var id6 = setInterval(frame6, 20);
  var id7 = setInterval(frame7, 20);
  var id8 = setInterval(frame8, 20);

  function frame1() {
    if (width1 >= 95) {
      clearInterval(id1);
    } else {
      width1++; 
      elem1.style.width = width1 + '%';
    }
  }

  function frame2() {
    if (width2 >= 90) {
      clearInterval(id2);
    } else {
      width2++; 
      elem2.style.width = width2 + '%';
    }
  }

  function frame3() {
    if (width3 >= 85) {
      clearInterval(id4);
    } else {
      width3++; 
      elem3.style.width = width3 + '%';
    }
  }

  function frame4() {
    if (width4 >= 85) {
      clearInterval(id4);
    } else {
      width4++; 
      elem4.style.width = width4 + '%';
    }
  }

  function frame5() {
    if (width5 >= 90) {
      clearInterval(id5);
    } else {
      width5++; 
      elem5.style.width = width5 + '%';
    }
  }

  function frame6() {
    if (width6 >= 95) {
      clearInterval(id6);
    } else {
      width6++; 
      elem6.style.width = width6 + '%';
    }
  }

  function frame7() {
    if (width7 >= 85) {
      clearInterval(id7);
    } else {
      width7++; 
      elem7.style.width = width7 + '%';
    }
  }

  function frame8() {
    if (width8 >= 90) {
      clearInterval(id8);
    } else {
      width8++; 
      elem8.style.width = width8 + '%';
    }
  }


}