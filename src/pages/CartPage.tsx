import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Header } from '../components/Header';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-black text-white">
        <Header />
        <h2 className="text-3xl font-heading font-bold mb-4 mt-20">Your Cart is Empty</h2>
        <p className="text-gray-400 mb-8">Looks like you haven't added any treatments yet.</p>
        <Link 
          to="/" 
          className="bg-white text-black px-8 py-3 font-bold uppercase rounded-sm hover:bg-gray-200 transition"
        >
          Browse Treatments
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.name} className="flex flex-col md:flex-row items-center gap-6 bg-[#111] p-6 rounded-sm border border-[#222]">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-[#222] rounded-sm p-2 flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-heading font-bold mb-1">{item.name}</h3>
                    <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                    <p className="text-lg font-bold text-white">{item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#222] hover:bg-[#333] transition"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-[#222] hover:bg-[#333] transition"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.name)}
                    className="p-2 text-gray-500 hover:text-red-500 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition gap-2">
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-[#111] p-6 rounded-sm border border-[#222] sticky top-24">
              <h3 className="text-xl font-heading font-bold mb-6">ORDER SUMMARY</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span className="text-white font-bold">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-[#222] pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  const ids = cartItems
                    .map(item => item.id)
                    .filter(id => id) // remove undefined/null
                    .join(',');
                  
                  if (ids) {
                    window.location.href = `https://checkout.ignite-rx.com/?id=${ids}`;
                  } else {
                    // Fallback or alert if no IDs found (e.g. legacy items)
                     window.location.href = `https://checkout.ignite-rx.com/`;
                  }
                }}
                className="w-full bg-white text-black py-4 font-bold uppercase rounded-sm hover:bg-gray-200 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
