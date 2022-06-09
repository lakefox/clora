<script>
	import Heading from '../stories/Heading.svelte';
	import Canvas from '../components/canvas.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import { userData } from './data.js';
	let selectedBoard = 0;
	let openModel = false;
	function open(i) {
		openModel = true;
		selectedBoard = i;
	}
	function close() {
		openModel = false;
	}
	let pinNumberX = 1;
	let pinNumberY = 1;

	let showAddProp = true;
	let propName = '';
	$: pinNumber = pinNumberY + userData.boards[selectedBoard].height * (pinNumberX - 1);

	function addProp() {
		if (showAddProp) {
			showAddProp = false;
		} else {
			userData.boards[selectedBoard].data[pinNumber - 1][propName] = '';
			showAddProp = true;
			propName = '';
		}
	}
</script>

<div class="items">
	{#each userData.boards as dat, i}
		<div class="box" on:click={() => open(i)}>
			<Heading color="#212121" size="small" value={dat.name} />
			<div class="canvasCont">
				<Canvas data={userData.boards[i]} connections={userData.connections} />
			</div>
		</div>
	{/each}
</div>

{#if openModel}
	<div class="model">
		<div class="model_content">
			<div class="row">
				<Heading color="#212121" size="small" value="Edit: {userData.boards[selectedBoard].name}" />
				<div class="close" on:click={close}>
					<MdClose />
				</div>
			</div>
			<br />
			<div class="row">
				<div class="canvasSmall">
					{#key pinNumberX}
						{#key pinNumberY}
							{#key userData.boards[selectedBoard]}
								<Canvas
									data={userData.boards[selectedBoard]}
									pinX={pinNumberX - 1}
									pinY={pinNumberY - 1}
								/>
							{/key}
						{/key}
					{/key}
				</div>
				<div class="edit">
					<Heading color="#212121" size="small" value="Pin Values" />
					<div class="row inputRow">
						<div class="label">Board:</div>
						<select bind:value={userData.boards[selectedBoard].type}>
							<option value="0" default>Header</option>
							<option value="1">IC</option>
						</select>
					</div>
					<div class="half">
						<div class="row inputRow">
							<div class="label">X:</div>
							<input
								type="number"
								bind:value={pinNumberX}
								max={userData.boards[selectedBoard].width}
								min="1"
							/>
						</div>
						<div class="row inputRow">
							<div class="label">Y:</div>
							<input
								type="number"
								bind:value={pinNumberY}
								max={userData.boards[selectedBoard].height}
								min="1"
							/>
						</div>
					</div>
					<div class="marginTop">
						<Heading color="#212121" size="xsmall" value="Properties" />
					</div>
					<div class="props">
						{#key Object.keys(userData.boards[selectedBoard].data[pinNumber - 1]).length}
							{#each Object.keys(userData.boards[selectedBoard].data[pinNumber - 1]) as prop}
								<div class="row inputRow">
									<div class="label">{prop}:</div>
									{#if typeof userData.boards[selectedBoard].data[pinNumber - 1][prop] == 'string'}
										<input
											type="text"
											bind:value={userData.boards[selectedBoard].data[pinNumber - 1][prop]}
										/>
									{:else if typeof userData.boards[selectedBoard].data[pinNumber - 1][prop] == 'number'}
										<input
											type="number"
											bind:value={userData.boards[selectedBoard].data[pinNumber - 1][prop]}
										/>
									{/if}
								</div>
							{/each}
						{/key}

						{#if showAddProp}
							<div class="row inputRow">
								<div class="label full" on:click={addProp}>Add Property</div>
							</div>
						{:else}
							<div class="row inputRow">
								<div class="label">Name:</div>
								<input type="text" bind:value={propName} />
							</div>
							<div class="row inputRow">
								<div class="label full" on:click={addProp}>Add Property</div>
							</div>
						{/if}
					</div>
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
		width: fit-content;
		height: fit-content;
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
		padding: 30px;
		border-radius: 6px;
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
		margin-top: 10px;
		display: flex;
		font-size: 17px;
		color: #212121;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	}
	.label {
		background: #eee;
		padding: 6px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	input {
		border: #eee 2px solid;
		border-radius: 4px;
		width: 100%;
		text-align: right;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		padding-right: 10px;
	}
	select {
		border: #eee 2px solid;
		border-radius: 4px;
		width: 100%;
		text-align: right;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.marginTop {
		margin-top: 15px;
	}
	.half {
		display: flex;
		max-width: 223px;
	}
	.full {
		width: 100%;
		border-radius: 4px;
		font-weight: 700;
		text-align: center;
		cursor: pointer;
		user-select: none;
	}
	.full:hover {
		background: #dbdbdb;
	}
	.props {
		height: 300px;
		overflow-y: auto;
	}
	.canvasCont {
		width: fit-content;
	}
	.items {
		display: flex;
	}
</style>
