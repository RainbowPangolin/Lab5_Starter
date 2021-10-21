// explore.js

window.addEventListener('DOMContentLoaded', init);

let synth = window.speechSynthesis;
let selectVoice = document.getElementById("voice-select")
let listOfVoices = [];


function init() {
  setTimeout(() => {
    loadVoices();
  }, 100);

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function () {
    if(selectVoice.selectedIndex != 0 && !synth.speaking){
      talk();
    }
  })
}

function loadVoices(){
  listOfVoices = window.speechSynthesis.getVoices()
  console.log(listOfVoices.length);
  //let listOfVoices = synth.getVoices();
  for(let i = 0; i < listOfVoices.length; i++){
    let opt = document.createElement("option");
    opt.value = listOfVoices[i].name;
    opt.text = listOfVoices[i].name;
    selectVoice.add(opt);
  }
}

function talk(){
  console.log(document.getElementById("text-to-speak").value);
  let utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  utterance.voice = listOfVoices[document.getElementById("voice-select").selectedIndex ];
  speechSynthesis.speak(utterance);

  //mouth open
  const mouth = document.querySelector('img');
  utterance.addEventListener('end', function(event){
    mouth.src = "assets/images/smiling.png";
  });

  mouth.src = "assets/images/smiling-open.png";
  //mouth close after time
}