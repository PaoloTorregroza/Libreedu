import { prisma } from '$lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Provider } from '@auth/sveltekit/providers';
import GitHub from '@auth/sveltekit/providers/github';
import Resend from '@auth/sveltekit/providers/resend';

const providers: Provider[] = [GitHub, Resend({ from: process.env.FROM_EMAIL })];

export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
		const providerData = provider();
		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: providers
	// pages: {
	// 	signIn: '/signin'
	// }
});
