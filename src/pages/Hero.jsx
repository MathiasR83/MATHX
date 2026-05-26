export default function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] flex items-center justify-start px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 selection:bg-neutral-800">
      <div className="max-w-5xl w-full space-y-8 text-left">
        
        {/* Nom prenom  */}
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tighter text-white">
          Mathias<span className="text-neutral-500 font-light"> Rodrigues</span>
        </h1>

        {/* Fonction */}
        <div className="border-l-2 border-neutral-800 pl-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-300">
            Étudiant de première année d'Epitech
          </h2>
        </div>

        {/* Phrase d'accroche */}
        <p className="text-lg sm:text-2xl font-light text-neutral-400 max-w-2xl leading-relaxed tracking-wide">
          Recherche d'idées pour le moment.
        </p>

      </div>
    </div>
  );
}