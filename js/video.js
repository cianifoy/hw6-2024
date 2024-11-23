let video;

window.addEventListener("load", function() {
    console.log("Good job opening the window")
    video = document.querySelector("#player1")
    video.autoplay = false;
    video.loop = false;
    console.log("Autoplay is"+video.autoplay)
    console.log("Loop is"+video.loop)
    console.log()

});

document.querySelector("#play").addEventListener("click", function(){
    video.play()
    console.log("play video")
    document.querySelector("#volume").innerHTML = video.volume *100 + "%"

});

document.querySelector("#pause").addEventListener("click", function(){
    video.pause()
    console.log("pause video")
});

document.querySelector("#slower").addEventListener("click", function(){
    console.log("slow down video")
    video.playbackRate *= .90
    console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
    console.log("speed up video")
    video.playbackRate *= 1.10
    console.log("speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("skip video")
    video.currentTime += 10;
    console.log("time of video is", video.currentTime)
});

document.querySelector("#player1").addEventListener("ended", function() {
    video.currentTime = 0;  
    video.play();  
    console.log("video has started over")
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;

    if (video.muted) {
        console.log("Video is muted");
    } else {
        console.log("Video is unmuted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;  
    console.log("Volume has been adjusted to " + video.volume * 100 + "%");
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector("#player1").classList.toggle("oldSchool");
    console.log("styling has changed")

});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("styling is back to original")

});











// document.querySelector("#play").addEventListener("click", function() {
//     console.log("Play Video")
//     video.play();
// });

// document.querySelector("#pause").addEventListener("click", function() {
//     console.log("Pause Video");
//     video.pause();
// });

// document.querySelector("#pause").addEventListener("click", function(){
// 	console.log("Pause Video");
// })


// document.querySelector("#pause").addEventListener("click", function() {
// 	if (video.paused) {
// 	  video.play();
// 	} else {
// 	  video.pause();
// 	}
//   });
