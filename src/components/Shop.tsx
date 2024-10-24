import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Power Gym T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Apparel'
  },
  {
    name: 'Premium Shaker Bottle',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1620188526357-ff08e03a254c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  },
  {
    name: 'Resistance Bands Set',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Equipment'
  },
  {
    name: 'Gym Duffel Bag',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'Accessories'
  }
];

const Shop = () => {
  return (
    <section id="shop" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Power Gym <span className="text-red-600">Shop</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get the latest gym merchandise, supplements, and training equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-gray-900 rounded-lg overflow-hidden group"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-red-600">{product.category}</span>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white font-bold">${product.price}</span>
                  <button className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#shop"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;