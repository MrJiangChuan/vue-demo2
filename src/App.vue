<template>
  <div id="app">
    <h3>1、常用表单双向数据绑定</h3>
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
    <h3>2、表单域修饰符</h3>
    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" /><br>
    <input type="number" v-model.number="result" /><br>
    <input type="button" value="计算" @click="result=num1+num2" /><br>
    <input type="text" v-model.trim="text" />
    <input type="button" value="字符个数" @click="count" /><br>
    <input type="text" v-model.lazy="msg" /><br>
    <h3>{{msg}}</h3>
    <hr/>
    <h3>3、自定义指令</h3>
    <input type="text" v-focus v-bgcolor="bgcolor" />
    <hr/>
    <h3>4、计算属性[与方法区别在于是否具有缓存]</h3>
    <h4>{{computeFun1}}</h4>
    <h4>{{computeFun1}}</h4>
<!--    <h3>{{methodFun1()}}</h3>
    <h3>{{methodFun1()}}</h3> -->
    <hr/>
    <h3>5、侦听器</h3>
    <input type="text" v-model="wahch1" /><br>
    <input type="text" v-model.trim.lazy="infoCheck" /><span>{{tip}}</span>
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
        msg: '',
        bgcolor: {color: 'red'},
        msg1: 'ABCDEFG',
        wahch1: 'abcd',
        infoCheck: '',
        tip: ''
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
    },
    methodFun1: function() {
      // return this.msg1.split('').reverse().join('')
      let sum=0
      for(let i=0;i<1000000000;i++){
        sum += i
      }
      return sum
    }
  },
  //计算属性
  computed: {
    computeFun1: function() {
      // return this.msg1.split('').reverse().join('')
      let sum=0
      for(let i=0;i<1000000000;i++){
        sum += i
      }
      return sum
    }

  },
  //侦听器
  watch: {
    wahch1: function(val) {
      console.log(val)
    },
    infoCheck: function(val) {
      this.tip = '正在查询...'
      // var that = this
      // setTimeout(function() {
      //   if(val=='admin'){
      //     that.tip = '用户名已存在，请更换一个'
      //   }else{
      //     that.tip = '注册成功'
      //   }
      // },2000)
      setTimeout(()=>{
          if(val=='admin'){
            this.tip = '用户名已存在，请更换一个'
          }else{
            this.tip = '注册成功'
          }
      },2000)
    }
  },
  //局部指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    },
    bgcolor: {
      bind: function(el, binding) {
        el.style.backgroundColor = binding.value.color
      }
    }
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
