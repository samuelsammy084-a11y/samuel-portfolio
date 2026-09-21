import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#top" className="nav-logo">
          SAMUEL<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="/Samuel-Ndlovu-CV.pdf" download className="nav-cta">
          DOWNLOAD CV
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">CREATIVE • DIGITAL • TECHNICAL</p>

          <h1>
            SAMUEL<span>NDLOVU.</span>
          </h1>

          <h2>
            Creative Designer <span>•</span> Web Developer{" "}
            <span>•</span> Digital Marketer <span>•</span> Media Production
          </h2>

          <p className="hero-description">
            I build visual identities, websites, digital experiences and media
            systems that bring ideas to life. My work sits at the intersection
            of creativity, technology and problem solving.
          </p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              VIEW MY WORK
            </a>

            <a href="#contact" className="btn">
              CONTACT ME
            </a>

            <a href="/Samuel-Ndlovu-CV.pdf" download className="btn">
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img src="/images/samuel-portrait.jpg" alt="Samuel Ndlovu" />

            <div className="hero-image-label">
              <span>AVAILABLE FOR</span>
              <strong>CREATIVE • DIGITAL • TECH</strong>
            </div>
          </div>

          <div className="hero-index">01</div>
        </div>

        <div className="pirate-easter-egg" aria-hidden="true">
          <div className="pirate-track">
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
            <div className="pirate">
              <span className="pirate-flag" />
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-grid">
          <div>
            <div className="about-number">01</div>
          </div>

          <div className="about-copy">
            <p className="eyebrow">ABOUT ME</p>

            <h2>
              CREATIVE
              <br />
              <span>PROBLEM</span>
              <br />
              SOLVER.
            </h2>

            <p>
              I am a multidisciplinary creative working across graphic design,
              web development, digital marketing, print and live media
              production.
            </p>

            <p>
              I enjoy taking an idea from a rough concept and turning it into
              something people can actually see, use and interact with.
            </p>

            <p>
              My approach combines design thinking, technology and practical
              problem solving to create work that looks good and actually does
              something.
            </p>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-heading">
          <p className="eyebrow">WHAT I DO</p>

          <h2>
            MULTI
            <br />
            DISCIPLINARY.
          </h2>

          <p>
            Different tools. Different disciplines. One goal: create useful,
            memorable digital and visual experiences.
          </p>
        </div>

        <div className="skills-grid">
          <SkillCard
            number="01"
            title="Graphic Design"
            text="Branding, logos, posters, flyers, social media graphics, marketing materials and visual identities."
          />

          <SkillCard
            number="02"
            title="Web Development"
            text="Responsive websites and digital products using React, Next.js, TypeScript, Tailwind CSS, Supabase and Vercel."
          />

          <SkillCard
            number="03"
            title="Digital Marketing"
            text="SEO, online presence, Google Business, social media strategy and digital growth."
          />

          <SkillCard
            number="04"
            title="Print & Apparel"
            text="DTF, sublimation, apparel graphics, print-ready artwork and production-focused design."
          />

          <SkillCard
            number="05"
            title="Live Production"
            text="ATEM switching, OBS, livestreaming, camera feeds, graphics, audio and video workflows."
          />

          <SkillCard
            number="06"
            title="AI & Digital Tools"
            text="Using modern digital and AI tools to speed up creative work, solve problems and build better workflows."
          />
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>

          <h2>
            THINGS
            <br />
            I&apos;VE BUILT.
          </h2>

          <p>
            A selection of projects across web development, branding, graphic
            design, apparel and live production.
          </p>
        </div>

        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">01 / WEB DEVELOPMENT</p>
              <h3>HomeLinker</h3>
            </div>

            <p>
              A South African property marketplace I designed, developed and
              continue to build. Users can search properties, view locations
              on maps and publish property listings.
            </p>
          </div>

          <div className="project-showcase">
            <div className="project-showcase-content">
              <p className="eyebrow">FLAGSHIP PROJECT</p>

              <h3>
                HOME
                <br />
                LINKER<span>.</span>
              </h3>

              <p>
                A property marketplace built from the ground up using modern
                web technologies. The platform combines property listings,
                search, maps, accounts, image uploads, SEO and a responsive
                user experience.
              </p>

              <div className="project-links">
                <Link href="/work/homelinker" className="project-link">
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

        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">02 / GRAPHIC DESIGN</p>

              <h3>
                Visual
                <br />
                Design
              </h3>
            </div>

            <p>
              Posters, promotional graphics, branding concepts, marketing
              artwork and digital designs.
            </p>
          </div>

          <div className="design-gallery">
            <div className="design-item">
              <img src="/images/design-01.jpg" alt="Graphic design project" />
            </div>

            <div className="design-item">
              <img src="/images/design-02.jpg" alt="Graphic design project" />
            </div>

            <div className="design-item">
              <img
                src="/images/homelinker.png"
                alt="HomeLinker branding project"
              />
            </div>

            <div className="design-item">
              <img
                src="/images/samuel-about.jpg"
                alt="Samuel Ndlovu creative design"
              />
            </div>
          </div>
        </div>

        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">03 / APPAREL & PRINT</p>

              <h3>
                Print
                <br />
                Ready.
              </h3>
            </div>

            <p>
              Design work created for clothing, merchandise and physical
              production.
            </p>
          </div>

          <div className="apparel-grid">
            <div className="apparel-card">
              <img src="/images/shirt-design.jpeg" alt="Apparel design" />
            </div>

            <div className="apparel-card">
              <img src="/images/design-01.jpg" alt="Print design" />
            </div>
          </div>
        </div>

        <div className="work-block">
          <div className="work-block-heading">
            <div>
              <p className="project-category">04 / MEDIA PRODUCTION</p>

              <h3>
                Live
                <br />
                Production
              </h3>
            </div>

            <p>
              Live streaming, switching, graphics and audio/video production.
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

      <section className="services" id="services">
        <div className="section-heading">
          <p className="eyebrow">SERVICES</p>

          <h2>
            WHAT I CAN
            <br />
            BUILD.
          </h2>

          <p>
            Need something designed, built, marketed or produced? These are the
            areas I can help with.
          </p>
        </div>

        <div className="services-grid">
          <Service
            number="01"
            title="Brand & Graphic Design"
            text="Logos, branding, posters, flyers, social media artwork, presentations and marketing materials."
          />

          <Service
            number="02"
            title="Website Development"
            text="Modern responsive websites, landing pages and digital platforms built around real business needs."
          />

          <Service
            number="03"
            title="Digital Marketing"
            text="SEO, Google Business setup, social media content and online presence optimisation."
          />

          <Service
            number="04"
            title="Print & Apparel"
            text="Artwork prepared for DTF, sublimation, clothing, merchandise and other physical production."
          />

          <Service
            number="05"
            title="Livestream Production"
            text="ATEM switching, OBS, camera setups, live graphics, audio/video workflows and YouTube streaming."
          />

          <Service
            number="06"
            title="Creative Technology"
            text="Combining design, code and modern digital tools to create practical solutions."
          />
        </div>
      </section>

      <section className="experience">
        <div className="section-heading">
          <p className="eyebrow">EXPERIENCE</p>

          <h2>
            WHERE I&apos;VE
            <br />
            WORKED.
          </h2>
        </div>

        <div className="experience-list">
          <Experience
            year="01"
            title="HomeLinker"
            role="Founder • Designer • Developer"
            text="Built and continue developing a South African property marketplace from concept to deployed product."
          />

          <Experience
            year="02"
            title="Freelance"
            role="Creative & Digital"
            text="Graphic design, digital marketing, web development, branding and creative projects for different clients."
          />

          <Experience
            year="03"
            title="Urban Ink Studios"
            role="Graphic Design • Print"
            text="Worked across DTF, sublimation, apparel design, print production and customer-focused creative work."
          />

          <Experience
            year="04"
            title="SkyCity Printing"
            role="Graphic Designer"
            text="Created graphic design work and production artwork for print and promotional materials."
          />

          <Experience
            year="05"
            title="Live Media Production"
            role="ATEM • OBS • Streaming"
            text="Hands-on experience with live switching, livestreaming, graphics, cameras, audio and video workflows."
          />
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">LET&apos;S WORK</p>

        <h2>
          HAVE AN
          <br />
          IDEA?
          <br />
          LET&apos;S
          <br />
          BUILD IT.
        </h2>

        <p>
          Looking for someone who can combine design, technology and digital
          thinking? Get in touch and let&apos;s talk about what you&apos;re
          building.
        </p>

        <div className="contact-links">
          <a href="mailto:samuelsammythando@gmail.com">EMAIL ME</a>

          <a href="tel:0614445545">061 444 5545</a>

          <a
            href="https://www.linkedin.com/in/samuel-ndlovu-94aa23420/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/samuelsammy084-a11y/Homelinker"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a href="/Samuel-Ndlovu-CV.pdf" download>
            DOWNLOAD CV
          </a>
        </div>
      </section>

      <div className="mobile-call-bar">
        <a href="tel:0614445545">
          <span>☎</span>
          CALL ME
        </a>
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} <strong>Samuel Ndlovu</strong>
        </span>

        <span>CREATIVE • DIGITAL • TECHNICAL</span>

        <span>BUILT WITH NEXT.JS</span>
      </footer>
    </main>
  );
}

function SkillCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="skill-card">
      <span className="skill-card-number">{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Service({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="service">
      <span className="service-number">{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function Experience({
  year,
  title,
  role,
  text,
}: {
  year: string;
  title: string;
  role: string;
  text: string;
}) {
  return (
    <div className="experience-item">
      <span className="experience-year">{year}</span>

      <div>
        <h3>{title}</h3>

        <p>{text}</p>
      </div>

      <span className="experience-role">{role}</span>
    </div>
  );
}