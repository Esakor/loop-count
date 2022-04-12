input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        Counter += 1
        Sum = Counter + Sum
    }
    basic.showNumber(Sum)
})
let Sum = 0
let Counter = 0
Counter += 0
Sum = 0
basic.forever(function () {
	
})
