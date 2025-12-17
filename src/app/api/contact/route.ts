import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@/lib/validations";

/**
 * POST /api/contact
 * Send contact form via SMTP (Hostinger)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, company, email, phone, message, wantsConsultancy } = result.data;

    // Validate SMTP configuration
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    };

    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error("SMTP configuration incomplete");
      return NextResponse.json({ error: "Servicio de correo no configurado" }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig);

    // Verify connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { error: "Error de conexión con el servidor de correo" },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #4FC2D1 0%, #7df9ff 100%);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9f9f9;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .field {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 5px;
      border-left: 4px solid #4FC2D1;
    }
    .field-label {
      font-weight: bold;
      color: #4FC2D1;
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 5px;
    }
    .field-value {
      color: #333;
      font-size: 16px;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 5px;
      border-left: 4px solid #4FC2D1;
      margin-top: 20px;
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .badge {
      display: inline-block;
      background: #F59E0B;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: bold;
      margin-top: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      color: #666;
      font-size: 14px;
    }
    .metadata {
      font-size: 12px;
      color: #999;
      margin-top: 20px;
      padding: 15px;
      background: #f5f5f5;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>⚡ Nuevo Contacto - ValkiriApps</h1>
  </div>
  <div class="content">
    <div class="field">
      <div class="field-label">👤 Nombre</div>
      <div class="field-value">${name}</div>
    </div>

    <div class="field">
      <div class="field-label">🏢 Empresa</div>
      <div class="field-value">${company}</div>
    </div>

    <div class="field">
      <div class="field-label">📧 Email</div>
      <div class="field-value">
        <a href="mailto:${email}" style="color: #4FC2D1; text-decoration: none;">${email}</a>
      </div>
    </div>

    ${
      phone
        ? `
    <div class="field">
      <div class="field-label">📱 Teléfono</div>
      <div class="field-value">
        <a href="tel:${phone}" style="color: #4FC2D1; text-decoration: none;">${phone}</a>
      </div>
    </div>
    `
        : ""
    }

    ${wantsConsultancy ? '<div class="badge">✨ Solicita Consultoría Gratuita</div>' : ""}

    <div class="message-box">
      <div class="field-label">💬 Mensaje</div>
      <div style="margin-top: 10px;">${message}</div>
    </div>

    <div class="metadata">
      <strong>📊 Metadata:</strong><br>
      <strong>Origen:</strong> Formulario de contacto web<br>
      <strong>Fecha:</strong> ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}<br>
      <strong>User Agent:</strong> ${request.headers.get("user-agent") || "No disponible"}<br>
      <strong>IP:</strong> ${request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "No disponible"}
    </div>
  </div>
  <div class="footer">
    <p>Este correo fue generado automáticamente desde <strong>valkiriapps.com</strong></p>
    <p style="color: #999; font-size: 12px;">ValkiriApps - Desarrollo de Software de Vanguardia</p>
  </div>
</body>
</html>
`;

    const emailText = `
Nuevo Contacto - ValkiriApps
=============================

Nombre: ${name}
Empresa: ${company}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ""}
${wantsConsultancy ? "\n✨ Solicita Consultoría Gratuita" : ""}

Mensaje:
${message}

---
Metadata:
- Origen: Formulario de contacto web
- Fecha: ${new Date().toISOString()}
- User Agent: ${request.headers.get("user-agent")}
- IP: ${request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip")}
`;

    // Send email
    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || "ValkiriApps",
        address: process.env.SMTP_FROM || process.env.SMTP_USER || "",
      },
      to: process.env.SMTP_TO || process.env.SMTP_USER || "",
      replyTo: email,
      subject: `🚀 Nuevo contacto de ${name} - ${company}`,
      text: emailText,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);

    console.log(`Contact form email sent successfully to ${mailOptions.to}`);

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);

    return NextResponse.json(
      {
        error: "Error al procesar la solicitud",
        message: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 }
    );
  }
}

// Disable body size limit for this route (if needed)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
