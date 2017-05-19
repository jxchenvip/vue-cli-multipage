const SET_MENU = "set_menu";

const state = {
    list: []
}

// getters
const getters = {
    list: state => state.list
}

// actions
const actions = {
    [SET_MENU](context, newList) {
        context.commit(SET_MENU, newList);
    }
}

// mutations
const mutations = {
    [SET_MENU](state, newList) {
        state.list = newList;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
