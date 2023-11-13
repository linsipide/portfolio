
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
    target.style.filter = "blur(4px)"; 
   }

function openMyDiv(target){
    target.style.left = "0px"; 
    target.scrollTop = 0;
    target.style.filter = "blur(0px)";
   }

function closeMyBox(target){
  target.style.display = "none"; 
  
 }

function openMyBox(target){ 
  target.style.display = "block"; 
  target.scrollTop = 0;
  
 }


function openMyBox2(target){ 
  target.style.display = "flex"; 
 }

logoButton.addEventListener("click", function() {

  })


setTimeout(function() {

  presentation.style.left = "0vw";

}, 150);

setTimeout(function() {

  photoMoi.style.opacity="1";

}, 750);



presentationButton.addEventListener("click", function() {
    
    openMyDiv(presentation);
    closeMyDiv(parcours);
    closeMyDiv(motivations);
  })


parcoursButton.addEventListener("click", function() {
    closeMyDiv(presentation);
    openMyDiv(parcours);
    closeMyDiv(motivations);
})


motivationsButton.addEventListener("click", function() {
  
    closeMyDiv(presentation);
    closeMyDiv(parcours);
    openMyDiv(motivations);
})


textBoks1.classList.toggle("blurred");

textBoks2.classList.toggle("blurred");

textBoks3.classList.toggle("blurred");

textBoks1.style.display = "none";

textBoks2.style.display = "none";

textBoks3.style.display = "none";


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

