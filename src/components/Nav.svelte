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
	<nav class="h-fit px-5 pt-5 flex justify-between text-center">
		<a href="/" class="text-light font-cookie pt-6 text-5xl no-underline">Jamie</a>

		{#if w > 768}
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
			<div class="mt-5">
				<Hamburger --color="#FEFBF6" bind:open />
			</div>
		{/if}
	</nav>
	<div class="flex w-full justify-center">
		<ul
			class="w-80 self-center text-center bg-light text-dark rounded-lg
			{!open && 'scale-y-0'} transition-all origin-top ease-in-out"
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
