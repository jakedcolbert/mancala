<!--
  @component board.svelte
  A mancala board component with customizable theme, row count, and column count

  Created by Jake Colbert on 07/02/2023
-->

<script lang="ts">
	import settings from '../data/settings';
	import Bank from './bank.svelte';
	import Pit from './pit.svelte';

	export const pits = 6;
	export const cols = 2;
	export const seeds = 4;
	const boardColor = '#A9E5BB';

	let opponentBank: any;
	let playerBank: any;
	let thePits = Array.from(Array(cols), () => new Array(pits));
	let whoTurn = 1;

	// Handles init click and recursive initializer
	function handleClick(col: number, row: number) {
		let num = thePits[col][row].getSeeds();
		thePits[col][row].reset();
		row++;
		setTimeout(() => recursiveSeeds(num, col, row), settings.delay);
	}

	function flipTurn() {
		if (whoTurn === 1) {
			whoTurn = 2;
		} else {
			whoTurn = 1;
		}
	}

	// Recursively distibutes seeds
	function recursiveSeeds(value: number, col: number, row: number) {
		if (value > 0) {
			if (row >= pits) {
				if (col === 0 && whoTurn === 1) {
					// if player one can take seeds to the bank
					playerBank.increment();
					value--;
				} else if (col === 1 && whoTurn === 2) {
					// if player two can take seeds to the bank
					opponentBank.increment();
					value--;
				}
				// some display delay at this case. Look into alternatives
				row = 0;
				col = 1 - col;
			} else {
				thePits[col][row].increment();
				row++;
				value--;
			}
			setTimeout(() => recursiveSeeds(value, col, row), settings.delay);
		} else {
			flipTurn();
		}
	}
</script>

<div class="box-border custom-shadow rounded-3xl" style:background-color={boardColor}>
	<div class="p-2">
		<Bank bind:this={opponentBank} />
		<div class="grid" style:grid-template-columns="repeat({cols}, minmax(0, 1fr))">
			<!-- Player one pits -->
			<div class="flex flex-col">
				{#each Array(pits) as _, row}
					<button on:click={() => handleClick(0, row)}
						><Pit {seeds} bind:this={thePits[0][row]} /></button
					>
				{/each}
			</div>
			<!-- Player two pits -->
			<div class="flex flex-col">
				{#each Array(pits) as _, row}
					<button on:click={() => handleClick(1, pits - 1 - row)}
						><Pit {seeds} bind:this={thePits[1][pits - 1 - row]} /></button
					>
				{/each}
			</div>
		</div>
		<Bank bind:this={playerBank} />
	</div>
</div>

<style>
	.custom-shadow {
		box-shadow: 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
