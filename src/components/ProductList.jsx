import React, { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({
  products,
  loading,
  error,
  onAddToCart,
  onQuickView,
  onRetry,
}) {
  const [sortBy, setSortBy] = useState('featured')

  if (loading) {
    return (
      <div className="py-5 text-center my-4">
        <div className="spinner-border text-primary" role="status" style={{ width: '3.2rem', height: '3.2rem', borderWidth: '3px' }}>
          <span className="visually-hidden">Loading products...</span>
        </div>
        <p className="mt-3 text-secondary fw-semibold">Loading catalog from Spring Boot API...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-5 text-center my-4">
        <div className="card border-0 shadow-sm rounded-4 p-4 d-inline-block text-start" style={{ maxWidth: '580px', background: '#fff1f2' }}>
          <div className="d-flex align-items-center mb-2 text-danger">
            <i className="bi bi-exclamation-triangle-fill fs-3 me-2"></i>
            <h5 className="mb-0 fw-bold">Cannot Connect to Spring Boot Backend</h5>
          </div>
          <p className="text-secondary small mb-3">
            The frontend attempted to fetch <code>/api/products</code> but received an error ({error}). Please verify the Spring Boot service is running on <code>http://localhost:8080</code>.
          </p>
          <button className="btn btn-danger btn-sm rounded-pill px-3" onClick={onRetry}>
            <i className="bi bi-arrow-clockwise me-1"></i> Retry Connection
          </button>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="py-5 text-center my-4 bg-white rounded-4 border p-5 shadow-sm">
        <i className="bi bi-search fs-1 text-muted d-block mb-3"></i>
        <h4 className="fw-bold text-dark">No Products Found</h4>
        <p className="text-muted small">No items match your filter or search query. Try choosing another category.</p>
      </div>
    )
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
    return 0
  })

  return (
    <div>
      {/* Catalog Status & Sort Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2 pt-2 border-top border-light-subtle">
        <div className="text-secondary small">
          Showing <span className="fw-bold text-dark">{sortedProducts.length}</span> {sortedProducts.length === 1 ? 'product' : 'products'}
        </div>

        <div className="d-flex align-items-center gap-2">
          <label htmlFor="sortSelect" className="small text-secondary fw-semibold text-nowrap">
            <i className="bi bi-arrow-down-up me-1"></i> Sort:
          </label>
          <select
            id="sortSelect"
            className="form-select form-select-sm rounded-pill shadow-none border-secondary-subtle py-1 pe-4"
            style={{ width: 'auto', minWidth: '170px' }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured / Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="row g-4">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </div>
  )
}
