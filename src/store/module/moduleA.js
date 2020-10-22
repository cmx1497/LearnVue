export  default {
    state:{
        name:'色批'
    },
    mutations:{
        updateName(state,payload){
            state.name = payload
        }
    },
    actions:{
        aUpdateName(context){
            setTimeout(()=>{
                context.commit('updateName','老实人')
            },2000)
        }
    },
    getters:{
        fullName(state){
            return state.name + '张凯玉'
        },
        fullName2(state,getters){
            return getters.fullName + '天下第一'
        },
        fullName3(state,getters,rootState){
            return getters.fullName2 + rootState.counter
        },
    },
}