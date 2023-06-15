<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/ExperienceDrawer.svelte';

	let current = 0;
	const switchTab = (index: number) => {
		current = index;
	};
</script>

<main>
	<div class="flex flex-col items-center w-screen">
		<h1 class="text-center text-light text-3xl">experience</h1>
		<div class="flex flex-col w-5/6">
			<ExperienceDrawer {current} idx={0} toggle={() => switchTab(current === 0 ? -1 : 0)}>
				<div slot="title" class="flex justify-center items-center">
					<img src="/h4i-dark.svg" alt="hack4impact" class="w-12 float-left p-1" />
					<h2>Hack4Impact</h2>
				</div>
				<p>This is currently example text about h4i!</p>
			</ExperienceDrawer>
			<ExperienceDrawer {current} idx={1} toggle={() => switchTab(current === 1 ? -1 : 1)} />
			<ExperienceDrawer {current} idx={2} toggle={() => switchTab(current === 2 ? -1 : 2)} />
		</div>
	</div>
</main>
