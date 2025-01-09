<script module lang="ts">
	import type { FeatureContent } from '$lib/types/landing.types';

	export type FeatureSectionProps = {
		content: FeatureContent;
	};
</script>

<script lang="ts">
	let { content }: FeatureSectionProps = $props();
</script>

<section
	class="flex w-full max-w-[1410px] flex-col gap-10"
	class:md:flex-row-reverse={content.reversed}
	class:md:flex-row={!content.reversed}
>
	<div class="flex flex-1 flex-col justify-center gap-4">
		<h2>{content.title}</h2>
		<h3 class="font-light">{content.subtitle}</h3>
		<ul class="ml-4 list-disc space-y-2 text-left font-light">
			{#each content.bulletPoints as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
	<div class="flex-1">
		<img class="h-full w-full" src={content.imageURL} alt="Product feature" />
	</div>
</section>
