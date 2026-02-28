import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const URL = "http://localhost:4000/api/getProducts";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHandler()
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-wide">
            Featured Products
          </h2>
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 transition-colors"
          >
            See All Featured
          </a>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg aspect-square mb-3" />
                <div className="h-3 bg-gray-200 rounded mb-2 w-1/2" />
                <div className="h-4 bg-gray-200 rounded mb-2 w-3/4" />
                <div className="h-3 bg-gray-200 rounded mb-2 w-full" />
                <div className="h-5 bg-gray-200 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {products.map((product, i) => (
              <Product key={i} Product={product} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-sm font-medium">No products found</p>
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-gray-200 mb-8" />

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="border border-gray-300 text-gray-700 text-xs font-bold uppercase tracking-widest px-6 py-2.5 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            See Details
          </a>
          <a
            href="#"
            className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 transition-colors"
          >
            Browse All Sales
          </a>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;