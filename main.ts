input.onButtonPressed(Button.A, function () {
    if (SPRITE.get(LedSpriteProperty.X) == 2) {
        puntos += 1
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        puntos += -1
        basic.showNumber(puntos)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(puntos)
})
let puntos = 0
let SPRITE: game.LedSprite = null
basic.showNumber(3)
basic.pause(100)
basic.showNumber(2)
basic.pause(100)
basic.showNumber(1)
SPRITE = game.createSprite(2, 2)
puntos = 0
basic.forever(function () {
    SPRITE.move(1)
    basic.pause(100)
    SPRITE.ifOnEdgeBounce()
    if (puntos < 0) {
        basic.showIcon(IconNames.Sad)
    }
})
