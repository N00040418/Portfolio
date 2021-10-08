/////////////////////////////////////////////////
// Setting up Audio Web Api
/////////////////////////////////////////////////
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var volume = document.getElementById("vol");
var volumeSlider = document.getElementById("volume");
var btn = document.getElementById("btn");

output.innerHTML = slider.value;
volume.innerHTML = volumeSlider.value;

// create web audio api context
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// create Oscillator 
let oscillator = audioCtx.createOscillator();

// create gain node
const gainNode = audioCtx.createGain();
gainNode.gain.value = (parseInt(volumeSlider.value) / parseInt(volumeSlider.max))*(parseInt(volumeSlider.value) / parseInt(volumeSlider.max));
// connect oscillator to gain node to speakers
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
/////////////////////////////////////////////////
// Drawing a sine waveform
/////////////////////////////////////////////////

var analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;

var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

// Connect the source to be analysed
gainNode.connect(analyser);

// Get a canvas defined with ID "oscilloscope"
var canvas = document.getElementById("oscilloscope");
var canvasCtx = canvas.getContext("2d");

// draw an oscilloscope of the current audio source

function draw() {

  requestAnimationFrame(draw);

  analyser.getByteTimeDomainData(dataArray);

  canvasCtx.fillStyle = "rgb(200, 200, 200)";
  canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0, 0, 0)";

  canvasCtx.beginPath();

  var sliceWidth = canvas.width * 1.0 / bufferLength;
  var x = 0;

  for (var i = 0; i < bufferLength; i++) {

    var v = dataArray[i] / 128.0;
    var y = v * canvas.height / 2;

    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      canvasCtx.lineTo(x, y);
    }

    x += sliceWidth;
  }

  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  canvasCtx.stroke();
}

draw();


/////////////////////////////////////////////////
// Sliders and Buttons
/////////////////////////////////////////////////

// Slider events
slider.oninput = function() {
  output.innerHTML = this.value;
  oscillator.frequency.setValueAtTime(this.value, audioCtx.currentTime);
}

volumeSlider.oninput = function() {
    volume.innerHTML = this.value;
    gainNode.gain.value = (parseInt(this.value) / parseInt(this.max))*(parseInt(this.value) / parseInt(this.max));
}

// Button Events
btn.addEventListener("click", () => {
    if(btn.innerText === "Stop") {
        oscillator.stop();
        btn.innerText = 'Play';
    }else if(btn.innerText === "Play") {
        oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(slider.value, audioCtx.currentTime);
        oscillator.connect(gainNode);
        oscillator.start();
        btn.innerText = 'Stop';
    }
});






