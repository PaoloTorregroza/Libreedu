<script lang="ts">
	import FeatureSection from '$lib/components/blocks/landing/FeatureSection.svelte';
	import UserStory from '$lib/components/blocks/landing/UserStory.svelte';
	import type { LandingInfo } from '$lib/types/landing.types';

	let hiddenSections = $state(true);

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
		],
		userStories: [
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: '@paolinsky | Senior Dev',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			},
			{
				name: 'Paolo Torregrosa',
				content:
					'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ad aperiam distinctio ut fuga? Soluta fuga aperiam omnis, quia eveniet delectus perferendis alias vel temporibus dolorum praesentium cumque cum non?',
				title: 'Product Owner',
				pictureURL: 'https://avatars.githubusercontent.com/u/29853181?v=4'
			}
		],
		callToAction: {
			buttonText: 'Action',
			tagline: 'Tagline',
			title: 'Long headline to turn visitors into users.'
		}
	});
</script>

<div class="flex w-full flex-col items-center gap-16 p-10">
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
		<div class="flex w-full flex-col justify-center gap-6 md:flex-row md:gap-10 md:p-16">
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
	<section class="items-center text-center">
		<h2 class="m-4 mb-10">What people says about Libreedu</h2>
		<div class:stories-hidden={hiddenSections} class="relative">
			<div class="columns-1 gap-5 sm:columns-2 sm:gap-7 md:columns-3">
				{#each landingInfo.userStories as story}
					<UserStory {story} />
				{/each}
			</div>

			<div
				class:hidden={!hiddenSections}
				class=" pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-surface-50 dark:to-surface-900"
			></div>
		</div>
		<button
			class="variant-filled-secondary btn z-50 rounded-lg"
			class:mt-4={!hiddenSections}
			onclick={() => (hiddenSections = !hiddenSections)}
			>{hiddenSections ? 'See all' : 'Hide'}</button
		>
	</section>
	<!-- FAQ -->

	<!-- CALL TO ACTION -->
	<section class="mt-8 max-w-[1410px] p-10 text-center">
		<h3>{landingInfo.callToAction.tagline}</h3>
		<h2 class="text-5xl">{landingInfo.callToAction.title}</h2>
		<button class="variant-filled-primary btn-lg mt-8 rounded-lg"
			>{landingInfo.callToAction.buttonText}</button
		>
	</section>
</div>

<style>
	.stories-hidden {
		@apply max-h-[350px] overflow-hidden;
	}
</style>
