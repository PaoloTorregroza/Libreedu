export type FeatureContent = {
	imageURL: string;
	title: string;
	subtitle: string;
	bulletPoints: string[];
	reversed: boolean;
};

export type HeroInfo = {
	title: string;
	subtitle: string;
	imageURL: string;
	callToAction: string;
	buttonText: string;
};

export type KeyPoint = {
	title: string;
	iconURL: string;
	description: string;
};

export type UserStory = {
	name: string;
	content: string;
	title: string;
	pictureURL: string;
};

export type CallToActionContent = {
	tagline: string;
	title: string;
	buttonText: string;
};

export type LandingInfo = {
	hero: HeroInfo;
	keyPoints: KeyPoint[];
	features: FeatureContent[];
	userStories: UserStory[];
	callToAction: CallToActionContent;
};
