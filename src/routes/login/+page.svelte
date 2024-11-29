<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	onMount(() => {
		if ($page.data.session) {
			goto('/');
		} else {
			signIn();
		}
	});
</script>

<div class="card p-4">Basic</div>
