const songs = [
    "bensound-dreams.mp3",
    "bensound-endlessmotion.mp3",
    "bensound-house.mp3",
    "bensound-scifi.mp3",
    "bensound-summer.mp3"
]

const createSongList = () => {
    const list =document.createElement('ol')

    for(let i = 0; i <songs.length; i++){
        const item = document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }

    return list
}

document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) => {
  //   console.log(e)
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src = 'songs/' + clickedItem.innerText
  //  console.log(clickedItem.innerText)

  document.getElementById('currentSong').innerText = clickedItem.innerText
  document.getElementById('currentlyPlayingSong').innerText = "Currently Playing: "

    player.load()
    player.play()
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}

const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('volumeSlider')
slider.oninput = (e) => {
  //  console.log(e)
  const volume = e.target.value
  //  console.log(volume)
  player.volume = volume
}

const updateProgress = () => {
    if(player.currentTime > 0){
        const progressBar = document.getElementById('progress')

        progressBar.value = (player.currentTime / player.duration) * 100

    }

} 