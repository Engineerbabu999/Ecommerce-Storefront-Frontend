import React from 'react'

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const { name, description, imageUrl, price, category } = product

  return (
    <div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex">
      <div className="store-product-card w-100 d-flex flex-column">
        {/* Product Image */}
        <div className="card-image-box">
          <img
            src={imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'}
            alt={name}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null
              e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
            }}
          />
          {category && (
            <span className="category-tag">
              {category.name}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-3 p-md-4 d-flex flex-column flex-grow-1 text-start">
          {/* Rating */}
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="rating-stars">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
              <span className="text-secondary ms-1 fw-medium" style={{ fontSize: '0.72rem' }}>4.8</span>
            </div>
            <span className="badge bg-success-subtle text-success border border-success-subtle fw-semibold" style={{ fontSize: '0.68rem' }}>
              In Stock
            </span>
          </div>

          <h5 className="product-title" title={name}>
            {name}
          </h5>

          <p className="product-desc mb-3" title={description}>
            {description}
          </p>

          {/* Pricing & Actions */}
          <div className="d-flex align-items-center justify-content-between pt-3 mt-auto border-top border-light-subtle">
            <div>
              <span className="text-muted d-block fw-semibold" style={{ fontSize: '0.68rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Price
              </span>
              <span className="product-price">
                ${Number(price).toFixed(2)}
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn-quick-view"
                onClick={() => onQuickView(product)}
                title="Quick View Details"
              >
                <i className="bi bi-eye"></i>
              </button>

              <button
                type="button"
                className="btn-add-cart"
                onClick={() => onAddToCart(product)}
              >
                <i className="bi bi-bag-plus"></i>
                <span>Add</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
