var video_card = document.getElementsByClassName("video-card")[0]
var videos = document.getElementsByClassName("videos")[0]
var index = 0
while (index<100) {
    videos.appendChild(video_card.cloneNode(true))
    index++
}