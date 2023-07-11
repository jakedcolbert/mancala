<script lang="ts">
	import Bank from './bank.svelte';
	import Pit from './pit.svelte';

	// number of pits per column
	export const pits = 6;
	// number of columns
	export const cols = 2;
	// number of init seeds per pit
	export const seeds = 4;
	const boardColor = '#A9E5BB';
	const parseColor = '#FF0000';
	let thePits = Array.from(Array(cols), () => new Array(pits));

	// Handles init click and recursive initializer
	function handleClick(col: number, row: number) {
		let num = thePits[col][row].getSeeds();
		thePits[col][row].reset();
		row++;
		setTimeout(() => recursiveSeeds(num, col, row), 1000);
	}

	// Recursively distibutes seeds
	function recursiveSeeds(value: number, col: number, row: number) {
		if (value > 0) {
			if (row >= 6) {
				row = 0;
				col = 1 - col;
			}
			thePits[col][row].increment();
			console.log('seeds of ', col, row, 'set to', thePits[col][row].getSeeds());
			value--;
			row++;
			setTimeout(() => recursiveSeeds(value, col, row), 1000);
		}
		return -1;
	}
</script>

<div class="box-border custom-shadow rounded-3xl" style:background-color={boardColor}>
	<div class="p-2">
		<Bank />
		<div class="grid" style:grid-template-columns="repeat({cols}, minmax(0, 1fr))">
			<div class="flex flex-col">
				{#each Array(pits) as _, row}
					<button on:click={() => handleClick(0, row)}
						><Pit {seeds} bind:this={thePits[0][row]} /></button
					>
				{/each}
			</div>
			<div class="flex flex-col">
				{#each Array(pits) as _, row}
					<button on:click={() => handleClick(1, pits - 1 - row)}
						><Pit {seeds} bind:this={thePits[1][pits - 1 - row]} /></button
					>
				{/each}
			</div>
		</div>
		<Bank />
	</div>
</div>

<style>
	.custom-shadow {
		box-shadow: 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
