import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

// 1. Import the Skeleton plugin
import { skeleton, contentPath } from '@skeletonlabs/skeleton/plugin';
import * as themes from '@skeletonlabs/skeleton/themes';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', contentPath(import.meta.url, 'svelte')],
	theme: {
		extend: {}
	},
	plugins: [
		forms,
		skeleton({
			themes: [themes.crimson]
		})
	]
} satisfies Config;

export default config;
