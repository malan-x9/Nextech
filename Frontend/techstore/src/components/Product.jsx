function Product({ Product }) {
  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50 rounded-lg mb-3 aspect-square flex items-center justify-center border border-gray-100 hover:border-gray-200 transition-all duration-300">
        <img
          src={Product.imageUrl}
          alt={Product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Wishlist button - always visible */}
        <button className="absolute top-3 right-3 bg-white rounded-full p-1.5 shadow-sm hover:text-red-500 text-gray-400 transition-colors duration-200">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Quick Add button - always visible */}
        <div className="absolute bottom-0 left-0 right-0 bg-gray-900 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest text-center py-2.5 transition-colors duration-300 cursor-pointer">
          Quick Add
        </div>
      </div>

      {/* Product Info */}
      <div className="px-1">
        {/* Brand / Category */}
        <p className="text-gray-400 text-xs uppercase tracking-widest font-medium mb-0.5">
          {Product.category || Product.brand}
        </p>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-red-600 mb-1 leading-tight">
          {Product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-2 line-clamp-2">
          {Product.description}
        </p>

        {/* Price */}
        <p className="text-gray-900 font-bold text-base">
          ${Number(Product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Product;