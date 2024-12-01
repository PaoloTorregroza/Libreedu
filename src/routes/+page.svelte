<script lang="ts" module>
	type LandingInfo = {
		title: string;
		subtitle: string;
		heroImageURL: string;
		heroCallToAction: string;
		heroButton: string;
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';

	let landingInfo: LandingInfo = $state({
		title: 'Lorem ipsum dolor sit amet',
		subtitle: 'Improve your hard skills one step at a time.',
		heroImageURL: 'https://cdn.paolinsky-minis.com/paolinskyCourses/Code%20typing-pana.svg',
		heroCallToAction: 'Join now and increase your skills. Join now and increase your skills',
		heroButton: 'Start free!'
	});
</script>

<div class="flex w-full flex-col items-center">
	{#if $page.data.session}
		<div></div>
	{:else}
		<button onclick={() => signIn()}> Sign In </button>
	{/if}

	<!-- HERO -->
	<div class="flex w-full max-w-[1410px] flex-col md:flex-row">
		<div class="flex flex-1 flex-col justify-center p-10 text-center md:text-start">
			<h1 class="text-4xl md:text-7xl">{landingInfo.title}</h1>
			<h2 class="font-light">{landingInfo.subtitle}</h2>

			<div
				class="mt-10 flex flex-col items-center justify-center gap-2 text-start md:flex-row md:justify-normal md:gap-4"
			>
				<button class="variant-filled-primary btn-md whitespace-nowrap rounded-lg md:btn-lg"
					>{landingInfo.heroButton}</button
				>
				<h4 class="font-light">{landingInfo.heroCallToAction}</h4>
			</div>
		</div>
		<div class="flex-1">
			<img
				class="h-full w-full"
				src={landingInfo.heroImageURL}
				alt="Descriptive course platform figure"
			/>
		</div>
	</div>

	<!-- KEY POINTS -->

	<!-- STORIES -->

	<!-- FAQ -->

	<!-- CALL TO ACTION -->
</div>
