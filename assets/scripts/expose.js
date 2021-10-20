// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const jsConfetti = new JSConfetti()

  //map image and sound to current horn
  const selectHorn = document.querySelector('#horn-select');
  selectHorn.addEventListener('change', function () {
    hornImg(document.getElementById('horn-select').value);
    hornSnd(document.getElementById('horn-select').value);
  });

  //Plays selected sound on click
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function () {
    if(selectHorn.value != "select"){
      document.querySelector('audio').play();
      //if party horn, add confetti 
      if(selectHorn.value == "party-horn"){
        jsConfetti.addConfetti({
          confettiRadius: 6,
        })
      }
    }
  })

  //on volume change
  const volumeSlider = document.querySelector('#volume');
  volumeSlider.addEventListener( 'change', function (){
    console.log(document.getElementById("volume").value);
    changeVolume(document.getElementById("volume").value);
  })

}

//change horn image
function hornImg(newHorn) {
  let image = document.querySelector('img');
  image.src = "assets/images/" + newHorn + ".svg";
}

//change horn sound file
function hornSnd(newHorn) {
  console.log(newHorn);
  let sound = document.querySelector('audio');
  sound.src = "assets/audio/" + newHorn + ".mp3";
}

//change horn volume
function changeVolume(vol){
  let volumeIconElement = document.getElementById("volume-controls").querySelector('img');
  let curVolume = document.getElementById("volume");
  //change playback volume 
  document.querySelector('audio').volume = vol/100;
  //change volume icon 
  if(curVolume.value <= 0) {
    volumeIconElement.src = "assets/icons/volume-level-0.svg";
  }
  else if(curVolume.value > 0 && curVolume.value < 33){
    volumeIconElement.src = "assets/icons/volume-level-1.svg";
  }
  else if(curVolume.value >= 33 && curVolume.value < 67){
    volumeIconElement.src = "assets/icons/volume-level-2.svg";
  }
  else if(curVolume.value >= 67 ){
    volumeIconElement.src = "assets/icons/volume-level-3.svg";
  }
  
}