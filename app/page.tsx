import Link from "next/link";

const skills = [
  {
    number: "01",
    title: "Graphic Design",
    description:
      "Branding, logos, posters, flyers, social media graphics and marketing materials.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern responsive websites and web applications using React, Next.js, TypeScript and modern web technologies.",
  },
  {
    number: "03",
    title: "Digital Marketing",
    description:
      "SEO, Google Business, social media and digital strategies designed to help businesses grow online.",
  },
  {
    number: "04",
    title: "Print & Production",
    description:
      "DTF, sublimation, apparel design, print-ready artwork and production workflows.",
  },
  {
    number: "05",
    title: "Live Production",
    description:
      "Live streaming, switching, broadcast graphics, cameras, audio/video workflows and production.",
  },
  {
    number: "06",
    title: "AI & Technology",
    description:
      "Using AI and modern digital tools to solve problems, improve workflows and build better digital experiences.",
  },
];

const services = [
  "Brand Identity",
  "Graphic Design",
  "Website Development",
  "Landing Pages",
  "SEO",
  "Digital Marketing",
  "Social Media Design",
  "Print & Apparel",
  "Live Streaming",
  "Creative Direction",
];

const experiences = [
  {
    number: "01",
    role: "Founder • Developer",
    company: "HomeLinker",
    description:
      "Founded and developed a South African property marketplace from the ground up, working across product design, web development, SEO, marketing and digital strategy.",
  },
  {
    number: "02",
    role: "Creative • Digital",
    company: "Freelance",
    description:
      "Working across graphic design, branding, websites, digital marketing, social media and creative problem solving for different projects and businesses.",
  },
  {
    number: "03",
    role: "Print • Apparel",
    company: "Urban Ink Studios",
    description:
      "Worked with DTF, sublimation, apparel design, print production and preparing artwork for physical products.",
  },
  {
    number: "04",
    role: "Graphic Designer",
    company: "SkyCity Printing",
    description:
      "Created graphic design and print materials while working within a production-focused printing environment.",
  },
  {
    number: "05",
    role: "Media • Production",
    company: "Live Production",
    description:
      "Experience with ATEM Mini Pro, OBS Studio, Bitfocus Companion, livestreaming, camera feeds, graphics and audio/video production.",
  },
];

function SkillCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="skill-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function Service({ children }: { children: React.ReactNode }) {
  return (
    <div className="service-item">
      <span>+</span>
      <strong>{children}</strong>
    </div>
  );
}

function Experience({
  number,
  role,
  company,
  description,
}: {
  number: string;
  role: string;
  company: string;
  description: string;
}) {
  return (
    <article className="experience-item">
      <span className="experience-number">{number}</span>

      <div>
        <p className="experience-role">{role}</p>
        <h3>{company}</h3>
        <p className="experience-description">{description}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <Link href="/" className="nav-logo">
          SAMUEL<span>.</span>
        </Link>

        <nav className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a
          href="/Samuel-Ndlovu-CV.pdf"
          download
          className="nav-cta"
        >
          DOWNLOAD CV
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">CREATIVE • DIGITAL • TECHNICAL</p>

          <h1>
            SAMUEL
            <span>NDLOVU.</span>
          </h1>

          <h2>
            Creative Designer <span>•</span> Web Developer{" "}
            <span>•</span> Digital Marketer <span>•</span> Media
            Production
          </h2>

          <p className="hero-description">
            I build visual identities, websites, digital experiences and
            media systems that bring ideas to life. My work sits at the
            intersection of creativity, technology and problem solving.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              VIEW MY WORK
            </a>

            <a href="#contact" className="btn">
              CONTACT ME
            </a>

            <a
              href="/Samuel-Ndlovu-CV.pdf"
              download
              className="btn"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src="/images/samuel-portrait.jpg"
              alt="Samuel Ndlovu"
            />

            <div className="hero-image-label">
              <span>AVAILABLE FOR</span>
              <strong>CREATIVE • DIGITAL • TECH</strong>
            </div>
          </div>

          <div className="hero-index">01</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img
              src="/images/samuel-about.jpg"
              alt="Samuel Ndlovu working creatively"
            />
          </div>

          <div className="about-content">
            <p className="section-eyebrow">MORE THAN A DESIGNER.</p>

            <h2>
              I BUILD
              <span>IDEAS.</span>
            </h2>

            <p>
              I&apos;m a multidisciplinary creative working across design,
              web development, digital marketing, print and live media
              production.
            </p>

            <p>
              I enjoy taking an idea from a blank page and turning it into
              something real — whether that is a brand, website, campaign,
              product, printed piece or live digital experience.
            </p>

            <p>
              My approach combines creative thinking with technology and
              practical problem solving.
            </p>

            <div className="about-facts">
              <div>
                <strong>06+</strong>
                <span>CREATIVE DISCIPLINES</span>
              </div>

              <div>
                <strong>01</strong>
                <span>FLAGSHIP PLATFORM</span>
              </div>

              <div>
                <strong>SA</strong>
                <span>SOUTH AFRICAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-label">
          <span>02</span>
          SKILLS
        </div>

        <div className="section-heading">
          <p className="section-eyebrow">WHAT I DO</p>

          <h2>
            CREATIVE
            <span>VERSATILITY.</span>
          </h2>

          <p>
            Different disciplines. One goal — creating work that looks
            good, works properly and solves a real problem.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard key={skill.number} {...skill} />
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-label">
          <span>03</span>
          SELECTED WORK
        </div>

        <div className="section-heading">
          <p className="section-eyebrow">PROJECTS</p>

          <h2>
            THINGS I&apos;VE
            <span>BUILT.</span>
          </h2>
        </div>

        {/* HOMELINKER */}
        <div className="work-block featured-work">
          <div className="work-block-heading">
            <div>
              <p className="project-category">01 / WEB DEVELOPMENT</p>

              <h3>HomeLinker</h3>
            </div>

            <p>
              A South African property marketplace built from the ground
              up.
            </p>
          </div>

          <div className="featured-project">
            <div className="featured-project-image">
              <img
                src="/images/homelinker.png"
                alt="HomeLinker property marketplace"
              />
            </div>

            <div className="featured-project-content">
              <span>FOUNDER • DEVELOPER • DESIGNER</span>

              <h3>
                FROM
                <br />
                IDEA TO
                <br />
                <strong>LIVE PLATFORM.</strong>
              </h3>

              <p>
                I designed and developed HomeLinker as a South African
                property marketplace where people can search for homes,
                view listings and connect with property owners and agents.
              </p>

              <div className="project-tech">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Supabase</span>
                <span>Tailwind</span>
                <span>Vercel</span>
                <span>Leaflet</span>
              </div>

              <div className="project-links">
                <Link
                  href="/work/homelinker"
                  className="project-link"
                >
                  VIEW CASE STUDY <span>↗</span>
                </Link>

                <a
                  href="https://www.homelinker.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VISIT WEBSITE <span>↗</span>
                </a>

                <a
                  href="https://github.com/samuelsammy084-a11y/Homelinker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VIEW GITHUB <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN */}
        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">02 / GRAPHIC DESIGN</p>

              <h3>Visual Design</h3>
            </div>

            <p>
              Branding, promotional graphics and visual communication.
            </p>
          </div>

          <div className="design-grid">
            <div className="design-card">
              <img
                src="/images/design-01.jpg"
                alt="Graphic design project"
              />
            </div>

            <div className="design-card">
              <img
                src="/images/design-02.jpg"
                alt="Graphic design project"
              />
            </div>
          </div>
        </div>

        {/* APPAREL */}
        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">03 / PRINT & APPAREL</p>

              <h3>Apparel Design</h3>
            </div>

            <p>
              Designs created for physical products, apparel and print.
            </p>
          </div>

          <div className="apparel-project">
            <img
              src="/images/shirt-design.jpeg"
              alt="Apparel design project"
            />

            <div className="apparel-overlay">
              <div>
                <span>DTF • SUBLIMATION • PRINT</span>

                <h3>APPAREL</h3>

                <p>
                  Creating artwork that works beyond the screen and can
                  become a physical product.
                </p>
              </div>

              <strong>03</strong>
            </div>
          </div>
        </div>

        {/* LIVE PRODUCTION */}
        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">04 / MEDIA PRODUCTION</p>

              <h3>Live Production</h3>
            </div>

            <p>
              Live streaming, switching, graphics and audio/video
              production.
            </p>
          </div>

          <div className="media-project">
            <img
              src="/images/livestream.jpeg"
              alt="Live production setup"
            />

            <div className="media-project-overlay">
              <div>
                <span>ATEM • OBS • LIVE STREAMING</span>

                <h3>LIVE MEDIA</h3>

                <a
                  href="https://www.youtube.com/live/gaBT9PK--tM?si=2ksoejL9AE1J4K7M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link media-link"
                >
                  WATCH THE LIVE STREAM <span>↗</span>
                </a>
              </div>

              <strong>04</strong>
            </div>
          </div>

          <div className="media-details">
            <div>
              <span>LIVE SWITCHING</span>
              <strong>ATEM Mini Pro</strong>
            </div>

            <div>
              <span>STREAMING</span>
              <strong>OBS Studio</strong>
            </div>

            <div>
              <span>PLATFORM</span>
              <strong>YouTube Live</strong>
            </div>

            <div>
              <span>PRODUCTION</span>
              <strong>Audio • Video • Graphics</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="section-label">
          <span>04</span>
          SERVICES
        </div>

        <div className="section-heading">
          <p className="section-eyebrow">HOW I CAN HELP</p>

          <h2>
            CREATIVE
            <span>EXECUTION.</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <Service key={service}>{service}</Service>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <div className="section-label">
          <span>05</span>
          EXPERIENCE
        </div>

        <div className="section-heading">
          <p className="section-eyebrow">WHERE I&apos;VE WORKED</p>

          <h2>
            EXPERIENCE
            <span>IN ACTION.</span>
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <Experience
              key={experience.number}
              {...experience}
            />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-label">
          <span>06</span>
          CONTACT
        </div>

        <div className="contact-content">
          <p className="section-eyebrow">LET&apos;S WORK TOGETHER</p>

          <h2>
            HAVE AN
            <span>IDEA?</span>
          </h2>

          <p className="contact-description">
            Whether you need a designer, developer, digital marketer or
            someone who can work across all of them — let&apos;s talk.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:samuelsammythando@gmail.com"
              className="btn btn-primary"
            >
              EMAIL ME
            </a>

            <a href="tel:0614445545" className="btn">
              CALL ME
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-ndlovu-94aa23420/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              LINKEDIN
            </a>

            <a
              href="https://github.com/samuelsammy084-a11y/Homelinker"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GITHUB
            </a>

            <a
              href="/Samuel-Ndlovu-CV.pdf"
              download
              className="btn"
            >
              DOWNLOAD CV
            </a>
          </div>

          <div className="contact-details">
            <a href="mailto:samuelsammythando@gmail.com">
              samuelsammythando@gmail.com
            </a>

            <a href="tel:0614445545">061 444 5545</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          SAMUEL<span>.</span>
        </div>

        <div className="footer-middle">
          CREATIVE • DIGITAL • TECHNICAL
        </div>

        <div className="footer-right">
          © {new Date().getFullYear()} SAMUEL NDLOVU
        </div>
      </footer>
    </main>
  );
}