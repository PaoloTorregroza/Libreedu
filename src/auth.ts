import client from '$lib/authDbAdapter';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';

export const { handle } = SvelteKitAuth({
	adapter: MongoDBAdapter(client),
	providers: [GitHub]
});
