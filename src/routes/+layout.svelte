<script>
	import Nav from '../components/Nav.svelte';
	import '../app.css';
	import SEO from '../components/SEO.svelte';
</script>

<SEO />

<main>
	<div class="w-screen h-12 md:h-16 bg-secondary flex justify-center align-middle">
		<p class="text-sm w-screen text-center pt-4 text-dark inline-block md:text-xl">
			This site is a ✨work in progress!✨
		</p>
	</div>
	<Nav />

	<slot />
</main>
