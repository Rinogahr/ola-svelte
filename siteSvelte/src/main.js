import App from './App.svelte';
import IndexComponent from './IndexComponent.svelte';

const app = new IndexComponent({
	target: document.body,
	props: {}
});

export default app;