<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/Experience/ExperienceDrawer.svelte';
	import ExperienceHeader from '../../components/Experience/ExperienceHeader.svelte';
	import Icon from '@iconify/svelte';
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
						position="Tech Lead | Software Developer"
						date="September 2020 - Present"
					/>
					<ul class="px-6 list-disc space-y-2">
						<li>
							<h3 class="md:text-xl">Tech Lead - Upcoming (Fall 2023)</h3>
						</li>
						<hr />
						<li>
							<span class="flex md:text-xl items-center space-x-2">
								<h3>Software Developer - ClearPath NYC (Spring 2023)</h3>
								<a href="https://github.com/ClearPathNYC" target="_blank">
									<Icon icon="bi:github" />
								</a>
							</span>
							<h4 class="invisible md:visible">React, Styled Components, Firebase</h4>

							<p class="text-sm md:text-lg mt-2">
								PWA which connects house-less youth with public and nonprofit resources
							</p>
						</li>
						<hr />
						<li>
							<h3 class="md:text-xl">Software Developer - 7000 Languages (Fall 2022)</h3>
							<h4 class="invisible md:visible">React Native, MongoDB, Expo</h4>

							<p class="text-sm md:text-lg my-2">
								App to build modular language learning courses which preserve endangered languages
							</p>
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
