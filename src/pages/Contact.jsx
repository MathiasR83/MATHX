import { useState } from "react";

export default function Contact() {
  // Récupération sécurisée et propre de ton ID via Vite
  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID; 
  
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Envoi en cours...");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-svh flex items-center justify-start px-8 sm:px-16 lg:px-24 bg-neutral-950 text-neutral-100 border-t border-neutral-900 selection:bg-neutral-800">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
        
        {/* Titre section  */}
        <div className="lg:col-span-3">
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
            04 . Contact
          </h2>
        </div>

        {/* Contenu, formulaire */}
        <div className="lg:col-span-9 space-y-12 lg:pl-12 border-l-0 lg:border-l border-neutral-900/60 text-left w-full">
          
          <h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-white leading-none">
            Créons quelque chose <br />
            <span className="text-neutral-500 font-light">ensemble.</span>
          </h3>

          {/* Gestion de l'affichage en cas de succès */}
          {status === "success" ? (
            <div className="pt-4 max-w-2xl bg-neutral-900/20 border border-neutral-900 p-6">
              <p className="text-sm font-mono uppercase tracking-wider text-white mb-2">Statut : Transmis</p>
              <p className="text-lg font-light text-neutral-400">
                Merci ! Ton message a été envoyé avec succès. Je te réponds au plus vite.
              </p>
            </div>
          ) : (
            /* Fomulaire */
            <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl w-full pt-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Champ Nom */}
                <div className="flex flex-col space-y-2 border-b border-neutral-900 focus-within:border-white transition-colors duration-300 pb-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase text-neutral-600">Nom</label>
                  <input required type="text" name="name" id="name" placeholder="Votre nom" className="bg-transparent border-0 outline-none text-neutral-200 placeholder-neutral-700 font-light text-base" />
                </div>

                {/* Champ Email */}
                <div className="flex flex-col space-y-2 border-b border-neutral-900 focus-within:border-white transition-colors duration-300 pb-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase text-neutral-600">Email</label>
                  <input required type="email" name="email" id="email" placeholder="votre@email.com" className="bg-transparent border-0 outline-none text-neutral-200 placeholder-neutral-700 font-light text-base" />
                </div>
              </div>

              {/* Champ Message */}
              <div className="flex flex-col space-y-2 border-b border-neutral-900 focus-within:border-white transition-colors duration-300 pb-2">
                <label htmlFor="message" className="text-xs font-mono uppercase text-neutral-600">Message</label>
                <textarea required name="message" id="message" rows="4" placeholder="Décrivez votre projet ou votre demande..." className="bg-transparent border-0 outline-none text-neutral-200 placeholder-neutral-700 font-light text-base resize-none"></textarea>
              </div>

              {/* Bouton d'envoie et État */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="text-sm font-mono uppercase tracking-wider text-white border border-neutral-800 hover:border-white px-8 py-3 bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer w-full sm:w-auto text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Envoi..." : "Envoyer le message"}
                </button>
                
                {status === "error" && (
                  <p className="text-xs font-mono text-neutral-500">
                    Une erreur est survenue.
                  </p>
                )}
              </div>

            </form>
          )}

          {/* FOOTER */}
          <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-600 border-t border-neutral-900/40 max-w-2xl">
            <p>Conçu & Développé par Mathias Rodrigues</p>
          </div>

        </div>

      </div>
    </section>
  );
}