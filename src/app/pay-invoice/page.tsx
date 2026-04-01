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

            {/* Embed area */}
            <div className="p-8 md:p-12">
              <div className="aspect-[4/3] bg-blue-lightest/50 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-light/40 relative overflow-hidden">
                <iframe
                  src="https://collectcheckout.com/collect-checkout/fields?cartId=4a2b283a-9371-44e7-88db-c2115474e610"
                  title="Pay Invoice — Build-A-Block Therapy"
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                  allow="payment"
                />
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
