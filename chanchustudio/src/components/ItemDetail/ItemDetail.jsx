import React from 'react';
import ItemCount from './../ItemCount/ItemCount'

const ItemDetail = ({id,name,img,price,description,stock,category}) => {

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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
                </footer>
            </div>
        </div>
    )
}

export default ItemDetail