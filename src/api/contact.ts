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
    // api/contact.ts (only this line changes)
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // ✅ works without domain verification
      to: ["adewoleoluwajuwon@gmail.com"],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>\nPortfolio: https://isaiah-ten.vercel.app`,
    });

    if ((result as any).error) throw new Error(String((result as any).error));
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Send failed" });
  }
}
