import type { Lesson, Section } from '@prisma/client';

export type SectionWithLessons = Section & {
	lessons: Lesson[];
};
