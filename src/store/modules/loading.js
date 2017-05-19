const SHOWLOADING = "showLoading";
const HIDELOADING = "hideLoading";

const state = {
    show: true
}

// getters
const getters = {
    show: state => state.show
}

// actions
const actions = {
    [SHOWLOADING](context) {
        console.log('show')
        context.commit(SHOWLOADING);
    },
    [HIDELOADING](context) {
        console.log('hide')
        context.commit(HIDELOADING);
    }
}

// mutations
const mutations = {
    [SHOWLOADING](state) {
        console.log('show-commit')
        state.show = true;
    },
    [HIDELOADING](state) {
        console.log('hide-commit')
        state.show = false;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
