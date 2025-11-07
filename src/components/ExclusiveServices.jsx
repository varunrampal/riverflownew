import exclusiveBg from '../assets/images/services/ExclusiveServiceBkg.jpg'

export default function ExclusiveServices() {
    return (
     <section
  className="
    relative
    bg-cover bg-center bg-no-repeat
    bg-[position:center_top]
    hover:bg-[position:center_60%]
    transition-[background-position] duration-700 ease-out
    py-10 lg:py-16
  "
  style={{
    
      backgroundImage: `url(${exclusiveBg})`,
  }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-slate-950/20" aria-hidden="true"></div>

  <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
    {/* heading */}
    <div className="max-w-2xl mx-auto mb-10">
      <p className="uppercase tracking-[0.2em] text-sm">
        Our Services
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-3">
        Experience Our Exclusive Signature Services
      </h2>
      <p className="text-slate-100">
        Indulge in luxury and remarkable results with our exclusive signature services:
      </p>
    </div>

    {/* cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {/* card 1 */}
      <div className="bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full border border-white/10
                      transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#692767] hover:bg-slate-900/60">
        {/* tinted image */}
        <div className="relative mx-auto h-32 w-32 mb-5 flex items-center justify-center">
          <img
            src="https://langley.uptownmedspa.ca/wp-content/uploads/2024/09/morpheus8.png.webp"
            alt="Morpheus8"
            className="h-28 w-auto object-contain"
          />
          <div className="absolute inset-0 bg-[#c7a3e5] mix-blend-color opacity-90 pointer-events-none"></div>
        </div>

        <h3 className="text-lg font-semibold mb-3">Morpheus8</h3>
        <p className="text-sm text-slate-100 flex-1">
          Transform your skin with Morpheus8, an innovative fractional skin treatment that
          stimulates collagen and tightens sagging skin.
        </p>
        <a
          href="/morpheus-8"
          className="inline-flex items-center gap-2 text-sm font-semibold mt-5 text-[#ffffff] hover:text-[#ffffff]"
        >
          Read More
          <i className="fa-solid fa-arrow-right-long" />
        </a>
      </div>

      {/* card 2 */}
      <div className="bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full border border-white/10
                      transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#692767] hover:bg-slate-900/60">
        {/* tinted image */}
        <div className="relative mx-auto h-32 w-32 mb-5 flex items-center justify-center">
          <img
            src="https://langley.uptownmedspa.ca/wp-content/uploads/2024/09/Signature-Glass-Facial.png.webp"
            alt="Uptown Signature Glass Facial"
            className="h-28 w-auto object-contain"
          />
          <div className="absolute inset-0 bg-[#c7a3e5] mix-blend-color opacity-90 pointer-events-none"></div>
        </div>

        <h3 className="text-lg font-semibold mb-3">
          Hydra Facial
        </h3>
        <p className="text-sm text-slate-100 flex-1">
          Experience our signature hydra facial, customized to your skin’s needs, providing a
          luminous, refreshed appearance.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold mt-5 text-[#fffff] hover:text-[#fffff]"
        >
          Read More
          <i className="fa-solid fa-arrow-right-long" />
        </a>
      </div>

      {/* card 3 */}
      <div className="bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full border border-white/10
                      transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#692767] hover:bg-slate-900/60">
        {/* tinted image */}
        <div className="relative mx-auto h-32 w-32 mb-5 flex items-center justify-center">
          <img
            src="https://langley.uptownmedspa.ca/wp-content/uploads/2024/09/Hydr-Oxy-Facial.png.webp"
            alt="The Hydr-Oxy Facial"
            className="h-28 w-auto object-contain"
          />
          <div className="absolute inset-0 bg-[#c7a3e5] mix-blend-color opacity-90 pointer-events-none"></div>
        </div>

        <h3 className="text-lg font-semibold mb-3">OxyGeneo Facial</h3>
        <p className="text-sm text-slate-100 flex-1">
          Replenish and hydrate with oxygen infusion and nourishing serums for soft, glowing skin.
        </p>
        <a
          href="/the-hydr-oxy-facial"
          className="inline-flex items-center gap-2 text-sm font-semibold mt-5 text-[#ffffff] hover:text-[#ffffff]"
        >
          Read More
          <i className="fa-solid fa-arrow-right-long" />
        </a>
      </div>
    </div>
  </div>
</section>



    );

};


