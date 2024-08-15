import React from 'react';
import {useState, useEffect } from 'react';

import ItemDetail from './../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProduct(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
console.log(product)

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


