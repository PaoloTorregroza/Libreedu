<script lang="ts" module>
	export type FeatureContent = {
		imageURL: string;
		title: string;
		subtitle: string;
		bulletPoints: string[];
		reversed: boolean;
	};

	type HeroInfo = {
		title: string;
		subtitle: string;
		imageURL: string;
		callToAction: string;
		buttonText: string;
	};

	type KeyPoint = {
		title: string;
		iconURL: string;
		description: string;
	};

	type LandingInfo = {
		hero: HeroInfo;
		keyPoints: KeyPoint[];
		features: FeatureContent[];
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import FeatureSection from '$lib/components/blocks/FeatureSection.svelte';
	import { signIn } from '@auth/sveltekit/client';

	let landingInfo: LandingInfo = $state({
		hero: {
			title: 'Lorem ipsum dolor sit amet',
			subtitle: 'Improve your hard skills one step at a time.',
			imageURL: 'https://cdn.paolinsky-minis.com/paolinskyCourses/Code%20typing-pana.svg',
			callToAction: 'Join now and increase your skills. Join now and increase your skills',
			buttonText: 'Start free!'
		},
		keyPoints: [
			{
				title: 'A title',
				iconURL:
					'https://paolinsky-minis-assets.nyc3.cdn.digitaloceanspaces.com/paolinskyCourses/accelerate-svgrepo-com.svg',
				description: 'Lorem ipsum dolor sit amet bla vli sadedsa b, lorem ipsum dolor sit amet'
			},
			{
				title: 'A title',
				iconURL:
					'https://paolinsky-minis-assets.nyc3.cdn.digitaloceanspaces.com/paolinskyCourses/accelerate-svgrepo-com.svg',
				description: 'Lorem ipsum dolor sit amet bla vli sadedsa b, lorem ipsum dolor sit amet'
			},
			{
				title: 'A title',
				iconURL:
					'https://paolinsky-minis-assets.nyc3.cdn.digitaloceanspaces.com/paolinskyCourses/accelerate-svgrepo-com.svg',

				description: 'Lorem ipsum dolor sit amet bla vli sadedsa b, lorem ipsum dolor sit amet'
			},
			{
				title: 'A title',
				iconURL:
					'https://paolinsky-minis-assets.nyc3.cdn.digitaloceanspaces.com/paolinskyCourses/accelerate-svgrepo-com.svg',

				description: 'Lorem ipsum dolor sit amet bla vli sadedsa b, lorem ipsum dolor sit amet'
			}
		],
		features: [
			{
				imageURL: 'https://cdn.paolinsky-minis.com/paolinskyCourses/Code%20typing-pana.svg',
				title: 'Lorem ipsum dolor sit amet Feature name!',
				subtitle: 'Feature subtitle lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
				bulletPoints: ['fast', 'safe', 'Lorem ipsum dolor'],
				reversed: false
			},
			{
				imageURL: 'https://cdn.paolinsky-minis.com/paolinskyCourses/Code%20typing-pana.svg',
				title: 'Lorem ipsum dolor sit amet Feature name!',
				subtitle: 'Feature subtitle lorem ipsum dolor sit amet Lorem ipsum dolor sit amet',
				bulletPoints: ['Lorem ipsum dolor', 'fast', 'safe'],
				reversed: true
			}
		]
	});
</script>

<div class="flex w-full flex-col items-center gap-8 p-10">
	{#if $page.data.session}
		<div></div>
	{:else}
		<button onclick={() => signIn()}> Sign In </button>
	{/if}

	<!-- HERO -->
	<section class="flex w-full max-w-[1410px] flex-col gap-10 md:flex-row">
		<div class="flex flex-1 flex-col justify-center text-center md:text-start">
			<h1 class="text-4xl md:text-7xl">{landingInfo.hero.title}</h1>
			<h2 class="font-light">{landingInfo.hero.subtitle}</h2>

			<div
				class="mt-10 flex flex-col items-center justify-center gap-2 text-start md:flex-row md:justify-normal md:gap-4"
			>
				<button class="variant-filled-primary btn-md whitespace-nowrap rounded-lg md:btn-lg"
					>{landingInfo.hero.buttonText}</button
				>
				<h4 class="font-light">{landingInfo.hero.callToAction}</h4>
			</div>
		</div>
		<div class="flex-1">
			<img
				class="h-full w-full"
				src={landingInfo.hero.imageURL}
				alt="Descriptive course platform figure"
			/>
		</div>
	</section>

	<!-- KEY POINTS -->
	<section>
		<div class="flex w-full flex-col justify-center gap-6 p-16 md:flex-row md:gap-10">
			{#each landingInfo.keyPoints.slice(0, 3) as el}
				<div class="card flex-1 p-5">
					<div class="flex items-center gap-2 text-primary-500">
						<img class="h-10 w-10 overflow-hidden" src={el.iconURL} alt="Feature Icon" />
						<h4 class=" font-bold">{el.title}</h4>
					</div>
					<p class="mt-3">{el.description}</p>
				</div>
			{/each}
		</div>
	</section>
	{#each landingInfo.features as content}
		<FeatureSection {content} />
	{/each}

	<!-- STORIES -->

	<!-- FAQ -->

	<!-- CALL TO ACTION -->
</div>
