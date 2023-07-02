<script>
	const testItems = ['a', 'b', 'c'];

	const ms = 2000;
	let idx = 0;
	setInterval(() => {
		if (idx < testItems.length - 1) {
			idx++;
		} else {
			idx = 0;
		}
	}, ms);
</script>

<span class="flex justify-center space-x-1">
	<h1 class="text-center text-light">I'm a</h1>
	<h1 class="wheel text-center text-light w-40 border" style="animation-duration: {ms}ms;">
		{testItems[idx]}
	</h1>
</span>
