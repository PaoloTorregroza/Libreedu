import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth();

	if (!session || !session.user) error(401, 'Unauthorized');

	const user = await prisma.user.findUnique({
		where: { email: session.user.email! }
	});

	if (!user) error(404, 'User not found');

	return { user };
};
