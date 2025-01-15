<script lang="ts">
	import CourseCard from '$lib/components/core/CourseCard.svelte';
	import type { Course } from '@prisma/client';

	const mockUrl = 'https://placehold.co/600x400';

	let courses: Course[] = $state([
		{
			id: 'c12345',
			name: 'Introduction to Web Development',
			slug: 'intro-web-dev',
			description:
				'Learn the fundamentals of HTML, CSS, and JavaScript in this comprehensive course.',
			thumbnail: mockUrl,
			userIDs: ['user123', 'user456', 'user789'],
			courseGroupId: 'group001'
		},
		{
			id: 'c67890',
			name: 'Advanced Python Programming',
			slug: 'advanced-python',
			description:
				'Master Python with advanced concepts including decorators, generators, and async programming.',
			thumbnail: mockUrl,
			userIDs: ['user234', 'user567'],
			courseGroupId: null
		},
		{
			id: 'c24680',
			name: 'UX Design Fundamentals',
			slug: 'ux-design-101',
			description:
				'Explore the principles of user experience design and create intuitive interfaces.',
			thumbnail: mockUrl,
			userIDs: ['user111', 'user222', 'user333', 'user444'],
			courseGroupId: 'group002'
		},
		{
			id: 'c12345',
			name: 'Introduction to Web Development',
			slug: 'intro-web-dev',
			description:
				'Learn the fundamentals of HTML, CSS, and JavaScript in this comprehensive course.',
			thumbnail: mockUrl,
			userIDs: ['user123', 'user456', 'user789'],
			courseGroupId: 'group001'
		},
		{
			id: 'c24680',
			name: 'UX Design Fundamentals',
			slug: 'ux-design-101',
			description:
				'Explore the principles of user experience design and create intuitive interfaces.',
			thumbnail: mockUrl,
			userIDs: ['user111', 'user222', 'user333', 'user444'],
			courseGroupId: 'group002'
		}
	]);
</script>

<div class="p-4">
	<h1 class="text-center">My courses</h1>
	<h2 class="mt-5">In progress</h2>
	<section class="coursesSection">
		{#each courses as course}
			<CourseCard {course} />
		{/each}
	</section>
	<h2 class="mt-5">Completed</h2>
	<section class="coursesSection">
		{#each courses as course}
			<CourseCard {course} />
		{/each}
	</section>
</div>

<style scoped>
	.coursesSection {
		@apply flex flex-wrap gap-8;
	}
</style>
