import {  useEffect } from 'react';
//import agent from '../../app/api/agent';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import LoadingComponent from '../../layout/LoadingComponent';
//import { Product } from '../../models/product'
import { fetchProductsAsync, productSelectors } from './catalogSlice';
import ProductList from './ProductList';



const Catalog = () => {
    //const [products, setProducts] = useState<Product[]>([])
    const products = useAppSelector(productSelectors.selectAll);
    const { productsLoaded , status} = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();
    //const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded , dispatch])

  if(status.includes("pending")) return <LoadingComponent message="Loading Products ..." />

  return (
    <>
        <ProductList products={products} />
      
      </>
  )
}

export default Catalog