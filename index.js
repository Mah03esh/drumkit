var no_of_buttons=document.querySelectorAll(".drum").length;


for(var i=0; i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var sounding=this.innerHTML;
        makeSound(sounding);
        Animation(sounding);
    });
}
document.addEventListener("keypress" , function(event) {
   makeSound(event.key);
   Animation(event.key);
});
function makeSound(key){
     
       switch(key){
        case "w":
           var audio=new Audio("sounds/tom-1.mp3");
           audio.play();
         break;
        case "a" :
           var audio=new Audio("sounds/tom-2.mp3");
           audio.play();
         break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
        case "d":
           var audio=new Audio("sounds/tom-4.mp3");
           audio.play();
         break;
         case "j":
           var audio=new Audio("sounds/snare.mp3");
           audio.play();
         break;
         case "k":
           var audio=new Audio("sounds/crash.mp3");
           audio.play();
         break;
         case "l":
           var audio=new Audio("sounds/kick-bass.mp3");
           audio.play();
         break;
        default : console.log("sounding");
    }
    
}
function Animation(animationButton){
  var activeButton=document.querySelector("." + animationButton);
  activeButton.classList.add("pressed");

 setTimeout(function(){
  activeButton.classList.remove("pressed");
 },1000);



}



    

    




