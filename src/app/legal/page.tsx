"use client";

import React from "react";
import Link from "next/link";
import styles from "./legal.module.css";

export default function LegalPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link href="/" className={styles.backButton}>
          ← Volver al Inicio
        </Link>

        <h1 className={styles.title}>Aviso Legal</h1>
        <p className={styles.lastUpdated}>Última actualización: {currentYear}</p>

        <div className={styles.content}>
          {/* Identificación */}
          <section className={styles.section}>
            <h2>1. Identificación del Titular</h2>
            <p>
              En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios
              de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio,
              se facilitan a continuación los siguientes datos de información general de este sitio
              web:
            </p>
            <ul>
              <li>
                <strong>Titular:</strong> ValkiriApps Labs
              </li>
              <li>
                <strong>NIF/CIF:</strong> [Pendiente de registro]
              </li>
              <li>
                <strong>Domicilio social:</strong> Canarias, España
              </li>
              <li>
                <strong>Correo electrónico:</strong> info@valkiriapps.com
              </li>
              <li>
                <strong>Teléfono:</strong> +34 722 47 94 51
              </li>
              <li>
                <strong>Sitio Web:</strong> www.valkiriapps.com
              </li>
            </ul>
          </section>

          {/* Objeto */}
          <section className={styles.section}>
            <h2>2. Objeto</h2>
            <p>
              El titular pone a disposición de los usuarios el presente documento con el que
              pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002 de Servicios
              de la Sociedad de la Información y del Comercio Electrónico (LSSICE), así como
              informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de
              uso del sitio web.
            </p>
            <p>
              Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a
              la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como
              a cualquier otra disposición legal que fuera de aplicación.
            </p>
          </section>

          {/* Servicios */}
          <section className={styles.section}>
            <h2>3. Servicios</h2>
            <p>
              A través del sitio web, ValkiriApps Labs facilita a los usuarios el acceso y la
              utilización de diversos servicios y contenidos relacionados con:
            </p>
            <ul>
              <li>Desarrollo web y WordPress profesional</li>
              <li>Plataformas educativas (EdTech) y sistemas LMS</li>
              <li>Automatizaciones empresariales e integración con IA</li>
              <li>Consultoría tecnológica y transformación digital</li>
            </ul>
          </section>

          {/* Responsabilidad */}
          <section className={styles.section}>
            <h2>4. Responsabilidad</h2>
            <p>
              El titular no se hace responsable de la información y contenidos almacenados en foros,
              redes sociales o cualesquier otro medio que permita a terceros publicar contenidos de
              forma independiente en la página web del prestador.
            </p>
            <p>
              Sin embargo, teniendo en cuenta los arts. 11 y 16 de la LSSICE, el titular se
              compromete a la retirada o en su caso bloqueo de aquellos contenidos que pudieran
              afectar o contravenir la legislación nacional o internacional, derechos de terceros o
              la moral y el orden público.
            </p>
          </section>

          {/* Propiedad Intelectual */}
          <section className={styles.section}>
            <h2>5. Propiedad Intelectual e Industrial</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación,
              edición, compilación y demás elementos necesarios para su funcionamiento, los diseños,
              logotipos, texto y/o gráficos son propiedad del titular o en su caso dispone de
              licencia o autorización expresa por parte de los autores.
            </p>
            <p>
              Todos los contenidos del sitio web se encuentran debidamente protegidos por la
              normativa de propiedad intelectual e industrial, así como inscritos en los registros
              públicos correspondientes.
            </p>
            <p>
              Independientemente de la finalidad para la que fueran destinados, la reproducción
              total o parcial, uso, explotación, distribución y comercialización, requiere en todo
              caso de la autorización escrita previa por parte del titular.
            </p>
          </section>

          {/* Ley Aplicable */}
          <section className={styles.section}>
            <h2>6. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el
              presente sitio web o de las actividades en él desarrolladas, será de aplicación la
              legislación española, a la que se someten expresamente las partes.
            </p>
            <p>
              Las partes se someten, a su elección, para la resolución de los conflictos y con
              renuncia a cualquier otro fuero, a los juzgados y tribunales del domicilio del
              Usuario.
            </p>
          </section>

          {/* Enlaces */}
          <section className={styles.section}>
            <h2>7. Enlaces Externos</h2>
            <p>
              El sitio web puede incluir enlaces a sitios web de terceros. ValkiriApps Labs no asume
              responsabilidad alguna por el contenido, política de privacidad o prácticas de sitios
              web de terceros. Le recomendamos revisar las políticas de privacidad y términos de uso
              de cualquier sitio web de terceros que visite.
            </p>
          </section>

          {/* Modificaciones */}
          <section className={styles.section}>
            <h2>8. Modificaciones</h2>
            <p>
              El titular se reserva el derecho a efectuar sin previo aviso las modificaciones que
              considere oportunas en su web, pudiendo cambiar, suprimir o añadir tanto los
              contenidos y servicios que se presten a través de la misma como la forma en la que
              éstos aparezcan presentados o localizados.
            </p>
          </section>

          {/* Contacto */}
          <section className={styles.section}>
            <h2>9. Contacto</h2>
            <p>
              Para cualquier consulta relacionada con este Aviso Legal, puede contactar con nosotros
              a través de:
            </p>
            <ul>
              <li>Email: info@valkiriapps.com</li>
              <li>Teléfono: +34 722 47 94 51</li>
            </ul>
          </section>
        </div>

        {/* Enlaces relacionados */}
        <div className={styles.relatedLinks}>
          <Link href="/privacy">Política de Privacidad</Link>
          <Link href="/cookies">Política de Cookies</Link>
        </div>
      </div>
    </div>
  );
}
