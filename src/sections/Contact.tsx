// src/sections/Contact.tsx
import Section from "../components/Section";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useMemo, useState, useCallback } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  // CV download state
  const [downloadingCv, setDownloadingCv] = useState(false);

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );
  const isValid =
    name.trim().length > 1 && isValidEmail && message.trim().length > 4;

  // === Programmatic CV download (same behavior as Hero) ===
  const downloadCv = async (setLoading: (v: boolean) => void) => {
    setLoading(true);
    try {
      const res = await fetch("/cv.pdf");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Adewole-Isaiah-CV.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      // Mobile/iOS fallback
      window.open("/cv.pdf", "_blank", "noopener,noreferrer");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadCv = useCallback(() => {
    void downloadCv(setDownloadingCv);
  }, []);

  // === Submit to serverless (Resend via /api/contact) ===
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isValid || sending) return;
      setSending(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            website: "", // honeypot (bots may fill it)
          }),
        });

        if (res.ok) {
          alert("Message sent! I’ll get back to you.");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          const { error } = (await res.json().catch(() => ({}))) as {
            error?: string;
          };
          alert(error || "Could not send. Please try again.");
        }
      } finally {
        setSending(false);
      }
    },
    [email, isValid, message, name, sending]
  );

  return (
    <Section id="contact" className="scroll-mt-24">
      <div
        className={[
          "mx-auto max-w-6xl rounded-3xl px-6 py-12 md:py-14",
          "bg-white/60 ring-1 ring-rose-100/60",
          "dark:bg-slate-950/50 dark:ring-white/10",
        ].join(" ")}
      >
        {/* Heading + brand underline */}
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            Contact
          </h2>
          <span
            aria-hidden="true"
            className="mt-2 block h-1 w-24 rounded-full bg-gradient-to-r from-rose-600 to-rose-400 dark:from-rose-400 dark:to-rose-300"
          />
        </div>

        <p className="mt-3 text-slate-700 dark:text-slate-300">
          Prefer email? Use the button, or the form below.
        </p>

        {/* Quick actions */}
        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <Button
            as="a"
            href="mailto:you@example.com"
            className="md:w-48 !font-semibold
                       !bg-rose-600 hover:!bg-rose-700 !text-white
                       dark:!bg-rose-400 dark:hover:!bg-rose-300 dark:!text-slate-950
                       focus:!ring-2 focus:!ring-offset-2 focus:!ring-rose-600
                       dark:focus:!ring-rose-400 dark:focus:!ring-offset-slate-950"
          >
            Email me
          </Button>

          {/* Programmatic Download CV */}
          <Button
            onClick={handleDownloadCv}
            disabled={downloadingCv}
            aria-busy={downloadingCv}
            className="md:w-48 !font-semibold
                       !bg-transparent !text-slate-800 !border !border-slate-300 hover:!bg-slate-100
                       dark:!text-slate-100 dark:!border-slate-600 dark:hover:!bg-white/10
                       disabled:!opacity-60 disabled:cursor-not-allowed"
            title={downloadingCv ? "Downloading…" : "Download CV"}
          >
            {downloadingCv ? "Downloading…" : "Download CV"}
          </Button>
        </div>

        {/* Form */}
        <form
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          {/* Honeypot field (hidden visually) */}
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
          />

          {/* Name */}
          <div>
            <Label
              htmlFor="name"
              className="text-slate-800 dark:text-slate-200"
            >
              Name
            </Label>
            <TextInput
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              aria-invalid={name !== "" && name.trim().length <= 1}
              className="mt-1
                         !bg-white !text-slate-900 !placeholder-slate-400 !border-slate-300
                         focus:!ring-rose-500 focus:!border-rose-500
                         dark:!bg-slate-900 dark:!text-slate-100 dark:!placeholder-slate-500 dark:!border-slate-700
                         dark:focus:!ring-rose-400 dark:focus:!border-rose-400"
            />
            {name !== "" && name.trim().length <= 1 && (
              <p className="mt-1 text-sm text-rose-600 dark:text-rose-400">
                Please enter at least 2 characters.
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-slate-800 dark:text-slate-200"
            >
              Email
            </Label>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              aria-invalid={email !== "" && !isValidEmail}
              className="mt-1
                         !bg-white !text-slate-900 !placeholder-slate-400 !border-slate-300
                         focus:!ring-rose-500 focus:!border-rose-500
                         dark:!bg-slate-900 dark:!text-slate-100 dark:!placeholder-slate-500 dark:!border-slate-700
                         dark:focus:!ring-rose-400 dark:focus:!border-rose-400"
            />
            {email !== "" && !isValidEmail && (
              <p
                className="mt-1 text-sm text-rose-600 dark:text-rose-400"
                aria-live="polite"
              >
                Please enter a valid email.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <Label
              htmlFor="message"
              className="text-slate-800 dark:text-slate-200"
            >
              Message
            </Label>
            <Textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project..."
              required
              aria-invalid={message !== "" && message.trim().length <= 4}
              className="mt-1
                         !bg-white !text-slate-900 !placeholder-slate-400 !border-slate-300
                         focus:!ring-rose-500 focus:!border-rose-500
                         dark:!bg-slate-900 dark:!text-slate-100 dark:!placeholder-slate-500 dark:!border-slate-700
                         dark:focus:!ring-rose-400 dark:focus:!border-rose-400"
            />
            {message !== "" && message.trim().length <= 4 && (
              <p className="mt-1 text-sm text-rose-600 dark:text-rose-400">
                Please write a short message (at least 5 characters).
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <Button
              type="submit"
              disabled={!isValid || sending}
              aria-busy={sending}
              className="!px-5 !py-2.5 !font-semibold
                         !bg-rose-600 hover:!bg-rose-700 !text-white
                         disabled:!opacity-60 disabled:cursor-not-allowed
                         dark:!bg-rose-400 dark:hover:!bg-rose-300 dark:!text-slate-950
                         focus:!ring-2 focus:!ring-offset-2 focus:!ring-rose-600
                         dark:focus:!ring-rose-400 dark:focus:!ring-offset-slate-950"
              title={
                !isValid
                  ? "Fill name, a valid email, and a short message"
                  : sending
                  ? "Sending…"
                  : "Send email"
              }
            >
              {sending ? "Sending…" : "Send"}
            </Button>
          </div>
        </form>

        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          This form sends directly from the site via a secure serverless
          route—no data is stored here.
        </p>
      </div>
    </Section>
  );
}
