<template>
  <div>
    <h1>{{$store.getters.powerCounter}}</h1>
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
