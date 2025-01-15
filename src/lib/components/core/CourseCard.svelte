<script lang="ts">
	import type { Course } from '@prisma/client';

	let { course }: { course: Course } = $props();
</script>

<a
	href={'/courses/' + course.slug}
	class="card card-hover min-w-80 basis-5/6 overflow-hidden preset-filled-surface-500 md:basis-1/5"
>
	<div class="aspect-[6/3] w-full overflow-hidden">
		<img class="h-full w-full object-cover" src={course.thumbnail} alt="Course thumbnail" />
	</div>
	<div class="p-4">
		<h3 class="font-bold">{course.name}</h3>
		<p class="font-light">{course.description}</p>
	</div>
</a>
