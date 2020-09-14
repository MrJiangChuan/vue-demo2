<template>
  <div id="app">
    <!--常用表单双向数据绑定-->
    <form action="https://www.baidu.com">
      姓名：<input type="text" v-model="name" /><br>
      性别：<input type="radio" value="0" v-model="gender" />男
            <input type="radio" value="1" v-model="gender" />女<br>
      爱好：<input type="checkbox" value="0" v-model="hobby" />篮球
            <input type="checkbox" value="1" v-model="hobby" />唱歌
            <input type="checkbox" value="2" v-model="hobby" />写代码<br>
      职业：<select v-model="job" multiple="true">
              <option value="0">请选择职业</option>
              <option value="1">程序员</option>
              <option value="2">清洁工</option>
              <option value="3">机械工程师</option>
              <option value="4">项目经理</option>
            </select><br>
      个人简介：<textarea v-model="profile"></textarea><br>
      <input type="submit" value="提交" v-on:click.prevent="submit"/>
    </form>
    <hr/>
    <!--表单域修饰符-->
    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" /><br>
    <input type="number" v-model.number="result" /><br>
    <input type="button" value="计算" @click="result=num1+num2" /><br>
    <input type="text" v-model.trim="text" />
    <input type="button" value="字符个数" @click="count" /><br>
    <input type="text" v-model.lazy="msg" /><br>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
        name: '',
        gender: '0',
        hobby: ['0','1'],
        job: ['1','2'],
        profile: '',
        num1: 0,
        num2: 0,
        result: 0,
        text: '',
        msg: ''
    }
  },
  methods: {
    submit() {
      console.log(this.name)
      console.log(this.gender)
      console.log(this.hobby)
      console.log(this.job)
      console.log(this.profile)
    },
    count() {
      console.log(this.text.length)
    }
  },
  computed: {

  }
}
</script>

<style>
#app {
  /* text-align: center; */
/*  color: #2c3e50; */
/*  margin-top: 60px; */
}
</style>
