<script lang="ts">
	import type { UserStory } from '$lib/types/landing.types';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';

	let { story }: { story: UserStory } = $props();
</script>

<!-- <div class="card w-full max-w-[410px] p-4 md:max-w-[360px]"> -->
<div class="visible-card mb-8 max-w-[410px] break-inside-avoid p-4 text-start">
	<div class="flex items-start gap-3">
		<Avatar src={story.pictureURL} name="NA" />
		<div>
			<h3>{story.name}</h3>
			<h5 class="font-light">{story.title}</h5>
		</div>
	</div>
	<p class="mt-4 font-light">{story.content}</p>
</div>
