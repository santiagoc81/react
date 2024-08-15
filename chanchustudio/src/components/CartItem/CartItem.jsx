import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContex';

const CartItem = ({ img, id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <section>
                            <p className="Info">
                                Precio: ${price}
                            </p>
                            <p className="Info">
                                Cantidad: {quantity}
                            </p>
                            <p className="Info">
                            Subtotal: ${price * quantity}
                            </p>
                            </section>
                            <footer className='ItemFooter'>
                            <button onClick={() => removeItem(id)} className="btn btn-danger">Eliminar</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CartItem;
