import img from "./../assets/pexels-pixabay-268092.jpg";

function Hero() {
  return (
    <main className="flex items-center justify-center bg-gray-200">
      <div className="max-w-screen-lg w-full p-4">
        <img className="w-full h-[300px] object-cover rounded-lg shadow-2xl" src={img} alt="Hero"
        />
      </div>
    </main>
  );
}

export default Hero;
