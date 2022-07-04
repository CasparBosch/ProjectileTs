import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Blast extends PIXI.Sprite {
    private game:Game

    constructor(texture: PIXI.Texture, game: Game, x: number, y: number) {
        super(texture)
        this.game = game

        this.pivot.x = 30
        this.pivot.y = 30
        this.x = x - 50
        this.y = y + 50
    }

    public update() {
        this.x += 3
        if (this.x > 1450) {
            this.game.removeBlast(this)
        }
    }
}