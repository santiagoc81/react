import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const IconoCarrito = <FontAwesomeIcon icon={faCartShopping} />


const CartWidget = () => {
    return (
        <div className='iconoCarrito'>
            {IconoCarrito} 0
        </div>
    )
}

export default CartWidget