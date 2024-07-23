const products = [
    {
        id: '1',
        name: 'Aerografo Hamilton',
        category: 'herramientas',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/94/PaascheAirbrush.jpg',
        price: 1500,
        description: 'Aerografo ',
        stock: '20',
    },
    {
        id: '2',
        name: 'Pintura',
        category: 'pinturas',
        img: 'https://m.media-amazon.com/images/I/615uVnMwtnL._AC_SL1500_.jpg',
        price: 500,
        description: 'Pintura Tamiya Negra',
        stock: '10',
    } ,
    {
        id: '3',
        name: 'Compresor',
        category: 'equipamiento',
        img: 'https://m.media-amazon.com/images/I/51lls162PSL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        price: 5000,
        description: 'Compresor para aerografo',
        stock: '5',
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve(products)  
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve(products.find(prod => prod.id === productId)  )
        }, 500)
    })
}


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve(products.filter(prod => prod.category == category)  )
        }, 500)
        
    })
}
