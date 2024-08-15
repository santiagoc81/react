import React from 'react';
import { createContext, useState, useContext } from 'react'
import ItemCount from './../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContex';

const ItemDetail = ({id,name,img,price,description,stock,category}) => {

    const[quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
        <div className="card">
            <img className="card-img-top imgFija" src={img} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <section>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock: {stock}
                    </p>
                </section>
                <footer className='ItemFooter'>
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail