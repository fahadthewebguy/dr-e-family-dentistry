"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire up to a real backend/email service (e.g. an API route, Formspree, or
    // a booking system) once one is chosen. For now we simulate a submission.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-primary-50 p-8 text-center ring-1 ring-primary-100 sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-primary-950">Thank you!</h3>
        <p className="mt-2 text-neutral-700">
          Your request has been received. Our team will reach out shortly to confirm your
          appointment — or call/text us anytime at{" "}
          <a href="tel:+14804942435" className="font-semibold text-primary-700">
            480-494-2435
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-900">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-900">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary-900">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-primary-900">
            Preferred Day / Time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            placeholder="e.g. Tuesday mornings"
            className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
          />
        </div>
        <div>
          <label htmlFor="patientType" className="block text-sm font-medium text-primary-900">
            New or Existing Patient?
          </label>
          <select
            id="patientType"
            name="patientType"
            required
            defaultValue=""
            className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="new">New Patient</option>
            <option value="existing">Existing Patient</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about what you're looking for..."
          className="mt-1.5 w-full rounded-xl border border-primary-200 bg-white px-4 py-2.5 text-neutral-900 outline-none transition-colors focus:border-primary-400"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : "Request an Appointment"}
      </button>
    </form>
  );
}
