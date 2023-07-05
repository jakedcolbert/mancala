<script lang="ts">
	import Bank from './bank.svelte';
	import Pit from './pit.svelte';

	// number of pits per side
	export const pits: number = 6;
	export let cols = 2;
	const boardColor = '#A9E5BB';
</script>

<div class="box-border custom-shadow rounded-3xl" style:background-color={boardColor}>
	<div class="p-2">
		<Bank />
		<div class="grid grid-cols-{cols}">
			{#each Array(cols) as _}
				<div class="flex flex-col">
					{#each Array(pits) as _}
						<Pit />
					{/each}
				</div>
			{/each}
		</div>
		<Bank />
	</div>
</div>

<style>
	.custom-shadow {
		box-shadow: 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
