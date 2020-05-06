import {useState, useEffect} from 'react';
import ApiProvider from '../providers/ApiProvider';

import { useDispatch } from "react-redux";
import appActions from "../store/appActions";

export default function useUser(){
    const dispatch = useDispatch();
    const fetchUser = async () => {
        ApiProvider.getUserData().then((response) => {
            var userObject = {
                userId: response._id,
                userPoints: response.points,
                userName: response.name
            }
            dispatch(appActions.setUserAction(userObject));
        });
    }

    useEffect(() => {    
        fetchUser();
    }, []);
    return;
}