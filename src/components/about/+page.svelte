<script>
	const items = ['linguist', 'web developer', 'leader', 'mobile dev', `"mathematician"`];

	const ms = 2000;
	let idx = 0;
	setInterval(() => {
		if (idx < items.length - 1) {
			idx++;
		} else {
			idx = 0;
		}
	}, ms);
</script>

<div class="flex flex-col text-center text-light">
	<span class="flex justify-evenly self-center w-80">
		<h1>I'm a</h1>
		<span class="border border-light overflow-hidden">
			<h1 class="wheel text-center text-light w-40" style="animation-duration: {ms}ms;">
				{items[idx]}
			</h1>
		</span>
	</span>
	<h1 class="mt-20 text-3xl">I like making stuff</h1>
	<p>come back for more</p>
</div>
