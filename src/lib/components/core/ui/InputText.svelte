<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	type InputTextProps = {
		label: string;
		id: string;
		type?: HTMLInputTypeAttribute;
		value?: string | null;
		width?: string;
		name?: string;
	};

	let { label, id, value = $bindable(), type = 'text', width, name }: InputTextProps = $props();
</script>

<div class={width ?? 'w-full md:w-fit'}>
	<label for={id}>{label}</label>
	<input {id} {type} {name} class="input form-input rounded-lg" bind:value />
</div>
