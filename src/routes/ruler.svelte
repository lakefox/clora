<script>
	import Heading from '../stories/Heading.svelte';
	import { userData } from './data.js';
	import MdClose from 'svelte-icons/md/MdClose.svelte';

	function getTypes(ud) {
		let data = ud.data;
		let types = [];
		for (let i = 0; i < data.length; i++) {
			const element = data[i];
			if (typeof element.type != 'undefined') {
				if (types.indexOf(element.type) == -1) {
					types.push(element.type);
				}
			}
		}
		return types;
	}
	function getAllTypes() {
		let types = [];
		let currentTypes = getAddedRules();
		for (let a = 0; a < userData.boards.length; a++) {
			let data = userData.boards[a].data;
			for (let i = 0; i < data.length; i++) {
				const element = data[i];
				if (typeof element.type != 'undefined') {
					if (types.indexOf(element.type) == -1 && currentTypes.indexOf(element.type) == -1) {
						types.push(element.type);
					}
				}
			}
		}
		updateNeed = false;
		return types;
	}

	let displayTypeEditor = false;
	let typeName = '';
	let updateNeed = false;
	function openType(type, udIndex, typeIndex) {
		typeName = type;
		displayTypeEditor = true;
	}
	function close() {
		displayTypeEditor = false;
	}

	function addRule(type) {
		if (typeof userData.rules[typeName] == 'undefined') {
			userData.rules[typeName] = [];
		}
		if (userData.rules[typeName].indexOf(type) == -1) {
			userData.rules[typeName].push(type);
			updateNeed = true;
		}
	}

	function removeRule(type) {
		if (typeof userData.rules[typeName] == 'undefined') {
			userData.rules[typeName] = [];
		} else {
			if (userData.rules[typeName].indexOf(type) != -1) {
				userData.rules[typeName].splice(userData.rules[typeName].indexOf(type), 1);
				updateNeed = true;
			}
		}
	}

	function getAddedRules() {
		return userData.rules[typeName] || [];
	}
	$: console.log(userData);
</script>

<main>
	{#each userData.boards as ud, i}
		<Heading color="#212121" size="small" value={ud.name} />
		<div class="types">
			{#each getTypes(ud) as type, t}
				<div class="box" on:click={() => openType(type, i, t)}>
					<Heading color="#5e5e5e" size="xsmall" value={type} />
				</div>
			{/each}
		</div>
	{/each}
</main>

{#if displayTypeEditor}
	<div class="model">
		<div class="model_content">
			<div class="row">
				<Heading color="#212121" size="small" value="Set {typeName} rules" />
				<div class="close" on:click={close}>
					<MdClose />
				</div>
			</div>
			<div class="sub">
				<div class="row marginTop">
					<Heading color="#212121" size="xsmall" value="Can Connect" />
				</div>
				<div class="row">
					<div class="greyArea">
						{#key updateNeed}
							{#each getAddedRules() as type}
								<div class="box fit" on:click={() => removeRule(type)}>{type}</div>
							{/each}
						{/key}
					</div>
				</div>
				<div class="row">
					<Heading color="#212121" size="xsmall" value="Can NOT Connect" />
				</div>
				<div class="row">
					<div class="greyArea">
						{#key updateNeed}
							{#each getAllTypes() as type}
								<div class="box fit" on:click={() => addRule(type)}>{type}</div>
							{/each}
						{/key}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.box {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		margin: 10px;
		border-radius: 5px;
		padding: 15px;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
		background: #fff;
		cursor: pointer;
	}
	.box:hover {
		background: #eee;
	}
	.fit {
		width: fit-content;
		height: fit-content;
	}
	main {
		margin-top: 20px;
	}
	.types {
		display: flex;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.model {
		width: 100vw;
		height: 100vh;
		position: fixed;
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
	.greyArea {
		width: 100%;
		height: 150px;
		background: #eee;
		border-radius: 6px;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 30px;
		margin-right: 30px;
		display: flex;
		font-weight: 700;
		color: #212121;
	}
	.marginTop {
		margin-top: 20px;
	}
	.sub {
		margin-left: 30px;
		margin-right: 30px;
	}
</style>
