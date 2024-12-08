<script lang="ts">
	import { getInitials } from '$lib/utils/get_initials.js';
	import { Avatar } from '@skeletonlabs/skeleton';

	const avatarWidth = 'w-48';

	let { data } = $props();
</script>

<main class="flex w-full justify-center">
	<div class="card flex w-full flex-col items-center gap-4 p-4 md:w-2/3">
		<!-- Personal information -->
		<section>
			<div class="relative">
				{#if data.user.image}
					<Avatar rounded="rounded-3xl" width={avatarWidth} src={data.user.image!} />
				{:else}
					<Avatar
						rounded="rounded-3xl"
						width={avatarWidth}
						initials={getInitials(data.user.name ?? 'NA')}
						background="dark:bg-secondary-500 bg-warning-600"
					/>
				{/if}
				<button
					class="bg-ternary-500 absolute -bottom-2 -right-2 cursor-pointer rounded-full p-2 shadow-lg"
				>
					Edit
				</button>
			</div>
		</section>
		<!-- Subscription and payment information -->
		<section></section>
	</div>
</main>

<style>
</style>
