<script lang="ts">
	import Lesson from '$lib/components/blocks/Lesson.svelte';
	import Progress from '$lib/components/blocks/Progress.svelte';

	let { data } = $props();

	let sidebarOpen = $state(true);

	let currentSectionIndex = $state(0);
	let currentLessonIndex = $state(1);
	let currentLessonCompleted = $derived.by(() => {
		const currentId = data.course.sections[currentSectionIndex].lessons[currentLessonIndex].id;
		const lessonCompleted = data.completedLessons?.find((el) => {
			return el.lessonId === currentId;
		});

		return lessonCompleted !== undefined;
	});
</script>

<div class="flex flex-col-reverse md:flex-row">
	{#if sidebarOpen}
		<aside class="overflow-scroll pr-4 md:max-w-xs md:flex-1">
			<button
				onclick={() => (sidebarOpen = !sidebarOpen)}
				type="button"
				class="variant-ghost-secondary-500 btn btn-sm invisible mb-4 ml-4 md:visible"
			>
				<span>←</span>
				<span>Hide</span>
			</button>
			<Progress
				completedLessons={data.completedLessons || []}
				bind:currentLessonIndex
				bind:currentSectionIndex
				sections={data.course.sections}
			/>
		</aside>
	{:else}
		<aside>
			<button
				onclick={() => (sidebarOpen = !sidebarOpen)}
				type="button"
				class="variant-ghost-secondary-500 btn btn-sm ml-4"
			>
				<span>→</span>
			</button>
		</aside>
	{/if}
	<main class="flex-1 p-4">
		<Lesson
			completed={currentLessonCompleted}
			lesson={data.course.sections[currentSectionIndex].lessons[currentLessonIndex]}
		/>
	</main>
</div>
