import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="mainNav" className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-brand">
                  <span className="navigation-logo-text">
                    QUINTANA CONCRETE, LLC
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-links">
              <Link href="/">
                <a>
                  <div className="navigation-link">
                    <span>HOME</span>
                  </div>
                </a>
              </Link>
              <a href="Home#services">
                <div className="navigation-link">
                  <span>SERVICES</span>
                </div>
              </a>
              <a href="Home#gallery">
                <div className="navigation-link">
                  <span>GALLERY</span>
                </div>
              </a>
              <a href="Home#contact">
                <div className="navigation-link">
                  <span>CONTACT</span>
                </div>
              </a>
            </div>
            <div className="navigation-actions">
              <button
                id="themeToggle"
                aria-label="Toggle theme"
                className="navigation-theme-btn"
              >
                <span className="navigation-thq-theme-icon-sun-elm">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="4" cx="12" cy="12"></circle>
                      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                    </g>
                  </svg>
                </span>
                <span className="navigation-thq-theme-icon-moon-elm">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </button>
              <a href="Home#quote">
                <div className="btn-outline btn navigation-cta">
                  <span>GET A QUOTE</span>
                </div>
              </a>
              <button
                id="mobileMenuOpen"
                aria-label="Open menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="mobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div className="navigation-brand">
                  <span className="navigation-logo-text">
                    QUINTANA CONCRETE, LLC
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobileMenuClose"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <div className="navigation-mobile-nav">
              <Link href="/">
                <a>
                  <div className="navigation-mobile-link">
                    <span>HOME</span>
                  </div>
                </a>
              </Link>
              <a href="Home#services">
                <div className="navigation-mobile-link">
                  <span>SERVICES</span>
                </div>
              </a>
              <a href="Home#gallery">
                <div className="navigation-mobile-link">
                  <span>GALLERY</span>
                </div>
              </a>
              <a href="Home#contact">
                <div className="navigation-mobile-link">
                  <span>CONTACT</span>
                </div>
              </a>
              <a href="Home#quote">
                <div className="accent navigation-mobile-link">
                  <span>GET A QUOTE</span>
                </div>
              </a>
            </div>
            <div className="navigation-mobile-footer">
              <span className="navigation-mobile-contact-label">
                DIRECT LINE
              </span>
              <a href="tel:6024713046">
                <div className="navigation-mobile-phone">
                  <span>602-471-3046</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
[data-theme="light"] .theme-icon-moon {
  display: block;
}
[data-theme="dark"] .theme-icon-sun {
  display: block;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-controls">
(function(){
  const nav = document.getElementById("mainNav")
  const mobileOverlay = document.getElementById("mobileOverlay")
  const openBtn = document.getElementById("mobileMenuOpen")
  const closeBtn = document.getElementById("mobileMenuClose")
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")

  function toggleMobileMenu(isOpen) {
    if (isOpen) {
      mobileOverlay.classList.add("is-open")
      openBtn.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    } else {
      mobileOverlay.classList.remove("is-open")
      openBtn.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    }
  }

  openBtn.addEventListener("click", () => toggleMobileMenu(true))
  closeBtn.addEventListener("click", () => toggleMobileMenu(false))

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileMenu(false)
    })
  })

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      toggleMobileMenu(false)
    }
  })

  // Add shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.5)"
    } else {
      nav.style.boxShadow = "none"
    }
  })

  const themeToggle = document.getElementById("themeToggle")
  const html = document.documentElement

  // Initialize theme from localStorage or system preference
  const storedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

  applyTheme(storedTheme)

  function applyTheme(theme) {
    const suffix = theme === "dark" ? "dark" : "light"

    // Update ALL active color variables to point to the correct theme
    html.style.setProperty("--color-primary", \`var(--color-primary-\${suffix})\`)
    html.style.setProperty("--color-secondary", \`var(--color-secondary-\${suffix})\`)
    html.style.setProperty("--color-accent", \`var(--color-accent-\${suffix})\`)
    html.style.setProperty("--color-neutral", \`var(--color-neutral-\${suffix})\`)
    html.style.setProperty("--color-surface", \`var(--color-surface-\${suffix})\`)
    html.style.setProperty("--color-on-surface", \`var(--color-on-surface-\${suffix})\`)
    html.style.setProperty("--color-on-surface-secondary", \`var(--color-on-surface-secondary-\${suffix})\`)
    html.style.setProperty("--color-on-primary", \`var(--color-on-primary-\${suffix})\`)
    html.style.setProperty("--color-surface-elevated", \`var(--color-surface-elevated-\${suffix})\`)
    html.style.setProperty("--color-on-secondary", \`var(--color-on-secondary-\${suffix})\`)
    html.style.setProperty("--color-on-accent", \`var(--color-on-accent-\${suffix})\`)
    html.style.setProperty("--color-border", \`var(--color-border-\${suffix})\`)
    html.style.setProperty("--color-outline", \`var(--color-outline-\${suffix})\`)
    html.style.setProperty("--color-overlay", \`var(--color-overlay-\${suffix})\`)
    html.style.setProperty("--color-backplate", \`var(--color-backplate-\${suffix})\`)
    html.style.setProperty("--color-scrim", \`var(--color-scrim-\${suffix})\`)

    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  function toggleTheme() {
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "light" ? "dark" : "light"
    applyTheme(newTheme)
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-theme-icon-sun-elm {
            display: none;
          }
          .navigation-thq-theme-icon-moon-elm {
            display: none;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
