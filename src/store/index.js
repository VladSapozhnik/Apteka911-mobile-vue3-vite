import Vuex from 'vuex';
import Carts from "../store/modules/Carts";
import isOpen from "../store/modules/isOpen";
export default new Vuex.Store ({
    modules: {
        Carts,
        isOpen
    }
})