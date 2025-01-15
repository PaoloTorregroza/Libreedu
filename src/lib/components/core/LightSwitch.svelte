<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';
	import { uiModeHandler } from '$lib/utils/uiMode.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		uiModeHandler.loadUIModeFromLocalStorage();
		console.log(uiModeHandler.uiMode);
	});

	function handleModeChange(details: { checked: boolean }) {
		if (details.checked) {
			uiModeHandler.uiMode = 'dark';
		} else {
			uiModeHandler.uiMode = 'light';
		}
	}
</script>

<Switch
	name="mode"
	controlInactive="bg-surface-200"
	controlActive="bg-surface-800"
	iconActiveBase="bg-surface-950 text-surface-50"
	iconInactiveBase="bg-surface-50"
	checked={uiModeHandler.uiMode === 'dark'}
	onCheckedChange={handleModeChange}
>
	{#snippet inactiveChild()}<IconSun size="14" />{/snippet}
	{#snippet activeChild()}<IconMoon size="14" />{/snippet}
</Switch>
