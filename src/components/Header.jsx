import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';


export default function Header() {
  const [open, setOpen] = useState(false);
	return (
      
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {/* <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center text-lg font-bold">
             R
            </div> */}
                  <div className="logo">
          {/* ✅ Logo now links to home page */}
          <Link to="/" >
            <img src={logo} alt="Riverflow laser" />
          </Link>
        </div>
            <div>
                <div className="text-base font-semibold leading-none">
                Riverflow Laser & Skin Clinic Inc
              </div>
              <div className="text-sm font-semibold leading-none">
                Glow Your Skin Like Never Before
              </div>
              
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border px-2 py-1 text-slate-700"
            onClick={() => setOpen((p) => !p)}
          >
            ☰
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-[#692767] font-bold text-[#692767]">
              Home
            </a>
            <a href="#treatments" className="hover:text-[#692767] font-bold text-[#692767]">
              Treatments
            </a>
            <a href="#about" className="hover:text-[#692767] text-[#692767] font-bold">
              About
            </a>
            <a href="#team" className="hover:text-[#692767] text-[#692767] font-bold">
              Our Team
            </a>
              <a href="#faqs" className="hover:text-[#692767] text-[#692767] font-bold">
              FAQS
            </a>
            <a href="#contact" className="hover:text-[#692767] text-[#692767] font-bold">
              Contact
            </a>
          </nav>
          <a
            href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
            target="_blank"className="hidden lg:inline-flex bg-[#692767] hover:bg-[#582157] text-white px-5 py-2 rounded-full text-sm font-semibold transition"
          >
            Book Now
          </a>
        </div>

        {/* mobile menu */}
        {open ? (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2 text-sm">
            <a
              href="#hero"
              onClick={() => setOpen(false)}
              className="block py-1 text-[#692767] font-bold"
            >
              Home
            </a>
            <a
              href="#treatments"
              onClick={() => setOpen(false)}
              className="block py-1 text-[#692767] font-bold"
            >
              Treatments
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block py-1 text-[#692767] font-bold"
            >
              About
            </a>
            <a
              href="#team"
              onClick={() => setOpen(false)}
              className="block py-1 text-[#692767] font-bold"
            >
              Our Team
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block py-1 text-[#692767] font-bold"
            >
              Contact
            </a>
          </div>
        ) : null}
      </header>

    );
};