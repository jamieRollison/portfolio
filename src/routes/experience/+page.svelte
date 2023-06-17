<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/ExperienceDrawer.svelte';
</script>

<main>
	<div class="flex flex-col items-center w-screen">
		<h1 class="text-center text-light text-3xl">experience</h1>
		<div class="flex flex-col w-5/6">
			<ExperienceDrawer>
				<div slot="title" class="flex justify-between items-center p-2 w-full">
					<div class="flex items-center">
						<img src="/h4i-dark.svg" alt="hack4impact" class="w-12 float-left p-1" />
						<h2>Hack4Impact</h2>
					</div>
					<p class="float-center">Software Developer</p>
					<p class="float-right">Fall 2022 - Present</p>
				</div>
				<p>This is currently example text about h4i!</p>
			</ExperienceDrawer>
			<ExperienceDrawer>
				<div slot="title" class="flex justify-between items-center p-2">
					<div class="flex items-center justify-evenly w-1/8">
						<img
							src="https://avatars.githubusercontent.com/u/2495066?s=200&v=4"
							alt="intuit logo"
							class="w-12 float-left p-1"
						/>
						<h2>Intuit</h2>
					</div>
					<p class="float-center">Software Engineer Intern - QuickBooks Mobile</p>
					<p class="float-right">Summer 2023 - Present</p>
				</div>
				<p>This is currently example text about h4i!</p>
			</ExperienceDrawer>
			<ExperienceDrawer />
		</div>
	</div>
</main>
