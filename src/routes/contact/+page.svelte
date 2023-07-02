<script>
	import '../../app.css';
	import ContactLink from '../../components/ContactLink.svelte';

	const links = [
		{
			text: 'jamie.rollison',
			link: 'https://www.instagram.com/jamie.rollison/',
			icon: 'bi:instagram'
		},
		{
			text: 'jamieRollison',
			link: 'https://www.linkedin.com/in/jamierollison/',
			icon: 'bi:linkedin'
		},
		{
			text: 'jamieRollison',
			link: 'https://www.github.com/jamierollison',
			icon: 'bi:github'
		},
		{
			text: 'rollisonjamie15@gmail.com',
			link: 'mailto:rollisonjamie15@gmail.com',
			icon: 'ic:round-email'
		}
	];
</script>

<h1 class="text-light text-5xl text-center pt-10">say hi</h1>
<ul class="text-light text-2xl w-full text-center pt-10">
	{#each links as link}
		<li class="inline-block w-fit mb-4">
			<ContactLink {...link} />
		</li>
		<br />
	{/each}
</ul>
