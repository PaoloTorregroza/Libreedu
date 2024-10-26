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
