import React from 'react'

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  totalProductsCount,
}) {
  return (
    <div className="pt-2 pb-3 text-start">
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <div
            className="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center"
            style={{ width: '34px', height: '34px' }}
          >
            <i className="bi bi-grid-fill"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-0 text-dark" style={{ letterSpacing: '-0.02em', fontSize: '1.25rem' }}>
              Browse Categories
            </h4>
            <span className="text-secondary small">Filter catalog by department</span>
          </div>
        </div>

        {totalProductsCount !== undefined && (
          <span className="badge bg-light text-secondary border px-3 py-2 rounded-pill small">
            {totalProductsCount} {totalProductsCount === 1 ? 'item available' : 'items available'}
          </span>
        )}
      </div>

      <div className="d-flex gap-2 flex-wrap">
        <button
          type="button"
          className={`category-pill ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => onSelectCategory(null)}
        >
          <i className="bi bi-stars"></i>
          <span>All Products</span>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`category-pill ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name === 'Electronics' && <i className="bi bi-laptop"></i>}
            {category.name === 'Clothing' && <i className="bi bi-tag"></i>}
            {category.name === 'Home and Kitchen' && <i className="bi bi-house-door"></i>}
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
