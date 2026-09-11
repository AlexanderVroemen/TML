"use client";

import { FormEvent, useRef, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const summary = useRef<HTMLDivElement>(null);

  function validate(form: HTMLFormElement) {
    const data = new FormData(form);
    const next: Errors = {};
    if (String(data.get("name") || "").trim().length < 2) next.name = "Vul uw naam in.";
    if (!/^\S+@\S+\.\S+$/.test(String(data.get("email") || ""))) next.email = "Vul een geldig e-mailadres in.";
    if (String(data.get("message") || "").trim().length < 10) next.message = "Vertel ons in minimaal 10 tekens waarmee we kunnen helpen.";
    setErrors(next);
    return next;
  }

  function validateField(field: "name" | "email" | "message", value: string) {
    let error: string | undefined;
    if (field === "name" && value.trim().length < 2) error = "Vul uw naam in.";
    if (field === "email" && !/^\S+@\S+\.\S+$/.test(value)) error = "Vul een geldig e-mailadres in.";
    if (field === "message" && value.trim().length < 10) error = "Vertel ons in minimaal 10 tekens waarmee we kunnen helpen.";
    setErrors(current => ({ ...current, [field]: error }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const next = validate(form);
    if (Object.keys(next).length) { requestAnimationFrame(() => summary.current?.focus()); return; }
    setStatus("sending");
    const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(form))), headers: { "Content-Type": "application/json" } });
    if (response.ok) { setStatus("sent"); form.reset(); } else setStatus("failed");
  }

  return (
    <form className={`contact-form ${compact ? "compact" : ""}`} onSubmit={onSubmit} noValidate>
      {Object.keys(errors).length > 0 && <div className="form-summary" role="alert" tabIndex={-1} ref={summary}><strong>Controleer de gemarkeerde velden.</strong></div>}
      <div className="form-grid">
        <Field label="Naam" id="name" error={errors.name}><input id="name" name="name" autoComplete="name" onBlur={e => validateField("name", e.currentTarget.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} /></Field>
        <Field label="E-mailadres" id="email" error={errors.email}><input id="email" name="email" type="email" autoComplete="email" onBlur={e => validateField("email", e.currentTarget.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} /></Field>
        <Field label="Telefoonnummer (optioneel)" id="phone"><input id="phone" name="phone" type="tel" autoComplete="tel" /></Field>
        <Field label="Vereniging (optioneel)" id="club"><input id="club" name="club" autoComplete="organization" /></Field>
      </div>
      <Field label="Waarmee kunnen we helpen?" id="message" error={errors.message}><textarea id="message" name="message" rows={compact ? 4 : 6} onBlur={e => validateField("message", e.currentTarget.value)} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} /></Field>
      <label className="consent"><input type="checkbox" required /> <span>Ik ga akkoord met de verwerking van mijn gegevens volgens de <a href="/privacyverklaring">privacyverklaring</a>.</span></label>
      <button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? "Versturen…" : "Verstuur bericht"}</button>
      <div className="form-status" aria-live="polite">
        {status === "sent" && <p>Bedankt. Uw bericht is ontvangen. TML neemt zo snel mogelijk contact met u op.</p>}
        {status === "failed" && <p>Versturen lukte niet. Mail ons rechtstreeks via <a href="mailto:tm.limburg@gmail.com">tm.limburg@gmail.com</a>.</p>}
      </div>
    </form>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return <div className="field"><label htmlFor={id}>{label}{!label.includes("optioneel") && " *"}</label>{children}{error && <p className="field-error" id={`${id}-error`}>{error}</p>}</div>;
}
