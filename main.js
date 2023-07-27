var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
   
    document.getElementById("textbox").innerHTML=Content;
    console.log(Content);
    
    if( Content =="take my selfie" || Content=="Take my selfie.")
    {
        console.log("taking selfie ---")
        speak();
    }
}
camera = document.getElementById("camera");
function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera) 
    
    setTimeout(function()
    {
    take_snapshot();
    save();
    },5000);
    
}

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML='<img id="result1" src="pic1.jpg">';
        document.getElementById("result2").innerHTML='<img id="result2" src="pic2.jpg">';
        document.getElementById("result3").innerHTML='<img id="result3" src="pic3.jpg">';
    });
}

function save()
{
    link=document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.herf = image;
    link.click();
}

Webcam.set({
    width:360,
    height:250,
    Image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");