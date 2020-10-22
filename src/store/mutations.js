export  default {
        add(state){
            state.counter++
        },
        del(state){
            state.counter--
        },
        incrementCount(state,count){
            state.counter += count
        },
        addStudent(state,stu){
            state.student.push(stu)
        },
        updateInfo(state){
            state.info.name = 'ming'
        }
}