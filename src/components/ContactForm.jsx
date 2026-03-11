"use client";
import React, { useMemo, useState } from "react";

const DEFAULT_SERVICES = [
  "Audit & Assurance",
  "Accounting & Financial Reporting",
  "Taxation & Compliance",
  "Bookkeeping & Payroll Services",
  "Business & Financial Consultancy",
  "Regulatory Compliance & Corporate Services",
];

const FILLED_FIELD_STYLE = {
  border: "1px solid #D1D5DB",
  borderRadius: 8,
  padding: "12px 14px",
  fontSize: 15,
  color: "#4A4A4A",
  background: "#FFFFFF",
};

const EMPTY_FIELD_STYLE = {
  ...FILLED_FIELD_STYLE,
  border: "1px solid #4A4A4A",
  color: "#FFFFFF",
  background: "#4A4A4A",
};

export default function ContactForm({ services = DEFAULT_SERVICES }) {
  const list = useMemo(() => services.filter(Boolean), [services]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    services: false,
    message: false,
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));
  const touch = (name) => setTouched((p) => ({ ...p, [name]: true }));
  const setFocus = (name, value) => setFocused((p) => ({ ...p, [name]: value }));

  const toggleService = (service) => {
    setForm((p) => {
      const exists = p.services.includes(service);
      const next = exists
        ? p.services.filter((s) => s !== service)
        : [...p.services, service];
      return { ...p, services: next };
    });
    touch("services");
  };

  const errors = useMemo(() => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      e.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.services || form.services.length === 0) {
      e.services = "Please select at least one service.";
    }
    if (!form.message.trim()) e.message = "Message is required.";

    return e;
  }, [form]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);
  const showErr = (field) => (submitted || touched[field]) && errors[field];

  const getInteractiveFieldStyle = (field) => {
    const hasValue = Boolean(form[field]?.trim());
    return hasValue || focused[field] ? FILLED_FIELD_STYLE : EMPTY_FIELD_STYLE;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccessMessage("");

    if (!isValid) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        setForm({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
        });
        setTouched({
          name: false,
          email: false,
          phone: false,
          services: false,
          message: false,
        });
        setFocused({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
        setSubmitted(false);
        setSuccessMessage("Email successfully sent!");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.card}>
      <div style={styles.row}>
        <label style={styles.label}>Full Name</label>
        <input
          style={{
            ...getInteractiveFieldStyle("name"),
            ...(showErr("name") ? styles.inputError : null),
          }}
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          onFocus={() => setFocus("name", true)}
          onBlur={() => {
            setFocus("name", false);
            touch("name");
          }}
          name="name"
          required
          placeholder="Your full name"
        />
        {showErr("name") ? <div style={styles.errorText}>{errors.name}</div> : null}
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Email Address</label>
        <input
          style={{
            ...getInteractiveFieldStyle("email"),
            ...(showErr("email") ? styles.inputError : null),
          }}
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          onFocus={() => setFocus("email", true)}
          onBlur={() => {
            setFocus("email", false);
            touch("email");
          }}
          name="email"
          required
          type="email"
          placeholder="you@email.com"
        />
        {showErr("email") ? <div style={styles.errorText}>{errors.email}</div> : null}
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Phone Number</label>
        <input
          style={{
            ...getInteractiveFieldStyle("phone"),
            ...(showErr("phone") ? styles.inputError : null),
          }}
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          onFocus={() => setFocus("phone", true)}
          onBlur={() => {
            setFocus("phone", false);
            touch("phone");
          }}
          name="phone"
          required
          placeholder="Your phone number"
        />
        {showErr("phone") ? <div style={styles.errorText}>{errors.phone}</div> : null}
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Service</label>

        <div
          style={{
            ...styles.checkboxBox,
            ...(showErr("services") ? styles.inputError : null),
          }}
        >
          {list.map((service) => {
            const checked = form.services.includes(service);
            return (
              <label key={service} style={styles.checkboxRow}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleService(service)}
                  style={styles.checkbox}
                />
                <span style={styles.checkboxText}>{service}</span>
              </label>
            );
          })}
        </div>

        {showErr("services") ? <div style={styles.errorText}>{errors.services}</div> : null}
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Message</label>
        <textarea
          style={{
            ...styles.textarea,
            ...(showErr("message") ? styles.inputError : null),
          }}
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          onFocus={() => setFocus("message", true)}
          onBlur={() => {
            setFocus("message", false);
            touch("message");
          }}
          name="message"
          rows={5}
          required
          placeholder="Tell us what you need..."
        />
        {showErr("message") ? <div style={styles.errorText}>{errors.message}</div> : null}
      </div>

      <button
        className="contact-submit"
        type="submit"
        style={styles.submit}
        disabled={!isValid}
      >
        Send Message
      </button>

      {successMessage ? <p style={styles.successText}>{successMessage}</p> : null}

      <style jsx>{`
        input::placeholder {
          color: rgba(255, 255, 255, 0.72);
        }

        textarea::placeholder {
          color: #9ca3af;
        }

        input:focus,
        textarea:focus,
        button:focus {
          outline: none;
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-text-fill-color: #4a4a4a;
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset;
          box-shadow: 0 0 0 1000px #ffffff inset;
          transition: background-color 5000s ease-in-out 0s;
          caret-color: #4a4a4a;
        }

        .contact-submit:hover,
        .contact-submit:active {
          background: #fe0004 !important;
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}

const styles = {
  card: {
    background: "#f8f5ef",
    padding: 32,
    borderRadius: 10,
    boxShadow: "0 14px 36px rgba(15, 23, 42, 0.10)",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  row: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    fontWeight: 700,
    color: "#111827",
  },
  textarea: {
    border: "1px solid #D1D5DB",
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 15,
    color: "#4A4A4A",
    background: "#FFFFFF",
    resize: "vertical",
  },
  checkboxBox: {
    border: "1px solid #D1D5DB",
    borderRadius: 8,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#f8f5ef",
  },
  checkboxRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    userSelect: "none",
  },
  checkbox: {
    width: 16,
    height: 16,
    accentColor: "#EF4444",
    cursor: "pointer",
  },
  checkboxText: {
    fontSize: 15,
    color: "#111827",
    fontWeight: 600,
  },
  inputError: {
    borderColor: "#EF4444",
  },
  errorText: {
    color: "#EF4444",
    fontSize: 13,
    fontWeight: 600,
    marginTop: 2,
  },
  successText: {
    color: "#16A34A",
    fontSize: 14,
    fontWeight: 700,
    textAlign: "center",
    marginTop: -4,
  },
  submit: {
    background: "#EF4444",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "14px 16px",
    fontWeight: 900,
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
};
