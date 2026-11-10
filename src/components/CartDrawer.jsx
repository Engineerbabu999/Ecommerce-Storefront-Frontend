import React from 'react'

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 500 || subtotal === 0 ? 0 : 25
  const total = subtotal + shipping

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 z-3"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="position-absolute top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column"
        style={{ width: '100%', maxWidth: '450px', zIndex: 1050 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-bottom d-flex align-items-center justify-content-between bg-light">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-bag-check fs-4 text-primary"></i>
            <h5 className="mb-0 fw-bold">Your Shopping Cart</h5>
            <span className="badge bg-primary rounded-pill">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>

        {/* Body */}
        <div className="p-4 flex-grow-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-cart-x fs-1 text-muted d-block mb-3"></i>
              <h5 className="fw-semibold">Your cart is empty</h5>
              <p className="text-muted small">Looks like you haven't added any items yet.</p>
              <button className="btn btn-outline-primary rounded-pill px-4 mt-2" onClick={onClose}>
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="card border-0 bg-light p-3 rounded-4 d-flex flex-row align-items-center gap-3"
                >
                  <img
                    src={item.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'}
                    alt={item.name}
                    className="rounded-3 object-fit-cover"
                    style={{ width: '70px', height: '70px' }}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800'
                    }}
                  />
                  <div className="flex-grow-1 min-w-0">
                    <h6 className="mb-1 text-truncate fw-semibold" title={item.name}>
                      {item.name}
                    </h6>
                    <div className="text-primary fw-bold small">
                      ${Number(item.price).toFixed(2)}
                    </div>
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <div className="input-group input-group-sm" style={{ width: '100px' }}>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="form-control text-center bg-white p-0 d-flex align-items-center justify-content-center">
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-link text-danger p-0 ms-auto"
                        title="Remove item"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-top bg-light">
            <div className="d-flex justify-content-between text-muted mb-2 small">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between text-muted mb-2 small">
              <span>Estimated Shipping</span>
              <span>{shipping === 0 ? <strong className="text-success">FREE</strong> : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
              <span>Total</span>
              <span className="text-primary">${total.toFixed(2)}</span>
            </div>

            <button
              className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2"
              onClick={() => {
                alert('Order placed successfully! Thank you for shopping with us.')
                onClearCart()
                onClose()
              }}
            >
              <i className="bi bi-credit-card"></i> Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

