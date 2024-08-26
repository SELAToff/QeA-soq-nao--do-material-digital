input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let NAOestapressionadoObotão = true
basic.forever(function () {
    while (NAOestapressionadoObotão) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            basic.pause(100)
            NAOestapressionadoObotão = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            basic.pause(100)
            NAOestapressionadoObotão = false
        }
    }
})
