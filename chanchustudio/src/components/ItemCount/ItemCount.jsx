import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);
    const [addedToCart, setAddedToCart] = useState(false);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(quantity);
        setAddedToCart(true);
    };

    return (
        <div>
            {addedToCart ? (
                <Link to="/cart">
                    <button className="btn btn-primary">Terminar Compra</button>
                </Link>
            ) : (
                <div className='text-center'>
                    <div className="d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary" onClick={decrement}> - </button>
                        <h4 className="mx-3 mb-0">{quantity}</h4>
                        <button className="btn btn-primary" onClick={increment}> + </button>
                    </div>


                    <div>
                        <button className='btn btn-primary mt-3' onClick={handleAddToCart} disabled={!stock}> Agregar al Carrito</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemCount;
