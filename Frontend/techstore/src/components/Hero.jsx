import img from "../assets/dmitry-chernyshov-mP7aPSUm7aE-unsplash.jpg";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-100 min-h-screen">
      {/* Background image */}
      <img
        src={img}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen py-20">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-2">
          On Sale
        </p>
        <h1 className="text-white text-5xl md:text-8xl font-black leading-tight mb-1">
          Macbook Pro.
          <br />
        </h1>
          <span className="text-2xl md:text-2xl font-black text-white">
            The ultimate M5 Pro 14 inch model.
          </span>
          <p className="text-1xl mt-2 md:text-1xl font-light text-gray-400">The 14-inch MacBook Pro with the Apple M5 chip (released Oct 2025)<br></br> offers exceptional AI-driven performance in a 3nm, 10-core CPU/GPU package.<br></br> It features a brilliant 14.2-inch Liquid Retina XDR display (1,600 nits peak),<br></br> up to 18-22 hours of battery life, and supports Thunderbolt 4/5. It starts at $1,599 with 16GB+ RAM. </p>
        
        <p className="text-red-600 text-1xl font-bold mt-2 mb-6">$1599.00</p>
        <a
          href="#"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors w-max"
        >
          Shop Today
        </a>
      </div>
    </section>
  );
}