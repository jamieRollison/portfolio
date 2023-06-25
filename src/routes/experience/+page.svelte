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
					position="Software Developer | Tech Lead"
					date="September 2020 - Present"
				/>
				<ul class="px-6 list-disc h4i-list">
					<li>
						<h3>Tech Lead - Upcoming (Fall 2023)</h3>
					</li>
					<li>
						<h3>Software Developer - ClearPath NYC (Spring 2023)</h3>
						<h4>React, Styled Components, Firebase</h4>
					</li>
					<li>
						<h3>Software Developer - 7000 Languages (Fall 2022)</h3>
						<h4>React Native, MongoDB, Expo</h4>
					</li>
				</ul>
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
			</ExperienceDrawer>
			<ExperienceDrawer />
		</div>
	</div>
</main>

<style>
	.h4i-list {
		display: list-item;
		list-style-type: square;
	}

	.h4i-list li h3 {
		@apply text-xl;
	}
</style>
