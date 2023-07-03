<script lang="ts">
	// number of pits per side
	export const pits: number = 6;
	export let cols = 2;
	const boardColor = '#A9E5BB';
	const pitColor = '#FCF6B1';
</script>

<div class="box-border custom-shadow rounded-3xl" style:background-color={boardColor}>
	<div class="p-2">
		<div class="h-12 rounded-full custom-shadow-inner" style:background-color={pitColor} />
		<div class="grid grid-cols-{cols}">
			{#each Array(cols) as _}
				<div class="flex flex-col">
					{#each Array(pits) as _}
						<div
							class="m-2 w-12 h-12 rounded-full custom-shadow-inner"
							style:background-color={pitColor}
						/>
					{/each}
				</div>
			{/each}
		</div>
		<div class="m-auto h-12 rounded-full custom-shadow-inner" style:background-color={pitColor} />
	</div>
</div>

<style>
	.custom-shadow-inner {
		box-shadow: inset 2px 4px 0px 0px rgba(0, 0, 0);
	}

	.custom-shadow {
		box-shadow: 2px 4px 0px 0px rgba(0, 0, 0);
	}
</style>
