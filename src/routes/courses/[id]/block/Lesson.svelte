<script lang="ts">
	import Video from '../components/Video.svelte';
	import YoutubeEmbed from '../components/YoutubeEmbed.svelte';

	interface LessonProps {
		isYoutube: boolean;
		name: string;
		description: string;
		completed: boolean;
		videoUrl: string;
		videoThumbnail: string;
	}

	let {
		isYoutube = true,
		name,
		description,
		completed = false,
		videoUrl,
		videoThumbnail
	}: LessonProps = $props();
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
			<input checked={completed} class="checkbox" type="checkbox" />
		</div>
	</div>
	{#if isYoutube}
		<YoutubeEmbed
			videoId={videoUrl}
			playLabel={name}
			posterImageSrc={videoThumbnail}
			params="modestbranding=1"
		/>
	{:else}
		<Video />
	{/if}
	<h1>{name}</h1>

	<p class="text-lg font-light">
		{description}
	</p>
	<button class="variant-soft-primary btn max-w-lg">Next lesson</button>
</div>
