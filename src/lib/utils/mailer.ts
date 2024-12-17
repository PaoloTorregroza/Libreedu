import { Resend } from 'resend';

const resend = new Resend(process.env.AUTH_RESEND_KEY!);

export const sendVerificationEmail = async (toEmail: string, verificationLink: string) => {
	await resend.emails.send({
		from: process.env.FROM_EMAIL!,
		to: toEmail,
		subject: 'Verify yout email address',
		html: `
            <p>Click on this link to verify your email address:</p>
            <a href="${verificationLink}">Verify!</a>
            <p>If this email does'nt look familiar or you have not requested this change please ignore it.</p>
          `
	});
};
