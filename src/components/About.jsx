import aboutVideo from "../assets/camiones.mp4";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
      <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">
        Nosotros
      </h2>

      <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
        <div className=" mb-8 lg:mb-0">
          <video
            src={aboutVideo}
            alt="About VastuSpaze"
            className="w-full h-auto"
            autoPlay loop muted
          />
        </div>

        <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">
        Las empresas de transporte enfrentan desafíos significativos en la gestión de sus operadores, quienes son responsables de la ejecución del servicio. La falta de comunicación, la incertidumbre sobre el estado de los viajes, la ubicación de las unidades y el cumplimiento de los procesos documentales son problemáticas comunes que afectan la eficiencia y la calidad del servicio.
        <br></br>
        <br></br>
        Trooxer nace de la visión de expertos en logística, transporte y tecnología con décadas de experiencia.
        <br></br>
        <br></br>
        Nuestro objetivo es ofrecer una solución que simplifique la gestión del transporte e impulse la eficiencia de tu negocio.
        </p>
      </div>
    </section>
  );
};

export default About;
