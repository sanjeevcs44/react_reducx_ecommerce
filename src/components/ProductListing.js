import React, { useEffect } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productAction'
import ProductComponent from './ProductComponent';

const ProductListing = () => {

    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err);
        });
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;