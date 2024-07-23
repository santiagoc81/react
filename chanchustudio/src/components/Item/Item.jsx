import './Item.css';
import React from 'react';
import { NavLink, Link} from 'react-router-dom';


const Item = ({id,name,img,price,description,category,stock}) => {

    return (
        <div className="card">
            <img className="card-img-top imgFija" src={img} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
                </section>
                <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='btn btn-primary'>Ver Detalle</Link>
                </footer>
            </div>
        </div>
    )
}

export default Item