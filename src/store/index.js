import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions  from "./actions";
import getters from "./getters";
import moduleA  from "./module/moduleA";
//1.安装插件
Vue.use(Vuex)


//2.创建对象
// const moduleA ={
//     state:{
//         name:'色批'
//     },
//     mutations:{
//         updateName(state,payload){
//             state.name = payload
//         }
//     },
//     actions:{
//         aUpdateName(context){
//             setTimeout(()=>{
//                 context.commit('updateName','老实人')
//             },2000)
//         }
//     },
//     getters:{
//         fullName(state){
//             return state.name + '张凯玉'
//         },
//         fullName2(state,getters){
//             return getters.fullName + '天下第一'
//         },
//         fullName3(state,getters,rootState){
//             return getters.fullName2 + rootState.counter
//         },
//     },
// }
const store = new Vuex.Store({
    state: {
        counter: 1000,
        student: [
            {name: '1', age: 18},
            {name: '2', age: 19},
            {name: '3', age: 20},
            {name: '4', age: 21},
        ],
        info: {
            name: 'chen',
            age: 21
        }
    },
    //在不同的JS文件下分开引用
    mutations,
    actions,
    getters,

    //在同一个js文件下
    // mutations:{
    //     add(state){
    //         state.counter++
    //     },
    //     del(state){
    //         state.counter--
    //     },
    //     incrementCount(state,count){
    //         state.counter += count
    //     },
    //     addStudent(state,stu){
    //         state.student.push(stu)
    //     },
    //     updateInfo(state){
    //         state.info.name = 'ming'
    //     }
    // },
    // actions:{
    //     //context:上下文
    //     // aUpdateInfo(context,payload){
    //     //     setTimeout(()=>{
    //     //         context.commit('updateInfo')
    //     //         console.log(payload)
    //     //     },1000)
    //     // },
    //     aUpdateInfo(context,payload) {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 context.commit('updateInfo')
    //                 console.log(payload)
    //                 resolve('1111')
    //             }, 1000)
    //         })
    //     }
    // },
    // getters:{
    //         powerCounter(state){
    //              return state.counter * state.counter
    //         },
    //         more20stu(state){
    //             return state.student.filter(item => item.age>=20)
    //         },
    //         more20stuLength(state,getters){
    //             return getters.more20stu.length
    //         },
    //         moreAgestu(state){
    //             // return function (age) {
    //             //     return state.student.filter( s=> s.age >= age)
    //             // }
    //             return age => {return state.student.filter( s=> s.age >= age)}
    //         },
    //
    //
    // },
    modules:{
        a:moduleA
    },
})

//3.导出store独享
export default store;