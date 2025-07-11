import Image from "next/image";
import { desireJob } from "../../../utils/Home"; 

export default function Desire() {
  return (
    <div className="py-10 px-4 md:px-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {desireJob.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition-all"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.heading}
              </h2>
              <p className="text-gray-600">{item.subText}</p>
            </div>
            <div className="w-16 h-16 shrink-0">
              <Image src={item.image} alt="icon" className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
