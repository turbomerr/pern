import React from 'react'
import { SquarePen, Trash } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore';


const ProductCard = ({ product }) => {

    const { deleteProducts } = useProductStore()

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure ><img  className="w-full h-96 object-cover" src={product.image} alt={product.name} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product.name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-lg font-semibold'>${product.price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary glass">
                        <Link to={`/products/${product.id}`}>
                            <SquarePen className='size-5' />
                        </Link>
                    </button>
                    <button className="btn btn-error" onClick={() => deleteProducts(product.id)}>
                        <Trash className='size-5'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard