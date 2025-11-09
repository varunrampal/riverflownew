import { Link } from "react-router-dom";
import facial from '../assets/images/services/facial.jpg'
import laserhairremoval from'../assets/images/services/laser-hair-removal.jpg'
import microneedling from'../assets/images/services/microneedling.jpg'
import chemicalpeels from'../assets/images/services/chemicalpeels.jpg'
import hydrafacial from"../assets/images/services/HydraFacial.jpg"
import hairservices from'../assets/images/services/HairServices.jpg'
import oxygenofacial from'../assets/images/services/Oxygeneo.jpg'
import scalp from'../assets/images/services/scalp.webp'

export default function Treatments() {
    const treatments = [
        {
            title: "Laser Hair Removal",
            desc: "If you’re not happy with shaving, tweezing, or waxing to remove unwanted hair, laser hair removal may be an option worth considering. Our lasers help remove hair from the face, leg, chin, back, arm, underarm, bikini line, and more.",
            image: laserhairremoval,
            link:'/treatments/laserhairremoval'
           
        },
        {
            title: "OxyGeneo Facial",
            desc: "Non-surgical shaping and tightening.",
            image:oxygenofacial,
            link:'/treatments/oxygenofacial'
        },
        {
            title: "Facials & Peels",
            desc: "Deep cleansing, brightening and acne care.",
            image:facial,
            link:'/treatments/facial'
        },
        {
            title: "Microneedling",
            desc: "Improve skin tone, texture and fine lines.",
            image: microneedling,
            link:'/treatments/microneedling'
        },
        {
            title: "Chemical Peels",
            desc: "Removes dead skin cells to reveal smoother, brighter skin..",
            image:chemicalpeels,
             link:'/treatments/chemicalpeels'
        },
        {
            title: "HydraFacial",
            desc: "IHydraFacial uses patented Vortex-Fusion® technology to cleanse, extract, and hydrate, leaving your skin radiant and plump.",
            image:hydrafacial,
            link:'/treatments/hydrafacial'
        },
        {
            title: "Hair Services",
            desc: "Non-surgical shaping and tightening.",
            image:hairservices,
             link:'/treatments/hairservices'
        },
             {
            title: "Scalp Therapy",
            desc: "Non-surgical shaping and tightening.",
            image:scalp,
             link:'/treatments/scalp'
        },
 
    ];


    return (
        <section id="treatments" className="py-12 lg:py-16 bg-[#f4f5f7]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                            treatments
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mt-2">
                            Explore Our Extensive Range of Treatments
                        </h2>
                    </div>
                    <a
                        href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
                        target="_blank" className="inline-flex text-sm font-semibold text-[#692767] hover:text-[#582157]"
                    >
                        Book a visit →
                    </a>
                </div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {treatments.map((item) => (
    <div
      key={item.title}
      className="group rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
    >
      {/* Image */}
      <a href={item.link || "#"} className="block">
        <img
          src={item.image }
          alt={item.title}
          className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
        />
      </a>

      {/* Title row */}
      <a
        href={item.link || "#"}
        className="flex items-center justify-between gap-3 px-4 h-14 transition
                   group-hover:bg-[#692767] group-hover:text-white"
      >
        <h3 className="text-sm font-semibold">
          {item.title}
        </h3>
        <i className="fa-solid fa-chevron-right text-[#692767] text-xs group-hover:text-white"></i>
      </a>
    </div>
  ))}
</div>


            </div>
        </section>
    );
};