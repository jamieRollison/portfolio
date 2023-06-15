<script lang="ts">
	export let idx: number;
	export let current: number;
	export let toggle: () => void;
	let open = false;

	$: open = current === idx;
</script>

<main class="m-2">
	<div class="flex w-full flex-col justify-center">
		<button
			on:click={toggle}
			on:keydown={toggle}
			class="rounded-t-md {!open &&
				'delay-100 rounded-b-md'} text-dark text-2xl border border-b-1 bg-secondary"
		>
			<slot name="title" />
		</button>
		<div
			class="text-dark text-1xl bg-secondary
      {open ? 'scale-y-1' : 'scale-y-0'} 
        transition-all
        origin-top
        border w-full rounded-b-md
         p-1"
		>
			<slot />
		</div>
	</div>
</main>
