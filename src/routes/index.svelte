<script>
	import Header from '../stories/Header.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Heading from '../stories/Heading.svelte';
	import Board from '../routes/board.svelte';

	let user = null;

	const props = [
		{
			name: 'Main',
			action: null,
			showSubs: true,
			sub: [
				{ name: 'Sub One', action: null },
				{ name: 'Sub Two', action: null }
			]
		},
		{
			name: 'Two',
			action: null,
			showSubs: false,
			sub: [
				{ name: 'Sub One', action: null },
				{ name: 'Sub Two', action: null }
			]
		}
	];
</script>

<article>
	<Header
		{user}
		on:login={() => (user = { name: 'Jane Doe' })}
		on:logout={() => (user = null)}
		on:createAccount={() => (user = { name: 'Jane Doe' })}
	/>

	<div class="cont">
		<Navbar {props} />

		<div class="content">
			<Heading color="#212121" size="medium" value="Boards" />
			<Board />
		</div>
	</div>
</article>

<style>
	.cont {
		display: flex;
		background: #eee;
	}
	.content {
		margin: 10px;
	}
</style>
