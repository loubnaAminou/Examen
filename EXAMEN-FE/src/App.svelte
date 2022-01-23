<script>
	import { onMount } from "svelte";
	let movies = [];

	let pagination = {};

	onMount(getMovies());

	async function getMovies(){
		const res = await fetch(`http://localhost:3000/movies`);
		const data = await res.json();
		console.log(data.data);
		movies = data.data;
		pagination = data.pagination;
	}
</script>

<main>
	<h1>
		Number of movies : <span class="badge rounded-pill bg-info"
			>{pagination.count}</span
		>
	</h1>

	<table class="table table-hover">
		<thead>
			<tr>
				<th scope="col">Title</th>
				<th scope="col">Genres</th>
				<th scope="col">Year</th>
			</tr>
		</thead>
		<tbody>
			{#each movies as movie}
				<tr class="table-info">
					<th scope="row">{movie.title}</th>
					<td>{movie.genres}</td>
					<td>{movie.year}</td>
				</tr>
			{:else}
				<!-- this block renders when photos.length === 0 -->
				<p>loading...</p>
			{/each}
		</tbody>
	</table>
</main>
