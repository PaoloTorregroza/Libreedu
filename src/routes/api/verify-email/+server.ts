import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { decodeEmailToken } from '$lib/server/auth/emailVerificationToken';
import { prisma } from '$lib/prisma';

export const GET: RequestHandler = ({ url }) => {
	const email = validateRequest(url);
	try {
		updateUserEmail(email);
	} catch (e) {
		console.error('Error updating email verification status on database: ', e);
		error(500, 'Error while updating user information');
	}
	redirect(301, '/account/edit');
};

async function updateUserEmail(newEmail: string) {
	await prisma.user.update({ where: { email: newEmail }, data: { emailVerified: new Date() } });
}

function validateRequest(url: URL): string {
	const token = url.searchParams.get('token');

	if (!token) {
		error(400, 'Token missing');
	}

	const email = decodeEmailToken(token);

	if (!email) {
		error(400, 'Invalid token');
	}

	return email;
}
