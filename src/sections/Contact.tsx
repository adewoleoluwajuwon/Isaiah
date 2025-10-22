import Section from "../components/Section";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Section id="contact">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h2>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Prefer email? Use the button, or the form below.
      </p>
      <div className="mt-6 flex flex-col md:flex-row gap-6">
        <Button as="a" href="mailto:you@example.com" className="md:w-48">
          Email me
        </Button>
        <a href="/cv.pdf" className="md:w-48">
          <Button color="light" className="w-full">
            Download CV
          </Button>
        </a>
      </div>

      <form
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const subject = encodeURIComponent(`Portfolio contact from ${name}`);
          const body = encodeURIComponent(
            message + "\n\nFrom: " + name + " <" + email + ">"
          );
          window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
        }}
      >
        <div>
          <Label htmlFor="name" value="Name" />
          <TextInput
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message" value="Message" />
          <Textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            required
          />
        </div>
        <div className="md:col-span-2">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Section>
  );
}
