import * as PIXI from 'pixi.js'
import {Game} from './game'

export class Scorpion extends PIXI.Sprite {

    private xSpeed: number = 0;
    private ySpeed:number = 0;
    private health: number = 100;
    private game: Game;

    constructor(texture:PIXI.Texture){
        super(texture)
        this.x = 1300
        this.y = 280
        this.scale.set(-1,1)
        this.width = 100
        this.height = 200

        //eventlistener for movement
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));
    }

    private shoot(){
        this.game.addBlast(this.x + 80, this.y + 35)
    }

}