import React from 'react'
import { useProductStore } from '../store/useProductStore.js'
import { useEffect } from 'react';
import { CirclePlus, RefreshCcw,Package } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import AddProductModal from '../components/AddProductModal.jsx';

const HomePage = () => {

  const { products, error, loading, fetchProducts } = useProductStore();


  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])


  //console.log(products)
  return (
    <main className='max-w-6xl mx-auto py-8'>
      <div className='flex justify-between items-center mb-8'>
        <button className='btn btn-primary' onClick={() => document.getElementById("add_product_modal").showModal()}>
          <CirclePlus className='w-5 h-5' />
          Add Product
        </button>
        <button className='btn btn-ghost btn-circle hover:btn-primary' onClick={fetchProducts}>
          <RefreshCcw className='w-5 h-5' />
        </button>
      </div>

      <AddProductModal/>

      {products.length === 0 && !loading && (
          <div className='flex flex-col items-center justify-center h-96 space-y-4'>
            <Package className='size-12 text-primary'/>
            <h2 className='text-2xl font-semibold'>No Product Found</h2>
            <p className='text-base-content/50'>Get started by adding your first product to the inventory</p>
          </div>
        )}

      {error && <div className="alert alert-error mb-8">{error}</div>}


      {loading ? (
        <div className='flex justify-center items-center h-64'>
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>)}

        

    </main>
  )
}

export default HomePage