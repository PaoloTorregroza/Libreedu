import type { Course, CourseGroup, Lesson, Section } from '@prisma/client';

export type SectionWithLessons = Section & {
	lessons: Lesson[];
};

export type CourseGroupWithCourses = CourseGroup & {
	courses: Course[];
};
