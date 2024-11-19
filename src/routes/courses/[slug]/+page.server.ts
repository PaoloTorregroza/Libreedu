import { error } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';
import type { Session } from '@auth/sveltekit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const session = await locals.auth();

	if (!session) {
		throw error(401, 'Unauthorized');
	}

	const course = await prisma.course.findUnique({
		where: { slug: params.slug },
		include: { sections: { include: { lessons: true } } }
	});

	if (course) {
		const completedLessons = await loadCompletedLessonsForCurrentUser(course.id, session);
		return { course, completedLessons };
	}

	error(404, 'Not found');
};

async function loadCompletedLessonsForCurrentUser(courseId: string, session: Session) {
	if (!session.user) {
		throw error(401);
	}

	const user = await prisma.user.findUnique({
		where: { email: session.user.email! },
		include: { completedLessons: true }
	});
	const lessons = user?.completedLessons;

	return lessons;
}
