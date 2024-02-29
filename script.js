const buttons = document.querySelectorAll("button")
const hoverSound = new Audio("sounds/hover-sound.mp3")
const clickSound = new Audio("sounds/click-sound.mp3")
const audioButton = document.querySelector(".audio-button");
const closeButtons = document.querySelectorAll(".close")
console.log(audioButton);
let soundEnabled = false
const header = document.querySelector("header")
const tabs = document.querySelectorAll(".tab")

for (let button of closeButtons) {
  button.addEventListener("click", function () {
    for (let tab of tabs) {
      tab.classList.add("hide");
    }

    header.classList.remove("hide");
  }); 
}

for (let i = 0; i < buttons.length; i++) {
 buttons[i].addEventListener("mouseover", function () {
  if(soundEnabled) {
       hoverSound.currentTime = 0;
       hoverSound.play();
  }
 });  

 
 buttons[i].addEventListener("click", function () {
   tabs[i].classList.remove("hide")
   header.classList.add("hide")
   tabs[i].style.opacity = 0;
   tabs[i].style.transition = "0.3s"
   
   setTimeout(function () {
     tabs[i].style.opacity = 1;
    }, 100);
    
      if (soundEnabled) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
  });
}

// audio button code
audioButton.addEventListener("click", function() {
  if(soundEnabled) {
    audioButton.src =
      "assets/audio-mute.png";
    soundEnabled = false
  } else {
    audioButton.src =
      "assets/audio.png";
    soundEnabled = true
  }
  console.log(soundEnabled)
})

// animations

const intro = document.querySelector(".intro")
setTimeout(function () {
  intro.style.height = "130px";
}, 100);

setTimeout(function() {
  intro.style.opacity = 1
}, 400)


