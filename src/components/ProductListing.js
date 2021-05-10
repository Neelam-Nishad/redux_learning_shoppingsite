import React, {useEffect} from 'react'
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from '../redux/actions/ProductAction';



const ProductListing = () => {
    //redux hook to get access of state
    const products = useSelector((state) => state);

    //Redux hook to dispatch
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("err", err);
        });
        console.log(response.data);
        dispatch(setProduct(response.data));
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    console.log("products :", products)

    //console.log(products);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
