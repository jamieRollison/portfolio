<script lang="ts">
	import { onMount } from 'svelte';

	let open = false;
	const toggle = () => {
		open = !open;
	};
	export let id: string;

	onMount(() => {
		// this is dumb but it causes the animation to play
		setTimeout(() => {
			if (window.location.hash === `#${id}`) {
				toggle();
			}
		}, 0);
	});
</script>

<div class="m-2">
	<div class="flex w-full flex-col justify-center items-stretch">
		<button
			on:click={toggle}
			on:keydown={toggle}
			class="rounded-t-md border-b-0 text-dark md:text-2xl border bg-light"
		>
			<div class="flex justify-between mt-2">
				<slot name="title" />
				<span
					class="text-xl self-center float-right text-end max-w-fit mr-4 transition-all delay-150 transform
					{open && 'rotate-90'}"
				>
					▸
				</span>
			</div>
		</button>
		<div
			class="{open ? 'open' : 'closed'}
       border-t-0
      text-dark text-1xl bg-light
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
</div>
