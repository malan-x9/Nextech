import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoStrip from "./components/InfoStrip";
import ProductsSection from "./components/ProductsSection";
import FeaturedProducts from "./components/FeaturedProducts";
import Newsletter from "./components/Newsletter";
import TrustBar from "./components/TrustBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <InfoStrip />
      <ProductsSection />
      <FeaturedProducts />
      <Newsletter />
      <TrustBar />
      <Footer />
    </div>
  );
}
