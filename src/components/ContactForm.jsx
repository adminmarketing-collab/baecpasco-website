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
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const wrapRef = useRef(null);
  const btnRef = useRef(null);

  const list = useMemo(() => services.filter(Boolean), [services]);

  // Close on outside click
  useEffect(() => {
    const onPointerDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));

  const selectService = (service) => {
    setField("service", service);
    setOpen(false);
    setActiveIndex(-1);
    btnRef.current?.focus();
  };

  const onDropdownKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => (i >= 0 ? i : 0));
      return;
    }

    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) selectService(list[activeIndex]);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully!");

      // Reset form after sending
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
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
          style={styles.input}
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          name="name"
          required
          placeholder="Your full name"
        />
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Email Address</label>
        <input
          style={styles.input}
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          name="email"
          required
          type="email"
          placeholder="you@email.com"
        />
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Phone Number</label>
        <input
          style={styles.input}
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          name="phone"
          placeholder="Optional"
        />
      </div>

      {/* Custom Dropdown */}
      <div style={{ ...styles.row, position: "relative" }} ref={wrapRef}>
        <label style={styles.label}>Service</label>

        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onDropdownKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          style={styles.dropdownBtn}
        >
          <span style={{ fontWeight: 700, color: form.service ? "#111827" : "#6B7280" }}>
            {form.service || "Services Interested In"}
          </span>
          <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "0.2s" }}>▼</span>
        </button>

        {open && (
          <div role="listbox" style={styles.menu}>
            {list.map((service, idx) => {
              const selected = service === form.service;
              const active = idx === activeIndex;

              return (
                <div
                  key={service}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  // Pointer events = guaranteed hover + click behavior
                  onPointerEnter={() => setActiveIndex(idx)}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    selectService(service);
                  }}
                  style={{
                    ...styles.item,
                    ...(selected || active ? styles.itemActive : null),
                  }}
                >
                  <span>{service}</span>
                  {selected && <span style={{ fontWeight: 900 }}>✓</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div style={styles.row}>
        <label style={styles.label}>Message</label>
        <textarea
          style={styles.textarea}
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          name="message"
          rows={5}
          placeholder="Tell us what you need..."
        />
      </div>

      <button type="submit" style={styles.submit}>
        Send Message
      </button>

      {/* Small CSS only for focus ring (optional but nice) */}
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
    borderRadius: 10, // ← LESS ROUND
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
    borderRadius: 8, // ← LESS ROUND
    padding: "12px 14px",
    fontSize: 15,
  },
  textarea: {
    border: "1px solid #D1D5DB",
    borderRadius: 8, // ← LESS ROUND
    padding: "12px 14px",
    fontSize: 15,
    resize: "vertical",
  },
  dropdownBtn: {
    width: "100%",
    border: "1px solid #D1D5DB",
    borderRadius: 8, // ← LESS ROUND
    padding: "12px 14px",
    background: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menu: {
    position: "absolute",
    left: 0,
    top: "calc(100% + 8px)",
    width: "100%",
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 10, // ← LESS ROUND
    overflow: "hidden",
    boxShadow: "0 16px 35px rgba(0,0,0,0.14)",
    zIndex: 999999,
  },
  item: {
    padding: "12px 14px",
    cursor: "pointer",
    userSelect: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#fff",
    color: "#111827",
    transition: "background 0.15s ease, color 0.15s ease",
  },
  itemActive: {
    background: "#EF4444",
    color: "#fff",
  },
  submit: {
    background: "#EF4444",
    color: "#fff",
    border: "none",
    borderRadius: 8, // ← LESS ROUND
    padding: "14px 16px",
    fontWeight: 900,
    textTransform: "uppercase",
    cursor: "pointer",
  },
};
