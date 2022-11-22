export class ButtonMenu{
    constructor(scene){
        this.relatedScene = scene;
    }

    preload(){
        this.relatedScene.load.image('btnMenu','assets/MENU.png');
    }

    create(){
        this.btn = this.relatedScene.add.image(400,450,'btnMenu').setInteractive();
        this.btn.on('pointerover', () => {
            this.btn.setFrame(1);
        });
        this.btn.on('pointerout', () => {
            this.btn.setFrame(0);
        });
        this.btn.on('pointerdown', () => {
            this.relatedScene.scene.start('start');
        })
    }
}