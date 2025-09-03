// src/app/page.tsx
'use client';

import Astronaut from '@/components/Astronaut.jsx';
import { useState, useEffect } from 'react';
import './globals.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [astronautMessage, setAstronautMessage] = useState('¡Hola! Soy Leo, tu guía en este viaje espacial.');

  useEffect(() => {
    const messages = {
      hero: '¡Bienvenido a mi universo digital! Soy Leo, Lic. en Sistemas en formación.',
      about: 'Me apasiona la tecnología y crear soluciones que la gente realmente necesita.',
      skills: 'Domino diversas tecnologías para construir soluciones completas.',
      projects: 'Estos son algunos de mis proyectos más interesantes.',
      contact: '¿Listo para iniciar una misión juntos? ¡Contáctame!'
    };

    setAstronautMessage(messages[activeSection as keyof typeof messages] || messages.hero);
  }, [activeSection]);

  return (
    <div className="space-theme">
      {/* Fondos espaciales */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      
      {/* Astronauta guía */}
      <div className="astronaut-guide">
        <div className="astronaut">👨‍🚀</div>
        <div className="speech-bubble">
          <p>{astronautMessage}</p>
        </div>
      </div>

      <main className="container">
        {/* Hero Section CON EL ASTRONAUTA 3D */}
        <section id="hero" className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Leonardo Oscar Canteros</span>
            </h1>
            <p className="hero-subtitle">
              <span className="highlight">Licenciado en Sistemas</span> (Estudiante)
            </p>
            <p className="hero-description">
              "Hago lo que la gente quiera pero sobre todo lo que necesite"
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => setActiveSection('projects')}>
                Ver Mis Proyectos
              </button>
              <button className="btn-secondary" onClick={() => setActiveSection('contact')}>
                Contactar
              </button>
            </div>
          </div>
          
          {/* AQUÍ SE INTEGRA EL ASTRONAUTA 3D */}
          <Astronaut />
        </section>

        {/* Sobre Mí */}
        <section id="about" className="section">
          <h2 className="section-title">Mi Misión</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy <strong>Leo</strong>, y eso ya lo dice todo. Como estudiante de Licenciatura en Sistemas, 
                me especializo en entender las necesidades reales detrás de lo que las personas creen que quieren.
              </p>
              <p>
                Mi filosofía de trabajo se basa en crear soluciones óptimas pero siempre con un enfoque humano, 
                asegurando que la tecnología sirva a las personas y no al revés.
              </p>
            </div>
            <div className="about-illustration">
              <div className="planet">🪐</div>
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section id="skills" className="section">
          <h2 className="section-title">Tecnologías que Domino</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Bases de Datos</h3>
              <div className="skills-list">
                <span className="skill-tag">Relacionales</span>
                <span className="skill-tag">No Relacionales</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Herramientas</h3>
              <div className="skills-list">
                <span className="skill-tag">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="section">
          <h2 className="section-title">Misiones Completadas</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>More That Sound</h3>
              <p>Plataforma musical con recomendaciones inteligentes</p>
              <div className="tech-stack">
                <span>Vue.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Cafe Aroma</h3>
              <p>Sistema de gestión para cafetería con control de inventario</p>
              <div className="tech-stack">
                <span>React</span>
                <span>Python</span>
                <span>SQLite</span>
              </div>
            </div>
            
            <div className="project-card">
              <h3>CF Costura Fina</h3>
              <p>E-commerce para negocio de confecciones personalizadas</p>
              <div className="tech-stack">
                <span>JavaScript</span>
                <span>Java</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="section">
          <h2 className="section-title">Control de Misión</h2>
          <div className="contact-content">
            <p>¿Tienes una idea que quieres hacer realidad? ¡Hablemos!</p>
            <div className="contact-info">
              <a href="mailto:tu.email@ejemplo.com" className="contact-link">📧 Email</a>
              <a href="tel:+1234567890" className="contact-link">📞 Teléfono</a>
              <a href="https://linkedin.com/in/tuperfil" className="contact-link">💼 LinkedIn</a>
              <a href="https://github.com/tuusuario" className="contact-link">🐱 GitHub</a>
            </div>
          </div>
        </section>
      </main>

      {/* Navegación */}
      <nav className="space-nav">
        <button onClick={() => setActiveSection('hero')} className={activeSection === 'hero' ? 'active' : ''}>Inicio</button>
        <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>Sobre Mí</button>
        <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Habilidades</button>
        <button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</button>
        <button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contacto</button>
      </nav>
    </div>
  );
}