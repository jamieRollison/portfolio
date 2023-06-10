<script>
	import { page } from '$app/stores';
</script>

<main>
	<nav class="h-fit p-5 px-40 flex justify-between text-center">
		<a href="/" class="text-light font-cookie pt-6 text-5xl">Jamie</a>
		<ul class="flex justify-evenly w-80 pt-10">
			<li class="text-light font-sans text-xl">
				<a href="/about" class="link-trans" aria-current={$page.url.pathname === '/about'}>about</a>
			</li>
			<li class="text-light font-sans text-xl">
				<a
					href="/experience"
					class="link-trans"
					aria-current={$page.url.pathname === '/experience'}
				>
					experience
				</a>
			</li>
			<li class="text-light font-sans text-xl">
				<a href="/contact" class="link-trans" aria-current={$page.url.pathname === '/contact'}>
					contact
				</a>
			</li>
		</ul>
	</nav>
</main>
