import React from 'react';
import { Header } from '@/components/Header';

const HipaaNotice = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#1e1b4b,transparent)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            HIPAA NOTICE OF <span className="text-[#f17625]">PRIVACY PRACTICES</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed font-medium">
            This notice describes how medical information about you may be used and disclosed and how you can get access to this information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-12">
            
            <div className="bg-red-50 p-8 rounded-2xl border border-red-200 shadow-sm">
              <p className="leading-relaxed font-black text-red-900 uppercase text-center">
                THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY
              </p>
            </div>

            <section className="space-y-6">
              <p>
                When this Notice of Privacy Practices ("Notice") refers to "we" or "us," it is referring to IgniteRx and all the pharmacists who provide health care services and the employees of our pharmacy. We are required by law to maintain the privacy of your protected health information ("PHI"), to follow the terms of the Notice currently in effect, to give you this Notice setting forth our legal duties and privacy practices concerning your PHI and to notify affected individuals following a breach of unsecured PHI.
              </p>
              <p>
                This Notice describes how we may use and disclose your PHI. Additionally, this Notice explains the rights you have with respect to your PHI, and certain obligations we must abide by in accordance with the law. We reserve the right to amend this Notice. If we make any material revisions to this Notice, we will post a copy of the revised Notice in the pharmacy, on our website and will offer you a copy of the revised Notice.
              </p>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">I. Use and Disclosure of Your PHI</h2>
              <p>
                We will use and disclose your PHI for treatment, payment and health care operations. We may also use your PHI for other purposes that are permitted and/or required by law and pursuant to your written authorization. The following lists examples of how we may use and/or disclose your PHI. Any other uses not described in this Notice will only be made with your explicit written authorization, which you may revoke at any time by providing us with written notice of your revocation.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-gray-900">A. Treatment</h3>
                  <p className="text-sm">
                    We may use and disclose your PHI in order to provide you with prescription and supply services. We may disclose your PHI to other pharmacists, pharmacy technicians and health care providers that are involved in your care. You will receive an individual notice and have the opportunity to opt out of any subsidized treatment communications.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-gray-900">B. Payment</h3>
                  <p className="text-sm">
                    We will use and disclose your PHI in order to obtain payment for the health care services we provide to you. We may also need to disclose your PHI to receive prior approval from your health plan or to determine if your health plan will cover a certain prescription or service.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-gray-900">C. Health Care Operations</h3>
                  <p className="text-sm">
                    We may use and disclose your PHI in connection with the management of our pharmacy. For example, this may include: quality assessment and improvement, internal compliance audits, and performance evaluations. Additionally, we may use your PHI for our business management and general administrative activities.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-gray-900">D. Prescription Refill Reminders</h3>
                  <p className="text-sm">
                    We may use and disclose your PHI to contact you to remind you about prescription refills, to tell you about treatment options or alternatives, or to inform you about health-related benefits or services that may be of interest to you.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-gray-900">E. Family Members, Relatives or Close Friends</h3>
                  <p className="text-sm">
                    Unless you object to such disclosure, we may disclose your PHI to your family members, relatives or close personal friends, or any other persons identified by you as being involved in the treatment or payment for your medical care. If you are not present to agree or object to our disclosure of your PHI to a family member, relative or friend, we may exercise our professional judgment to determine whether the disclosure is in your best interest.
                  </p>
                </div>

                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-blue-900">F. Other Permitted and Required Uses and Disclosures</h3>
                  <p className="text-sm mb-4 font-bold text-blue-900">
                    We may use your PHI without obtaining your authorization and without offering you the opportunity to agree or object as follows:
                  </p>
                  <ul className="space-y-2 text-sm list-disc ml-5">
                    <li>As required by law, provided however, that the use or disclosure will be made in compliance with applicable law;</li>
                    <li>To a public health authority that is authorized by law to collect or receive such information;</li>
                    <li>To a health oversight agency for oversight activities authorized by law;</li>
                    <li>For judicial or administrative proceedings purposes in response to a subpoena, court order, discovery request, etc.;</li>
                    <li>To law enforcement to report certain injuries, comply with court orders or warrants;</li>
                    <li>To a coroner or medical examiner to perform duties authorized by law;</li>
                    <li>To funeral directors, consistent with applicable law;</li>
                    <li>To organ procurement organizations for the purpose of facilitating organ, eye or tissue donation;</li>
                    <li>For research purposes provided that certain approvals take place and assurances are given;</li>
                    <li>To avert a serious threat to health or safety;</li>
                    <li>For military and veterans activities;</li>
                    <li>For national security and intelligence activities;</li>
                    <li>For protection of the President and other authorized persons;</li>
                    <li>To a correctional institution or law enforcement custodian if you are an inmate; and</li>
                    <li>To the extent necessary to comply with laws relating to workers' compensation.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">II. Your Rights as Our Patient</h2>
              <p>
                As our patient, you have a number of rights associated with your PHI. The following describes your specific rights.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">A. Right to Request Restrictions</h3>
                  <p className="text-sm">
                    You have the right to request restrictions or limitations on how we use and/or disclose your PHI, however, we do not have to agree to your requested restriction or limitation (except for transactions you paid for in full out-of-pocket). Your written request must specify: (1) if you would like to restrict or limit our use and/or disclosure; (2) what information you want restricted or limited; and (3) to whom the restriction or limitation applies.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">B. Right to Confidential Communications</h3>
                  <p className="text-sm">
                    You have the right to receive confidential communications concerning your PHI by alternative means or via alternative locations. For example, you may want to receive communications related to your prescriptions at a different address other than your home address. We will accommodate all reasonable requests.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">C. Right to Access and Copy</h3>
                  <p className="text-sm">
                    You have the right to access, inspect and obtain a copy of your PHI, including any electronic PHI. To the extent we maintain electronic PHI, upon request we will provide you with a copy of your PHI in the format requested. If you request a copy of your PHI, you may be charged a reasonable, cost-based fee to cover copy costs and postage.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">D. Right to Accounting of Disclosures</h3>
                  <p className="text-sm">
                    You have the right to receive an accounting of disclosures of your PHI made by us, including disclosures to or by our business associate(s), for a period of six (6) years prior to the date on which you request an accounting. You will receive one request annually free of charge.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">E. Right to Request Amendment</h3>
                  <p className="text-sm">
                    If you believe we have PHI about you that is incorrect or incomplete, you may make a written request to us stating the reasons to support any requested amendment. You have the right to request an amendment to your PHI for so long as we maintain your PHI.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">F. Right to Paper Copy of Notice</h3>
                  <p className="text-sm">
                    You have the right at any time to obtain a paper copy of this Notice, even if you receive this Notice electronically.
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-black text-lg mb-3 uppercase text-green-900">G. Right to Opt-Out of Fundraising</h3>
                  <p className="text-sm">
                    You have the right to opt-out of fundraising and your PHI will not be used for fundraising purposes or sold without your prior authorization.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6 border-t pt-12">
              <h2 className="text-3xl font-black text-black uppercase tracking-wider border-l-4 border-[#f17625] pl-4">III. Additional Information/Questions or Complaints</h2>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6">
                <div>
                  <h3 className="font-black text-lg mb-3 uppercase">Contact the Privacy Officer</h3>
                  <p className="text-sm mb-4">
                    If you need any additional information about this Notice or wish to exercise any of your rights set forth in this Notice, please contact the Privacy Officer at:
                  </p>
                  <div className="text-sm bg-white p-4 rounded-lg">
                    <p className="font-bold">IgniteRx</p>
                    <p>7901 4th Street North, Suite 300</p>
                    <p>St Petersburg, FL 33702</p>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <h3 className="font-black text-lg mb-3 uppercase text-red-900">File a Complaint</h3>
                  <p className="text-sm mb-4">
                    If you believe your privacy rights have been violated, you may file a complaint <strong>without retaliation</strong> with the Privacy Officer of the pharmacy or with:
                  </p>
                  <div className="text-sm bg-white p-4 rounded-lg">
                    <p className="font-bold">Secretary of the Department of Health and Human Services</p>
                    <p>200 Independence Avenue SW</p>
                    <p>Washington D.C. 20201</p>
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

export default HipaaNotice;
