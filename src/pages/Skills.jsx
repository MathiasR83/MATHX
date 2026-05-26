export default function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Développement Web",
      skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS v4", "HTML5 / CSS3"]
    },
    {
      number: "02",
      title: "Cybersécurité & Sécurité",
      skills: ["OWASP Top 10", "Vulnérabilités Web", "Pratiques de Code Sécurisé", "Bases de l'Authentification"]
    },
    {
      number: "03",
      title: "Back-End & Outils",
      skills: ["Node.js", "Express", "Git / GitHub", "APIs REST", "Bases SQL / NoSQL"]
    },
    {
      number: "04",
      title: "Méthodologie",
      skills: ["Pédagogie par Projet", "Autonomie & Adaptabilité", "Esprit Agile"]
    }
  ];

  return (
    <section id="skills" className="min-h-svh flex items-center justify-start px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 border-t border-neutral-900 selection:bg-neutral-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
        
        {/* Titre section */}
        <div className="lg:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            02 . Compétences
          </h2>
        </div>

        {/* liste compétences */}
        <div className="lg:col-span-9 space-y-16 lg:pl-12 border-l-0 lg:border-l border-neutral-900/60">
          
          <div className="space-y-12 w-full">
            {skillCategories.map((category) => (
              <div 
                key={category.number} 
                className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-neutral-900/40 last:border-0"
              >
                {/* Numéro et catégorie */}
                <div className="md:col-span-4 flex items-baseline gap-3">
                  <span className="text-xs font-mono text-neutral-600">{category.number}</span>
                  <h3 className="text-xl font-medium text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                {/* liste techno et séparateur */}
                <div className="md:col-span-8 flex flex-wrap gap-x-6 gap-y-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-base sm:text-lg font-light text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                      {index < category.skills.length - 1 && (
                        <span className="text-neutral-800 ml-6 font-normal">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}