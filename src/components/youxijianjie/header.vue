<template>
  <div>
    <div class="div1">
      <el-tag style="margin-left: 20px" type="warning" effect="dark" size="mini">公告</el-tag>
      <span style="margin-left: 10px" class="fontsize">暂无资源提供，现仅提供游戏相关信息</span>
    </div>
    <div class="div2">
      <h2>GalGame游戏名称</h2>
      <div class="div3" style="margin-top: 3px">
        <el-tag type="info" effect="dark" size="mini">全年龄</el-tag>
        <span style="margin: 0 10px 0 20px;" class="spf">20年7月28日</span>
        <i class="icon el-icon-star-off">
          <span class="spf">12</span>
        </i>
        <i class="icon el-icon-user">
          <span class="spf">12k</span>
        </i>
        <el-tooltip content="告诉站长资源已失效!" placement="bottom" effect="light">
          <el-button type="info" size="mini" icon="el-icon-share">失效申报</el-button>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "header"
}
</script>

<style scoped>
.div1{
  background-color: #fff3cd;
  height: 50px;
  width: 90%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 27px auto 8px auto;
  border-radius: 5px;
}
.div2{
  width: 90%;
  margin: 18px auto 27px auto;
}
.icon{
  margin-left: 35px;
  font-size: 13px;
  /*float: right;*/
  padding-right: 0px;
  padding-top: 7px;
  color: #797676;
}
.spf{
  font-weight: lighter;
  font-size: 13px;
}
.el-button{
  float: right;
  margin-top: -4px;
}
</style>