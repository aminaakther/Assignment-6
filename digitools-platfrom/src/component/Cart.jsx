import React from 'react';

const Cart = () => {
    return (
        <section className="py-16 px-4 text-center">
  <div className="max-w-3xl mx-auto">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
      Premium Digital Tools
    </h2>

    {/* Subtitle */}
    <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed">
      Choose from our curated collection of premium digital products designed 
      to boost your productivity and creativity.
    </p>

    {/* Filter Buttons / Tabs */}
    <div className="inline-flex items-center bg-white border border-slate-100 rounded-full p-1.5 shadow-sm">
      {/* Products Button (Active) */}
      <button className="px-8 py-2.5 rounded-full bg-[#8b2cf5] text-white text-sm font-medium transition-all">
        Products
      </button>

      {/* Cart Button */}
      <button className="px-8 py-2.5 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">
        Cart (2)
      </button>
    </div>
  </div>
</section>
    );
};

export default Cart;