import { prisma } from '$lib/prisma';

export async function load() {
	// const allCourses = await prisma.course.findMany();
	// await prisma.courseGroup.create({
	// 	data: {
	// 		name: 'Pro! 😎',
	// 		description: 'Courses for the pros'
	// 		// courses: {
	// 		// 	connect: allCourses.map((course) => ({ id: course.id })) // Conectamos los cursos al nuevo grupo
	// 		// }
	// 	}
	// });
	const courseGroups = await prisma.courseGroup.findMany({
		include: {
			courses: { select: { name: true, description: true, slug: true, thumbnail: true } }
		}
	});
	return { courseGroups };
}
