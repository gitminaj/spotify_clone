console.log("Welcome to my website");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let masterPlayName= document.getElementById('masterPlayName');


let songs = [
    { songName: "Khal nayak", filePath: "songs/1.mp3", coverPath: "covers/1.png"},
    { songName: "chaiya chaiya", filePath: "songs/2.mp3", coverPath: "covers/2.png"},
    { songName: "wo ladki jo", filePath: "songs/3.mp3", coverPath: "covers/1.png"},
    { songName: "Lagan lagi", filePath: "songs/4.mp3", coverPath: "covers/3.png"},
    { songName: "dheree dheree", filePath: "songs/3.mp3", coverPath: "covers/7.png"},
    { songName: "hangover", filePath: "songs/2.mp3", coverPath: "covers/6.png"},
    { songName: "hum dono", filePath: "songs/1.mp3", coverPath: "covers/7.png"},
    { songName: "kasam se", filePath: "songs/4.mp3", coverPath: "covers/2.png"},
];

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
    
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;

})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100; 
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        });   
    }
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlayName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlayName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>6){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlayName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
