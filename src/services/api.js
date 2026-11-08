const API_BASE = '/api'

export const fetchAllProducts = async () => {
  const response = await fetch(`${API_BASE}/products`)
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`)
  }
  return response.json()
}

export const fetchProductsByCategory = async (categoryId) => {
  const response = await fetch(`${API_BASE}/products/category/${categoryId}`)
  if (!response.ok) {
    throw new Error(`Failed to fetch products for category ${categoryId}: ${response.statusText}`)
  }
  return response.json()
}

export const fetchAllCategories = async () => {
  const response = await fetch(`${API_BASE}/categories`)
  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`)
  }
  return response.json()
}

