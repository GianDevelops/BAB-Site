import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pay Invoice — Secure Online Payment",
  description:
    "Pay your Build-A-Block Children Therapy Solutions invoice securely online. Fast, easy credit card payments through our secure payment portal.",
  alternates: { canonical: "https://buildablocktherapy.com/pay-invoice" },
  robots: { index: false, follow: true },
};

export default function PayInvoicePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-lightest via-warm-white to-cream overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[12%] w-20 h-20 bg-blue/6 rounded-2xl rotate-12 animate-float" />
          <div className="absolute bottom-[18%] left-[10%] w-16 h-16 bg-orange/5 rounded-xl -rotate-6 animate-float-slow" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange font-semibold text-sm uppercase tracking-wider">Pay Invoice</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-6">
            Secure Online Payment
          </h1>
          <p className="text-gray text-lg max-w-2xl mx-auto leading-relaxed">
            Use our secure payment portal below to pay your invoice. All payments are processed
            securely, and you&apos;ll receive an email receipt immediately.
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-blue-light/20 overflow-hidden">
            {/* Info bar */}
            <div className="bg-blue/5 px-8 py-4 border-b border-blue-light/20 flex items-center gap-3">
              <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-blue font-semibold">Secure payment — powered by CollectCheckout</span>
            </div>

            {/* Payment link */}
            <div className="p-8 md:p-12 text-center">
              <div className="bg-blue-lightest/50 rounded-2xl p-10 md:p-14">
                <svg className="w-16 h-16 text-blue mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                <h3 className="text-2xl font-bold text-dark mb-3">Ready to Pay Your Invoice?</h3>
                <p className="text-gray mb-8 max-w-md mx-auto">
                  Click the button below to open our secure payment portal. You&apos;ll receive an email receipt immediately after payment.
                </p>
                <a
                  href="https://collectcheckout.com/collect-checkout/fields?cartId=4a2b283a-9371-44e7-88db-c2115474e610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg !py-4 !px-10"
                >
                  Pay Now — Secure Portal
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Help text */}
            <div className="px-8 pb-8 space-y-4">
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-2">Need Help With Your Payment?</h3>
                <p className="text-gray text-sm leading-relaxed">
                  If you&apos;re having trouble with the payment portal or have questions about your invoice,
                  please contact us at{" "}
                  <a href="tel:+13057412218" className="text-blue font-semibold hover:text-orange transition-colors">
                    (305) 741-2218
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:info@buildablocktherapy.com" className="text-blue font-semibold hover:text-orange transition-colors">
                    info@buildablocktherapy.com
                  </a>.
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray/60 text-xs justify-center">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  SSL Encrypted
                </span>
                <span>•</span>
                <span>Visa, Mastercard, Amex accepted</span>
                <span>•</span>
                <span>Email receipt provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
