import React, { useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ClearIcon from "@mui/icons-material/Clear";
import { Collapse } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { logo } from "../assests/Home";
import { navArr } from "../../utils/Home";

export default function ResponsiveNaveBar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <section className="w-full bg-white lg:hidden sticky top-0 z-50 border-b border-gray-200">
      {/* Top Nav */}
      <div className="w-full px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <img src={logo.src} alt="logo" className="h-6 cursor-pointer" />
        </Link>

        <div>
          {!isOpen ? (
            <AppsIcon
              onClick={() => setIsOpen(true)}
              className="text-black cursor-pointer"
            />
          ) : (
            <ClearIcon
              onClick={() => setIsOpen(false)}
              className="text-black cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <div className="bg-gray-900 text-white px-4 pb-4">
          {navArr.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                router.push(item.path);
                setIsOpen(false);
              }}
              className="py-3 border-b border-gray-700 cursor-pointer hover:text-blue-400"
            >
              <span className="capitalize font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </Collapse>
    </section>
  );
}
