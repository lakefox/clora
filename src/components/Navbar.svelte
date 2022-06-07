<script>
	import IoMdArrowDropdown from 'svelte-icons/io/IoMdArrowDropdown.svelte';
	import IoMdArrowDropup from 'svelte-icons/io/IoMdArrowDropup.svelte';
	import { show, mobile, selectedMenuOption } from '../stores.js';

	export let props = null;

	export let mobileVal = false;

	let showVal = false;

	function showSubs(i) {
		if (typeof props[i].showSubs != 'undefined') {
			if (props[i].showSubs) {
				props[i].showSubs = false;
			} else {
				props[i].showSubs = true;
			}
		} else {
			props[i].showSubs = true;
		}
	}

	show.subscribe((value) => {
		showVal = value;
	});

	mobile.subscribe((value) => {
		mobileVal = value;
	});
	function showMenu() {
		showVal = !showVal;
	}

	function select(a) {
		$selectedMenuOption = a;
	}
</script>

<main>
	{#if showVal || !mobileVal}
		<div class="wrapper">
			{#each props as prop, i}
				<div class="prop">
					<div class="prop_name">
						{prop.name}
						{#if prop.sub}
							{#if prop.showSubs}
								<div class="arrow_down" on:click={() => showSubs(i)}>
									<IoMdArrowDropup />
								</div>
							{:else}
								<div class="arrow_down" on:click={() => showSubs(i)}>
									<IoMdArrowDropdown />
								</div>
							{/if}
						{/if}
					</div>
					{#if prop.sub}
						{#if prop.showSubs == true}
							<div class="sub_cont">
								{#each prop.sub as sub}
									<div class="sub" on:click={() => select(sub.action)}>
										{sub.name}
									</div>
								{/each}
							</div>
						{/if}
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</main>

<style>
	main {
		height: calc(100vh - 100px);
		overflow-y: auto;
		overflow-x: hidden;
		background: #fff;
		user-select: none;
	}
	.wrapper {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		width: 200px;
		border-right: 2px solid rgba(0, 0, 0, 0.1);
		height: 100%;
	}
	.prop {
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 15px 20px;
	}
	.arrow_down {
		width: 30px;
		float: right;
		cursor: pointer;
	}
	.sub_cont {
		width: 100%;
		margin-top: 7px;
	}
	.sub {
		background: #eee;
		padding: 5px;
		font-size: 13px;
		margin-bottom: 3px;
		cursor: pointer;
	}
	.sub:hover {
		background: #e2e2e2;
	}
</style>
