<script lang="ts">
	let pitColor = '#FCF6B1';
	export let seeds: number;

	export function getSeeds() {
		return seeds;
	}

	export function increment() {
		seeds++;
		pitColor = '#FF0000';
		setTimeout(() => {
			pitColor = '#FCF6B1';
		}, 1000);
	}

	export function reset() {
		seeds = 0;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="cursor-pointer m-2 w-12 h-12 rounded-full custom-shadow-inner"
	style:background-color={pitColor}
>
	<div class="text-center">{seeds}</div>
</div>

<style>
	.custom-shadow-inner {
		box-shadow: inset 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
