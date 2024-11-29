<script module lang="ts">
	type YoutubeVideoProps = {
		videoId: string;
		params: string;
		autoplay?: boolean;
	};
</script>

<script lang="ts">
	let { videoId, params, autoplay = false }: YoutubeVideoProps = $props();

	let computedParams = $derived.by(() => {
		const propParams = new URLSearchParams(params);
		if (autoplay) {
			propParams.append('autoplay', '1');
		}
		return propParams.toString();
	});

	function focus(node: HTMLElement) {
		node.focus();
	}
</script>

<div class="left-0 top-0 flex h-full w-full items-center justify-center">
	<iframe
		title="youtube lesson"
		src={`https://www.youtube-nocookie.com/embed/${videoId}?${computedParams}`}
		allowFullScreen
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		use:focus
	></iframe>
</div>

<style>
	iframe {
		width: 100%;
		height: 100%;
		aspect-ratio: 16 / 9;
		max-height: 100%;
		max-width: 100%;
		border: none;
	}
</style>
