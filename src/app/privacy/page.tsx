"use client";

import React from "react";
import Link from "next/link";
import styles from "../legal/legal.module.css";

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>

        <h1 className={styles.title}>Política de Privacidad</h1>
        <p className={styles.lastUpdated}>Última actualización: {currentYear}</p>

        <div className={styles.content}>
          {/* Introducción */}
          <section className={styles.section}>
            <h2>1. Introducción</h2>
            <p>
              En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de
              27 de abril de 2016 relativo a la protección de las personas físicas en lo que
              respecta al tratamiento de datos personales (RGPD) y de la Ley Orgánica 3/2018, de 5
              de diciembre, de Protección de Datos Personales y garantía de los derechos digitales
              (LOPDGDD), ValkiriApps Labs informa a los usuarios de su sitio web sobre su política
              de protección de datos de carácter personal.
            </p>
          </section>

          {/* Responsable */}
          <section className={styles.section}>
            <h2>2. Responsable del Tratamiento</h2>
            <ul>
              <li>
                <strong>Identidad:</strong> ValkiriApps Labs
              </li>
              <li>
                <strong>Dirección:</strong> Canarias, España
              </li>
              <li>
                <strong>Correo electrónico:</strong> info@valkiriapps.com
              </li>
              <li>
                <strong>Teléfono:</strong> +34 722 47 94 51
              </li>
            </ul>
          </section>

          {/* Datos Recopilados */}
          <section className={styles.section}>
            <h2>3. Datos Personales que Recopilamos</h2>
            <p>Los datos personales que podemos recopilar incluyen:</p>
            <ul>
              <li>
                <strong>Datos de contacto:</strong> Nombre, correo electrónico, teléfono, empresa
              </li>
              <li>
                <strong>Datos de navegación:</strong> Dirección IP, navegador, páginas visitadas,
                tiempo de permanencia
              </li>
              <li>
                <strong>Datos profesionales:</strong> Cargo, sector de actividad, necesidades
                empresariales
              </li>
              <li>
                <strong>Datos del proyecto:</strong> Información proporcionada en formularios de
                contacto o consultoría
              </li>
            </ul>
          </section>

          {/* Finalidad */}
          <section className={styles.section}>
            <h2>4. Finalidad del Tratamiento</h2>
            <p>Utilizamos sus datos personales para las siguientes finalidades:</p>
            <ul>
              <li>Gestionar solicitudes de información y contacto</li>
              <li>Prestar servicios de desarrollo web, EdTech y automatización solicitados</li>
              <li>
                Enviar comunicaciones comerciales sobre nuestros servicios (con su consentimiento
                previo)
              </li>
              <li>Mejorar la experiencia de usuario en nuestro sitio web</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
              <li>Realizar análisis estadísticos y de mejora de servicios</li>
            </ul>
          </section>

          {/* Base Legal */}
          <section className={styles.section}>
            <h2>5. Base Legal del Tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos personales es:</p>
            <ul>
              <li>
                <strong>Consentimiento del interesado:</strong> Para el envío de comunicaciones
                comerciales
              </li>
              <li>
                <strong>Ejecución de un contrato:</strong> Para la prestación de servicios
                solicitados
              </li>
              <li>
                <strong>Interés legítimo:</strong> Para mejorar nuestros servicios y realizar
                análisis
              </li>
              <li>
                <strong>Cumplimiento de obligaciones legales:</strong> Para obligaciones fiscales y
                mercantiles
              </li>
            </ul>
          </section>

          {/* Destinatarios */}
          <section className={styles.section}>
            <h2>6. Destinatarios de los Datos</h2>
            <p>Sus datos personales no serán cedidos a terceros, salvo en los siguientes casos:</p>
            <ul>
              <li>Cuando exista una obligación legal</li>
              <li>
                Cuando sea necesario para la prestación del servicio contratado (proveedores de
                hosting, servicios de email, pasarelas de pago)
              </li>
              <li>Con su consentimiento expreso para fines específicos</li>
            </ul>
            <p>
              En caso de utilizar proveedores de servicios ubicados fuera del Espacio Económico
              Europeo, garantizamos que cuentan con las medidas de seguridad adecuadas según el
              RGPD.
            </p>
          </section>

          {/* Conservación */}
          <section className={styles.section}>
            <h2>7. Plazo de Conservación</h2>
            <p>
              Los datos personales se conservarán mientras sean necesarios para las finalidades para
              las que fueron recabados. En particular:
            </p>
            <ul>
              <li>
                <strong>Datos de contacto:</strong> Hasta que solicite su supresión o retire el
                consentimiento
              </li>
              <li>
                <strong>Datos contractuales:</strong> Durante la vigencia del contrato y
                posteriormente durante los plazos legales de prescripción (generalmente 6 años)
              </li>
              <li>
                <strong>Datos fiscales:</strong> Durante el plazo establecido por la normativa
                fiscal (4-6 años)
              </li>
            </ul>
          </section>

          {/* Derechos */}
          <section className={styles.section}>
            <h2>8. Derechos del Usuario</h2>
            <p>Conforme al RGPD y la LOPDGDD, los usuarios tienen derecho a:</p>
            <ul>
              <li>
                <strong>Acceso:</strong> Obtener información sobre si estamos tratando sus datos
                personales
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos
              </li>
              <li>
                <strong>Supresión:</strong> Solicitar la eliminación de sus datos
              </li>
              <li>
                <strong>Oposición:</strong> Oponerse al tratamiento de sus datos
              </li>
              <li>
                <strong>Limitación:</strong> Solicitar la limitación del tratamiento
              </li>
              <li>
                <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado
              </li>
              <li>
                <strong>Retirar el consentimiento:</strong> En cualquier momento, sin que afecte a
                tratamientos previos
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, puede dirigirse a info@valkiriapps.com adjuntando copia
              de su DNI o documento identificativo equivalente.
            </p>
            <p>
              Asimismo, le informamos que tiene derecho a presentar una reclamación ante la Agencia
              Española de Protección de Datos (AEPD) en caso de considerar que se han vulnerado sus
              derechos.
            </p>
          </section>

          {/* Seguridad */}
          <section className={styles.section}>
            <h2>9. Medidas de Seguridad</h2>
            <p>
              ValkiriApps Labs ha adoptado las medidas técnicas y organizativas necesarias para
              garantizar la seguridad de los datos personales y evitar su alteración, pérdida,
              tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la
              naturaleza de los datos almacenados y los riesgos a los que están expuestos.
            </p>
            <p>Nuestras medidas de seguridad incluyen:</p>
            <ul>
              <li>Cifrado SSL/TLS en todas las comunicaciones</li>
              <li>Sistemas de autenticación robustos</li>
              <li>Copias de seguridad periódicas</li>
              <li>Limitación de acceso a datos personales solo a personal autorizado</li>
              <li>Formación continua del personal en materia de protección de datos</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className={styles.section}>
            <h2>10. Cookies y Tecnologías de Rastreo</h2>
            <p>
              Este sitio web utiliza cookies y tecnologías similares. Para más información sobre qué
              cookies utilizamos y con qué finalidad, consulte nuestra{" "}
              <Link href="/cookies" style={{ color: "#4FC2D1", textDecoration: "underline" }}>
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          {/* Menores */}
          <section className={styles.section}>
            <h2>11. Menores de Edad</h2>
            <p>
              Nuestros servicios están dirigidos a empresas y profesionales. No recopilamos
              intencionadamente datos de menores de 14 años. Si un padre o tutor tiene conocimiento
              de que su hijo nos ha proporcionado datos personales sin su consentimiento, debe
              contactarnos para que procedamos a su eliminación.
            </p>
          </section>

          {/* Modificaciones */}
          <section className={styles.section}>
            <h2>12. Modificaciones de la Política</h2>
            <p>
              ValkiriApps Labs se reserva el derecho a modificar esta política de privacidad para
              adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la
              industria. Cualquier modificación será comunicada con antelación suficiente.
            </p>
          </section>

          {/* Contacto */}
          <section className={styles.section}>
            <h2>13. Contacto</h2>
            <p>
              Para cualquier duda o consulta sobre esta Política de Privacidad o sobre el
              tratamiento de sus datos personales:
            </p>
            <ul>
              <li>Email: info@valkiriapps.com</li>
              <li>Teléfono: +34 722 47 94 51</li>
            </ul>
          </section>
        </div>

        {/* Enlaces relacionados */}
        <div className={styles.relatedLinks}>
          <Link href="/legal">Aviso Legal</Link>
          <Link href="/cookies">Política de Cookies</Link>
        </div>
      </div>
    </div>
  );
}
