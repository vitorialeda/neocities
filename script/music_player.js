const MusicPlayer = (() => {
  const playlist = [
    // {
    //   title: "沙耶の唄 - ITO Kanako",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/%E6%B2%99%E8%80%B6%E3%81%AE%E5%94%84%20-%20ITO%20Kanako.mp3",
    // },
    // {
    //   title: "ガラスのくつ - ITO Kanako",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/%E3%82%AC%E3%83%A9%E3%82%B9%E3%81%AE%E3%81%8F%E3%81%A4%20-%20ITO%20Kanako.mp3",
    // },
    // {
    //   title: "Moonlight Ginga - SoutaiseiRiron",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/SoutaiseiRiron%20-%20Moonlight%20Ginga.mp3",
    // },
    // {
    //   title: "Super Shooter - Gantz",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/Super%20Shooter%20-%20Gantz.mp3",
    // },
    // {
    //   title: "~comment te dire adieu~ sourire de aigu",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/~comment%20te%20dire%20adieu~%20sourire%20de%20aigu.mp3",
    // },
    // {
    //   title: "~comment te dire adieu~ soiree des revoires",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/~comment%20te%20dire%20adieu~%20soiree%20des%20au%20revoires.mp3",
    // },
    // {
    //   title: "~comment te dire adieu~ l'ange a contre jour",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/~comment%20te%20dire%20adieu~%20l'ange%20a%20contre%20jour.mp3",
    // },
    // {
    //   title: "~comment te dire adieu~ immobile et tourbillon",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/~comment%20te%20dire%20adieu~%20immobile%20et%20tourbillon.mp3",
    // },
    // {
    //   title: "~comment te dire adieu~ reve en cage",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/~comment%20te%20dire%20adieu~%20reve%20en%20cage.mp3",
    // },
    // {
    //   title: "SABBATH - Yoshihiro Kawagoe",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/SABBATH%20-%20Yoshihiro%20Kawagoe.mp3",
    // },
    // {
    //   title: "SONG OF SAYA I - Toshimichi Isoe",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/SONG%20OF%20SAYA%20I%20%C2%B7%20Toshimichi%20Isoe%20.mp3",
    // },
    // {
    //   title: "SUNSET - Shintaro Jinbo",
    //   src: "https://file.garden/aZzM6RSvfEnxBY-o/Songs/SUNSET%20%C2%B7%20Shintaro%20Jinbo.mp3",
    // },
    //
    {
      title: "Secret of the forest - Chrono Trigger",
      src: "https://files.malune.net/f/aaeri/audio/songs/chrono_trigger-secret_of_the_forest.mp3",
    },
    {
      title: "Forest Interlude - Donkey Kong Country 2",
      src: "https://files.malune.net/f/aaeri/audio/songs/donkey_kong-country2-forest_interlude.mp3",
    },
    {
      title: "Aquatic Ambience - Donkey Kong Country 2",
      src: "https://files.malune.net/f/aaeri/audio/songs/donkey_kong-country-aquatic_ambience.mp3",
    },
    {
      title: "Nami's Theme - One Piece",
      src: "https://files.malune.net/f/aaeri/audio/songs/one_piece-namis_theme.mp3",
    },
    {
      title: "Midna's Lament - The Legends Of Zelda (Twilight Princess)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_twilight_princess-midnas_lament.mp3",
    },
    {
      title: "Corridos of Time - Chrono Trigger",
      src: "https://files.malune.net/f/aaeri/audio/songs/chrono_trigger-corridors_of_time.mp3",
    },
    {
      title: "Song of Healing - The Legends Of Zelda (Majora's Mask)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_majoras_mask-song_of_healing.mp3",
    },
    {
      title: "Eterna Forest - Pokemon Platinum",
      src: "https://files.malune.net/f/aaeri/audio/songs/pokemon_platinum-eterna_forest.mp3",
    },
    {
      title: "Lake Theme - Pokemon Platinum",
      src: "https://files.malune.net/f/aaeri/audio/songs/pokemon_platinum-lake.mp3",
    },
    {
      title: "Riding Day - The Legends Of Zelda (Breath of the Wild)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_breath_of_the_wild-riding_day.mp3",
    },
    {
      title: "Zora's Domain - The Legends Of Zelda (Ocarina of Time)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_ocarina_of_time-zoras_domain.mp3",
    },
    {
      title: "Title Theme - The Legends Of Zelda (Ocarina of Time)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_ocarina_of_time-title_theme.mp3",
    },
    {
      title: "Malo Mart - The Legends Of Zelda (Twilight Princess)",
      src: "https://files.malune.net/f/aaeri/audio/songs/legend_of_zelda_twillight_princess-malo_mart.mp3",
    },
    {
      title: "Powerful Mario - Super Mario 64",
      src: "https://files.malune.net/f/aaeri/audio/songs/super_mario_64-powerful_mario.mp3",
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
