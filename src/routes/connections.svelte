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

	let boardType = 'header';
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
</style>
