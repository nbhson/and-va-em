// const yourDate = new Date("2020-10-26T08:49:00");
const yourDate = new Date("2024-01-14T00:00:00");
document.addEventListener(
  "DOMContentLoaded",
  function () {
    var rootTime = document.querySelector("time");

    document.getElementById("anni").innerHTML = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    } - 
    ${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    } - 
    ${yourDate.getFullYear()}`;

    document.getElementById("date").innerHTML =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " NGÀY";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs} : 
        ${min > 9 ? min : "0" + min} : 
        ${sec > 9 ? sec : "0" + sec}`;
    }
    olock();
    setInterval(function () {
      olock();
    }, 1000);
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);

window.addEventListener('DOMContentLoaded', (event) => {
  var audio = document.getElementById("myAudio");
  audio.muted = true;
  audio.play();
});

document.addEventListener("click", function (e) {
  var body = document.querySelector("body");
  var heart = document.createElement("span");
  var x = e.offsetX;
  var y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  var size = Math.random() * 100;
  heart.style.width = 20 + size + "px";
  heart.style.height = 20 + size + "px";
  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 3000);

  playAudio();
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  
  if (audio.paused) {
    audio.muted = false;
    audio.play();  
  } else {
    audio.muted = true;
    audio.pause(); 
  }
}