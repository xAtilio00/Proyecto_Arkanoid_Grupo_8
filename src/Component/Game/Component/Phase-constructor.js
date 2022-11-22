import { Phase1 } from './Phase1';
import { Phase2 } from './Phase2';

export class PhaseConstructor{
    constructor(scene){
        this.relatedScene = scene;
        this.phases = [
            Phase2,
            Phase1
        ];

        this.phases2 = [
            Phase2
        ]
    }

    create(){
        let CurrenPhaseClass = this.phases.pop();
        this.CurrenLevel = new CurrenPhaseClass(this.relatedScene);
        return this.CurrenLevel.create();
    }

    update(){
        return this.CurrenLevel.update();
    }

    create2(){
        let CurrenPhaseClass = this.phases2.pop();
        this.CurrenLevel = new CurrenPhaseClass(this.relatedScene);
        return this.CurrenLevel.create();
    }

    update2(){
        return this.CurrenLevel.update();
    }

    nextLevel(){
        this.CurrenLevel.deleteFixedBricks();
        if(this.phases.length === 0){
            this.relatedScene.endGame(true);
            this.relatedScene.scene.start('congratulation')
            
        }else{
            return this.create();
        }
    }
    
    isPhaseFinished(){
        return this.CurrenLevel.isPhaseFinished();
    }
}