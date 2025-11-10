// src/pages/AllTreatments.jsx
import React from "react";
import { Link } from "react-router-dom";
import { TREATMENTS } from "../data/treatments"; // adjust path if different
import Layout from "../components/Layout";

export default function AllTreatmentsPage() {

    const treatmentsArray = Array.isArray(TREATMENTS)
    ? TREATMENTS
    : Object.values(TREATMENTS);
  return (
    <Layout>
  <div className="min-h-screen bg-slate-50 py-10 lg:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Our Treatments
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore our full range of services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentsArray.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-slate-100 flex flex-col"
            >
              <div className="h-48 bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/600x400?text=Treatment";
                  }}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h2>
                {item.short && (
                  <p className="text-sm text-slate-500 mb-4 line-clamp-3">
                    {item.short}
                  </p>
                )}
                <div className="mt-auto">
                  <Link
                    to={`/treatments/${item.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#692767] hover:text-[#4d1d53] transition"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
}
