export default function Project() {
  return (
    <section id="projects" className="min-h-svh flex items-center justify-start px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 border-t border-neutral-900 selection:bg-neutral-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
        
        {/* Titre section */}
        <div className="lg:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            03 . Projets
          </h2>
        </div>

        {/* a voir  */}
        <div className="lg:col-span-9 lg:pl-12 border-l-0 lg:border-l border-neutral-900/60">
          <p className="text-2xl sm:text-4xl font-light text-neutral-500 tracking-tight">
            En développement pour le moment<span className="text-neutral-700 font-normal">...</span>
          </p>
        </div>

      </div>
    </section>
  );
}