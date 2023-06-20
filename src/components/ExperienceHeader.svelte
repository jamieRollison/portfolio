<script>
	export let company = '';
	export let position = '';
	export let date = '';
	export let icon = '';
	export let alt = '';
</script>

<main>
	<div class="flex justify-between items-center p-2 w-full">
		<div class="flex items-center">
			<img src={icon} {alt} class="w-12 float-left p-1" />
			<h2>{company}</h2>
		</div>
		<p class="float-center">{position}</p>
		<p class="float-right">{date}</p>
	</div>
</main>
