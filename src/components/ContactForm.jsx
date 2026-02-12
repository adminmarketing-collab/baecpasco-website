"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const DEFAULT_SERVICES = [
  "Audit & Assurance",
  "Accounting & Financial Reporting",
  "Taxation & Compliance",
  "Bookkeeping & Payroll Services",
  "Business & Financial Consultancy",
  "Regulatory Compliance & Corporate Services",
];

export default function ContactForm({ services = DEFAULT_SERVICES }) {
  const list = useMemo(() => services.filter(Boolean), [services]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [], // ✅ array for multi-select
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    services: false,
    message: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));
  const touch = (name) => setTouched((p) => ({ ...p, [name]: true }));

  const toggleService = (service) => {
    setForm((p) => {
      const exists = p.services.includes(service);
      const next = exists ? p.services.filter((s) => s !== service) : [...p.services, service];
      return { ...p, services: next };
    });
    touch("services");
  };

  // ✅ Validation
  const errors = useMemo(() => {
    const e = {};

    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Please enter a valid email.";

    if (!form.phone.trim()) e.phone = "Phone number is required.";

    if (!form.services || form.services.length === 0)
      e.services = "Please select at least one service.";

    if (!form.message.trim()) e.message = "Message is required.";

    return e;
  }, [form]);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const showErr = (field) => (submitted || touched[field]) && errors[field];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    // ✅ Block submit if invalid (before submit)
    if (!isValid) return;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message sent successfully!");

        // Reset
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
        setSubmitted(false);
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
      {/* FULL NAME */}
      <div style={styles.row}>
        <label style={styles.label}>Full Name</label>
        <input
          style={{
            ...styles.input,
            ...(showErr("name") ? styles.inputError : null),
          }}
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          onBlur={() => touch("name")}
          name="name"
          required
          placeholder="Your full name"
        />
        {showErr("name") ? <div style={styles.errorText}>{errors.name}</div> : null}
      </div>

      {/* EMAIL */}
      <div style={styles.row}>
        <label style={styles.label}>Email Address</label>
        <input
          style={{
            ...styles.input,
            ...(showErr("email") ? styles.inputError : null),
          }}
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          onBlur={() => touch("email")}
          name="email"
          required
          type="email"
          placeholder="you@email.com"
        />
        {showErr("email") ? <div style={styles.errorText}>{errors.email}</div> : null}
      </div>

      {/* PHONE */}
      <div style={styles.row}>
        <label style={styles.label}>Phone Number</label>
        <input
          style={{
            ...styles.input,
            ...(showErr("phone") ? styles.inputError : null),
          }}
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          onBlur={() => touch("phone")}
          name="phone"
          required
          placeholder="Your phone number"
        />
        {showErr("phone") ? <div style={styles.errorText}>{errors.phone}</div> : null}
      </div>

      {/* ✅ SERVICES (CHECKBOXES) */}
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

      {/* MESSAGE */}
      <div style={styles.row}>
        <label style={styles.label}>Message</label>
        <textarea
          style={{
            ...styles.textarea,
            ...(showErr("message") ? styles.inputError : null),
          }}
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          onBlur={() => touch("message")}
          name="message"
          rows={5}
          required
          placeholder="Tell us what you need..."
        />
        {showErr("message") ? <div style={styles.errorText}>{errors.message}</div> : null}
      </div>

      <button
        type="submit"
        style={{
          ...styles.submit,
          ...(isValid ? null : styles.submitDisabled),
        }}
        disabled={!isValid}
      >
        Send Message
      </button>

      {/* focus ring */}
      <style jsx>{`
        input:focus,
        textarea:focus,
        button:focus {
          outline: none;
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
        }
      `}</style>
    </form>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 32,
    borderRadius: 10,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
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
  input: {
    border: "1px solid #D1D5DB",
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 15,
  },
  textarea: {
    border: "1px solid #D1D5DB",
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 15,
    resize: "vertical",
  },

  // ✅ Checkbox styling
  checkboxBox: {
    border: "1px solid #D1D5DB",
    borderRadius: 8,
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    background: "#fff",
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

  // ✅ Errors + disabled
  inputError: {
    borderColor: "#EF4444",
  },
  errorText: {
    color: "#EF4444",
    fontSize: 13,
    fontWeight: 600,
    marginTop: 2,
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
  },
  submitDisabled: {
    opacity: 0.6,
    cursor: "not-allowed",
  },
};
