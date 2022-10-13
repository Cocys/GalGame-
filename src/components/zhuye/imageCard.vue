<template>
  <el-card :body-style="{ padding: '0px' }" class="box-card">
    <div id="top">
      <a target="_blank" href="https://www.bilibili.com/">
        <el-image
            style="width: 100%;height: 308px"
            :src="picture"
            :fit="fit">
        </el-image>
      </a>
    </div>
    <div id="bottom">
      <a href="#" style="text-decoration: none;color: #000000;"><span class="fontsize">图集名称</span></a>
      <br>
      <div>
        <a href="#" id="sp1">
          画集/设定
        </a>
        <i class="icon el-icon-star-off">
          <span class="spf">12</span>
        </i>
        <i class="icon el-icon-chat-square">
          <span class="spf">111</span>
        </i>
      </div>
    </div>
  </el-card>
</template>

<script>
import picture from '../../assets/pixiv/pixiv9.png'
export default {
  name: "imageCard",
  data(){
    return{
      fit:'cover',
      picture:picture
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 202px;
  height: 360px;
}
#top{
  height: 308px;
}
#bottom{
  height: 52px;
  padding: 7px 0px 0px 15px;
}
#sp1{
  font-size: 10px;
  color: #89b08e;
  text-decoration: none;
}
.icon{
  font-size: 10px;
  float: right;
  padding-right: 9px;
  padding-top: 7px;
  color: #797676;
}
.spf{
  font-weight: lighter;
}
</style>