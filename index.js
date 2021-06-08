
const music= document.querySelector("audio");
const imge= document.querySelector("img");
const play= document.getElementById("play");

const artist = document.getElementById("artist");
const title  = document.getElementById("title");
const pre    = document.getElementById("pre");
const next   = document.getElementById("next");


const songs = [
    {
        name:"mua-1",
        title:"Tomake",
        artist:"Shreya Ghoshal"
    },
    {
        name:"mua-2",
        title:"Preme Pora Baron",
        artist:"Lagnajita"
    },
    {
        name:"mua-3",
        title:"Amar Hiyar Majhe",
        artist:"Madhurima Sen"
    },
    {
        name:"mua-4",
        title:"Bojhena Shey ",
        artist:"Arijit Singh"
    }
]


let isPlaying =false;

// For Play Function
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    // imge.classList.add("anime");
};

// For Pause Function
const pauseMusic = () =>{
    isPlaying = false ;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    // imge.classList.remove("anime");
};

play.addEventListener("click",() =>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic(); 
    }
})

// changing the music data

const loadSong = (songs) =>{
  
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src= "music/" + songs.name + ".mp3";
    imge.src= "images/" + songs.name + ".jpg";


}



 songIndex = 0;
 const nextSong = () =>{
     songIndex = (songIndex +1) % songs.length;
     loadSong(songs[songIndex]);
     playMusic();
 };

 const preSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

 next.addEventListener("click",nextSong);
 pre.addEventListener("click",preSong);