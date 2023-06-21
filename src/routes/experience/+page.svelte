<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/ExperienceDrawer.svelte';
	import ExperienceHeader from '../../components/ExperienceHeader.svelte';
</script>

<main>
	<div class="flex flex-col items-center w-screen">
		<h1 class="text-center text-light text-3xl">experience</h1>
		<div class="flex flex-col w-5/6">
			<ExperienceDrawer>
				<ExperienceHeader
					slot="title"
					icon="/h4i-dark.svg"
					alt="hack4impact logo"
					company="Hack4Impact"
					position="Software Developer"
					date="September 2020 - Present"
				/>
				<p>This is currently example text about h4i!</p>
			</ExperienceDrawer>
			<ExperienceDrawer>
				<ExperienceHeader
					slot="title"
					icon="https://avatars.githubusercontent.com/u/2495066?s=200&v=4"
					alt="intuit logo"
					company="Intuit"
					position="Software Engineer Intern"
					date="Summer 2023"
				/>
				<p>This is currently example text about h4i!</p>
			</ExperienceDrawer>
			<ExperienceDrawer />
		</div>
	</div>
</main>
