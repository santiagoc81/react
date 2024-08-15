import React from 'react';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContex';
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext (CartContext)

    if (totalQuantity === 0 ){
        return  (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to="/" className='Options'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="btn btn-primary">Limpiar Carrito</button>
            <Link to="/checkout" className='Options'><button className="btn btn-success" >Checkout</button></Link>
        </div>
    )
}

export default Cart;
