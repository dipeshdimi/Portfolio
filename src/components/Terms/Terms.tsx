const TermsOfUse = () => {
  const termsItems = [
    "To access and use the Services, you agree to provide true, accurate and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account.",
    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials offered on this website or through the Services, for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
    "Your use of our Services and the website is solely at your own risk and discretion. You are required to independently assess and ensure that the Services meet your requirements.",
    "The contents of the Website and the Services are proprietary to Us and you will not have any authority to claim any intellectual property rights, title, or interest in its contents.",
    "You acknowledge that unauthorized use of the Website or the Services may lead to action against you as per these Terms or applicable laws.",
    "You agree to pay us the charges associated with availing the Services.",
    "You agree not to use the website and/or Services for any purpose that is unlawful, illegal or forbidden by these Terms, or Indian or local laws that might apply to you.",
    "You agree and acknowledge that the website and the Services may contain links to other third party websites. On accessing these links, you will be governed by the terms of use, privacy policy and such other policies of such third party websites.",
    "You understand that upon initiating a transaction for availing the Services you are entering into a legally binding and enforceable contract with us for the Services.",
    "You shall be entitled to claim a refund of the payment made by you in case we are not able to provide the Service. The timelines for such return and refund will be according to the specific Service you have availed or within the time period provided in our policies (as applicable). In case you do not raise a refund claim within the stipulated time, then this would make you ineligible for a refund.",
    "Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.",
    "These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.",
    "All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Delhi, Delhi.",
    "All concerns or communications relating to these Terms must be communicated to us using the contact information provided on this website."
  ];

  return (
    <section id="refund-policy" className="bg-gray-900 text-gray-100">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-20"
      >
        <div className="text-center">
          <h2 className="mt-4 mb-12 uppercase text-gray-200 text-3xl xl:text-6xl font-semibold">
            Terms & Conditions
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-[#202328] rounded-lg border border-gray-800 button-box-shadow4 overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10 border-b border-gray-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-secondary-500 text-sm uppercase tracking-wider">
                  Dipesh Mishra
                </p>
              </div>
              <p className="text-sm text-neutral-500 lg:text-right">
                Last updated on 21-05-2026 20:45:33 IST
              </p>
            </div>
            <p className="mt-6 text-neutral-400 leading-7">
              These Terms and Conditions, along with privacy policy or other terms (“Terms”) constitute a binding agreement by and between DIPESH MISHRA, ( “Website Owner” or “we” or “us” or “our”) and you (“you” or “your”) and relate to your use of our website, goods (as applicable) or services (as applicable) (collectively, “Services”).
            </p>
            <p className="mt-6 text-neutral-400 leading-7">
              By using our website and availing the Services, you agree that you have read and accepted these Terms (including the Privacy Policy). We reserve the right to modify these Terms at any time and without assigning any reason. It is your responsibility to periodically review these Terms to stay informed of updates.
            </p>
            <p className="mt-6 text-neutral-400 leading-7">
              The use of this website or availing of our Services is subject to the following terms of use:
            </p>
          </div>

          <ol className="grid gap-4 p-6 md:p-8 lg:p-10 text-left">
            {termsItems.map((item, index) => (
              <li
                key={item}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-md bg-neutral-900/60 p-4 border border-gray-800"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary-500 text-neutral-900 font-semibold">
                  {index + 1}
                </span>
                <p className="text-neutral-400 leading-7">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
