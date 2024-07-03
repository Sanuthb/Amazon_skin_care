import React, { useState } from 'react'
import Plane from '../../Assets/plane.png';
import './Featured_products.css';
import { ProductsData } from '../../Data/product';
export default function Featured_products() {

    const [menuproduct,filteredproduct]=useState(ProductsData)
    const filter_product=(type)=>{
        filteredproduct(ProductsData.filter((product)=>product.type === type))

    }
    return (
        <div className='Featured_products'>
            <div className="top_container">
                <img src={Plane} alt="plane" className='Plane_i' />
                <span>Our Feature Products
                </span>
            </div>
            <div className="bottom_container">
                <div className="left_container">
                    <li onClick={()=>filteredproduct(ProductsData)}>All</li>
                    <li onClick={()=>filter_product("skin care")}>SkinCare</li>
                    <li onClick={()=>filter_product("conditioner")}>Conditioner</li>
                    <li onClick={()=>filter_product("foundation")}>Foundation</li>
                </div>
                <div className="right_container">
                    {menuproduct.map((products) =>
                        <div className="product_container">
                            <div className="products_details">
                                <span>{products.name}</span>
                                <span>{products.detail}</span>
                                <span>${products.price}</span>
                                <div>Shop Now</div>
                            </div>
                            <img src={products.img} alt="Featured_products" className='featured_products' />

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
