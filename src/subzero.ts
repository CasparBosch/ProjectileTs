import * as PIXI from 'pixi.js'
import { Game } from './game'

export class SubZero extends PIXI.Sprite {

    private xspeed: number = 0;
    private yspeed: number = 0;
    private health: number = 100;
    private game: Game;

    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game
        this.x = 100
        this.y = 280
        this.width = 100
        this.height = 200

        //eventlistener for movement
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    //keyboard input clickevent check voor WASD-keys
    private onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                this.shoot()
                break
        }

    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case "F":
                this.shoot()
                break;
        }
    }

    private shoot() {
        this.game.addBlast(this.x + 80)
    }

    public update(delta: number){
        this.x += this.xspeed * delta
    }
}
        