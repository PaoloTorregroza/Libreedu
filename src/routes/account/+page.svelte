<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { Avatar } from '@skeletonlabs/skeleton';

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
			<Avatar src={userData.image} width="w-48" rounded="rounded-3xl" />
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
				class="btn-md bg-primary-500"
				onclick={() => {
					signOut({ callbackUrl: '/' });
				}}
			>
				Sign Out
			</button>
		</div>
	</div>
</div>
