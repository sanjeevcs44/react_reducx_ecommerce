import { ActionType } from '../constants/action-type'
const initialState = {
    products: []
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return { ...state, products: payload };

        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return { ...state, ...payload };

        case ActionType.REMOVE_SELECTED_PRODUCTS:
            return {};

        default:
            return state;
    }
}