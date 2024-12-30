<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from 'lucide-svelte/icons/moon';
	import IconSun from 'lucide-svelte/icons/sun';

	let mode = $state(false);

	function handleModeChange() {
		if (mode) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}
</script>

<Switch
	name="mode"
	controlActive="bg-surface-200"
	bind:checked={mode}
	onCheckedChange={handleModeChange}
>
	{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
	{#snippet activeChild()}<IconSun size="14" />{/snippet}
</Switch>
