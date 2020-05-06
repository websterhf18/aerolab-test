import {useState, useEffect} from 'react';
import ApiProvider from '../providers/ApiProvider';

import { useDispatch } from "react-redux";
import appActions from "../store/appActions";

export default function useProducts(){
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        ApiProvider.getProducts().then((response) => {
            dispatch(appActions.setProductsAction(response));
        });
    }
    useEffect(() => {    
        fetchProducts();
    }, []);
    return;
}