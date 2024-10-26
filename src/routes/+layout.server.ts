import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const session = await event.locals.auth();

	return { session };
};

/*
 *  / /login /register /course_list DO NOT REQUIRE AUTH
 *  /my /profile /courses REQUIRE AUTH REDIRECT IF FAIL
 *  /[course] REQUIRES AUTH BUT DO NOT REDIRECT
 */
