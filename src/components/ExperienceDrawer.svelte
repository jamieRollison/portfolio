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
			class="rounded-t-md border-b-0 text-dark text-2xl border bg-secondary"
		>
			<slot name="title" />
		</button>
		<div
			class="{open ? 'open' : 'closed'}
       border-t-0
      text-dark text-1xl bg-secondary
        origin-top
        border w-full rounded-b-md
        overflow-hidden
        ease-in-out
        p-1
      "
		>
			<slot />
		</div>
	</div>
</main>
