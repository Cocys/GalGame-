<template>
  <div class="box">
    <div class="img1">
      <a href="https://bilibili.com" target="_blank">
        <el-image
          style="width: 100px; height: 100px"
          :src="photo"
          :fit="fit"></el-image>
      </a>
    </div>
    <div class="content">
      <p>相关GalGame信息相关GalGame信息相关GalGame信</p>
    </div>
    <div class="footer">
      <span style="float: left;margin-top: -2px" class="icon">20年7月16日</span>
      <i class="icon el-icon-star-off">
        <span class="spf">12</span>
      </i>
      <i class="icon el-icon-chat-square">
        <span class="spf">111</span>
      </i>
      <i class="icon el-icon-user">
        <span class="spf">12k</span>
      </i>
    </div>
  </div>
</template>

<script>
import photo from '@/assets/pixiv/pixiv1.jpg'
export default {
  name: "youXiXiangGuanLink",
  data(){
    return{
      photo,
      fit:'cover'
    }
  }
}
</script>

<style scoped>
  /*.el-card{*/
  /*  width: 50%;*/
  /*  background-color: rgb(238,238,238);*/
  /*  margin: 0px 0px 20px 40px;*/
  /*  border-radius: 5px;*/
  /*}*/
  .img1{
    background-color: rgb(238,238,238);;
    width: 30%;
    height: 100%;
    float: left;
    display: inline;
    border-radius: 5px;
  }
  .content{
    width: 70%;
    height: 60%;
    background-color: rgb(238,238,238);;
    display: inline;
    float: left;
    border-radius: 5px;
  }
  .box{
    width: 50%;
    height: 120px;
    background-color: rgb(238,238,238);
    margin: 0px 0px 20px 40px;
    border-radius: 5px;
  }
  .el-image{
    margin-top: 10px;
    margin-left: 12px;
  }
  p{
    font-weight: lighter;
    font-size: 16px;
    margin-top: 20px;
    margin-right: 10px;
  }
  .footer{
    width: 70%;
    height: 40%;
    float: left;
  }
  .icon{
    font-size: 10px;
    float: right;
    padding-right: 19px;
    padding-top: 27px;
    color: #797676;
  }
</style>