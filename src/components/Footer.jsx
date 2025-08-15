import { Link } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/research", label: "Committee" },
    { to: "/team", label: "Call for Papers" },
    { to: "/preview", label: "Call for PhD Forum" },
    { to: "/registration", label: "Registration" },
    { to: "/speakers", label: "Speakers" },
    { to: "/programme", label: "Programme" },
  ];

  return (
    <footer className="fixed left-0 bottom-0 w-full h-[65vh] md:h-[40vh] z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="/footervid.mp4"
      />

      <div className="fixed inset-0 bg-black bg-opacity-30 z-0" />

      <div className="absolute bottom-0 w-full flex flex-col text-white text-left px-20 py-10">
        <div className="mb-[3vh]">
          <p className="text-6xl font-semibold">ASCAT 2026</p>
          <p className="text-2xl font-semibold">March 06 - March 08 2026</p>
          <nav className="flex flex-wrap justify-left gap-6 mt-3">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:underline">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-300 opacity-50" />

        <div className="flex justify-between items-center py-2 text-xs">
          <span>© {new Date().getFullYear()} NIT Calicut</span>
          <a
            href="https://arunnats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Made by arunnats
          </a>
        </div>
      </div>
    </footer>
  );
}
