import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import gustavo from "./assets/gustavo.png";

export default function App() {
  const { t, language, toggleLanguage } = useLanguage();

  const projectsData = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "https://github.com/Medeiros281213",
      demo: "#",
    },
  ];

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">

      <div className="bg-effect"></div>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 120,

          particles: {
            color: {
              value: "#60a5fa",
            },

            links: {
              color: "#60a5fa",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              speed: 1,
            },

            number: {
              value: 60,
            },

            opacity: {
              value: 0.3,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: true,
        }}
      />
      

      <nav className="navbar">

        <h1>&lt;/&gt; Gustavo.</h1>

        <div className="nav-center">
          <ul>
            <li><a href="#home">{t.nav.home}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#education">{t.nav.education}</a></li>
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#skills">{t.nav.skills}</a></li>
            <li><a href="#experience">{t.nav.experience}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </div>

        <button className="language-toggle" onClick={toggleLanguage}>
          {language === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>

      </nav>

      <section id="home" className="hero">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="badge">
            {t.hero.badge}
          </span>

          <h2>
            {t.hero.name}
          </h2>

          <h3>

            <Typewriter
              words={t.hero.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />

          </h3>

          <p>
            {t.hero.description}
          </p>

          <div className="hero-stats">

            <div>
              <h4>10+</h4>
              <span>{t.hero.stats.projects}</span>
            </div>

            <div>
              <h4>5+</h4>
              <span>{t.hero.stats.technologies}</span>
            </div>

            <div>
              <h4>100+</h4>
              <span>{t.hero.stats.commits}</span>
            </div>

          </div>

          <div className="hero-buttons">

            <button onClick={() => scrollTo('projects')}>
              {t.hero.buttons.projects}
            </button>

            <button className="outline" onClick={() => scrollTo('contact')}>
              {t.hero.buttons.contact}
            </button>

          </div>

          <div className="socials">

            <a
              href="https://github.com/Medeiros281213"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gustavo-dos-santos-faria-medeiros-florentino-647412235/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/5541997246465"
              target="_blank"
            >
              <FaWhatsapp />
            </a>

          </div>

        </motion.div>

        <div className="hero-right">

          <div className="code-card">

            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

<pre>
{`const Gustavo = {

  formacao: "ADS",

  foco: [
    "Frontend",
    "Backend",
    "QA",
    "Automação",
  ],

  tecnologias: [
    "React",
    "Node.js",
    "Java",
    "SQL",
  ],

  objetivo:
  "Criar soluções inteligentes"
}`}
</pre>

          </div>

        </div>

      </section>

      <section id="about" className="about">

  <div className="about-left">

    <div className="profile-circle">

      <img
        src={gustavo}
        alt="gustavo"
            />

          </div>

        </div>

        <div className="about-right">

          <h2>{t.about.title}</h2>

          <p>
            {t.about.description}
          </p>

          <div className="info-boxes">
            {t.about.infoBoxes.map((box, i) => (
              <div key={i}>{box}</div>
            ))}
          </div>

        </div>

      </section>

      <section id="education" className="education">

        <h2>{t.education.title}</h2>

        <div className="education-grid">

          {t.education.courses.map((course, i) => (
            <div key={i} className="education-card">
              <h3>{course.title}</h3>
              <p>{course.school}</p>
              <span>{course.period}</span>
            </div>
          ))}

        </div>

      </section>

      <section id="skills" className="skills">

        <h2>{t.skills.title}</h2>

        <div className="skills-grid">

          <div>
            <FaReact />
            <span>React</span>
          </div>

          <div>
            <SiJavascript />
            <span>JavaScript</span>
          </div>

          <div>
            <FaNodeJs />
            <span>Node.js</span>
          </div>

          <div>
            <FaJava />
            <span>Java</span>
          </div>

          <div>
            <SiMysql />
            <span>SQL</span>
          </div>

          <div>
            <FaGitAlt />
            <span>Git</span>
          </div>

          <div>
            <SiDocker />
            <span>Docker</span>
          </div>

          <div>
            <SiTailwindcss />
            <span>Tailwind</span>
          </div>

        </div>

      </section>

      <section id="projects" className="projects">

        <h2>{t.projects.title}</h2>

        <div className="projects-grid">

          {t.projects.list.map((project, index) => (

            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${projectsData[index].image})`,
                }}
              ></div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                <div className="techs">

                  {project.tech.map((tech, i) => (
                    <span key={i}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-buttons">

                  <a
                    href={projectsData[index].github}
                    target="_blank"
                  >
                    {t.projects.buttons.github}
                  </a>

                  <a
                    href={projectsData[index].demo}
                    target="_blank"
                  >
                    {t.projects.buttons.demo}
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      <section id="experience" className="experience">

        <h2>{t.experience.title}</h2>

        <div className="timeline">

          {t.experience.jobs.map((job, i) => (
            <div key={i} className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <h3>{job.title}</h3>

                <span>{job.period}</span>

                <p>
                  {job.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      <footer id="contact" className="footer">

        <div>

          <h3>{t.footer.contact}</h3>

          <p>
            {t.footer.email}
          </p>

          <p>
            {t.footer.phone}
          </p>

          <p>
            {t.footer.location}
          </p>

        </div>

        <div>

          <h3>{t.footer.networks}</h3>

          <a
            href="https://github.com/Medeiros281213"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-dos-santos-faria-medeiros-florentino-647412235/"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>
  );
}