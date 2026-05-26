import Layout from "./components/Layout";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Layout>
       <section id="home">
        <Hero />
      </section>
  
      
      <section id="about">
        <About />
      </section>
    
      <section id="skills">
        <Skills />
      </section>
        
      <section id="projects">
        <Project />
      </section>
    
      <section id="contact">
        <Contact />
      </section> 
    </Layout>
  );
}