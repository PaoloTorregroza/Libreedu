<script lang="ts">
	import InputText from '$lib/components/core/ui/InputText.svelte';
	import { Pencil } from 'lucide-svelte';
	import Avatar from '$lib/components/core/Avatar.svelte';

	const avatarWidth = 'w-48';

	let { data } = $props();

	let { name, email, image } = $state(data.user);
	let subPlan = $derived(data.user.subscribed ? 'Active' : 'Free');

	function cancelSub() {
		alert('TODO: Implement cancel subscription');
	}
</script>

<main class="flex w-full justify-center">
	<div class="card flex w-full max-w-[1410px] flex-col items-center gap-4 p-4 md:w-2/3 md:p-6">
		<section class="flex w-full flex-col gap-4">
			<div
				class="flex w-full flex-col items-center justify-between gap-4 md:flex-row md:items-start"
			>
				<div class="relative w-fit">
					<Avatar width={avatarWidth} src={image} {name} />
					<button
						class="btn absolute -bottom-2 -right-2 cursor-pointer rounded-full bg-tertiary-600 p-2 shadow-lg dark:bg-surface-600"
					>
						<Pencil size="16" />
					</button>
				</div>
				<div class="md:flex-1">
					<h2>{data.user.name}</h2>
					<h3 class="font-light">Subscription: {subPlan}</h3>
					<h3 class="font-light">
						Member since: {new Date(data.user.createdAt).toLocaleDateString('en-GB')}
					</h3>
				</div>
			</div>
		</section>
		<section class="mt-4 flex w-full flex-row-reverse items-start justify-between gap-8">
			<div>
				<h3>Your subscription</h3>
				<div class="flex gap-4">
					<h4 class="font-light">
						Plan: {subPlan}
					</h4>
					{#if !data.user.subscribed}
						<a class="underline" href="/subscribe">upgrade</a>
					{/if}
				</div>

				{#if !data.user.subscribed}
					<div class="mt-4 flex max-w-fit flex-col gap-1">
						<p>Next payment: 12/12/2031</p>
						<p>Payment card: *****4444</p>
						<button class="variant-glass-error btn-sm rounded-xl" onclick={cancelSub}>
							Cancel subscription
						</button>
					</div>
				{/if}
			</div>

			<form method="POST" class=" flex flex-1 flex-col gap-4">
				<InputText
					width="md:flex-1 w-full md:w-auto"
					type="text"
					id="name"
					name="name"
					label="Username"
					bind:value={name}
				/>
				<InputText
					width="md:flex-1 w-full md:w-auto"
					type="email"
					id="email"
					name="email"
					label="Email"
					bind:value={email}
				/>
				<button class="variant-filled-primary btn">Save</button>
			</form>
		</section>
	</div>
</main>

<style>
</style>
