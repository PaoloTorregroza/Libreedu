import { prisma } from '$lib/prisma';
import type { CourseGroupWithCourses } from '$lib/types/db.types';

export async function load() {
	const courseGroups: CourseGroupWithCourses[] = await prisma.courseGroup.findMany({
		include: {
			courses: true
		}
	});
	return { courseGroups };
}
