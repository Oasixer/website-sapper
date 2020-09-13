<script>
	import { createEventDispatcher, onDestroy } from 'svelte';

	let modal;

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) { onDestroy(() => { previously_focused.focus();
		});
	}
</script>

<!-- <div class="modal-background" on:click={close}></div> -->

<div class="modal" role="dialog" aria-modal="true" bind:this={modal}>
	<slot></slot>
</div>

<style>
	.modal-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
	}

	.modal {
		position: absolute;
		left: 30px;
		top: 30px;
		width: calc(100vw - 1em);
		max-width: 45em;
		max-height: calc(100vh - 4em);
		overflow: auto;
		transform: translate(-50%,-50%);
		padding: 1em;
		border-radius: 0.2em;
		background: white;
	}

	button {
		display: block;
	}
</style>
