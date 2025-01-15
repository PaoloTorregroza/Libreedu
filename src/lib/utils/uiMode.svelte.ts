import { browser } from '$app/environment';

const UI_MODE_KEY = 'ui-mode';

export type UIMode = 'light' | 'dark';

class UIModeHandler {
	#uiMode: UIMode = $state('dark');

	get uiMode() {
		return this.#uiMode;
	}

	set uiMode(mode: UIMode) {
		this.#uiMode = mode;
		this.setCurrentUIMode(mode);
	}

	loadUIModeFromLocalStorage(): UIMode {
		if (browser) {
			const mode = localStorage.getItem(UI_MODE_KEY) as UIMode;
			return mode;
		}

		return 'dark';
	}

	setCurrentUIMode(mode: UIMode) {
		if (browser) {
			if (mode === 'dark') {
				document.querySelector('html')!.classList.remove('light');
			} else {
				document.querySelector('html')!.classList.remove('dark');
			}

			this.saveUIModeToLocalStorage(mode);
			return document.querySelector('html')!.classList.add(mode);
		}
	}

	saveUIModeToLocalStorage(mode: UIMode) {
		if (browser) {
			localStorage.setItem(UI_MODE_KEY, mode);
		}
	}
}

export const uiModeHandler = new UIModeHandler();
