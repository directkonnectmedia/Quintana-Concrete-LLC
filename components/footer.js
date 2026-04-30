import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-industrial">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-brand footer-column">
                <h2 className="footer-logo section-title">
                  QUINTANA CONCRETE, LLC
                </h2>
                <p className="footer-mission section-content">
                  Arizona&apos;s premier concrete specialists. Commercial and
                  Residential. We pour it right the first time. 100% dedicated
                  to the craft of heavy-duty concrete engineering.
                </p>
              </div>
              <div className="footer-column footer-contact">
                <h3 className="footer-heading">CONTACT US</h3>
                <div className="footer-contact-info">
                  <a href="tel:6024713046">
                    <div className="footer-phone-link">
                      <span className="footer-icon-wrapper">
                        <svg
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        {' '}
                        (602) 471-3046
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="mailto:info@quintanaconcrete.com?subject=">
                    <div className="footer-email-link">
                      <span className="footer-icon-wrapper">
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
                            <circle r="4" cx="6" cy="12"></circle>
                            <circle r="4" cx="18" cy="12"></circle>
                            <path d="M6 16h12"></path>
                          </g>
                        </svg>
                      </span>
                      <span>
                        {' '}
                        info@quintanaconcrete.com
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <div className="footer-address">
                    <span className="footer-icon-wrapper">
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
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </span>
                    <p className="section-content">
                      Serving the Greater Phoenix Area &amp; Surrounding Cities
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-column footer-nav">
                <h3 className="footer-heading">NAVIGATION</h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          HOME
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#services">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          SERVICES
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#gallery">
                      <div className="footer-nav-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          GALLERY
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#quote">
                      <div className="footer-nav-link footer-cta-link">
                        <span className="footer-nav-icon">
                          <svg
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M5 12h14m-7-7l7 7l-7 7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <span>
                          {' '}
                          GET A QUOTE
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-divider"></div>
              <div className="footer-legal">
                <p className="section-content">
                  © 2026 Quintana Concrete, LLC. All Rights Reserved. Licensed,
                  Bonded &amp; Insured.
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-scroll-effects">
(function(){
  const footerIcons = document.querySelectorAll(".footer-icon-wrapper svg")

  footerIcons.forEach((icon) => {
    icon.parentElement.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.2) rotate(5deg)"
      icon.style.transition = "transform 0.3s ease"
    })

    icon.parentElement.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1) rotate(0deg)"
    })
  })

  const navLinks = document.querySelectorAll(".footer-nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.textShadow = "0 0 8px rgba(236, 31, 40, 0.4)"
    })
    link.addEventListener("mouseleave", () => {
      link.style.textShadow = "none"
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
