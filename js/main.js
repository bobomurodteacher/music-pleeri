const container = document.getElementById("container");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const start = document.getElementById("start");
const end = document.getElementById("end");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const volume = document.getElementById("volume");
const bars = document.getElementById("bars");
const modal=document.querySelector('.modal')
const clouseBtn= document.querySelector(".clouse-btn");
const particlesJs=document.getElementById("particles-js")
const modalClick1=document.getElementById("modal-click1")

const menu = document.querySelector(".menu");

const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const music4 = document.getElementById("music4");

const exit = document.getElementById("exit");

const songs = [
  "Heather - Conan Gray",
  "Orxan - Unutmak Istiyorum",
  "Billie Eilish - Lovely",
  "Rauf Faik - метро",
];

//songIndex

let songIndex = 0;

function loadSong(song) {
  title.textContent = song;
  audio.src = `musics/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}
loadSong(songs[songIndex]);

function playSong() {
  container.classList.add("play");
  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  audio.play();
}
function pouseSong() {
  container.classList.remove("play");
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  audio.pause();
}

playBtn.addEventListener("click", function () {
  const isPlaying = container.classList.contains("play");

  if (isPlaying) {
    pouseSong();
  } else {
    playSong();
  }
});

nextBtn.addEventListener("click", () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  loadSong(songs[songIndex]);
  audio.play();
});
prevBtn.addEventListener("click", () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  loadSong(songs[songIndex]);
  audio.play();
});

function progres(e) {
  const duration = e.srcElement.duration;
  const curTime = e.srcElement.currentTime;
  const nowTime = (curTime / duration) * 100;
  progress.style.width = `${nowTime}%`;
  console.log(nowTime);
}

audio.addEventListener("timeupdate", progres);

function setprogress(e) {
  console.log(this.clientWidth, e.offsetX, audio.duration);
  const width = this.clientWidth;
  const widthX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (widthX / width) * duration;
}

progressContainer.addEventListener("click", setprogress);

function changeVolume() {
  const volumes = +volume.value / 100;
  audio.volume = volumes;
}

volume.addEventListener("input", changeVolume);

bars.addEventListener("click", ()=> {
  modal.classList.remove("hidden");
});
clouseBtn.addEventListener("click", ()=> {
  modal.classList.add("hidden");
});
 
modalClick1.addEventListener("click", ()=>{
  
});
