import { z } from "zod";

// Contact Form Validation Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  company: z
    .string()
    .min(2, "El nombre de la empresa debe tener al menos 2 caracteres")
    .max(100, "El nombre de la empresa es demasiado largo"),
  email: z
    .string()
    .email("Por favor, introduce un correo electrónico válido")
    .min(1, "El correo electrónico es obligatorio"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        // Basic phone validation (numbers, spaces, +, -, parentheses)
        return /^[\d\s\+\-\(\)]+$/.test(val);
      },
      { message: "Por favor, introduce un número de teléfono válido" }
    ),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje es demasiado largo"),
  wantsConsultancy: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
  email: z.string().email("Por favor, introduce un correo electrónico válido"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

// Demo Request Schema
export const demoRequestSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un correo electrónico válido"),
  company: z.string().min(2, "El nombre de la empresa es obligatorio"),
  phone: z.string().optional(),
  service: z.enum(["world-web", "astrapa", "thor", "other"], {
    message: "Por favor, selecciona un servicio",
  }),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
