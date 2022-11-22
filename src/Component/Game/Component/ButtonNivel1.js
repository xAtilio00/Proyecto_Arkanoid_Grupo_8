export class ButtonNivel1{
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image('btnNIVEL01','assets/NIVEL01.png')
    }

    create(){
        this.btn = this.relatedScene.add.image(400,450,'btnNIVEL01').setInteractive();
        this.btn.on('pointerover',() => {
            this.btn.setFrame(1);
        });
        this.btn.on('pointerout',() => {
            this.btn.setFrame(0);
        });
        this.btn.on('pointerdown', ()=> {
            this.relatedScene.scene.start('game');
        });
    }
}