import { SERVICES_CONTENT } from "../constants";

const Services = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="services">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-20">
          Plataforma
        </h2>
        {SERVICES_CONTENT.map((service, index) => (
          <div key={index} className="mb-12 mx-4 flex flex-col lg:flex-row">
            <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
              {service.link ? (
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-auto object-cover rounded-lg mb-10 mt-10"
                  />
                </a>
              ) : (
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-auto object-cover rounded-lg mb-10 mt-10"
                />
              )}
            </div>
            <div className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}>
              <h3 className="text-xl lg:text-2xl font-medium mb-10 mt-20">
                {service.title}
              </h3>
              <p className="mb-10 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {service.description}
              </p>
              <ul className="list-disc list-inside mb-5 lg:tracking-wide text-lg lg:text-xl lg:leading-9">
                {service.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
