import Phaser from "phaser"
import { StartButton } from '../Component/ButtonPlay';
import { ButtonNivel1 } from "../Component/ButtonNivel1";
import { ButtonNivel2 } from "../Component/ButtonNivel2";

export class Start extends Phaser.Scene {
   constructor(){
       super({key:'start'});
       this.StartButton = new StartButton(this);
       this.nivel1 = new ButtonNivel1(this);
       this.nivel2 = new ButtonNivel2(this);
   }

   preload(){
       // load your assets here...
       this.load.image('start', 'assets/INICIO01.jpg');
       this.StartButton.preload();
       this.nivel1.preload();
       this.nivel2.preload();
   }

   create(){
       // create anime script here...
       this.start = this.add.image(400,300,'start');
       this.StartButton.create();
       this.nivel1.create();
       this.nivel2.create();
   }

}