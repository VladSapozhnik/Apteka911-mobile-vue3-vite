import axios from "axios";
export default {
    state: {
        cartsArray: [],
        cartCount: 0,
        basketArray: [],
        isLoading: false
    },
    mutations: {
        UPDATE_CARTS(state, cart) {
            setTimeout(() => {
                state.cartsArray = cart;
                if (cart.length) state.isLoading = true;
            }, 3000)
        },
        UPDATE_BASKET(state, basket) {
            let found = state.basketArray.find(product => product.id === basket.id);

            if (found) {
                state.basketArray = state.basketArray.filter(item => item.id !== basket.id);
                state.cartCount > 0 ? state.cartCount-- : 0;
            } else {
                state.basketArray.push(basket);
                basket['quantity'] = 1;
                state.cartCount++;
            }
        }
    },
    actions: {
        GET_CART_API({commit}) {
            return axios(`./static/Carts.json`)
                .then(response => response.data)
                .then(carts => commit('UPDATE_CARTS', carts))
                .catch(() => 'Error animations')
        },
        SET_BASKET({commit}, cart) {
            commit('UPDATE_BASKET', cart);
        }
    },
    getters: {
        CARTS_RESULT(state) {
            if (state.cartsArray.length) {
                return state.cartsArray;
            }
        },
        BASKET(state) {
            return state.basketArray;
        },
        BASKET_CART_COUNT(state) {
            return state.cartCount;
        },
        BASKET_TOTAL_PRICE(state) {
            let total = state.basketArray.reduce((acc, item) => {
                acc += item.currentPrice;
                return acc;
            }, 0)

            return total.toFixed(2);
        },
        IS_LOADING(state) {
            return state.isLoading;
        }
    }
}