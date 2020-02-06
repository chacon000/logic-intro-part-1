function change_score_ () {
	
}
function game_over () {
	
}
function _49ers () {
    let score = 0
    _49ers2 = sprites.create(img`
. . . . . 4 4 4 . . . 4 4 . . . 
. . . . . 4 4 4 . . . 4 4 . . . 
. . . . 4 4 4 4 . . . 4 4 . . . 
. . . . 4 4 4 4 . . 4 . 4 . 4 . 
. . . . 4 4 4 4 . . 4 . 4 . 4 . 
4 . . . 4 4 4 4 . 4 . 4 4 4 4 . 
4 . . . 4 4 4 4 . 4 . 4 4 4 4 . 
4 . . 4 4 4 4 4 4 4 . 4 4 4 4 . 
. 4 4 . 4 4 4 4 4 4 . 4 4 . 4 . 
. . . . 4 4 4 4 4 4 4 4 4 . 4 . 
. . . . . 4 4 . . 4 4 4 4 . . . 
. . . . . 4 4 . . 4 4 . . . . . 
. . . . . 4 4 . . . 4 . . . . . 
. . . . . 4 4 . . . 4 . . . . . 
. . . . 4 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    _49ers2.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    _49ers2.vx = (-50 - 5) * (info.score() - extra_velocity)
    if (score <= 20) {
        controller.moveSprite(spaceship, 100 - 2 * info.score(), 100 - 2 * info.score())
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let extra_velocity = 0
let _49ers2: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . 6 6 6 . . . . . . . . . . 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . . . 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 6 6 6 6 6 . . . . 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 . . . . . . 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 6 6 6 6 6 6 6 . 
. 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(spaceship)
spaceship.x = 8
spaceship.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(500, function () {
    _49ers()
})
