import React from 'react';
import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../../asyncMock';
import ItemList from './../ItemList/ItemList';
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()


    useEffect(() => {
        const asyncFunct = categoryId ? getProductsByCategory : getProducts

        asyncFunct(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


        return (
            <div>
                <h1>Seleccione el producto a comprar</h1>
                <ItemList products={products}/>
            </div>
        )
    }

export default ItemListContainer