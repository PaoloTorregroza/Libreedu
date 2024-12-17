import jwt from 'jsonwebtoken';
const jwtKey = process.env.JWT_SECRET!;

export function generateEmailVerificationToken(email: string): string {
	return jwt.sign({ email }, jwtKey, { expiresIn: '1h' });
}

export function decodeEmailToken(token: string): string | null {
	try {
		const decoded = jwt.verify(token, jwtKey) as { email: string };
		return decoded.email;
	} catch (e) {
		console.error('Token verification error: ', e);
		return null;
	}
}
