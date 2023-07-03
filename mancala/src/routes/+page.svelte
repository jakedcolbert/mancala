<script>
	import Board from '../components/board.svelte';
	let bg = '#E3170A';
</script>

<div class="flex flex-col" style:background-color={bg} style="height:100vh">
	<h1 class="grow-0 font-mono text-center p-10 font-black">
		mancala for <span class="cursor-default hover:underline">babe</span>
	</h1>
	<div class="grow-1 self-center"><Board /></div>
</div>
