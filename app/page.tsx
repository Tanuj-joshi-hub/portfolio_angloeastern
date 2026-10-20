
"use client";

import { useState } from "react";

export default function Home() {
  const [slideValue, setSlideValue] = useState(0);
  const [entered, setEntered] = useState(false);

  function handleSlide(value: number) {
    setSlideValue(value);

    if (value >= 98) {
      setEntered(true);
    }
  }

  return (
    <main className="portfolio">
      {!entered ? (
        <section className="hero" aria-label="Welcome">
          <div className="hero-overlay" />

          <header className="topbar">
            <a className="brand" href="#home" aria-label="Tanuj Joshi home">
              <img
                  className="brand-logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsJLQBh_wnB601Dh3lXXgw0o43a2_gHBoVYJVbmEZjA&s=10"
                  alt="Anglo-Eastern"
              />
              <span className="brand-name">TANUJ JOSHI</span>
            </a>

            <span className="topbar-label">
              PERSONAL PORTFOLIO
            </span>
          </header>

          <div className="hero-content" id="home">
            <p className="eyebrow">
              DISCIPLINE · CURIOSITY · PURPOSE
            </p>

            <h1>
              A new course.
              <br />
              <span>A new horizon.</span>
            </h1>

            <p className="hero-description">
              I&apos;m Tanuj Joshi — a technology enthusiast
              exploring a future in the maritime world.
            </p>

            <div className="hero-rule" />

            <div className="slider-section">
              <label className="slider-label" htmlFor="enter-slider">
                SLIDE TO EXPLORE
              </label>

              <div className="slider-control">
                <span className="slider-start" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 12h15m-6-6 6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <input
                  id="enter-slider"
                  className="slide-input"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={slideValue}
                  aria-label="Drag to enter the portfolio"
                  aria-valuetext={
                    slideValue >= 98
                      ? "Opening portfolio"
                      : `${slideValue}% complete`
                  }
                  onChange={(event) =>
                    handleSlide(Number(event.target.value))
                  }
                  style={{
                    "--slide-progress": `${slideValue}%`,
                  } as React.CSSProperties}
                />

                <span className="slider-end" aria-hidden="true">
                  ENTER
                </span>
              </div>

              <p className="slider-hint">
                Drag the handle to the right to continue
              </p>
            </div>
          </div>

          <footer className="hero-footer">
            <span>PERSONAL INTRODUCTION</span>
            <span>INDIA</span>
          </footer>
        </section>
      ) : (
        <section className="welcome-section" id="explore">
          <header className="topbar welcome-topbar">
            <a className="brand" href="#explore">
              <img
                  className="brand-logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFsJLQBh_wnB601Dh3lXXgw0o43a2_gHBoVYJVbmEZjA&s=10"
                  alt="Anglo-Eastern"
              />
              <span className="brand-name">TANUJ JOSHI</span>
            </a>

            <button
              className="back-button"
              onClick={() => {
                setSlideValue(0);
                setEntered(false);
              }}
            >
              ← Back to welcome
            </button>
          </header>

          <div className="welcome-content">
            <p className="eyebrow">MY JOURNEY · MY AMBITION</p>

            <h2>
              Every journey
              <br />
              <span>begins with a decision.</span>
            </h2>

            <p className="welcome-description">
              I am currently pursuing Computer Science Engineering
              while exploring the opportunities and responsibilities
              of a career in the Merchant Navy.
            </p>

            <div className="welcome-note">
              <span className="note-line" />
              <p>
                A little about my background, my interests,
                and the direction I hope to take.
              </p>
            </div>

            <p className="coming-soon">
              MY STORY · MOTIVATION · TECHNICAL PROJECTS
            </p>
          </div>

          <footer className="hero-footer welcome-footer">
            <span>PERSONAL PORTFOLIO</span>
            <span>TANUJ JOSHI</span>
          </footer>
        </section>
      )}
    </main>
  );
}

