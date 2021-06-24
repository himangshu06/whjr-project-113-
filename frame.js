
function preload(){
    var synth = window.speechSynthesis;
    speak_data4 = "I want to ask a Question when you first loaded to the website did you see the Welcome Screen? If you didnot Please report it in the next class! on how to make it so that one html file is the main screen! if you did not hear the voice properly please click aplly filter or take snapshot button this messgae is gonna keep repeting";
    var utterThis = new SpeechSynthesisUtterance(speak_data4);
    synth.speak(utterThis);
}

function setup(){
    canvas = createCanvas(700,400);
    canvas.position(150,275);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    image(video,0,0,700,400);
    tint(tint_color);
    rect(30, 20, 600, 55);
    rect(30,20,55,300);
    rect(30, 320, 620, 55);
    rect(600,20,55,300);
    fill(0, 0, 128);
    circle(30, 20, 75, 75);
    circle(30, 20, 75, 75);
    circle(30,320,75,75);
    circle(600,20,75,75)
}

function take_snapshot(){
    save("student_filter.png");

    var synth = window.speechSynthesis;
     speak_data2 = "I want to ask a Question when you first loaded to the website did you see the Welcome Screen? If you didnot Please report it in the next class! on how to make it so that one html file is the main screen! if you did not hear the voice properly please click aplly filter or take snapshot button";
     var utterThis = new SpeechSynthesisUtterance(speak_data2);
     synth.speak(utterThis);
}
function filter_tint(){
    tint_color = document.getElementById("filter_input").value;

    var synth = window.speechSynthesis;
     speak_data3 = "I want to ask a Question when you first loaded to the website did you see the Welcome Screen? If you didnot Please report it in the next class! on how to make it so that one html file is the main screen";
     var utterThis = new SpeechSynthesisUtterance(speak_data3);
     synth.speak(utterThis);
}

