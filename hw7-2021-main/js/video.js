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
