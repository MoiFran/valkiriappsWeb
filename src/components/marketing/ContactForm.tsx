"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { trackFormSubmission, trackLead } from "@/lib/analytics";
import { homeContent } from "@/content/home";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    wantsConsultancy: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Scroll animations with inertia
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });
      }

      // Animate form with parallax
      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
          y: 100,
          opacity: 0,
          scale: 0.95,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.out",
        });

        // Parallax effect on form
        gsap.to(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
          y: -40,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("submitting");

    // Validate
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      setStatus("idle");
      trackFormSubmission("contact_form", false);
      return;
    }

    // Submit to API (proxy to n8n)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setStatus("success");
      trackFormSubmission("contact_form", true);
      trackLead("contact_form");

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        wantsConsultancy: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
      trackFormSubmission("contact_form", false);
    }
  };

  return (
    <section ref={sectionRef} id="contacto" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4"
            >
              {homeContent.contact.title}
            </h2>
            <p ref={subtitleRef} className="text-lg text-muted max-w-2xl mx-auto">
              {homeContent.contact.subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="bg-bg border border-border rounded-2xl p-6 sm:p-8 lg:p-10">
            {status === "success" ? (
              // Success Message
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text mb-2">
                  {homeContent.contact.form.successTitle}
                </h3>
                <p className="text-muted mb-8">{homeContent.contact.form.successMessage}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                    Nombre completo <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={homeContent.contact.form.namePlaceholder}
                    className={`w-full px-4 py-3 bg-surface border ${
                      errors.name ? "border-error" : "border-border"
                    } rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-error" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                    Empresa <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={homeContent.contact.form.companyPlaceholder}
                    className={`w-full px-4 py-3 bg-surface border ${
                      errors.company ? "border-error" : "border-border"
                    } rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? "company-error" : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="mt-2 text-sm text-error" role="alert">
                      {errors.company}
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={homeContent.contact.form.emailPlaceholder}
                      className={`w-full px-4 py-3 bg-surface border ${
                        errors.email ? "border-error" : "border-border"
                      } rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-error" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={homeContent.contact.form.phonePlaceholder}
                      className={`w-full px-4 py-3 bg-surface border ${
                        errors.phone ? "border-error" : "border-border"
                      } rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-sm text-error" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Mensaje <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={homeContent.contact.form.messagePlaceholder}
                    className={`w-full px-4 py-3 bg-surface border ${
                      errors.message ? "border-error" : "border-border"
                    } rounded-lg text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-error" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Consultancy Checkbox */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="wantsConsultancy"
                    name="wantsConsultancy"
                    checked={formData.wantsConsultancy}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-primary-500 bg-surface border-border rounded focus:ring-2 focus:ring-primary-500 focus:ring-offset-0"
                  />
                  <label
                    htmlFor="wantsConsultancy"
                    className="ml-3 text-sm text-text cursor-pointer"
                  >
                    {homeContent.contact.form.consultancyLabel}
                  </label>
                </div>

                {/* Error Message */}
                {status === "error" && (
                  <div
                    className="p-4 bg-error/10 border border-error/20 rounded-lg"
                    role="alert"
                    aria-live="polite"
                  >
                    <p className="text-sm text-error">
                      {homeContent.contact.form.errorTitle}: {errorMessage}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-muted disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-bg"
                >
                  {status === "submitting"
                    ? homeContent.contact.form.submitting
                    : homeContent.contact.form.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
