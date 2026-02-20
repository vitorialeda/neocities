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
    {
      title: "Moonlight Ginga - SoutaiseiRiron",
      src: "https://www.dropbox.com/scl/fi/ostaeyzsccpq8vhcu2ovw/SoutaiseiRiron-Moonlight-Ginga.mp3?rlkey=uiroa9hbhv3r1ul1qkspi0wjw&st=x5kklvdv&raw=1",
    },
    {
      title: "Super Shooter - Gantz",
      src: "https://www.dropbox.com/scl/fi/d19eksmllykmp5pa3rekz/Super-Shooter-Gantz.mp3?rlkey=dn4psbe6cfaxk5ve7621donik&st=es7dirkh&raw=1",
    },
    {
      title: "~comment te dire adieu~ sourire de aigu",
      src: "https://www.dropbox.com/scl/fi/ppv2ov6sohsbu07sjcaak/comment-te-dire-adieu-sourire-de-aigu.mp3?rlkey=pae2iv63g9rfe3ax5nes0oxb2&st=64cmhz0j&raw=1",
    },
    {
      title: "~comment te dire adieu~ soiree des revoires",
      src: "https://www.dropbox.com/scl/fi/tnnz2bot13aq2y9a0dfnc/comment-te-dire-adieu-soiree-des-au-revoires.mp3?rlkey=qh0xiy0d7obugqf4r92ahi2rg&st=fs5hitsf&raw=1",
    },
    {
      title: "~comment te dire adieu~ l'ange a contre jour",
      src: "https://www.dropbox.com/scl/fi/bgm445p3ra51193dmogrm/comment-te-dire-adieu-l-ange-a-contre-jour.mp3?rlkey=dodtch8ye3590g5xuz1fx65r1&st=ed530ujd&raw=1",
    },
    {
      title: "~comment te dire adieu~ immobile et tourbillon",
      src: "https://www.dropbox.com/scl/fi/s4tq1pbhh48nlk2blfdo4/comment-te-dire-adieu-immobile-et-tourbillon.mp3?rlkey=76k60ybj8gpk8eux7hfnli57t&st=3jywumf4&raw=1",
    },
    {
      title: "~comment te dire adieu~ reve en cage",
      src: "https://www.dropbox.com/scl/fi/fy5inowdw8vu8ehewumbg/comment-te-dire-adieu-reve-en-cage.mp3?rlkey=hukgfyxg5qbdecdvv0bdm4mij&st=56kpve7d&raw=1",
    },
    {
      title: "SABBATH - Yoshihiro Kawagoe",
      src: "https://www.dropbox.com/scl/fi/bcahrr2qzydke12j4g6wz/SABBATH-Yoshihiro-Kawagoe.mp3?rlkey=afo15o4zqg50kre07dep322la&st=pognk0je&raw-1",
    },
    {
      title: "SONG OF SAYA I - Toshimichi Isoe",
      src: "https://www.dropbox.com/scl/fi/4iny9j2bsrj5xtwnidqfx/SONG-OF-SAYA-I-Toshimichi-Isoe.mp3?rlkey=qrdi2pigftz6xqmz8mfbedc4e&st=8a8dsbeq&raw=1",
    },
    {
      title: "SUNSET - Shintaro Jinbo",
      src: "https://www.dropbox.com/scl/fi/761xaz4wo3u93b20gqh56/SUNSET-Shintaro-Jinbo.mp3?rlkey=3y8ettwfglcp0v1pk9tk1cs0b&st=e0byqgal&raw=1",
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
