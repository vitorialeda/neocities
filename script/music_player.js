const MusicPlayer = (() => {
  const playlist = [
    {
      title: "沙耶の唄 - ITO Kanako",
      src: "https://www.dropbox.com/scl/fi/zuohkxq02id498bl6n0n3/ITO-Kanako.mp3?rlkey=l85jen8rh9ns3qlde2kp5v8xo&st=jl3smvkp&raw=1",
    },
    {
      title: "ガラスのくつ - ITO Kanako",
      src: "https://www.dropbox.com/scl/fi/k4k1bv079y5uaaokhrdxz/ITO-Kanako.mp3?rlkey=v1wrznoytnrb8vwkuno62v6om&st=akxaeq5i&raw=1",
    },
  ];

  let currentIndex = 0;
  let isPlaying = false;
  let audio = null;

  let playBtn, pauseBtn, labelText, trackInfo;

  function init() {
    audio = document.getElementById("tune");
    playBtn = document.querySelector(".playy");
    pauseBtn = document.querySelector(".pausee");
    labelText = document.querySelector(".labeltext");
    trackInfo = document.querySelector(".track-info");

    if (!audio || !playBtn || !pauseBtn || !labelText) {
      console.warn("Music Player: elementos do DOM não encontrados.");
      return;
    }

    audio.volume = 0.2;

    audio.addEventListener("ended", () => {
      next();
    });

    loadTrack(currentIndex);
    updateControls();
  }

  function loadTrack(index) {
    if (playlist.length === 0) return;
    currentIndex = index;
    const track = playlist[currentIndex];
    audio.src = track.src;
    labelText.textContent = track.title;
    updateTrackInfo();
  }

  function updateTrackInfo() {
    if (trackInfo) {
      trackInfo.textContent = `${currentIndex + 1}/${playlist.length}`;
    }
  }

  function updateControls() {
    if (isPlaying) {
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
    } else {
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
    }
  }

  function togglePlay() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
    updateControls();
  }

  function next() {
    if (playlist.length <= 1) return;
    const nextIndex = (currentIndex + 1) % playlist.length;
    loadTrack(nextIndex);
    if (isPlaying) audio.play();
  }

  function prev() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadTrack(prevIndex);
    if (isPlaying) audio.play();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return {
    togglePlay,
    next,
    prev,
  };
})();
