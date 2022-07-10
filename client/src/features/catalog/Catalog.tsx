import { useState, useEffect } from 'react';
import agent from '../../app/api/agent';
import LoadingComponent from '../../layout/LoadingComponent';
import { Product } from '../../models/product'
import ProductList from './ProductList';



const Catalog = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.catalog.list().then(products => setProducts(products))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [])

  if(loading) return <LoadingComponent message="Loading Products ..." />

  return (
    <>
        <ProductList products={products} />
      
      </>
  )
}

export default Catalog