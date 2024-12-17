import { prisma } from '$lib/prisma';
import type { Session, User as SessionUser } from '@auth/sveltekit';
import type { User as PrismaUser } from '@prisma/client';
import { error } from '@sveltejs/kit';

export type ValidatedSession = {
	user: SessionUser;
};

export const validateSession = (session: Session | null): ValidatedSession => {
	if (!session || !session.user) error(401, 'Unauthorized');
	return { user: session.user! };
};

export const getLoggedInUser = async (session: ValidatedSession): Promise<PrismaUser> => {
	const user = await prisma.user.findUnique({ where: { email: session.user.email! } });
	if (!user) error(401, 'Unauthorized');
	return user;
};
