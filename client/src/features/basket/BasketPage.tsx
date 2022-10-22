import { Button, Grid,  Typography } from '@mui/material';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
//import agent from '../../app/api/agent';
//import { useStoreContext } from '../../app/context/StoreContext';
import {  useAppSelector } from '../../app/store/configureStore';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';

const BasketPage = () => {
    const { basket  } = useAppSelector(state => state.basket);
    
    // const [status, setStatus] = useState({
    //     loading: false,
    //     name: ""
    // });

    // function handleAddItem(productId: number, name: string){
    //     setStatus({loading: true, name});
    //     agent.Basket.addItem(productId)
    //         .then(basket => dispatch(setBasket(basket)))
    //         .catch(error => console.log(error))
    //         .finally(() => setStatus({loading: true, name: ""}))
    // }

    // function handleRemoveItem(productId: number, quantity = 1 , name: string){
    //     setStatus({loading: true, name});
    //     agent.Basket.removeItem(productId, quantity)
    //         .then(() => dispatch(removeItem({productId, quantity})))
    //         .catch(error => console.log(error))
    //         .finally(() => setStatus({loading: true, name: ""}))
    // }

    if(!basket) return <Typography variant='h3'>Your basket is empty</Typography>

  return (
    <>
    <BasketTable items={basket.items} />
    <Grid container>
            <Grid item xs={6} />
            <Grid item xs={6}>
                <BasketSummary />
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  size="large"
                  fullWidth
                >
                  Checkout
                </Button>
            </Grid>
    </Grid>
    </>
  )
}

export default BasketPage