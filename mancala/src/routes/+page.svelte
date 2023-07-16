<script>
	import Board from '../components/board.svelte';
	const bg = '#1f1f1f';
	const text = '#A9E5BB';
</script>

<div class="flex flex-col" style:color={text} style:background-color={bg} style="height:100vh">
	<h1 class="grow-0 font-mono text-center p-10">mancala</h1>
	<div class="grow-1 self-center"><Board /></div>
</div>
