function HeroBottom() {
  return (
    <section className="bg-pink-800 text-gray-200 py-12">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-4 xl font-Poppins font-semibold pt-4">
          Think Health. Think Massage.
        </h1>
        <span className="mt-4 text-lg sm:text-xl md:text-2xl p-4">
          We are open 9 AM to 6 PM, Monday through Sunday. If you would like to schedule an appointment with us, please call at +91 123456789 today!
        </span>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-white text-pink-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 hover:text-white transition duration-300">
            LEARN MORE ABOUT US
          </button>
          <button className="bg-white text-pink-800 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 hover:text-white transition duration-300">
            CONTACT TODAY
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroBottom;
