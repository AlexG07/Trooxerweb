import { RiPhoneLine, RiMailLine, RiMapPinLine } from "@remixicon/react";
import { CONTACT_INFO } from "../constants";

const ContactUs = () => {
  return (

    <section id="contact" className="max-w-7xl mx-auto">
      <div className="my-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
          Contactanos
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {CONTACT_INFO.text}
        </p>
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

        <form class="max-w-sm mx-auto">
          <h1 className="title mt-20 mb-5">Llena el formulario para que nosotros te contactemos:</h1>
          <div class="mb-1">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email:</label>
            <input type="email" id="email" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
          </div>

          <div class="mb-1">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nombre:</label>
            <input type="text" id="name" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
          </div>
          
          <div class="mb-4">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Tiempo esperado de implementacion:</label>
            <input type="text" id="time" 
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
          </div>
          
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Enviar
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
