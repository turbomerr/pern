import React, { useEffect } from 'react'
import { Link, MoveLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore.js';
import { useNavigate } from "react-router-dom";




const ProductPage = () => {

  const { id } = useParams();
  const { formData, setFormData, error, updateProduct, loading, getProduct } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
  }, [getProduct, id])

  return (
    <div className='max-w-4xl mx-auto py-8'>
      <div className='flex justify-start items-center mb-8'>
        
        <button className='btn btn-ghost hover:text-primary' onClick={() => navigate("/")}>
          <MoveLeft className='size-5' />
          Back to store
        </button>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

        {formData.image && (<img className='rounded-lg' src={formData.image} alt={formData.image} />)}

        <div className='border border-base-content/10 rounded-lg p-6 bg-base-100'>
          
        </div>
      </div>

      {loading && (
        <div className='flex justify-center items-center h-64'>
          <div className="loading loading-spinner loading-lg text-primary"></div>
        </div>
      )}
      {error && (
        <div className="alert alert-error mb-8">{error}</div>
      )}

    </div>


  )
}

export default ProductPage