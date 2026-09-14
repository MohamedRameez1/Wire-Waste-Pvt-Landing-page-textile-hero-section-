import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Calendar, Recycle, ArrowLeft } from "lucide-react";

export function GlobalRecyclingDayBlogPage() {
  return (
    <>
      <Navbar />

      {/* Back Link */}
      <div className="pt-24 sm:pt-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#23376D] transition-colors hover:text-[#4A7C6F]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Journal
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium mb-6">
            <Recycle size={16} />
            <span>Global Recycling Day 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Recognizing Recycling Heroes
          </h1>

          <div className="flex items-center justify-center gap-2 mt-5 text-gray-600 text-sm sm:text-base">
            <Calendar size={18} />
            <span>18 March 2026</span>
          </div>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Celebrating Global Recycling Day and honoring organizations
            driving circularity through responsible recycling practices.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <img
            src="/images/global-recycling-day.jpg"
            alt="Global Recycling Day"
            className="w-full h-[250px] sm:h-[400px] lg:h-[550px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <article className="text-gray-700 leading-8 space-y-6">

            {/* Highlight Box */}
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                RECYCLING – THE SEVENTH RESOURCE
              </h3>

              <p>
                Recycling is often called the seventh resource because it
                transforms waste into valuable materials, conserves natural
                resources, and supports a circular economy.
              </p>
            </div>

            <p>
              On Global Recycling Day 2026, Wire Waste Private Limited
              celebrated the importance of recycling and recognized
              organizations that contribute toward sustainable and
              circular textile ecosystems.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Recognizing Recycling Heroes
            </h2>

            <p>
              This year, Wire Waste proudly recognized
              <strong> Krishna Tex </strong>
              as a
              <strong> Verified Value Chain Partner </strong>
              for its commitment to responsible recycling and sustainable
              waste management practices.
            </p>

            {/* Award Card */}
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-emerald-700">
                🏆 Recognition Award
              </h3>

              <p className="mt-3 font-semibold text-lg">
                KRISHNA TEX
              </p>

              <p className="font-medium">
                Verified Value Chain Partner
              </p>

              <p className="mt-2 text-gray-600">
                Recognized for enabling traceable and circular textile
                waste management practices.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Building a Circular Economy
            </h2>

            <p>
              Recycling is essential for reducing environmental impact
              and preserving resources for future generations. Through
              collaboration across the value chain, waste can be
              transformed into valuable resources.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Reduce landfill waste.</li>
              <li>Conserve natural resources.</li>
              <li>Lower greenhouse gas emissions.</li>
              <li>Promote sustainable production.</li>
              <li>Support circular business models.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              The Power of Partnerships
            </h2>

            <p>
              Achieving circularity requires collaboration among brands,
              manufacturers, recyclers, and recovery partners. Verified
              partners like Krishna Tex demonstrate how sustainable
              practices create positive environmental impact.
            </p>

            <p>
              Together, we can create a future where waste is viewed not
              as a burden but as a valuable resource.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Moving Forward Together
            </h2>

            <p>
              Global Recycling Day reminds us that recycling is more than
              waste management—it is resource management. By embracing
              circular economy principles, we move toward a cleaner and
              more sustainable future.
            </p>

            <blockquote className="border-l-4 border-green-600 pl-6 italic text-xl font-medium text-gray-800">
              Happy Global Recycling Day from the Wire Waste Team! 🌍
            </blockquote>

          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GlobalRecyclingDayBlogPage;