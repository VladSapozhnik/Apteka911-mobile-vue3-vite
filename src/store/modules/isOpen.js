
export default {
    state: {
        isOpenPopup: false,
    },
    mutations: {
        UPDATE_IS_OPEN_POPUP(state, isOpen) {
            state.isOpenPopup = isOpen;
        },
    },
    getters: {
        IS_OPEN_POPUP(state) {
            return state.isOpenPopup;
        },
    }
}