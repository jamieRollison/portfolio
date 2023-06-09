<script>
	import Icon from '@iconify/svelte';

	export let icon = '';
	export let link = '/';
	export let text = '';
</script>

<main>
	<a href={link} class="flex flex-row space-x-2">
		<Icon {icon} class="mt-1" />
		<p>{text}</p>
	</a>
</main>
