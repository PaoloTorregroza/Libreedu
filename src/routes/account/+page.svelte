<script lang="ts">
	import { page } from '$app/stores';
	import { Avatar } from '@skeletonlabs/skeleton-svelte';
	import { signOut } from '@auth/sveltekit/client';

	let userData = $state({ image: '', name: '' });

	page.subscribe((value) => {
		userData = {
			image: value.data.session!.user?.image || '',
			name: value.data.session!.user?.name || ''
		};
	});
</script>

<div class="flex w-full justify-center">
	<div class="card flex w-full max-w-[1410px] flex-col items-center gap-4 p-4 md:w-2/3 md:p-6">
		<div class="flex w-full gap-4">
			<Avatar size="w-48 h-48" src={userData.image} name={userData.name} />
			<div class="flex flex-col gap-4">
				<h1 class="text-xlg">{userData.name}</h1>
				<div class="flex gap-3">
					<div class="variant-ghost-secondary rounded-lg p-2">300 Courses completed</div>
					<div class="variant-ghost-secondary rounded-lg p-2">240 hours of lessons watched</div>
					<div class="variant-ghost-secondary rounded-lg p-2">300 Courses completed</div>
				</div>
			</div>
		</div>
		<div class="card-footer">
			<button
				class="btn bg-primary-500"
				onclick={() => {
					signOut({ callbackUrl: '/' });
				}}
			>
				Sign Out
			</button>
			<a class="btn bg-secondary-500" href="account/edit">Edit</a>
		</div>
	</div>
</div>
