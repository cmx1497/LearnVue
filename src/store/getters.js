export  default {
        powerCounter(state){
            return state.counter * state.counter
        },
        more20stu(state){
            return state.student.filter(item => item.age>=20)
        },
        more20stuLength(state,getters){
            return getters.more20stu.length
        },
        moreAgestu(state){
            // return function (age) {
            //     return state.student.filter( s=> s.age >= age)
            // }
            return age => {return state.student.filter( s=> s.age >= age)}
        },
}