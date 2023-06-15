<script lang="ts">
	export let idx: number;
	export let current: number;
	export let toggle: () => void;
</script>

<main>
	<div class="flex flex-col justify-center pt-10 w-full" on:click={toggle} on:keydown={toggle}>
		<button class="mb-3 text-light text-2xl">open {current === idx ? '↑' : '↓'}</button>
		<div
			class="
      {current === idx ? 'scale-y-1' : 'scale-y-0'} 
        transition-all
        origin-top
        border-light
        border w-full
        rounded-md p-1"
		>
			<slot />
		</div>
	</div>
</main>
