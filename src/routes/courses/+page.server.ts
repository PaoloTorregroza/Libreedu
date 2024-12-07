import { prisma } from '$lib/prisma';

export async function load() {
	const courseGroups = await prisma.courseGroup.findMany({
		include: {
			courses: { select: { name: true, description: true, slug: true, thumbnail: true } }
		}
	});
	return { courseGroups };
}
