export default function Footer(){

return(

      <footer className="bg-slate-900 text-slate-200 py-8 mt-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Rivrflow Laser & Skin Clinic Inc – Abbotsford.
          </p>
          <p className="text-sm">Built by Riverflow Team.</p>
        </div>
      </footer>

);

};