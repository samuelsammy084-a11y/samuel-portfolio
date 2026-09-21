import Link from "next/link";

export default function HomeLinkerCaseStudy() {
  return (
    <main className="case-study-page">
      <nav className="case-study-nav">
        <Link href="/" className="back-link">
          ← BACK TO PORTFOLIO
        </Link>

        <a
          href="https://www.homelinker.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="case-site-link"
        >
          VISIT HOMELINKER ↗
        </a>
      </nav>

      <section className="case-hero">
        <div className="case-hero-content">
          <p className="project-category">01 / WEB DEVELOPMENT</p>

          <h1>
            HOME
            <span>LINKER.</span>
          </h1>

          <p className="case-intro">
            A South African property marketplace built from the ground up
            to help people find homes while giving property owners and
            agents a place to advertise their listings.
          </p>

          <div className="case-actions">
            <a
              href="https://www.homelinker.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="case-button case-button-primary"
            >
              VISIT LIVE WEBSITE ↗
            </a>

            <a
              href="https://github.com/samuelsammy084-a11y/Homelinker"
              target="_blank"
              rel="noopener noreferrer"
              className="case-button"
            >
              VIEW GITHUB ↗
            </a>
          </div>
        </div>

        <div className="case-hero-image">
          <img
            src="/images/homelinker.png"
            alt="HomeLinker property marketplace"
          />
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <p>01 / OVERVIEW</p>
          <h2>Building a property platform.</h2>
        </div>

        <div className="case-overview-grid">
          <div>
            <span>ROLE</span>
            <strong>Founder • Developer • Designer</strong>
          </div>

          <div>
            <span>PLATFORM</span>
            <strong>Web Application</strong>
          </div>

          <div>
            <span>MARKET</span>
            <strong>South Africa</strong>
          </div>

          <div>
            <span>STATUS</span>
            <strong>Live</strong>
          </div>
        </div>

        <div className="case-text">
          <p>
            HomeLinker started as an idea for a simpler way to connect
            people with property in South Africa. I designed and developed
            the platform myself, working across the product, interface,
            database, property listings, maps, authentication and
            deployment.
          </p>

          <p>
            The goal was to create a property marketplace that could work
            nationally across South Africa rather than being limited to
            one city or area.
          </p>
        </div>
      </section>

      <section className="case-section case-dark">
        <div className="case-section-heading">
          <p>02 / THE PROBLEM</p>
          <h2>Making property discovery simpler.</h2>
        </div>

        <div className="case-text">
          <p>
            Property seekers need to quickly discover available homes,
            understand what a property offers and see where it is located.
          </p>

          <p>
            At the same time, property owners and agents need a simple way
            to publish listings and reach people searching for property.
          </p>

          <p>
            HomeLinker was created around those two sides of the
            marketplace.
          </p>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <p>03 / WHAT I BUILT</p>
          <h2>From idea to working platform.</h2>
        </div>

        <div className="case-feature-grid">
          <article>
            <span>01</span>
            <h3>PROPERTY LISTINGS</h3>
            <p>
              Users can create and publish property listings with pricing,
              descriptions, property types, bedrooms, bathrooms, parking
              and property images.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>PROPERTY SEARCH</h3>
            <p>
              Search and filtering allows users to narrow properties by
              location, property type and price.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>INTERACTIVE MAPS</h3>
            <p>
              Property locations are displayed using interactive maps,
              allowing users to understand where listings are located.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>USER ACCOUNTS</h3>
            <p>
              Authentication allows users to register, log in and manage
              their property listings.
            </p>
          </article>

          <article>
            <span>05</span>
            <h3>PROPERTY IMAGES</h3>
            <p>
              Property image uploads are connected to cloud storage so
              listings can contain multiple photographs.
            </p>
          </article>

          <article>
            <span>06</span>
            <h3>SEO</h3>
            <p>
              The platform was built with search visibility in mind,
              including property pages, metadata, structured data and
              search-friendly URLs.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section case-dark">
        <div className="case-section-heading">
          <p>04 / TECHNOLOGY</p>
          <h2>The stack behind HomeLinker.</h2>
        </div>

        <div className="tech-grid">
          <div>
            <span>FRAMEWORK</span>
            <strong>Next.js</strong>
          </div>

          <div>
            <span>LANGUAGE</span>
            <strong>TypeScript</strong>
          </div>

          <div>
            <span>STYLING</span>
            <strong>Tailwind CSS</strong>
          </div>

          <div>
            <span>DATABASE</span>
            <strong>Supabase</strong>
          </div>

          <div>
            <span>DEPLOYMENT</span>
            <strong>Vercel</strong>
          </div>

          <div>
            <span>MAPS</span>
            <strong>Leaflet + OpenStreetMap</strong>
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-heading">
          <p>05 / MY ROLE</p>
          <h2>More than just development.</h2>
        </div>

        <div className="case-role-grid">
          <div>
            <h3>PRODUCT</h3>
            <p>
              Defined the idea, user experience and direction of the
              marketplace.
            </p>
          </div>

          <div>
            <h3>DESIGN</h3>
            <p>
              Designed the visual identity, interface and overall digital
              experience.
            </p>
          </div>

          <div>
            <h3>DEVELOPMENT</h3>
            <p>
              Built the application, database integration, authentication,
              listings, search and property pages.
            </p>
          </div>

          <div>
            <h3>MARKETING</h3>
            <p>
              Worked on SEO, digital marketing and strategies for bringing
              property owners, agents and property seekers onto the
              platform.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-cta">
        <p className="project-category">06 / LIVE PROJECT</p>

        <h2>
          SEE HOME
          <span>LINKER.</span>
        </h2>

        <p>
          Explore the live platform and see the project in action.
        </p>

        <a
          href="https://www.homelinker.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="case-button case-button-primary"
        >
          VISIT HOME LINKER ↗
        </a>
      </section>

      <footer className="case-footer">
        <Link href="/">SAMUEL NDLOVU.</Link>

        <span>CREATIVE • DIGITAL • TECHNICAL</span>
      </footer>
    </main>
  );
}