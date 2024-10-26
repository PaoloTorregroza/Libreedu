<script lang="ts">
	import type { CourseCategoryPresentation } from '$lib/presentation_types';
	let categories: CourseCategoryPresentation[] = $state([
		{
			name: 'Free!',
			description: 'challenging multi-step experiences with quizzes and progress-tracking',
			courses: [
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/400x200',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/600x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/900x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/400x200',
					id: 0
				}
			]
		},
		{
			name: 'Professional',
			description: 'challenging multi-step experiences with quizzes and progress-tracking',
			courses: [
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/600x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/400x200',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/900x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/600x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/600x400',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/400x200',
					id: 0
				},
				{
					name: 'Vim introduction',
					description: 'Lorem ipsum dolor sir amet lorem ipsum dolor sit amet bla bla vblsad',
					thumbnailUrl: 'https://placehold.co/900x400',
					id: 0
				}
			]
		}
	]);
</script>

<!-- Many course categories each one with a list of course overview -->
<div class="flex w-full flex-col items-center gap-20 md:px-10">
	{#each categories as category}
		<div class="flex w-full flex-col items-center">
			<h1 class="font-bold">{category.name}</h1>
			<h5 class="font-light">{category.description}</h5>
			<div class="mt-7 flex w-full flex-wrap items-start justify-center gap-4">
				{#each category.courses as course}
					<a
						href={'/courses/' + course.id}
						class="card variant-soft-surface card-hover basis-5/6 overflow-hidden md:basis-1/5"
					>
						<div class="aspect-[6/3] w-full overflow-hidden">
							<img
								class="h-full w-full object-cover"
								src={course.thumbnailUrl}
								alt="Course thumbnail"
							/>
						</div>
						<div class="p-4">
							<h3>{course.name}</h3>
							<p class="font-light">{course.description}</p>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style></style>
