import Phaser from'phaser';
import { ButtonMenu } from '../Component/ButtonMenu';

export class Congratulation extends Phaser.Scene{
    constructor(){
        super({key: 'congratulation'})
        this.ButtonMenu = new ButtonMenu(this);
    }

    preload(){
        this.load.image('gameover', 'assets/GANASTE.jpg');
        this.ButtonMenu.preload();
    }

    create(){
        this.add.image(400,300,'gameover');
        this.ButtonMenu.create();
    }
}