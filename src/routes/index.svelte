<script>
	import Header from '../stories/Header.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Heading from '../stories/Heading.svelte';
	import Board from '../routes/board.svelte';
	import Ruler from '../routes/ruler.svelte';
	import Connections from '../routes/connections.svelte';
	import { selectedMenuOption } from '../stores.js';

	let user = null;

	const props = [
		{
			name: 'Wiring',
			showSubs: true,
			sub: [
				{ name: 'Components', action: 0 },
				{ name: 'Rules', action: 1 },
				{ name: 'Connections', action: 2 }
			]
		},
		{
			name: 'Modules',
			showSubs: false,
			sub: [
				{ name: 'Modules', action: 3 },
				{ name: 'Sub Two', action: 4 }
			]
		}
	];
	let pageIndex = 0;
	selectedMenuOption.subscribe((value) => {
		pageIndex = value;
	});
</script>

<main>
	<Header
		{user}
		on:login={() => (user = { name: 'Jane Doe' })}
		on:logout={() => (user = null)}
		on:createAccount={() => (user = { name: 'Jane Doe' })}
	/>

	<div class="cont">
		<Navbar {props} />
		{#if pageIndex == 0}
			<div class="content">
				<Heading color="#212121" size="medium" value="Components" />
				<div class="box">Add your components and label there pins.</div>
				<Board />
			</div>
		{:else if pageIndex == 1}
			<div class="content">
				<Heading color="#212121" size="medium" value="Rules" />
				<div class="box">Make rules that define which types of pins can connect together.</div>
				<Ruler />
			</div>
		{:else if pageIndex == 2}
			<div class="content">
				<Heading color="#212121" size="medium" value="Connections" />
				<div class="box">Define each connection and color code them.</div>
				<Connections />
			</div>
		{/if}
	</div>
</main>

<style>
	.cont {
		display: flex;
		background: #eee;
	}
	.content {
		margin: 10px;
	}
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
		color: #212121;
		font-weight: 500;
	}
</style>
