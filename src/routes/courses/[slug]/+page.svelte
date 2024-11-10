<script lang="ts">
	import Lesson from './block/Lesson.svelte';
	import Progress from './components/Progress.svelte';

	let { data } = $props();

	let sidebarOpen = $state(true);

	let currentSectionIndex = $state(0);
	let currentLessonIndex = $state(0);
</script>

<div class="flex flex-col-reverse md:flex-row">
	{#if sidebarOpen}
		<aside class="overflow-scroll pr-4 md:max-w-xs md:flex-1">
			<button
				onclick={() => (sidebarOpen = !sidebarOpen)}
				type="button"
				class="variant-ghost-secondary btn btn-sm invisible mb-4 ml-4 md:visible"
			>
				<span>←</span>
				<span>Hide</span>
			</button>
			<Progress {currentLessonIndex} sections={data.sections} />
		</aside>
	{:else}
		<aside>
			<button
				onclick={() => (sidebarOpen = !sidebarOpen)}
				type="button"
				class="variant-ghost-secondary btn btn-sm ml-4"
			>
				<span>→</span>
			</button>
		</aside>
	{/if}
	<main class="flex-1 p-4">
		<Lesson lesson={data.sections[currentSectionIndex].lessons[currentLessonIndex]} />
	</main>
</div>
