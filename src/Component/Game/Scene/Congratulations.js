import Phaser from'phaser';
import { RestartButton } from '../Component/ButtonRePlay';

export class Congratulation extends Phaser.Scene{
    constructor(){
        super({key: 'congratulation'})
        this.RestartButton = new RestartButton(this);
    }

    preload(){
        this.load.image('gameover', 'assets/GANASTE.jpg');
        this.RestartButton.preload();
    }

    create(){
        this.add.image(400,300,'gameover');
        this.RestartButton.create();
    }
}