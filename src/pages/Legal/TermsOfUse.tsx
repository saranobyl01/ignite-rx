import React from 'react';
import { Header } from '@/components/Header';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,transparent)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            TERMS OF <span className="text-[#f17625]">USE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed font-medium">
            Effective as of January 20, 2026. Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <p className="leading-relaxed font-medium">
                These Terms of Use (“Terms of Use”) are applicable to your access to and use of the IgniteRX website located at <a href="https://igniterx.com" className="text-[#f17625] font-bold hover:underline">igniterx.com</a> (throughout these Terms of Use, and the website may collectively be referred to as the “Site” or may be referred to individually) and any materials, information, products, or services (“Services”) provided through the Site operated by or on behalf of IgniteRX and/or our owners and/or affiliates (collectively “Company,” “our,” “us,” or “we”) or contracted by IgniteRX and provided by a third party (collectively “Third Party”).
              </p>
            </div>

            <section className="space-y-6">
              <p>
                Your access to and use of the Site, and the information and Services available through the Site, are subject to the terms, conditions and notices contained in or referenced in these Terms of Use, as well as any other written agreement between us and you. In addition, when using particular Services on the Site, you will be subject to any posted rules applicable to those Services that may contain terms and conditions in addition to those in these Terms of Use.
              </p>
              <p>
                By accessing or using the Site, you agree to these Terms of Use, as updated from time to time. Please read them carefully. If you do not understand or agree to be bound by these Terms of Use, do not access or use the Site or Services. We may revise these Terms of Use at any time and any revisions will take effect immediately upon posting on this Site, unless we state otherwise. Please check this Site periodically for updates.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Privacy Policy</h2>
              <p>
                The IgniteRX Privacy Policy and California Privacy Notice are part of these Terms of Use and are incorporated into the Terms of Use by this reference. By accepting these Terms of Use, you agree to our collection, use, and disclosure of information as described in the Privacy Policy and California Privacy Notice as modified from time to time. We encourage you to review the Privacy Policy and California Privacy Notice at <a href="https://igniterx.com/privacy" className="text-[#f17625] font-bold hover:underline">igniterx.com/privacy</a> and <a href="https://igniterx.com/ccpa" className="text-[#f17625] font-bold hover:underline">igniterx.com/ccpa</a>
              </p>
            </section>

            <section className="space-y-6 bg-red-50 p-8 rounded-2xl border border-red-100 italic">
              <h2 className="text-2xl font-black text-red-900 uppercase tracking-wider border-l-4 border-red-500 pl-4 not-italic">Not Medical Advice</h2>
              <p className="font-bold text-red-800">
                The contents of the Site and Services are for informational purposes only and are intended to assist you in understanding your health. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p className="font-black text-red-900 uppercase">
                ALWAYS SEEK THE ADVICE OF YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDERS WITH ANY QUESTIONS YOU MAY HAVE REGARDING A MEDICAL CONDITION.
              </p>
              <p className="text-red-800">
                WE ASSUME NO LIABILITY OR RESPONSIBILITY FOR DAMAGES OR INJURY TO PERSONS OR PROPERTY ARISING FROM ANY USE OF ANY MATERIALS, CONTENTS, PRODUCTS, SUPPLIES, INFORMATION, IDEAS, OR ADVICE CONTAINED IN THE APP, IgniteRX, AND/OR SERVICES.
              </p>
              <p className="text-red-800">
                You acknowledge and agree that certain Services provided through the Site and Services, depend on information that you input into the Site. We do not recommend or endorse any drug or product or course of treatment.
              </p>
              <p className="text-red-800 font-bold">
                YOU ARE ADVISED TO ALWAYS SEEK THE ADVICE OF YOUR DOCTOR OR OTHER QUALIFIED HEALTHCARE PROVIDER REGARDING ANY MEDICAL CONDITION AND BEFORE STARTING ANY NEW TREATMENT OR ALTERING YOUR EXISTING TREATMENT. THE APP, IgniteRX, AND THE SERVICES ARE NOT INTENDED AS A SUBSTITUTE FOR PROFESSIONAL ADVICE FROM A QUALIFIED HEALTHCARE PROVIDER FAMILIAR WITH YOU AND YOUR UNIQUE MEDICAL HISTORY. YOU UNDERSTAND AND AGREE THAT YOU SHALL NOT DISREGARD PROFESSIONAL MEDICAL ADVICE OR DELAY SEEKING PROFESSIONAL MEDICAL ADVICE BECAUSE OF SOMETHING YOU READ OR LEARNED FROM THE APP, IgniteRX, AND/OR THE SERVICES.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Our Services</h2>
              <p>
                Services offered through the Site are NOT health insurance benefits or policies and are not intended as a substitute for health insurance. By ordering from <a href="https://igniterx.com" className="text-[#f17625] font-bold hover:underline">igniterx.com</a> you agree that you may not submit a claim for telemedicine services provided to Medicare, any other federal payor, or any state or private payor. 
              </p>
              <p>
                While there may be a preferred pharmacy used, patient has the ability to direct their prescription to any pharmacy of their choosing. Please email <a href="mailto:info@igniterx.com" className="text-[#f17625] font-bold hover:underline">info@igniterx.com</a> if you would like to use your own pharmacy before completing your order.
              </p>
              <p>
                There is no guarantee that a patient will be treated by a provider. As determined by the provider, care or specific treatments may not be appropriate for each patient. Each provider reserves the right to deny care for potential misuse of services or for any other reason if, in the professional judgment of the provider, the provision of services is not medically or ethically appropriate. There is no guarantee that a patient will be issued a prescription and that the decision of whether a prescription is appropriate will be made in the professional judgment of the provider.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Important Contact Information by State</h2>
              
              <div className="grid gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-lg mb-2 uppercase">Florida Bill of Rights for Weight Loss</h3>
                  <a href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0500-0599/0501/Sections/0501.0575.html" className="text-[#f17625] break-all hover:underline">Statute Index</a>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-lg mb-2 uppercase">California Notice to Consumers</h3>
                  <p className="mb-2">Medical doctors are licensed and regulated by the Medical Board of California.</p>
                  <p className="font-bold">(800) 633-2322 | <a href="https://www.mbc.ca.gov/" className="text-[#f17625] hover:underline">www.mbc.ca.gov</a></p>
                  <p className="mt-2 text-sm text-gray-500">Address: 2005 Evergreen Street, Suite 1200, Sacramento, CA 95815</p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-lg mb-2 uppercase">Texas</h3>
                  <p className="mb-4">Complaints about physicians may be reported to the Texas Medical Board:</p>
                  <p className="text-sm">Attention: Investigators, 333 Guadalupe, Tower 3, Suite 610, P.O Box 2018, MC-263, Austin, TX 78768-2018</p>
                  <p className="mt-2 font-bold">1-800-201-9353 | <a href="https://www.tmb.state.tx.us" className="text-[#f17625] hover:underline">www.tmb.state.tx.us</a></p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-black text-lg mb-2 uppercase">Kansas</h3>
                  <p className="mb-4">Questions regarding professional practice may be directed to:</p>
                  <p className="text-sm">Kansas State Board Of Healing Arts, 800 SW Jackson, Lower Level-Suite A, Topeka, Kansas 66612</p>
                  <p className="mt-2 font-bold">Phone: (785) 296-7413 | <a href="https://www.ksbha.org" className="text-[#f17625] hover:underline">www.ksbha.org</a></p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Electronic Communications</h2>
              <p>
                By using the Services, you are consenting to be contacted with prescription-related information and to receive communications from us electronically by SMS or text messages, emails or by posting notices on the site. SMS consent will not be shared with third party providers. 
              </p>
              <p className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
                You acknowledge that texting and email are not secure methods of communication and that there may be some risk that the information in the communication(s) could be read by an unauthorized third party.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">IgniteRx Intellectual Property</h2>
              <p>
                All content included in, or made available through, the Site, such as text, graphics, logos, designs, data, and software, is the property of Company or its content suppliers and protected by United States and international copyright laws. You may not modify, copy, distribute, or create derivative works from any information or work contained on the Site.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">Disclaimer of Warranties</h2>
              <p className="font-bold text-sm uppercase tracking-tight text-gray-900">
                WE PROVIDE ACCESS TO IGNITERX.COM, THE APP, AND SERVICES “AS IS” AND WITHOUT ANY WARRANTY OR CONDITION, EXPRESS, IMPLIED OR STATUTORY. WE SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <section className="space-y-6 border-t pt-12">
              <h2 className="text-2xl font-black text-black uppercase tracking-wider">Contact Us</h2>
              <p>
                If you have any questions or concerns about the Site or these Terms of Use, please contact us at:
              </p>
              <a href="mailto:info@igniterx.com" className="inline-block text-2xl font-black text-[#f17625] hover:scale-105 transition-transform">
                info@igniterx.com
              </a>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsOfUse;
