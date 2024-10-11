import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return ({
                success: false,
                errMessage: "Please fill in all fields"
            })
        }
        const res = await fetch("/api/products", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })

        const data = res.json()
        set((state) => ({ products: [...state.products, data.data] }))
        return ({
            success: true,
            errMessage: 'Create New Product Successfull !!!'
        })
    },
    fetchAllProducts: async () => {
        const res = await fetch('/api/products')
        const data = await res.json()
        set({ products: data.data })
    }
}))
