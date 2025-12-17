"use client";

import React from "react";
import Link from "next/link";
import styles from "../legal/legal.module.css";

export default function CookiesPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>

        <h1 className={styles.title}>Política de Cookies</h1>
        <p className={styles.lastUpdated}>Última actualización: {currentYear}</p>

        <div className={styles.content}>
          {/* Introducción */}
          <section className={styles.section}>
            <h2>1. ¿Qué son las Cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas
              páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y
              recuperar información sobre los hábitos de navegación de un usuario o de su equipo y,
              dependiendo de la información que contengan y de la forma en que utilice su equipo,
              pueden utilizarse para reconocer al usuario.
            </p>
            <p>
              El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión
              actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las
              cookies no contienen ninguna clase de información personal específica, y la mayoría de
              las mismas se borran del disco duro al finalizar la sesión de navegador (las
              denominadas cookies de sesión).
            </p>
          </section>

          {/* Legislación */}
          <section className={styles.section}>
            <h2>2. Legislación Aplicable</h2>
            <p>La legislación vigente en materia de cookies se encuentra regulada en:</p>
            <ul>
              <li>
                Artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
                Información y de Comercio Electrónico (LSSI)
              </li>
              <li>
                Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de
                2016, relativo a la protección de las personas físicas (RGPD)
              </li>
              <li>
                Directiva 2002/58/CE del Parlamento Europeo y del Consejo, de 12 de julio de 2002,
                relativa al tratamiento de los datos personales y a la protección de la intimidad en
                el sector de las comunicaciones electrónicas
              </li>
            </ul>
          </section>

          {/* Tipos */}
          <section className={styles.section}>
            <h2>3. Tipos de Cookies</h2>

            <h3>Según la entidad que las gestiona:</h3>
            <ul>
              <li>
                <strong>Cookies propias:</strong> Enviadas al equipo del usuario desde nuestros
                propios equipos o dominios
              </li>
              <li>
                <strong>Cookies de terceros:</strong> Enviadas al equipo del usuario desde un equipo
                o dominio que no es gestionado por nosotros
              </li>
            </ul>

            <h3>Según el plazo de tiempo que permanecen activadas:</h3>
            <ul>
              <li>
                <strong>Cookies de sesión:</strong> Recaban y almacenan datos mientras el usuario
                accede a la página web
              </li>
              <li>
                <strong>Cookies persistentes:</strong> Los datos se almacenan en el terminal y
                pueden ser accedidos y tratados durante un periodo definido
              </li>
            </ul>

            <h3>Según su finalidad:</h3>
            <ul>
              <li>
                <strong>Cookies técnicas:</strong> Permiten la navegación y utilización de las
                diferentes opciones o servicios
              </li>
              <li>
                <strong>Cookies de personalización:</strong> Permiten acceder al servicio con
                características predefinidas
              </li>
              <li>
                <strong>Cookies de análisis:</strong> Permiten el seguimiento y análisis del
                comportamiento de los usuarios
              </li>
              <li>
                <strong>Cookies publicitarias:</strong> Permiten la gestión de espacios
                publicitarios
              </li>
              <li>
                <strong>Cookies de publicidad comportamental:</strong> Almacenan información del
                comportamiento de los usuarios para mostrar publicidad específica
              </li>
            </ul>
          </section>

          {/* Cookies utilizadas */}
          <section className={styles.section}>
            <h2>4. Cookies Utilizadas en Este Sitio Web</h2>
            <p>En www.valkiriapps.com utilizamos las siguientes cookies:</p>

            <h3>Cookies Técnicas (Necesarias)</h3>
            <p>Estas cookies son esenciales para el correcto funcionamiento del sitio web:</p>
            <ul>
              <li>
                <strong>session_id:</strong> Mantiene la sesión del usuario | Duración: Sesión |
                Propia
              </li>
              <li>
                <strong>csrf_token:</strong> Seguridad contra ataques CSRF | Duración: Sesión |
                Propia
              </li>
              <li>
                <strong>cookie_consent:</strong> Registra preferencias de cookies | Duración: 1 año
                | Propia
              </li>
            </ul>

            <h3>Cookies de Análisis</h3>
            <p>
              Utilizadas para análisis estadístico y mejora del sitio (requieren consentimiento):
            </p>
            <ul>
              <li>
                <strong>Google Analytics (_ga, _gid, _gat):</strong> Análisis de tráfico web |
                Duración: 2 años / 24h / 1 minuto | Terceros
              </li>
            </ul>

            <h3>Cookies de Preferencias</h3>
            <p>Recuerdan sus preferencias de navegación:</p>
            <ul>
              <li>
                <strong>theme_preference:</strong> Modo claro/oscuro | Duración: 1 año | Propia
              </li>
              <li>
                <strong>language:</strong> Idioma seleccionado | Duración: 1 año | Propia
              </li>
            </ul>
          </section>

          {/* Consentimiento */}
          <section className={styles.section}>
            <h2>5. Consentimiento</h2>
            <p>
              Al acceder a nuestro sitio web por primera vez, se le mostrará un banner informativo
              sobre el uso de cookies, donde podrá:
            </p>
            <ul>
              <li>Aceptar todas las cookies</li>
              <li>Rechazar cookies no esenciales</li>
              <li>Configurar sus preferencias de cookies</li>
            </ul>
            <p>
              Las cookies técnicas no requieren consentimiento ya que son necesarias para el
              funcionamiento del sitio. El resto de cookies solo se activarán con su consentimiento
              explícito.
            </p>
          </section>

          {/* Gestión */}
          <section className={styles.section}>
            <h2>6. Cómo Gestionar las Cookies</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la
              configuración de las opciones de su navegador:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt;
                Cookies
              </li>
              <li>
                <strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Configuración &gt; Privacidad y servicios &gt;
                Cookies
              </li>
            </ul>
            <p>Para más información sobre la gestión de cookies en su navegador:</p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4FC2D1", textDecoration: "underline" }}
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4FC2D1", textDecoration: "underline" }}
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4FC2D1", textDecoration: "underline" }}
                >
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4FC2D1", textDecoration: "underline" }}
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Terceros */}
          <section className={styles.section}>
            <h2>7. Cookies de Terceros</h2>
            <p>
              Este sitio web utiliza servicios de terceros para recopilar información con fines
              estadísticos y de uso de la web. Se usan cookies de Google Analytics para almacenar
              información del comportamiento de los usuarios, sabiendo que es imposible asociar
              estos datos con su identidad.
            </p>
            <p>
              Puede consultar la política de privacidad de Google Analytics en:
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#4FC2D1", textDecoration: "underline", marginLeft: "0.5rem" }}
              >
                https://policies.google.com/privacy
              </a>
            </p>
          </section>

          {/* Desactivar */}
          <section className={styles.section}>
            <h2>8. Desactivar las Cookies</h2>
            <p>
              Puede permitir o bloquear las cookies, así como borrar sus datos de navegación
              (incluidas las cookies) desde el navegador que utiliza. Consulte las opciones e
              instrucciones que ofrece su navegador para ello.
            </p>
            <p>
              Tenga en cuenta que si acepta las cookies de terceros, deberá eliminarlas desde las
              opciones del navegador o desde el sistema ofrecido por el propio tercero.
            </p>
            <p>
              <strong>Advertencia:</strong> La desactivación de cookies puede afectar a la
              funcionalidad del sitio web y a la experiencia de navegación.
            </p>
          </section>

          {/* Actualizaciones */}
          <section className={styles.section}>
            <h2>9. Actualización de la Política de Cookies</h2>
            <p>
              ValkiriApps Labs puede modificar esta Política de Cookies en función de exigencias
              legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las
              instrucciones dictadas por la Agencia Española de Protección de Datos.
            </p>
            <p>
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán
              a los usuarios mediante un aviso informativo en nuestro sitio web.
            </p>
          </section>

          {/* Contacto */}
          <section className={styles.section}>
            <h2>10. Contacto</h2>
            <p>Si tiene dudas sobre esta Política de Cookies, puede contactar con nosotros en:</p>
            <ul>
              <li>Email: info@valkiriapps.com</li>
              <li>Teléfono: +34 722 47 94 51</li>
            </ul>
          </section>
        </div>

        {/* Enlaces relacionados */}
        <div className={styles.relatedLinks}>
          <Link href="/legal">Aviso Legal</Link>
          <Link href="/privacy">Política de Privacidad</Link>
        </div>
      </div>
    </div>
  );
}
