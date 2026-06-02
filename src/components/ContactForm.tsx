import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  subject: "general",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Adresse e-mail invalide.");
      return;
    }
    setSubmitted(true);
    setForm(INITIAL);
  };

  if (submitted) {
    return (
      <div className="contact-success">
        <h3>Message envoyé</h3>
        <p>
          Merci ! Nous te répondrons sous 48 h ouvrées à l&apos;adresse indiquée.
          Pour l&apos;urgence Premium : support@sasor.fr
        </p>
        <button
          type="button"
          className="btn btn-outline"
          onClick={() => setSubmitted(false)}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">
          Nom <span className="required">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Ton prénom ou pseudo"
          autoComplete="name"
        />
      </div>

      <div className="form-row">
        <label htmlFor="email">
          E-mail <span className="required">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="toi@exemple.fr"
          autoComplete="email"
        />
      </div>

      <div className="form-row">
        <label htmlFor="subject">Sujet</label>
        <select
          id="subject"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
        >
          <option value="general">Question générale</option>
          <option value="account">Compte & connexion</option>
          <option value="billing">Abonnement & facturation</option>
          <option value="bug">Bug ou problème technique</option>
          <option value="partnership">Partenariat / presse</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="message">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Décris ta demande le plus précisément possible…"
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="btn btn-secondary">
        Envoyer le message
      </button>
    </form>
  );
}
