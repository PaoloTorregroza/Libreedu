<script lang="ts">
	import '../app.css';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] overflow-scroll">
	<AppBar class="sticky top-0 z-10">
		<svelte:fragment slot="lead"><div></div></svelte:fragment>
		<h1 class="text-3xl">Coursekit</h1>
		<svelte:fragment slot="trail">
			<div>
				<LightSwitch />
			</div>
		</svelte:fragment>
	</AppBar>

	<main class="space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="bg-surface-200 p-4 dark:bg-surface-800 dark:text-surface-100">(footer)</footer>
</div>
