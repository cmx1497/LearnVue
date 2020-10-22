export  default {
        // //context:上下文
        // aUpdateInfo(context,payload){
        //     setTimeout(()=>{
        //         context.commit('updateInfo')
        //         console.log(payload)
        //     },1000)
        // }
        aUpdateInfo(context,payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload)
                    resolve('1111')
                }, 1000)
            })
        }
}