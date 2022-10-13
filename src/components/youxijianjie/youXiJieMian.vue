<template>
  <div class="div1">
    <h2 style="font-size: 23px;margin: 28px 0 18px 0">游戏界面</h2>
    <el-image
        style="width: 100%;height: 100%"
        :src="picture"
        :fit="fit">
    </el-image>
  </div>
</template>

<script>
import picture from '../../assets/pixiv/gal1.jpg'
export default {
  name: "youXiJieMian",
  data(){
    return{
      picture:picture,
      fit:"cover"
    }
  }
}
</script>

<style scoped>
.div1{
  width: 90%;
  margin: 18px auto 27px auto;
}
</style>