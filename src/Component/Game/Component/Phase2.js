import { Phase } from './Phase';
import Phaser from "phaser";

export class Phase2 extends Phase{

    init(){
        this.isMove = false;
    }

    create(){
        this.phase1 = this.relatedScene.physics.add.image(400,300,'nivel2');
        this.paddle = this.relatedScene.physics.add.image(400,480,'paddle').setImmovable();
        this.paddle.body.allowGravity = false;
        this.paddle.setCollideWorldBounds(true);

        this.ball = this.relatedScene.physics.add.image(400,466,'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        let velocity = 100 * Phaser.Math.Between(1.3,2);
        if(Phaser.Math.Between(0,10)>5){
            velocity = 0 - velocity;
        }
        this.ball.setVelocity(velocity, -100);

        this.ball.setVelocityX(0);
        this.ball.setVelocityY(0);

        this.bricks = this.relatedScene.physics.add.staticGroup({
            key:['brick1','brick2','brick3'],
            frameQuantity:10,
            gridAlign:{
                width:10,
                height:4,
                cellWidth:67,
                cellHeight:34,
                x:112,
                y:100
            }
        });
        this.cursors = this.relatedScene.input.keyboard.createCursorKeys();
        this.configureColisions();
        this.configureImpactBall();
        this.configureImpactBrick();

        this.relatedScene.scoreLabel = this.relatedScene.crearPuntuacion(16, 16, 0);
    }

    update(){
        this.moveBall();
        this.move();
        if(this.ball.y > 500){
            console.log('fin');
           // this.gameOver.visible = true;
           this.relatedScene.scene.pause();
           this.relatedScene.scene.start('gameover');
            
        }
    }

    moveBall() {
        if (this.cursors.space.isDown) {
            if (!this.isMove) {
                let velocity = 100 * Phaser.Math.Between(1.3, 2);
                if (Phaser.Math.Between(0, 10) > 5) {
                    velocity = 0 - velocity;
                }
                this.ball.setVelocity(velocity, -100);
                this.isMove = true;
            }
        }
    }

    move(){
        if(this.cursors.left.isDown){
            this.paddle.setVelocityX(-500);
        }else if(this.cursors.right.isDown){
            this.paddle.setVelocityX(500);
        }else{
            this.paddle.setVelocityX(0);
        }
    }
}
