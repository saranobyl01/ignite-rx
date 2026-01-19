import React from 'react';
import { Header } from '@/components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,transparent)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            PRIVACY <span className="text-[#f17625]">POLICY</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-medium">
            Effective as of January 20, 2026. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="leading-relaxed font-medium">
                This privacy policy ("Privacy Policy") describes how IgniteRx and/or our owners and/or affiliates (collectively "Company," "our," "we," or "us") collect, use, disclose, and protect information about you provide through the IgniteRx website located at <a href="https://igniterx.com" className="text-[#f17625] font-bold hover:underline">igniterx.com</a>. (together, the "Site"). This Privacy Policy applies only to information that is collected in connection with your use of the Site. It does not apply to any other offerings, products or services.
              </p>
              <p className="mt-4 leading-relaxed font-medium">
                If you do not want us to collect, use or disclose information about you and your use of the Site as described in this Privacy Policy, then you should not use the Site. By using the Site, you are accepting the practices set out in this Privacy Policy and our Terms of Use.
              </p>
            </div>

            <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-900">
                If you are a resident of California, please see our California Privacy Notice available here.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">About the Site</h2>
              <p>
                The Site gathers several types of information from and about users of the Site, including medication information, geographic location and user preferences. Among other things, this allows the Site to:
              </p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Check the prices of your medication at multiple pharmacies near you;</li>
                <li>Show you comparable prices for your medication using information received from third parties;</li>
                <li>Send you a discount card if requested; and</li>
                <li>Provide coupons for your use at the pharmacy of your choice.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Categories of Information We Collect</h2>
              <p>
                The information we collect from or about you allows us to provide our services and helps us personalize and improve your experience on the Site. You may print or download a discount card to use our service without registering with us or creating an account. Depending on how you use the Site, we may collect the following categories of information directly from you:
              </p>
              
              <div className="grid gap-4 mt-6">
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-black text-sm uppercase mb-2 text-gray-900">Medication Information</h3>
                  <p className="text-sm">Information about medications you are seeking to fill (such as medication names and dosage) and your preferred pharmacy.</p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-black text-sm uppercase mb-2 text-gray-900">Purchase Transactions</h3>
                  <p className="text-sm">Information about your purchase transactions, including purchases using our discount card, including drug name and pharmacy location.</p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-black text-sm uppercase mb-2 text-gray-900">Geographic Location</h3>
                  <p className="text-sm">Geographic location information from you or your device, including your geolocation data, zip code, region, city, street address, time zone, latitude and longitude information. Please note that we will not access precise geo-location information from your device, unless you grant the Site permission to do so.</p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-black text-sm uppercase mb-2 text-gray-900">Technical Data</h3>
                  <p className="text-sm">Technical data and related information, such as information about your device, system and application software, peripherals and other data related to your interactions with the Site.</p>
                </div>
              </div>

              <p className="mt-6">
                When you use the Site, we automatically collect some categories of information from you, such as information about your use of the Site (e.g., features used, content viewed, dates and times of interactions) and technical data about your device, such as operating system, model, device identifier, and IP address.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">How We Use the Information We Collect</h2>
              <p>Information we collect about you may be used for the following purposes:</p>
              <ul className="space-y-3 ml-6 list-disc">
                <li>Operating the Site, including to provide you the Service features.</li>
                <li>To provide you the information and services you request when you use the Site.</li>
                <li>To customize your experience when you use the Site, for example to provide you with interactive or personalized elements or provide you with content based on your interests, requests, and location.</li>
                <li>Improve the Site and other Company products or services, including by developing new products and services, perform quality control activities, and conduct data analytics.</li>
                <li>Provide account management, patient care, customer service, and engaging in system maintenance.</li>
                <li>Deliver marketing communications, such as promotional materials or advertisements.</li>
                <li>Detect, prevent, and respond to suspected fraud, intellectual property infringement, violations of our Terms of Use, violations of law, or other misuse of the Site.</li>
                <li>Perform data analytics, including to compile, synthesize, generate and analyze anonymous usage and other aggregated statistics and information.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">How We Share Information We Collect</h2>
              <p>Your information may be disclosed to the following third parties:</p>
              
              <div className="space-y-4 mt-6">
                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-sm uppercase mb-2">Pharmacies and Partners</h3>
                  <p className="text-sm">Pharmacies and other partners who help us provide the services available through the Site to you.</p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-sm uppercase mb-2">Business Partners</h3>
                  <p className="text-sm">Business partners, who may deliver marketing communications, promotional markets, advertisements, or other information. You will be given the option to opt out of marketing messages.</p>
                </div>
                
                <div className="p-5 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-sm uppercase mb-2">Service Providers</h3>
                  <p className="text-sm">Service providers who work on our behalf or partner with us to provide or improve the Site or related products or services. Our service providers are required to agree to protect your personal information consistent with this Privacy Policy.</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mt-6">
                <p className="text-sm font-bold text-yellow-900">
                  <strong>Note:</strong> All other use case categories exclude text messaging origination opt-in data and consent; this information will not be shared with any third parties.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Information Security</h2>
              <p>
                We take reasonable steps to protect your personal information, which is any information that identifies you or could reasonably be linked to you. We also use encryption technology, called Secure Sockets Layer (SSL), to help protect personal information in certain areas of our Site during transport across the Internet.
              </p>
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <p className="text-sm text-red-800">
                  Unfortunately, there is always some risk that an unauthorized third party may find a way around our security measures. We cannot guarantee that the Internet or any other technical system will be 100% secure or error-free. Please note that e-mails and other communications you send to us are not encrypted, and by communicating with us by email you accept the risk that any personal information contained in the email may be intercepted or accessed by unauthorized parties.
                </p>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Your Choices</h2>
              <p>
                You may opt out of receiving marketing emails by using the unsubscribe information available in any marketing email, or by emailing us at <a href="mailto:info@igniterx.com" className="text-[#f17625] font-bold hover:underline">info@igniterx.com</a>. To the extent that you use the Site, there are certain messages you may not opt out of receiving, such as non-promotional email messages about programs or services you have registered for or certain administrative, technical, or safety notices about the Site or our products or services.
              </p>
              <p className="text-sm bg-gray-50 p-4 rounded-xl">
                The Site does not currently respond to "do not track" signals or other mechanisms that provide a method to opt out of the collection of information over time and across websites. Visit <a href="https://www.allaboutdnt.org" className="text-[#f17625] font-bold hover:underline">www.allaboutdnt.org</a> for more information.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Information About Minors</h2>
              <p className="font-bold">
                The Site is intended for adults only and are not directed to, nor do we knowingly collect information from, individuals under the age of 18. If you become aware that your child or any individual under your care who is under the age of 18 has provided us with information without your consent, please contact us at the contact information listed below.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">California Residents</h2>
              <p>
                Pursuant to California Civil Code Section 1798.83, if you are a California resident, you have the right to request information about how and to whom we disclose certain categories of your personal information for their direct marketing purposes, once per calendar year.
              </p>
              <p className="font-bold">
                If you are a resident of California, please see our California Privacy Notice for additional provisions that apply to you.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Cookies and Similar Tools</h2>
              <p>
                We use cookies to collect, store and sometimes track information from your computer or mobile device automatically for statistical purposes to improve the Site. A cookie is a unique numeric code that we transfer to your computer that lets us know your location, the information visited while on our website and the third-party websites you visited before accessing our website.
              </p>
              <p className="text-sm bg-blue-50 p-4 rounded-xl border border-blue-100">
                For example, we use Google Analytics, a web analytics service provided by Google, Inc. to collect information relating to your use of the Site. You can find out more about how Google uses data by visiting <a href="https://policies.google.com/technologies/partner-sites" className="text-[#f17625] font-bold hover:underline">Google's partner sites policy</a>.
              </p>
              <p>
                If you prefer not to receive cookies from the Site, then set your browser to refuse all cookies. However, it is possible that some portions of the Site will not function properly or may perform more slowly. By using our Site and not disabling cookies, you consent to their use.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Changes and Updates</h2>
              <p>
                We may make changes to our Privacy Policy from time to time. When we do so, we will post the revised Privacy Policy on our Site and change the "last updated" date. Please check the "last updated" date at the top of this page to determine if the policy has been modified since you last reviewed it. Your continued use of the Site after that date means you agree to this Privacy Policy and any updates.
              </p>
            </section>

            <section className="space-y-6 border-t pt-12">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl space-y-3">
                <p className="font-bold">
                  <a href="mailto:info@igniterx.com" className="text-[#f17625] hover:underline">info@igniterx.com</a>
                </p>
                <p className="font-bold">
                  Phone: <a href="tel:+18448206625" className="text-[#f17625] hover:underline">+1 (844) 820-6625</a>
                </p>
                <div className="text-sm pt-2 border-t border-gray-200">
                  <p className="font-bold">Mailing Address:</p>
                  <p>Attn: Privacy Team/Regulatory Compliance</p>
                  <p>IgniteRx</p>
                  <p>7901 4th Street North, Suite 300</p>
                  <p>St Petersburg, FL 33702</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
