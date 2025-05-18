let seconds=document.getElementById("seconds");
let start=document.getElementById("start");
let reset=document.getElementById("reset");
let display=document.getElementById("display")

start.addEventListener("click",startTimer);

reset.addEventListener("click",resetTimer);

let IntervalId;

function startTimer(){
    let num=seconds.value;
    display.innerHTML=num;
    IntervalId=setInterval(function () {
        display.innerHTML=(--num);
        if(num<=0){
            clearInterval(IntervalId);
        }
    }, 1000);

}

function resetTimer(){
    seconds.value=0;
    display.innerHTML="00";
    clearInterval(IntervalId);
}
