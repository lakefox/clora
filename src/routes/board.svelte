<script>
	import Heading from '../stories/Heading.svelte';
	import Canvas from './canvas.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';

	let data = {
		name: 'Raspberry PI',
		width: 2,
		height: 20,
		data: [
			{
				label: '3v3 Power',
				type: 'VCC',
				pin: 1
			},
			{
				label: 'GPIO 2 (I2C1) SDA',
				type: 'GPIO',
				pin: 3
			},
			{
				label: 'GPIO 3 (I2C1) SCL',
				type: 'GPIO',
				pin: 5
			},
			{
				label: 'GPIO 4 (GPCLK0)',
				type: 'GPIO',
				pin: 7
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 9
			},
			{
				label: 'GPIO 17',
				type: 'GPIO',
				pin: 11
			},
			{
				label: 'GPIO 27',
				type: 'GPIO',
				pin: 13
			},
			{
				label: 'GPIO 22',
				type: 'GPIO',
				pin: 15
			},
			{
				label: '3v3 Power',
				type: 'VCC',
				pin: 17
			},
			{
				label: 'GPIO 10 (SPIO MOSI)',
				type: 'GPIO',
				pin: 19
			},
			{
				label: 'GPIO 9 (SPIO MISO)',
				type: 'GPIO',
				pin: 21
			},
			{
				label: 'GPIO 11 (SPIO SCLK)',
				type: 'GPIO',
				pin: 23
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 25
			},
			{
				label: 'GPIO 0 (EEPROM SDA)',
				type: 'GPIO',
				pin: 27
			},
			{
				label: 'GPIO 5',
				type: 'GPIO',
				pin: 29
			},
			{
				label: 'GPIO 6',
				type: 'GPIO',
				pin: 31
			},
			{
				label: 'GPIO 13 (PWM1)',
				type: 'GPIO',
				pin: 33
			},
			{
				label: 'GPIO 19 (PCM FS)',
				type: 'GPIO',
				pin: 35
			},
			{
				label: 'GPIO 26',
				type: 'GPIO',
				pin: 37
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 39
			},
			{
				label: '5v Power',
				type: 'VCC',
				pin: 2
			},
			{
				label: '5v Power',
				type: 'VCC',
				pin: 4
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 6
			},
			{
				label: 'GPIO 14 (UART TX)',
				type: 'GPIO',
				pin: 8
			},
			{
				label: 'GPIO 15 (UART RX)',
				type: 'GPIO',
				pin: 10
			},
			{
				label: 'GPIO 18 (PCM CLK)',
				type: 'GPIO',
				pin: 12
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 14
			},
			{
				label: 'GPIO 23',
				type: 'GPIO',
				pin: 16
			},
			{
				label: 'GPIO 24',
				type: 'GPIO',
				pin: 18
			},
			{
				label: 'Ground',
				type: 'GPIO',
				pin: 20
			},
			{
				label: 'GPIO 25',
				type: 'GPIO',
				pin: 22
			},
			{
				label: 'GPIO 8 (SPIO CE0)',
				type: 'GPIO',
				pin: 24
			},
			{
				label: 'GPIO 7 (SPIO CE1)',
				type: 'GPIO',
				pin: 26
			},
			{
				label: 'GPIO 1 (EEPROM SCL)',
				type: 'GPIO',
				pin: 28
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 30
			},
			{
				label: 'GPIO 12 (PWM0)',
				type: 'GPIO',
				pin: 32
			},
			{
				label: 'Ground',
				type: 'GND',
				pin: 34
			},
			{
				label: 'GPIO 16',
				type: 'GPIO',
				pin: 36
			},
			{
				label: 'GPIO 20 (PCM DIN)',
				type: 'GPIO',
				pin: 38
			},
			{
				label: 'GPIO 21 (PCM DOUT)',
				type: 'GPIO',
				pin: 40
			}
		]
	};
	let openModel = true;
	function open() {
		console.log('OPEJN');
		openModel = true;
	}
	function close() {
		console.log('closze');
		openModel = false;
	}
	let pinNumber = 0;
</script>

<div class="box" on:click={open}>
	<Heading color="#212121" size="small" value={data.name} />
	<Canvas {data} />
</div>

{#if openModel}
	<div class="model">
		<div class="model_content">
			<div class="row">
				<Heading color="#212121" size="small" value="Edit: {data.name}" />
				<div class="close" on:click={close}>
					<MdClose />
				</div>
			</div>
			<br />
			<div class="row">
				<div class="canvasSmall">
					<Canvas {data} />
				</div>
				<div class="edit">
					<Heading color="#212121" size="small" value="Pin Values" />
					<div class="row inputRow">
						<div class="label">Pin:</div>
						<input
							type="number"
							id="pinSelect"
							bind:value={pinNumber}
							max={data.width * data.height}
							min="0"
						/>
					</div>
					<!-- type pins or ic -->
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.box {
		margin: 10px;
		border-radius: 5px;
		padding: 15px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
		background: #fff;
		cursor: pointer;
	}
	.box:hover {
		border: 1px solid rgb(148, 135, 181);
	}
	.model {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.model_content {
		width: 700px;
		max-width: 90%;
		height: 500px;
		background: #fff;
		padding: 10px;
	}
	.row {
		display: flex;
		justify-content: space-between;
	}
	.close {
		width: 30px;
		cursor: pointer;
	}
	.canvasSmall {
		width: 75%;
		max-height: 400px;
	}
	.edit {
		width: 50%;
		height: 400px;
	}
	.inputRow {
		width: 80%;
		justify-content: space-evenly;
		margin-top: 10px;
	}
	.label {
		font-size: 17px;
		color: #212121;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	input[type='number'] {
		border: #212121 2px solid;
		border-radius: 3px;
	}
</style>
