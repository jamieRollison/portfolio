<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/Experience/ExperienceDrawer.svelte';
	import ExperienceHeader from '../../components/Experience/ExperienceHeader.svelte';
</script>

<main>
	<div class="flex flex-col items-center w-screen">
		<h1 class="text-center text-light text-3xl">experience</h1>
		<ul class="flex flex-col md:w-5/6">
			<li>
				<ExperienceDrawer>
					<ExperienceHeader
						slot="title"
						icon="/h4i-dark.svg"
						alt="hack4impact logo"
						company="Hack4Impact"
						position="Software Developer | Tech Lead"
						date="September 2020 - Present"
					/>
					<ul class="px-6 list-disc">
						<li>
							<h3 class="md:text-xl">Tech Lead - Upcoming (Fall 2023)</h3>
						</li>
						<li>
							<h3 class="md:text-xl">Software Developer - ClearPath NYC (Spring 2023)</h3>
							<h4 class="hidden md:visible">React, Styled Components, Firebase</h4>
							<hr />
							<p class="text-sm md:text-md">
								this is the sort of smaller text description that needs to be legible on mobile
							</p>
						</li>
						<li>
							<h3 class="md:text-xl">Software Developer - 7000 Languages (Fall 2022)</h3>
							<h4 class="hidden md:visible">React Native, MongoDB, Expo</h4>
							<hr />
							<p class="text-sm md:text-md">7000 lang discription</p>
						</li>
					</ul>
				</ExperienceDrawer>
			</li>
			<li>
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
			</li>
			<li>
				<ExperienceDrawer />
			</li>
		</ul>
	</div>
</main>
