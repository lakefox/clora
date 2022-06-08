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
				{ name: 'Boards', action: 0 },
				{ name: 'Rules', action: 1 },
				{ name: 'Connections', action: 2 }
			]
		},
		{
			name: 'Two',
			showSubs: false,
			sub: [
				{ name: 'Sub One', action: 3 },
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
				<Heading color="#212121" size="medium" value="Boards" />
				<Board />
			</div>
		{:else if pageIndex == 1}
			<div class="content">
				<Heading color="#212121" size="medium" value="Rules" />
				<Ruler />
			</div>
		{:else if pageIndex == 2}
			<div class="content">
				<Heading color="#212121" size="medium" value="Connections" />
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
</style>
