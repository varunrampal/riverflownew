export default function Gallery() {
const gallery = [
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1594744803329-2fe84ee86ea5?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596370740509-3c9d65e657a3?w=900&auto=format&fit=crop",
];

    return (

        <section id="gallery" className="py-12 lg:py-16 bg-[#f4f5f7]">
            <div className="max-w-6xl mx-auto px-4 mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    gallery
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-2">
                    Inside the clinic
                </h2>
                <p className="text-slate-600">
                    Clean, modern treatment rooms and welcoming reception.
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4 grid gap-4 md:grid-cols-4">
                {gallery.map((img, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3]"
                    >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </section>

    );


}