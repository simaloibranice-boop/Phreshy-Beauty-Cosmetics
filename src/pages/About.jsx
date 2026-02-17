import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <div className="min-h-screen flex items-center justify-center text-white">

      <div
        ref={ref}
        className={`max-w-3xl text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold mb-6">
          About Phreshy Beauty
        </h2>

        <p className="text-lg opacity-80">
          Luxury skincare crafted with science and elegance.
        </p>
      </div>

    </div>
  );
};

export default About;
