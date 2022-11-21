import Phaser from'phaser';
import { RestartButton } from '../Component/ButtonRePlay';

export class Gameover extends Phaser.Scene{
    constructor(){
        super({key: 'gameover'})
        this.RestartButton = new RestartButton(this);
    }

    preload(){
        this.load.image('gameover', 'assets/OVER01.jpg');
        this.RestartButton.preload();
    }

    create(){
        this.add.image(400,300,'gameover');
        this.RestartButton.create();
    }
}