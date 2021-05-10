import {ActionType} from "../constants/ActionType";

export const setProduct = (products) => {
    return{
        type : ActionType.SET_PRODUCTS,
        payload : products,
    };
};

export const selectedProduct = (product) => {
    return {
        type : ActionType.SELECTED_PRODUCT,
        payload : product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type : ActionType.RREMOVE_SELECTED_PRODUCT
    };
}