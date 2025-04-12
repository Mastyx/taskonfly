import { writable } from "svelte/store";

const initialTheme = typeof localStorage !== 'undefined'
	? localStorage.getItem('theme') || 'light'
	: 'light';

export const theme = writable(initialTheme);

theme.subscribe((value)=> {
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', value);
		localStorage.setItem('theme', value);
	}
});
