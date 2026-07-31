import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { name, email, subject, message } = req.body || {};

	// Validaciones en backend
	if (!name || name.trim().length < 2) {
		return res
			.status(400)
			.json({ message: "Name must be at least 2 characters." });
	}

	if (!email || !EMAIL_REGEX.test(email)) {
		return res
			.status(400)
			.json({ message: "Provided email is not valid." });
	}

	if (!subject || subject.trim().length < 3) {
		return res
			.status(400)
			.json({ message: "Subject must be at least 3 characters." });
	}

	if (!message || message.trim().length < 10) {
		return res
			.status(400)
			.json({ message: "Message must be at least 10 characters." });
	}

	try {
		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			return res.status(500).json({ message: "Missing RESEND_API_KEY environment variable on Vercel." });
		}

		const resend = new Resend(apiKey);

		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "dev.izzyverse@gmail.com",
			subject: `[Soporte Web] ${subject.trim()}`,
			html: `
        <h2>Nuevo mensaje de soporte técnico</h2>
        <p><strong>Nombre:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Asunto:</strong> ${subject.trim()}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.trim()}</p>
      `,
		});

		if (error) {
			console.error("Error de Resend:", error);
			return res.status(400).json({ message: error.message });
		}

		return res.status(200).json({ success: true, message: "Message sent successfully.", id: data?.id });
	} catch (error) {
		console.error("Server error:", error);
		return res.status(500).json({ message: "An error occurred while sending the email." });
	}
}
