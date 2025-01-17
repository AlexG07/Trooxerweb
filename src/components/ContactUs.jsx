import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";
import WhatsApp from "../assets/Whatsapp.png";

const ContactUs = () => {
  return (

    <section id="contact" className="max-w-7xl mx-auto ">
      <div className="my-20 ">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contactanos
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
        <div className="flex justify-center">
        <a href="https://wa.me/523330160290?text=Quiero%20hablar%20con%20el%20chat%20bot" target="_blank" rel="noopener noreferrer">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>
      </div>
        <div className="flex flex-col lg:flex-row justify-around mx-4">
          <div className="flex mb-8 lg:mb-0">
            <RiPhoneLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.phone.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.phone.value}</p>
            </div>
          </div>
          <div className="flex mb-8 lg:mb-0">
            <RiMailLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.email.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.email.value}</p>
            </div>
          </div>
          <div className="flex">
            <RiMapPinLine className="text-3xl mr-4" />
            <div>
              <p className="text-lg font-semibold">
                {CONTACT_INFO.address.label}
              </p>
              <p className="text-neutral-600">{CONTACT_INFO.address.value}</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default ContactUs;
