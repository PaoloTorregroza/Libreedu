<script lang="ts">
	import InputText from '$lib/components/core/ui/InputText.svelte';
	import { getInitials } from '$lib/utils/get_initials.js';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Pencil } from 'lucide-svelte';

	const avatarWidth = 'w-48';

	let { data } = $props();

	let { name, email, image } = $state(data.user);
</script>

<main class="flex w-full justify-center">
	<div class="card flex w-full flex-col items-center gap-4 p-4 md:w-2/3 md:p-6">
		<!-- Personal information -->
		<section class="flex w-full flex-col gap-4">
			<div
				class="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start"
			>
				<div class="relative w-fit">
					{#if image}
						<Avatar rounded="rounded-3xl" width={avatarWidth} src={image} />
					{:else}
						<Avatar
							rounded="rounded-3xl"
							width={avatarWidth}
							initials={getInitials(name ?? 'NA')}
							background="dark:bg-secondary-500 bg-warning-600"
						/>
					{/if}
					<button
						class="btn absolute -bottom-2 -right-2 cursor-pointer rounded-full bg-tertiary-600 p-2 shadow-lg dark:bg-surface-600"
					>
						<Pencil size="16" />
					</button>
				</div>
				<div class="md:flex-1">
					<h2>{data.user.name}</h2>
					<h3 class="font-light">Subscription: {data.user.subscribed ? 'Active' : 'Free'}</h3>
					<h3 class="font-light">
						Member since: {new Date(data.user.createdAt).toLocaleDateString('en-GB')}
					</h3>
				</div>
			</div>

			<form action="" class="mt-4 flex w-full flex-wrap gap-4">
				<InputText
					width="md:flex-1 w-full md:w-auto"
					type="text"
					id="name"
					label="Username"
					bind:value={name}
				/>
				<InputText
					width="md:flex-1 w-full md:w-auto"
					type="email"
					id="email"
					label="Email"
					bind:value={email}
				/>
			</form>
		</section>
		<!-- Subscription and payment information -->
		<section class="mt-4 w-full">
			<h3>Your subscription</h3>
		</section>
	</div>
</main>

<style>
</style>
