const timer = document.getElementById("timer");
const btn = document.querySelector(".btn");

const playIcon = document.querySelector(".fa-play");
const resetIcon = document.querySelector(".fa-arrow-rotate-left");


let seconds = 0;
let minutes = 0;
let ms = 0;

let myInterval  ;


updateTimer = ()=>{
    timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    
    ms++;
    if(ms === 100){
        ms = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++;
        }
    }


}



playIcon.addEventListener("click",()=>{
    if(playIcon.classList.contains("fa-play")){
        playIcon.classList.remove("fa-play");   
        playIcon.classList.add("fa-pause");
        myInterval = setInterval(updateTimer,10);
          
        
    }  else{
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
         clearInterval(myInterval);

    } 

});


resetIcon.addEventListener("click",()=>{
    clearInterval(myInterval);
     seconds = 0 ;
     minutes = 0;
     ms = 0;
     timer.textContent = "00:00:00";
     playIcon.classList.remove("fa-pause");
     playIcon.classList.add("fa-play");
      evt.preventDefault();
});


