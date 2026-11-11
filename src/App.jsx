import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import {
  fetchAllCategories,
  fetchAllProducts,
  fetchProductsByCategory,
} from './services/api'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Quick view modal
  const [quickViewProduct, setQuickViewProduct] = useState(null)

  // Cart state
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Alert toast
  const [toastMessage, setToastMessage] = useState(null)

  // 1. Fetch Categories once on mount
  useEffect(() => {
    fetchAllCategories()
      .then((data) => setCategories(data))
      .catch((err) => {
        console.warn('Error fetching categories from backend:', err)
      })
  }, [])

  // 2. Fetch Products whenever selectedCategory changes
  const loadProducts = () => {
    setLoading(true)
    setError(null)

    const fetcher =
      selectedCategory === null
        ? fetchAllProducts()
        : fetchProductsByCategory(selectedCategory)

    fetcher
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching products:', err)
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    loadProducts()
  }, [selectedCategory])

  // Filter products by search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products
    const q = searchQuery.toLowerCase()
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q) ||
        p.category?.name?.toLowerCase().includes(q),
    )
  }, [products, searchQuery])

  // Cart handlers
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })

    // Show toast feedback
    setToastMessage(`Added "${product.name}" to cart!`)
    setTimeout(() => {
      setToastMessage(null)
    }, 2500)
  }

  const handleUpdateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveCartItem(productId)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    )
  }

  const handleRemoveCartItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleClearCart = () => {
    setCart([])
  }

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Container */}
      <main className="container flex-grow-1">
        {/* Hero Section */}
        <HeroBanner onExplore={scrollToCatalog} />

        {/* Catalog Section */}
        <section id="catalog-section" className="mb-5">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => {
              setSelectedCategory(catId)
              setSearchQuery('')
            }}
            totalProductsCount={filteredProducts.length}
          />

          <ProductList
            products={filteredProducts}
            loading={loading}
            error={error}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onRetry={loadProducts}
          />
        </section>
      </main>

      {/* Quick View Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Offcanvas Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div
          className="position-fixed bottom-0 end-0 p-3"
          style={{ zIndex: 1080 }}
        >
          <div className="toast show align-items-center text-bg-dark border-0 rounded-4 shadow-lg">
            <div className="d-flex">
              <div className="toast-body d-flex align-items-center gap-2">
                <i className="bi bi-check-circle-fill text-success fs-5"></i>
                <span>{toastMessage}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
