import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/40 backdrop-blur-md border-b border-neutral-900/40">
        <Navbar />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}