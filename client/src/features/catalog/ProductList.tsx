import {  Grid } from "@mui/material"
import { useAppSelector } from "../../app/store/configureStore";
import { Product } from "../../models/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {
    products: Product[];
}

const ProductList = ({products}: Props) => {
  const { productsLoaded } = useAppSelector(state => state.catalog);
  return (
    <Grid container spacing={4}>
        {products.map(product => (
            <Grid key={product.id} item xs={4}>
              { !productsLoaded ? (
                <ProductCardSkeleton />
              ) : (
                <ProductCard  product={product} />
              )}
                
            </Grid>
          
        ))}
      </Grid>
  )
}

export default ProductList