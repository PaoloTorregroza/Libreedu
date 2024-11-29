<script lang="ts">
	import type { Lesson } from '@prisma/client';
	import Text from '../components/Text.svelte';
	// import Video from '../components/Video.svelte';
	import { invalidateAll } from '$app/navigation';
	import YoutubeVideo from '../components/YoutubeVideo.svelte';

	let { lesson, completed }: { lesson: Lesson; completed: boolean } = $props();

	async function completeLesson(lessonId: string) {
		try {
			const response = await fetch(`/api/lessons/${lessonId}/complete`, {
				method: 'POST'
			});

			if (response.ok) {
				invalidateAll();
			} else {
				const errorData = await response.json();
				console.error('Error:', errorData.message);
			}
		} catch (err) {
			console.error('An unexpected error occurred:', err);
		}
	}

	async function uncompleteLesson(lessonId: string) {
		try {
			const response = await fetch(`/api/lessons/${lessonId}/complete`, {
				method: 'DELETE'
			});

			if (response.ok) {
				invalidateAll();
			} else {
				const errorData = await response.json();
				console.error('Error:', errorData.message);
			}
		} catch (err) {
			console.error('An unexpected error occurred:', err);
		}
	}
</script>

<div class="flex flex-col gap-4">
	<div class="flex justify-between">
		<div>
			<button class="variant-soft-primary btn btn-sm" type="button">
				{'←'}
			</button>
			<button class="variant-soft-primary btn btn-sm" type="button">
				{'→'}
			</button>
		</div>
		<div class="flex items-center gap-4">
			<h6>Completed:</h6>
			<input
				onchange={() => {
					if (completed) {
						completeLesson(lesson.id);
					} else {
						uncompleteLesson(lesson.id);
					}
				}}
				bind:checked={completed}
				class="checkbox"
				type="checkbox"
			/>
		</div>
	</div>
	{#if lesson.contentType === 'Text'}
		<Text content={lesson.resourceUrl} />
	{:else}
		<YoutubeVideo videoId={lesson.resourceUrl} params="modestbranding=1" />
		<h1>{lesson.name}</h1>

		<p class="text-lg font-light">
			{lesson.description}
		</p>
	{/if}

	<button
		class="variant-soft-primary btn max-w-lg"
		onclick={async () => await completeLesson(lesson.id)}>Next lesson</button
	>
</div>
