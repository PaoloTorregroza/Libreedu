<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
	import { signIn } from '@auth/sveltekit/client';

	import { Avatar, AppBar } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from '$lib/components/core/LightSwitch.svelte';

	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] overflow-scroll">
	<AppBar>
		{#snippet lead()}
			<div class="flex items-center gap-6">
				<a href="/">
					<h1 class="text-2xl">Libreedu</h1>
				</a>
				<a href="/courses">Courses<br /></a>
			</div>
		{/snippet}
		{#snippet trail()}
			<div class="flex items-center gap-4">
				{#if page.data.session}
					<a href="/account">
						<Avatar
							src={page.data.session.user!.image ?? ''}
							name={page.data.session.user!.name ?? 'NA'}
							background="dark:bg-secondary-500 bg-warning-600"
							size="h-9 w-9"
							border="border-2 border-surface-300-600-token hover:!border-primary-500"
						/>
					</a>
				{:else}
					<button onclick={() => signIn()} class="variant-glass-primary-500btn-sm rounded-lg"
						>SignIn / SignUp</button
					>
				{/if}
				<LightSwitch />
			</div>
		{/snippet}
	</AppBar>

	<main class=" space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="p-4 preset-filled-surface-200-800 dark:text-surface-100">(footer)</footer>
</div>
