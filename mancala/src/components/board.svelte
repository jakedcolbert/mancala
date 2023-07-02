<script lang="ts">
	// number of pits per side
	export const pits: number = 5;
	export const cols = 2;
	const boardColor = '#FFFFFF';
	const pitColor = '#FF5733';
</script>

<div class="box-border rounded-3xl" style:background-color={boardColor}>
	<div class="p-2">
		<div class="h-12 rounded-full" style:background-color={pitColor} />
		<div class="grid grid-cols-{cols}">
			{#each Array(cols) as _}
				<div class="flex flex-col items-center">
					{#each Array(pits) as _}
						<div class="m-1.5 w-12 h-12 rounded-full" style:background-color={pitColor} />
					{/each}
				</div>
			{/each}
		</div>
		<div class="m-auto h-12 rounded-full" style:background-color={pitColor} />
	</div>
</div>
