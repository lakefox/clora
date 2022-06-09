<script>
	import Heading from '../stories/Heading.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import randomColor from 'randomcolor';
	import { userData } from './data.js';
	let selectedBoard = 0;
	let connection = { name: '', color: randomColor(), types: [], data: [] };
	let pinNumberX = 1;
	let pinNumberY = 1;

	let showAddProp = true;
	let propName = '';
	$: pinNumber = pinNumberY + userData.boards[selectedBoard].height * (pinNumberX - 1);

	let openCreateGroup = false;
	function openCreateGroupF() {
		openCreateGroup = true;
		console.log(userData);
	}
	function closeCreateGroup() {
		openCreateGroup = false;
		connection = { name: '', color: randomColor(), types: [], data: [] };
	}
	let updateNeed = true;
	function getAllTypes() {
		let types = [];
		for (let a = 0; a < userData.boards.length; a++) {
			let data = userData.boards[a].data;
			for (let i = 0; i < data.length; i++) {
				const element = data[i];
				if (typeof element.type != 'undefined') {
					if (types.indexOf(element.type) == -1 && connection.types.indexOf(element.type) == -1) {
						types.push(element.type);
					}
				}
			}
		}
		return types;
	}

	function getAdvailablePins(board) {
		let pins = [];
		let types = [];
		for (let i = 0; i < Object.keys(userData.rules).length; i++) {
			const element = userData.rules[Object.keys(userData.rules)[i]];
			if (connection.types.indexOf(Object.keys(userData.rules)[i]) != -1) {
				types.push(...element);
			}
		}

		types = [...new Set(types)];
		for (let i = 0; i < board.data.length; i++) {
			const element = board.data[i];
			if (types.indexOf(element.type) != -1) {
				pins.push(element);
			}
		}
		return pins;
	}

	function addType(type) {
		updateNeed = true;
		if (typeof connection.types == 'undefined') {
			connection.types == [];
		}
		connection.types.push(type);
	}

	function removeType(type) {
		updateNeed = true;
		if (connection.types.indexOf(type) != -1) {
			connection.types.splice(connection.types.indexOf(type), 1);
		}
	}

	function checkBox(e) {
		let dataset = Object.assign({}, e.srcElement.dataset);
		if (e.srcElement.checked) {
			connection.data.push(dataset);
		} else {
			connection.data.splice(connection.data.indexOf(dataset), 1);
		}
	}
	let updateConnections = 0;
	function createConnection() {
		if (typeof userData.connections == 'undefined') {
			userData.connections = [];
		}
		userData.connections.push(connection);
		closeCreateGroup();
		updateConnections++;
	}
	let editing = false;
	let editIndex = 0;
	function editConnection(c, i) {
		connection = c;
		editIndex = i;
		openCreateGroup = true;
		updateNeed = true;
		editing = true;
	}
	function checkChecked(boardName, pin) {
		let checked = false;
		for (let i = 0; i < connection.data.length; i++) {
			const element = connection.data[i];
			if (element.board == boardName && element.pin == pin) {
				checked = true;
				break;
			}
		}
		updateNeed = false;
		return checked;
	}
	function updateConnection() {
		userData.connections[editIndex] = JSON.parse(JSON.stringify(connection));
		connection = { name: '', color: randomColor(), types: [], data: [] };
		openCreateGroup = false;
		updateNeed = false;
		editing = false;
	}
</script>

<div class="items marginTop">
	{#key updateConnections}
		{#each userData.connections as conn, i}
			<div class="box" on:click={() => editConnection(conn, i)}>
				<Heading color={conn.color} size="xsmall" value={conn.name} />
			</div>
		{/each}
	{/key}
</div>
<div class="row marginTop marginLeft">
	<div class="button" on:click={openCreateGroupF}>Create Connection</div>
</div>

{#if openCreateGroup}
	<div class="model">
		<div class="model_content">
			<div class="row">
				<Heading color="#212121" size="small" value="Create Connection" />
				<div class="close" on:click={closeCreateGroup}>
					<MdClose />
				</div>
			</div>
			<div class="color">
				<div class="row inputRow">
					<div class="label">Name:</div>
					<input type="text" bind:value={connection.name} />
				</div>
				<div class="row inputRow">
					<div class="label">Color:</div>
					<input type="color" bind:value={connection.color} />
				</div>
			</div>
			<div class="sub">
				<div class="row marginTop">
					<Heading color="#212121" size="xsmall" value="Can Connect" />
				</div>
				<div class="row">
					<div class="greyArea">
						{#key updateNeed}
							{#each connection.types as type}
								<div class="box fit" on:click={() => removeType(type)}>{type}</div>
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
								<div class="box fit" on:click={() => addType(type)}>{type}</div>
							{/each}
						{/key}
					</div>
				</div>
			</div>
			<div class="row marginTop">
				<Heading color="#212121" size="small" value="Select Pins" />
			</div>
			{#key updateNeed}
				{#each userData.boards as board}
					<div class="row marginTop">
						<Heading color="#212121" size="xsmall" value={board.name} />
					</div>
					<div class="row">
						<div class="greyArea column">
							{#each getAdvailablePins(board) as pin}
								<div class="radioSelect">
									<input
										type="checkbox"
										name={board.name + pin.pin}
										data-board={board.name}
										data-pin={pin.pin}
										on:change={checkBox}
										checked={(() => {
											return checkChecked(board.name, pin.pin);
										})()}
									/>
									<label for={pin.label + pin.pin}>{pin.label} [{pin.pin}]</label>
								</div>
							{/each}
						</div>
					</div>
				{/each}
			{/key}
			{#if editing}
				<div class="row marginTop marginLeft">
					<div class="button" on:click={updateConnection}>Update Connection</div>
				</div>
			{:else}
				<div class="row marginTop marginLeft">
					<div class="button" on:click={createConnection}>Create Connection</div>
				</div>
			{/if}
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
		width: fit-content;
		height: fit-content;
		user-select: none;
	}
	.box:hover {
		background: #eee;
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
		overflow-y: auto;
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
		min-height: 150px;
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
	.button {
		padding: 10px;
		background: #687ce9;
		color: #fff;
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border-radius: 4px;
		cursor: pointer;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -2px rgb(0 0 0 / 10%);
	}
	.items {
		display: flex;
	}
	.marginLeft {
		margin-left: 10px;
	}
	.inputRow {
		width: 80%;
		max-width: 250px;
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
		max-width: 200px;
		text-align: right;
		border-top-left-radius: 0px;
		border-bottom-left-radius: 0px;
		padding-right: 10px;
	}
	input[type='color'] {
		height: 32px;
	}
	input[type='checkbox'] {
		width: 15px;
	}
	.column {
		display: flex;
		flex-direction: column;
		padding: 10px;
	}
	.radioSelect {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		color: #4a4a4a;
	}
</style>
