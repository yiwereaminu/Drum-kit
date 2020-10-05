
var buttonArrayLength = document.querySelectorAll(".drum");

function playSound(key){
  
    switch (key) {
      case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "j":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    }
  }

document.addEventListener('keypress',function(e){
  playSound(e.key);
  buttonAnimation(e.key);
});



for (var i = 0; i <= buttonArrayLength.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key = this.innerHTML;
     playSound(key);
     buttonAnimation(key);

  });
  

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
   
}
