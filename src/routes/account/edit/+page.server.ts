import { getLoggedInUser, validateSession } from '$lib/server/auth/session';
import { prisma } from '$lib/prisma';
import type { User } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';
import { error, fail, isActionFailure, redirect } from '@sveltejs/kit';
import { isValidEmail } from '$lib/utils/utils';
import { generateEmailVerificationToken } from '$lib/server/auth/emailVerificationToken';
import { sendVerificationEmail } from '$lib/utils/mailer';

export const actions = {
	default: async ({ request, locals, url }) => {
		const session = validateSession(await locals.auth());
		const result = validateFormData(await request.formData());

		if (isActionFailure(result)) return result;

		const [name, email] = [...(result as string[])];
		const user = await getLoggedInUser(session);

		await updateUser(user, name, email, url.host);

		throw redirect(303, '/account/edit');
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth();

	if (!session || !session.user) error(401, 'Unauthorized');

	const user = await prisma.user.findUnique({
		where: { email: session.user.email! }
	});

	if (!user) error(404, 'User not found');

	return { user };
};

async function updateUser(user: User, name: string, email: string, host: string) {
	if (user.email === email && user.name === name) return;

	const isValid = isValidEmail(email);
	if (!isValid || !name.trim()) error(400, 'Invalid data');

	if (isValid && user.email != email) {
		try {
			handleEmailUpdate(email, host);
			user.emailVerified = null;
			user.email = email;
		} catch (e) {
			console.error('Error updating user email: ', e);
			error(500, 'Error updating user email, using old one');
		}
	}

	const newUser = await prisma.user.update({
		where: { id: user.id },
		data: { email: user.email, emailVerified: user.emailVerified, name: user.name }
	});

	return newUser;
}

async function handleEmailUpdate(newEmail: string, host: string) {
	const token = generateEmailVerificationToken(newEmail);
	const protocol = process.env.NODE_ENV == 'prod' ? 'https' : 'http';
	const verificationLink = `${protocol}://${host}/api/verify-email?token=${token}`; // TODO: Use proper URL

	sendVerificationEmail(newEmail, verificationLink);
}

function validateFormData(data: FormData) {
	const name = data.get('name');
	const email = data.get('email');

	if (!name) return fail(400, { name, missing: true });
	if (!email) return fail(400, { email, missing: true });

	return [name.toString().trim(), email.toString().trim()];
}
