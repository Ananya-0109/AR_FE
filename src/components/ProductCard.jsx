import React from 'react';

const ProductCard = ({ product }) => {
  const handleRequestQuote = () => {
    const message = `I'm interested in ${product.name}. Please provide a quote.`;
    const phoneNumber = "+15551234567";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <button 
              onClick={handleRequestQuote}
              className="w-full bg-white/90 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-white transition-colors duration-200"
            >
              Request Quote
            </button>
          </div>
        </div>
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${
          product.category === 'storage' ? 'bg-blue-500' :
          product.category === 'mounting' ? 'bg-green-500' :
          product.category === 'equipment' ? 'bg-amber-500' :
          'bg-purple-500'
        }`}>
          {product.category}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        {/* Specifications Grid */}
        <div className="space-y-2 mb-4">
          {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex justify-between text-sm">
              <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
              <span className="text-gray-900 font-medium">{value}</span>
            </div>
          ))}
        </div>

        {/* Features */}
        {product.features && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <li key={index} className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 mr-2 text-xs"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleRequestQuote}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200"
          >
            <i className="fas fa-envelope mr-1"></i>
            Quote
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-semibold transition-colors duration-200">
            <i className="fas fa-info-circle mr-1"></i>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;