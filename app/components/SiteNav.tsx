"use client";

import { useEffect, useRef, useState } from "react";
import "./site-nav.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const CV_HREF = "/Samuel-Ndlovu-CV.pdf";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: lock page scroll, close on Escape,
  // and close automatically if the screen grows to desktop width.
  useEffect(() => {
    if (!open) return;

    document.body.classList.add("menu-open");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const onResize = () => {
      if (window.innerWidth > 800) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="navbar" aria-label="Main">
        <a href="#top" className="nav-logo" onClick={close}>
          SAMUEL<span>.</span>
        </a>

        <div className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a href={CV_HREF} download className="nav-cta nav-cta-desktop">
          DOWNLOAD CV
        </a>

        <button
          ref={buttonRef}
          type="button"
          className={`nav-burger${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
      >
        <ul className="mobile-menu-list">
          {LINKS.map((link, index) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href={CV_HREF}
            download
            className="mobile-menu-cv"
            onClick={close}
          >
            DOWNLOAD CV
          </a>
          <p>CREATIVE • DIGITAL • TECHNICAL</p>
        </div>
      </div>
    </>
  );
}