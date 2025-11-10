import hydraFacialImg from "../assets/images/services/HydraFacial.jpg";
import laserhairremoval from'../assets/images/services/laser-hair-removal.jpg'
import microneedling from'../assets/images/services/microneedling.jpg'
import chemicalpeels from'../assets/images/services/chemicalpeels.jpg'
import hydrafacial from"../assets/images/services/HydraFacial.jpg"
import hairservices from'../assets/images/services/HairServices.jpg'
import oxygenofacial from'../assets/images/services/Oxygeneo.jpg'
import scalp from'../assets/images/services/scalp.webp'

export const TREATMENTS = {
  facial: {
    id: "facial",
    title: "Signature Facial Treatment",
    image:hydraFacialImg,
    short: "Deep cleansing, exfoliation, hydration and glow.",
    content: `
Our facial treatments are designed to target dullness, congestion, and dehydrated skin.
We cleanse, exfoliate, extract (if needed) and infuse the skin with hydrating ingredients.
Perfect before events or as monthly maintenance.
    `,
  },
  laserhairremoval: {
    id: "laserhairremoval",
    title: "Laser Hair Removal",
    image:
      laserhairremoval,
    short: "Long-term hair reduction for smooth, comfortable skin.",
    content: `
Welcome to Riverflow Laser & Skin Clinic — your trusted destination for advanced skincare and beauty solutions. Discover our premium Laser Hair Removal treatment, designed to deliver silky-smooth, hair-free skin effortlessly. Say goodbye to the inconvenience of waxing and shaving, and embrace the long-lasting confidence that comes with our state-of-the-art laser technology.
    `,
  },
  microneedling: {
    id: "microneedling",
    title: "Collagen Induction",
    image:
      microneedling,
    short: "RF microneedling for tightening and contouring.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Professional microneedling services that improve skin tone, reduce scars and fine lines by stimulating collagen production.Stimulates collagen and elastin naturally through micro-injuries.
    `,
  },
    chemicalpeels: {
    id: "chemicalpeels",
    title: "Chemical Peels",
    image:
      chemicalpeels,
    short: "Removes dead skin cells to reveal smoother, brighter skin.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. We offer medical-grade peels that exfoliate the skin and reduce the appearance of wrinkles, acne scars, and hyperpigmentation Removes dead skin cells to reveal smoother, brighter skin.
    `,
  },
      hairservices: {
    id: "hairservices",
    title: "Hair Services",
    image:
      hairservices,
    short: "From trims to layered styles for all occasions.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Expert hairstyling, cutting, and treatments tailored to your needs. We enhance your natural look with care and precision.Balayage, root touch-up, and vibrant full-color options.
    `,
  },
   hydrafacial: {
    id: "hydrafacial",
    title: "Hydra Facial",
    image:
      hydrafacial,
    short: "Cleanses, exfoliates, extracts, and hydrates in a single session.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. HydraFacial uses patented Vortex-Fusion® technology to cleanse, extract, and hydrate, leaving your skin radiant and plump.
    `,
  },
  scalp: {
    id: "scalp",
    title: "Scalp Therapy",
    image:
      scalp,
    short: "Soothing and nourishing treatments for scalp health.",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. Scalp therapy involves treatments like deep cleansing, exfoliation, and massages to improve scalp health and relieve issues like dandruff, excess oil, and dryness. These treatments can also promote hair growth by improving blood flow to the roots and offer relaxation by reducing stress.
    `,
  },
    oxygenofacial: {
    id: "oxygenofacial",
    title: "OxyGeneo Facial",
    image:
      oxygenofacial,
    short: "Improve skin texture, tone, and overall appearance",
    content: `
Welcome to Riverflow Laser & Skin Clinic top destination for innovative skincare solutions. An OxyGeneo facial is a three-in-one skin treatment that combines exfoliation, oxygenation, and infusion to improve skin texture, tone, and overall appearance.
    `,
  }
};