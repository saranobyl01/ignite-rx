import React from 'react';
import { Header } from '@/components/Header';
import { Mail, Phone, MapPin } from 'lucide-react';

const ReturnsRefunds = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,transparent)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            RETURNS & <span className="text-[#f17625]">REFUND POLICY</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed font-medium">
            We strive to provide the highest level of quality healthcare and patient care. Learn about our return and refund policies.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 shadow-sm">
              <p className="leading-relaxed font-medium text-blue-900">
                At IgniteRx we strive to provide the highest level of quality healthcare which includes frictionless access to medical providers and medications at prices that are affordable and accessible. We also make every effort to provide the highest level of patient care before and after the sale.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <p className="font-bold text-blue-900">If you have an issue with your order or product, please reach out:</p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+18448206625" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline">
                    <Phone size={16} />
                    +1 (844) 820-6625
                  </a>
                  <a href="mailto:info@igniterx.com" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline">
                    <Mail size={16} />
                    info@igniterx.com
                  </a>
                </div>
              </div>
            </div>

            <section className="space-y-8">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Policy Categories</h2>
              <p className="text-lg">Below are our categories and how we can help you after the sale:</p>

              {/* Prescription Medications */}
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-black text-red-900 uppercase mb-4 flex items-center gap-3">
                  <span className="bg-red-900 text-white px-3 py-1 rounded-lg text-sm">1</span>
                  Prescription Medications
                </h3>
                <div className="space-y-4 text-red-900">
                  <p className="font-bold">
                    State and Federal regulations do not allow the return of prescription medications after being dispensed by the pharmacy.
                  </p>
                  <p>
                    Once your method of payment has been charged and your package has been handed over to the carrier (USPS, FedEx, UPS), <strong>all sales are final</strong>.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-red-300">
                    <p className="font-bold text-red-900 mb-2">Before Your Products Ship:</p>
                    <p className="text-sm">
                      You can always login to your <a href="https://igniterx.com" className="text-[#f17625] font-bold hover:underline">igniterx.com</a> account before your products ship to:
                    </p>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                      <li>Change your address</li>
                      <li>Update your method of payment</li>
                      <li>Cancel your subscription</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-300">
                    <p className="font-bold text-yellow-900 mb-2">Damaged or Lost Items:</p>
                    <p className="text-sm text-yellow-900">
                      If your prescription medication arrives damaged or is lost during transit, please contact our patient care team:
                    </p>
                    <div className="flex flex-col gap-2 mt-3">
                      <a href="tel:+18448206625" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Phone size={14} />
                        +1 (844) 820-6625
                      </a>
                      <a href="mailto:info@igniterx.com" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Mail size={14} />
                        info@igniterx.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Non-Prescription Products */}
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-black text-green-900 uppercase mb-4 flex items-center gap-3">
                  <span className="bg-green-900 text-white px-3 py-1 rounded-lg text-sm">2</span>
                  Non-Prescription (Over The Counter) Products
                </h3>
                <div className="space-y-4 text-green-900">
                  <p className="font-bold">
                    IgniteRx may accept returns on unopened, non-prescription items up to 30 days after the sale.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-green-300">
                    <p className="font-bold text-green-900 mb-2">Return Requirements:</p>
                    <ul className="list-disc ml-6 text-sm space-y-2">
                      <li>You will be responsible to pay the return shipping cost</li>
                      <li>We do not accept COD returns</li>
                      <li>Items must be unopened and in original condition</li>
                      <li>Products must not appear tampered with or opened</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-300">
                    <p className="font-bold text-blue-900 mb-2">To Initiate a Return:</p>
                    <p className="text-sm text-blue-900 mb-3">
                      Please contact our patient care team and include:
                    </p>
                    <ul className="list-disc ml-6 text-sm space-y-1 text-blue-900">
                      <li>Your order number</li>
                      <li>Reason for the return</li>
                      <li>Product name</li>
                    </ul>
                    <div className="flex flex-col gap-2 mt-4 pt-3 border-t border-blue-200">
                      <a href="tel:+18448206625" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Phone size={14} />
                        +1 (844) 820-6625
                      </a>
                      <a href="mailto:info@igniterx.com" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Mail size={14} />
                        info@igniterx.com
                      </a>
                    </div>
                  </div>
                  <p className="text-sm italic">
                    IgniteRx reserves the right to deny a return that does not arrive in the original condition it was shipped or if the products appear to be tampered with or opened. After we receive the returned product and it is approved by our IgniteRx team, your purchase price will be refunded to your original method of payment.
                  </p>
                </div>
              </div>

              {/* Lost Packages */}
              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-black text-purple-900 uppercase mb-4 flex items-center gap-3">
                  <span className="bg-purple-900 text-white px-3 py-1 rounded-lg text-sm">3</span>
                  Lost Packages
                </h3>
                <div className="space-y-4 text-purple-900">
                  <p className="font-bold">
                    In the rare case your package is lost in transit, IgniteRx will reship your prescription or non-prescription order.
                  </p>
                  <div className="bg-white p-5 rounded-xl border border-purple-300">
                    <p className="font-bold text-purple-900 mb-2">Our Process:</p>
                    <ul className="list-disc ml-6 text-sm space-y-2">
                      <li>We will work with your carrier (USPS, FedEx, UPS) to locate your package first</li>
                      <li>We can have it redirected if needed</li>
                      <li>Weather may delay your package delivery time</li>
                      <li>Since we currently do not ship refrigerated products, your product will not be affected by increased transit time</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-300">
                    <p className="font-bold text-yellow-900 mb-2">If Your Package is Lost:</p>
                    <p className="text-sm text-yellow-900 mb-3">
                      If your package is lost in transit or does not arrive at the shipping address you provided, please contact our patient care team:
                    </p>
                    <div className="flex flex-col gap-2">
                      <a href="tel:+18448206625" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Phone size={14} />
                        +1 (844) 820-6625
                      </a>
                      <a href="mailto:info@igniterx.com" className="flex items-center gap-2 text-[#f17625] font-bold hover:underline text-sm">
                        <Mail size={14} />
                        info@igniterx.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Return Address */}
            <section className="border-t pt-12">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4 mb-8">Return Address</h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f17625] p-3 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-black text-lg mb-3">IgniteRx/Manifest Pharmacy</p>
                    <div className="text-sm space-y-1">
                      <p>7901 4th Street North</p>
                      <p>Suite 300</p>
                      <p>St Petersburg, FL 33702</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl text-white">
              <h3 className="text-2xl font-black mb-6 uppercase">Need Assistance?</h3>
              <p className="mb-6 text-gray-300">
                Our patient care team is here to help with any questions or concerns about your order.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:+18448206625" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl">
                  <Phone size={20} className="text-[#f17625]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Call Us</p>
                    <p className="font-bold">+1 (844) 820-6625</p>
                  </div>
                </a>
                <a href="mailto:info@igniterx.com" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-4 rounded-xl">
                  <Mail size={20} className="text-[#f17625]" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Email Us</p>
                    <p className="font-bold">info@igniterx.com</p>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ReturnsRefunds;
