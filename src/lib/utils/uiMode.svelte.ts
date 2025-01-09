import { browser } from '$app/environment';

const UI_MODE_KEY = 'ui-mode';

export type UIMode = 'light' | 'dark';

export function getCurrentUIMode(): UIMode {
	if (browser) {
		return document.querySelector('html')!.classList.contains('dark') ? 'dark' : 'light';
	}

	return 'dark';
}

export function loadUIModeFromLocalStorage(): UIMode {
	return localStorage.getItem(UI_MODE_KEY) as UIMode;
}

export function setCurrentUIMode(mode: UIMode) {
	if (browser) {
		if (mode === 'dark') {
			document.querySelector('html')!.classList.remove('light');
		} else {
			document.querySelector('html')!.classList.remove('dark');
		}

		saveUIModeToLocalStorage(mode);
		return document.querySelector('html')!.classList.add(mode);
	}
}

function saveUIModeToLocalStorage(mode: UIMode) {
	if (browser) {
		localStorage.setItem(UI_MODE_KEY, mode);
	}
}
