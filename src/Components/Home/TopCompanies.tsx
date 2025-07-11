import Image from "next/image";
import { MapPin, Briefcase } from "lucide-react";
import { topCompanies } from "../../../utils/Home";

export default function TopCompanies() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-gray-900">
          Top Companies are Hiring
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {topCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white/80 border border-gray-200 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-20 h-20 mb-4 mx-auto relative rounded-full bg-gray-100 group-hover:bg-white transition">
                <Image
                  src={company.image}
                  alt={company.title}
                  fill
                  className="object-contain rounded-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-center text-gray-900 group-hover:text-blue-600 transition">
                {company.title}
              </h3>

              <div className="flex items-center justify-center text-sm text-gray-600 mt-2 gap-1">
                <MapPin size={16} className="text-blue-500" />
                <span>{company.location}</span>
              </div>

              <div className="flex items-center justify-center text-sm text-gray-600 mt-1 gap-1">
                <Briefcase size={16} className="text-gray-500" />
                <span>{company.job}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full shadow hover:bg-blue-700 transition duration-200">
            View All Featured Companies
          </button>
        </div>
      </div>
    </section>
  );
}
