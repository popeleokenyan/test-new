export function TrustedQuality() {
  return (
    <div className="bg-#1f2937 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Trusted Quality
        </h1>

        {/* Warranty Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 mb-6 shadow-lg">
          <h2 className="text-3xl font-normal text-black text-center mb-4">
            Apex beyond Mabati Warranty
          </h2>
          <p className="text-white text-center leading-relaxed">
            At Apex beyond Mabati, we stand behind every roof we build. Our warranties
            are designed to safeguard the toughest conditions. Our products are
            crafted using premium materials and undergo rigorous testing to
            exceed East African standards.{" "}
            <span className="font-bold">
              Choose Apex beyond Mabati—where innovation meets strength, and your
              investment is built to last.
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md">
            Register Warranty
          </button>
          <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition-colors shadow-md">
            Register Claim
          </button>
        </div>

        {/* Why Unmatched Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 inline-block pb-2 border-b-4 border-yellow-500">
              Why Apex beyond Mabati Warranty is Unmatched
            </h2>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            {/* Certified & Trusted Quality */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Certified & Trusted Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Manufactured to exceed East African standards, our roofing
                solutions are backed by years of expertise and a reputation for
                excellence.
              </p>
            </div>

            {/* Industry-leading Durability */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Industry-leading Durability
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every product is engineered with high-strength materials and
                cutting-edge technology, ensuring superior resistance against
                extreme weather conditions.
              </p>
            </div>

            {/* Added Value for Your Property */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Added Value for Your Property
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A Apex beyond Mabati roof enhances property value, giving you both
                aesthetic appeal and long-term investment returns.
              </p>
            </div>

            {/* Guaranteed Protection */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Guaranteed Protection, No Compromises
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Should any unexpected issues arise, our warranty secures swift
                resolutions with hassle-free replacements.
              </p>
            </div>

            {/* Seamless Support */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Seamless Support, Anytime
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our expert customer care team is just a call, SMS, WhatsApp, or
                email away—ready to assist you whenever you need it.
              </p>
            </div>

            {/* Nationwide Convenience */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Nationwide Convenience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Activate your warranty effortlessly at any of our branches, main
                offices, or online, or visit our authorized dealers across the
                country.
              </p>
            </div>
          </div>

          {/* Footer Banner */}
          <div className="mt-8 border-l-4 border-yellow-500 bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-r-lg">
            <p className="text-blue-900 font-bold text-center text-lg">
              Apex beyond Mabati Factory LTD – Built Strong, Guaranteed to Last.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}