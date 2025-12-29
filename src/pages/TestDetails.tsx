
import testtube from "../assets/yellow_testtube.png"

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { useCart } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft, Info } from "lucide-react";
import { Header } from "@/components/Header";
// Note: useParams is not needed based on your current component logic

export default function TestDetails() {
  const { state } = useLocation();
   const { slug } = useParams();
  const test = state?.test; // <-- received here
  const navigate = useNavigate();
    // const { addToCart } = useCart(); 


const handleAddToCart = () => {
    // addToCart({
    //   id: test.id,
    //   name: test.name,
    //   price: test.price,
    //   image: testtube,
    // });
    
    // toast({
    //   title: "Added to cart",
    //   description: `${test.name} has been added to your cart.`,
    // });
  };

  // If test data is not found, render the fallback message.
  if (!test) {
    return (
      <div className="container mx-auto py-20 px-4">
        <p className="text-center text-xl font-semibold">Test not found.</p>
        <div className="text-center">
          <button
            className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="w-full">
      <Header />
        {/* Back button, slightly refined */}
        <div className="container mx-auto px-2  md-px-auto"> 
            <button
                onClick={() => navigate(-1)}
                className="mb-8 px-4 py-2 text-lg text-gray-700 hover:text-black transition mt-4 md:mt-12 font-bold flex items-center"
            >
                <ChevronLeft /> Back
            </button>
            <div className="container mx-auto py-2 md:py-10 px-4 max-w-4xl">
            {/* Main Content Area */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
                
                {/* Left Side: Icon */}
                <div className="w-[100px] md:w-[130px] flex justify-center md:justify-start ">
                <img src={testtube} alt="" />
                </div>

                {/* Right Side: Details */}
                <div className="md:flex-1">
                
                {/* Category: Black background, white text, uppercase */}
                <div className="bg-black text-white text-xs font-semibold uppercase px-2 py-1 inline-block mb-4 tracking-wider">
                    {test.category}
                </div>

                {/* Name and Price */}
                <h1 className="text-2xl md:text-4xl font-bold mb-0">{test.name}</h1>
                <p className="text-2xl font-normal mt-0 mb-6 text-gray-800">${test.price.toFixed(2)}</p>

                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                    {test.description}
                </p>

               
                
                {/* Results Timeline (Metadata Section) */}
                <div className="flex items-center text-sm mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6.75a.75.75 0 00.75.75h4.5a.75.75 0 000-1.5h-3.75v-6z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold mr-2">Results Timeline</span>
                    <span className="text-gray-500">Available in 1-2 weeks</span>
                </div>

                {/* Add to Cart Section */}
                <p className="text-lg mb-2 font-bold text-[#181818]">Add to cart</p>
                <div className="flex items-center justify-between p-4 rounded-md border border-[rgba(0,0,0,0.5)] w-full mb-4">
                    {/* Price Input Look-alike */}
                    <div className="flex-1 py-3 bg-white text-lg font-semibold border-gray-300">
                    ${test.price.toFixed(2)}
                    </div>
                    {/* Add to Cart Button */}
                    <Button 
                    // onClick={() => handleAddToCart(test)}
                    className="px-6 py-3 bg-[#e9ff00] text-black font-semibold hover:bg-gray-800 transition">
                    Add to Cart
                    </Button>
                </div>

                {/* Specialist Callout (Yellow box at the bottom) */}
                <div className=" flex items-start ">
                    <div className="bg-black p-[14px] flex items-start text-white ">
                        <Info  />
                    </div>
                        <p className="ml-3 text-sm font-medium">
                        Have questions about this medication? Talk to our Client Success Specialist — <br />
                        <a href="#" className="font-bold underline ml-1">Book a free 15-minute call</a>
                        </p>
                    
                    </div>
                </div>
            </div>
            </div>
        </div> 
    </div>
  );
}