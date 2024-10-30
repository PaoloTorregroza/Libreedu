<script lang="ts">
	import type { PageData } from './$types';
	import Lesson from './block/Lesson.svelte';
	import Progress, { type CourseSection } from './components/Progress.svelte';

	let data: PageData = $props();

	let sidebarOpen = $state(true);

	let lessonProperties = $state({
		isYoutube: true,
		name: 'Test Lesson',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate illum officiis quos suscipit asperiores exercitationem dolores possimus, eum nesciunt vel! Vero, provident culpa sunt ea nesciunt magni nihil odit.',
		completed: false,
		videoUrl: 'yUm-ET8w_28',
		videoThumbnail: 'https://i.ytimg.com/vi_webp/yUm-ET8w_28/maxresdefault.webp'
	});

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
		},
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
	<main class="flex-1 p-4">
		<Lesson {...lessonProperties} />
	</main>
</div>
