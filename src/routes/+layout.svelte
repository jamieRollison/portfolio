<script>
	import Nav from '../components/Nav.svelte';
	import '../app.css';
	import SEO from '../components/SEO.svelte';
</script>

<SEO />
<div class="w-screen h-16 bg-secondary flex justify-center align-middle">
	<p class="text-md w-full text-center pt-4 text-dark inline-block">
		This site is a ✨work in progress!✨
	</p>
</div>
<Nav />

<slot />
