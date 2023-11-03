import SceneKeys from "../constants/SceneKeys";
import TextureKeys from "../constants/TextureKeys";
import { io } from "socket.io-client";

export default class Preloader extends Phaser.Scene {

	constructor() {
		super(SceneKeys.Preloader);
	}

	preload() {
		this.load.image(TextureKeys.Board, "assets/board.png");
		this.load.image(TextureKeys.RedChip, "assets/red_chip.png");
		this.load.image(TextureKeys.YellowChip, "assets/yellow_chip.png");
	}

	create() {
        this.registry.set('socket', io('http://localhost:3000'));
		this.scene.start(SceneKeys.Game);
	}

}