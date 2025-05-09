import React, { useState } from 'react'
import { useProductStore } from '../store/useProductStore'
import { Package2, DollarSign, Images } from 'lucide-react';


const AddProductModal = () => {

    const { addProduct, formData, setFormData, loading } = useProductStore()


    return (
        <dialog id="add_product_modal" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:text-primary">X</button>
                </form>
                <h3 className="font-bold text-lg mb-8">Add New Product</h3>
                <form onSubmit={addProduct} className='space-y-6'>
                    <div className='grid gap-6'>
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Product Name</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                    <Package2 className='size-5 text-primary' />
                                </div>
                                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter Product name" className="input input-bordered focus:input-primary pl-10 w-full transition-colors duration-200" />
                            </div>
                        </div>

                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Price</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                    <DollarSign className='size-5 text-primary' />
                                </div>
                                <input type="number" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} min="0" step="0.01" placeholder="0.00" className="input input-bordered focus:input-primary pl-10 w-full transition-colors duration-200" />
                            </div>
                        </div>

                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text text-base font-medium'>Image URL</span>
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50'>
                                    <Images className='size-5 text-primary' />
                                </div>
                                <input type="text" value={formData.image} onChange={(e) => setFormData({ ...formData, image: e.target.value })} placeholder="Enter Product Image" className="input input-bordered focus:input-primary pl-10 w-full transition-colors duration-200" />
                            </div>
                        </div>
                        <div className=" flex justify-end gap-2 modal-action">
                            <button type='submit' className="btn hover:bg-primary hover:text-black" disabled={!formData.name || !formData.price || !formData.image || loading}>
                                {loading ? (
                                    <div className="loading loading-spinner loading-sm text-primary"></div>
                                ) : (
                                    "Add"
                                )}
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            
        </dialog>
    )
}

export default AddProductModal