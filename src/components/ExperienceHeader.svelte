<script>
	export let company = '';
	export let position = '';
	export let date = '';
	export let icon = '';
	export let alt = '';
</script>

<main>
	<div class="flex justify-between items-center p-2">
		<div class="flex items-center w-1/3">
			<img src={icon} {alt} class="w-12 float-left p-1" />
			<h2>{company}</h2>
		</div>
		<p class="text-center w-1/3">{position}</p>
		<p class="float-right w-1/3 text-right">{date}</p>
	</div>
</main>
