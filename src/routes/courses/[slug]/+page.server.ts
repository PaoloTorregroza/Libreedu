import { error } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const course = await prisma.course.findUnique({
		where: { slug: params.slug },
		include: { sections: { include: { lessons: true } } }
	});
	if (course) {
		return course;
	}

	error(404, 'Not found');
};
