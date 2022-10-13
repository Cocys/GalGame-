<template>
  <el-card :body-style="{ padding: '0px' }" class="box-card">
    <div id="top">
      <a target="_blank" href="https://www.bilibili.com/">
        <img src="../../assets/pixiv/pixiv1.png" width="100%" height="158" style="margin: 0;padding: 0">
      </a>
    </div>
    <div id="bottom">
      <a href="#" style="text-decoration: none;color: #000000;">
        <span class="fontsize">GalGame游戏名称</span>
      </a>
      <br>
      <div>
        <a href="#" id="sp1">
          新作/CG
        </a>
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
  </el-card>
</template>

<!--卡片-->

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "card"
}
</script>

<style scoped>
.box-card {
  width: 260px;
  height: 210px;
}
#top{
  height: 158px;
}
#bottom{
  height: 52px;
  padding: 7px 0px 0px 15px;
}
#sp1{
  font-size: 10px;
  color: #f3a6cc;
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