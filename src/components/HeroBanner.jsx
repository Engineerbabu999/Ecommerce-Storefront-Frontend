import React from 'react'

export default function HeroBanner({ onExplore }) {
  return (
    <div className="hero-wrapper p-4 p-md-5 my-4 my-md-5">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
        <div className="col-12 col-lg-7 text-start">
          <div className="d-inline-flex align-items-center gap-2 hero-badge rounded-pill px-3 py-1 mb-3">
            <span className="badge rounded-circle p-1 bg-primary"></span>
            <span>New Season Catalog 2026</span>
          </div>

          <h1 className="hero-title mb-3">
            Elevate Your Everyday <span style={{ color: '#38bdf8' }}>Lifestyle.</span>
          </h1>

          <p className="text-secondary-subtle mb-4 fs-6" style={{ maxWidth: '540px' }}>
            Discover our hand-picked collection of premium electronics, contemporary lifestyle gear, and home essentials powered by Spring Boot REST APIs.
          </p>

          <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
            <button
              className="btn btn-primary btn-lg rounded-pill px-4 py-2 fw-bold d-inline-flex align-items-center gap-2 shadow"
              style={{ background: 'var(--primary-gradient)', border: 'none' }}
              onClick={onExplore}
            >
              <span>Explore Catalog</span>
              <i className="bi bi-arrow-down-short fs-4"></i>
            </button>

            <div className="d-flex align-items-center gap-2 text-white-50 small ps-2">
              <i className="bi bi-patch-check-fill text-info fs-5"></i>
              <span>Live Database Connected</span>
            </div>
          </div>

          <div className="d-flex gap-3 flex-wrap">
            <div className="hero-stat-card">
              <div className="text-white fw-bold fs-5">100%</div>
              <div className="text-white-50 small">Authentic Gear</div>
            </div>
            <div className="hero-stat-card">
              <div className="text-white fw-bold fs-5">Fast & Free</div>
              <div className="text-white-50 small">Orders over $500</div>
            </div>
            <div className="hero-stat-card">
              <div className="text-white fw-bold fs-5">24/7</div>
              <div className="text-white-50 small">Live Support</div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-5 d-none d-lg-block">
          <div className="hero-img-box">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
              alt="Elite Catalog Collection"
              className="w-100 h-100 object-fit-cover"
              style={{ maxHeight: '320px', filter: 'brightness(0.95)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
