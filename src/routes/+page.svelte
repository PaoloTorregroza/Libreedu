<script lang="ts">
	import { page } from '$app/stores';
	import { signIn, signOut } from '@auth/sveltekit/client';
</script>

<div>
	<img alt="Company logo" />
	{#if $page.data.session}
		<button onclick={() => signOut()}>SignOut </button>
	{:else}
		<button onclick={() => signIn()}> Sign In </button>
	{/if}
</div>
