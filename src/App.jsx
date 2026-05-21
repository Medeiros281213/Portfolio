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
import gustavo from "./assets/gustavo.png";

const projects = [
  {
    title: "Sistema React Login",
    desc: "Sistema moderno de autenticação utilizando React, Vite e componentes responsivos.",
    tech: ["React", "Vite", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Bot WhatsApp Automatizado",
    desc: "Automação de mensagens utilizando Node.js com integração WhatsApp.",
    tech: ["Node.js", "API", "Automação"],
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Projeto Java - Grafo de Livros",
    desc: "Sistema acadêmico utilizando grafos, POO e estruturas de dados.",
    tech: ["Java", "POO", "Grafos"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Projeto UML Academia",
    desc: "Modelagem completa de sistema acadêmico utilizando UML.",
    tech: ["UML", "Diagramas", "Modelagem"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "DevOps & Testes",
    desc: "Projetos com testes unitários, integração contínua e versionamento.",
    tech: ["GitHub", "Docker", "QA"],
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Dashboard de Dados",
    desc: "Dashboard interativo para análise e visualização estratégica de dados.",
    tech: ["Power BI", "SQL", "Dados"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Processamento de Imagens",
    desc: "Projeto técnico utilizando Agisoft Metashape para reconstrução 3D.",
    tech: ["Metashape", "3D", "Imagens"],
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },

  {
    title: "Sistema de Gerenciamento",
    desc: "Sistema completo com autenticação, CRUD e gerenciamento de usuários.",
    tech: ["React", "Node.js", "MySQL"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    github: "https://github.com/Medeiros281213",
    demo: "#",
  },
];

export default function App() {

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

        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>

      </nav>

      <section id="home" className="hero">

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <span className="badge">
            👋 Olá, eu sou
          </span>

          <h2>
            Gustavo dos Santos
            <br />
            Faria Medeiros Florentino
          </h2>

          <h3>

            <Typewriter
              words={[
                "DESENVOLVEDOR FRONTEND",
                "ANALISTA DE DADOS",
                "QA & TESTES",
                "AUTOMAÇÃO",
                "NODE.JS",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />

          </h3>

          <p>
            Estudante de Análise e Desenvolvimento de Sistemas
            apaixonado por tecnologia, desenvolvimento web,
            automação, análise de dados e soluções inteligentes.
          </p>

          <div className="hero-stats">

            <div>
              <h4>10+</h4>
              <span>Projetos</span>
            </div>

            <div>
              <h4>5+</h4>
              <span>Tecnologias</span>
            </div>

            <div>
              <h4>100+</h4>
              <span>Commits</span>
            </div>

          </div>

          <div className="hero-buttons">

            <button onClick={() => scrollTo('projects')}>
              Ver Projetos
            </button>

            <button className="outline" onClick={() => scrollTo('contact')}>
              Entrar em Contato
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

          <h2>Sobre Mim</h2>

          <p>
            Olá, sou Gustavo, estudante de Análise e Desenvolvimento de Sistemas,
            com formação técnica na área de tecnologia e interesse em desenvolvimento,
            dados e soluções digitais. Tenho experiência com suporte a sistemas, 
            testes de funcionalidades, treinamento de IA, processamento de imagens e análise técnica em inspeção industrial. 
            Também desenvolvo projetos utilizando tecnologias como Java, React e Git/GitHub, 
            buscando sempre aprimorar minhas habilidades em programação, UI/UX e desenvolvimento web. 
            Sou comunicativo, organizado e movido pelo aprendizado contínuo, com o objetivo de crescer profissionalmente como desenvolvedor e analista de dados.
          </p>

          <div className="info-boxes">

            <div>🎓 Análise e Desenvolvimento de Sistemas</div>

            <div>💻 Técnico em Desenvolvimento de Sistemas</div>

            <div>📍 Curitiba - PR</div>

          </div>

        </div>

      </section>

      <section id="education" className="education">

        <h2>Formação Acadêmica</h2>

        <div className="education-grid">

          <div className="education-card">
            <h3>Analise e Desenvolvimento de sistemas</h3>
            <p>Pontifícia Universidade Católica do Paraná (PUC-PR)</p>
            <span>2024-2026 - Em andamento</span>
          </div>

          <div className="education-card">
            <h3>Desenvolvimento de sistemas</h3>
            <p>Serviço Nacional de Aprendizagem Industrial (SENAI)</p>
            <span>2022-2023 - Finalizado</span>
          </div>

          <div className="education-card">
            <h3>Manutenção e Suporte em Informática</h3>
            <p>Escola Técnica</p>
            <span>2021-2022 - Finalizado</span>
          </div>

        </div>

      </section>

      <section id="skills" className="skills">

        <h2>Skills</h2>

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

        <h2>Projetos em Destaque</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

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
                  backgroundImage: `url(${project.image})`,
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
                    href={project.github}
                    target="_blank"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                  >
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      <section id="experience" className="experience">

        <h2>Experiência</h2>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>💻Prefeitura de São José dos Pinhais – Estagiário de RH  </h3>

              <span>2022-2023</span>

              <p>
                Organização de documentos e apoio administrativo
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>Kuhn do Brasil – Aprendiz de Metalurgia</h3>

              <span>2023</span>

              <p>
                Controle de indicadores de produção e organização de dados.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>💻VHSYS – Técnico de Apoio ao Usuário</h3>

              <span>2024</span>

              <p>
                Suporte ao usuário, testes de funcionalidades,
                validação de sistemas e resolução de problemas.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <h3>🚀 Vidya Technology – Técnico de Gestão de Integridade (Atual) </h3>

              <span>2025-2026 - Atual</span>

              <p>
                Realizo testes de funcionalidades após atualizações para identificar falhas, atuo no
                treinamento de IA com curadoria de dados e utilizo o Agisoft Metashape para
                processamento de imagens. Também realizo inspeções de ativos no setor de petróleo
                e gás, classificando níveis de corrosão conforme normas técnicas. Aplico critérios
                normativos para padronização de dados, além de apoiar na automação de processos e
                análise de indicadores.

              </p>

            </div>

          </div>

        </div>

      </section>

      <footer id="contact" className="footer">

        <div>

          <h3>Contato</h3>

          <p>
            📧 gustavosfmf28@gmail.com
          </p>

          <p>
            📱 (41) 99724-6465
          </p>

          <p>
            📍 Curitiba - PR
          </p>

        </div>

        <div>

          <h3>Redes</h3>

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