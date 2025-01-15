<script lang="ts">
	import CourseCard from '$lib/components/core/CourseCard.svelte';

	let { data } = $props();
</script>

<!-- Many course categories each one with a list of course overview -->
<div class="flex w-full flex-col items-center gap-20 md:px-10">
	{#each data.courseGroups as category}
		<div class="flex w-full flex-col items-center">
			<h1 class="font-bold">{category.name}</h1>
			<h5 class="font-light">{category.description}</h5>
			<div class="mt-7 flex w-full flex-wrap items-start justify-center gap-4">
				{#each category.courses as course}
					<CourseCard {course} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style></style>
