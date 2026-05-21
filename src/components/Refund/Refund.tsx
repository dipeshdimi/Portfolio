const CancellationRefundPolicy = () => {
  const policyItems = [
    "Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
    "DIPESH MISHRA does not accept cancellation requests for perishable items like flowers, eatables, etc. However, refund/replacement can be made if the customer establishes that the quality of the product delivered is not good.",
    "In case of receipt of damaged or defective items, please report the same to our Customer Service team. The request will be entertained once the merchant has checked and determined the same at their own end. This should be reported within same day of receipt of the products.",
    "If you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within same day of receiving the product. The Customer Service Team, after looking into your complaint, will take an appropriate decision.",
    "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them directly.",
    "In case of any refunds approved by DIPESH MISHRA, it will take 9-15 business days for the refund to be processed to the end customer.",
  ];

  return (
    <section id="refund-policy" className="bg-gray-900 text-gray-100">
      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-20"
      >
        <div className="text-center">
          <h3 className="text-teal-400 text-lg uppercase tracking-wider">
            Policy
          </h3>
          <h2 className="mt-4 mb-12 uppercase text-gray-200 text-3xl xl:text-6xl font-semibold">
            Cancellation & Refund
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-[#202328] rounded-lg border border-gray-800 button-box-shadow4 overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10 border-b border-gray-800">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-secondary-500 text-sm uppercase tracking-wider">
                  Dipesh Mishra
                </p>
                <h3 className="mt-3 text-2xl lg:text-3xl font-semibold text-neutral-200">
                  Cancellation & Refund Policy
                </h3>
              </div>
              <p className="text-sm text-neutral-500 lg:text-right">
                Last updated on 21-05-2026 20:45:33 IST
              </p>
            </div>
            <p className="mt-6 text-neutral-400 leading-7">
              DIPESH MISHRA believes in helping customers as far as possible and
              has therefore adopted a liberal cancellation policy. Under this
              policy:
            </p>
          </div>

          <ol className="grid gap-4 p-6 md:p-8 lg:p-10 text-left">
            {policyItems.map((item, index) => (
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

export default CancellationRefundPolicy;
