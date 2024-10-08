function soundAC(){
    var sound = new Audio("short-beep.mp3");
    sound.play();
    display.value = '';
}

function soundDelButton(){
    var sound = new Audio("short-beep.mp3");
    sound.play();
    display.value = display.value.toString().slice(0,-1)
}

function soundNumButton(){
    var sound = new Audio("short-beep.mp3");
    sound.play();
}


// const numButtons = document.getElementsByClassName("numButton");

// for(let i = 0; i < numButtons.length; i++)
// {
//     numButtons[i].addEventListener("click",soundNumButton);
// }