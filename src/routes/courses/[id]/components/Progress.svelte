<script lang="ts">
	import type { CourseSection } from '$lib/presentation_types';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	interface ProgressProps {
		sections: CourseSection[];
	}
	let { sections }: ProgressProps = $props();

	function formatTime(seconds: number): string {
		let totalMinutes = Math.floor(seconds / 60);
		const totalSeconds = seconds % 60;
		return `${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`;
	}
</script>

<Accordion>
	{#each sections as section}
		<AccordionItem>
			<svelte:fragment slot="summary">
				<h3 class="font-bold">{section.name}</h3>
			</svelte:fragment>
			<svelte:fragment slot="content">
				<ul>
					{#each section.lessons as lesson}
						<li class="mt-1 flex items-center justify-between text-center">
							<input
								type="checkbox"
								class="checkbox pointer-events-none"
								checked={lesson.completed}
							/>
							<h6 class="mx-1">{lesson.name}</h6>
							<p class="text-sm font-light opacity-50">{formatTime(lesson.durationSeconds)}</p>
						</li>
					{/each}
				</ul>
			</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
