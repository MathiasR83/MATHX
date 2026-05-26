export default function About() {
  return (
    <section id="about" className="min-h-svh flex items-center justify-start px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 border-t border-neutral-900 selection:bg-neutral-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
        
        {/* TITRE DE SECTION : Fixe à gauche */}
        <div className="lg:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            01 . À propos
          </h2>
        </div>

        {/* BLOC DE CONTENU : Décalé vers la droite */}
        <div className="lg:col-span-9 space-y-16 text-left lg:pl-12 border-l-0 lg:border-l border-neutral-900/60">
          
          {/* GRANDE PHRASE D'INTRODUCTION ACCENTUÉE */}
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15] max-w-3xl">
            Passionné par la tech, forgé par la logique et l'autonomie d'Epitech.
          </h3>

          {/* PARAGRAPHE DE DESCRIPTION EN LÉGER RETRAIT */}
          <div className="max-w-2xl ml-0 lg:ml-6">
            <p className="text-base sm:text-lg font-light text-neutral-400 leading-relaxed tracking-wide">
              J'apprends à aborder le code non pas comme une simple syntaxe, mais comme un outil de résolution de problèmes complexes. Cette formation intensive m'impose une rigueur de fer et une adaptabilité constante face aux défis techniques.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}