import Header from './Header.jsx';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-slate-900">
      <TopBar/>
      <Header />

      {/* Main content */}
      <main className="flex-1 p-4 bg-white overflow-y-auto">
        {children}
      </main>

      <Footer/>
    </div>
  );
};
