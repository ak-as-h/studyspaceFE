import React from "react";
import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaArrowRight,
  FaCheckCircle,
  FaWifi,
  FaStar,
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
    <div className="bg-[#EAF1FA] text-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#dce9f8] via-[#eef2f9] to-[#dce7f5]">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-white/50 blur-3xl" />

        <div
          className="relative mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-20 "
          style={{ maxWidth: "1400px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/60 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-7 shadow-lg">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />A better
                place to get things done
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.08]">
                Make space
                <br />
                for your
                <br />
                <span className="text-blue-600">best work.</span>
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-8 mt-7 max-w-lg">
                Discover inspiring libraries, peaceful reading rooms and
                productive workspaces. Find a place that brings out your best.
              </p>

              <div className="flex flex-wrap items-center gap-5 mt-9">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-medium transition shadow-lg shadow-blue-600/20"
                >
                  Explore spaces
                  <FaArrowRight />
                </Link>

                <a
                  href="#how-it-works"
                  className="text-slate-700 hover:text-blue-600 font-medium transition"
                >
                  How it works
                </a>
              </div>

              <div className="flex items-center gap-3 mt-10">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-xl border border-white flex items-center justify-center text-blue-700">
                    <FaBookOpen />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-xl border border-white flex items-center justify-center text-orange-700">
                    <FaLaptop />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-xl border border-white flex items-center justify-center text-green-700">
                    <FaUsers />
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  Find your perfect place to focus
                </p>
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-[28px] overflow-hidden shadow-2xl shadow-slate-900/15 border border-white/50"
                style={{ height: "420px" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400"
                  alt="Modern coworking workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute bottom-6 left-5 md:-left-8 bg-white/35 backdrop-blur-2xl border border-white/70 rounded-2xl p-5 shadow-2xl shadow-slate-900/15 "
                style={{ maxWidth: "245px" }}
              >
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <FaWifi className="text-blue-600" />A space made for focus
                </div>

                <h3 className="text-lg font-semibold mt-3">
                  Your next productive day starts here.
                </h3>

                <div className="flex items-center gap-1 text-amber-500 mt-3 text-sm">
                  <FaStar />
                  <span className="text-slate-600 font-medium">
                    Discover better spaces
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Glass Search Panel */}
          <div className="mt-16 max-w-5xl rounded-3xl border border-white/70 bg-white/25 p-4 md:p-5 shadow-2xl shadow-blue-900/10 backdrop-blur-2xl">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-20 md:py-28 bg-linear-to-br from-[#eaf1fa] via-[#f5f7fb] to-[#e5edf8]">
        <div className="absolute top-10 right-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full" />

        <div
          className="relative mx-auto px-5 md:px-10 "
          style={{ maxWidth: "1400px" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">
            <div>
              <p className="text-blue-600 text-sm font-semibold tracking-widest">
                FIND YOUR SPACE
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-3">
                Spaces for every way
                <br className="hidden md:block" /> of working.
              </h2>
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-4 transition-all"
            >
              Explore all spaces <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link to="/explore" key={category.title} className="group">
                <div
                  className="relative rounded-2xl overflow-hidden border border-white/60 shadow-xl shadow-slate-900/10"
                  style={{ height: "340px" }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/15 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-sm text-gray-200 mt-2 leading-6">
                      {category.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium mt-5 group-hover:gap-4 transition-all">
                      Explore <FaArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 md:py-28 bg-linear-to-br from-[#dfeafa] via-[#f4f5f7] to-[#e7eef8]"
      >
        <div className="absolute -top-20 left-1/4 w-80 h-80 bg-blue-300/20 blur-3xl rounded-full" />

        <div
          className="relative mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center "
          style={{ maxWidth: "1400px" }}
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400"
              alt="Beautiful modern workspace"
              className="w-full object-cover rounded-[28px] shadow-2xl border border-white/50"
              style={{ height: "400px" }}
            />

            <div
              className="absolute -bottom-5 right-5 md:-right-5 bg-white/35 backdrop-blur-2xl border border-white/70 shadow-2xl rounded-2xl p-5 "
              style={{ maxWidth: "210px" }}
            >
              <FaBuilding className="text-blue-600 text-2xl mb-3" />
              <p className="font-semibold text-slate-900">
                A space that works for you.
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Find comfort, convenience and focus.
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-blue-600 text-sm font-semibold tracking-widest">
              ABOUT STUDYSPACE
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mt-4">
              Great things happen in the right environment.
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Finding the right place to study or work shouldn't be difficult.
              StudySpace brings comfortable, affordable and productive spaces
              together in one convenient platform.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-white/70 bg-white/35 backdrop-blur-xl p-4 shadow-lg shadow-slate-900/5"
                >
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/explore"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-7 py-4 rounded-xl mt-10 font-medium transition shadow-lg"
            >
              Discover StudySpace <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="relative py-20 md:py-28 bg-linear-to-br from-[#eaf1fa] via-[#f5f7fb] to-[#e2ebf8]"
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full" />

        <div
          className="relative mx-auto px-5 md:px-10 "
          style={{ maxWidth: "1400px" }}
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-blue-600 text-sm font-semibold tracking-widest">
              SIMPLE & CONVENIENT
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4">
              Three steps to your
              <br /> perfect workspace.
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Finding and reserving your ideal study space is easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 md:p-10 rounded-2xl bg-white/30 backdrop-blur-2xl border border-white/70 shadow-xl shadow-slate-900/5 hover:bg-white/45 hover:-translate-y-1 hover:shadow-2xl transition duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 rounded-xl bg-white/50 backdrop-blur-xl border border-white/70 text-blue-600 flex items-center justify-center text-xl shadow-lg">
                    {step.icon}
                  </div>

                  <span className="text-4xl font-semibold text-slate-300">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-semibold mt-8">{step.title}</h3>
                <p className="text-slate-600 leading-7 mt-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 md:px-10 pb-20 md:pb-28 bg-[#eaf1fa]">
        <div className="mx-auto relative overflow-hidden rounded-[28px] bg-slate-950 px-7 py-16 md:px-16 md:py-24 text-center shadow-2xl "style={{maxWidth:"1400px"}}>
          <div className="absolute w-80 h-80 bg-blue-600/30 rounded-full blur-3xl -top-32 -left-20" />
          <div className="absolute w-80 h-80 bg-blue-500/30 rounded-full blur-3xl -bottom-40 -right-20" />

          <div className="relative max-w-2xl mx-auto">
            <p className="text-blue-400 text-sm font-semibold tracking-widest">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mt-5 leading-tight">
              Find your place.
              <br />
              Find your focus.
            </h2>

            <p className="text-gray-300 mt-6 leading-7">
              Explore spaces designed to help you work better, learn more and
              achieve your goals.
            </p>

            <Link
              to="/explore"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium mt-9 transition shadow-lg shadow-blue-600/20"
            >
              Explore spaces <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
