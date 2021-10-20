// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  //map image and sound to current horn
  const selectHorn = document.querySelector('#horn-select');
  selectHorn.addEventListener('change', function () {
    hornImg(document.getElementById('horn-select').value);
    hornSnd(document.getElementById('horn-select').value);
  });

  //Plays selected sound on click
  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function () {
    document.querySelector('audio').play();
    //if party horn, add confetti TODO
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
  //change playback volume 
  document.querySelector('audio').volume = vol/100;
  //change volume icon TODO
  
}