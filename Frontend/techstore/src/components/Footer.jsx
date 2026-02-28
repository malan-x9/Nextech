import { FOOTER_COLS } from "../data/constants";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

const FOOTER_BOTTOM_LINKS = [
  "Merchandise", "Warranty", "Jobs", "Site Map",
  "About Us", "Contact Us", "Stores", "Support", "Services",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo + A–Z browse */}
        <div className="mb-8">
          <a href="#" className="text-white text-xl font-black tracking-tight">
            nextech.
          </a>
          <p className="text-xs uppercase tracking-widest mt-1 mb-4">
            Browse nextech.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {ALPHABET.map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Footer link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-t border-gray-700 pt-8">
          {Object.entries(FOOTER_COLS).map(([col, links]) => (
            <div key={col}>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-3">
                {col}
              </h4>
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-xs text-gray-400 hover:text-white mb-1 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <div className="flex flex-wrap gap-4">
            {FOOTER_BOTTOM_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Statement
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          © 2024 Nextech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
