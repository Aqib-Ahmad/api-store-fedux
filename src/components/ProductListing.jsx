import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../redux/action/aproductAction';


const ProductListing = () => {

    // -------------------------------
    const fetchProducts = async ()=>{
        let  response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
             console.log(err);
         })
         dispatch(setProducts(response.data))
     }
     
    useEffect(()=>{
        fetchProducts()
    })

// ---------------------------
    const products =useSelector(state=>state);
    const dispatch = useDispatch()
    // console.log('products' , products);
   
  return (
    <>
    <h1>ProductListing</h1>
    <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </>
  )
}

export default ProductListing
