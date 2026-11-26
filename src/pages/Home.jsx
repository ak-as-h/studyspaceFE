import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBuilding,
  FaCheckCircle,
  FaBookOpen,
  FaUsers,
  FaWifi,
  FaStar,
  FaLaptop,
} from "react-icons/fa";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const categories = [
    {
      title: "Libraries",
      description: "Quiet places for focused learning.",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=900",
    },
    {
      title: "Reading Rooms",
      description: "Comfortable spaces to concentrate.",
      image:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=900",
    },
    {
      title: "Coworking Spaces",
      description: "Inspiring environments to get things done.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900",
    },
    {
      title: "Private Cabins",
      description: "Your own space for uninterrupted work.",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=900",
    },
  ];

  const benefits = [
    "Discover study spaces near you",
    "Compare facilities and pricing",
    "Check seat availability",
    "Reserve your preferred space",
  ];

  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Search for libraries, reading rooms and workspaces near you.",
      icon: <FaBuilding />,
    },
    {
      number: "02",
      title: "Choose",
      description:
        "Compare facilities, pricing and availability to find your fit.",
      icon: <FaCheckCircle />,
    },
    {
      number: "03",
      title: "Reserve",
      description: "Select your preferred space and make your reservation.",
      icon: <FaBookOpen />,
    },
  ];

  return (
    <div className="bg-[#F5F0E8] text-[#1C1917] overflow-hidden">

      {/* Hero Section */}
      <section className="relative">
        {/* Dark editorial header band */}
        <div className="bg-[#1C1917] py-20 md:py-32">
          <div className="relative mx-auto px-6 md:px-12" style={{ maxWidth: "1400px" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-9">
                  <span className="w-8 h-px bg-[#C17A56]" />
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                    Premium Study Environments
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.0] text-white"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  Make space
                  <br />
                  for your
                  <br />
                  <span className="text-[#C17A56]">best work.</span>
                </h1>

                <p className="text-[#A09A93] text-base leading-8 mt-8 max-w-md">
                  Discover inspiring libraries, peaceful reading rooms and
                  productive workspaces. Find a place that brings out your best.
                </p>

                <div className="flex flex-wrap items-center gap-5 mt-10">
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-3 bg-[#C17A56] text-white px-7 py-4 font-medium hover:bg-[#A8663F] transition text-sm tracking-wide"
                  >
                    Explore Spaces
                    <FaArrowRight size={12} />
                  </Link>

                  <a
                    href="#how-it-works"
                    className="text-sm text-[#A09A93] hover:text-white font-medium transition tracking-wide"
                  >
                    How it works
                  </a>
                </div>

                {/* Social proof row */}
                <div className="flex items-center gap-4 mt-12">
                  <div className="flex -space-x-2">
                    {[FaBookOpen, FaLaptop, FaUsers].map((Icon, i) => (
                      <div key={i} className="w-9 h-9 bg-[#2E2925] border border-[#3E3832] flex items-center justify-center text-[#A09A93]">
                        <Icon size={12} />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[#7C6F60] tracking-wide">
                    Find your perfect place to focus
                  </p>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative hidden lg:block">
                <div
                  className="overflow-hidden border border-[#2E2925]"
                  style={{ height: "460px" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400"
                    alt="Modern coworking workspace"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                {/* Floating card */}
                <div
                  className="absolute -bottom-6 -left-8 bg-white border-l-4 border-l-[#C17A56] p-5"
                  style={{ maxWidth: "240px" }}
                >
                  <div className="flex items-center gap-2 text-xs text-[#7C6F60]">
                    <FaWifi className="text-[#C17A56]" size={11} />
                    <span>Premium spaces</span>
                  </div>

                  <p className="font-semibold mt-2 text-[#1C1917] text-sm leading-snug" style={{ fontFamily: "'Georgia', serif" }}>
                    Your next productive day starts here.
                  </p>

                  <div className="flex items-center gap-1 text-amber-500 mt-3 text-xs">
                    {[1,2,3,4,5].map(i => <FaStar key={i} size={10} />)}
                    <span className="text-[#A09A93] ml-1">Top rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Panel */}
        <div className="bg-[#EDE8DF] border-b border-[#D4C5A9]">
          <div className="mx-auto px-6 md:px-12 py-7" style={{ maxWidth: "1400px" }}>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#7C6F60]">Search Spaces</span>
              <span className="flex-1 h-px bg-[#D4C5A9]" />
            </div>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-28 bg-[#F5F0E8]">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1400px" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#C17A56]" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                  Find Your Space
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold tracking-tight text-[#1C1917]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Spaces for every
                <br className="hidden md:block" /> way of working.
              </h2>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-sm text-[#1C1917] font-medium border-b border-[#1C1917] pb-0.5 hover:text-[#C17A56] hover:border-[#C17A56] transition"
            >
              Explore all spaces <FaArrowRight size={11} />
            </Link>
          </div>

          {/* Category Grid — editorial asymmetric layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, i) => (
              <Link to="/explore" key={category.title} className="group">
                <div
                  className="relative overflow-hidden"
                  style={{ height: i === 0 || i === 3 ? "380px" : "320px" }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/20 to-transparent" />

                  {/* Category number */}
                  <span className="absolute top-4 right-4 text-5xl font-black text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#C17A56]">
                      Category
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1" style={{ fontFamily: "'Georgia', serif" }}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#A09A93] mt-1.5 leading-5">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-medium mt-4 text-white/60 group-hover:text-white group-hover:gap-3 transition-all">
                      Explore <FaArrowRight size={10} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#1C1917] py-20 md:py-28">
        <div
          className="mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          style={{ maxWidth: "1400px" }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400"
              alt="Beautiful modern workspace"
              className="w-full object-cover"
              style={{ height: "420px" }}
            />

            {/* Floating stat */}
            <div
              className="absolute -bottom-6 -right-0 md:-right-8 bg-[#C17A56] p-6"
              style={{ maxWidth: "200px" }}
            >
              <FaBuilding className="text-white text-xl mb-3" />
              <p className="font-bold text-white text-sm" style={{ fontFamily: "'Georgia', serif" }}>
                Spaces that work for you.
              </p>
              <p className="text-xs text-white/70 mt-2 leading-5">
                Comfort, convenience, focus.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                About StudySpace
              </span>
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Great things happen in the right environment.
            </h2>

            <p className="text-[#A09A93] leading-8 mt-6 text-sm">
              Finding the right place to study or work shouldn't be difficult.
              StudySpace brings comfortable, affordable and productive spaces
              together in one convenient platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-9">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 border border-[#2E2925] bg-[#2E2925] p-4"
                >
                  <FaCheckCircle className="text-[#C17A56] mt-0.5 shrink-0 text-xs" />
                  <span className="text-white text-xs font-medium leading-5">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-3 bg-[#C17A56] text-white px-7 py-4 mt-10 font-medium hover:bg-[#A8663F] transition text-sm tracking-wide"
            >
              Discover StudySpace <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-[#EDE8DF]">
        <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1400px" }}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                Simple & Convenient
              </span>
              <span className="w-6 h-px bg-[#C17A56]" />
            </div>

            <h2
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#1C1917]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Three steps to your
              <br /> perfect workspace.
            </h2>

            <p className="text-[#7C6F60] mt-5 leading-7 text-sm">
              Finding and reserving your ideal study space is easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="bg-white p-8 md:p-10 border border-[#D4C5A9] hover:-translate-y-1 transition duration-300 relative"
              >
                {/* Step connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-px bg-[#D4C5A9]" />
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#F5F0E8] border border-[#D4C5A9] text-[#1C1917] flex items-center justify-center">
                    <span className="text-sm">{step.icon}</span>
                  </div>
                  <span className="text-5xl font-black text-[#D4C5A9]">
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-[#1C1917]"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#7C6F60] leading-7 mt-3 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#F5F0E8] px-6 md:px-12 pb-20 md:pb-28 pt-10">
        <div
          className="mx-auto relative overflow-hidden bg-[#1C1917]"
          style={{ maxWidth: "1400px" }}
        >
          {/* Decorative terracotta stripe */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C17A56]" />

          <div className="relative max-w-2xl mx-auto text-center px-8 py-20 md:py-28">
            <div className="flex items-center justify-center gap-3 mb-7">
              <span className="w-6 h-px bg-[#C17A56]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#C17A56]">
                Your Next Chapter Starts Here
              </span>
              <span className="w-6 h-px bg-[#C17A56]" />
            </div>

            <h2
              className="text-3xl md:text-5xl text-white font-bold tracking-tight leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Find your place.
              <br />
              Find your focus.
            </h2>

            <p className="text-[#A09A93] mt-6 leading-7 text-sm">
              Explore spaces designed to help you work better, learn more and
              achieve your goals.
            </p>

            <Link
              to="/explore"
              className="inline-flex items-center gap-3 bg-[#C17A56] text-white px-8 py-4 font-medium mt-9 hover:bg-[#A8663F] transition text-sm tracking-wide"
            >
              Explore Spaces <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
