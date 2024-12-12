<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';
	import { AppBar, LightSwitch, Avatar } from '@skeletonlabs/skeleton';
	import { signIn } from '@auth/sveltekit/client';
	import { getInitials } from '$lib/utils/utils';

	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto] overflow-scroll">
	<AppBar class="sticky top-0 z-10">
		<svelte:fragment slot="lead"
			><div class="flex items-center gap-6">
				<a href="/">
					<h1 class="text-2xl">Libreedu</h1>
				</a>
				<a href="/courses">Courses<br /></a>
			</div>
		</svelte:fragment>

		<svelte:fragment slot="trail">
			<div class="flex items-center gap-4">
				{#if $page.data.session}
					<a href="/account">
						{#if $page.data.session.user!.image}
							<Avatar
								src={$page.data.session.user!.image}
								width="w-8"
								cursor="cursor-pointer"
								border="border-2 border-surface-300-600-token hover:!border-primary-500"
							/>
						{:else}
							<Avatar
								initials={getInitials($page.data.session.user!.name ?? 'NA')}
								width="w-8"
								cursor="cursor-pointer"
								background="dark:bg-secondary-500 bg-warning-600"
								border="border-2 border-surface-300-600-token hover:!border-primary-500"
							/>
						{/if}
					</a>
				{:else}
					<button onclick={() => signIn()} class="variant-glass-primary btn-sm rounded-lg"
						>SignIn / SignUp</button
					>
				{/if}
				<LightSwitch />
			</div>
		</svelte:fragment>
	</AppBar>

	<main class="space-y-4 p-4">
		{@render children()}
	</main>
	<footer class="bg-surface-200 p-4 dark:bg-surface-800 dark:text-surface-100">(footer)</footer>
</div>
