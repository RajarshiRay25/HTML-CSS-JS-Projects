console.log("Welcome to Spotify Clone")


// audioElem.play();

// Initialise variables
let songInd = 0;
let audioElem = new Audio('1.mp3');
let playButton = document.getElementById("playButton");
let progressBar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let musicid = document.getElementById("musicid");
let songSel = Array.from(document.getElementsByClassName("musicSub"));

let songArr = [
    { songName: "Music 1", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Music 2", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Music 3", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Music 4", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Music 5", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Music 6", filePath: "6.mp3", coverPath: "6.jpg" }
]

songSel.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songArr[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songArr[i].songName
})


//Play Pause Action

playButton.addEventListener("click", () => {
    if (audioElem.paused || audioElem.currentTime <= 0) {
        audioElem.play();
        playButton.classList.remove("fa-circle-play");
        playButton.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
    }
    else {
        audioElem.pause();
        playButton.classList.remove("fa-circle-pause");
        playButton.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})
//Listen to events
audioElem.addEventListener('timeupdate', () => {
    console.log("timeupdate");

    //Progress Bar update

    progressLevel = parseInt((audioElem.currentTime / audioElem.duration) * 100);
    console.log(progressLevel);
    progressBar.value = progressLevel;

})

progressBar.addEventListener("change", () => {
    audioElem.currentTime = progressBar.value * audioElem.duration / 100;
})


const subPlayAll = () => {
    Array.from(document.getElementsByClassName("subPlay")).forEach((element) => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

    })

}


Array.from(document.getElementsByClassName("subPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {

        subPlayAll();

        let songsongInd = parseInt(e.target.id);
        
        // console.log(e.target);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElem.src = `${songsongInd + 1}.mp3`;
        musicid.innerText = songArr[songsongInd].songName;
        audioElem.currentTime = 0;
        audioElem.play()
        gif.style.opacity = 1;
        playButton.classList.remove("fa-circle-play")
        playButton.classList.add("fa-circle-pause")


    })
})

document.getElementById("forward").addEventListener("click", () => {
    if (songInd >= 9) {
        songInd = 0;
    }
    else {
        songInd += 1;
    }

    audioElem.src = `${songInd + 1}.mp3`;
    musicid.innerText = songArr[songInd].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
})
document.getElementById("back").addEventListener("click", () => {
    if (songInd <= 0) {
        songInd = 9;
    }
    else {
        songInd -= 1;
    }

    audioElem.src = `${songInd + 1}.mp3`;
    musicid.innerText = songArr[songInd].songName;
    audioElem.currentTime = 0;
    audioElem.play();
    playButton.classList.remove("fa-circle-play");
    playButton.classList.add("fa-circle-pause");
})