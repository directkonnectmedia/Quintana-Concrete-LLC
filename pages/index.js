import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Quintana Concrete LLC</title>
          <meta property="og:title" content="Quintana Concrete LLC" />
          <link
            rel="canonical"
            href="https://double-passionate-magpie-qy3ntt.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://double-passionate-magpie-qy3ntt.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-concrete">
          <div className="hero-concrete-bg">
            <video
              src="https://videos.pexels.com/video-files/34289833/14526891_640_360_25fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/34289833/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="hero-concrete-video"
            ></video>
            <div className="hero-concrete-overlay"></div>
          </div>
          <div className="hero-concrete-content">
            <h1 className="hero-concrete-main-title hero-title">
              QUINTANA CONCRETE, LLC
            </h1>
            <p className="hero-concrete-sub hero-subtitle">
              BUILT TO LAST. POURED WITH PRECISION. 100% DEDICATED TO CONCRETE.
            </p>
            <div className="hero-concrete-actions">
              <a href="#contact">
                <div className="btn-xl hero-concrete-btn btn btn-accent">
                  <span>REQUEST AN ESTIMATE</span>
                </div>
              </a>
              <a href="#gallery">
                <div className="btn-xl btn-outline hero-concrete-btn btn">
                  <span>VIEW OUR WORK</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-concrete-contact-anchor">
            <div className="hero-concrete-anchor-inner">
              <div className="hero-concrete-icon-box">
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
              </div>
              <span className="hero-concrete-anchor-text">
                CALL NOW: (602) 471-3046
              </span>
            </div>
          </div>
        </section>
        <section id="services" className="expertise-grid">
          <div className="expertise-container">
            <h2 className="expertise-heading section-title">OUR EXPERTISE</h2>
            <div className="expertise-layout">
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Concrete Driveways"
                    src="https://images.pexels.com/photos/33405139/pexels-photo-33405139.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">CONCRETE DRIVEWAYS</h3>
                  <p className="section-content">
                    Durable, load-bearing residential and commercial driveways
                    poured to withstand heavy daily use.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Pathways &amp; Sidewalks"
                    src="https://images.pexels.com/photos/37121407/pexels-photo-37121407.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">PATHWAYS &amp; SIDEWALKS</h3>
                  <p className="section-content">
                    Precision-leveled walkways designed for safety, drainage,
                    and long-lasting curb appeal.
                  </p>
                </div>
              </div>
              <div className="expertise-card">
                <div className="expertise-card-image">
                  <img
                    alt="Custom Slabs &amp; Forming"
                    src="https://images.pexels.com/photos/37121398/pexels-photo-37121398.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    loading="lazy"
                  />
                </div>
                <div className="expertise-card-content">
                  <h3 className="section-subtitle">
                    CUSTOM SLABS &amp; FORMING
                  </h3>
                  <p className="section-content">
                    Foundations, retaining walls, and specialized commercial
                    pours tailored to exact engineering specs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery-preview">
          <div className="gallery-header">
            <h2 className="gallery-title section-title">PROJECT GALLERY</h2>
          </div>
          <div className="gallery-scroller">
            <div className="gallery-item">
              <img
                alt="Commercial Slab Pour"
                src="https://images.pexels.com/photos/37121405/pexels-photo-37121405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">
                  COMMERCIAL SLAB POUR
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Residential Driveway"
                src="https://images.pexels.com/photos/37121400/pexels-photo-37121400.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">
                  RESIDENTIAL DRIVEWAY
                </span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Precision Leveling"
                src="https://images.pexels.com/photos/37121406/pexels-photo-37121406.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">PRECISION LEVELING</span>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Foundation Work"
                src="https://images.pexels.com/photos/2469/building-construction-building-site-constructing.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                loading="lazy"
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-caption">FOUNDATION WORK</span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="quote-wizard">
          <div className="quote-wizard-container">
            <div className="quote-wizard-header">
              <h2 className="section-title">GET A QUOTE</h2>
              <p className="section-content">
                Arizona&apos;s premier concrete specialists. Tell us about your
                project.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              data-form-id="3276e1e4-2737-4b21-98f5-8174765a8e9f"
              className="quote-wizard-form"
            >
              <div className="quote-wizard-step">
                <span className="quote-wizard-step-label">
                  STEP 1: WHAT DO YOU NEED POURED?
                </span>
                <div className="quote-wizard-pills">
                  <label className="quote-pill">
                    <input
                      type="radio"
                      id="thq_service_e7yS"
                      name="service"
                      value="driveway"
                      required="true"
                      data-form-field-id="thq_service_e7yS"
                    />
                    <span>DRIVEWAYS</span>
                  </label>
                  <label className="quote-pill">
                    <input
                      type="radio"
                      id="thq_service_6AKa"
                      name="service"
                      value="pathway"
                      data-form-field-id="thq_service_6AKa"
                    />
                    <span>PATHWAYS</span>
                  </label>
                  <label className="quote-pill">
                    <input
                      type="radio"
                      id="thq_service_FKFM"
                      name="service"
                      value="custom"
                      data-form-field-id="thq_service_FKFM"
                    />
                    <span>CUSTOM WORK</span>
                  </label>
                </div>
              </div>
              <div className="quote-wizard-step">
                <span className="quote-wizard-step-label">
                  STEP 2: PROJECT DETAILS
                </span>
                <div className="quote-wizard-fields">
                  <div className="quote-field-group">
                    <input
                      type="text"
                      id="thq_true_OCX7"
                      name="true"
                      required="true"
                      placeholder="FULL NAME"
                      data-form-field-id="thq_true_OCX7"
                      className="quote-input"
                    />
                  </div>
                  <div className="quote-field-group">
                    <input
                      type="email"
                      id="thq_email_REoy"
                      name="email"
                      required="true"
                      placeholder="EMAIL ADDRESS"
                      data-form-field-id="thq_email_REoy"
                      className="quote-input"
                    />
                  </div>
                  <div className="quote-field-group">
                    <input
                      type="tel"
                      id="thq_phone_YqWU"
                      name="phone"
                      required="true"
                      placeholder="PHONE NUMBER"
                      data-form-field-id="thq_phone_YqWU"
                      className="quote-input"
                    />
                  </div>
                  <div className="quote-field-group">
                    <textarea
                      id="thq_details_ID6h"
                      name="details"
                      placeholder="TELL US ABOUT YOUR PROJECT SPECS..."
                      data-form-field-id="thq_details_ID6h"
                      className="quote-input quote-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
              <button
                id="thq_button_rq7W"
                name="button"
                type="submit"
                data-form-field-id="thq_button_rq7W"
                className="btn-xl quote-submit-btn btn btn-accent"
              >
                SUBMIT PROJECT DETAILS
              </button>
            </form>
          </div>
        </section>
        <section className="process-section">
          <div className="process-container">
            <h2 className="section-title process-heading">
              POURED WITH PRECISION
            </h2>
            <div className="process-stepper">
              <div className="process-step">
                <div className="process-icon-wrapper">
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
                      <path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path>
                      <path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">01. SITE PREP</h3>
                <p className="section-content">
                  Excavation and subgrade compaction to ensure a solid
                  foundation.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
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
                      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                      <circle r="2" cx="17" cy="18"></circle>
                      <circle r="2" cx="7" cy="18"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">02. FORMING &amp; REBAR</h3>
                <p className="section-content">
                  Structural reinforcement engineered for maximum load capacity.
                </p>
              </div>
              <div className="process-step">
                <div className="process-icon-wrapper">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">03. POUR &amp; FINISH</h3>
                <p className="section-content">
                  Expert troweling and curing for a rock-solid, professional
                  finish.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stats-tile">
              <span className="stats-number">500+</span>
              <span className="stats-label">PROJECTS POURED</span>
            </div>
            <div className="stats-tile">
              <span className="stats-number">15+</span>
              <span className="stats-label">YEARS IN PHOENIX</span>
            </div>
            <div className="stats-tile">
              <span className="stats-number">100%</span>
              <span className="stats-label">LICENSED &amp; INSURED</span>
            </div>
            <div className="stats-tile">
              <span className="stats-number">24HR</span>
              <span className="stats-label">QUOTE TURNAROUND</span>
            </div>
            <div className="stats-tile">
              <span className="stats-number">A+</span>
              <span className="stats-label">RATED CRAFTSMANSHIP</span>
            </div>
            <div className="stats-tile">
              <span className="stats-number">0</span>
              <span className="stats-label">CUT CORNERS</span>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2 className="testimonials-heading section-title">
              TOUGH TESTIMONIALS
            </h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <p className="section-content testimonial-quote">
                  &quot;Quintana Concrete handled our commercial warehouse slab
                  perfectly. On time, on budget, and the finish is flawless.
                  These guys know their concrete.&quot;
                </p>
                <span className="testimonial-author">
                  MARK R. | COMMERCIAL CLIENT
                </span>
              </div>
              <div className="testimonial-card">
                <p className="section-content testimonial-quote">
                  &quot;Best driveway pour in Phoenix. They didn&apos;t just
                  pour mud; they engineered a path that looks incredible and
                  handles the heat without cracking.&quot;
                </p>
                <span className="testimonial-author">
                  SARAH L. | RESIDENTIAL OWNER
                </span>
              </div>
              <div className="testimonial-card">
                <p className="section-content testimonial-quote">
                  &quot;Rugged, reliable, and professional. The crew was
                  efficient and the custom forming work exceeded our engineering
                  specs.&quot;
                </p>
                <span className="testimonial-author">
                  DAVID K. | SITE MANAGER
                </span>
              </div>
              <div className="testimonial-card">
                <p className="section-content testimonial-quote">
                  &quot;We&apos;ve used Quintana for three different properties.
                  Their consistency and attention to structural integrity is why
                  we keep coming back.&quot;
                </p>
                <span className="testimonial-author">
                  JASON M. | PROPERTY DEVELOPER
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-container">
            <div className="location-card">
              <div className="location-content">
                <h2 className="section-title">SERVING GREATER PHOENIX</h2>
                <p className="section-content">
                  Arizona&apos;s premier concrete specialists. We cover Phoenix,
                  Scottsdale, Mesa, Tempe, Chandler, and surrounding cities.
                </p>
                <div className="location-details">
                  <span className="location-phone">(602) 471-3046</span>
                  <p className="location-status">
                    Licensed, Bonded &amp; Insured
                  </p>
                </div>
                <a href="#contact">
                  <div className="btn-lg location-cta btn btn-accent">
                    <span>GET A FREE ESTIMATE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
::selection {
  background-color: var(--color-accent);
  color: var(--color-on-accent);
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="quintana-logic">
(function(){
  // Simple intersection observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
  }

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealOnScroll.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply reveal effects to cards and steps
  document.querySelectorAll(".expertise-card, .process-step, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.5s ease-out"
    revealOnScroll.observe(el)
  })

  // Handle Quote Wizard Selection Visuals
  const servicePills = document.querySelectorAll(".quote-pill input")
  servicePills.forEach((pill) => {
    pill.addEventListener("change", () => {
      // Logic handled by CSS :checked, but could add feedback here
      console.log("Service selected:", pill.value)
    })
  })

  // Form submission feedback (UI only as per instructions)
  const quoteForm = document.querySelector(".quote-wizard-form")
  if (quoteForm) {
    quoteForm.addEventListener(
      "invalid",
      (e) => {
        e.target.classList.add("has-error")
      },
      true
    )

    quoteForm.addEventListener("input", (e) => {
      if (e.target.checkValidity()) {
        e.target.classList.remove("has-error")
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
