function saugen () {
    if (saugerRaum == 1) {
        staubInRaum1 = false
    }
}
function staubZeichnen () {
    if (staubInRaum1 == true) {
        led.plot(3, 4)
        led.plot(4, 4)
    }
}
input.onButtonPressed(Button.A, function () {
    saugerRaum = 0
})
input.onGesture(Gesture.Shake, function () {
    saugen()
})
function wandZeichnen () {
    led.plot(2, 0)
    led.plot(2, 1)
    led.plot(2, 3)
    led.plot(2, 4)
}
function saugerZeichnen () {
    if (saugerRaum == 0) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(0, 1)
        led.plot(1, 1)
    } else {
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(4, 1)
    }
}
function weltZeichnen () {
    wandZeichnen()
    saugerZeichnen()
    staubZeichnen()
}
input.onButtonPressed(Button.B, function () {
    saugerRaum = 1
})
let staubInRaum1 = false
let saugerRaum = 0
saugerRaum = 0
staubInRaum1 = true
basic.forever(function () {
    basic.clearScreen()
    weltZeichnen()
})
