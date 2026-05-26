import faceImage from '../assets/face.jpeg';

export default function Hero() {
  return (
    <div className="min-h-[calc(100svh-4rem)] flex items-center px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 selection:bg-neutral-800">
      <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-12">
        
        {/* Colonne Texte */}
        <div className="w-full lg:w-3/5 space-y-8 text-left">
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-semibold tracking-tighter text-white">
            Mathias<span className="text-neutral-500 font-light"> Rodrigues</span>
          </h1>

          <div className="border-l-2 border-neutral-800 pl-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-neutral-300">
              Étudiant de première année d'Epitech
            </h2>
          </div>

          <p className="text-lg sm:text-2xl font-light text-neutral-400 max-w-2xl leading-relaxed tracking-wide">
            Passionné par le développement et les nouveaux défis techniques.
          </p>
        </div>

        {/* Colonne Photo */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
            <img 
              src={faceImage}
              alt="Mathias Rodrigues" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Petit effet d'ombre interne pour le style */}
            <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
}