import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Calendar, Heart, ArrowLeft } from "lucide-react";

export function WomensDayBlogPage() {
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
      <section className="pt-6 sm:pt-8 pb-16 sm:pb-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-medium mb-6">
            <Heart size={16} />
            <span>International Women's Day 2026</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Celebrating Women Driving Circular Change
          </h1>

          <div className="flex items-center justify-center gap-2 mt-5 text-gray-600 text-sm sm:text-base">
            <Calendar size={18} />
            <span>08 March 2026</span>
          </div>

          <p className="max-w-3xl mx-auto mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Empowering sustainability through leadership, innovation,
            and collaboration across the textile ecosystem.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <img
            src="/images/womens-day-cover.jpg"
            alt="Women's Day Celebration"
            className="w-full h-[250px] sm:h-[400px] lg:h-[550px] object-cover rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <article className="text-gray-700 leading-8 space-y-6">

            <p>
              On International Women's Day, the Wire Waste team came together
              to celebrate the remarkable contributions of women across our
              organization and the broader textile ecosystem.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Celebrating Women Who Make a Difference
            </h2>

            <p>
              Women play a vital role in driving innovation, strengthening
              communities, and advancing sustainability initiatives. Their
              leadership and dedication continue to shape a more inclusive
              and circular future for the textile industry.
            </p>

            <div className="bg-pink-50 border-l-4 border-pink-600 p-6 rounded-xl">
              <p className="font-medium">
                The Women's Day celebration served as a moment to recognize
                achievements, inspire future leaders, and strengthen our
                shared commitment to equality and sustainability.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Recognizing Leadership and Collaboration
            </h2>

            <p>
              The event highlighted the achievements of women working across
              operations, technology, sustainability, and business
              development. Their contributions continue to create meaningful
              impact across the value chain.
            </p>

            <p>
              Collaboration and diverse perspectives are essential to
              building innovative solutions for global challenges.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Building an Inclusive Circular Economy
            </h2>

            <p>
              Creating a sustainable future requires not only technological
              innovation but also inclusive participation and equal
              opportunities for all.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Encourage diversity and inclusion.</li>
              <li>Promote equal opportunities.</li>
              <li>Support innovation through collaboration.</li>
              <li>Build resilient and sustainable communities.</li>
              <li>Empower future leaders.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900">
              Celebrating Together
            </h2>

            <p>
              Team members gathered to celebrate achievements, share
              experiences, and reaffirm our commitment to creating an
              inclusive workplace where everyone can thrive.
            </p>

            <p>
              The celebration reinforced the belief that sustainability and
              inclusivity go hand in hand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              Moving Forward
            </h2>

            <p>
              As we continue our journey toward a more sustainable future,
              we remain committed to fostering diversity, encouraging
              innovation, and empowering future generations of leaders.
            </p>

            <blockquote className="border-l-4 border-pink-600 pl-6 italic text-xl font-medium text-gray-800">
              Happy International Women's Day from the Wire Waste Team! 🌸
            </blockquote>

          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}