// src/pages/Contact.jsx
import Layout from "../components/Layout";
export default function ContactPage() {
  return (
    <Layout>
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-slate-900">Contact Us</h1>
          <p className="text-slate-500 mt-2">
            We’d love to hear from you. Call, email, or visit us at our Abbotsford location.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid lg:grid-cols-2 gap-10">
        {/* Left: info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Clinic Location
            </h2>
            <p className="text-slate-600">
              2961 Townline Rd<br />
              Abbotsford, British Columbia<br />
              V2T 5J8
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Phone
              </p>
              <p className="text-base font-medium text-slate-900 mt-1">
                <a href="tel:+16046218311" className="hover:text-[#692767]">
                 (604) 621-8311
                </a>
              </p>
            </div>
            <div className="bg-white rounded-xl border p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p className="text-base font-medium text-slate-900 mt-1">
                <a href="mailto:info@riverflowlaser.com" className="hover:text-[#692767]">
                  info@riverflowlaser.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-xl border p-5">
            <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
              Business Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday - Sunday</span>
                <span>9:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Optional message */}
          <p className="text-sm text-slate-500">
            If you're visiting for the first time, please call ahead so our team can guide you inside the property.
          </p>
        </div>

        {/* Right: Map */}
        <div className="h-[380px] rounded-xl overflow-hidden border bg-slate-200">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=2961+Townline+Rd+Abbotsford,+BC+V2T+5J8&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
    </Layout>
  );
}
