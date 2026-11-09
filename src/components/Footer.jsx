import React from 'react'

export default function Footer() {
  return (
    <footer className="footer-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4 align-items-start justify-content-between">
          {/* Brand Info */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center text-white"
                style={{
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
                }}
              >
                <i className="bi bi-bag-check-fill fs-6"></i>
              </div>
              <span className="fs-5 fw-bold text-white">EliteCatalog</span>
            </div>
            <p className="text-secondary small mb-3" style={{ maxWidth: '380px', lineHeight: '1.6' }}>
              Full-stack e-commerce catalog application built with Java Spring Boot REST API, MySQL database, and React with Bootstrap 5.
            </p>
            <div className="d-flex align-items-center gap-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter / X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Backend APIs */}
          <div className="col-12 col-sm-6 col-md-4">
            <h6 className="fw-bold text-uppercase small text-white-50 mb-3" style={{ letterSpacing: '0.08em' }}>
              Backend REST APIs
            </h6>
            <div className="d-flex flex-column gap-2">
              <div>
                <span className="api-pill">GET /api/products</span>
              </div>
              <div>
                <span className="api-pill">GET /api/products/category/&#123;id&#125;</span>
              </div>
              <div>
                <span className="api-pill">GET /api/categories</span>
              </div>
            </div>
          </div>

          {/* Copyright & Info */}
          <div className="col-12 col-sm-6 col-md-3 text-md-end">
            <h6 className="fw-bold text-uppercase small text-white-50 mb-3" style={{ letterSpacing: '0.08em' }}>
              Project Status
            </h6>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-success bg-opacity-10 text-success small mb-3">
              <span className="badge rounded-circle p-1 bg-success"></span>
              <span>All APIs Operational</span>
            </div>
            <p className="text-secondary small mb-0">
              &copy; {new Date().getFullYear()} EliteCatalog.<br />Designed for peak performance.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
