<script>
	import WiNightCloudy from 'svelte-icons/wi/WiNightCloudy.svelte';
	import Button from './Button.svelte';
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
	import { show, mobile } from '../stores.js';

	import { createEventDispatcher } from 'svelte';

	export let user = null;

	let showVal = false;
	let mobileVal = false;

	const dispatch = createEventDispatcher();

	function onLogin(event) {
		dispatch('login', event);
	}
	function onLogout(event) {
		dispatch('logout', event);
	}
	function onCreateAccount(event) {
		dispatch('createAccount', event);
	}

	show.subscribe((value) => {
		showVal = value;
	});

	mobile.subscribe((value) => {
		mobileVal = value;
	});

	function showMenu() {
		console.log('hi');
		showVal = !showVal;
		show.set(showVal);
		console.log(width);
	}

	let width = 0;

	function setWidth() {
		if (width <= 500) {
			mobile.set(true);
			mobileVal = true;
		} else {
			mobile.set(false);
			mobileVal = false;
		}
	}

	$: width, setWidth();
</script>

<svelte:window bind:innerWidth={width} on:load={() => setWidth()} />

<header>
	<div class="wrapper">
		<div>
			<div class="icon">
				<WiNightCloudy />
			</div>
			<h1>Clora</h1>
		</div>
		<div class="buttons">
			{#if user}
				<span class="welcome">
					Welcome, <b>{user.name}</b>!
				</span>
				<Button size="small" on:click={onLogout} label="Log out" />
			{/if}
			{#if !user}
				<Button size="small" on:click={onLogin} label="Log in" />
				<Button primary size="small" on:click={onCreateAccount} label="Sign up" />
			{/if}
			{#if mobileVal}
				<div class="mobile_menu" on:click={showMenu}>
					<IoMdMenu />
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
	.wrapper {
		font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		padding: 15px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.icon {
		display: inline-block;
		vertical-align: middle;
		width: 50px;
	}

	h1 {
		font-weight: 900;
		font-size: 20px;
		line-height: 1;
		margin: 13px 0 6px 10px;
		display: inline-block;
		vertical-align: top;
	}

	.welcome {
		color: #333;
		font-size: 14px;
		margin-right: 10px;
	}
	.mobile_menu {
		width: 40px;
		cursor: pointer;
	}
	.buttons {
		display: flex;
		align-items: center;
	}
</style>
