/**
 * A simple title screen.
 */
export default class Title extends Phaser.State {
	private static readonly TITLE_FONT: Object = {
		fontSize: 24,
		fill: "#FFFF00"
	};

	public create() {
		this.game.add.text(10, 10, "Hello World!", Title.TITLE_FONT);
		this.game.add.image(
			this.game.width / 2,
			this.game.height / 2,
			'example'
		).anchor.setTo(0.5, 0.5);
	}
}
