import React from 'react'

export default function Navbar({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
}) {
  return (
    <header className="glass-navbar sticky-top py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-3">
          {/* Brand Logo */}
          <a
            className="d-flex align-items-center gap-2 text-decoration-none"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              onSelectCategory(null)
            }}
          >
            <div
              className="rounded-3 d-flex align-items-center justify-content-center text-white shadow-sm"
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
              }}
            >
              <i className="bi bi-bag-check-fill fs-5"></i>
            </div>
            <div className="d-flex flex-column">
              <span className="brand-gradient fs-4 fw-bolder lh-1">EliteCatalog</span>
              <span className="text-secondary small fw-medium" style={{ fontSize: '0.68rem', letterSpacing: '0.05em' }}>
                SPRING BOOT & REACT STORE
              </span>
            </div>
          </a>

          {/* Search Bar in center with responsive width */}
          <div className="flex-grow-1 mx-2 mx-md-4" style={{ maxWidth: '480px' }}>
            <div className="search-container d-flex align-items-center px-3 py-1">
              <i className="bi bi-search text-muted me-2 fs-6"></i>
              <input
                type="text"
                className="form-control form-control-sm search-input shadow-none py-1"
                placeholder="Search products by title, keyword, or category..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="btn btn-link text-white-50 p-0 ms-2 text-decoration-none"
                  onClick={() => onSearchChange('')}
                  title="Clear search"
                >
                  <i className="bi bi-x-circle-fill"></i>
                </button>
              )}
            </div>
          </div>

          {/* Cart Action */}
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-outline-light rounded-pill px-3 py-2 d-flex align-items-center gap-2 position-relative border-opacity-25"
              onClick={onOpenCart}
            >
              <i className="bi bi-cart3 fs-5"></i>
              <span className="fw-semibold d-none d-sm-inline small">Cart</span>
              {cartCount > 0 && (
                <span
                  className="badge bg-danger rounded-pill position-absolute"
                  style={{
                    top: '-6px',
                    right: '-6px',
                    fontSize: '0.72rem',
                    padding: '0.3em 0.6em',
                    boxShadow: '0 2px 8px rgba(239, 68, 68, 0.6)',
                  }}
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
