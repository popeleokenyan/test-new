"use client";

import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-#1f2937 text-lg">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-normal text-gray-900 mb-2">About Us®</h1>
        </div>

        {/* Who We Are */}
        <section className="container mx-auto bg-white px-8 py-12">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-[2.0] text-center">
            <span className="font-semibold">Royd Mabati®</span> is a trusted
            leader in the roofing industry, committed to delivering exceptional
            solutions and products. Since our establishment in 2016 and
            incorporation in 2021, our state-of-the-art factory in Nairobi has
            been at the forefront of roofing innovation.
          </p>
          <p className="text-gray-700 leading-[2.0] text-center">
            As a proud Mabati multinational, we embrace Vision 2030 and continue
            to spearhead innovation in the roofing sector, supported by over 10
            production facilities nationwide. Our unwavering commitment to
            quality ensures that our products not only meet but surpass industry
            standards.
          </p>
        </section>

        {/* Our Vision */}
        <section className="bg-gray-100 p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            To be the trusted industry leader of innovative and sustainable
            roofing solutions, providing lasting protection for homes,
            businesses, and communities worldwide.
          </p>
        </section>

        {/* Our Core Values */}
        <section className="bg-white p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Our Core Values
          </h2>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto text-center">
            <li className="flex justify-center items-center">
              <span className="mr-2">•</span>
              <span>Refine & People</span>
            </li>
            <li className="flex justify-center items-center">
              <span className="mr-2">•</span>
              <span>Accountability</span>
            </li>
            <li className="flex justify-center items-center">
              <span className="mr-2">•</span>
              <span>One Team Approach</span>
            </li>
            <li className="flex justify-center items-center">
              <span className="mr-2">•</span>
              <span>Relentless of Excellence</span>
            </li>
            <li className="flex justify-center items-center">
              <span className="mr-2">•</span>
              <span>Teamwork</span>
            </li>
          </ul>
        </section>

        {/* Our Commitment */}
        <section className="bg-gray-100 p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Our Commitment
          </h2>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto text-center">
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Utmost Professionalism</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Fairness and Transparency</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Customer Feedback</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Prompt Response</span>
            </li>
          </ul>
        </section>

        {/* Customer Relations */}
        <section className="bg-white p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Customer Relations
          </h2>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto text-center">
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Courtesy and Hospitality</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Timely and Accurate Information</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Customer Feedback</span>
            </li>
          </ul>
        </section>

        {/* Customer Rights */}
        <section className="bg-gray-100 p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Customer Rights
          </h2>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto text-center">
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>
                <span className="font-semibold">Quality Service:</span> Ensuring
                top-quality products
              </span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>
                <span className="font-semibold">Information & Updates:</span>{" "}
                Providing accurate information
              </span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>
                <span className="font-semibold">Courtesy:</span> Treating every
                customer with respect
              </span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>
                <span className="font-semibold">Swift Identity:</span>{" "}
                Identifying staff upon request
              </span>
            </li>
          </ul>
        </section>

        {/* Customer Responsibilities */}
        <section className="bg-white p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Customer Responsibilities
          </h2>
          <ul className="text-gray-700 space-y-2 max-w-md mx-auto text-center">
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Treat staff with courtesy and respect</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Provide timely and accurate information</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Observe and respect our policies</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="mr-2">•</span>
              <span>Provide feedback on quality of service</span>
            </li>
          </ul>
        </section>

        {/* Our Founders */}
        <section className="bg-gray-100 p-8">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Our Founders
          </h2>
          <p className="text-gray-700 leading-[2.0] text-center">
            Royd Mabati® was established by distinguished industry pioneers,
            each bringing decades of extensive experience in roofing. Their
            collective commitment to excellence and innovative practices has
            positioned Royd Mabati® as a leader in the industry, continually
            setting new standards and driving transformative solutions to
            roofing markets.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white p-6">
          <h2 className="text-4xl font-normal mb-5 text-gray-900 text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Quality Materials */}
            <div className="text-center p-6 bg-gray-200 rounded-2xl">
              <h3 className="text-2xl font-normal text-blue-700 mb-3">
                Quality Materials
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the finest materials globally to ensure the
                durability and reliability of our roofing products.
              </p>
            </div>

            {/* Expert Craftsmanship */}
            <div className="text-center p-6 bg-gray-200 rounded-2xl">
              <h3 className="text-2xl font-normal text-blue-700 mb-3">
                Expert Craftsmanship
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of skilled professionals delivers precision and
                attention to detail in every project.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="text-center p-6 bg-gray-200 rounded-2xl">
              <h3 className="text-2xl font-normal text-blue-700 mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize your satisfaction and strive to exceed your
                expectations with every interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 h-[430px] rounded-b-4xl shadow-lg p-10 text-center align-middle flex flex-col justify-center items-center mt-12">
          <h2 className="text-4xl font-semibold text-black mb-6">
            Ready to Upgrade Your Roof?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/collections/all" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md">
              Explore Our Products
            </Link>
            <Link href="/pages/contact" className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-md">
              Get a Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}