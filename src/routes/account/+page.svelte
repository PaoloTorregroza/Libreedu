<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import { page } from '$app/state';
	import { signOut } from '@auth/sveltekit/client';
	import CourseDashboard from '$lib/components/blocks/account/CourseDashboard.svelte';

	let userData = $derived.by(() => {
		const data = page.data.session!.user;
		return {
			image: data?.image || '',
			name: data?.name || ''
		};
	});
</script>

<div class="flex w-full flex-col items-center justify-center rounded">
	<div
		class="visible-card flex w-full max-w-[1410px] flex-col items-center gap-4 p-4 md:w-2/3 md:p-6"
	>
		<div class="flex w-full flex-col items-center gap-4 md:flex-row md:items-start">
			<div class="min-w-48">
				<Avatar
					background="dark:bg-secondary-500 bg-warning-600"
					rounded="rounded-3xl"
					size="w-48 h-48"
					src={userData.image}
					name={userData.name}
				/>
			</div>
			<div class="flex flex-col gap-4">
				<h1 class="text-xlg text-center md:text-start">{userData.name}</h1>
				<div class="flex gap-3">
					<div class="variant-ghost-secondary-500 rounded-lg p-2">300 Courses completed</div>
					<div class="variant-ghost-secondary-500 rounded-lg p-2">240 hours of lessons watched</div>
					<div class="variant-ghost-secondary-500 rounded-lg p-2">300 Courses completed</div>
				</div>
			</div>
		</div>
		<div class="card-footer">
			<a class="btn bg-secondary-500" href="account/edit">Edit</a>
			<button
				class="btn bg-primary-500"
				onclick={() => {
					signOut({ callbackUrl: '/' });
				}}
			>
				Sign Out
			</button>
		</div>
	</div>
	<CourseDashboard />
</div>
