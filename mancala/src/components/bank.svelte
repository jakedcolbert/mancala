<!--
  @component bank.svelte
  A mancala bank component with customizable theme

  Created by Jake Colbert on 07/02/2023
-->

<script lang="ts">
	import settings from '../data/settings';
	let seeds = 0;
	let pitColor = '#FCF6B1';

	export function increment() {
		seeds++;
		pitColor = '#FF0000';
		setTimeout(() => {
			pitColor = '#FCF6B1';
		}, settings.delay);
	}
</script>

<div
	class="flex items-center justify-center cursor-pointer h-12 rounded-full custom-shadow-inner"
	style:background-color={pitColor}
>
	<div class=" font-mono text-black">{seeds}</div>
</div>

<style>
	.custom-shadow-inner {
		box-shadow: inset 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
