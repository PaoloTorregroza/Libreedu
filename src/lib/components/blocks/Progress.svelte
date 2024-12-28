<script module lang="ts">
	import type { UsersOnLessons } from '@prisma/client';
	import type { SectionWithLessons } from '$lib/types/db.types';

	export interface ProgressProps {
		sections: SectionWithLessons[];
		currentLessonIndex: number;
		currentSectionIndex: number;
		completedLessons: UsersOnLessons[];
	}
</script>

<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';

	let {
		currentLessonIndex = $bindable(),
		currentSectionIndex = $bindable(),
		sections,
		completedLessons
	}: ProgressProps = $props();

	const value = $state([sections[currentSectionIndex].id]);

	function formatTime(seconds: number): string {
		let totalMinutes = Math.floor(seconds / 60);
		const totalSeconds = seconds % 60;
		return `${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
	}

	function isLessonCompleted(sectionIndex: number, lessonIndex: number): boolean {
		const currentId = sections[sectionIndex].lessons[lessonIndex].id;
		const lessonCompleted = completedLessons.find((el) => {
			return el.lessonId === currentId;
		});

		return lessonCompleted !== undefined;
	}
</script>

<Accordion multiple {value}>
	{#each sections as section, sectionIndex}
		<Accordion.Item value={section.id}>
			{#snippet control()}
				{section.name}
			{/snippet}
			{#snippet panel()}
				<ul>
					{#each section.lessons as lesson, lessonIndex}
						<button
							onclick={() => {
								if (currentLessonIndex !== lessonIndex || currentSectionIndex !== sectionIndex) {
									currentLessonIndex = lessonIndex;
									currentSectionIndex = sectionIndex;
								}
							}}
							class={'lessonItem ' +
								(lessonIndex === currentLessonIndex ? 'currentLessonItem' : '')}
						>
							<input
								type="checkbox"
								class="checkbox pointer-events-none"
								checked={isLessonCompleted(sectionIndex, lessonIndex)}
							/>
							<h6 class="mx-1">{lesson.name}</h6>
							<p class="text-sm font-light opacity-50">{formatTime(lesson.durationSeconds)}</p>
						</button>
					{/each}
				</ul>
			{/snippet}
		</Accordion.Item>
	{/each}
</Accordion>

<style>
	.lessonItem {
		@apply mt-1 flex w-full items-center justify-between p-2 text-center;
	}

	.lessonItem:hover {
		@apply cursor-pointer font-bold;
	}

	.currentLessonItem {
		@apply rounded-md;
	}

	.currentLessonItem:hover {
		@apply cursor-default;
	}
</style>
