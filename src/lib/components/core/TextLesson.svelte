<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { Render } from 'svelte-purify/browser-only';
	import hljs from 'highlight.js';
	import { browser } from '$app/environment';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let { content }: { content: string } = $props();

	const highlightMarked = new Marked(
		markedHighlight({
			emptyLangClass: 'hljs',
			langPrefix: 'hljs language-',
			highlight(code, lang) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);

	let darkMode = $state(!modeCurrent);

	onMount(() => {
		modeCurrent.subscribe((mode) => {
			darkMode = mode;
		});
	});
</script>

<div class="flex flex-col gap-3 p-8 pr-16">
	<link
		rel="stylesheet"
		href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${!darkMode ? 'dark' : 'stackoverflow-light'}.min.css`}
	/>
	{#if browser}
		{#await highlightMarked.parse(content) then content}
			<Render html={content} />
		{/await}
	{/if}
</div>
