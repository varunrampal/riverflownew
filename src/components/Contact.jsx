export default function Contact(){

return(

     <section id="contact" className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              book now
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-3">
              Ready to schedule your visit?
            </h2>
            <p className="text-slate-600 mb-4">
              Share your contact details and the treatment you're interested in.
              We&apos;ll confirm time by phone.
            </p>
            <p className="text-slate-600">
              You can also call directly:{" "}
              <a
                href="tel:+16045550000"
                className="text-emerald-600 font-semibold"
              >
                +1 (604) 555-0000
              </a>
            </p>
          </div>
          <div className="bg-[#692767]/5 border border-[#692767]/10 rounded-3xl p-6 lg:p-8">
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
              />
              <input
                type="email"
                placeholder="Email (optional)"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
              />
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white">
                <option>Select a service</option>
                <option>Laser Hair Removal</option>
                <option>Facial</option>
                <option>Skin Rejuvenation</option>
                <option>Body Contouring</option>
              </select>
              <textarea
                rows="3"
                placeholder="Anything else?"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
              />
              <button
                type="submit"
                className="w-full bg-[#692767] hover:bg-[#582157] text-white rounded-xl py-2 text-sm font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

);

};