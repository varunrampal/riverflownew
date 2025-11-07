     import heroImg from '../assets/images/hero-banner/img1.png';
export default function Hero() {
return(
      <section
        id="hero"
        className="bg-white lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-[#f4f5f7]"
      >
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          {/* left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-[#692767]/10 text-[#692767] px-3 py-1 rounded-full text-xs font-medium mb-4">
              Hair Removal • Facials • Skin
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold tracking-tight mb-4 leading-tight">
              Discover personalized treatments that enhance your natural beauty
            </h1>
            <p className="text-slate-600 mb-6">
             At RiverFlow Laser, we believe every individual deserves to shine. Our experienced team offers luxurious skincare solutions designed to deliver real, lasting results — because you’re not just glowing, you’re truly unforgettable..
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="bg-[#692767] hover:bg-[#582157] text-white px-6 py-3 rounded-full text-sm font-semibold transition"
              >
                Book Now
              </a>
              <a
                href="#treatments"
                className="px-6 py-3 rounded-full text-sm font-semibold border border-slate-200 bg-white hover:border-slate-300"
              >
                View Treatments
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-slate-900">4.9★</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Google rating
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">1,000+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  clients served
                </div>
              </div>
            </div>
          </div>

          {/* right image card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-slate-100 aspect-[4/3] lg:aspect-[4/4] shadow-xl">
              <img
                src={heroImg}
                alt="Clinic"
                className="h-full w-full object-cover"
              />
            </div>
            {/* floating mini box */}
            {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 w-52 border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Next available</p>
              <p className="text-base font-semibold">Tomorrow, 11:00 AM</p>
              <p className="text-xs text-slate-500 mt-2">
                Call or submit form to confirm.
              </p>
            </div> */}
          </div>
        </div>
      </section>

            );
        };