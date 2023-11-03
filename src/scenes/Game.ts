import Phaser from "phaser";
import SceneKeys from "../constants/SceneKeys";
import { Socket } from "socket.io-client";

export default class Game extends Phaser.Scene {
    socket?: Socket;

	constructor () {
		super(SceneKeys.Game);
	}
    
	preload() {
        
    }
    
	create() {
        this.socket = this.registry.get('socket');
	}

}