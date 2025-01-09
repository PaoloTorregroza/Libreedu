<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';
	import {
		getCurrentUIMode,
		loadUIModeFromLocalStorage,
		setCurrentUIMode,
		type UIMode
	} from '$lib/utils/uiMode.svelte';
	import { onMount } from 'svelte';

	let mode: UIMode = $state('dark');

	onMount(() => {
		setCurrentUIMode(loadUIModeFromLocalStorage());
		mode = getCurrentUIMode();
		console.log(mode);
	});

	function handleModeChange(details: { checked: boolean }) {
		if (details.checked) {
			mode = 'dark';
			setCurrentUIMode(mode);
		} else {
			mode = 'light';
			setCurrentUIMode(mode);
		}
	}
</script>

<Switch
	name="mode"
	controlInactive="bg-surface-200"
	controlActive="bg-surface-800"
	iconActiveBase="bg-surface-950 text-surface-50"
	iconInactiveBase="bg-surface-50"
	checked={mode === 'dark'}
	onCheckedChange={handleModeChange}
>
	{#snippet inactiveChild()}<IconSun size="14" />{/snippet}
	{#snippet activeChild()}<IconMoon size="14" />{/snippet}
</Switch>
