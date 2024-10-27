<script lang="ts">
	import type { CourseSection } from '$lib/presentation_types';
	import type { PageData } from './$types';
	import Progress from './components/Progress.svelte';

	let data: PageData = $props();

	let sidebarOpen = $state(true);
	let sections: CourseSection[] = $state([
		{
			name: 'Introduction',
			lessons: [
				{ name: 'Getting Started', completed: true, durationSeconds: 10 },
				{ name: 'Basic Concepts', completed: true, durationSeconds: 100 },
				{ name: 'Course Overview', completed: false, durationSeconds: 1230 }
			]
		},
		{
			name: 'Fundamentals',
			lessons: [
				{ name: 'Core Principles', completed: false, durationSeconds: 1110 },
				{ name: 'Key Components', completed: false, durationSeconds: 194 },
				{ name: 'Best Practices', completed: false, durationSeconds: 10 }
			]
		},
		{
			name: 'Advanced Topics',
			lessons: [
				{ name: 'Complex Scenarios', completed: false, durationSeconds: 210 },
				{ name: 'Performance Optimization', completed: false, durationSeconds: 315 },
				{ name: 'Security Considerations', completed: false, durationSeconds: 109 }
			]
		}
	]);
</script>

<div class="flex min-h-screen flex-col-reverse md:flex-row">
	{#if sidebarOpen}
		<aside class="pr-4 md:max-w-sm md:flex-1">
			<button
				onclick={() => (sidebarOpen = !sidebarOpen)}
				type="button"
				class="variant-ghost-secondary btn btn-sm invisible mb-4 ml-4 md:visible"
			>
				<span>←</span>
				<span>Hide</span>
			</button>
			<Progress {sections} />
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
	<main class="flex-1 bg-blue-100 p-4"></main>
</div>
