<script lang="ts">
	// number of pits per side
	export const pits: number = 5;
</script>

<div class="box-border rounded-3xl bg-white w-32">
	<div class="p-2">
		<div class="m-autoe h-12 bg-red-400 rounded-full" />
		<div class="grid grid-cols-2">
			<div class="flex flex-col items-center">
				{#each Array(pits) as _, i}
					<div class="m-1.5 w-12 h-12 bg-red-400 rounded-full" />
				{/each}
			</div>
			<div class="flex flex-col items-center">
				{#each Array(pits) as _, i}
					<div class="m-1.5 w-12 h-12 bg-red-400 rounded-full" />
				{/each}
			</div>
		</div>
		<div class="m-auto h-12 bg-red-400 rounded-full" />
	</div>
</div>
