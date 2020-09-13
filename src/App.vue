<template>
  <div id="app">
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
        profile: ''
    }
  },
  methods: {
    submit() {
      console.log(this.name)
      console.log(this.gender)
      console.log(this.hobby)
      console.log(this.job)
      console.log(this.profile)
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
  margin-top: 60px;
}
</style>
