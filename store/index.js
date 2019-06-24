import VuexPersistence from 'vuex-persist'


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});


export const state = () => ({
    authUser: null
});

export const mutations = {
    login(state, user) {
        state.authUser = user;
        this.$router.push('/')
    },
    logout(state, user) {
        state.authUser = null 
    }, 
}
 


const store = {
    plugins: [vuexLocal.plugin]
}