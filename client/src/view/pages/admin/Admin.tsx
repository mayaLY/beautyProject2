import  { useEffect, useState } from 'react'
import { getAllProducts } from '../../../controllers/product/getAllProducts'
import { Product } from '../../../model/productModel'

const Admin = () => {
const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getAllProducts().then((products) => {
            console.log('Products:', products)
            setProducts(products)
        }).catch((error) => {
            console.error('Error fetching products:', error)
        })
    }, [])
  return (
    <div>
        {products.map((product) => (<p key={product._id}>{product.name}</p>))}
    </div>
  )
}

export default Admin