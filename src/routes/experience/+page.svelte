<script lang="ts">
	import '../../app.css';
	import ExperienceDrawer from '../../components/Experience/ExperienceDrawer.svelte';
	import ExperienceHeader from '../../components/Experience/ExperienceHeader.svelte';
	import Icon from '@iconify/svelte';
	import HackathonCard from '../../components/Hackathon/HackathonCard.svelte';
</script>

<div class="flex flex-col items-center w-screen">
	<h1 class="text-center text-light text-4xl">experience</h1>

	<div class="flex flex-col md:w-4/6">
		<ExperienceDrawer id="stripe">
			<ExperienceHeader
				slot="title"
				icon="/stripe-logo.svg"
				alt="stripe logo"
				company="Stripe"
				position="Software Engineering Intern"
				date="Summer 2024"
			/>
			<div class="px-2">
				<h3 class="md:text-xl">Product Developer - Terminal Tap to Pay Android</h3>
				<h4 class="invisible md:visible">Kotlin, Jetpack Compose, Android Studio, Node.js, Ruby</h4>

				<ul class="list-disc px-6">
					<li class="text-sm md:text-lg my-2">
						Designed and implemented feature to customize the color and position of elements on the
						Tap to Pay prompt, giving merchants control over brand identity and reduce friction when
						accepting a contactless payment on an Android device
					</li>
					<li class="text-sm md:text-lg my-2">
						Shipped intern project a month ahead of schedule, and took the opportunity to work on a
						new project with a second team
					</li>
					<li class="text-sm md:text-lg my-2">
						Refactored the simulated card reader from a deprecated Node.js server to a Ruby
						microservice, reducing tech debt and allowing for easier logging, new feature
						integration, and observability
					</li>
				</ul>
			</div>
		</ExperienceDrawer>
		<ExperienceDrawer id="hack">
			<ExperienceHeader
				slot="title"
				icon="/h4i-dark.svg"
				alt="hack4impact logo"
				company="Hack4Impact"
				position="Tech Lead | Software Developer"
				date="September 2022 - January 2024"
			/>
			<ul class="px-6 list-disc space-y-2">
				<li>
					<h3 class="md:text-xl">Tech Lead - EthicsNet (Fall 2023)</h3>
					<h4 class="invisible md:visible">React, TailwindCSS, MongoDB</h4>

					<p class="text-sm md:text-lg mt-2">
						Platform to create and manage tokens which encode ethical perspectives for AI research
					</p>
				</li>
				<hr />
				<li>
					<span class="flex md:text-xl items-center space-x-2">
						<h3>Software Developer - ClearPath NYC (Spring 2023)</h3>
						<a title="deployed live!" href="https://clearpathnyc.com/dashboard" target="_blank">
							<Icon icon="bi:globe" />
						</a>
					</span>
					<h4 class="invisible md:visible">React, Styled Components, Firebase</h4>

					<p class="text-sm md:text-lg mt-2">
						PWA which connects house-less youth with public and nonprofit resources
					</p>
				</li>
				<hr />
				<li>
					<span class="flex md:text-xl items-center space-x-2">
						<h3 class="md:text-xl">Software Developer - 7000 Languages (Fall 2022)</h3>
						<a href="https://github.com/hack4impact-uiuc/7000-languages" target="_blank">
							<Icon icon="bi:github" />
						</a>
					</span>
					<h4 class="invisible md:visible">React Native, MongoDB, Expo</h4>

					<p class="text-sm md:text-lg my-2">
						App to build modular language learning courses that preserve endangered languages
					</p>
				</li>
			</ul>
		</ExperienceDrawer>
		<ExperienceDrawer id="intuit">
			<ExperienceHeader
				slot="title"
				icon="https://avatars.githubusercontent.com/u/2495066?s=200&v=4"
				alt="intuit logo"
				company="Intuit"
				position="Software Engineer Intern"
				date="Summer 2023"
			/>
			<div class="px-2">
				<h3 class="md:text-xl">Product Developer - Quickbooks Mobile</h3>
				<h4 class="invisible md:visible">Kotlin, Java, Jetpack Compose, Android Studio</h4>

				<ul class="list-disc px-6">
					<li class="text-sm md:text-lg my-2">
						Developed features for Quickbooks Mobile, a mobile app for small business owners to
						manage their finances
					</li>
					<li class="text-sm md:text-lg my-2">
						Worked on the QBM Automated Accounting team, which categorizes transactions for
						Quickbooks users to save them time
					</li>
					<li class="text-sm md:text-lg my-2">
						Implemented a new feature to allow users to track bank deposits in-app
					</li>
				</ul>
			</div>
		</ExperienceDrawer>
		<ExperienceDrawer id="ostem">
			<ExperienceHeader
				slot="title"
				icon="ostem-logo.png"
				alt="ostem logo"
				company="oSTEM"
				position="Co-President | Secretary"
				date="October 2022 - Present"
			/>
			<ul class="list-disc px-8 pb-4 text-lg">
				<li>Sent weekly newsletters to members with upcoming events and opportunities</li>
				<li>Main point of contact between general members and exec using Discord</li>
			</ul>
		</ExperienceDrawer>
	</div>
	<h1 id="hackathons" class="text-center text-light text-4xl mt-10">hackathons</h1>

	<div class="flex md:w-4/6 justify-between">
		<HackathonCard
			win="Best Climate Hack"
			name="Ligo"
			img="ligo.png"
			description="Ligo is a tool to track an event and its attendees' carbon footprint."
			event="Boilermake X"
			techStack="Sveltekit, Tailwind, MongoDB"
			live="https://www.ligoismore.tech/"
			gh="https://www.github.com/jamieRollison/ligo"
			devpost="https://devpost.com/software/ligo"
		/>

		<HackathonCard
			win="AthenaHacks Favorite"
			name="Forte"
			img="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/401/912/datas/gallery.jpg"
			description="Social Media App where users share their song of the day."
			event="AthenaHacks 2023"
			techStack="Tailwind, MERN"
			live=""
			gh="https://www.github.com/jamieRollison/forte"
			devpost="https://devpost.com/software/forte-y8zj35"
		/>

		<HackathonCard
			win="We had fun :)"
			name="Letra"
			img="letra.png"
			description="Providing a space for users to create customizable digital letters."
			event="UncommonHacks 2023"
			techStack="Tailwind, MERN, Typescript"
			live=""
			gh="https://www.github.com/jamieRollison/uncommonhacks23"
			devpost="https://devpost.com/software/letra"
		/>
	</div>
</div>
