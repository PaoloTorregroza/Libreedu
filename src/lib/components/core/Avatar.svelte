<script lang="ts">
	import { getInitials } from '$lib/utils/utils';
	import { Avatar } from '@skeletonlabs/skeleton';

	let {
		src,
		name,
		width
	}: {
		src?: string | null;
		name?: string | null;
		width: string;
	} = $props();

	let initials = $derived(getInitials(name ?? 'NA'));
</script>

{#if src}
	<Avatar rounded="rounded-3xl" {width} {src} />
{:else if name}
	<Avatar
		rounded="rounded-3xl"
		{width}
		{initials}
		background="dark:bg-secondary-500 bg-warning-600"
	/>
{/if}
