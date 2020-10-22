<template>
  <div id="app">
    <h2>------App内容:modules中的内容--------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName()">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asynUpdateName()">异步修改名字</button>
    <h2>------App内容--------</h2>
    <p>{{$store.state.counter}}</p>
    <button @click="add">+</button>
    <button @click="del ">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu()">添加学生</button>
    <button @click="updateinfo()">修改信息</button>
    <p>{{$store.state.info.name}}</p>
    <h2>------App内容：getters相关信息--------</h2>
    <h2>平方：{{$store.getters.powerCounter}}</h2>
    <h2>age>=20：{{$store.getters.more20stu}}</h2>
    <h2 style="color: red">age>=20的长度：{{$store.getters.more20stuLength}}</h2>
    <h2 style="color: blue">age>=21：{{$store.getters.moreAgestu(21)}}</h2>
    <h2>------Hello Vuex内容--------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      message:'我是cli3',
      counter:0
    }
  },
  methods:{
    add(){
      this.$store.commit('add')
    },
    del(){
      this.$store.commit('del')
    },
    addCount(count){
      this.$store.commit('incrementCount',count)
    },
    addStu(){
      const stu = {id:104,name:'5',age:22}
      this.$store.commit('addStudent',stu)
    },
    updateinfo(){
      // this.$store.dispatch("aUpdateInfo",{
      //   payload:'我是携带的信息',
      //   success:()=>{
      //     console.log('已经结束')
      //   }
      // })
      this.$store.dispatch('aUpdateInfo','我是携带的信息')
        .then(res =>{
          console.log('里面完成了')
          console.log(res)
        })
    },
    updateName(){
      this.$store.commit("updateName",'老色批')
    },
    asynUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

</style>
