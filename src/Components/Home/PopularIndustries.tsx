"use client";
import { useState } from "react";
import { industries } from "../../../utils/Home"; // Adjust the path if needed
import { useRouter } from "next/navigation";

export default function PopularIndustries() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveId(id);
    router.push(`/search-jobs?industry_id%5B%5D=${id}`);
  };

  return (
    <section className="bg-[#f4f7fd] py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-black">
          Popular Industries
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => handleClick(industry.id)}
              className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-200 ${
                activeId === industry.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {industry.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
