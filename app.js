 var images = document.getElementsByClassName('image');
 var flag = false;
 const revRipple = button.getElementsByClassName("rev-ripple")[0];
const menuBtn = document.getElementsByClassName('menu-btn');
const listitem1 = document.getElementById('overlayitems1');
const overlayslider = document.getElementsByClassName('overlaypart1');
var backgroundcol = document.getElementById('body');
function openNav() {
    if (flag==false) {
    setTimeout(() =>{
        document.getElementById("myNav").style.width = "100%";
    },700)
    menuBtn[0].classList.add('clicked');
    flag = true;
}

    
    else{
        document.getElementById("myNav").style.width = "0%";
        menuBtn[0].classList.remove('clicked');
        flag = false;
       


    }
  }






  /* <---------RIPPLE EFFECT----------> */
const ripple = button.getElementsByClassName("menu-btn")[0];
  button.addEventListener("click", createRipple);
  function createRipple(event) {
    if (flag==true){
    const button = event.currentTarget;
  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter*12}px`;
    /* circle.style.left = `${event.clientX - button.offsetLeft - radius}px`; */
    /* circle.style.top = `${event.clientY - button.offsetTop - radius}px`; */
    circle.classList.add("ripple");
  
    
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);
  }
}




/* <---------SLIDER---------> */
var counter = 2;
/* document.getElementById('radio1').checked =true; */
document.getElementById('manual1').classList.add('checked');
document.getElementsByClassName('auto-btn1')[0].classList.add('barcheck');
function slide() {
  var slidetimer = setInterval(()=>{
    if (counter>5)
    {   
        document.getElementById(`manual${counter-1}`).classList.remove('checked');
        document.getElementsByClassName(`auto-btn${counter-1}`)[0].classList.remove('barcheck');
        counter=1;
    }
    document.getElementById('radio'+counter).checked =true;
    document.getElementById('manual'+counter).classList.add('checked');
    document.getElementsByClassName('auto-btn'+counter)[0].classList.add('barcheck');
    if(counter==1){
        button2[0].style.backgroundColor = '#cf302b';
    }
    if(counter==2){
        button2[0].style.backgroundColor = '#f7b744';
        backgroundcol.style.backgroundColor = "#f07038";

    }
    if(counter==3){
        button2[0].style.backgroundColor = '#881e32';
        backgroundcol.style.backgroundColor = "#ef7591";
    }
    if(counter==4){
        button2[0].style.backgroundColor = '#ef706b';
        backgroundcol.style.backgroundColor = "#8bd3b9";
    }
    if(counter==5){
        button2[0].style.backgroundColor = '#ee5235';
        backgroundcol.style.backgroundColor = "#fbd349";
    }
    if (counter==1) {
      backgroundcol.style.backgroundColor = "#e7524c";
    }
    else {
      document.getElementById(`manual${counter-1}`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn${counter-1}`)[0].classList.remove('barcheck');
    }
    ++counter;
},5000)
}
slide()

/* <-------MANUAL NAVIGATION----------> */
document.getElementById('manual1').addEventListener('click',()=>{
  counter = 1;
  document.getElementById('manual1').classList.add('checked');
  button2[0].style.backgroundColor = '#cf302b';
  backgroundcol.style.backgroundColor = "#e7524c";
  document.getElementById(`manual2`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn2`)[0].classList.remove('barcheck');
  document.getElementById(`manual3`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn3`)[0].classList.remove('barcheck');
  document.getElementById(`manual4`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn4`)[0].classList.remove('barcheck');
  document.getElementById(`manual5`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn5`)[0].classList.remove('barcheck');
  console.log("clicked")
 

})
document.getElementById('manual2').addEventListener('click',()=>{
  counter = 2;
  document.getElementById('manual2').classList.add('checked');
  button2[0].style.backgroundColor = '#f7b744';
  backgroundcol.style.backgroundColor = "#f07038";
  document.getElementById(`manual1`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn1`)[0].classList.remove('barcheck');
  document.getElementById(`manual3`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn3`)[0].classList.remove('barcheck');
  document.getElementById(`manual4`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn4`)[0].classList.remove('barcheck');
  document.getElementById(`manual5`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn5`)[0].classList.remove('barcheck');
  console.log("clicked")
 

})
document.getElementById('manual3').addEventListener('click',()=>{
  counter = 3;
  document.getElementById('manual3').classList.add('checked');
  button2[0].style.backgroundColor = '#881e32';
  backgroundcol.style.backgroundColor = "#ef7591";
  document.getElementById(`manual2`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn2`)[0].classList.remove('barcheck');
  document.getElementById(`manual1`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn1`)[0].classList.remove('barcheck');
  document.getElementById(`manual4`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn4`)[0].classList.remove('barcheck');
  document.getElementById(`manual5`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn5`)[0].classList.remove('barcheck');
  console.log("clicked")
 

})
document.getElementById('manual4').addEventListener('click',()=>{
  counter = 4;
  document.getElementById('manual4').classList.add('checked');
  button2[0].style.backgroundColor = '#ef706b';
        backgroundcol.style.backgroundColor = "#8bd3b9";
  document.getElementById(`manual2`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn2`)[0].classList.remove('barcheck');
  document.getElementById(`manual3`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn3`)[0].classList.remove('barcheck');
  document.getElementById(`manual1`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn1`)[0].classList.remove('barcheck');
  document.getElementById(`manual5`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn5`)[0].classList.remove('barcheck');
  console.log("clicked")
 

})
document.getElementById('manual5').addEventListener('click',()=>{
  counter = 5;
  document.getElementById('manual5').classList.add('checked');
  button2[0].style.backgroundColor = '#ee5235';
  backgroundcol.style.backgroundColor = "#fbd349";
  document.getElementById(`manual2`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn2`)[0].classList.remove('barcheck');
  document.getElementById(`manual3`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn3`)[0].classList.remove('barcheck');
  document.getElementById(`manual4`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn4`)[0].classList.remove('barcheck');
  document.getElementById(`manual1`).classList.remove('checked');
      document.getElementsByClassName(`auto-btn1`)[0].classList.remove('barcheck');
  console.log("clicked")
 

})

/* <-------BUTTON--------> */
const buttonContainer = document.getElementsByClassName('container-button');
const button2 = document.getElementsByClassName('button');
const buttonwrapper = document.getElementsByClassName('buttonwrapper')
buttonwrapper[0].addEventListener('mouseover',()=>{
  button2[0].style.width = '74px';
  button2[0].innerHTML ='<div class="arrow" ><i class="fal fa-long-arrow-right"></div>';
  console.log("yoyo")
})
buttonwrapper[0].addEventListener('mouseout',()=>{
  button2[0].style.width = '210px';
  button2[0].innerHTML ='Discover&nbsp;&nbsp;&nbsp;&nbsp;<div class="arrow" ><i class="fal fa-long-arrow-right"></div>';
  console.log('close')
})


/* <---------IMAGE ANIMATIONS---------> */

function Coords1(event) {
  var x = event.clientX;
  var y = event.clientY;
  /* images[0].style.transform = `translateY(${-y}px)`; */
  /* <--------SLIDER 1----------> */
    images[1].style.transform = `translate(${-x*0.01}px,${-y*0.01}px)`;
    images[2].style.transform = `translate(${-x*0.03}px,${-y*0.03}px)`;
    images[0].style.transform = `translate(${-x*0.02}px,${-y*0.02}px)`;

}

/* <--------SLIDER 2----------> */
function Coords2(event) {
  var x = event.clientX;
  var y = event.clientY;
    images[3].style.transform = `translate(${-x*0.01}px,${-y*0.02}px)`;
    images[4].style.transform = `translate(${-x*0.03}px,${-y*0.03}px)`;
    images[5].style.transform = `translate(${-x*0.02}px,${-y*0.01}px)`;
    images[6].style.transform = `translate(${-x*0.02}px,${-y*0.02}px)`;
}


    /* <--------SLIDER 3----------> */
    function Coords3(event) {
      var x = event.clientX;
      var y = event.clientY;
  
    images[7].style.transform = `translate(${-x*0.01}px,${-y*0.01}px)`;
    images[8].style.transform = `translate(${-x*0.03}px,${-y*0.02}px)`;
    images[9].style.transform = `translate(${-x*0.02}px,${-y*0.02}px)`;

    }
        /* <--------SLIDER 4----------> */
        function Coords4(event) {
          var x = event.clientX;
          var y = event.clientY;

        images[10].style.transform = `translate(${-x*0.01}px,${-y*0.02}px)`;
        images[11].style.transform = `translate(${-x*0.03}px,${-y*0.03}px)`;
        images[12].style.transform = `translate(${-x*0.02}px,${-y*0.01}px)`;
        }




            /* <--------SLIDER 5----------> */
            function Coords5(event) {
              var x = event.clientX;
              var y = event.clientY;

            images[13].style.transform = `translate(${-x*0.01}px,${-y*0.02}px)`;
            images[14].style.transform = `translate(${-x*0.03}px,${-y*0.03}px)`;


}


/* <-----------OVERLAY SLIDER------------> */
/* <------SNACKING TOMATOES-------> */
movein6()
function movein1() {
  moveout6();
  document.getElementById('overlayimage1').style.transform = 'translateY(-65vh)';
  document.getElementById('overlayimage2').style.transform = 'translateY(-88vh)';
  document.getElementById('overlayimage3').style.transform = 'translateY(-67vh)';
  overlayslider[0].style.backgroundColor='#e7524c';

}
function moveout1() {
  document.getElementById('overlayimage1').style.transform = 'translateY(65vh)';
  document.getElementById('overlayimage2').style.transform = 'translateY(88vh)';
  document.getElementById('overlayimage3').style.transform = 'translateY(67vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}
/* <---------CITRUS-----------> */
function movein2() {
  moveout6();
  document.getElementById('overlayimage4').style.transform = 'translateY(-65vh)';
  document.getElementById('overlayimage5').style.transform = 'translateY(-58vh)';
  document.getElementById('overlayimage6').style.transform = 'translateY(-85vh)';
  document.getElementById('overlayimage7').style.transform = 'translateY(-55vh)';
  overlayslider[0].style.backgroundColor='#f07038';
}
function moveout2() {
  document.getElementById('overlayimage4').style.transform = 'translateY(65vh)';
  document.getElementById('overlayimage5').style.transform = 'translateY(58vh)';
  document.getElementById('overlayimage6').style.transform = 'translateY(85vh)';
  document.getElementById('overlayimage7').style.transform = 'translateY(55vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}
/* <--------GRAPES-----------> */
function movein3() {
  moveout6();
  document.getElementById('overlayimage8').style.transform = 'translateY(-80vh)';
  document.getElementById('overlayimage9').style.transform = 'translateY(-75vh)';
  overlayslider[0].style.backgroundColor='#ef5791';

}
function moveout3() {
  document.getElementById('overlayimage8').style.transform = 'translateY(80vh)';
  document.getElementById('overlayimage9').style.transform = 'translateY(75vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}
/* <--------AVOCADOS-----------> */
function movein4() {
  moveout6();
  document.getElementById('overlayimage10').style.transform = 'translateY(-65vh)';
  document.getElementById('overlayimage11').style.transform = 'translateY(-60vh)';
  document.getElementById('overlayimage12').style.transform = 'translateY(-85vh)';
  overlayslider[0].style.backgroundColor='#8bd3b9';

}
function moveout4() {
  document.getElementById('overlayimage10').style.transform = 'translateY(65vh)';
  document.getElementById('overlayimage11').style.transform = 'translateY(65vh)';
  document.getElementById('overlayimage12').style.transform = 'translateY(80vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}

/* <-------FLOWERS-----------> */
function movein5() {
  moveout6();
  document.getElementById('overlayimage13').style.transform = 'translateY(-80vh)';
  document.getElementById('overlayimage14').style.transform = 'translateY(-65vh)';
  overlayslider[0].style.backgroundColor='#fbd349';

}
function moveout5() {
  document.getElementById('overlayimage13').style.transform = 'translateY(80vh)';
  document.getElementById('overlayimage14').style.transform = 'translateY(65vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}

/* <-------PRODUCTS--------> */
function movein6() {
  document.getElementById('overlayimage15').style.transform = 'translateY(-65vh)';
  document.getElementById('overlayimage16').style.transform = 'translateY(-80vh)';
  document.getElementById('overlayimage17').style.transform = 'translateY(-80vh)';
  document.getElementById('overlayimage18').style.transform = 'translateY(-60vh)';
  document.getElementById('overlayimage19').style.transform = 'translateY(-63vh)';
  document.getElementById('overlayimage20').style.transform = 'translateY(-81vh)';
  document.getElementById('overlaypart2items1').style.opacity = '1';
  overlayslider[0].style.backgroundColor='#ecba42';

}
function moveout6() {
  document.getElementById('overlayimage15').style.transform = 'translateY(65vh)';
  document.getElementById('overlayimage16').style.transform = 'translateY(80vh)';
  document.getElementById('overlayimage17').style.transform = 'translateY(80vh)';
  document.getElementById('overlayimage18').style.transform = 'translateY(60vh)';
  document.getElementById('overlayimage19').style.transform = 'translateY(63vh)';
  document.getElementById('overlayimage20').style.transform = 'translateY(81vh)';
  document.getElementById('overlaypart2items1').style.opacity = '0.5';
  overlayslider[0].style.backgroundColor='#ecba42';
}

/* <-------ABOUT---------> */
function movein7() {
  moveout6();
  document.getElementById('overlayimage21').style.transform = 'translateY(-75vh)';
  overlayslider[0].style.backgroundColor='#c74d2b';

}
function moveout7() {
  document.getElementById('overlayimage21').style.transform = 'translateY(75vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}

/* <-------R&D---------> */
function movein8() {
  moveout6();
  document.getElementById('overlayimage22').style.transform = 'translateY(-85vh)';
  document.getElementById('overlayimage23').style.transform = 'translateY(-73vh)';
  document.getElementById('overlayimage24').style.transform = 'translateY(-60vh)';
  overlayslider[0].style.backgroundColor='#c64a6e';

}
function moveout8() {
  document.getElementById('overlayimage22').style.transform = 'translateY(85vh)';
  document.getElementById('overlayimage23').style.transform = 'translateY(73vh)';
  document.getElementById('overlayimage24').style.transform = 'translateY(60vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}

/* <----CSR------> */
function movein9() {
  moveout6();
  document.getElementById('overlayimage25').style.transform = 'translateY(-75vh)';
  overlayslider[0].style.backgroundColor='#e17768';

}
function moveout9() {
  document.getElementById('overlayimage25').style.transform = 'translateY(75vh)';
  overlayslider[0].style.backgroundColor='ecba42';
  movein6();
}