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
			uiModeHandler.uiMode = 'light';
		} else {
			uiModeHandler.uiMode = 'dark';
		}
	}
</script>

<Switch
	name="mode"
	controlActive="bg-surface-200"
	onCheckedChange={handleModeChange}
	checked={uiModeHandler.uiMode === 'light'}
>
	{#snippet activeChild()}<IconSun size="14" />{/snippet}
	{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
</Switch>
