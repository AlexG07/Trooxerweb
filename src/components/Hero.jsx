import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2">
      <div className="flex flex-col items-center my-20">
        <h1 className="inline-flex text-6xl lg:text-[6rem] p-2 uppercase font-bold">
          {HERO_CONTENT.title}
        </h1>
        <img
          src={HERO_CONTENT.image}
          className="w-full h-[65vh] object-cover rounded-2xl p-2"
          alt="Hero"
        />
      </div>
      <p className="lg:mt-6 text-3xl mb-4 font-medium tracking-tighter">
          {HERO_CONTENT.subtitle}
      </p>
      <div className="flex justify-center">
        <button className="mt-6 px-6 py-3 mb-6 bg-[#fae056] text-black text-xl rounded-lg hover:bg-[#fae056] transition duration-300">
          {HERO_CONTENT.buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
