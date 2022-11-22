export class ButtonNivel2{
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image('btnNIVEL02','assets/NIVEL02.png')
    }

    create(){
        this.btn = this.relatedScene.add.image(650,450,'btnNIVEL02').setInteractive();
        this.btn.on('pointerover',() => {
            this.btn.setFrame(1);
        });
        this.btn.on('pointerout',() => {
            this.btn.setFrame(0);
        });
        this.btn.on('pointerdown', ()=> {
            this.relatedScene.scene.start('game2');
        });
    }
}