import React from 'react';
import {useState, useEffect } from 'react';
import {getProductsById} from '../../../asyncMock';
import ItemDetail from './../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4">
                <ItemDetail {...product} />
                </div>
            </div>
        </div>
    )
    
}

export default ItemDetailContainer


