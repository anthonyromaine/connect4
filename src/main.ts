import './style.css'

import Phaser from 'phaser'

import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
  width: 720,
  height: 1280,
  backgroundColor: "#ffffff",
	scale: {
		mode: Phaser.Scale.ScaleModes.FIT
	},
	autoCenter: Phaser.Scale.Center.CENTER_BOTH,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [Preloader, Game],
}

export default new Phaser.Game(config)