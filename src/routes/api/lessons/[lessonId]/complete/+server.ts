import { prisma } from '$lib/prisma';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ params, locals }) => {
	const session = await locals.auth();

	if (!session?.user) {
		throw error(401, 'Unauthorized');
	}

	try {
		const lesson = await prisma.lesson.findUnique({ where: { id: params.lessonId } });
		let userId = session.user.id;

		if (!lesson) {
			throw error(404, 'Lesson not found');
		}

		if (!userId) {
			const user = await prisma.user.findUnique({ where: { email: session.user.email! } });

			if (!user) {
				throw error(404, 'No user found with email');
			}

			userId = user.id;
		}

		// TODO: Check if user owns the selected course.

		await prisma.usersOnLessons.create({
			data: {
				userId: userId,
				lessonId: params.lessonId!
			}
		});

		return json({ message: 'Lesson marked as completed' });
	} catch (e) {
		console.error(e);
		throw error(500, 'An error occurred while completing the lesson.');
	}
};

export const DELETE: RequestHandler = async ({ params, locals }) => {
	const session = await locals.auth();

	try {
		if (!session?.user) {
			throw error(401, 'Unauthorized');
		}

		let userId = session.user.id;

		if (!userId) {
			const user = await prisma.user.findUnique({ where: { email: session.user.email! } });

			if (!user) {
				throw error(404, 'No user found with email');
			}

			userId = user.id;
		}

		await prisma.usersOnLessons.deleteMany({
			where: { userId: userId, lessonId: params.lessonId! }
		});

		return json({ message: 'Lesson marked as uncompleted' });
	} catch (e) {
		console.error(e);
		throw error(500, 'An error ocurred while unmarking lesson as completed');
	}
};
