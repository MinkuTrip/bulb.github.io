var i = 0
const audio_on = new Audio("on.wav")
const audio_off = new Audio("off.wav")
function change() {
    if (i % 2 == 0) {
        document.getElementById("bulb").src = "light_bulb_on.jpg"
        document.getElementById("button").background = 'green' 
        audio_on.play()
    }


    else {
        document.getElementById("bulb").src = "light_bulb_off.jpg"
        document.getElementById("button").background = 'red'
        audio_off.play()
    }
    i++
}
