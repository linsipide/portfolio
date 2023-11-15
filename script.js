
const logoButton = document.querySelector("#logobutton");
const presentationButton = document.querySelector("#presentationbutton");
const parcoursButton = document.querySelector("#parcoursbutton");
const motivationsButton = document.querySelector("#motivationsbutton");

const buttonRight1 = document.querySelector("#button-right1")
const buttonLeft1 = document.querySelector("#button-left1")
const buttonRight2 = document.querySelector("#button-right2")
const buttonLeft2 = document.querySelector("#button-left2")
const buttonRight3 = document.querySelector("#button-right3")
const buttonLeft3 = document.querySelector("#button-left3")


const presentation = document.querySelector("#presentation")
const parcours = document.querySelector("#parcours")
const motivations = document.querySelector("#motivations")


const textBox = document.querySelector(".textbox")
const textBoks1 = document.querySelector("#textboks1")
const textBox1 = document.querySelector("#textbox1")
const textBoks2 = document.querySelector("#textboks2")
const textBox2 = document.querySelector("#textbox2")
const textBox22 = document.querySelector("#textbox22")
const textBoks3 = document.querySelector("#textboks3")
const textBox3 = document.querySelector("#textbox3")

const photoMoi = document.querySelector("#photodemoi")



function closeMyDiv(target){
    target.style.left = "-200vw"; 
    target.scrollTop = 0;
    target.style.filter = "blur(4px)"; 
   }

function openMyDiv(target){
    target.style.left = "0px"; 
    target.scrollTop = 0;
    target.style.filter = "blur(0px)";
   }

function closeMyBox(target){
  target.style.display = "none"; 
  target.scrollTop = 0;
  
 }

function openMyBox(target){ 
  target.style.display = "block"; 
  target.scrollTop = 0;
  
 }

logoButton.addEventListener("click", function() {

  })

  
let pageCount = 0;

  if (pageCount == 0) {
    buttonLeft1.style.opacity = "0";
  }

function pageRoll() {



  if (pageCount == 0) {


    if (textBox1.classList.contains("blurred") !== true) {


      textBox1.classList.toggle("blurred");
  
      }


      if (textBoks1.classList.contains("blurred") == true) {


        textBoks1.classList.toggle("blurred");
    
        }
      

    buttonLeft1.style.opacity = "0";

    textBox1.style.display = "block";
    textBoks1.style.display = "none";
    openMyDiv(presentation);
    closeMyDiv(parcours);
    closeMyDiv(motivations);

  }

  if (pageCount == 1) {

    console.log(pageCount);

    textBox1.classList.toggle("blurred");
  
  setTimeout(function() {
  
    closeMyBox(textBox1);
    openMyBox(textBoks1);

    setTimeout(function(){
  

    if (textBox1.classList.contains("blurred") !== true) {


      textBox1.classList.toggle("blurred");
  
      }
  

    if (textBoks1.classList.contains("blurred") == true) {


      textBoks1.classList.toggle("blurred");
    
      }
        
    textBoks1.style.display = "block";
    textBox1.style.display = "none";
    },150)
  
  }, 150);
  
  }


  if (pageCount == 2) {
    console.log(pageCount);

    console.log(textBox2.classList)

    if (textBox2.classList.contains("blurred") == true) {


      textBox2.classList.toggle("blurred");
  
      }

      textBoks2.classList.toggle("blurred");


    if (textBoks2.classList.contains("blurred") !== true) {


      textBoks2.classList.toggle("blurred");
  
      }
    
    textBox2.style.display = "block";
    textBoks2.style.display = "none";

    openMyDiv(parcours);
    closeMyDiv(presentation);
    closeMyDiv(motivations);


    console.log(textBox2.classList)

  }


  if (pageCount == 3) {

    console.log(pageCount);

    textBox2.classList.toggle("blurred");
  
  setTimeout(function() {
  
    setTimeout(function(){

    closeMyBox(textBox2);
    openMyBox(textBoks2)

    if (textBox2.classList.contains("blurred") !== true) {


      textBox2.classList.toggle("blurred");
  
      }
  
  
      if (textBoks2.classList.contains("blurred") == true) {


        textBoks2.classList.toggle("blurred");
    
        }
      
    textBoks2.style.display = "block";
    textBox2.style.display = "none";
    },150)
  
  }, 150);
  
  }

  if (pageCount == 4) {

    console.log(pageCount);
    
    openMyDiv(motivations);
    closeMyDiv(presentation);
    closeMyDiv(parcours);

    

    if (textBoks2.classList.contains("blurred") !== true) {


      textBoks2.classList.toggle("blurred");
  
      }

    if (textBox3.classList.contains("blurred") == true) {


      textBox3.classList.toggle("blurred");
  
      }

    textBox3.style.display = "block";
    textBoks3.style.display = "none";
  }

  if (pageCount == 5) {

    console.log(pageCount);

    buttonRight3.style.opacity = "0";


    textBox3.classList.toggle("blurred");
  
  setTimeout(function() {
  
    closeMyBox(textBox3);
    openMyBox(textBoks3)
    setTimeout(function(){


    if (textBox3.classList.contains("blurred") !== true) {


      textBox3.classList.toggle("blurred");
  
      }
  
      if (textBoks3.classList.contains("blurred") == true) {


        textBoks3.classList.toggle("blurred");
    
        }
      
    },150)
  
    textBoks3.style.display = "block";
    textBox3.style.display = "none";
  }, 150);
  
  }

};


function pageRoll2() {

  if (pageCount == 0) {

    buttonLeft1.style.opacity = "0";

    console.log(pageCount);


    if (textBox1.classList.contains("blurred") !== true) {


      textBox1.classList.toggle("blurred");
  
      }


    if (textBoks1.classList.contains("blurred") == true) {


      textBoks1.classList.toggle("blurred");
    
      }
      

    textBoks1.classList.toggle("blurred");

    console.log(textBox1.classList);
    
  setTimeout(function() {
  
    closeMyBox(textBoks1);
    openMyBox(textBox1)
    setTimeout(function(){
  
    textBox1.classList.toggle("blurred");
    textBox1.style.display = "block";
    textBoks1.style.display = "none";
    },150)
  
  }, 150);
  
  }

  if (pageCount == 1) {


    buttonLeft1.style.opacity = "1";

    console.log(pageCount);

    if (textBoks1.classList.contains("blurred") !== true) {


      textBoks1.classList.toggle("blurred");
  
      }
    
      if (textBox1.classList.contains("blurred") == true) {


        textBox1.classList.toggle("blurred");
    
        }
      
    textBox1.classList.toggle("blurred");

    openMyDiv(presentation);
    closeMyDiv(parcours);
    closeMyDiv(motivations);

    setTimeout(function() {
  
      setTimeout(function(){
    
      textBoks1.classList.toggle("blurred");
      textBoks1.style.display = "block";
      textBox1.style.display = "none";
      },150)
    
    }, 150);
  }


  if (pageCount == 2) {

    console.log(pageCount);

    if (textBox2.classList.contains("blurred") !== true) {


    textBox2.classList.toggle("blurred");

    }


    if (textBoks2.classList.contains("blurred") == true) {


      textBoks2.classList.toggle("blurred");
  
      }

    textBoks2.classList.toggle("blurred");
    
  setTimeout(function() {
  
    closeMyBox(textBoks2);
    openMyBox(textBox2)
    setTimeout(function(){
  
    textBox2.classList.toggle("blurred");
    textBox2.style.display = "block";
    textBoks2.style.display = "none";
    },150)
  
  }, 150);
  
  }


  if (pageCount == 3) {

    console.log(pageCount);


    if (textBoks2.classList.contains("blurred") !== true) {


      textBoks2.classList.toggle("blurred");
  
      }

    
      if (textBox2.classList.contains("blurred") == true) {


        textBox2.classList.toggle("blurred");
    
        }
  
    textBox2.classList.toggle("blurred");

    openMyDiv(parcours);
    closeMyDiv(presentation);
    closeMyDiv(motivations);

  setTimeout(function() {
  
    setTimeout(function(){
  
    textBoks2.classList.toggle("blurred");
    textBoks2.style.display = "block";
    textBox2.style.display = "none";
    },150)
  
  }, 150);

  }


  if (pageCount == 4) {

    console.log(pageCount);

    if (textBox3.classList.contains("blurred") !== true) {


      textBox3.classList.toggle("blurred");
  
      }
    
      if (textBoks3.classList.contains("blurred") == true) {


        textBoks3.classList.toggle("blurred");
    
        }
  
    textBoks3.classList.toggle("blurred");
    
  setTimeout(function() {
  
    closeMyBox(textBoks3);
    openMyBox(textBox3)
    setTimeout(function(){
  
    textBox3.classList.toggle("blurred");
    textBox3.style.display = "block";
    textBoks3.style.display = "none";
    },150)
  
  }, 150);
  
  }

  if (pageCount == 5) {

    console.log(pageCount);


    if (textBox3.classList.contains("blurred") !== true) {


      textBox3.classList.toggle("blurred");
  
      }
    

    if (textBoks3.classList.contains("blurred") == true) {


      textBoks3.classList.toggle("blurred");
  
      }
  
    textBox3.classList.toggle("blurred");
    
  
  setTimeout(function() {
  
    closeMyBox(textBox3);
    openMyBox(textBoks3)
    setTimeout(function(){
  
    textBoks3.classList.toggle("blurred");
    
    textBox3.style.display = "none";
    textBoks3.style.display = "block";
    },150)
  
  }, 150);
  
  }

};

buttonRight1.addEventListener("click", function() {

  if (pageCount == 0) {
    buttonLeft1.style.opacity = "1";
  }

  if (pageCount >= 0 && pageCount < 5)
  {
    pageCount = pageCount + 1;}
  

console.log(pageCount);

pageRoll();

});

buttonRight2.addEventListener("click", function() {

if (pageCount >= 0 && pageCount < 5)
{
  pageCount = pageCount + 1;}

  console.log(pageCount);
  
  pageRoll();
  
});

buttonRight3.addEventListener("click", function() {

  if (pageCount == 5) {
    return
  }

  if (pageCount >= 0 && pageCount < 5)
  {
    pageCount = pageCount + 1;}
  
  console.log(pageCount);
    
  pageRoll();
    
});

buttonLeft1.addEventListener("click", function() {

  if (pageCount == 0) {
    buttonLeft1.style.opacity = "0";
    return;
  }

  if (pageCount > 0 && pageCount <= 5)
  {
    pageCount = pageCount - 1;}
  

  console.log(pageCount);
  
  pageRoll2();
  
  });
  
  buttonLeft2.addEventListener("click", function() {
  
if (pageCount > 0 && pageCount <= 5)
{
  pageCount = pageCount - 1;}

    console.log(pageCount);
    
    pageRoll2();
    
  });
  
  
  buttonLeft3.addEventListener("click", function() {
  
    
  if (pageCount == 5) {
    buttonRight3.style.opacity = "1";
  }


if (pageCount > 0 && pageCount <= 5)
{
  pageCount = pageCount - 1;}

    console.log(pageCount);
      
    pageRoll2();
      
  });




setTimeout(function() {

  presentation.style.left = "0vw";

}, 150);

setTimeout(function() {

  photoMoi.style.opacity="1";

}, 750);


textBoks1.classList.toggle("blurred");

textBoks2.classList.toggle("blurred");

textBoks3.classList.toggle("blurred");

textBoks1.style.display = "none";

textBoks2.style.display = "none";

textBoks3.style.display = "none";

buttonRight1.addEventListener("click", function() {


setTimeout(function() {

  setTimeout(function(){

  textBox1.classList.toggle("blurred");
  },150)

}, 150);

})


logoButton.addEventListener("click", function() {

  pageCount = 0;


  buttonRight3.style.opacity = "1";

  console.log(pageCount);

  if (textBox1.classList.contains("blurred") !== true ) {


    console.log(pageCount);

    textBox1.classList.toggle("blurred");
    textBoks1.classList.toggle("blurred");

    console.log(textBox1.classList);
    
  
    closeMyBox(textBoks1);
    openMyBox(textBox1)
  
    textBox1.classList.toggle("blurred");
    
  }


  if (textBox1.classList.contains("blurred") == true ) {

    console.log(pageCount);

    console.log(textBox1.classList);
  
    closeMyBox(textBoks1);

    openMyBox(textBox1);
  
    textBox1.classList.toggle("blurred");

    
  }

  if (textBox1.classList.contains("blurred") == true ) {


    console.log(pageCount);
    console.log(textBox2.classList);
    
  
    closeMyBox(textBoks1);
    openMyBox(textBox1);
  
    textBox1.classList.toggle("blurred");

    textBoks1.classList.toggle("blurred");
    
  }


  openMyDiv(presentation);
  closeMyDiv(parcours);
  closeMyDiv(motivations);
    
  })


presentationButton.addEventListener("click", function() {

  pageCount = 0;


  buttonRight3.style.opacity = "1";

  console.log(pageCount);

  if (textBox1.classList.contains("blurred") !== true ) {


    console.log(pageCount);

    textBox1.classList.toggle("blurred");
    textBoks1.classList.toggle("blurred");

    console.log(textBox1.classList);
    
  
    closeMyBox(textBoks1);
    openMyBox(textBox1)
  
    textBox1.classList.toggle("blurred");
    
  }


  if (textBox1.classList.contains("blurred") == true ) {

    console.log(pageCount);

    console.log(textBox1.classList);
  
    closeMyBox(textBoks1);

    openMyBox(textBox1);
  
    textBox1.classList.toggle("blurred");

    
  }

  if (textBox1.classList.contains("blurred") == true ) {


    console.log(pageCount);
    console.log(textBox2.classList);
    
  
    closeMyBox(textBoks1);
    openMyBox(textBox1);
  
    textBox1.classList.toggle("blurred");

    textBoks1.classList.toggle("blurred");
    
  }


  openMyDiv(presentation);
  closeMyDiv(parcours);
  closeMyDiv(motivations);
    
  })


parcoursButton.addEventListener("click", function() {


  buttonRight3.style.opacity = "1";

  pageCount = 2;

  console.log(pageCount);

  if (textBox2.classList.contains("blurred") !== true ) {


    console.log(pageCount);

    textBox2.classList.toggle("blurred");

    console.log(textBox2.classList);
    
  
    closeMyBox(textBoks2);
    openMyBox(textBox2)
  
    textBox2.classList.toggle("blurred");
    
  }


  if (textBox2.classList.contains("blurred") == true ) {


    console.log(pageCount);
    console.log(textBox2.classList);
    
  
    closeMyBox(textBoks2);
    openMyBox(textBox2);
  
    textBox2.classList.toggle("blurred");

    textBoks2.classList.toggle("blurred");
    
  }

  openMyDiv(parcours);
  closeMyDiv(presentation);
  closeMyDiv(motivations);
})


motivationsButton.addEventListener("click", function() {


  pageCount = 4;

  buttonRight3.style.opacity = "1";

  console.log(pageCount);

  if (textBox3.classList.contains("blurred") !== true ) {


    console.log(pageCount);

    textBox3.classList.toggle("blurred");

    console.log(textBox3.classList);
    
  
    closeMyBox(textBoks3);
    openMyBox(textBox3)
  
    textBox3.classList.toggle("blurred");
    
  }


  if (textBox3.classList.contains("blurred") == true ) {


    console.log(pageCount);
    console.log(textBox3.classList);
    
  
    closeMyBox(textBoks3);
    openMyBox(textBox3);
  
    textBox3.classList.toggle("blurred");

    textBoks3.classList.toggle("blurred");
    
  }

  openMyDiv(motivations);
  closeMyDiv(presentation);
  closeMyDiv(parcours);
})


/*


buttonRight1.addEventListener("click", function() {

  if (textBoks1.classList.contains("blurred") !== true) {
    return
  }

  textBox1.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBox1);
  openMyBox(textBoks1)
  setTimeout(function(){

  textBoks1.classList.toggle("blurred");
  },150)

}, 150);

if (textBoks1.classList.contains("blurred") == true) {
  buttonRight1.style.opacity = "0";
  buttonLeft1.style.opacity = "1";
}

if (textBoks1.classList.contains("blurred") !== true) {
  buttonRight1.style.opacity = "1";
  buttonLeft1.style.opacity = "0";
}


})


buttonLeft1.addEventListener("click", function() {

  if (textBox1.classList.contains("blurred") !== true) {
    return
  }

  textBoks1.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBoks1);
  openMyBox(textBox1)
  setTimeout(function(){

  textBox1.classList.toggle("blurred");
  },150)
  
}, 150);

if (textBoks1.classList.contains("blurred") == true) {
  buttonRight1.style.opacity = "1";
  buttonLeft1.style.opacity = "0";
}

if (textBoks1.classList.contains("blurred") !== true) {
  buttonRight1.style.opacity = "0";
  buttonLeft1.style.opacity = "1";
}

})


buttonRight2.addEventListener("click", function() {

  if (textBoks2.classList.contains("blurred") !== true) {
    return
  }

  textBox2.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBox2);
  openMyBox(textBoks2);
  setTimeout(function(){
  textBoks2.classList.toggle("blurred");
  },150)

}, 150);

if (textBoks2.classList.contains("blurred") == true) {
  buttonRight2.style.opacity = "0";
  buttonLeft2.style.opacity = "1";
}

if (textBoks2.classList.contains("blurred") !== true) {
  buttonRight2.style.opacity = "1";
  buttonLeft2.style.opacity = "0";
}
})


buttonLeft2.addEventListener("click", function() {

  if (textBox2.classList.contains("blurred") !== true) {
    return
  }

  textBoks2.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBoks2);
  openMyBox(textBox2);
  setTimeout(function(){

  textBox2.classList.toggle("blurred");
  },150)
  
}, 150);

if (textBoks2.classList.contains("blurred") == true) {
  buttonRight2.style.opacity = "1";
  buttonLeft2.style.opacity = "0";
}

if (textBoks2.classList.contains("blurred") !== true) {
  buttonRight2.style.opacity = "0";
  buttonLeft2.style.opacity = "1";
}

})

buttonRight3.addEventListener("click", function() {

  if (textBoks3.classList.contains("blurred") !== true) {
    return
  }

  textBox3.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBox3);
  openMyBox(textBoks3)
  setTimeout(function(){

  textBoks3.classList.toggle("blurred");
  },150)

}, 150);

if (textBoks3.classList.contains("blurred") == true) {
  buttonRight3.style.opacity = "0";
  buttonLeft3.style.opacity = "1";
}

if (textBoks3.classList.contains("blurred") !== true) {
  buttonRight3.style.opacity = "1";
  buttonLeft3.style.opacity = "0";
}
})



buttonLeft3.addEventListener("click", function() {

  if (textBox3.classList.contains("blurred") !== true) {
    return
  }

  textBoks3.classList.toggle("blurred");

setTimeout(function() {

  closeMyBox(textBoks3);
  openMyBox(textBox3)
  setTimeout(function(){

  textBox3.classList.toggle("blurred");
  },150)
  
}, 150);


if (textBoks3.classList.contains("blurred") == true) {
  buttonRight3.style.opacity = "1";
  buttonLeft3.style.opacity = "0";
}

if (textBoks3.classList.contains("blurred") !== true) {
  buttonRight3.style.opacity = "0";
  buttonLeft3.style.opacity = "1";
}

})

*/
