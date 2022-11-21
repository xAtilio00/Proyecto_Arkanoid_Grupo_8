import Phaser from "phaser";
import { PhaseConstructor } from '../Component/Phase-constructor';
import ScoreLabel from "../Component/Puntuacion";

export class Game extends Phaser.Scene{
    constructor(){
        super({key:'game'});
        this.scoreLabel = undefined
    }

    init(){
        this.phaseConstructor = new PhaseConstructor(this);
    }

    preload(){
        this.load.image('nivel1','assets/LEVEL1.jpg');
        this.load.image('nivel2','assets/LEVEL2.jpg');
        this.load.image('paddle','assets/paddle.png');
        this.load.image('ball','assets/ball.png');
        this.load.image('brick1','assets/brick1.png');
        this.load.image('brick2','assets/brick2.png');
        this.load.image('brick3','assets/brick3.png');
        this.load.audio('choque', 'music/choque.mp3');
    }

    create(){
        this.phaseConstructor.create();
        this.choqueBrick = this.sound.add('choque');
    }

    update(){
        this.phaseConstructor.update();
    }
    
    platformImpact(ball,paddle){
        let relativeImpact = ball.x - paddle.x;
        if(relativeImpact > 0){
            ball.setVelocityX(10 * relativeImpact);
        }else if(relativeImpact < 0){
            ball.setVelocityX(10 * relativeImpact);
        }else{
            ball.setVelocityX(Phaser.Math.Between(-10,10));
        }
    }

    brickImpact(ball, brick){
        this.scoreLabel.add(1)
        this.choqueBrick.play();
        brick.disableBody(true,true);
        if(this.phaseConstructor.isPhaseFinished()){
            this.phaseConstructor.nextLevel();
        }
        /*let pase = true;
        if(this.phaseConstructor.phases == 0){
            console.log("finalizado");
        }else{
            if(pase == true){
                pase = false;
                this.phaseConstructor.nextLevel();
            }
        }*/
    }    

    impactBall(paddle, ball){
        this.choqueBrick.play();
        this.physics.add.collider(paddle, ball, null, null);
    }

    endGame(completed = false){
        if(!completed){
            this.scene.start('gameover');
        }
    }

    crearPuntuacion(x, y, score)
	{
		const style = { fontSize: '32px', fill: '#000' }
		const label = new ScoreLabel(this, x, y, score, style)

		this.add.existing(label)

		return label
	}

}