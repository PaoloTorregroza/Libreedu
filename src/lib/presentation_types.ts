export interface CourseCategoryPresentation {
	name: string;
	description: string;
	courses: CoursePresentation[];
}

export interface CoursePresentation {
	name: string;
	thumbnailUrl: string;
	description: string;
	id: number;
}

export interface CourseContent {
	completed: boolean;
	name: string;
	durationSeconds: number;
}

export interface CourseSection {
	name: string;
	lessons: CourseContent[];
}

export interface LessonInformation {
	name: string;
	description: string;
	completed: boolean;
}
