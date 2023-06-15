<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/ExperienceDrawer.svelte';

	let current = 0;
	const switchTab = (index: number) => {
		current = index;
	};
</script>

<main>
	<h1 class="text-center text-light text-3xl">experience</h1>
	<div class="flex flex-col items-center">
		<ExperienceDrawer {current} idx={0} toggle={() => switchTab(current === 0 ? -1 : 0)} />
	</div>
</main>
