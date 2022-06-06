<script>
	export let value = '';

	export let size = 'medium';

	export let color;

	let style = color ? `color: ${color}` : '';
</script>

<main>
	{#if size == 'large'}
		<div class="h1" {style}>
			{value}
		</div>
	{:else if size == 'medium'}
		<div class="h2" {style}>
			{value}
		</div>
	{:else if size == 'small'}
		<div class="h3" {style}>
			{value}
		</div>
	{/if}
</main>

<style>
	main {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-weight: 700;
	}
	.h1 {
		font-size: 50px;
	}
	.h2 {
		font-size: 40px;
	}
	.h3 {
		font-size: 25px;
	}
</style>
