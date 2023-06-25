<script>
	import { page } from '$app/stores';
	import { Hamburger } from 'svelte-hamburgers';
	// @ts-ignore
	let w = 0;
	let open = false;

	const closeMenu = () => {
		open = false;
	};
</script>

<svelte:window bind:innerWidth={w} />

<main>
	<nav class="h-fit md:px-20 px-5 pt-5 flex justify-between text-center">
		{#if w > 768}
			<a href="/" class="text-light font-cookie pt-6 text-5xl no-underline">Jamie</a>
			<ul class="flex justify-evenly w-80 pt-10">
				<li class="text-light font-sans text-xl">
					<a href="/about" class="link-trans" aria-current={$page.url.pathname === '/about'}
						>about</a
					>
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
		{:else}
			<a href="/" class="text-light font-cookie pt-6 text-5xl no-underline">
				<img src="/chicago picture.png" alt="jamie" class="rounded-full w-12" />
			</a>
			<div class="mt-5">
				<Hamburger --color="#FEFBF6" bind:open />
			</div>
		{/if}
	</nav>
	<div class="flex w-screen justify-center">
		<ul
			class="w-80 self-center h-fit text-center bg-secondary text-dark rounded-lg
			{!open && 'scale-y-0'} mb-[-3rem] transition-all origin-top ease-in-out z-50 border border-dark"
			on:click={closeMenu}
			on:keydown={closeMenu}
		>
			<li class="font-sans text-xl">
				<a href="/about" class="link-trans" aria-current={$page.url.pathname === '/about'}>about</a>
			</li>
			<li class="font-sans text-xl">
				<a
					href="/experience"
					class="link-trans"
					aria-current={$page.url.pathname === '/experience'}
				>
					experience
				</a>
			</li>
			<li class="font-sans text-xl">
				<a href="/contact" class="link-trans" aria-current={$page.url.pathname === '/contact'}>
					contact
				</a>
			</li>
		</ul>
	</div>
</main>
