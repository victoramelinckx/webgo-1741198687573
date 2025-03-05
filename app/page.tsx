
"use client";

import { Hero } from "./components/Hero";
import { How } from "./components/How";
import { Aboutus } from "./components/Aboutus";
import { Services } from "./components/Services";
import { BeforeAndAfter } from "./components/BeforeAndAfter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="¡Impulsa Tu Negocio Con Webgo!"
              subheadline="Hacemos páginas webs optimizadas para aumentar tus ventas y expandir tu empresa."
              cta1="Comienza Tu Proyecto Hoy"
              cta2="Descubre Más Sobre Nuestros Servicios"
            />

            <How
              step1Title="Consulta Inicial"
              step1Desc="Programamos una reunión para entender tus necesidades empresariales y cómo una página web optimizada puede ayudarte a incrementar tus ventas."
              step2Title="Diseño y Desarrollo"
              step2Desc="Nuestro equipo de expertos en diseño y desarrollo web trabajará para crear una página web personalizada y optimizada para tu negocio."
              step3Title="Lanzamiento y Optimización"
              step3Desc="Una vez que tu página web esté lista, la lanzaremos y continuaremos optimizándola para garantizar que genera el máximo de ventas para tu empresa."
            />

            <Aboutus
              step1Title="Acerca de nosotros"
              step1Desc="Descripción"
              step2Title="Beneficio 1"
              step2Desc="Descripción beneficio 1"
              step3Title="Beneficio 2"
              step3Desc="Descripción beneficio 2"
            />

            <Services
              heading="Nuestros Servicios"
              description="Ofrecemos una gran variedad de servicios."
              services={[]}
            />
<BeforeAndAfter />
<FAQ />
<BookAppoinment />
    </main>
  );
}
    