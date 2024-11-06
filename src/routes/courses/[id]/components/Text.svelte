<script lang="ts">
	import { Marked } from 'marked';
	import { markedHighlight } from 'marked-highlight';
	import { Render } from 'svelte-purify/browser-only';
	import hljs from 'highlight.js';
	import { browser } from '$app/environment';
	import { modeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const highlightMarked = new Marked(
		markedHighlight({
			emptyLangClass: 'hljs',
			langPrefix: 'hljs language-',
			highlight(code, lang, info) {
				const language = hljs.getLanguage(lang) ? lang : 'plaintext';
				return hljs.highlight(code, { language }).value;
			}
		})
	);

	let darkMode = $state(!modeCurrent);
	let data = $state(`
# Test

This is a test

<br />

\`\`\`javascript
console.log("Test")
export const load: PageLoad = ({ params }) => {
	if (parseInt(params.id) === 0) {
		return {
			title: 'Hello world!',
			content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
		};
	}

	error(404, 'Not found');
};

\`\`\`

<br />

![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "San Juan Mountains")
	`);

	onMount(() => {
		modeCurrent.subscribe((mode) => {
			darkMode = mode;
		});
	});
</script>

<div>
	<link
		rel="stylesheet"
		href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${!darkMode ? 'dark' : 'stackoverflow-light'}.min.css`}
	/>
	{#if browser}
		{#await highlightMarked.parse(data) then content}
			<Render html={content} />
		{/await}
	{/if}
</div>
