import React, { useEffect } from 'react'
import { Link, MoveLeft, Trash, Save } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore.js';
import { useNavigate } from "react-router-dom";




const ProductPage = () => {

  const { id } = useParams();
  const { formData, currentProduct, error, updateProduct, setFormData, deleteProducts, loading, getProduct } = useProductStore();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id)
  }, [getProduct, id])

  console.log(currentProduct)

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProducts(id);
      navigate("/");
    }
  };

  const handleSave = () => {
    setTimeout(() => {
      navigate("/")
    }, 2000)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  


  return (
    <div className='max-w-4xl mx-auto py-8'>
      <div className='flex justify-start items-center mb-8'>

        <button className='btn btn-ghost hover:text-primary' onClick={() => navigate("/")}>
          <MoveLeft className='size-5' />
          Back to store
        </button>

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-4'>

        {formData.image && (<img  className="size-full object-cover rounded-lg" src={currentProduct?.image} alt={currentProduct?.image} />)}

        <div className='border border-base-content/10 rounded-lg p-6 bg-base-100'>
          <h2 className='font-medium text-2xl text-primary'>Edit Product</h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            updateProduct(id)
          }}
            className='space-y-6 '>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text '>
                  Product Name
                </span>
              </label>
              <div className='relative'>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className='input input-bordered focus:input-primary w-full transition-colors duration-0' />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Price</span>
              </label>
              <input type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className='input input-bordered focus:input-primary w-full  transition-colors duration-200' />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Image URL</span>
              </label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className='input input-bordered focus:input-primary w-full  transition-colors duration-200' />
            </div>

            <div className='flex justify-between'>
              <button onClick={() => handleDelete(id)} type='button' className='btn btn-error'>
                <Trash className='size-4 mr-2' />
                Delete Product
              </button>
              <button type='submit' onClick={() => handleSave()} className='btn btn-success ' disabled={loading || !formData.name || !formData.price || !formData.image}>
                {loading ?
                  (
                  <span className="loading loading-spinner loading-md text-primary"></span>
                )
                :
                (<>
                  <Save className='size-4 mr-2' />
                  Save Changes
                </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>



    </div>


  )
}

export default ProductPage