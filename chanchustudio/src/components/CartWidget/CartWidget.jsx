import React from 'react';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' 


const IconoCarrito = <FontAwesomeIcon icon={faCartShopping} />


const CartWidget = () => {

    const {totalQuantity } = useContext(CartContext)

    return (
        
        <div className='nav-link'>
            <Link to='/cart'>
                {IconoCarrito}
                {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </Link>
        </div>
        

    )
}

export default CartWidget