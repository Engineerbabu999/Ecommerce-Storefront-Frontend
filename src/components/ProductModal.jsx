import React from 'react'

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(4px)', zIndex: 1060 }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
          <div className="modal-header border-0 pb-0">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body p-4 pt-0">
            <div className="row g-4 align-items-center">
              {/* Product Image */}
              <div className="col-12 col-md-6">
                <div className="rounded-4 overflow-hidden bg-light position-relative" style={{ minHeight: '300px' }}>
                  <img
                    src={product.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'}
                    alt={product.name}
                    className="w-100 h-100 object-fit-cover"
                    style={{ maxHeight: '380px' }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
                    }}
                  />
                  {product.category && (
                    <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2 rounded-pill">
                      {product.category.name}
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="col-12 col-md-6 d-flex flex-column">
                <h3 className="fw-bold text-dark mb-2">{product.name}</h3>

                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="text-warning small">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <span className="text-muted small">(4.8 / 5 Rating)</span>
                </div>

                <div className="price-tag mb-3 fs-2">${Number(product.price).toFixed(2)}</div>

                <p className="text-secondary leading-relaxed mb-4">
                  {product.description}
                </p>

                <div className="alert alert-info py-2 px-3 small rounded-3 d-flex align-items-center gap-2 mb-4">
                  <i className="bi bi-truck fs-5"></i>
                  <span>Free shipping on orders over $500 & 30-day guarantee</span>
                </div>

                <div className="d-flex gap-3 mt-auto">
                  <button
                    className="btn btn-primary rounded-pill px-4 py-2 flex-grow-1 shadow-sm d-flex align-items-center justify-content-center gap-2"
                    onClick={() => {
                      onAddToCart(product)
                      onClose()
                    }}
                  >
                    <i className="bi bi-bag-plus-fill"></i> Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-secondary rounded-pill px-4"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

