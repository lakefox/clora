<script>
	import { onMount } from 'svelte';

	export let data;
	export let pinX;
	export let pinY;

	console.log(data);

	let canvas;

	let pinWidth = 20;
	let pinHeight = 20;
	let pinMargin = 3;

	let metalWidth = 5;
	let metalHeight = 5;

	let textMarginLeft = 0;
	let textMarginRight = 0;

	onMount(() => {
		let ctx = canvas.getContext('2d');
		if (data.type == 0) {
			typeZero(ctx, data);
		} else if (data.type == 1) {
			typeOne(ctx, data);
		}
	});

	function roundRect(ctx, x, y, width, height, radius = 5, fill = false, stroke = true) {
		if (typeof radius === 'number') {
			radius = { tl: radius, tr: radius, br: radius, bl: radius };
		} else {
			radius = { ...{ tl: 0, tr: 0, br: 0, bl: 0 }, ...radius };
		}
		ctx.beginPath();
		ctx.moveTo(x + radius.tl, y);
		ctx.lineTo(x + width - radius.tr, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
		ctx.lineTo(x + width, y + height - radius.br);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
		ctx.lineTo(x + radius.bl, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
		ctx.lineTo(x, y + radius.tl);
		ctx.quadraticCurveTo(x, y, x + radius.tl, y);
		ctx.closePath();
		if (fill) {
			ctx.fill();
		}
		if (stroke) {
			ctx.stroke();
		}
	}
	function fillMixedText(ctx, args, x, y) {
		let defaultFillStyle = ctx.fillStyle;
		let defaultFont = ctx.font;

		ctx.save();
		args.forEach(({ text, fillStyle, font }) => {
			ctx.fillStyle = fillStyle || defaultFillStyle;
			ctx.font = font || defaultFont;
			ctx.fillText(text, x, y);
			x += ctx.measureText(text).width;
		});
		ctx.restore();
	}

	function typeZero(ctx, data) {
		ctx.font = '18px Arial';
		for (let i = 0; i < data.data.length; i++) {
			const element = data.data[i];
			let w = ctx.measureText(element.label + ` [${data.width * data.height}] `).width;
			if (i < data.height) {
				if (w > textMarginLeft) {
					textMarginLeft = w + pinMargin;
				}
			} else {
				if (w > textMarginRight) {
					textMarginRight = w + pinMargin;
				}
			}
		}

		canvas.width =
			data.width * pinWidth + pinMargin * data.width + textMarginLeft + textMarginRight;
		canvas.height = data.height * pinHeight + pinMargin * data.height;
		ctx.width = data.width * pinWidth + pinMargin * data.width + textMarginLeft + textMarginRight;
		ctx.height = data.height * pinHeight + pinMargin * data.height;
		for (let i = 0; i < data.width * data.height; i++) {
			let x = parseInt(i / data.height);
			let y = i - data.height * x;
			ctx.fillStyle = '#212121';
			roundRect(
				ctx,
				x * pinWidth + pinMargin * x + textMarginLeft,
				pinMargin + (y * pinHeight + pinMargin * y),
				pinWidth,
				pinHeight,
				3,
				true
			);
			ctx.fillStyle = '#eeeeee';
			roundRect(
				ctx,
				x * pinWidth + pinMargin * x + (pinWidth - metalWidth) / 2 + textMarginLeft,
				pinMargin + (y * pinHeight + pinMargin * y + (pinHeight - metalHeight) / 2),
				metalWidth,
				metalHeight,
				3,
				true
			);
			ctx.fillStyle = '#bbb';
			ctx.font = '18px Arial';
			let fillStyle = '#bbb';
			if (typeof pinX != 'undefined' && typeof pinY != 'undefined') {
				if (pinX == x && pinY == y) {
					fillStyle = '#212121';
				}
			}
			if (x == 0) {
				if (typeof data.data[i] != 'undefined') {
					if (typeof data.data[i].label != 'undefined') {
						let w = ctx.measureText(data.data[i].label + ` [${data.data[i].pin}] `).width;
						fillMixedText(
							ctx,
							[
								{
									text: data.data[i].label,
									fillStyle: fillStyle,
									font: '18px Arial'
								},
								{
									text: ` [${data.data[i].pin}] `,
									fillStyle: '#c2af8e',
									font: 'bold 18px Arial'
								}
							],
							textMarginLeft - w,
							pinHeight - pinMargin + (y * pinHeight + pinMargin * y)
						);
					}
				}
			} else if (x == 1) {
				if (typeof data.data[i] != 'undefined') {
					if (typeof data.data[i].label != 'undefined') {
						let w = ctx.measureText(data.data[i].label + ` [${data.data[i].pin}] `).width;
						fillMixedText(
							ctx,
							[
								{
									text: ` [${data.data[i].pin}] `,
									fillStyle: '#c2af8e',
									font: 'bold 18px Arial'
								},
								{
									text: data.data[i].label,
									fillStyle: fillStyle,
									font: '18px Arial'
								}
							],
							textMarginLeft + data.width * pinWidth + pinMargin,
							pinHeight - pinMargin + (y * pinHeight + pinMargin * y)
						);
					}
				}
			}
		}
	}

	function typeOne(ctx, data) {
		pinMargin = 0;
		ctx.font = '18px Arial';
		for (let i = 0; i < data.data.length; i++) {
			const element = data.data[i];
			let w = ctx.measureText(element.label + ` [${data.width * data.height}] `).width;
			if (i < data.height) {
				if (w > textMarginLeft) {
					textMarginLeft = w + pinMargin;
				}
			} else {
				if (w > textMarginRight) {
					textMarginRight = w + pinMargin;
				}
			}
		}

		canvas.width =
			data.width * pinWidth + pinMargin * data.width + textMarginLeft + textMarginRight;
		canvas.height = data.height * pinHeight + pinMargin * data.height + 10;
		ctx.width = data.width * pinWidth + pinMargin * data.width + textMarginLeft + textMarginRight;
		ctx.height = data.height * pinHeight + pinMargin * data.height + 10;
		for (let i = 0; i < data.width * data.height; i++) {
			let x = parseInt(i / data.height);
			let y = i - data.height * x;
			ctx.fillStyle = '#212121';
			ctx.fillRect(
				x * pinWidth + pinMargin * x + textMarginLeft,
				pinMargin + (y * pinHeight + pinMargin * y),
				pinWidth + 1,
				pinHeight
			);
			ctx.fillStyle = '#eeeeee';
			ctx.fillRect(
				x == 0
					? x * pinWidth + pinMargin * x - metalWidth / 2 + textMarginLeft + 1
					: x * pinWidth + pinMargin * x + (pinWidth - metalWidth / 2) + textMarginLeft,
				pinMargin + (y * pinHeight + pinMargin * y + (pinHeight - metalHeight) / 2),
				metalWidth,
				metalHeight
			);
			ctx.fillStyle = '#bbb';
			ctx.font = '18px Arial';
			let fillStyle = '#bbb';
			if (typeof pinX != 'undefined' && typeof pinY != 'undefined') {
				if (pinX == x && pinY == y) {
					fillStyle = '#212121';
				}
			}
			if (x == 0) {
				if (typeof data.data[i] != 'undefined') {
					if (typeof data.data[i].label != 'undefined') {
						let w = ctx.measureText(data.data[i].label + ` [${data.data[i].pin}] `).width;
						fillMixedText(
							ctx,
							[
								{
									text: data.data[i].label,
									fillStyle: fillStyle,
									font: '18px Arial'
								},
								{
									text: ` [${data.data[i].pin}] `,
									fillStyle: '#c2af8e',
									font: 'bold 18px Arial'
								}
							],
							textMarginLeft - w,
							pinHeight - pinMargin + (y * pinHeight + pinMargin * y)
						);
					}
				}
			} else if (x == 1) {
				if (typeof data.data[i] != 'undefined') {
					if (typeof data.data[i].label != 'undefined') {
						let w = ctx.measureText(data.data[i].label + ` [${data.data[i].pin}] `).width;
						fillMixedText(
							ctx,
							[
								{
									text: ` [${data.data[i].pin}] `,
									fillStyle: '#c2af8e',
									font: 'bold 18px Arial'
								},
								{
									text: data.data[i].label,
									fillStyle: fillStyle,
									font: '18px Arial'
								}
							],
							textMarginLeft + data.width * pinWidth + pinMargin,
							pinHeight - pinMargin + (y * pinHeight + pinMargin * y)
						);
					}
				}
			}
		}
	}
</script>

<canvas id="canvas" bind:this={canvas} />

<style>
	canvas {
		max-width: 100%;
		max-height: 100%;
	}
</style>
