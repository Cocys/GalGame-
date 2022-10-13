<template>
  <div id="app">
    <el-backtop :bottom="60"></el-backtop>
    <el-container>
      <el-header class="header">
        <shouYe/>
      </el-header>
<!--      路由内容展示组件的替换内容-->
<!--      <zhu-ye-content/>-->
      <router-view/>
      <el-divider id="divder2"></el-divider>
      <el-footer height="50px">
        Copyright © 2022 Gal領域
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import shouYe from './components/zhuye/navBar.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:null
    }
  },
  components: {
    shouYe,

  },
  mounted() {
    this.$router.push("/about")
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .el-row{
    margin-bottom: -20px;
  }
  .el-container .el-header{
    padding: 0;
  }
  .el-container .el-main{
    padding: 0;
    overflow-x: hidden
  }
  .el-container .el-footer{
    padding: 0;
    text-align: center;
  }
  .el-row .el-col{
    display: flex;
    justify-content: center;
  }
  h3{
    font-size: 27px;
    padding-left: 155px;
    margin-bottom: 10px;
  }
  #divder2{
    margin-top: 0;
    margin-bottom: 0;
  }
  .el-container .el-footer{
    background-color: rgb(84, 92, 100);
    color: white;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
  }
  body{
    /*background-image: url("./assets/pixiv/pixiv23.png");*/
    /*background-size:cover*/
    background-color: #fff9f9;
  }
  .el-main{
    background-color: white;
  }
  .fontsize{
    font-weight: lighter;
    font-size: 14px
  }
</style>
