/**
 * Initialize Phaser with appropriate scale settings, and preload
 * the preload image.
 */
export default class Boot extends Phaser.State {
	public preload() {
		this.load.image('preloadSprite', 'assets/images/preloadSprite.png');
	}

	public create() {
		this.game.input.maxPointers = 1;

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.setMinMax(128, 80, 1280, 800);
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically   = true;
		this.game.scale.refresh();

		this.game.state.start('preload');
	}
}
