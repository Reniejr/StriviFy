//PLAY
export const togglePlay = (mp3) => {
    let audio = new Audio(mp3)
    audio.play()
        ? audio.pause()
        : audio.play()
}