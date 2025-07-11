"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { twoSlide } from "../../../utils/Home";
import { motion } from "framer-motion";

export default function Dream() {
  const [skill, setSkill] = useState("");
  const [area, setArea] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    console.log("Searching:", skill, area);
  };

  return (
    <section className="w-full bg-gradient-to-br from-white to-blue-50 mt-18">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section - aligned with logo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[52%]"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 whitespace-nowrap">
            Discover Your <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Explore roles that align with your passion and potential. Connect
            with top companies and begin your success journey today.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Search Jobs
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 border border-blue-100"
          >
            <input
              type="text"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              placeholder="e.g. Designer, Developer"
              className="w-full sm:w-1/2 px-4 py-3 rounded-lg outline-none text-sm text-gray-700"
            />
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-3 rounded-lg outline-none text-sm text-gray-700 sm:border-l"
            >
              <option value="">Select Area</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Marketing">Marketing</option>
            </select>
            <button
              onClick={handleSearch}
              className="mt-2 sm:mt-0 sm:ml-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition"
            >
              <FaSearch />
              Search
            </button>
          </motion.div>
        </motion.div>

        {/* Right Section with Swiper and animated center text */}
      <motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="w-full lg:w-[550px] h-[310px] group relative rounded-xl overflow-hidden shadow-lg"
>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500 }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="rounded-xl overflow-hidden"
          >
            {twoSlide.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={item.image.src}
                    alt={item.heading}
                    className="w-full h-full object-cover"
                  />
                  {/* Centered content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      {item.heading}
                    </h2>
                    <p className="text-sm md:text-base mb-4">
                      {item.subText}
                    </p>
                    <button
                      onClick={() => router.push(item.buttonLink)}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {item.buttonText}
                    </button>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}

            {/* Navigation arrows: only show on hover */}
            <div className="swiper-button-prev !text-white !opacity-0 group-hover:!opacity-100 transition duration-300 absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <div className="swiper-button-next !text-white !opacity-0 group-hover:!opacity-100 transition duration-300 absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
