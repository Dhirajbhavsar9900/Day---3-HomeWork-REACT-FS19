function Navbar() {
  const NavContent = [
    { name: "HOME" },
    { name: "ABOUT" },
    { name: "SERVICES" },
    { name: "FAQ" },
    { name: "CONTACT" },
  ];

  return (
    <nav className="bg-slate-300">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center p-4">
          {NavContent.map((nav, index) => (
            <ul key={index} className="flex">
              <li className="px-4 py-2 mx-2 cursor-pointer font-Poppins hover:bg-pink-600 hover:text-white transition duration-700 ease-in-out rounded-md">
                {nav.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

