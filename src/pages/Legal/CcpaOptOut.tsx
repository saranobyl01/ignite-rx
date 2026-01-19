import React from 'react';
import { Header } from '@/components/Header';
import { Mail, Shield, CheckCircle, XCircle } from 'lucide-react';

const CcpaOptOut = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,transparent)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            CALIFORNIA PRIVACY <span className="text-[#f17625]">NOTICE</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed font-medium">
            CCPA Opt-Out - Your California Privacy Rights and Choices
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-200 shadow-sm">
              <p className="leading-relaxed font-medium text-blue-900">
                This California Privacy Notice ("Notice") is in addition to, and incorporated into, the Privacy Policy of IgniteRx and its owners and affiliates (collectively, "we," "us," or "our") and applies to personal information that we collect online or offline from California residents ("consumers" or "you" or "your").
              </p>
            </div>

            {/* Information We Collect */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Information We Collect</h2>
              <p>
                We have collected the following categories of personal information from consumers within the last twelve (12) months:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-4 text-left font-black uppercase text-sm">Category</th>
                      <th className="p-4 text-left font-black uppercase text-sm">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">A. Identifiers and Contact Information</td>
                      <td className="p-4 text-sm">Your name, postal address, telephone number or email address.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">B. Medical and Financial Information</td>
                      <td className="p-4 text-sm">Your credit card, debit card or health plan.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">C. Protected Classifications</td>
                      <td className="p-4 text-sm">Age, gender, race, medical condition, disability.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">D. Commercial Information</td>
                      <td className="p-4 text-sm">Records of products or services you have purchased.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">E. Internet or Network Activity</td>
                      <td className="p-4 text-sm">Browsing history, search history, or your interaction with the Website.</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">F. Geolocation Data</td>
                      <td className="p-4 text-sm">Your physical location or movements.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Use of Personal Information */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Use of Personal Information</h2>
              <p>We use this personal information for one or more of the following business purposes:</p>
              
              <ul className="space-y-3 ml-6 list-disc">
                <li>To provide our products and services, such as to process drug claims and, for fulfilling orders.</li>
                <li>To provide patient care, customer service, such as to respond to inquiries and requests, verify your identity, and, to maintain your Account.</li>
                <li>To analyze use of our products and services as well as customize and improve them.</li>
                <li>For marketing, such as to provide you with email alerts about products or services offered by us and/or third parties that may be of interest to you.</li>
                <li>To maintain the security of our products, services and systems, such as detecting security breaches or fraudulent activity.</li>
                <li>To keep our website and other functioning properly, such as debugging and fixing errors.</li>
                <li>To comply with our legal obligations.</li>
                <li>To protect our rights, property, and safety or the rights, property, and safety of others.</li>
              </ul>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200 flex items-center gap-4">
                <XCircle size={32} className="text-green-700 flex-shrink-0" />
                <p className="font-black text-green-900 text-lg">
                  We do not sell your personal information.
                </p>
              </div>
            </section>

            {/* Sharing of Personal Information */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Sharing of Personal Information</h2>
              <p>
                We may share personal information we collect with third parties for a business purpose, such as to pharmacies to fill your prescription, marketing partners, advertising networks, clients that sponsor discount cards, and service providers that helps us operate or provide our services.
              </p>
              <p className="text-sm bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                When we share personal information with our service providers, we require that they agree to protect the personal information and use and disclose it only to provide their services to us and for limited business purposes.
              </p>

              <p className="font-bold mt-6">
                In the past twelve (12) months, we have shared the following categories of personal information for a business purpose with the following categories of third parties:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="p-4 text-left font-black uppercase text-sm">Category</th>
                      <th className="p-4 text-left font-black uppercase text-sm">Third Parties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">A. Identifiers and Contact Information</td>
                      <td className="p-4 text-sm">Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">B. Medical and Financial Information</td>
                      <td className="p-4 text-sm">Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">C. Protected Classifications</td>
                      <td className="p-4 text-sm">Service providers; Pharmacies and other health care providers; Product providers and distributors; Operating systems and platforms; Social networks; Marketing partners; Clients</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">D. Commercial Information</td>
                      <td className="p-4 text-sm">Records of products or services you have purchased.</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">E. Internet or Network Activity</td>
                      <td className="p-4 text-sm">Service providers</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-4 font-bold text-sm">F. Geolocation Data</td>
                      <td className="p-4 text-sm">Service providers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Your Rights and Choices */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Your Rights and Choices</h2>
              <p>This section describes your privacy rights and explains how to exercise them.</p>

              <div className="grid gap-6">
                {/* Right to Know */}
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield size={24} className="text-purple-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-black text-purple-900 uppercase">Right to Know</h3>
                  </div>
                  <p className="text-sm text-purple-900 mb-3">
                    You have the right to know, subject to certain exceptions, the following about the personal information we collected about you over the past 12 months:
                  </p>
                  <ul className="list-disc ml-6 text-sm space-y-1 text-purple-900">
                    <li>The categories of the personal information;</li>
                    <li>The categories of sources of the personal information;</li>
                    <li>The business or commercial purpose for collecting that personal information;</li>
                    <li>The categories of personal information shared for a business purpose; and</li>
                    <li>The categories of third parties with whom the personal information is shared.</li>
                  </ul>
                </div>

                {/* Right to Delete */}
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield size={24} className="text-red-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-black text-red-900 uppercase">Right to Delete</h3>
                  </div>
                  <p className="text-sm text-red-900">
                    You have the right to request that we delete the personal information that we collected from you, subject to certain exceptions.
                  </p>
                </div>

                {/* Right to Opt-Out */}
                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle size={24} className="text-green-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-black text-green-900 uppercase">Right to Opt-Out of the Sale of Personal Information</h3>
                  </div>
                  <p className="text-sm text-green-900 font-bold">
                    You have the right to opt-out of the sale of your personal information. We do not sell personal information.
                  </p>
                </div>

                {/* Right to Non-Discrimination */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <Shield size={24} className="text-blue-700 flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-black text-blue-900 uppercase">The Right to Non-Discrimination</h3>
                  </div>
                  <p className="text-sm text-blue-900">
                    You have the right not to be discriminated against for exercising these rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Submitting Requests */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Submitting Requests to Know and Delete Personal Information</h2>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <p className="font-bold mb-4">You may submit a request to know or delete by:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Mail size={20} className="text-[#f17625]" />
                    <div>
                      <p className="text-sm font-bold">Email us:</p>
                      <a href="mailto:info@igniterx.com" className="text-[#f17625] font-bold hover:underline">info@igniterx.com</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                    <Shield size={20} className="text-[#f17625]" />
                    <div>
                      <p className="text-sm font-bold">Visit our website:</p>
                      <a href="https://igniterx.com/contact-us" className="text-[#f17625] font-bold hover:underline">igniterx.com/contact-us</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 space-y-4 text-sm">
                <p className="font-bold text-yellow-900">Verification Process:</p>
                <p>
                  To process your request, we must be able to verify your identity i.e., confirm that the person making the request is the person about whom we collected the personal information, or is someone authorized to act as the authorized agent on that person's behalf.
                </p>
                <p>
                  You may designate an authorized agent to make a request on your behalf. When you use an authorized agent to submit a request for access or deletion, you must provide the authorized agent with written permission to do so.
                </p>
                <p className="font-bold">
                  You may only make a request to know or delete your personal information twice within a 12-month period.
                </p>
              </div>
            </section>

            {/* Response Timing */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Response Timing and Format</h2>
              <p>
                We will confirm receipt of your request to know or delete within <strong>10 business days</strong> and will provide information on how we will process your request, including our verification process and when you can expect a response.
              </p>
            </section>

            {/* Changes to Notice */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Changes to Our Privacy Notice</h2>
              <p>
                We may change this Notice at any time, but we will not use personal information that we have already collected for a new purpose that is materially different from those stated in our Notice at the time that personal information was collected without first obtaining your explicit consent to use it for the new purpose.
              </p>
            </section>

            {/* Contact Information */}
            <section className="border-t pt-12">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider mb-8">Contact Information</h2>
              <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl text-white">
                <p className="mb-6 text-gray-300">
                  If you have any questions or concerns about this Privacy Notice, our privacy policies and practices, you may contact us at:
                </p>
                <div className="bg-white/10 p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail size={20} className="text-[#f17625]" />
                    <a href="mailto:info@igniterx.com" className="text-[#f17625] font-bold hover:underline text-lg">info@igniterx.com</a>
                  </div>
                  <div className="text-sm space-y-1 border-t border-white/20 pt-4">
                    <p className="font-bold">IgniteRx</p>
                    <p>7901 4th Street North, Suite 300</p>
                    <p>St Petersburg, FL 33702</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CcpaOptOut;
