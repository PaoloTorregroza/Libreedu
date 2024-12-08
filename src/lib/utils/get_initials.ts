export function getInitials(fullName: string): string {
	const names = fullName.trim().split(' ');

	if (names.length < 2) return fullName.substring(0, 2).toUpperCase();

	return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}
