<script>
	import Board from '../components/board.svelte';
	let bg = '#1f1f1f';
</script>

<div class="flex flex-col" style:background-color={bg} style="height:100vh">
	<h1 class="grow-0 font-mono text-center p-10 font-black">mancala for babe</h1>
	<div class="grow-1 self-center"><Board /></div>
</div>
