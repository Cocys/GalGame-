<template>
  <div>
    <el-menu id="menu1" :default-active="activeIndex" mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b" v-on:select="handleSelect">
      <el-menu-item @click="pushShow" index="1">
          <i class="el-icon-apple" style="margin: 0 0 2px -5px"></i>主页
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-grape" style="margin: 0 0 2px -5px"></i>PC游戏
        </template>
        <el-menu-item index="2-1">全年龄</el-menu-item>
        <el-menu-item index="2-2">xxxx</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">GalGame</template>
          <el-menu-item index="2-3-1">选项1</el-menu-item>
          <el-menu-item index="2-3-2">选项2</el-menu-item>
          <el-menu-item index="2-3-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item @click="pushShow2" index="3">
          <i class="el-icon-watermelon" style="margin: 0 0 2px -5px"></i>游戏CG
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-pear" style="margin: 0 0 2px -5px"></i>图集资源
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-orange" style="margin: 0 0 2px -5px"></i>新人必读
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-coffee" style="margin: 0 0 2px -5px"></i>补档专区
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-ice-tea" style="margin: 0 0 2px -5px"></i>藏乐阁
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-ice-drink" style="margin: 0 0 2px -5px"></i>帮助中心
      </el-menu-item>
      <el-menu-item id="test1">
<!--        <div>-->
<!--          <span id="span1">用户昵称</span>-->
<!--          <el-avatar :src="img1"></el-avatar>-->
<!--        </div>-->
        <el-tooltip effect="dark" content="点我登陆" placement="bottom">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </el-tooltip>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<!--导航栏-->

<script>
import img1 from '../../assets/pixiv/pixiv1.jpg'
export default {
  name: "shouYe.vue",
  data() {
    return {
      activeIndex: '1',
      img1: img1
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    pushShow(){
      this.$router.push("/")
    },
    pushShow2(){
      this.$router.push("/about")
    }
  }
}
</script>

<style scoped>
 #test1{
   float: right;
   margin-right: 50px;
 }
 #menu1{
   padding-left: 132px;
 }
 #span1{
   margin-right: 8px;
   font-size: 10px;
   color: #eedac5;
   text-decoration: none;
 }

 /* 超小设备 (手机, 600px 以下屏幕设备) */
 /*
  响应式布局后面再更改
 */
 @media only screen and (max-width: 600px) {
   #menu1{
     width: 100%;
     padding: 0;
     margin: 0;
   }

   .el-menu-item{
     display: none;
   }

   #test1{
     display: block;
     margin-right: 0px;
   }
 }

</style>