// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { name, email, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return res.status(413).json({ error: "Payload too large" });
  }
  if ((req.body as any).website) return res.status(200).json({ ok: true }); // honeypot

  try {
    const result = await resend.emails.send({
      from: "Portfolio <hello@yourdomain.com>", // see explanation below
      to: ["adewoleoluwajuwon@gmail.com"], // can be string or string[]
      replyTo: email, // <-- FIXED
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      // Optional nicer formatting:
      // html: `<p>${escapeHtml(message)}</p><p>From: ${name} &lt;${email}&gt;</p>`
    });

    if ((result as any).error) throw new Error(String((result as any).error));
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Send failed" });
  }
}
