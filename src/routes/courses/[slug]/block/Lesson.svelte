<script lang="ts">
	import type { Lesson } from '@prisma/client';
	import Text from '../components/Text.svelte';
	import Video from '../components/Video.svelte';
	import YoutubeEmbed from '../components/YoutubeEmbed.svelte';

	let { lesson }: { lesson: Lesson } = $props();
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
			<input checked={lesson.completed} class="checkbox" type="checkbox" />
		</div>
	</div>
	{#if lesson.contentType === 'Text'}
		<Text content={lesson.resourceUrl} />
	{:else}
		{#if lesson.resourceUrl.includes('youtube')}
			<YoutubeEmbed
				videoId={lesson.resourceUrl}
				playLabel={lesson.name}
				posterImageSrc={'Video thumbnail'}
				params="modestbranding=1"
			/>
		{:else}
			<Video />
		{/if}
		<h1>{lesson.name}</h1>

		<p class="text-lg font-light">
			{lesson.description}
		</p>
	{/if}

	<button class="variant-soft-primary btn max-w-lg">Next lesson</button>
</div>
