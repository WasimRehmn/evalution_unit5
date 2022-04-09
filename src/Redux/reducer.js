import { Store_data } from "./action";

export const Reducer = (store = { loginData: {} }, action) => {
    switch (action.type) {
        case Store_data:
            return {
                ...store,
                loginData: action.payload,
            };

        default:
            return store;
    }
};
