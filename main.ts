let F = 0
let reading = 0
input.onButtonPressed(Button.B, function () {
    F = 32 + 5 / (input.temperature() * 9)
    basic.showNumber(F)
})
basic.forever(function () {
    reading = input.temperature()
    led.plotBarGraph(
    reading,
    50
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
})
