// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";

/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */


    constructor() {
        // call parent constructor
        super();

        var sprite: Phaser.Sprite;

        var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, 'game', { 
            preload: () => game.load.image('arrow', 'assets/sprites/arrow.png'), 

            create: () => {
                game.physics.startSystem(Phaser.Physics.ARCADE);

                game.stage.backgroundColor = '#0072bc';

                sprite = game.add.sprite(400, 300, 'arrow');
                sprite.anchor.setTo(0.5, 0.5);

                //  Enable Arcade Physics for the sprite
                game.physics.enable(sprite, Phaser.Physics.ARCADE);
                //  Tell it we don't want physics to manage the rotation
                sprite.body.allowRotation = false;
            }, 

            update: () => {
                sprite.rotation = game.physics.arcade.moveToPointer(sprite, 60, game.input.activePointer, 500)
            }, 

            render: () => game.debug.spriteInfo(sprite, 32, 32) 
        });

    }


}