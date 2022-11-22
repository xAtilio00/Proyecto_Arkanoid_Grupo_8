import Phaser from "phaser";
import { Game } from './Scene/Game';
import { Game2 } from './Scene/Game2'
import { Gameover } from './Scene/GameOver';
import { Start } from './Scene/Start';
import { Congratulation } from "./Scene/Congratulations";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Juego() {
    const [start, setStart] = useState(false);
    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 500,
            physics: {
                default: 'arcade',
                arcade: {
                    debug: false
                    //gravity: {y: 100}
                }
            },
            parent: 'game',
            scene: [Start, Game, Game2, Gameover, Congratulation]
        }

        var game = new Phaser.Game(config);
        return () => {
            setStart(false);
            game.destroy(true);
        }
    }, [start]);
    return (
        <div id='game' className='text-center'></div>
    );
}