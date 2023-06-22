<script lang="ts">
	$: open = false;
	const toggle = () => {
		open = !open;
	};
</script>

<main class="m-2">
	<div class="flex w-full flex-col justify-center items-stretch">
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
       transition-all duration-500 {open ? 'min-h-fit scale-y-1' : 'max-h-0 scale-y-0'}
        origin-top
        border w-full rounded-b-md
        overflow-hidden
         ease-in-out
        p-1"
		>
			<slot />
		</div>
	</div>
</main>
