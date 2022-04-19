input.onButtonPressed(Button.A, function () {
    raumNummer = 0
})
input.onButtonPressed(Button.B, function () {
    raumNummer = 1
})
let raumNummer = 0
raumNummer = 0
basic.forever(function () {
    basic.clearScreen()
    if (raumNummer == 0) {
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
})
