<script>
	import Icon from '@iconify/svelte';
	export let name = '';
	export let description = '';
	export let gh = '';
	export let devpost = '';
	export let img = '';
	export let event = '';
	export let techStack = '';
	export let live = '';
	export let win = '';
</script>

<div
	class="h-fit min-h-[28rem] w-[24rem] bg-secondary border rounded flex-col flex text-center justify-center p-4 m-2"
>
	<h1>⭐️ {win} ⭐️</h1>
	<div class="h-60 flex justify-center">
		<img src={img} alt="{name} title" class="w-60 self-center min-40" />
	</div>
	<h1 class="text-2xl font-extrabold">{name}</h1>
	<h2 class="text-xl">{event}</h2>
	<h3 class="text-lg">{techStack}</h3>
	<p>{description}</p>
	<span class="flex justify-evenly text-2xl mt-2 mb-1">
		<a href={gh} target="_blank">
			<Icon icon="simple-icons:github" class="text-dark" />
		</a>
		<a href={devpost} target="_blank">
			<Icon icon="simple-icons:devpost" class="text-dark" />
		</a>
		{#if live}
			<a href={live} target="_blank">
				<Icon icon="bi:globe" class="text-dark" />
			</a>
		{/if}
	</span>
</div>
