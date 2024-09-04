<script>
	import '../app.css';
	let w = 0;
</script>

<svelte:window bind:innerWidth={w} />

<div class="h-fit">
	<div class="w-100 flex flex-row justify-between md:px-20">
		<div class="w-5/6 md:w-1/2">
			<h1 class="text-light text-left text-5xl">hi! i'm jamie</h1>
			<p class="text-light text-left pt-5 text-xl">
				I'm a computer science student at the University of Illinois Urbana Champaign with a minor
				in linguistics. I've done backend and frontend web dev, but I like mobile the most! I'm
				active in the UIUC <span class="trans-underline-static-skinny">LGBTQ+</span> and tech for good
				spaces. I try to make the world a better place!
			</p>
			<div>
				<h2 class="text-left mt-5 text-light text-4xl">things i'm most proud of</h2>
				<ul class="flex justify-start space-x-10 text-center text-light mt-4">
					<li>
						<a href="/experience#hack" class="flex flex-col items-center">
							<img src="/h4i-light.svg" class="w-16 mb-2" alt="hack4impact logo" />
							<p class="w-fit">Social Good</p>
						</a>
					</li>
					<li>
						<a href="/experience#stripe" class="flex flex-col items-center">
							<img
								src="./stripe-logo.svg"
								class="w-16 mb-2 h-16 rounded-full bg-light"
								alt="stripe logo"
							/>
							<p class="w-fit">Android Dev</p>
						</a>
					</li>
					<li>
						<a href="/experience#hackathons" class="flex flex-col items-center">
							<img src="/letra.png" class="h-16 mb-2 rounded-full" alt="intuit logo" />
							<p class="w-fit">Hackathons</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		{#if w > 768}
			<img src="/chicago picture.png" class="w-1/4 self-center rounded-full" alt="me" />
		{/if}
	</div>
</div>
